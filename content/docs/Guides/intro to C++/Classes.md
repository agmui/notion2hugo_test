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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667TKJ57QY%2F20250518%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250518T090749Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDRNiLIAN3uIihv9LjNV8gf%2BffH1fdanpa6UYJW28FMGQIhAII4I%2FrW9pzCauU3SphVn2wv6OX2AZH0Y2uGV3AdpYqxKv8DCG8QABoMNjM3NDIzMTgzODA1Igw9m8bFvYH69Ds2TlQq3AMUWVmueKxpZ0Oa87q5peXlJxm8lg%2F6IO75AYhOYr7O6XR%2FFRdC3voQfPs%2FwGNO8Sic3nIk%2BgT1d02AQeE8%2Bgep9%2FoAqvgA%2F6PPykdw0vRPB79F7STtkHiq%2B1ri%2FFgxLjBuKXK1B0a0mH0CP%2FFV6XNa6ZeQG2lHLqzjxxW24os60ClMlgnhuXwiks57q6vdLCLV69MlmeElQS4bvi4%2Bjd4crHwzYDra9AvUkWb7WDS8W1TolDcR5AlVyu2wGj54jWnmqs62%2Fc4HBFgHObU1xzjYGc8sCvibyRZn7SaRRVecOFo6l%2FXGbbD2auumTRczaEza6%2FD77rxFF8H1xQyA%2BwnncVviX3pmRv59dntXMcAw7vw%2F1eokPzonkJrzA5fhXxKFuLqnqfUm1D5OHqODuFCpNp5meGaC8d6h7yQGuZMgeBQVV21BKnTDb151r4tqRUjluCacMjOy0RhMPRr9%2FlHwLcdM8X8ay0oOWYcx2SkTgV7r53exibrDfsCQS1QEk8n0AXYBVmIgq7JmZANtYOH%2FllFwo7naYTTo3V3JIeo2J4COi0mf7IiiDp2KBKgNBdmn8mC2026NSK45bWm1nKBvWcvoeMN%2BNdll7pR57bMWdwi1kxJh6DNO9wx9TzDk%2BaXBBjqkAQ8dTc7uq89tp2bnP7xe11kBIxfEYOTmycJlUsIeWs%2BCrfUEULes98MYYbFHOXEgoAXuxDrubQvtuyyYUkJZUWItjYVBcllcxc8ir6de6hmfV8eSt46IEi6piUs%2Bh%2FtmaSpabtCDiQzVjG5mUT2rT6407j0YGxptW137dwoBJGoMF0UlcNVMAgak083Dx39oYMaOFdTRubnqfCH8TlZoTeChkHM9&X-Amz-Signature=20ee56f462791e7510b4b9d3577c5e1d3dbf081f37d2783a399b2d13f5f5d9ac&X-Amz-SignedHeaders=host&x-id=GetObject)

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
