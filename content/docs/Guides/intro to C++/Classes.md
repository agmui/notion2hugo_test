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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46654CAEAKV%2F20250531%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250531T004022Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFrD7Sw4Y7gE28GIl5yksDmFMmJXMYvkEnBAVpeYgy9jAiEAuho0bReu5mKC1b852DwfjrgphFTIcI%2FCNIonbUAPeYwqiAQIsf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAZlWD1%2FBq8gjj47SSrcA1L2RTE%2BsQN4MYTqeDqFUKCi5sm6aRT%2FTrUPqGPfcHrAQINmGJdPF8HLPuYzplRT1cMYMC74%2B%2BuFqt1MiJLo2g37fJp8mnbv7G3%2FDLkov8eNyJmbWwD4WluWjDYVxezGtsU4fTBModLICsqDCKpf4DyIlNDKW9XHjXpZ6%2BElIUlVMpZv0IAb5LTFzfIf0CoJXwPIva7dx9jp5xnEFFpjgtMDobDsuvkmQwVILbzq82Pfyl%2B%2FZng74IJEnB2X7lvhk3cLXeLaZAW0UT1Ei6CnqFQefoSWG4L7yoVRsDD%2BWJ%2BPWIbjgFiRhePawo%2F217W5u60Uj%2BZYACy1D%2FtzA8Ub7N80%2FPR2DkhLZ6QoFmxSIb%2F36W%2FvS5kGZGMlGsJLvzFbPjCIUvpTpobuctUNTZHvHS9n8SrnTvwo%2FYziUS%2BBNz4COkIudGoG9tlrlH7FTrt0EqRuIKygTlDWqz%2FlUH8GV8Mch%2FnG5zly4KGTAEDIN0pn%2BAvo56klVw9dz1LOo1b%2BG3lJ0jV9eZTzkzPf%2F7rWA40syp%2BnaEx9U5HejzKwAhkoKNHrpP599w2v4jHKfaxvMZFDDODwqBNkMOEgOyJtW02blcn9PidF175l3%2FzRZ%2BkROQFbmOFwUfr583MnMIaX6cEGOqUB3gu8%2B4obuwcGsShn1SaUOScaAJ%2FXzpSL3Bfj1tPzq6cgowa8iGExicRYQVBPDMy6Yb2b3KZDIDUGXAgoZTxHHPgBuxQfZMxzypjuuaNgWlFtzWkekctZBMV90Ph1CWagTGyXlq%2F1AzCys1SVlN6jD8vi9YuqwMraTxtiLZI%2F51PSJxrghWw2I8q1kpn2yRHO16px%2FkOOM2rJma%2Bl4FyrWVqBGIqL&X-Amz-Signature=a6cee2221d9839c55b81539c976b7b51b426c11d71d96fa2539401eb7e69525e&X-Amz-SignedHeaders=host&x-id=GetObject)

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
