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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QR7JY2HZ%2F20250211%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250211T121404Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCkV7OE%2FPq%2BUhFekWVW5evGBjy%2BQGmwTBNxOI4PRWsHvAIhAJjeQedvO%2Bjn4YJUs3cP4fcT5Wg4PjlwY40aQv1WVlO7KogECNX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgySqlcWGgOJNj3XO5gq3APfQBsy2mqsy6tQTVCFEiGETk%2B1h%2BCRjipXatgB2LkPUQmGpvfjc1WPjQD1k3UJOQU4pyP6rbcmxEedPdzeS4ZVc7tGfmw2jxEoE%2BeXcb7%2Ff1WCJl62NiSEaLZQEugFarMgWnQpYX1S%2FHxMIzXDc1kCG08gi7dYM%2BVlpgACyE2frFXPuTv0cYUrNIF8s%2BDIFBN75wyWbotuh31%2BApyUovQ2rUYuYTfK82GCOUexbHjCByrYzkAe2x7VgVi8BKX%2BE6LFQDVvHK7vutmhHhM1Cw52XzaB%2Bq7iqFiAEzvOmxUNMn52MKGFkenaeJ5QJfOUyNgyjX%2BrTN385FD%2FyjgL3yn2du12n8WB8dkXtlTltDDSA%2BkZlziv8OeJHtxQ5T%2F9PWfd4Z8xieFrHbNclrkqXz4mx2V9UU0CL0eIaKa%2Fjpw4bJeyi5g7FP2RyemLRXsXicqD9lta1H0L44sr0mFxkp534jHxhSK6Eb9OlqBbYb94ANniLk3cI%2F398vyDe6q4Apqu48LzzWGEeY9jlXWC2YdakIY%2F22%2F1dPJ%2BewI10eCFm4xKGAqCzrISg7Q6cakU5jnhkNVMxW%2FjtEyS5dkhZKvbSoaqIpR%2FMnoRSaIzf8FjXfPhviP8h%2BHNcy4%2BJjDD7ay9BjqkAQFHjrff58vSYqg%2FaiswUabJUi5mvRViAb7DFdVuOYTxusjEjoSjy8%2F2V0njwgCACHmIMq34Ndw1Cov6qDtbuC37CQ8jEHDUpPfttemGJ2Og9qDjTQN0%2BRTDUO30ka2YyljDNanSr2CDMnLIJTqtOIKH8mQy50FWpUYcJpu0aHUm9Oj09IxkYsRSCB8IaB4A1PwzpfSWNg3CssrHXkTrttBFV5Xd&X-Amz-Signature=5a03b0fc32e28cf62874768698654fb6fa5f7bb3b5559d2c316bea53f787df08&X-Amz-SignedHeaders=host&x-id=GetObject)

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
