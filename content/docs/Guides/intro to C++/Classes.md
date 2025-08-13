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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QZLTCFXU%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T210820Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICPZkIHsJA9uXKAZCysD7OJxbGCWgoMkpYwjFqV65OezAiBBLDWPQd0p%2FrFY2ZYOmnS%2Bv1VdlsoWTkPcqhKHIYDrUCr%2FAwg1EAAaDDYzNzQyMzE4MzgwNSIMsp2ROgdkGMqLbTCYKtwDj3AW7y7Ic2ZKRpIV7WCOh85%2BhdCKx5Dtqr7RkwKY5rG0M7nNRHkv5NC36InMUYeadDJsTJAiKJ9JyyHbg39EqS0%2BhgCA8h03v03Q94barGWQYRQEVSKsN5TlM%2BFyA5%2F%2B9V2yyWUzomLqV3VdeJMb48BtKAG7OI9ts00wXBG6sgQzSPaytPOJ6zW%2BFtq74Yhf6%2BmVhqLJoR8lw7dHD%2F%2F2Y%2B7lV2TvkAXnbD0owUvWNVKVPiG8ecpysJ6VzSAq9unrBWlRTm6C3RQXUBzwUqvRGvhBN4aEU97ozwMjUMd0oVlsteSDA0yFidDM2T2nX0RpMXQ7Af%2F5uNNDaUYakeIKURE4aKRfH6pdusLngAfvrRIyXCwnQZfoOOWJDLZLTed6KS2VeylQ6ykaJSyHz6irzfp2FZxxr0QHXUjE0dsuwuyW14Un7yt9o%2FWtOlS%2BkitPLKbww8%2FXtPB8bkfW1Y8sTPT7ZS8iWfohq6evQJP0GkEnQIyKyoa5ubl6b58VzGrZmlYGks%2FSrGezU2EquXOBP4igIah4vE5uNhdHYSQDpXxJolk2fTXyPqNhn2KBw7gQm6UN%2B7CuAJTIwNe8AjKxUH2x1iSMV16dNjxE8y6wEtCmWBzps0OhyDQeqC4w9%2BnzxAY6pgFKP0xrQU4R0SWlmj3SzMf9KBP8eqvwIcRviMXKIuj324FAki2endFZ%2FAPIKL2wNDhSgdvr2VKy61EcAOFDH95JucqPQvMQPikrQeNL2RNjW0CzdLR8B4dU4yjnqBGsY00IfU5IdiUlzFMNdVRnN83uci2vHldIiAnYFq8A1GHVXLA1S%2FRB72S9lNNzSBeamUvm6Rc%2Bt9lory3JG1o3XBQomgqYERZU&X-Amz-Signature=999ee40aafd4c9c67fc6e0c50314b622512d51ac4863d6007b1da3e1556b2d91&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
