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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666EOP4OCF%2F20250426%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250426T040940Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFMlnrQ7P%2BVCOJleEOj%2FSNk%2FSPlG6kVIUp1QjG9LPtuFAiEAnVCYK5Ytz6wQHyVswzSXCUALCqz%2FRuF4ZB6mRhKHgycq%2FwMIPRAAGgw2Mzc0MjMxODM4MDUiDC2dzuWs%2BRWEiowCJyrcA6GF7jwRLWhKubN%2B3idpQpsUNvRrT7bRr%2BCDqMslHl8nuWHf1NyNu3WrunP5uWjyAC%2Fc6kEOnMmPwp%2B9XHXmaQEFSxvPxTtU2QS5mcmZd0Xz1nTtV6s5oRwP3VkhJYy%2Bw7hpGsgm2rqdmteRuMNnVUowaurSLofbrWAyZFv%2B8JolzouUnF6gDXUNZSxTirf438mzN%2BieiQWNAUs41eYAhOHYWcZ%2Fc%2B4n46Qj8e87ziPD%2FEVDs2LEtnQ%2FlVIqe6t5nXLTEQ94nKmvDgN8BN6wv9LSxcby0p78y93v5LtN4vDUw5PHdZsYTna%2FrMS%2FK6ARjKGEhkQYVTA2dtfklKucazN7nwKzUI98Zgfck3%2BhFzkFcKyw7FUTc%2Bbxk2P3%2FQ7OrYemubqfq2BMPon6hoJrYYBdv5MTwnOBm1VrCIzNDqos0xcOIkO9sWU%2FV%2BxqKcHlCE5C8UjVRaKCM1PlQOiQSfbA51usaNvrg7vH2TptoatoVoSkR%2Ffe2Oqu4e1OZvojGXjlI37muFQxtxJXCYfs6DtGDvhbRWeczV%2FiyxAujth2lDjPARxeymJmkRPlCnYcqqj%2FcsT2lUKBDbaBR7TCdg9N8jcH2o%2BtVqAJ2Q0vxi3c784dXopTjHZTDuK%2FMJiqscAGOqUBQn0%2F%2BefsmQCW7b8H8bUTS352W9ooHWf5KhnZYZnhWB2o8VOfeO93E%2Bbo4leLUHKOXcqqZLB1MlrNX1VCif8ulVHXjPjNRMUOm63aOl1OYUW5JUNfn%2F307WdfSmSXkKssvPN5GxscxhsGzGDrpfBVOGMSkJ2XGbAhQcKPfVQOVpSPP%2BreUUNkKqWjkuwc9Jk9xcOmZHqN1Fx0QBs7AQ5xAlZs7XMl&X-Amz-Signature=cb25c8e0eb182e3fd96d95bed8a59497b694c4ba5507ff691cb43d51e696c8de&X-Amz-SignedHeaders=host&x-id=GetObject)

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
