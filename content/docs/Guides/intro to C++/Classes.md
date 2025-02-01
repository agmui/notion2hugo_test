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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RMQPGCWF%2F20250201%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250201T170153Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD8u%2BVsN%2FNpuA3KWfZiP4zInwga5%2FHqGJSDYX7OoW68UQIhAJ8Y9t8jOK1S597l3DtspwwrGXN9lLxBLfePdur4ADt%2BKogECNf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx4ZvcnBB19g%2FWEYR8q3APIYvfq%2BD5LY%2Fe3sNkDlA2ut1RCeZTG3CDigjRlwgkQkfR84HUIdC%2BhM4CyiQjFjGJl20iwNtmkXjny43J8RPtwau7B9WZuVvhbIfdZwwmHjxgpBgE9BNc1xuod%2BczIIucytLf3jUQQSkgv0ZqxEDFMv8kad%2BFHNqvXEfhQWWoLGmNKosK2LuUlrP4ra0NPQQ7nCm9EMtM8vqHErsHZqQMIkM%2FUFENoDZK7%2F6d177nJ9ptIOFm2msujbi5VfPhn%2Fck1pHqxRpTM6tD%2FHiPaiFHmFCmXrsM0511O%2Fr34LaAAFXnV2dAxRpC%2FWt1ngwWDCRg2qqMAV%2BxrcPHZ5Jgo95%2BIVtisjvfXTFjbvVSVD4t7XpulZAY5XP8%2FGKFk2FVFPiapK%2By37uQWWmPGHddnM%2BVngDlZjeX8OHzH6kPI9pGAe3d2KS2nF3WiBl2%2FhBzF%2B4V2CyBnlhvzWWBSt%2FW7LyZoXEaP1MFBMPmWR%2FD2AxnWWgQ%2BpLPX45hXRPDTcqzrk2ASPAyZF3Eodlfgp1a78pLAk3KWlWKAEB8OncLWroD6m9Y3gl%2B2NziWpAFs3SajkklFYzitNj1zHdxA%2BekURG%2BWmyfMLP8dJF8Y7Rm%2F%2FyvpPNmi7Bozp7r82U4SCzC7xPi8BjqkAY0VOBEtGRlaV9aMHhqay9HWRv33zQQ9OM8pnfMcdKl58ty1ioleSRCYQFK7SvIUcN8zU%2FfJE%2FN%2BaTuPOw9VTfEGGKMPzY1rjxxof4pwlZtMPiEv%2BEciyIj3M0UOR5h9DFr0IRc7u8MZJ93zL1HjDjN8FmJioHbShJdC6WoFURTMDS%2Bfo%2BsbB7gJCtBnDtUpWjtafkI3n2Ji7gmzFqNmj1NSEr5w&X-Amz-Signature=272b83c635df99dd01399ae4743c47ac2808f3321aafcc9482eb6af07142cfb8&X-Amz-SignedHeaders=host&x-id=GetObject)

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
