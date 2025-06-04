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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665CAISE7Q%2F20250604%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250604T200740Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFsaCXVzLXdlc3QtMiJGMEQCIB7AgeBMtuj37nxwYkL5S8pyImmRnbgghxgwo%2FNNBJFKAiAth8L6FueYsQYiUw6PyALW5%2B3%2Fi5syB14fVRkwBuz55Cr%2FAwg0EAAaDDYzNzQyMzE4MzgwNSIMiXtBPem2qUCyCTqAKtwD3C6hO1VywljyslHdbtGdxMMiiNS6CaM9M33LfAERtj9xBMMgoxya8eAmp7BrJYsHfHHOqQAj6HDqKxyzACwuMWxGgLXE8FE73O9OZGdV29Wv9xXYZmTY3Dl5yX173h2NEtCI0IaasVYV%2BXqUaU7ZFhrvydbnLPQeCVYjA%2FZFq3TJKIbsXlOeF%2F51NBLscJ6CcyqWI2asb6h%2BuF41j6oe5UAp%2BWJ0zzYKcdv%2B0vxdu%2FS96CKNmzOYMtgMsQRE7pbjfrMAKFWIwRPxD0oiAecHb%2F70uJHT4odcVefuXQGrkWFLmpjbmYTxhmaayeFnxlkjdmrPWrWodVRBHKRIowdRZYeRCjnRJeZvknGME0Xn%2Bv8BqP%2FtvFq968QsAD%2BGJDNc%2BY%2FDvLndwcgozy%2F%2BW%2F1GT2U2dBumtpBjxc4aHoXWZPbnvR%2FtweImB2qj5syIY0eKLBXCDQi9XUSYygotPpJmP0mAy0ZidiGoquHiqiE4ld%2FjeDSe%2B%2BJc8dTZWI00nnrkpX6MKv03yOSLTlcEesYKmoQGAOK2x9WU0Yn9yaB5QdYDZr0SV5KoVoRuM%2FKZ9hLN4r%2BS8tvpn9VEQQT8vzwetWyzyTZv8QJapMb%2FauvgeLRs1sqq8Oeom1oq%2FAUw5a2CwgY6pgFkJLOL5uyyHtJ45Mng3jMDCJx%2BMBdzrVtuxNLKdndH4Wk%2F0SLEIZZgvmAXasfcMQ9ysBw5ERkRnRgv3n%2FE3dnV4CtvZN0ZB3lB%2F3acjDyzLAHoxPq%2BzacvnfLEHdxATy5%2BJaSHA41nHDS1UdzZ9xJSKf9mvnmlUsncBdH31OYeorU18GFG5bccD39Eq3eH96lpltJkpN1UgK6aMSRsmGGorLFka9Jy&X-Amz-Signature=e89e549f45bf237512cdec34d4848d30adf813507e02ae6b0a10113bdffde467&X-Amz-SignedHeaders=host&x-id=GetObject)

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
