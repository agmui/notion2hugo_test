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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667WXXKTI4%2F20250606%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250606T201017Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCWb4AyAZxgqeGe4h6L6XNltKq6B0i%2FeO63x63ofae8owIhAIoE23%2B3Qe9CZ07raNrrmQ7jbFU0cPxQPZjYKDXmsnzMKv8DCGUQABoMNjM3NDIzMTgzODA1IgwUKR%2BjRNcqANZ4zK0q3APO8kG64tWHQyodLPD5vme7ioxL5wM%2FtDamNbzK2sqRdvLb5rcVBwjjzpa%2FKDSuWPrPxYvoEsJko7aYYAIHIrIyxmp2uConjRhFD%2FC8N7uHP%2BTvSYNrcZIw2sgaSBf6eELFZIdVQz48O3n4%2BZxXGMJqSlY8s9cyyRP%2BwJcUYJMSXbNVUvdXpDCV18xuJMmhKm8PdcClxo8j%2BdWbrLq6WgxeTrTttNP3pSMeEZHSWBlafwMbDAxZeJMvL4XfjRDo9X4QG2ry39VPPRqqEaOzwMUyKSrcybalzWZ518H4tx9sbTrNgx%2BWJSlCxWGRVcVuSSu0Ro4iZCLRDIv86gOckRekbxEVWwOmZe5vIwE5ogi15QN%2BpeW1xn8ZvJAxiSUUKpoaNe2tpQ6zTgWGgj6v6yJQd8ZwasiUTBSFaSUMwxjp1uu%2FIi5fH3HOTIPBGvUw1SEM4lRSoEzz8wpZVC70sWqtnCwIqzgkfirvd2CR2F8LcSeIEmacs8QdgRUFN3ytLIdniJc3tCMX%2B2tteFP9Pqv5v%2F5AvlmZWCCQCL6CIpSxhmFq2VCqoluRhBcoVidQrT0eDwtWzJVVQtA8Dvarbt6oe0FWIN5FBaH6Ra7VowvS%2FHA%2BywsBrlLTVmVnvzDTkY3CBjqkAc6xViQDVf7vR0UhRaliczVyuCImS5nHara9xhQTo%2Fvd65mshimCyqP5QrgxzQddGCwEqhzgf4EEsjHlulNNEW%2BayctInLeeL4sfZUrZc9T2qyrmA%2BexP88PJQYuU1a8S34OEvvxbbKCCT8yPP0QMv3Oa7xXKdiz3NSQrioYr43K11rQ6GWikYV0I7FagnGz31K50IHz0wwx5bDU6YPKfqYbZFQu&X-Amz-Signature=0792aefbf0cf24ef0dd36751edf314b19e19f061b60db97afa80dfbf02d87c10&X-Amz-SignedHeaders=host&x-id=GetObject)

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
