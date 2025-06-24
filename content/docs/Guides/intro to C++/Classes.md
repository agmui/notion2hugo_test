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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RJLUIQSN%2F20250624%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250624T051147Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC0aCXVzLXdlc3QtMiJGMEQCIHoXCbBmtSJ4CP04CcsJMFS%2BYucLIeo50PWjLTgA7sPYAiBrV5tuVwbS%2FC%2Fol16zijYCSUzM5rEMaywWsExUd5D%2F5Cr%2FAwglEAAaDDYzNzQyMzE4MzgwNSIMiOEMylJvNGsyYgF7KtwDQ5tIjbLvcI7e6tzElbGKY2lB5NF%2BbbObRKZlgtb02H%2FWuJnOhIkIww9%2BMBoHy2Hct%2F86CGEORbjg0%2BSi%2BZ6mNdeP2zypi2ityHl6d92JlOjtSMP85P%2FHEv%2F3NI9XRYwmKYBYnJd9ZeFbJtdbvX0zrVWBpe5b9bTHcM3p%2FxD9U4NQTIAz9Z5fEsthLqTQDK8BTbgoH76Zht%2Fcw2mG301P1AwQBdWbymDvdrLMVOoS93RmAKx%2BX%2FeuWprKMxzNwFZIaNtOFeOJHjGXAyWliw9UV4IELz21wB%2B4%2FfJwO%2FZze8zYhmbU83GG%2B9%2BrGDxKfOyzAzqbbSU4qLv1xUhqC9l6nxF6e%2F6tja6k9Gf5ol9znLblsaDYywflL70pNTdUbNSNFiquXFb3Qplh0uqrH7d4c2FPQEJWO5vKhNsRCUjK7buNTnd%2Byn1I02IFbofdtOBZaPbCnZXlZANCBBc6eX8itRDiQKgvfKNY2o9E1Ju7uNEHW3O7AxzQquv%2FTYjuYyVkqRKoSv%2F3EAq7rdKF0Df9Lx%2FCv%2BVVR9EZ2fRP5QrLLX3WoIVctUXQXO9wiKL4lCAqEB9XDpaj0jGtx%2BC4FRSM4StihSlsHXVviYdjcdsn0JdUcHCgQcuLV8rgRL0wis7owgY6pgHlSzI5hoVuOdLagzh2BP94K9KoPp5IEdbxVydnXgg9itJ9rpcVadeQvx2e9rzNcyt13U%2FPzgi%2Ft5yIkvvDobpSgKkLHXdgiLccu%2FdUuTD8cL0hl4iFUOmwEdrzamzdllt%2FQ3L0lGAIIL5F3%2F1J5%2FJV8bVn7jd%2B%2FYhTeypE2%2BpMhu5bOpkJ51zbornSFHP0X3NPFam3dF3P%2F9k06w5NnbxH46cHZLFN&X-Amz-Signature=2aca638717d6c6852d3dda534064ba1b4aadc2d0f64fb044ec97fffd463e2e57&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
