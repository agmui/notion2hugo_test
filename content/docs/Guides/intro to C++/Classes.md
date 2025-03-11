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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662O2JVPY3%2F20250311%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250311T190152Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJHMEUCIQC1K2%2F%2FUNtrdtri4YITM83zyzTedL1%2BNiLbSQfnhyYMOAIgYr5byrQ6ikLrtlGj%2BsorzX%2FISLlMygRBWxSXm4VnzoAqiAQIrP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCW94FcL9RCj3gEHeircA526z1ecR6DJOpmSljF7x3Rr%2BL4A8CvuWN98dT9e2rcYRnEd7n6OuPfeAf%2Fxu4hEnX8%2FzQRpyaERya1HnkphHQ0yadvKiCMRhqHt0FYVf4BEW2q05pidyD2bWIbuVhuX9jufuOaWVnBtt6HAB%2FMUha2hi0jz0o%2B0CfZFAQppSr6hF%2FMpl0UdhiAs%2BDRXWCsp6lBxsRsTNX%2Bci2i8mWOUrFwlKzUmOnlUR0N5GiczVWgtaa2Y0zrmSni0YfJfdxDvn%2FN59%2Fc0BJkN%2FCTkZ67IWGw%2F966X8wYKkVBxZz5ZMHsLkft38rTTQ9xYhwttiT%2FcQv%2FuVcPHiXU%2BtSdgTve9ihBeS43ZWhAHMUFzZ7f%2FTuFg9P8XB%2BkesAN4D2cvHkE0QwyJvaBtwQAx%2B5vKuEt5Hkffv7DQ1JK1j%2BU1iGL6DJRVYBWwb3lESxlFKn9EtK2YwcFRV21pReOBwJFUWacnCB%2FZEkBSyhkG5MPj9csaBxuYAZxXm%2FTUmIUNRw%2FhhoZkyiD0pIRs%2FmVxk9DHUXJQia9W9heTe5XT%2BzBsaf4VUVGwSAbDA067bIxYKtwdMq2KM%2FTWdfz%2FY3infW3M5sr3G2GF6OnnUZKae9ht0Eqb%2BIx0UwrCmyhzLC6a%2FvViMKOQwr4GOqUBBYNaML7k7ALlk9aiRyH5Mg95vV5P7l19Oy%2BVi3grHYgsN4z5q2CDzE1Iwi4c5qwChQldmjpPwqPIbW6xKlGFv2StVZC71nGR0UdwG3bEiSyEX4Ru3v4sgGcdhxmz9p01s2yRcQCkMqREzCdVoxQ8zb7Cb6pnBFK0p2JV1yTmAdOhK9DHHSUkC23nn%2BINR%2FQ11G4i6thn4xTQiV5mHX6tfE8j3Msj&X-Amz-Signature=a8c4bcf006e8c3d70479c2ec874ca702f23b95aef9549b72042660496c3f8b0a&X-Amz-SignedHeaders=host&x-id=GetObject)

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
