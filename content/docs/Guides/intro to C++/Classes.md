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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TU6WMLDL%2F20250425%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250425T181136Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBACUBMLxcmFhfzQjSEe7J7rsFc5hraJS8d7%2BazbK7TnAiAv6lADzdvDp6TZuuVusH6gQiaPVAjMDG1grmb1jx3hpSr%2FAwgzEAAaDDYzNzQyMzE4MzgwNSIM8Ts5HCMuQYd6c0DzKtwDAAZU4AMVanEJS842k7UFgVqT6rS3Y7rA7BgmdQ4ZdUYTproFWy1MRqWZC9PuT9ccepo7nYsAFOFcRj9etcQ70uSoRp6QluBdRxScPmy6fPfhjGGrtEb6oqtQl687KzuZ20UbNHvxg7OKnagAxeaLxwfWqVrUrf2GwXey2bPEWoHu5VhPTu51PLGhF4iP2cPggtBuy5GeG0t2fyM8iRFZky1H%2FRc5i2hSTwo1knkDXkgqUA1CILF0ZjTJm%2FD3l2V5qqLWdEt%2B6X6M5Oe4M9HyNU38gOQknsFRMLp7crw8LXAmXKq97CZ0xoD3oW0448Z1s%2FwmW%2FhBJtJFcXuaA6hCnkO3t8TXwyX%2FLQtsNiSkBSqd06OmqHFS0HVmD2IGbD78NLqYfE6pI38M8DyiR4pOHTo4IHKjdfyyXKB3UmPs%2F6A%2F6CEEpguYNdHipUccePcXoF6Qlxwxb%2Bwl4jqM0TKqfQXOGQQkmF%2B8p2soBPrTr8wHiSkurigv9UTjGsKTpjKJgCA5EDjB%2FUlWNibjFHDJb2H4xbAO4gTnuJNt6wMUz6RZV%2B0RjKJl3pWScVJ0wQKMlcjTo5UqNbOuxRSmwajzgyzyPR1lGt7pIoz1nwzzhAgc7FUoZA5XQiFP47Yw55yvwAY6pgGo5os5%2Bptz430Y83mK%2FGxerPFBP8DqsXzNTX4%2BVX8tEghPMv%2Fn9NLJIvgso1TL1QxcOzsOUQkrcU2IBo8efrbDwQ1TNzlihBkW4cDFR%2F%2BzVW%2FpZyx8MzaveO3fEk0wyHgTEhVUwJ4T73dej3pPXXos9NtsLeFuK8CsddKnS62Un2ChA1qANf1fM7%2BxN268lxWwRW6nFKNF9imgypxe7Jg3yyW4v27T&X-Amz-Signature=1611086396d926650579793ea8b48e61ce2476edd3f57b26b8610b818043c3d2&X-Amz-SignedHeaders=host&x-id=GetObject)

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
