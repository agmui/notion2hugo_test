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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TUCWRVHH%2F20250405%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250405T230718Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDgOi6Buru2ciPTxrJKRXoNKB%2Ffewes0%2BzXAnVKZsRNJAIgbojSH8djgxeGvG%2F2T%2BjZhpSa%2BXCWUlGaJaJey08f%2Bswq%2FwMINxAAGgw2Mzc0MjMxODM4MDUiDM9055ZIWtDLFU%2FppyrcA%2FlIwCRCwg0zW2Rtg%2FSN5zWMfu0H5ylUgGEXo3YK1LMP5z7J2uTJAA6ni%2Bg%2Bi2qyAt%2FP9%2FSPzp%2B%2BwLZYjxiX5CnjlOP2z3DXteSIjotx1Aac1w6jEjK%2FopFHNCT3oCe8kDrMt50%2BzJm9spbqHFrKiPrazSubz9voiPWYriFt4SMZ4xsD9mlJHBO5ueLaw2YDcfM8%2FhOODtlck%2BGsoN13SHjeUB%2FdTr0nzelvdrGNA3gJh6sZdSQMI%2FkrzjwJhyjgA3Hr2PYjuSi%2FprlJLKS%2FO5rIBxfVQWS3VLOu4NV3Kr8Uc9o1cEguDRmO7vhfB6nmKAJnYCvzB%2FkuwAqaicBbsxD41bj2yMujITG%2Bl4ZO4%2FYw80sOrJ%2F5rKFmdIlnp0jjiGV2nYwVvndNpJy3g8x7k6%2FlJrnhkaX7Ri1wkF9ogvK9d7d1007rot%2BclfG43VSZuHWqhCVCL3nuAUwNmNQhfStbDIVg%2BBp0%2BorzHnBZJk5SUmqWuhi8P3oCq3YTL%2BWhDJCk25N5aMIlmMcL6wQmIh3ZMaKPPxZWRfjabrhOGQS934zjI1PT8GBDg3qUcOS6a59xj%2FIWXt0lWL%2F2I%2Fqs0bB086EZVjdzpYzfDG36QixOafybA%2BWu32mRZQqoMLfDxr8GOqUBPqGqfjYSOlSg%2BXVu20cCyXawTa8Ug0p%2BLKZsWJRuI2ZLB1rShZGq%2FMoWx1E%2FZ5WLQ8sbP%2B0ysN7GA3hdSO47wU5XUsGNov%2BotSW%2Fb4XrVO%2FfCA3A02zG5u2YDh6hONexbz0Ih7lTsuYbftl%2Fso16qsOojB0TuHBjQYAf2vuyA7X2iF09smNH59jylBSsObfGCMNOy3z1Zlvv28%2BaK58Rq8fYU79X&X-Amz-Signature=70a34a196c5f328fa8b744c1d62da357867385a22a77fbeb44621db7f4cd8268&X-Amz-SignedHeaders=host&x-id=GetObject)

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
