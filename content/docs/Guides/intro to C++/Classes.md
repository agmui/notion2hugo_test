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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665YPE766I%2F20250501%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250501T200906Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECsaCXVzLXdlc3QtMiJIMEYCIQCz1%2BgNirvX53uMHZ%2B8OSkpuWXlval8fwAdjG1SIxBH1gIhAIvIgGpJgQDqP2ggcOSVaLVkPielcfEK48yBvxLnIHT6KogECMT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyCOSyYLhhmhNuQSxwq3AO0YyTaEprYOL4sHlxznvuOxzhwcINWYLm%2FqKh7E%2BMznjGMBbSqP8%2F7wByMykm9Zx7aPl0Gw2HURcIu4IxaOArUVToCDMly0uZTv0uTFszV88DIuTjipLib3%2FTpMEVPwOgcQTAegmY8QezHnB5EAPCb617A2Mai29Q4o64rYpAS8Sn4uP2jZMPW9HS2RoSMAu2vD8YGGUG9ItKrbob5QTUAxoTw1C4%2Fx8BXo65AqE3yZmnUkxXYbdVQZQ2GmDc7%2Fj%2FJZ7VFEDc8MJS13DYp7XIb%2BrPEWbL%2FC06ZIemgwwvgJ%2FgT9xUIIfgfEv1mujjGYLR9ob3hBkEz99QTwA4M6xqF3Rb1HxOQFereYlAg6M2wyHDn4QtWDa1hmuUiVYUs0UCtBCGlib19DTAtt5FeUJNVlq7rY6VMnBQNx53XlyWK77KZ94g9uRgMJZ%2BqG1QJgopGcE3LygGxTfvWZ73uuIRIUVOWF4wETF37sCEBhb%2Br8letbRWO3eWA26SOSmFdSPEbtBrUXyqo%2B0j7xIdhxSOd4iinYdBqVKrTc0z0ZtVWdWpvITX1et7uWR1Y8sFNbUbapjMITZz3DfLAmYZjUK227BaV3uC6oJRxc3R1%2FZfWo2ECAc7ZKJEzWCh5vjCpkc%2FABjqkAX3wKJJBpWL42cjhZ4m%2B9HNqbiXYMLBf6zdIUWGDYVVbfULAR7zR8kuuQCY25vlWiUGrmeM6XlB01j1LApwLVaZfIOZ0Z%2Ba2%2BZDjRC3cKygHXdxo37ZgPUrAYe3t1M%2F2KGYOcrDh9%2FknROh%2FDD%2BRYJWBCfXMN2nEeroJTwzUzogU%2F59ProYwZd6W7uJhCkKi2fXreYvgtvGHrTtByLibYvwVvEz2&X-Amz-Signature=da5de3e6ee908b7e31055e6ba4d33c0da7f823327680a8ba1c208a2a40dff8e5&X-Amz-SignedHeaders=host&x-id=GetObject)

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
