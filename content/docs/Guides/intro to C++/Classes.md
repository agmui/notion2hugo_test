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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZI6ZJNMC%2F20250311%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250311T150856Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF8aCXVzLXdlc3QtMiJHMEUCIQDSYt%2FY2Nw53dY4%2F9iBkaTiSqzbaS1X3Dv9W%2FUuU71KQAIgQ9SHRzb%2FRncQj1BOPMXyErkDkTfHEhBPQmFQ1UCC66UqiAQIp%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKHpj7SonHC2QuOFQircA4o4ifhMYbnYbRPZgNu5pMxC%2FlVHyz61cAEJ50Yad1vjtYgUTSb6O%2FP6x5AsI3ofHEbHLiINMJcX8vjaXRA4XkKpr86jZfzy50VKFfUihv6lrLg%2FbkzLQVVOjs8gwRoBaSi9JTbEIXU37IhLIfw85nXFg32nxKrarRwMDu0bNHjx7chZTuXAfGc5ho9l9cE%2B%2B%2FA1WcntGS70EVyPlOzL3b0xbqnT3CEoezF%2FUuEA2soYYp94YHhldsg6shDjYAEJUKBSr%2FgP7hDGwQappEUF4Cticz2j40h37G52b7FSX%2BQ7wSOmrqsucA23X0VDeIXs2uUx3qg2slkpRruSU%2F8AbvZM8B3EMW5eOZQBNDazPlrUPzEobp7e2o8FfnV94fjPz2ll7tsOiPLShJuDRRh699QvCyl%2Bnjvi%2BE23Hv4Tflr3ePCNoWXBa8tAL%2FVMGvUnJncC1fhwU1XW6z6%2BIcWAh0NR0l%2FSm2fxV%2BBQcd8HbRd5kdV5cfBo%2FX5Gtll%2BoFVFNP3zgPj1JTpF%2FIwB%2FFvNAxwjPAmVlBUiLUBetuVilGiRu7RR1vP28wHpLI2j%2FZfNd%2B1RFlDotzuSFwwrsEOCHR18Mw4H01rkmlOZw%2BXEd%2BWEzYsu7%2ForJof7c35CMJGMwb4GOqUB4RyMt%2FgYha8irr1A1EHL8pirzgMjNsQivLnTDgmLskIgznmShVZ5zVkxiQK9z72tiN0lwF%2BQ2OvcwLv1Aauz9wPJn1cyq4quGbQzkz%2B5i6s9ArAUxkcJcynRcK4kaZNy5MX6H5%2FV6ty%2Fmg3jDCa%2BGYsljOhoPT%2BW2675lVMT4ED05eHanLJ9ls4Xgc0wGVH4Yacu0t0lV1yyDJKhxvgxtarCKs1H&X-Amz-Signature=e15febd5da2402623e57c90153807acd2f789684f6d5528b619daaa55b0bf04c&X-Amz-SignedHeaders=host&x-id=GetObject)

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
