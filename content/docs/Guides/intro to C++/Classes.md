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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SW63E6X6%2F20250613%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250613T090943Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECQaCXVzLXdlc3QtMiJIMEYCIQC3CVCxER3%2B3irkbQONmxXFnYolRZ6l15B77%2BzXeEfdlwIhAJCnsWxhzNb2yeVaHJmxRaA1QF6ilqovuuepJQNHGiFsKogECP3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgycYGzSmR3RMcmdX%2Boq3AOMkskexM0QTqCopDjr3nGhqnOrskyZtaBw9%2Fiwh6OpT6mVBKiu%2B32uq%2Blblxc978TZIbvJd8LhbWhjtYPOH4s7%2BA7qUOU5hcUbf22u3VeMvIq9Dp5x1u1KZgXgtzaZecNOnx96vkasx9Vt7yWS1T%2FRYZjf6ekhgOnCtAEo%2F5HVFX0J3aQIHMJM6TQvlPAUcLxTm57ZO3SLssqzD50y%2FncNV%2B0SqtdkIAQKm3UoJXyrRI017Afg1yqpn4pcNAG9ffrYG%2BP4Beqwzsd3hW9q6fpI2zrKN0HmXQsb46IloGjs9WQV8BoxfhuLFq%2F0jXaxZqy6ysrBqr9AbaXQPjS3G3s3Y5gIFZVcPm7TJYGGfx0Q%2BpaF4l9qB2MQYrMRVhZm7NIqq4D4mSjl2o0DJEijVjct2pk%2BU02Fd9ygjQ4%2BKDEnxmZomgNjH1ibGlR4eXOSXQElxsoHyIM1%2BUcXQZQO%2FK26vqaTjKuE7T%2FvaHfN%2BBOpo69psbr7ew3Op85eWwwYxqs3%2BAtmoHbMPGYODeWwQDBh%2BkvH%2F1TCFLC132JnXaamBFpaMH3baQfLmXoN%2BA8JWXN8mEU921JR7W1dmBbBSLBtrM3rAASEFWniyYw5JkaZxb1F1uj3o%2FrzbaqZhjDtya7CBjqkASDrhetQbwXnD21nZ3ULsbJI4xSRFMUPuFuEuMk0Mag8OoJXOcTzYpNqNXPzpQEDAdU7%2BmwSQTI84S159vuJyyPDPk7OBLjWMYbhxeC%2BgwIgIRcbWAkIIwE8%2B4T1GAqWISlriFrqDkrDWyasgevkD%2Bklw58EvOyU0RZu%2Fs3w1Dp2n8DS5sA47wYOqBdWuHF7G4%2FLKKKL7UzFwY%2FJDTXtrnV6XNMm&X-Amz-Signature=e58d2ae345b1909004e33da2d0acff278a826a49559d708bd8791a3098eb9f0d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
