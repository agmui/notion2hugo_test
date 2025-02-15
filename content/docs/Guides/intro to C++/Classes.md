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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664JZWPBG4%2F20250215%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250215T031050Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBAaCXVzLXdlc3QtMiJGMEQCIAgP3e3jDYvbgw1kwdO5S7n6EIqtI5gS32AHNCMJonu%2FAiAAm1d5NqKELi5qExl08NUYelaZ%2BG5ephlQybpIoPVhYir%2FAwg5EAAaDDYzNzQyMzE4MzgwNSIMI581diBRwTCoxiz6KtwDaQ1sN5hcMuAZLKa6UjAg8ZqRK%2Fczj5kyNx63wmLjKiMxKbDuOAYF14TDmLf9YuhpLYmqbkQQHxg9MYtwhvCbumrX5NbRIIDDPpegiVahYwx9QNCcYEDUQ0E9eB6F8TeBmsI9CBM8QFaGhfcdTVjV5DfDyTbfFLiNSZF8wJQN%2B4DVF0fapVdUxxOVpVcumZdoLCXfvM6cTqo9InZ0qiMUC4Dv4Jcue1B9akmsouo63FWygG7GFCAWaL8bYfyHHy09E4BdKd0N%2FX9OTI9IbS0bn%2FBBfn3MTwuoV7092bgNtuvx1YOWBMTgO%2FvjL7ZOTqzQFUPRWdObiC%2FFiuSODLUZUl%2BtfXXSUSkTh814V4c720Ex6SGnsJ%2BxQs5be0Gzu1H%2BQ7yyAgnSPa0Rg8qpZyRRh%2FrHv02KafnDDhyA8O51ngT%2BwUeOOYIYLIVhmfFu1VFizhC6%2Bu59%2FFziY4g60N7w47vMp4MKhQgUiNaG5fmzanVpMcA0oYLYnAPPa5e7z%2F8Dk8MrRLrV68ByFYE4q%2F9b7XGJf%2BuHWL36uRq7vlyKD0ohEGGMmStmgG%2BnAxgsFZJl%2F%2FDjKRAmXvgwoj7aVWKSey8De%2FXJAZnaTrZPdSQ%2B6uIiBgP1L%2B9xHwKrdtkwhrS%2FvQY6pgGqzr7OOYi4VPHGz8cB3MzJ2KvHVNpn6gJWSKe7ioKKyAotmfkhdtNB%2BrfgeUPnTfZUwkqh%2BhrEvoqnkz17gF0TI1IZ8P1SUhijT9KpQ2DMoE%2BMRxq6TdPGEHTy1cnZiLUgAJQRtDvH6NrgMqpPds6hNbAtavmi8YX7vZxZF%2F6C1PvJTPez0TBu45dybS7%2BV%2FNq8zMUNgbejHwM5HkBrA2qbgVohzEj&X-Amz-Signature=a150c173cfa7522157ea492f3f6a69321ba36319aaae07e5355ce963fc8bef24&X-Amz-SignedHeaders=host&x-id=GetObject)

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
