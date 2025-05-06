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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RY34Q3BJ%2F20250506%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250506T081248Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDCqLzqfEJuX74O1hcYgtnWfg1qR0rY%2Bazt2n%2B86zXoGgIgRQM6o%2F0gMa7jUQ0TVPKDU%2Bbm3WCXo9wHVefiT5KkMLgq%2FwMIQBAAGgw2Mzc0MjMxODM4MDUiDBnS232smDV0OEzKDCrcA%2FCXp3Twko2KSgMKzzFkd%2BFk817GyoGk2bTtLoAaCOxGls98SCTCDqW9y3GjSqMd5DguGhP28F%2Fa4ZO7zqk8ZfhZSe%2B6wBgP96vDOh%2BaKdNiEKb3mTZPf6ppOGpG2S5uBBjuciE1kMNL%2BDNpVRngHjJn%2FLbi7qyRVU2bv%2BIF6DPRi4AWFyVrqh1%2FULuRytApcv%2FPp7%2B%2BUzlQJzfOj%2BxhAz22SSgMZJvofFIgX5ND7rLQiL8nvE5qcLdc1VcmkREUyMFKrp0yAJyfQ%2BIrF3L2Vee1QDdtkVIXX05302Goco2A31EJeYLfO46FbwEW%2BcdtVzpG1zaQSVvihkiJXMtu7BX81OP6%2BM2nNdFhdWeSPlMkD3VP7o1c1Jfd%2FHGZCm9wJWgqnCkGABkfxjbDFGVaFmEWwcFchY%2F6b49ovIJuLgg4iq1yxC0gUCZp7b80xTPRPdDKGcdbpSUbqnuUId0uorOc0eQ0LE3BRi4bh6UlreWApWYPV6w4nSBZ8GO8th%2FGqAhM6YqpefzWnXHA1tLrPa05K7Z5i6YmOcHUMcXvO8O%2FcEL1zuGlftWr3du9hoCTQloD9sF4X%2FPDX5Fsk%2BvDjfuLkSeZkAcT527w3EB1nGB9jtfDyXj1qpDRyaCoMJvw5sAGOqUBbswwKFvgHIl9tJkLS3OFF9Ov%2FgguP7aGXhTxbtjzlxoM7Y4KDQ%2BH%2FwF%2FsFscV6d%2FnmUh5PnTjHRGMHkXTgu6Y9mtlEF96Lki3haVjIcfqs3QNYD8AqtEGRzQ7fI3GRWlSvZhkYpJ8fXNsgc0juOQSPjME2%2FVXsSQHD0EKmzUd%2FxcLMKQHlK0cYTyPeRt%2FDCe2gQXRuXjcrOimDJcejsSB0dHzcno&X-Amz-Signature=21568c2a3b2e40ca398cc374aed846ec0ac8da4cbb3317610a059506e0b1ce25&X-Amz-SignedHeaders=host&x-id=GetObject)

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
