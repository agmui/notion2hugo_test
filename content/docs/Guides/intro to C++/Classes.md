---
sys:
  pageId: "2329c1cd-96c8-4fd3-a4f3-9920d69d1c8a"
  createdTime: "2024-06-25T02:29:00.000Z"
  lastEditedTime: "2024-11-08T18:33:00.000Z"
  propFilepath: "docs/Guides/intro to C++/Classes.md"
title: "Classes"
date: "2024-11-08T18:33:00.000Z"
description: ""
tags:
  - "Onboarding"
author: "Overridden author"
draft: false
weight: 113
toc: false
icon: ""
---

## basic class template

```cpp
class Milk {
private:
    int milk;
    int private_func() {
        return 69;
    }
public:
    Milk(int milk): milk(milk) {

    }
    ~Milk() {} // deconstructor
    void drink(int galOfPilk) {
        printf("drinking %dL of Milk\n", galOfPilk);
        printf("%d\n", this->private_func());
    }
    int getMilk() {
        return this->milk;
    }
};

int main(){
	Ilk i;
	i.drink(1);
	
	Ilk* i = new Milk();
	i->drink(1); // arrow syntax when i is a pointer
	i->~Milk();
}
```

<details>
  <summary>{{< markdownify >}}What is `~Milk()` ?{{< /markdownify >}}</summary>
  
 `~Milk()`is a [de-constructor](https://www.geeksforgeeks.org/destructors-c/#) (its basically like `free()` in c). Unlike Java or python, C++ is not garbage collected so when we make an object we have to also manually delete it. The computer does not magically make it go away when you are done with it.

</details>



## [Inheritance](https://www.geeksforgeeks.org/inheritance-in-c/)

```cpp
class A{
	...
};

class B: public A{
	...
};
```

### Creating objects

```cpp
int main(){
	Person* p = new Person(1,2,3); // heap allocated
	Person p2(1,2,3);      // stack allocated
}
```

```cpp
class A{
public:
	A(){
		...
	}
};
int main(){
	A a; // Note: if your constructor does not take any arguments
}
```

> Note: you will learn what stack and heap are in CSSE132 but for now we generally use stack allocated in Robomasters

Why use stack over heap?:

This is what the `new` operator calls when ever it gets used.

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TTE7NET2%2F20251001%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251001T014058Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJIMEYCIQDbLnp6X0XYoR5uwuojjIv4GLkvLaFKWXZwy%2BCHwZIy%2BAIhAICwujG7oVR%2FJfGQiFpi1uziyOn6xsa2nNSeYVtf2O1VKogECPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igyv6BbHqC1Lif76Iusq3ANLzNUvY8Oy2Gy4G1u7yNLNrT9MHV%2BWOPm93nxUah6vD%2FJOwEwbdwjFZtSwOEfVLkXox9acBMmbG6BYb1J9kchfXnmbQfEMe5ZEa0He8G7WsP0nsDDPjBL9q9nanStYQpc4clQG97rTkoaNrcdMquixUfhyn2uAqtGHx3QDHwdNnFCKeUC4F1HX66e9XCd3jHIKyWX81SWP%2FJFDWxWGdYiyhAnvaUUBfN60nNahbD7C%2B3Xb2DifgkNVzSlHjIrCkAJpzRyOim43g6ZqyBg40Z8L2KdQs6Ijb35cCkryJ2tMfocYzoGwi54wL%2Bv3ZsT%2FQNme5HyRdwWb3g1BAPGHAeA7A97V54hs6YCn%2FicVxdcWMNxYB9AXe0IgNbIZEOgAsCW5%2Fk6q%2FBBq52QP%2FfcJmRl6qYxRLEV%2F8qrQOg86J%2FUq29Qr30%2FAdjTQoh6lcFaGQDNjOkFVQkE39OaU8K6fSZJv7egtM%2F5VfUdfN3gphGQN%2BbvnqxPZflEaxcy3ah%2Ft1HmDI4j%2BR8IjcUSNsqVZJ%2FPD%2BA7UZ8ZhgD3QmCOkBEbZakL2atcbkLpWwWn%2F3RYlqxuaCLl4GMt93hXDj6WGuCqbmHG41WQUktcuk%2FS0sEIlMSIZBT0a1%2FmuuiIE2jCUifLGBjqkASOn5DQlAGkcSpP2ZbhzTr%2F7D%2FjErCuVyLBw930htfdNqMjLtn%2FkMruZTE7z4T78hEA63TX%2FtpjB%2FlYMf4JegvmrCQpZRBWIU%2BEciNlVPJec2FTizkIj0GXwPzVsNHCBK3suq67MWKjXLyfO6vtKxdqUBOP%2Bdqx5B2%2FDIIQ%2Fej98L%2FavbL6cusJiJ4nvrWom9wWAaH40gWE57UBikkx92L2LOevw&X-Amz-Signature=fc48c0b4cc4e914486926d481e4e5b14dc22e9ea8f0c6b690915d643995789a2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Constructors

For constructors, there are 2 ways of doing it

```cpp
class Person{
	private:
		int age;
		int height;
		int weight;
		MyClass myClass;
	public:
		Person(int age, int height, int weight){
			this->age = age;
			this-> height = height;
			this->weight = weight;
			this->myClass(69);
		}
};
```

 _constructor initializer list:_

```cpp
class Person{
	private:
		int age;
		int height;
		int weight;
	public:
		Person(int age, int height, int weight):age(age),height(height),weight(weight), myClass(69)
		{
			...
		}
};
```

We generally use the second form because

## NOTE: YOU CANT CALL CONSTRUCTORS WHEN DECLARED!!!

All together

```cpp
#include <iostream>
#include <string>

using namespace std;

class Milk
{
private:
    int milk;
    int private_func() {
        return 69;
    }
public:
    Milk(int milk): milk(milk) {
    }
    ~Milk() {}
    void drink(int galOfPilk) {
        printf("drinking %dL of PILK\n", galOfPilk);
        printf("%d\n", this->private_func());
    }
    int getMilk() {
        return this->milk;
    }
};
class Pilk : public Milk // inheritance
{
private:
    string cola;
    int numDrinks;
public:
    Pilk(string cola, int numDrinks, int milk)
        : cola(cola),
          numDrinks(numDrinks),
          Ilk(milk)
    {
        printf("pilk\n");
    }
    string getCola() {
        return cola;
    }
};

int main()
{
    Ilk *i = new Ilk(420);
    i->getMilk();
    Pilk p("coco cola", 420, 2);
    p.drink(1337);
    i->~Ilk();
}

```

## TODO: explain → arrow syntax

# Exercise:

make 2 classes:

- Car
	- string name
	- getName()
- Vehicle
	- int id
	- void drive() // prints "vroom"
