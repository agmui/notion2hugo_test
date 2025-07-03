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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VXTNHQPG%2F20250703%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250703T091053Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAkaCXVzLXdlc3QtMiJGMEQCIGLUHlseYkvaE%2FmOjp%2Fg8mq9Y8N6H9rRiceMEZ%2BphulpAiAwwaXAJFe94JIFxgBe5jJIXX5Y%2BTxaKO7LK8%2BdUCaGkir%2FAwgSEAAaDDYzNzQyMzE4MzgwNSIM%2B6jNfyel2gWE7VxMKtwD5wZixDomV0A5NU4w7kT3X%2FhHQgei7h0K1GYZT%2BZHObAoI5NxgYzlwKSHEP78Vr8%2FdrrHlhO%2B%2BIlxfgi3NidzeYIoBLaoA2CYZJmGqx5yeSUKTLP8l3tONjj1g3RycpbkXuBddpbaL3l22juq%2Fonh3KJ%2BvAiJaPtgxGZ3QDCI8xPSCM1wrF8eb1v7cvc3Yl%2BGQ2uhe8N6ohsH3p9vV059MTgSTP0jR6ScQ967o9ZrP4RNxKYhLEjuUXV2s4Ak1EyhnaBX8BPHE%2Bq5%2FnAbQfE37WuWk9axgxlnEN%2Bpuf7oJ110on6sNLb265mR5KTMg0jy8WtFTn%2FAEo4w6M6VhSN2W5tjGt1j%2B9fVSZTdWxA7aD9sPQr2X8EncDc2YVL%2FwLUy2Gjek%2FkRBhzJE3iyqpe6gqyLro4JWDLy%2BKIoqh973doA7Y8Ia4%2BG18rIHV9faPnP%2FrD%2FRZUlBDhSR9xP58B79brvWy1b2kCBAvlOjwKUiy%2FR5mBiBvDEAKxjqwSHXk67rdn6sGriSkJWnOmLmDvKoay%2FIrrtEjjibgJJ9LMVgrm%2Fo7whJSrunL3bIO%2BYW8DVFHkBcgFnZDUR8kvd3ZRyo%2B4ICgwqYNtbBY1rU5YYF0aRYLvsQRDeiStUvYswq4iZwwY6pgHQbIK8jD9m1wBEqAEGyJqLWVy6ioETJE9IlnZN%2F220sXsoZ7wTZsIo33pBfnIdyc8BFl0U%2BCRsVKqMSrAHYuaj8bCKQsWXPd4Nx9N70Y%2BHvJigfxEPF9iTaS3lyPjtPwygHwjwrwQQW15lLUHTa%2B6bRMzu8IzOCO2YaFc5CL0fJEpdM43xuofXMRYIgjtyePJy1omO4DDqsSm46L1Ky2rTFtW3tH%2Fa&X-Amz-Signature=9ae35c201cd1dc566047b4e538580b958a65ef76e8fdbe7877f198b1eae45692&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
