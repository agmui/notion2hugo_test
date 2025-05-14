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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665RJUJW5B%2F20250514%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250514T132258Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF0aCXVzLXdlc3QtMiJIMEYCIQDvFjGEeE%2BSzKmD%2FlK2M1xAq1EpOi8s4wmc7LlP8YgD5QIhANmQyBIgbJ4F4GM67AA%2F4xAMMnfsZqLn6CFGWnJbclKkKv8DCBYQABoMNjM3NDIzMTgzODA1Igz2%2Brut3a3dJj49F%2FIq3APRcEGH6XKmrcg5enAJsRIRBmXtbkLPaciQBKvZMQ1XamOkan2ngi8g4PgDpCN0bbSfuv1%2BS1AU8BbJnsAiJNFlcYyIKdOPu2hbEWRFEiV99jSP6VhM%2B8Hf%2BdIBGpZahfQr5D4iVk8Mr%2Bsb4RonZ1etarEyriuDVLOWjJDwwKWjcjU%2Buz%2B1Qne0caDGYMOc9t2Gq3vcbFEisKkHxaRjrjDq0mfe6mw28%2BywxgwU5ivgahZkVAHgHO1zHVld3KvEV38ZavRMy6USo9e7tQ5Q39dEntcKdbze4GRLvPiHy0uRt9o4N2RMkRp5ZAE0925NQmqxxTLynuoVImvPdWo3eaZvjnC3xjF5ffMuyjKvfHoVX9ckzaAd5xwDPGy%2BJ7%2F1osAfyP%2BjvApJOIGcMp1eeTTiQuLEdApKU3XW1rezG6clliOmI4ENUQeeDBTg9njgZY4iFo1jJ3XjKUxa4xzIxd7w1O%2BkEPxOshs7%2FvniOMKC9OImnTpUwym3eU1Je7RhH9Xzev6bmRIqBwEK%2FG0KrY%2FCL3rj%2BeJiTB0OPx2QbT1Hu%2F%2FLMchpvQlGFehBzan0w9QbLb9YEpefWhTiid8Qt1grU3IXb6QEMNLUTl9UrN4QQZ8r0%2Fa9notGUztisDCdoZLBBjqkASFqd9KmDjx7bN0%2BNbnXZPr%2Fk%2BLhfHStSPHg%2ByaqoS1hwmM1LkVStVcgP8BdWLzVxSNKdsE%2FEWT9ZUZyPIZ1aRWFVZ4L%2FD7BQlkeGS22tR5xdDhlNw1eWKBZaN%2BmqUC9v5bKGCLLoH0lU4dImQo5zBgHoGVoxH8LHvC%2BfPQIQ3yPUEYCmPTBMzRRQHUmO%2FwGy%2FGykeJc%2FMPzh0XKiEhDR1sDSM15&X-Amz-Signature=173170b8c12e716bcbdac8d22e34c75a66dd654197e387100bd8b74a6d046545&X-Amz-SignedHeaders=host&x-id=GetObject)

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
