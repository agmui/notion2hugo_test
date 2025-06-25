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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663GRELITN%2F20250625%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250625T091143Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEgaCXVzLXdlc3QtMiJIMEYCIQDj8LbPfo%2Bl2IvlXfayGWIm27ajuMuGz1zxTuDhpaZQxwIhAON3EeJMCwBe0dn3tYPmm0eO1I2dBExVsWXMyHfp8EyEKv8DCEEQABoMNjM3NDIzMTgzODA1Igz%2FVwRtnrRGbr9Z5qgq3ANrqD66AVpdtoBhIFlX1Cy7E5tbfdpB3qikCtToyH%2BtdhyygKm7ZsuNwlAUU0Dki%2BkJ%2BqjIHXUxEEU%2F5054cEH2sEwOOkVh%2Bo542AeX%2BdCJceCX7lwPtzx77PnCxtnmKkFY7uGtykdblK3I6fDZVQ5OVGIsMsBSdipiIqJG%2B78qHzhgI6Q45FgAWJrxoSmTdZz3vg2%2BrecP4HLQ8QfCAMwONN6DVw7BSb%2B9kkP5lD9v5oVmeAnoafbvfrfh6OnCnf9Fa%2FkKpt0ZUQa1IWZWDB2cbjmV5FD29sxDqgPAVb26s7SvsnA1vNDDHolRX2Snlyk%2FoTMnC3Vh9MX4FhJhXXnIJTv3WjlgzBdv0izay2FLo4JKlIr39KYBxOQniW%2BbIa4IVNYatvbR7AwKQu%2FXPkNAVIhscml9CUgiNXhmoUlUTGEGIUHwLGttwxH5lpuY56rGYUNSLnVBUPSG5uJOBq5T8eWQ%2BGVBHLW0XvI8IWqcjbNUtAEXzT2DsFRI%2FN%2B9gpvMeSTIvErQemFbF%2BOXNuxiu%2BSTw6x%2FZ9%2FLC2O9ASWtbPuT5gOBuicc%2BbBdYqPAmN%2BBqvrG2vGrIQyhrf4fzg%2FPCg1HLM6l3d4tV3%2FEprtObBknsuk%2ByHi3fQByODDM3u7CBjqkAfk14%2F4oY22kCBObLZSjVq%2BlJkHNd0xhd7MxpQvEPpC2oCdOyII3Q3J5WOOZP1m83zDaICqYqx308xpTn75%2FbBZZneRD8Jd90cbiEZ5XIx0FUsGRe4Ntp%2BhR0UgmE7Abg6UjV8zN41atqbE8gGk6NEipkqfR1lefcTBrUNxDrPGg4pMlLChMvBEnE7wD7SJT%2FxMb2wEvyoCr43nU2xDPQaVq9u1T&X-Amz-Signature=350804be5706db321f569838b748875f6f29ec5b6d7089a8379be9d3a06b935b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
