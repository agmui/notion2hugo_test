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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XB2NNMSO%2F20250428%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250428T230808Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC6YIcqh%2FaqR5X0RCozx0hZsg%2B%2BX1e4YoU3s0kptUu1QAIgZCcgjXAxwy8d7zbaIIT6WV7dDlECYaBvZXmXIGyoSjAqiAQIgP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMqaMPQjrYyDk%2FGdzyrcA5RjJz2imu9AYjUQKiUb3fqGUvXQ%2BGLf2M7%2BfQu8fuIKggvNxzAp%2FfgvtArSXKHrj%2BT9UC861Mf%2BqcfKQ%2FwYV03iYKj1Ojs7zb4cIxo%2FkKrgjLzYru3iRahuboRRVLIQOdTriFniYTzQTubSeH1UkBmQupymp8wYUClYpIIorEaXmBkJMA8weNMvfBQrfbbrG04riyPtxDqknqTq6n5PRNmA8rBco2Kvil3xA7WleBkIKIofF5Fble4jiH%2BuofUK5ojlhWlnW9a%2FIVbR8VALD8vxi3VeG0Q3ILiU9W11P5smkDwMRdB%2F5S8uXdA9kntuHgjHf21DwkeeaRKvhOMIcwAGagKH6gTGbA7f3Wp5uizmgHJKFU5123xmVTYLkWw%2FLX5VD6azj0ar3z3EsIqp5%2F8G2t0lI1yfCdM%2BAUeHM67esEnbN2VsrcGkfIqgnfvnUeHMdXUiFxFwvjSOCYqcLl57Gpg65rbGgqe5CN3%2F%2FIACMQXyDG%2BJobmji4AhdTITVm%2FobRON%2BWl49%2BhYPzB9Z%2FoIZHFxrOUZYG8AU4wqwHxCX%2FfcChYFsihcP%2FGMwEa3uD8z0l6sgzERrPwpJMLNxLEYDWhCecP14tXK7eGPouo6%2BwrS88s4y6KzMuj6MJKKwMAGOqUBFudmLkqINued8CLN1ZxIzeOqMeG7Nf%2BnmowbdKkgHYtFRt0a2znw%2B%2BpwlaBZJKuLOnI65AjZloOxFEXTmJlreBvQF3oJbCy1YhKtXvx3hL0fma%2FKeY9dWaOIMNzyM%2BQLca1M40wflPBjfjFqaNnELPtKvvSU4uZ1FRfSzdMWV%2Fqauv28Y38EIO9pgcaAePWFN0J0YS%2F9gr9M4HCmde5s9LfcCZXT&X-Amz-Signature=4001f074ede8c0364c3352b9fdf3654d3ee3b8348ec9468bbacf591335afa11b&X-Amz-SignedHeaders=host&x-id=GetObject)

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
