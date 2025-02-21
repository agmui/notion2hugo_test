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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S6FHXGFM%2F20250221%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250221T081040Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC23pGbA9U06YUpDWJ9p5cxYLXimIyPjxSboXDiVazjkwIgDcaq7eCkSzOyOrFbXJcYNXQ8XX9Y3PfJSGveeac9%2FCwqiAQI0f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOIGuVKq%2F8EafDLmiSrcAzKT9lWz2fJoRPmgvVG4mpnBwDTgO0x6MuRJdyP5AGnccoscIMDTvbJJTaMoXntaFnZlVVWBnHw7YN2j8iXqBxS94HFmqitYoUAC49nE%2BiUYbuy9RWIxpUhtwTLBX7S%2F9wiRQiM0iHOUXNtZIUohkivIEaOEK3uhKOEVMpDuWHa8rrE5piTORCNNS9VLYRVMMEjjgBpR4TfBcZpM5nKpdsYDkNavpyvJWpSONrW3lJIbZn6BtgXXUdJWFBM4%2B4iJyLBbK73MLDfMQJ7Rl7SQ6VGA3fMcWJ1YTZeezcvPhYSfcqo6zUZSkQO8urmy2FF%2F%2FaAK6l1AzSA9ExLplU80LXiVNrM20%2BFymH47E5WW5AoOl045cCkmhT4DKr9tvRnWkfEEVzx6PCsrbkej%2BJEpJYj4NvrAzI9ka8xKwO5kIPWanP2TDyImm1fn%2BvZtP%2BHwiCSVVbVpze%2BeARKV0Fg2%2FHHpCmAoo3tPGleqyG4vNw2xDe8b64ILHa1b5Y2mtQV8j9AcirHC3GySZTfouoYgBEsCR8OGaEOXd24J3t2BDfjjTJp9vMbBxR5%2B1JmU%2FHCtVLMey65obMOFi1SFvIAwVewq0sgM4%2FYf9LtCUgoYe9qdT3BT6NbYFiUzifWvMJDe4L0GOqUBQQcbCI%2FozCtX8zUwnjq9Z83bwwsUPdna2V%2BnEymV5InaU%2BfZBRB589Lz7TqpBYMPWg0KeWIq9fG3Gv6ErEC3s810f1FWwlYFDKwUaw9gO9RjIT4LokrdsnulPMCgxsVUztxFR8tNckZOo34f5MxtuL%2F8vv8jF6fiWVX6ptsf78ET20kqOcn16cu8NbeMj1jiOt63u7SqS%2FfJCfK2pNyHeW94U0hd&X-Amz-Signature=4259639288f64389e5299ef4b2d93007672a41616bca734304ab88b73761459b&X-Amz-SignedHeaders=host&x-id=GetObject)

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
