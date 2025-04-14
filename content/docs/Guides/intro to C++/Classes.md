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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UKOWQ6CV%2F20250414%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250414T150850Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCJa1%2BGRSQGUFhYHqAGSUsfATI1MPHJB7DIyEm4lh3WTQIgAIIsxwFCnYKP%2BY3hTaYec2soeJUzRVweoACVROUBGDUq%2FwMIFxAAGgw2Mzc0MjMxODM4MDUiDHIgFvDLGa3S26XMDircA4VsJ6gSN78CwAEr5%2FRxiug6FDSZ%2BvO5H0tUcyTdHkoYZuuwv484GNt9k3FdiVxfzBIMvBK31H36LEg1POP6m3va5EvHetpDY2vKnM4tuHwJDWHcrBdPP%2BcNFOgMtzGldzkCnji3fyy2SpdifA7Of4VWjCryh5gwF8SRu%2FFqRWrBcJVfY9lYjTf%2F%2BlrEYXcYhN2NCfqLg3%2FeR0c%2B9AyWwiBXDUZPPiOzuQ6yoOKGXmeTRdsEv4NNHbnfMKywCgHcGfBMv%2BXdOVMj%2F0ToIO%2FBe3goUGohrxng7JsOeNq0%2BagjtTIKhyBQ%2BswzLu76B5Y02pbpyOxIZlEW%2FK1%2FYTAFQ5stVSsUwSQBX36ZCd8zAFgqLchgaXlypwkYPYvIv74EiG6TzMouILAujd3kpPKfWcpRNOUiwgyxwup%2B%2BdidEqK%2BXuokRRNz2lt%2FrScUCP4ZRPiFbO606n%2BCx9b7dLq1LB3ze1uKXYY0cAczf%2BPf%2BuWaFOMFCJNYRN%2BkIJfzEW2OU1T%2BtGtpfL%2BXaAx9Xj6vqsvUutwNbu6rVbkZoGjjf%2BX%2BHjfTGMh4D6aevDTBEd30yOCNUXNfF%2Fs4ABDYfyFh%2BgHqFtcZqGJb5Mvp4312O%2F21oMh2uO1y5LdU8iWgMMeo9L8GOqUBEjJFo9WM4AVgta8XulWPWtLNJ5lwH%2FZGly%2FUfh%2BCYsoyMHOlKIIR823P53n7h9hLqsZ0KZN7UJ2w0nSs5lHksX0zrlkRyA36iQH%2FYUo8WekjPxX6nmHw6jW9qHh1Wd2C8VJCZJKSOkDBtNmmvuutYjB%2FzfgcpMt61NCq3TWOc%2FVFFOXoucgushUpRbY3vtEU0BLM%2FRxBqyawR8aM6gTeIAytkn2u&X-Amz-Signature=169fae8158ae83428238792371918ede9221c1f2aa19608be706b8edfb452030&X-Amz-SignedHeaders=host&x-id=GetObject)

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
