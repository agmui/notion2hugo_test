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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TL5YRLOC%2F20250321%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250321T230735Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFcaCXVzLXdlc3QtMiJHMEUCIQDRyKNHx%2FTIGoqwg5fF8oinwiUG9uVigylKw%2FdouaG1LgIgVfuRXzyiBsaF5kyICu7OnK9HvnVA00zgm7Id1fe74ukqiAQIsP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBO2ZLO%2BEx1g4PzNjircA3MkfgK0FrR5dCJ8pGBxc6%2FnnQYcz6q8TEM8aM202eITBtvwIQWyHXX8TKkaoaiG2K%2FAzoXCiY84E0YbfgQNpngU9nhasbM3FxG5gCnoAMG9EGK8wudgeExAKbFoGH7Ce4rRuM5wF7Ld8kDRPTyyb1f5n7yHJ9h64PwB1aMFNeWzi2ioFCYcR7F03Or9U5zvk%2Bl%2FYvB%2F%2F0wP6nwPkbVmpxM2KTFzfLhGtpjkbuKTb9zXt%2F7R3ADpP4yCLMJom44gNdklZEpVkEiQGYU4m8YHyaiHAbXOjE8RIMQ76yxq%2Fo2WeqfbUDvLLX9%2Fcwx9Nqqg22RlT8jggAnSlQwASyLdjDN5KnPp6evDkWhERNyazBqodwmi0TLvj2t3tVzXyHaEP4n%2BwDnh7jqTudO%2FYCazciIvUsswHP96AZmDUEnWINNnMZxDM%2FCPnSRdS5AnsvxOtJH%2FW0GTpLZHTJiaByMcdQCH2ySnIhE%2FeH06KIrx3rgjbwYKCslwbm8AYIbd3AS1Mcd3%2BcKk0dmoeAuE2pQvjRAgzzOMiyjvszt%2Bw9QJGRK8m0YMiPijFqtrVeWz4ySaFD1dU9qllQRvf%2FYlgxTF%2Fok6Y8USFtqsJqHdvre2MBqtK%2B4APgM4kT4AThuWMLPY974GOqUByLLDtd1hA7VIqhg3vfsqc88UtE6kGMHLS1as%2FD1MOK2ZO2%2FVtn4fxQngOLL5%2BIgHo2IWTgon7AaJ66miUQtocZ0q%2FOWKQTYD8D7AGAY5IzpSQk84%2Fx5SXZurq6IBOS3mPvjTgznUeCMy%2BFxkG77y8OD25cE6Jrl9m0kR2cqFm2AD%2Fr6IF1%2FBTnoyLvrgdG9chZQw7ysRRyMoyDImwXanvtOL8uqq&X-Amz-Signature=0a0564deb246e672afb8c9cbe94e2d10d7f3a67ec51f595f27b7fdc84bbe3ef3&X-Amz-SignedHeaders=host&x-id=GetObject)

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
