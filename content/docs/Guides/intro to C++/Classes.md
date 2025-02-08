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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667AIMVM7Q%2F20250208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250208T110115Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHAaCXVzLXdlc3QtMiJHMEUCIQC66PHjVKjAPKi0i8V8PnPXf1WlVh%2FiczoixTRc4BZOiAIgHJM5TmCOWNoq0IgVtrTiEDthINZVaOsA%2FsPXolxFw1QqiAQIif%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAdAZLFYO1%2BnfkhytSrcA0njgWIn3EoHMgcLhln6ag42WxBf2zsX7qtEY%2BhVbkZujZc6m2IEKb1nh0qHzE4bxFqUDUq2TrU1r%2FFWpYuuzl%2FBCODyBh39kz5FGqPEMfCnZtiOvqzzbiiPSJ2i0iLaQ2%2By9lbsqNzlml5UiFsF%2BQfxzDbs5dNwBtMALbJy8Ih0v1%2FG%2FFFcIErJvG%2FHYeNZawZrPpydgxQY44dMUn2NXbW67RwnF493pbUEFZWI0pEUlO6ucHE3ykUzHovPUxN%2BgOn2Iu8VlXt15ITaMQdx%2BOsyLNCnsGihwJE9plLT3i89kXRCEQgc86pRuB%2FzOr2hL0AnTiG%2BWjRcL487gxED%2Bf5gDoQ%2BqGulV5au08g10nRDZ9JoBTlUdU8UaY3PPgU2li2xGXKMtORTm%2FEA1DaSVnsh5YKSNe8VosD28RfFKtBPapD6xxCzwyCRYE3jG3LJffS9z55Pphgcc8N%2BSDPRAj6nSLzGjnZOghRaPtTjEdykwe%2FUcBi9hM%2ByCKt%2FvnCgrEG5S40b%2FF9avCPC00blXfoj%2Fgk2CKT3bFyAl0sBGzMA9lpqRb6I5uCZzotQCF2EMl1AqQR8wHYnYGZ7k6E4MLa3MkTxK3k2hPXN2u9QedR5SzAp5n%2Fxs8syBaT7MNOPnL0GOqUB8%2FVr5QdltaPXJE56K%2BfjX7L7Jw5GKgvQ7WpNwqPOU2qH4zK54oWzcjqNvKjqVRUiFf31xsWCqTcYZcwDg%2F8EsONh%2F9C2wB3V7Z%2BW1ZPJSmyaDDxzFyLc%2Bf%2BqC%2BUD7HsCGs0uAF4aimpBIX%2FyOGgy59B4vMv6ybXNSozUz%2FLxd9Kjg2VRMYTiOBbtL5qeR7goTb2%2BmkBxF3JJO1zM96usOe%2Fr1wCx&X-Amz-Signature=ec261ee315742b8328274fc8b1768fd1adaca18ff9c081e8a47e5384a05bbce7&X-Amz-SignedHeaders=host&x-id=GetObject)

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
