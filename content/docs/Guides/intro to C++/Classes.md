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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ROJC3GG2%2F20250514%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250514T230651Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGcaCXVzLXdlc3QtMiJHMEUCIQCtSV0jWXg5trDQin5vkUSCyx1xWhKCj18j1Af4kuCSbQIgVGmzVbuKFmxQKhhi3cEhq5S2XpAaOzo4uhOEyn0PpREq%2FwMIIBAAGgw2Mzc0MjMxODM4MDUiDDuMiwZ1D5wz1F8wmircAyQzFj3FuY4lc3PVNuymoi8m4rKIqa2xpVbJKsy%2BLoSICB42JAKbThRAoTeLoYXty%2BcygauzRA23z5A7cGAnI8hsq%2BJ7EAovEcPMnwp1LZoGVudXv3RnlM%2F09tO4lz5j%2BuOxOYgFdCRCVENE2A%2FVP8E0puVHtaQgP4I%2BxL%2BVCQHNw8L1PhUkvJ6ZoH0kDeuPHDNTV0lcLWMmcJHNqIRD1bOPLpKO957KOjora2CRdq55oNLpDKaUjl%2Ftd5w8ZrJ2l0XmL2dJkScsEiXBfdtL%2F4AGFuAIWq%2B1uwXpGlBBStgNdpF3VUKFwF72h%2BKW4DMrICk5%2FM8J4kchw8hWE%2Bhe%2B0FsVimVTY347FGUWJDd4WOCZBWEv2NNtVufbvfZvcOVZ%2FVZaYleLWSz6iPhC0xYSejYYBCFNaA7jkCq%2BgLwTmzuc%2Bvu28lLV8DLCmya75l1fP5DuUi2c2n6VNW6k8gEuWDGqkjixYjg2g%2FEDfC4CSAxwKEsspKAf3W%2FOLewzjtjEDjDm3qJwmwV8HtQBD%2Bpk0pzZPGuwKZ8m6ccxmDSU%2FYdnCRZt%2FRMnZsW2EnC88oRhpRUT59JLNeIaQ1thOqrHuor78EQ5OORkoPHkELbvvwO8QLTWQQXh2aaiPm4MJe6lMEGOqUBURocxvVFiVuMCgdg1y%2B4dgqIwvJa2fnX67f5lqfaE2KT52ns85D%2BU5Wlf1Lrqq6XJoEtDeMCtHvE%2FBlRQsWnEUTX9YgZEh9eLQy%2BYj4idaZnguX7pBTumeZ2BPJ2bm%2BknwvkDax4O7QbcrC99psMmC%2BB0jE7RUkXgiuxU8LN%2BuxAf87WCukYuUdMBY%2FhnIxj78PNFP0CnyRCh%2FUQzrxxBKrjVyRF&X-Amz-Signature=776dddd1794fda721c57218449ca5979f838a5e433e2aa2a9e982194b093e6bd&X-Amz-SignedHeaders=host&x-id=GetObject)

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
