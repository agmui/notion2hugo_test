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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y6NHA2MM%2F20250130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250130T121341Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAWPXyFPwogMoffm3Aa7CWFa2HKpBu3Xh5l0SiS896E5AiB10HtYosQgfTwBAr91TTSVrkpby03RUFQqhDizrC0PmCqIBAil%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMjeWK4WNoUavaa1H%2FKtwDH7a5YWCyGaZJ1lzfKjIufsmn39xpcBTIMk1Xdid7vnKVM97kZxyDSSV%2Fl6YGdgHeDdWpbXFwi9mTMzBeG8gYSoXPv8ch367ltLsB5G0kNGjI%2Fe9JHu52u6DTWNxZ8ZARYljb7RfdFPiAeOWx%2FWXpDUGmJuoHzZd33FYSdsbzMnXaoC%2FVjz5VdOtJwr5NRsrPDYbnmomM1XY8OoKCkZRX5BmDxuvXtLP8G3MkQJdSHxqgN6nAcFYeF2OwtYaLoDAikyaSua6r5BVlcb7%2B6ToFgzINRVYc97J00Ry%2FwoJrvfymkAKclQ7Mn7jMxKcJrHUVdR6taje56sTM1xJ3PAMIVaPz4dDgwRwEesnLiBgtsX24iRoncvIl5vS%2BCXGPR%2FllL%2B8XPmA9s2y1f6BmNxuJYMOriePXjnNujcKM5ESHmaVL3KxMaEOjVr8QII5%2F55nyuIg6TX8ENn1Ycoe17TWVTRas2xVnTxoMUn6TUIpipfMt9dsvewAqc%2FqMR%2BP8ARQDJzaJE36zfaSFw6hDA8pZXRrJ4F6i02GKrpTfDKbfeLStKkKsJpwhigXOhdsoLoza6g8mkbTrJbKw9PKvG%2FXrYoZpwO8f7QsO0PDoCSrMKggy%2BMfz2TerGnipx%2F0wnMbtvAY6pgESdh3vFOk%2FhvNejo1J7dBPQevqLn9B6AXRjISIQJ%2FnafEGXMwpPWYaRH25tN%2BeJoVliQ4qteBXhQ0G6WamNJ%2FgILHYD93dglYz8ikS%2Fmz1slBO5usGEn5gIGdHlHVcx562zus%2FCvCpGCHwpS3RumOvPJchDuhLp8qL0qj%2FJsU2q%2FZgm3TE4jm1oddZMyQBkwP736v8SOzEquAUJHZCRjLR1WKJg%2Bxb&X-Amz-Signature=35831ba3c80da394eb948e8e843080671bf92d349bbe1cc6a9d3f26abbdff83d&X-Amz-SignedHeaders=host&x-id=GetObject)

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
