import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./card";
import Image from "next/image";
import { ShopItem } from "../definitions/shop-items";
import classes from "./ItemList.module.css";

export default function ItemList({ items }: { items: ShopItem[] }) {
  return (
    <>
      <h1 className="text-3xl font-bold">Upcoming Events</h1>
      <div className={`${classes['scrolling-wrapper-flexbox']} w-full`}>
        {!items && <p>No items found</p>}
        {items &&
          items.map((item) => (
            <Card key={item.id} className={`${classes['card']}`}>
              <CardHeader>
                <CardTitle>{item.name}</CardTitle>
                {/* <CardDescription className="text-sm overflow-ellipsis overflow-hidden h-10">
                  {item.description}
                </CardDescription> */}
              </CardHeader>
              <CardContent className="flex justify-center items-center">
                <Image
                  src={item.image}
                  alt={item.name}
                  width={300}
                  height={300}
                />
              </CardContent>
              <CardFooter className="flex justify-between items-center">
                <p>${item.price}</p>
                <button className="bg-primary text-primary-foreground rounded-lg p-2">
                  Add to cart
                </button>
              </CardFooter>
            </Card>
          ))}
      </div>
      <h1 className="text-3xl font-bold">Past Events</h1>
      <div className={`${classes['scrolling-wrapper-flexbox']} w-full`}>
        {!items && <p>No items found</p>}
        {items &&
          items.map((item) => (
            <Card key={item.id} className={`${classes['card']}`}>
              <CardHeader>
                <CardTitle>{item.name}</CardTitle>
                {/* <CardDescription className="text-sm overflow-ellipsis overflow-hidden h-10">
                  {item.description}
                </CardDescription> */}
              </CardHeader>
              <CardContent className="flex justify-center items-center">
                <Image
                  src={item.image}
                  alt={item.name}
                  width={300}
                  height={300}
                />
              </CardContent>
              <CardFooter className="flex justify-between items-center">
                <p>${item.price}</p>
                <button className="bg-primary text-primary-foreground rounded-lg p-2">
                  Add to cart
                </button>
              </CardFooter>
            </Card>
          ))}
      </div>
    </>
  );
}
