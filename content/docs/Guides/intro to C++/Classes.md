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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SAUANGWW%2F20250420%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250420T090732Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBcaCXVzLXdlc3QtMiJHMEUCIAKEpxYhVokBuQJRj6QkaCkfHPXKVSpRAV4f6Tys%2F23EAiEAySFWeV4jqHF4HdbqQdSM8S7CiEIv190ZCg76WXRFDq8qiAQIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDC2VZ0ikkGoV99ox9ircA%2BrqS5JK5razdBSuLum3oCE5gqe8ctwyjUUBLv5tZGTJv%2F8UJ8wXn5bf%2FvaDX%2Btc4NXUV0zFE7fpor%2BEvo5DOnal%2BlcHY9I4tahl2XHRi7YAeGvdFDEDEQaRQpIWSStelRVZyqssq%2FQgK53HxYcXnS8k77yG6Ctos7Sg3EsasFaUkbn7ivGd69umGgvssTnEHI83wY7Rhj4IYW95AbuXGRr3wP4Gk%2Bo9tep9eH7Adf92qUxWal4gVGWE17LV31GCnDLZbxOKcDlx%2FNrzpoVFQSTabYY%2BMBpcCN2p0N0pjIV%2BoRRcGM0SdqTfZTOQoPjjX%2FcFiO2d6UVZjh1EqmsVd%2FlH1wJo8SGX1wpqid9SPJs2xqR11slCLgoswNVbYwtR8yFtpY9IXaSuNlxsnVHOcAHtv2NlOkGd%2BFBWBz035YDbJZ3GUvev0Jj6LLDAXa%2BGzLII2j0juVqd%2BBetsRffFB1AhyOYsZx8qYw5gquOsFUBIFk4wxZ8MQAV8ZdR4x3WdBvMxI7OfW6%2FAZTl1UL7rU%2FTQNPwe%2FzuvezbGJ4Mt31iwi7UNMQk86BwgXrIK22jo%2BkUKsoSrWnsoKpZY1xdw98JqrMUr0RV7erkmlqAjxvRWFsaR6O5HOnmtdt7MJykksAGOqUBkRVP3pg0JCQr%2FpXLIbMagsX2jSv6Gtho4c8rgqrc3Gn4n15IxSy7wJdJk%2FFJFQhVLIHb4sUnUizN%2BfkBex59NYycyJmCyAw39WdbIoXmUII6K921PyVMG04l0HqlPdYenPzVzS1NAxaBeTU%2BCTw7wjaYHh%2FGRYq1qPsPwck7eNeDXVnNAcBSUodizvFATZcP08MQLWxx60McH%2BFkQOm4q5YDcqad&X-Amz-Signature=7fcd3f2324861578937b4cda5c0c91bc15340d4ebbee1b12b135ec3e87482b69&X-Amz-SignedHeaders=host&x-id=GetObject)

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
