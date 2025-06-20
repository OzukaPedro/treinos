import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
export default function CardPage() {
  return (
    <div className="flex justify-center items-center h-screen">
      <Card className="w-full max-w-sm">
        <CardHeader>
          <CardTitle>Card Title</CardTitle>
          <CardDescription>Card Description</CardDescription>
          <CardAction>Card Action</CardAction>
        </CardHeader>
        <CardContent className="space-y-2">
          <Label>Label 1</Label>
          <Input placeholder="Input 1" />
          <Label>Label 2</Label>
          <Input placeholder="Input 2" />
        </CardContent>
        <CardFooter>
          <Button className="w-full " variant={"default"}>
            Submit
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
}
