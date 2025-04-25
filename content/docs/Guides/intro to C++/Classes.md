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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665HC6PVCT%2F20250425%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250425T041049Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIB%2BZ%2FI8BSYLexnSxCr2UtIA3c9HOhnjvOD7dLdmKkMkTAiBMDVy%2FCKeZwrUS%2Brs%2FlpnMp6dVFxMCo73BZWrbmSfVLyr%2FAwglEAAaDDYzNzQyMzE4MzgwNSIMKCe3gF1Ln3h1Wq2RKtwD5ll%2BC3PSy1IDxhDhrNB1j1kCvtG9hISArcrWEgK524mbPlqENrQ5bDfkA8y9UMOE3%2FzmTewEzpPJcFqQrprrOe1C5KcLsAith%2F0LUEcsTWAkswa2ud2lBbpjeIxZ7T1qM1CE0hzZVedkSC7MggwFPLrWHqr5GHvZoqNDb9LMir7R6pmqF%2FOg5hZ5Bfw6DRveYHEP24YmFjtDmFHqYwTic7yl1Ix7KhsTROB7ya0AhidejjNIWrChg6iXyqVd%2F7aUnO2UMfRcMozk6jl5oE09NmuqXsd4wHBkDpM2Isot6ahwdxlXcFju%2FX%2FoxqeyCh6P813Z%2Fy1lo0oe1aFGtA1fYx3p%2FcBptxTwsu1Sv%2F1D584zp2ppQr03nxfl4d7efRYgBMtlGSPof%2B8G0XaLYkOtuGTNkF0TVYLc49EQdTPKRnyHhqIna42X9qIlPjIZRlIeN6VRyfN8vU4Qg7yIm3XbeQUwVlw2j6eXU%2B%2FcXvPGUP%2FSccguPAVUog0iV%2F3HwtBnR4Uztk5%2BoZBd8S%2B%2BsV7QSJfGeigXCbMQ38NnpSWdF3dy%2FxDHCONbTBlrtO3%2BYxDli7h%2FdN%2BdjNhFt%2B0ZL6CdkmwWfRjhsN%2F99o1UEaThZj0cabd3D4BkyIMtVLowkpWswAY6pgHl8rRZuDMPgdNnap9LMITs9acyiS%2F6OMzaamkNmzN7F44vkI1i4ZHPm%2Fg5HrxioyNUWpabEob64Gwm8Ei5feJLvj41w%2FE2lIAiL49hseHqqyTn9PT7eJ7llHHUXPfLuIhX4PJxTDoF%2F53K%2FhDiSsTYAtCVLM96l%2FrNPR0hqZKjTQ%2FfAaDpym4yb1ahSKkCsIikm45%2FIAnvsw3812TzoB4dwxJtG76M&X-Amz-Signature=b7318ee1bdb1f62d93e57d7fd285ff8e308a8ea99c1b62cd735c06ac81b3138b&X-Amz-SignedHeaders=host&x-id=GetObject)

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
