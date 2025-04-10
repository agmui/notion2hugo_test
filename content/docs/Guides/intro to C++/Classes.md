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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UA5XDFZ7%2F20250410%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250410T150902Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC8aCXVzLXdlc3QtMiJHMEUCIQDaF%2BrAbD3iQWrwdomr%2B9IuD8ifMIoBeajOspWDd8cNdgIgdOYLoue9THZzK%2B4fXNMH5Bu7ylNMV6yPbcE4UWq81vwqiAQIqP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAIETHRCd5Nc%2FbqpECrcA2hsyt7gA1Vm%2F0%2BOdwg2sa4gXTG57U5t3srz9MlHw9rjBaWIswtLrzzAzd%2FuMR9WKSF4JpdiwfZ67lrIJxCTFBPBe0XHXFm0IMJdlx%2B%2F79Yb6Nre0j5wMNffZ9exG1sbHFSlouxzagYjGjacPxOGx5ohlvQLRzB3rkq4wA1R0oV%2FKpuLaXg%2BXobEwisdVoMlCFP4ufbfdqymLjYccCzkrwNMZN%2FOYJ9R67bQXuf7Fvbe0h8CtNxEscTUTBClRbWi2LJc2VE9eYO4DLUTKXRzTKqoyayX8PS25c5vi1F4NYDe%2BuqC8XrQ878M6hKE3lHJqpvP5dfkkVdvB%2BmUxA3xWDFSY2TZ%2BpC7aPDm7BUADLWDzDqOAQ7ItxchtpyA9JLugQbKXaQAnQalns0udBZOtLLJiGi4ZZLlyyKBb4Jh3vNAjV%2FoxOIXozsTGMf7Mxl7iDW4zJYVxnJnQRxVT3t7yAue7QegAF82t3MYMCIPKyQscIO2hnAce7H23YHnqq5Du1oXgSpLpVGf%2FOBVnO3gv4D3LL3yir8IL3JR6oZNVSQg%2FPCLpE%2F2Mo1rnaeAwWfk%2FMiEe5QPIajO70XylgvGKmbqJu1xoOlhO%2Bh8FkAjOUkzUz7XnYHB89SeazOPMPO4378GOqUBAvEcpuQ2Okf3KjjJjAw23kR7eXwgDwlP4nH00yQAQcknIE4nr8qOMuXr%2BAG3m5oOedvoq31Ua6QAWBB28F4Ait%2B13UvcI2mtDcV3vaHLtiqP0WUp91w7Pvlmcqh35BuqsMWcHoZZ%2B6tcPT%2BEClPEQ17U%2BnlHdQ5P9WGy7pMDD%2FAjyhsS5m6Wbd7j%2Fcqf5eWQBkF5Jk%2B0bEa7CEagil%2BiynM3aWWZ&X-Amz-Signature=f7637f62980cbdeec436dc4560f40d29e0637f65cee0320240a096423b343b94&X-Amz-SignedHeaders=host&x-id=GetObject)

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
