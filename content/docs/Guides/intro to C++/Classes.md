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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QFTPK63D%2F20250322%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250322T210329Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJFMEMCH2BIqukP1HBCm%2FLi4HQRDS3nb0A8RaA0J2SuKfTm9VMCIEzg%2BI0Dq0WHZy%2Fz2b5WJiKaG2ziN25SKex90xah7WUjKogECMX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwvA%2Bqn2LlwCjT6vrQq3ANZxmoPa7EJQQ%2FTnR8wmZP0G7oXSYKMfu8e9UAMPPOt%2BJhADdNs79GvDUqOn2ZJOv6rPPs5famfuPJo62UVl9dMToW%2Bppgf3T7S7GgQBKfDMABrceOcRjb8%2B5%2FPodYkl7u7%2BM2MzsQprlJC%2F82bXhLZMKKLFM8VFjDQbQWknJURygkCwGW97H%2FIohizBSMgplYW3wZJDP8S71Q1Y2r%2FqGk1FS9vzhy1g3eq0v7hoSGpT%2BKJxXKjQXgXqzb7fNiaHD3RAWedTHbY8JvXuwxW5U69mDyxjCNLpSd7nN7MMT56dkmIvNZL%2BbE1enEzW%2FSWhS7hViKWe0Tmt2Qh1SE0ZXYoO8gwlD5MKhl%2BAWTRMrHhTz3YApVmtgan8uZSOdp8UHhN26%2F1JWkZCgO1nQ9ER1hHnqM3gKdWJ%2FSZ%2B%2FQaH1BNfCt3dQMgTgIAjBvzkbvJNmsPNnSSAJTJZscQhoIkB8GhHHYSiUVw1kqCtOErv7qie7gg%2B%2FadKgclOXgZpAQpOP7UwzTVahaMXvt5XwDr06%2BjhcSav4Vapw%2B%2BFvhY7JE7u58VWSQyd6OqVADJHCPRQquDPwacpml7yxQoRyT4HdELcNQ3wK%2BmS9z0KPFmndwdZUOYk9o27hffApZuxTCctvy%2BBjqnAeNsZSdVPpxV%2Btaf65AFnpPimYs3qQJgRNKJU4Jrw1tkbnKzFrFKpolF%2BfNGzZyVVLQKMXTFq1s4bqyARpKLj9hbMqBIsOiO8uSt5PLIivQIrxPzFHte8r1y9g5UciBk2xscKveBShhXwcBaqykuBKHgx2cc1Wkt9BGYBTRFK2pdbyJ778tM6ET23AMY6m7Hw2Fs1JQPVfsJl6pWCfdJMD1QbMIn%2B77q&X-Amz-Signature=7270dd5b9dbb8d892b2b86faa6f7f24834c35a350e9e019459564d8bdc78c940&X-Amz-SignedHeaders=host&x-id=GetObject)

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
