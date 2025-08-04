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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46635XD364S%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T201057Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBQaCXVzLXdlc3QtMiJHMEUCIAMui%2FInm4Tx2NR8%2FkJinl0Joqu7tz5XGHgwd%2BcnfHuIAiEAlr%2BJijygaihOp%2FbYwUNTH1k3icQ63oNzXvtZvxgZbicq%2FwMITRAAGgw2Mzc0MjMxODM4MDUiDAej7I5p1SHqcU4QPCrcA4g5%2BcfZqaC8ndrnv8cJsBese3ulF58%2BxWXtoEcuaiwTaVJVEfVTWLeY8zgoPXcdFeSSKo%2FaY5nyM6sTZIoslJtscEHuF1aKaBxHjpsP0l%2BblLZr8yk0ByR7FD3qTJLYT5nPto261c5xm8FPL1indm5rEW2sjfD%2Bg%2FVYryDHvgEwXjPE0FSyvXzeoneH7FIoi09qbjh3qwOnLUf%2FQ6tLD83cYa%2B15YLD7Chm32ePi%2BeWTMl2RARKWxzitXacdCqds%2FwAZP5zHrhWStAAVIrES5FHxQw3oYV%2FDY6cBjIDTmPP5IfwUvDFoVWiS3Tu3eWHYXIM8VlErwEClYQJqru8BbTrHIw9ftgnkjqayKBsXPKLmjrqbogD0JRJ5U8pTBYC3c6Y6LP%2FsKAOxxqNTKit0nDFL60lx0yE5Pv4pDc8ZaPg51HubIHOY0b7qPPWu9BEWvn2L0fKeW8sfWtfA5j18aWjTs09XH9TtPixyrx%2BOqKmi0%2F8Z4LHC98vF1NXQiCIDQLueNAS2WlFRZgzQd%2BxK6lQmxfG2V8zVOX0L8Bppzpb1tMMMa%2F0u24HMLnXIzl6FBkBfUoM3pJ6TcLWi4BNK5QPI7lOFYV6%2B48sAlM93OE2A0kQif2DP5u5GsiYMPWcxMQGOqUB2mkCXeeTc91ZUUfHDIWS7ujDUskMbozyEME8QBxSu2l4yVph348U99FBykiRZYIKlJ3X4qdEJOoS2swllL%2BnY1ep7MU3H2JLxfCuJ4t6l2qlNt7oPXIAElYjUHkZJX3z3UFc7lD49qSYNwI33%2Fi7ann0K7GNX91b8xNHlQ3VueMX3wvxhsf3k2%2FHewRlVMKpFCGpv42%2Bevov8EHigMpPoRcIPyAo&X-Amz-Signature=446db4367960630ffd5350878b74c09811df7fb8b6db2530c058b0844cdbe44c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
