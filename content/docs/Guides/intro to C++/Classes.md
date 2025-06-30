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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RDTVV6XB%2F20250630%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250630T181214Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCkhvz7GV9wypqzPbZsSSVTRxbpZGFCGmPhkTjescuPtgIgSI1t1soaAMzfQpn8tqMnilM8Szu0MQBPAWHn2LsW3DkqiAQIw%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGQSZe64OlTVSZHr%2ByrcA4HyslXQE2dhI7N%2BufQSSPX5S8EGIL8xxdAQhZzPz22FXOCE%2FqKvBaHoTJccSDerDICFr%2Bzo%2B76vAY39kVnLyXCD9FltUOPePthko1NLRfmX3pmK9oCHQF%2F1l%2Br%2B9l2uQ4%2BY6%2Bodcppm8XtKaqP0%2B%2Fg1GZ3bmYmtLJsJGnOUvKzhSrMcbDqKJMGtbmTpNK5HI4zjLXkG0fph3ZanWDixv5MHFFnHqbopxTEAgtxjGxdwYAKR3AwXGTyRnqEAJdK257aO4GMM7IKx9tOYhIheCSVxRZ2y6VV7Vh7zinSJFcSnwFOwloQrSnswnpYZBPqJwgAAKkMdsELPB2lSt%2Fuutu7klF41RBr4rlPr2VM%2F01iCE%2FzaDHMoKIBvFscBVjuvjoqqOXI%2FkE5%2FMGptZ74M6kvPOfZyKf%2FFehbBw%2B7Uc6kQpGy1NJUj7%2FJLZm8V1cinw3eY3gFDFpm8KN5ICQroDZXzvsUwaFvFNIkVjo90rKn4zp9rgzJKBSCG6yY6NsCsOc%2BS%2BZLCQhqbkaOO2Oi55IvjnsjbXl0waeTcNVmrdQ8HWTZPjs6hhPB3BQJT%2BIlbbfN86PmXR%2FwTJHpg8S%2B6n3hbT4MgXklDz%2Bde9%2BZ02%2BYeVJy51Mz5qOwCPonAMKaji8MGOqUBP9r5zzT6dCgee62XzfPTxJpgMzYDLCeV9uCP4rPtW3CJBuoiDK2yjh1Ikz8rcQK38v63Kjhednee6887FZsdxjed8zfOfPnYCcsONkdvxXSuqGZtSplpzWwE1WPp0kcwN1oRKRrqLlfxxEZZTB6bNJbE8%2BmP0VWnatIqUEgeTkPv5Sox1C03t8Wj%2FgJb4Rt0nPfDjEeZFr01vcoV9yc9VFVgSlJL&X-Amz-Signature=4f447e50bc719f31c4df2380f9d6fcaedd21ecb277c7f5ee536603deea50fe3d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
