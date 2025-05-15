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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U4U35PC6%2F20250515%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250515T220808Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJGMEQCID4nDe1w55ERatdL9yDxmqGLjsiJvQbzizlFUizjOH5BAiBVgTgTYYYceT4kZhSCOt6E8pykTtsDtTpYXv4ptmiYaCr%2FAwg3EAAaDDYzNzQyMzE4MzgwNSIMM53DZt%2BkM88LgGssKtwDpeBwX9gk%2FWFnZtItIdCNYWtN02ewq9%2BoB27iMjr1TFqFqM%2BkaqVgnrqEE48btwEuHOXKHNBc7I01k4oh%2BXIP8kW97qVsTz8dDy4rHFebL3xnndOc6huv28pHx5y37ZUkabe0BQSEy6v1pnEEPTSNXHjJy%2FRXliSgcnl%2BetC87k%2BR31JyGCWPiZai5kOmMdsk9L2qX9fGD11gX6SAqnfFEy8rMcNyDiUtyBMouMXtZKzQBoSfTmQeUPUx0gtSoMExf87xW8M2AcefXSDrl1M4rbNv%2BVVqZkIxMvUr52HZ5QkE1Y3%2F9%2Bdqp6eg%2BtirTkhlAlAWPLj07x%2BtWSC9rAYXYqKJE0ugybCGlXPDeTgk4OvzSd0xX8XuV4troveCDneWprm8DcRbiHFrk0H4ytKzlIgciwVgLLs%2F4u%2B7GzOJhIf4A%2Fi2jRmOn15Hkos2eK6PV2UigNlNR91AQug83sqLuClJ6ni4vdiDhhj5jUqv4%2BrHDZ9c%2FaC%2FTxA3zo4A25NnH7rtDLee34XEZR6bvSxfgoTf0Y1QCu%2FFuX%2Fx1Orxd%2BlVl%2BeezoBqpFLPltF%2FwKy%2BZxNzNHgX%2FsN1%2FQcwowBokiCC%2BSWIaUYiHU4OmCOdYmso%2F5nkgvFD5J%2Fu39cwgcmZwQY6pgEWyPac3iyg1GAFUWIqwSR%2B%2FQs4aLSTCvx6gbPUSr3sVyIZ8VshIb1KgeJrsHBXJXZbpa%2BMfoA%2FghfA7sM5CKX3f26j1ci8CEZ84X5WcHCaXr3feXeU5qocGyzOfQG6w%2FKYqWLPJfu5T%2BFFfSUcweUi8PfmCZU25l59Zo8Ev37ICBIOcVEe10a2dmI47Z34oPFzsCPE2cV5HaPK7HVPWXSAqkNeo9%2FC&X-Amz-Signature=74df899e1aa5de50bcc19ac74ea092606f59a1a6b4f1a4c6d1abc83fbcc5c548&X-Amz-SignedHeaders=host&x-id=GetObject)

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
