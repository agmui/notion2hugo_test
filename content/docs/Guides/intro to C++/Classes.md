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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YKK343KX%2F20250203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250203T181016Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJHMEUCIDZX8y%2FQkktdRwoGNcMvGQ6Tn1JGAV8ZoORxEC7nse0rAiEA1%2F%2FctF4ofen8UqZAWx36GEpq0hDdMbA14W%2BGv0QX%2F6Eq%2FwMIGxAAGgw2Mzc0MjMxODM4MDUiDC1nclxnFrSmZxaQQyrcA19RH8wB3UR3k5CW%2BAbb8z4LhlmGD3D0v4KRPB2v29QwdriHnKuQq%2BEOM6yjg4YaPATwxyCIA%2BwtgMalJKgk5hjwZy5cWIJYmOZ8312BuVVKkHIzKYmMnxZENmTgmvq9FTgL0LzQ424umHhUY7hCPgJWtDvCDS%2F6AxuGLA%2FeVdl5U0LuVJ57s0it7b9Ty9m9pxNoxfBzxSaQYdmU2z6e30c8HBugy6JvkyU98qfnpMt%2FrhO4uxnJUUFhA5l9m6HYsbpLOKMkBcU8RlxfBZiaCqkmh21CYQDc%2FuB94yqBl%2FAkQ84BQcUWtZ7Kip4xkq8V0T626ETYKpLZidumOQYGNDLfCkQWu4OWcIKeh4QgAsQHCt%2FuQ4ucThZ3P3KXqAR9%2F1XW41y4eKuQA%2FKyAhpRMVSaEtmjFqTWyK9oqgk6FYUI5qF3CTg0iXvJJr61BZm%2FEJOu5Wwxh0K2GroXdbgI6EXiOfJN0fRqb061dGuS4Vr%2BnD6IZBLCupiqrAti8b7qtAFKip4F%2FT9tqP4yeCuNIhmR%2BdD2SINhENJMgC5BwK7%2BRQ3quJerZCWk%2BGgckCFNmwJccQFnTu%2FRm9qGoyHKuMvUKbiN2O5ciPeFo2hfxrY12SrNIAd1fP7nubcDMPSEhL0GOqUBzT%2BAHbUduh%2BgcOKaeyTFpO216AiphGRivalcuQhaX1SbiVyFbUCzwq%2BU3z9VzGU8hqSSubZ68FLXwrxLhrvk32lXSxmSidz%2Bjc96fl22DxZY8%2F9%2FinbvFMns1NnGLQNL4268rft9iCvceGxeikQqifRwyy3i7y0zk%2FAQyZsmRjqlA1Gipq%2FFmkbKaotWsl9zVuhSom7U9s%2FFtsXjaZfgGrWQNEvK&X-Amz-Signature=c96d18ee8850a2d278ec8f8dfd808ccf6f4f7897c097b258dfdef3c318259d3b&X-Amz-SignedHeaders=host&x-id=GetObject)

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
