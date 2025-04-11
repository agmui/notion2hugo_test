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
      <summary>What is </summary>
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667SN3MKCI%2F20250411%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250411T170724Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJHMEUCIENJAHa17Nmh7OLcfNfY%2BEwBCzQq9NqH9TT8f66oxjrDAiEA%2B77xfzNo14hdqt0RmEi%2Fg%2BOvYRcsjUvtDlsMG%2BGUjeEqiAQIwv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLX1x86etIbW1X0i5CrcA8NmJmEvCEGco%2FHzJRlk1TwzPFyMj3LV%2BPZWzmr5NJQLf462VKD%2FwhnCSR64aYD0zglZDIObPcsDiRfa3heC4cIs3Wepa70ldrwZVUGpoBLORhnhHxb%2FUNoAYo30eqS58E%2Byhsy1KIfwqv4xGcoXuM9D0LCxOkdY2PPvvKt18IzW1echcK66Rgu9d%2Bhov4CDBXHgGD5nJHUTfocg77hYakZAU%2BcdCALSU1c3p26lyZ8fKKf4%2B0N%2F2SlzxlpuDEDO%2BjErrMPi3HLjHA4Zj6pjiMA%2B%2BaXumucLpxddeI8g0EPldvOeHGYORBKZcGCUjopgwW8oFAXYT2LL%2Fraokw4qEAwqBgZijYxM49dNbkPlDxeQi49ontPvCyEeRtxU2Ebc6K1kxRUhBdrNI9UeYO4xeSGuTW4xWYhxFYz%2FrjOJIb8ByvAjKDg7Tp4Wv4kPOY74McOhtc%2FC6kRyVwzwjn%2FF%2FCeTNIp8opThVe7i30D3ipU1wE5jMM5z4uztXmF9MjMjYeLvkMYb9w7Xxx5rvdeDona9o7%2Fpl8YrRbRRZOhA386BY%2BNEyWXB3ACMr0pBKv69yOcYarE%2BLBsAFAB5psquo2g9jwMSKWFR9MlJw1pxmlhf3J%2F82FzE83WJFUKMMKaM5b8GOqUBPSRT%2B7Ww35DSe6UIXLiB38vt3Svy5W%2FHdL7Myxj%2BFxfCfhLkwzCrvp2wbiV5gnIRkVpye2%2BHMy%2Fi2BOcHmsip4JI4PBnXvlz7%2F4dZJd5nRi21p9G%2BnwhOJXzX0xNkKTrwUs%2FttExrQZsWiV2nO2Uwhwgr%2B88MOUTXSQIKgvyv%2BmdeSgkG7%2BhSGRBccA7l7qotocmhD3O9GFofXMvB29XOkHv23XH&X-Amz-Signature=50a9e88c130937184cb1aebfed29a73e654b117d2ee22356d611775f629b780b&X-Amz-SignedHeaders=host&x-id=GetObject)

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
