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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666AM7XRTX%2F20250210%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250210T200211Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD9SxKY0Lfc1xP0xGY4xDCUrxDUhxNKqU25M1P7b%2FwM8AIhANrDNPiHGMWDtehhgqqmhocBjnL68SmSIzocGtFTOIPVKogECMX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw9Nt2p8l1%2BUnTpBjUq3ANPs03PL%2FlYQ6s2HiTOX0Zpe%2FPR6VC%2BAEaqjSbgl53exv5xbT0B6VQspvex%2FX309TTXrube5zKMVGR0IwQo6YUQjTnJs6i18U8bmmp%2Bz4hrcvT5tpMBk1xSPvYAbgPbaH0rRG5mkl2WSWUcGpJpq4379YUE70zhxAu%2FA5IvyUXrtSFXhXSLmrSUXLjsOc5SotS6HNe4PPRhFu%2FOE4FR39MM6OcZ9lB8vtEz%2BxrZ3OTpWl11W92Jf0tufXT2YmRB9m%2F4QAeWvfriFlhgBRPRMa51vTKEr5U96WY7kLUtiaI4%2Bj%2BGvnWNewy5MP9sq1%2BsTPI8gAx%2FCXn60YgTj8KQwGr9TbynbyuamAyNWY0xiyl8Rq%2FPWgvLRp8%2FW7qHAXcGfzgaD3IlHBv3ArtZvgbkBhHOb9Hyu%2BOs1Dt%2FRrycX5nipp2jN9sYo6Ft0S%2Bq%2BBUxSTD%2FCrn5Xv5ezzZ0nxV6G49Sy057qP1%2FIZwYgiJURctysCNlIAy4YiCnD23%2F6y0hdp35f9Rwl45iOfuyCEZcQocUwVvekHdpQbSUIdFboAThYVXRPdAEAXd1na2KRhxFSAa3dLV9MNapwuLdCmZGQZKUpmQ%2BP%2BbCBt76upmTFsjh2xka4tx1kLJqAochyjCqs6m9BjqkAXmpyquzd4PwfAh79B7M2lM1Vdshhh039PkRj%2FjeLSOstDipAARKSXDm3UGNhHSyxtdTbXyPTCrgTdUxjw9PYQ0ZrjO%2FBVnQYk9PYTJeawdA6R3SU6HvJQB8x8E%2B1ZSkVx%2F%2BcCwNVt%2BroDCeGsTuIRDUh%2FSp5brB%2B%2FxkkvJDPEjD99Zu6G40Z4DT%2B1Qgfp89aYKwJmxJOlJph%2FZlgwZzTf1wBgRl&X-Amz-Signature=797891e9e0665cf82bcd9bac11b915d4ea6e464a387244c8954a10648f82343e&X-Amz-SignedHeaders=host&x-id=GetObject)

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
