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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X53MIQVW%2F20250627%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250627T140900Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH0aCXVzLXdlc3QtMiJHMEUCIHtCqhmBF5RzJJbGradf%2B1h4gogH6B2yp%2BJqTM7uJm2cAiEA0%2Bl3qardlicCl%2BHc997KmqFbm0itH7te1kyvRjc89BQq%2FwMIdhAAGgw2Mzc0MjMxODM4MDUiDJFpknkGkhJf2kqnhircAzMKLig16hA8B9lRyd485pjQgUOhwHOLuOGovcuMD4sPtjE3zDEB5dEwhtv8jYZGMQgx1kY41B09ifjZwSmsNHzezZBsfldpaV4V6Oxe8pfgj7o2Ty573ApcpIx7a%2FjS%2F2VrO5Uuu8RG9HmyBEUCwGDlbQJWdATqYpAzG%2Fh8vm75ubtPYyoLLfxBmveOsgJce8oO80WJz5FrvnAxrFOPR2zjLu6Np6bVrSGp5s7iQshwnnDoIcIJwPPaVBGOYsd2ehDoE7VRDObozUSLNAL37tooE7uwpV%2BLnXygBe%2Ft%2FVM3FYhui02WRvBselaZ3Voxu1uzSiAaTl5RgdGmivsio%2BEIVuSXoGzbMOFPFpVDq0rj%2B%2BZ3AsE3eMsHQ5fXlEqCIl2P6Pck9Lbdj0AJYJVKxTaDjyl3yFwJsfGmqVm07iPBibrUx3nBhYRldOjav64nAWqODBzlvnVt20aYnSb9NAfdRvuyQyAqwdk4X3ukg%2BrpQecep%2Fi%2FwfuN6KPhN3LyclCk1IUSaFbo8%2BIay%2F1BdjWSGwXogj3qA45O6foMtM2F9lJxm6nWEZj58dpmKJb58%2BvgL0aXYOOgFwQX31M1pgo%2BBFOy2AHOVEEPTWY5xeAkzESz1Sja01qdsHe%2FMMOm%2BsIGOqUBfgZHigmHwgjF43hjsoQtKatvXPQq%2FTue2jH1wFMQJN%2FUBAW9PA2bv7fH7WYkuxMSNzD3XhQMZdzJLh9e444WSmo0mj2ZEBuCl1SazSlvgZAG%2BOYJM4mwjAIeUs6O6jSoQzHnop5EXvNEUEJJKI4VzHCcigq5QbXFdLgB8v4EdN3iwf5Bb0OAaH0uk5hfqqmpK19gupr54uM1653kI9nPuuzYTWov&X-Amz-Signature=578a62e2c5a8b2a82a26ebb10ebd8b8f51bc6dfb7d280feb54eee4a8eecf5f0d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
