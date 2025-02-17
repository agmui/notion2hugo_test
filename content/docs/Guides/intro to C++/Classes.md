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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UZUQ253U%2F20250217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250217T110520Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJHMEUCIAg60UmuzXT5X%2BqfQjTZ9BnDPoA0plugcwZmxAIBWFGdAiEAl0XMmS8cBOKeDqavWnU3doPpvCPn934NZ6womuj7cFcq%2FwMIchAAGgw2Mzc0MjMxODM4MDUiDKwpij0P7pGYP6gROircAw5NSD8vLzuQH%2FZnoZhzwYWcOvsFYObHPA3m1oImfwxoZ3K%2FXdnkUAD4kb9%2FOwDNM9gS2cidEYzKb4o2txrDD0Bc5xzuPgJyZkLmWJ2%2Bz8Oum5GCjQBWoOvQcJ2SdP32w59U1kpDXSpHONJ1Fk2QStAlt7rd7QblzlSXMbkfq38nWdRSM0EmB1feZcPQblIRmcP1XdqYHDvNkyAaSD998%2FGNLL2WfQQh9iJtNQr39gwUukUyYxwUX269r4d%2F%2Bl0QBOXWCZPZjS81ExjzKUpSyFORltct0LmHwmNrG%2B0TFS9AJNdRe61S1sttrP0qFQ8%2BmssZVVvQp2YI0AY6ZnKS%2BWRaxLP7OwF2EcRKMIeThUVokKcwYw5FH7nHgkckDab%2F%2BezgaczsfJ4K4q5n%2F5soG511OyLHhZf0XtDMOwgYlx13mjMPZnYTk4VymbnsCwTrxGNvmyb4MxIlsjm6W3h%2FmGqftRIRIw1SXZ9smgxAsgfo63LnjpD1ucJ4tb1KMLcNDvm2%2FqYabkRJUUM7IWagbBCH0oqhrxlrRoPzAjky5ihZtwCif9Jr2NGxBfWi2FAl0G%2B86fbyeczgQ6jIWv%2FDdh4Tq%2FGrSGcUt%2Fr5Wm%2BOHL0Hi1zvR%2FhLL79tTLmqMMXqy70GOqUB4FGSLJUa6k4u%2BaLT%2BG95cypcPjfpMW1cp0K5MXUNSOAuysN12Hfc%2BVITtrzroM%2Bzg2zKp566UuGvGpwGN4Rrmf2eK2zifxLBRQp%2FXxRp%2ByA6d75q67SOGmmq8a12Nw5quFENLqzjSQMO3de1r%2Fniz09WRI5DvPw4ZqE%2Bugf7nG9af2y63aslhbKeHPuqdvoTHOfCmBnZVagaqHrCEIXp0GlDkf7%2F&X-Amz-Signature=1dd4bbf4a283cf1f7cdc7dfabe81a298735f7b4264ef298270024e320d2e8451&X-Amz-SignedHeaders=host&x-id=GetObject)

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
