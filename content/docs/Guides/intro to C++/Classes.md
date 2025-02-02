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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UYHPXVWP%2F20250202%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250202T170117Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEpm769yiosMXtgqelmFa0fYX5wesgfx0AHTIEvp5YR0AiBrVkk92%2BeNi700rQgy0zCAsb%2BxhkRo4RsNi0tV6DbawSqIBAjt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMUg3nrUKhmEHUTJbkKtwDC9DNle5AlZ6gbVbYnqdYaiuVFGXqkRNhqfBQuvW5pEkxjZdDcO%2F4aiKrfnzhWsim6IWnRZEY4q%2B%2BMhas%2FV8HBgGM8pngzegEEbvbcrx0CQs6BhI7A%2FZX3s2YEsetzJ63NY9qn4r%2FpfSzMFhI41FcN5cSMp7xg6iPp%2F1RYDQKap1nPd7tzpPrRJUZODXeyzQ3PjlPu0R53rrQCVLMlgcsySEc2HDbELhQPRxShIYMXVh0WxSXu%2BjrsokqCG172UK%2FclNPvxJpd1dYeiFxYBvraJtXEpOj21IkUa4dbJ3D57mZAgqrptmnCrvsXvwHFo6Gb6530sPUFPm%2BPLo%2F7APqRByKpTbZu4Z1oHw%2BW3E3aM8H18104YjESUsrK4qIBQ9NkdNn5M6N1jafHJJk4RQodXTGa0ewnJbNP2d0y%2FFghRUSGjSercVBAW2Aq8M9cJhjeV5oof9j4RFMsdi%2B90zAL5VSN6tUb5jKWMnM%2BP7c2cnu3UeADbQKTEnQcfkyGmy32vbQfUK2Y%2FE%2BWasjAJjtVHNr6BrpdOV1ufIpmsOFjfePcfjSBaSnJ%2BzGUUtUM%2Bez6%2FimAjfyc%2B5%2BX1Hvi4hOrRX4Ozu%2BQFLGldtMK8CeY0r1H%2BfarYReaweqZ70w1L39vAY6pgFWdoxXhILHQi7fb54m%2FDX7LB2xaZmU9uaISus1s7H6xGo7Cg7owH9dw9ynGhmKERNKRIUhN%2Bz6HGqNkC25tywjtuBqL004amUUDZasvmQSX%2BFEaGiDdmBtpTx%2BojlReiP3TDNjWHM31kQgPb8vPYkJi51Tlaws5Edk21RG1nbnIwgU1efn9ikneaGOmSuRcch4Xw9J%2BWcmiNwW0hUQS3hVre%2BSkRrt&X-Amz-Signature=39803e08fce8d3a42c436c7f14860340b60bc16438475e66b8094878a9fd9d09&X-Amz-SignedHeaders=host&x-id=GetObject)

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
