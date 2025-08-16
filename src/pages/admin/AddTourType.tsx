import { DeleteConfirmation } from "@/components/DeleteConfirmation";
import { AddTourTypeModal } from "@/components/modules/Admin/Tour-Type/AddTourModal";
import { Button } from "@/components/ui/button";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import {
  useGetTourTypeQuery,
  useRemoveTourTypeMutation,
} from "@/redux/features/tour/tour.api";
import { Trash2 } from "lucide-react";
import { toast } from "sonner";
import { useState } from "react";

const AddTourType = () => {
  const [currentPage, setCurrentPage] = useState(1);
  console.log(currentPage);
  const { data } = useGetTourTypeQuery({ page: currentPage });

  const [removeTourTypes] = useRemoveTourTypeMutation();
  const handleRemoveTourType = async (tourId: string) => {
    const toastId = toast.loading("Removing....");
    try {
      const res = await removeTourTypes(tourId).unwrap();
      if (res.success) {
        toast.success("Removed", { id: toastId });
      }
    } catch (error) {
      console.log(error);
    }
  };

  const totalPage = data?.meta?.totalPage;
  return (
    <div className="w-full max-w-7xl mx-auto p-7">
      <div className="border border-muted rounded-md">
        <div className="flex justify-between">
          <h1 className="text-xl font-semibold">Tour Type</h1>

          <AddTourTypeModal></AddTourTypeModal>
        </div>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Name</TableHead>
              <TableHead className="text-end">Action</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {data?.data?.map((item: { _id: string; name: string }) => (
              <TableRow>
                <TableCell className="font-medium">{item?.name}</TableCell>
                <TableCell className="font-medium text-end">
                  <DeleteConfirmation
                    onConfirm={() => handleRemoveTourType(item._id)}
                  >
                    <Button>
                      <Trash2></Trash2>
                    </Button>
                  </DeleteConfirmation>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
      <div>
        <div>
          <Pagination>
            <PaginationContent>
              <PaginationItem>
                <PaginationPrevious
                  onClick={() => setCurrentPage((prev) => prev - 1)}
                  className={
                    currentPage === 1
                      ? "pointer-events-none opacity-50"
                      : "cursor-pointer"
                  }
                />
              </PaginationItem>

              {Array.from({ length: totalPage }, (_, idx) => idx + 1).map(
                (page) => (
                  <PaginationItem
                    key={page}
                    onClick={() => setCurrentPage(page)}
                  >
                    <PaginationLink isActive={currentPage === page}>
                      {page}
                    </PaginationLink>
                  </PaginationItem>
                )
              )}

              <PaginationItem>
                <PaginationNext
                  onClick={() => setCurrentPage((prev) => prev + 1)}
                  className={
                    currentPage === totalPage
                      ? "pointer-events-none opacity-50"
                      : "cursor-pointer"
                  }
                />
              </PaginationItem>
            </PaginationContent>
          </Pagination>
        </div>
      </div>
    </div>
  );
};

export default AddTourType;
