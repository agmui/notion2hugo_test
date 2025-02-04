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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QEVL4RYV%2F20250204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250204T050758Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAwaCXVzLXdlc3QtMiJIMEYCIQCY7fpeQIOggOH%2BunSwS6krfAnQIgZilcRvjzOEuMyICwIhAPuZwiLRPJ6ezjBQCZLLuRxapgpRaMzIxTz3x7AmBS50Kv8DCCUQABoMNjM3NDIzMTgzODA1Igy%2B8yCg978XRkaiLf8q3AO0KciAI3%2BsjYBUXaYxA8Tk4M9alxy5p09MRxWwg844QMZDN0h4bUfiaLCBxnSur18MiuqcZOzFzWuOW6Qpzj%2BraG%2F%2BtKaNky4%2Fu9glEqCpuuEveqJNcuuTP%2FuTRXC7Qrz2r9Tf135ANt28mRxkoBYWs9Zgk48pP0cMH7mwLWoeML4BbwiDnlsl8HtDaWm5GuQqjeK5WzHZ%2FvcE8hjlD5hpDr8o%2FSIPDW9wg0bW7KxEdDvknCe6S47YE0hGYyDfLdSCGJphVM7Utz7hXqxFW5%2FRfPCxFWjev%2F9XjP56JxQKcT%2BJA20s%2BQBWanoilFwLfGMhvEC0lc%2FhwmpTC5pRtknm0QSQaZ3Zy9nz5TugtTGlyqWD5fDdPQE3Lze1GuAdPK%2FV2v3ROk4b3HNaSl1lD7I4mKTkshL0KMWXh7VKuAk5ZMQqpG14v43qJEtjXZvExtPaVR0asiMbs8jHJAT3KRCM8kFBgb8b%2Bi7zJl%2BKrxFdJbHu4S%2F%2FejrRb2058MQS0RbSZ%2FzrJ1gx16DTKK21QyWof8%2Btc9ZHMhIjZ3Cja65wgnXTWjsWhbMpKshfY%2FUSN0PXqs%2B5lxsIrPUKMrBlTnE4KbzF1NdzpDS5GsQBsVDBYaD05KcLsWvb6GQOaDDrooa9BjqkAcsVfHoDN5iVaYBsSZ%2BHcgOYV5GXBNagucDtQul4SHjBJho%2Fr270iFijhahx0C2iGswIJL%2F%2BQ2ESq7PKOcauHWoCFnS9ktMtQg3luyPBwseLYdnkcm6QU1%2FRnvD0F7bAGshVnJyh4yZNm9qVOPHQB4lHU77OjFmDbIuosbuBkDs2TydO5EXhtGhTUiw9VhaeCyxTHeM%2BfpNnIttTcS5e0h9e6wLm&X-Amz-Signature=9e9167b805b1a4017062d24a7137e292f030350f9a5239b22f5a9f098aa5b0dd&X-Amz-SignedHeaders=host&x-id=GetObject)

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
