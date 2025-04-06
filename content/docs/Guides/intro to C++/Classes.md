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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XEMDOKAW%2F20250406%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250406T230657Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICePGqhvSIcOOU1D9KUrmHPbP%2FdrvX303nLAYFYkV0qHAiBAivB23BGyie3FfuCwLa4t1jycE2hj2HYhp4kU8AxRoSr%2FAwhPEAAaDDYzNzQyMzE4MzgwNSIMS%2BHGfOyxk4RfGegCKtwDFzpnAuBNS7pRB8tiYnjot8SaACAIyaiPv8K6lPHJ2HsaUwzLvaYXnEIl8U9sCVUYb4FBb%2BiKZRP4uQD7ORMzlElL08tMdLG4MfvOkIfcSp%2BMsOz2%2BqF9Pd5u4jQQ0Ryk5RrMEmEGzXY661bLatVJysoBaeXtGHF9knO9znwoGLrjsW6XgMhb7gcidsYVAd%2FOmwp6DPCTS2yz9ySnTO3WTNJcxh6RCTrxz7S5kOHRGVWN4kS7PvdPVOX%2Fee0kVcD3kTJAtTeBtyDTwpQRnR%2Fsx7e9yM1xEl0PAymGid7ShqUz2q309sS0%2BUJklggjOqD721Yz%2FgG1tsvFPrvuxSsYiWL6u8sCEzH9PDTmPkAmnvvG1pkumYDpCUA6IFNMwvqJvRRk6RZI9JGIQsMdlwZ9Borh0FHb%2BJdt1LWN3wm9Mr8aIU9disAWxAz9PaxaKGxuuqI9EOq5GSYuJFvHOjbonbJSyh4qE1Gp9TxVD65kO3QqWNzTI9tRo0DYpXUL9MAP6ITeOLMI1uXm%2BEGUv8zdh4bOXr8BsLvasMPcalMWeUEekP0YPJ5Y7VbRyugpZNfb1IuOWPznlJNCLkTIA1vXAk4oXwIUlobICk6hPznsPzxHe%2FNtD7wbdgM8Khww0%2FTLvwY6pgE09AeurbOTYU8C9P9ocl6iq8AffUfTlMzf1iMnEm4sZSOojeHiJDpZR7d3wfW6c8eRoSvZ4Isn7HzVwug2cZHo0Dc9d5Iq9Xalowm1OrcJrQpZrtwCLIIp2LJ5TrBBICW8eu3L%2FplpqBUtVkTqroD6REdFiteQqioObvfL9c2SSEOJ6n%2BoleBRAHCh%2F4OeB9NqaodpCIHM7B1yBfPCWu3MAHcjaIvo&X-Amz-Signature=44e1d11d5d9b90789b48a7c618c0ad5937482e7f6d487e9650f0611063596fa5&X-Amz-SignedHeaders=host&x-id=GetObject)

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
