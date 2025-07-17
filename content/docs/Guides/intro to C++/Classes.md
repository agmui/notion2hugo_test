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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665T46O5SF%2F20250717%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250717T161113Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGAaCXVzLXdlc3QtMiJHMEUCIQDHYcs1aa9edzWgeZ%2BTFYlPgF%2BtEKaMMPPZVazUSkKLpQIgZrTTh2%2F%2FRtorFJcBGODUImrsRgKAtoShTslvb2jxd70q%2FwMIeRAAGgw2Mzc0MjMxODM4MDUiDPflew8TZOIzTwE6nircAz5VaUmnF3iC7pdIdsc6fmBVpjgjS7ehGm4afwFkTqIdNGNCAzSXql1R242v6lTgsfvcxZhsV2iNs0sI7v%2F4QeGaz1mC4qn8EfTZ%2FkN1Rmct1GmITd%2FtfNfSDhjGhV80pWyBlVroDQM7kwn42FBtSptZrr2GPRGZ1Wv6v0HeBWBMx%2B1XOsnVOn8RUibwcE%2BO617e%2BZFg5uH9Rif0K6cp6KmFp02H6sGuDEFWxJuQbN7r0VpEFaDsv3Uq0iAVRvEPDwxCeaF6eOJ0PGps97YdcU8iKBB4fIwNdvQae%2BKRzzu%2BVk9BdVu5wjGag%2Brcj3pX%2BOZ5LvJZqjUgP%2Fdir%2FLZotJ%2Btx2BsvYwEkl2xKJu2AA5PcD4YjUir7FrBlR%2FUMCfF%2FIDsE8uKInp0d3wUbKcJuSMVf9hHRPcPw8XR3AyYMHZ1Y1Ktz8lg2lZBZSpEuBCbhAokNuRVb%2BiCE9sYB4IiIif%2BFlh%2Fj%2B1ro6urq%2FAoK97RDug1jxkvT50VKRD7UBv2R1v9WGVNA2m23r6vt4wRLJuF5l1dLUDO0yjg1R%2B%2FFoQ8WG2UzfSKEyB4q2DogudFhXvKyp0NN9qZsqoknrn8WeQ1obRAqtAhZUPPkMcRtJf0le1jFC6fzph6h99MO6%2B5MMGOqUBjAURGk6EUGK5cvaM1silJx2Yem9fJAeMXcocqp%2BEgrmB2bCPjzFUqCKkNRu4bbDMui3ZeepVJrNjEYuj05ccJBvVqgMNZZLkGiuhaj5DGvQYxda0PTWCK5codKtC2RwQWs%2BbRQ0EL9xp0f2Ns%2BhDhlbI3%2FwXdYEnCsSqnmGLSAdjx9qDPS3djsbZnWc%2B%2Bm6S9ksgx71smzWJPyLbDriHbwRUfweV&X-Amz-Signature=2b02a4e946e62302dbd42700a074962969e4ba1849b226df9192366a31e689ef&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
