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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TUALR62X%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T200940Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIE5sgMnzZ3ygYpW2MX31Y3TzasdoeEk4BL3EPowWul8xAiAlsp2OUMuqabf%2BztnfxZI9MKdFK%2FIqBb0LwoQ%2Brdw2niqIBAjb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMnebxRiMaqiLL0wJnKtwDmtPMk8sG5q2kRV7oDKFyrI72MjFVBryubFOQiBrssqsmcVpqNV2gwFvfiHh7edecLlgZLfIQGBTR26uZEuBNmYt%2B4KF%2BM0RSNAZuMqQz1HxrWR%2FmqyfZ5GROSkdcCAzUWjeNo1eLmG6fFPqzoEcHg5LyKX9dlrRI0BqkLO%2B950NLpp8bEHsiLQ%2Fgu7%2BLQ4TaQeqH8qgB9tkn9khd1m%2F4IbU%2BiNm28vGj1n1ObCGTgfXgR22q%2Fmz6c8Y0bs%2B%2FmRbz2FseVXH4Ad2%2Bltuu6YqR48vJM3JEat%2F1HbOMFW7bLgfA2kCjaoiGU7nSUr3unZBZAGZ4PwG2BSAZjfVlOUNUsbTqUEldFp4mF%2BQyAoDijuaTgxSarb2c0zQoaB3blDsZBbDCmxfUMmYSBBEh3K9LRQ5LQfA%2FM5rhp6XR6N66eVIuLGzMIS2oFicRNgZxZlS%2BC8kaXs9X8xqnvZdsojmAWwxdCPqjyTGXH%2FLVBmKURc26yGmt9dqInoFDl7%2FF9kKL%2FC2Zz9k5qRTgHUpIn4R%2Bvwyq8r%2B82V56opWlkm6VJltoL0t%2FqjK1%2FB3zccd7gMZXwo1C3A3JgB9w4FxQOYfaFiuIjuy2GfI24fb%2BSqzIWaPxUK0Hk0qTaAjm9ukwmLvjxAY6pgGEAxu5hLrupF7gp5KpYeoHwrFQM92nZ%2BAXs%2BfqqUUC63uQk7v1pfm2nA23ZcobiBABd4RQV4CQ%2BDYh%2B7eDUz3f9%2F942wmbVz5xpmL7JS4Fe1Nmw%2BbBcQr0FcgDrsbRioViJEUhOrNpRjklHc3uLvKIAwtZvqS72QlrjQwfLJHL5PQtlsMHQ8mMNcb2zhi65k8OLipqQoQ7WD4FCyounKygom%2FiJg7B&X-Amz-Signature=bba36452e9dd0567a9e72aa393a25f02c0728780c5ea1e1b60d4c71043ea82df&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
