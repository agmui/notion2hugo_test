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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TJ4B5N7Z%2F20250129%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250129T210251Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD3gfkXg94y7NuVuB6r39nEJWOBNVfSSa1is5oyJAPrjgIhAI2XhZYwq3rVPXpC8C9n75xgFUEOwJU2tH%2FtkMN2cAgwKogECJb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx3P6ubh47Ou%2BjwP0Iq3AO5670euLzOSFGdGwTt6u3AvTQo%2FRQiQuPpycs4z6d8Bih1hfLrahUgTfhyQVTIODi%2BoFrpdjfmYpNth78vOctiZUFmyHqCsKka86c6tC51ac14lqGy%2BkeIL0w%2BPII9Lbvolu5NIIUk0sCQR2mmKu0E2mtmnUCF6wZm0mhnFlfNCXMtUUGXfjLu%2FIAz4bA1z9MYDg65AnBwnId5ra1E%2FVZoJuQ5uEutksdzgXZhDdPPtYmaklw0r4CFlyvlQx%2BMhqg4fMA9%2FI1%2Fv0mCd2KdyGWtnDLFHbvpTTI5uGICLld1UBWjrVRK7FAtG%2B4cCWCbmIrUf3yoqH196YB5I7R8S8pcbaBMdymzQ5qH5u3w4I2tPhZroGRi3jKN5mCvN%2BC1aX4UV4AO9yocui0veNr5fpWRljZIntnGjrYpVWdQKwGQjKy%2B3XtsCPINSFXBVZNDF9VZl5eUPu46CP3i8UggcSL1n%2FgbnbsDq%2Fn27MHe4rjsfJKcmzcIBO13mY9EAiNZNxd38YejrkD%2FYyqteyoywLB4PNYVfSivD%2FqOWxxfDJezAHWI3ynbNZ9QKX3NuCsBggLORcMeKASf%2FXA6HvyasrLJfyjVaKSoGrMZgvmS%2BKqvusZDFXbECLv8%2F0rLJjDRquq8BjqkAZXwoVDTIh73bcUPl62th18%2BiXvKQLwXpwVGQ5i4j88zGmycIKaZ%2FsJTUfM5PK6rnRFQxWYRNzh98de0pv5Ats%2FIFAdySLpU8nz%2FZ7BDDP2p8dABhw0J5uKPJbVZq3kuGlV3EnmCT3%2BTO%2FqRhoLSvxcT%2Ft9WgM%2FeoGzNOeYe%2F4W4U%2B9IoVvLTDj2Zgo6vlSzmA4Wu369W7c2DNW6YT7eJu5POWDS&X-Amz-Signature=5087b1b1a3cd5c248c89cee0c1ab746c4bca4d040935abbeac6917e6e76261d5&X-Amz-SignedHeaders=host&x-id=GetObject)

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
