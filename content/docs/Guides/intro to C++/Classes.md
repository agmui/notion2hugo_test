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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z5M3M6AM%2F20250218%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250218T150810Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGcaCXVzLXdlc3QtMiJHMEUCIQCChplKWrnLvd9wSjLOUpsIXsh99eOhr3ZZT0dPFVt5nwIgHhMKVjry8oGotuB%2FjKHF6EHRfIaUX5R4bdy%2FmBGfbUAqiAQIkP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGNytCLOSK17NW7peSrcAzZSADG1Jz0xtsLTELB%2Bftc5VeH0sJDJsmnbYBN1grP%2Fk6RKp8AkO82%2F4xWroArnAM5PWe29ShcOwmNFuSbe7giLqZ3Dv809ueiICEsPmsw1HM7KcvbjDbE%2BCnVV99caRj8ELKhuKGLQIdzUW20XyUXhl7DipgsHSc%2FtlYTgvfug%2BqPG%2FCZ0dzojULVAL%2FWM5BisJx5gJej1Ct006SCIG5uJWSOo%2BYswgCNvVqcZz1BLWJPJGOUsbNoeEmaWr8s2TNRPO%2Fv8ULrGBmUjK9Tp%2FsbIXoeUY3d0zevK6EWpVPm9a%2FogPE9i76NUIQz%2FjWeh10kgxKKvkep0a3mKJPfqORfj4QX%2BNZrRQr46sBev7vJF0EgRuQrjGSWcBRV7LUNeTU8oM0FPkEy2axqkrTGSjN6sAHBp%2FYoqgvO0eEB4gbDjqiiXsx%2BSlmQs6U4QMd4OJbAKpngvQzOWgql0PtWr%2F4yslXxyPgMUlaL5b2kyjAyl8ZrPBQW7NRFSfVvHKlSxSC2d5SPbwEbhRblOEWOH4gESO3hsVvMVP3NOE6MnXyC7IHVGbBMoxkg%2BUsSgCkic3YW4eINaJVOeI7CIWUX0G%2BhT9XwLqbba9z5EqMOzMS53gfsKwyVB8QRZKFvlMOWx0r0GOqUBKXrWGQZ86rTNujdyobMufNnwz1yw56Z7GqlbB517LedaEsxdvqo5a9o5SZKMS1wuvlSzEI6Sf0or3DhqX%2Fz4wv4cPojQXqW%2F0kNnLeMqihAUs2M%2Bl45vDOMRcdlq2Snzs9zsqZThRlgEg7VxUHL94oBwq%2FYKtvldb36TM9dxxq8QZz24Ff9C6jI3kCZmyhRFoGXsMhLcLDVPwWGlRlI54te164Y0&X-Amz-Signature=139af43193c1717241156a786b03bb9c816f1921dc006f90ff8830f746a81def&X-Amz-SignedHeaders=host&x-id=GetObject)

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
