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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TOG62GY7%2F20250225%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250225T090833Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAgaCXVzLXdlc3QtMiJHMEUCIBjcRHtcLOg94FcpGxJCDYkJqDvdZUYsT3BYhiMfDZWpAiEA5BwZkhRWDHdOsRN8BhRsSBixl1D03QOurEvx3pgv4j4q%2FwMIQRAAGgw2Mzc0MjMxODM4MDUiDHPh86pbAkCmYxXzjSrcAytyajf4FnEDF0CM%2FZBX3atAk%2Bj8TacpAIm59OqxGxkSBwMdKClbMJjiHzZR06wamBPe9Lb9%2BDrioyKyoOiOu4jgUsmEGWytb5UoScsWD1QNUQOM1Da3FjTLFW%2F2T1JtQNtQC11XaMRMSCMOt4Ky%2Fnc30eA0ERH1kQaZ7kpVv9umfaTn2Ngwiog6jlfsi2HkEnkY%2FPsuam3w9vDKwm7DTNJ6Rt3rXIK0zb43GOCyce3DTe%2BUasAdciJejd3e8TMaCwQt8pLcSRjxTXZ%2F3uNCuZsGi%2FMgCzjef2lnK7FYOlsesPcY5Knr8pw14irYNTHGc6dltJeXmAfviUDF1AiG0I%2BrUfmNMuHEOWNYAtwFr1rF1UcAM7JM%2BjX0LOO93rY2%2Fs6PzgroFjutLzCvsOra0lXRynhXvfIblJFPWrE9kKASNKXApo2gs5iKdQjRUeN0vnHzZcA6hQDIWBksHM6UXv1unkScwijm11Xv2b4vwkL4I5ibkFfZVpvuNKBm1yXJap6%2BUdrxI%2BxJnylOAH3E4WiGNp61yAxUtzJev0h%2BqRifEZIb6H0k2CJgklTAYrJlaVJRro9P65pt7keL46S0OCh6DEw2NTYK4f9P5kZffq6LbtpUSv%2BI8ag0MfeAMP3n9b0GOqUB5D%2FSGWlvQ5TX1zRcRAnAuVwCdzSSIm887dpDrPEgTw5ve3TmD%2FhgGB0LCn1ER9oN0pz3F8eHMjcBSLuBesqdk1v%2BoBVZ36u7nL8tY3YXBMqlPU4gRhtWTUZdL%2FeakD3VQKXp83RKeFb8%2BeoiGtTtYZinR5TmkO7O1vo%2FyHCIgiyINIRkEDAwnV%2Bqa84hY6bl016qYXiD7%2BT1w8hi5PA1YMl%2FB%2FF5&X-Amz-Signature=8627dada270fb35e29d3e1262b8b498659e8fe72eedd57ba5b33b332dd68cb26&X-Amz-SignedHeaders=host&x-id=GetObject)

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
