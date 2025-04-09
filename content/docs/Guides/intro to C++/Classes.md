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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YAODIZXJ%2F20250409%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250409T151051Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBcaCXVzLXdlc3QtMiJHMEUCICpHDyOlzyU3mVOluxasE%2FsS3j9juze0d5cFfS1DYoauAiEAo%2B%2BMLGsQ8ONvEus6iw9bkGi4q%2FwQ%2Fyj0%2BSwrwmtgJT4qiAQIkP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJfBgcSQoQp6g3uuByrcA7bAoDp6WXepbcYlWNqP1tkZs6Sit5Y%2FiCzlha3YS5jpfo3zK%2BzK47Qnyqd6xfJndyjfu178CkbQcz5%2B11xt59%2BoB5JXW%2FMlInQUkjwwhPmhIr%2B9ElnhohL9phrNp4YfmsnywGr6lozyKq9Q%2Fxpk479dtAKtO1cfjdPKqBKMjkMHaWVrQ2HnTkzRYkyfLcC9aIq3jeB95H3bg3KxpF3sdBSlJOjzYpnBDEXtfAMwmgXo59owadBgZfYeoCkqN0mYAbVyDPAkbfienUaGgi6gB3Hrgn7qjRDd%2FQ0AEwZ6vajvRNYlEFc1%2BWINueCSLNX5FCI004bHzbNkbeqLaKbErFo3R2gcudZUwKHXZ5Hizdyfyor%2F%2BjbqKSFVSPcu64GlS%2F5RlhV3zx%2FyREz9HgnQSmnxA%2FFY%2FM1Adw7ZhuC5rCZONBxO5f5eEvl%2BMQL%2Fxpn%2FM0RRajOsUJ8xGjbAKt20QvfqqyZcEBh4RJMJWby5tqvUW4YtB7AbBiVV%2FPx7IVK3pWiU1NaLxL9eERa09%2F2EcRD3mw%2BGyeno0jWsHXH1NoRWqyv8FN4P4uQsUb3ANU0eSWd1p65lOIoIn9kGVP0MWKb9Fwn6Dbga8mY%2B1alMtqwFO4a2YQD8is5DW9hIMLCW2r8GOqUB1WKKxMgnT%2B1%2FTuiuyCJDIdTLvvngf3TFG2cZodi2MIg6WFE2nZBX%2F7UZH4eQHkpvjuMYkUSstdGXzCD2uqLd9%2FI7ROHyk2qdpHECtBN0DjAioFBmtKI6d5hPlBCgiSCDaRDRevS5ssv3pvmm56ntV5tpprB5dsoXkbaEZ11kTZlFjIXqtbv4f4J9ZX5oY4w3q0t98CfXLJ5%2BJO3iqZjU9dd9IjQX&X-Amz-Signature=780268201b7b3427241fd6b91f28e349434ee83cd0fe134cd830d45b0f202819&X-Amz-SignedHeaders=host&x-id=GetObject)

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
