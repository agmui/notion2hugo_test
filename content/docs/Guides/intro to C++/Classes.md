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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U2V74TMS%2F20250720%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250720T121513Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDDJv0uLuocdKE8Hy9S%2BHTDgYHZaFBK3BRa8beNeH3ydAiAy1vsn%2FxZguSc4Oe9dO%2FBk47Q69CIJDoiKDYE85HGc6iqIBAi5%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMJAXzG2bHz%2BcrH%2FaeKtwD1QMinBKQdVcOt6%2Fu0h33SZNod1sYdijkDRBIVO1DNKWWIPAVjFoKVBVTevFRnu%2BW7xws8fHxAyBf%2BobcnRIS1ZwR7LwtUk1Qwd0gOzXTVuXW1CzFK1BrU9nxwxRWe4k1zqhiwIQlaAlW91CeDosI6A260G%2Bm5NgYY8nmF%2BguxUUmMcRFBsR8uHRm%2FXaKgPlepHZWBjvAkx5t40gR4JISkNYqtSkS%2F3fY4BzfeS8RI5xPP5iN1ExABQL4OBqkL6jMAWw5gM1qAu5PBMMsxOTBYx%2FPHGykM22V2bqglYGa5ebJ86egZcS0%2Fay%2BXEVs5PNJUX5CAYDTqEMEPLsPQ2y2BFGFsPboObQ%2BgbNbe6hOjcGuI6E%2F6kJurak1B1xprXm5MdIDdhZC5cXUiLVv2IvjX1vHi5TuU0nii%2Bj5dsdzR9cFfi%2F1M%2F1PfM50s3JDj2PykUAdEUzWj0j6CAeubPKrY%2BwJOk3lij9wssoLy9QCEdSBlkk0WZ6SrCp4EcqTXBFNMKH2h0PPsr6m2SRAqs7gXfqCqgo8xnA4Efv6AxU50HNVteY7N8MZNJTRgsOUIkIsfRy2xupazqIAx5crD0WSW1tg2t0%2FV63qqV3kIZ8U3%2FXSmPaT88UA8%2F%2BGsZkwxr3ywwY6pgHOBSCcEepAcz4aL7lktPuL8btDs0waSAEIyGxB4KmncVpb%2BARk4hJ0Up6l0G2q5lRvPiKsc5oAvXHI6RFKKVJuzxDp%2BR2Sm84L8tlaD0TWC3t29J%2Fa793m%2F6dGiDRQPWmz5zrDI4ysWMDpua8hvvyWvCToZcaQ%2FZTf7XgXrYkR9357ABWHUJVHRXl6wjpdkO73anK7Jm82xUq8HTgnfjwLHP9bqc4D&X-Amz-Signature=35426fd0c1f3a9c6eeda0ee2760b353248e14301b528f3e1cb16c03f4b5485a0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
