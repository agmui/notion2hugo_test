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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667JPVGN3W%2F20250527%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250527T220807Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIF6vwsNBMB38w9AgSYs0t9AMufp6nppy4SKAjLPn2PBUAiEAjpqqMOWZuyQbzQz6KEtfHbzYNLIs6bQlO8RIWubuKHAq%2FwMIZhAAGgw2Mzc0MjMxODM4MDUiDBo3a82skdl9QCO9BSrcA%2BBHSndSSbgwTa25MDSoMzHdMCOkoHMAzoN3G2evbfwriLj9KtewntKq6nlq4x6zz0kSqj44tM6hx0Bz4VpufMxQh2v7nWjXS2a5XSQjO%2Bem97EenLFdhMsfNQzRDtSWHNfdp3R%2Bq%2B5gmpuET905VHEDCIIvamXRPk9W1KoMnOINJeAo0tWr%2FlCn64%2BBRiz4wJYOl7ZyL4m8%2FUDxjaFUhEP0VO472EwNeD63nArWzuzdGFozNQeZ1iEw5FGo73vy0airU5MMckdjMJpXzWaPX5RVLFMR6ZnCW%2F%2BC%2BV6TUIe8qMr6GCkIjakJFQ2xI0jH1RXPJGOmJE9MG5FVSwlrfENM%2BwauBsB0Q%2FOn0Q8mcWDQ121OsNenox2%2FkuA%2FmBDaW8atornu8qnEiXfie5xbs%2FjEWQ8Cet5DfL92xlZaaORnd8jbW2MY5QbsTFKkugPniU8XtldUaLsWV4zSrt1kt7K0YhFwT1zOPpRgeyz8aZ224DWuZ5QCDG1n9oLYIOAmnH%2FtIuzesOgdzef3rwj7iXBaM0yFtlEP2zu30qW9EYGH8Jpd%2FRyEZhrsirngIy23pbv%2BDyTDkahP0fkc2uetK2EoweNot0Q%2FsWwojVjwzGKJmQcfGSUveHjLqP0hMLbJ2MEGOqUB%2Foo%2F4%2FehFxhHbRyzo9zMDEHbLkUCMqIy2DJK53mtZrpiE5d0Rk5rg4P5G8nAycjCZ7H5w74IPUri9V9j4xYJYJ%2F2XO9YCrcAhu6eGEVZXH9OG4me5ceGpXWsoLiCWTi9P83e4CeL2tvOkAgmLt7Ek62ta5%2BWEBJs0vjto%2FrG91RWYrxInNYIwBP7cVLRwuw4x8Et53sFNBpT8vgaVyia7zCZyQmb&X-Amz-Signature=cec9fd47bbf9a2d7da0704d14d525be48629e2deb1013ce7b720fcf2c6e91136&X-Amz-SignedHeaders=host&x-id=GetObject)

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
