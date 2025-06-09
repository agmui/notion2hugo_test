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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466URQ2UBBI%2F20250609%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250609T101010Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCWDnTZ%2BrRFbJ6LXREXPwYh%2FF%2B%2FjG7rydHbHOcuKatBNAIgQOdVMu4d%2BBFTptvRh0joy4bQuOrt%2F3GcbpRxro4t73MqiAQIo%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNoM0swDIh9%2FgreVmSrcA7eRpES9PfFK01ACbbTIebGnSFNslQkR3fPAQebyrNjK60jLBgM63ANrInnxeFKgGyfJT157Ob6OuA6FXRA36eak%2FQGTy1BIejF8YoYm5Ivx3p2Fuu%2Frv%2BZRMVEdVgCQybX2Nx%2BMbLHWZpmNDnx6TA5hFpOT3%2FTPLPFIsvMTUFNodHinuba7Tep9FK1Wk2%2Bbl2N21lWoFVDBXrrqS48C51kc4gxi%2BIXBzUpUHdJGS0GYy8MjIBVnVGHJjwktdgITtSTNG8oAv5qZVzhwdqi8pUlb6BUTo1vzecicwwIHXA1%2BA7W6ghycNAa%2B0dGoz%2B1Je6F5PWmJqVP4SzgiAR3mhIfQvNtSr5%2BK%2FmlM6fLgs1Xy25cPLRx6p9LNoZpCH06YpZl%2BIslrfejdIBTjxR3tX9Te0%2Bxa%2FU3S0BZDoj6u%2BLQ7okINu7OA06S%2FbGeGB0uzzEvhjl4CXaytrjiELas%2Bs2ctdK7CFAFTV%2BkvoB50xtagoPaH98ZDgaL94Vz3RYHzkgnoZ3SAvt9YSrGDFG1mQZLzHwEMdmQbTYXhWNZ33FJwG4ISJ%2FbXUc9TXKmyxirdGNEBaSANovD6NVZ1UAsWYIt3f1oL2Hyd7ZC3EuoF%2BB5ot8nxXcj82okiZXA7MPndmsIGOqUBQtsnZmmdjWisRF%2Bj7tuvSxqtrCwMec%2Bas%2FtFJDYzgKcVy%2FJz6ca8LuzYTcJp%2BzyDGJuwb0Jf39x%2FYb%2FyET6QEiaPsU94lQOJtTGXQs1EZrNploRmINuAKK2WHdeay0yuwu73kLANw1yRW%2BS8eo18Og0wbGRpTe65B2pcwkZcGPhL2GIv5pP9TRp8RFJnYIvkNEQUlF4FkiWB40niRJJ0WgD%2Fw9WP&X-Amz-Signature=582265376064d66506541a69f96aa363d6a8f6c9471d7072a6ec1a5d2e71b46a&X-Amz-SignedHeaders=host&x-id=GetObject)

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
