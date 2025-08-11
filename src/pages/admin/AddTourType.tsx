import { AddTourTypeModal } from "@/components/modules/Tour-Type/AddTourModal";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { useGetTourTypeQuery } from "@/redux/features/tour/tour.api";
import { Trash2 } from "lucide-react";

const AddTourType = () => {
  const { data } = useGetTourTypeQuery(undefined);
  console.log(data);
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
            {data?.data?.map((item: { name: string }) => (
              <TableRow>
                <TableCell className="font-medium">{item?.name}</TableCell>
                <TableCell className="font-medium text-end">
                  <Button>
                    <Trash2></Trash2>
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

export default AddTourType;
