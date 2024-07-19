import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

type StatusType = { statCode: string; statDesc: string }[];

export function TabsDemo() {
  const status: StatusType = [
    { statCode: "RQSTD", statDesc: "Requested" },
    { statCode: "PNDH", statDesc: "Pending on head" },
    { statCode: "APRH", statDesc: "Approved by head" },
    { statCode: "RJCH", statDesc: "Rejected by head" },
    { statCode: "PNDP", statDesc: "Pending on purchasing" },
    { statCode: "APRP", statDesc: "Approved by purchasing" },
    { statCode: "RJCP", statDesc: "Rejected by purchasing" },
    { statCode: "PNDE", statDesc: "Pending on EXECOM" },
    { statCode: "APRE", statDesc: "Approved by EXECOM" },
    { statCode: "RJCE", statDesc: "Rejected by EXECOM" },
    { statCode: "INPRG", statDesc: "In-progress" },
    { statCode: "CMPLT", statDesc: "Completed" },
    { statCode: "CNCLD", statDesc: "Cancelled" },
    { statCode: "RQSTDI", statDesc: "Requested Item" },
    { statCode: "CMPLTDI", statDesc: "Completed Item" },
    { statCode: "CNCLDI", statDesc: "Cancelled Item" },
    { statCode: "ONGNI", statDesc: "On-going Item" },
  ];

  return (
    <div>
      {/* START TABS */}
      <Tabs
        defaultValue={status[0].statCode}
        className="w-[800px] mx-auto mt-10"
      >
        {/* START TAB BUTTONS */}
        <TabsList className="w-full">
          <Carousel className="w-full">
            <CarouselContent className="-ml-1">
              {status.map((stat) => (
                <CarouselItem
                  key={stat.statCode}
                  className="pl-1 basis-auto border-r border-gray-400 last:border-none"
                >
                  <TabsTrigger value={stat.statCode}>
                    {stat.statDesc}
                  </TabsTrigger>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </TabsList>
        {/* END TAB BUTTONS */}

        {/* START TAB CONTENTS BUTTON */}
        {status.map((stat) => (
          <TabsContent key={stat.statCode} value={stat.statCode}>
            <Card>
              <CardHeader>
                <CardTitle>{stat.statDesc}</CardTitle>
                <CardDescription>
                  Make changes to your account here. Click save when you're
                  done.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-2">
                <div className="space-y-1">
                  <Label htmlFor="name">Name</Label>
                  <Input
                    id="name"
                    className="outline-none"
                    defaultValue="Pedro Duarte"
                  />
                </div>
                <div className="space-y-1">
                  <Label htmlFor="username">Username</Label>
                  <Input
                    id="username"
                    className="outline-none"
                    defaultValue="@peduarte"
                  />
                </div>
              </CardContent>
              <CardFooter>
                <Button>Save changes</Button>
              </CardFooter>
            </Card>
          </TabsContent>
        ))}

        {/* END TAB CONTENTS BUTTON */}
      </Tabs>
      {/* END TABS */}
    </div>
  );
}
