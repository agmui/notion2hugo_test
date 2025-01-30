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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TZNZZ472%2F20250130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250130T131416Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAzzx7ETGxHQ6AvFC6hOS705%2BRqjqMjObjnonwLHde7xAiEA7%2BbjtRwZ1mJEGbndHGXVin2zAOpXcQb7kpsKok1idjUqiAQIpv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDN1L2dWtMIEnX5QzKSrcA0%2FSGwERV6FrFQ8Itov3xx4bUEUBz%2FGG8sbw%2FuM78pqOrrNbsTpwDZIswctLipTppJH5LKwtj8bKg36H6NxgiLLGKUsPcQsP7FBmnw6w39RNa209pYNMS0x6rVyWNjEL9ECSqZKUMPP3dHf%2BAhpFx4rKXaDHdJA6%2BpntntUNUXfg3sMOwt%2Fc9e7pvhZBRSrje%2BKxG1a4NULQvXiqV2MxReZm4LnwEXNw4SbWUVM06lmfk9gG0XJH2vhCHk6RS9xyHRO1rPEyMnCo86UZPeIUrm9ZKUXJEviJQurIou4nkqRy2bny%2BEVw4KUL1xGBA83uju7pBClzfIYJqi7OQ5PRTUkd1U1%2BEuno6XdbckryhDZCx0VLcOCJNKnaVb%2BGiSdehWnzhl9pQYgsb%2FSQrvE0LWgopzXgb0jxu7qSwnIY7tdWc%2F6EzUJVy2rhhmg%2F9mokV82sMvAlGAM2n5rWuTZS7hzJMP6he3nCJFKJ8l0dxHgfaclDZ%2F6bxZaZeghpz6WBXXu%2FIXsJvoSPr5VWg%2Ff%2BrgIdaZHvFKnb5jOK2fCkpzGcMf4nZgTnaIRQq9Bwg6pHZrWDnV7nDMISmoIghARYcPyZSRpRyvOaJnP8OZbMqPZ%2BIWJXzmh7pJfrGN1LMOPg7bwGOqUBSxagFwy7crBxnxQ2%2F6sj3xLcjovfcgf0QPBsFOuyPUSJs4D2C4XV%2B%2Ff7lCdCI0X%2FVxkdL0VKzsvGlnavUSi1W32282UuIzf%2FVVEpS984e7%2FcjvAUfM10A7aUo19chUUSkKO74z%2BKYaBL4kfPBopibJ7ELJY4D7H66ZxCn5MZfBwqDKCpDXpkizVqC1tIWpVnhI84hiCwytmgQrKfZ15aJFl3m19l&X-Amz-Signature=b9acba04ea0d641d8363f7129e4ba25d9d4b7f3dc5b2ae1f0023fc47ccdd9a03&X-Amz-SignedHeaders=host&x-id=GetObject)

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
