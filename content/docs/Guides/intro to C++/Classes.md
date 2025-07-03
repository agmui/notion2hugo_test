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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VUUNZBMS%2F20250703%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250703T132340Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAwaCXVzLXdlc3QtMiJHMEUCIQD99rCmX0e3N8nImQ9lY5yx%2BflDwtCYerfOf%2FmfcpU6SQIgCJNIxdyaNveboxVYXVhdOZ%2FuaMfspW9SaBArJo1u98gq%2FwMIFRAAGgw2Mzc0MjMxODM4MDUiDHatQmBEVobh3YGYXSrcA%2FEMNp8SbpMm8t5%2BMAOt5dhxyinqPNXx6qn%2B6%2B%2B17D8DnIRnxRfPGkLi2NNcZrYEDp6ACU6cvEMRH%2FeVg72rMEKvdErIIbVF8HQ3w6GGEydMOxlefVs1kiDgjpLCCK%2Be73tixuC4NJZi%2FKsr8%2Fcpc6Rag4uX6qfla7%2F5RfQxkoRFZBUBVxZ6q6QRieNuBxHX%2BQtLGb%2BkTGuIrtwrBfyjpH%2FDBQdggv6vGiDwMzmKW5drZEAy2lsMxzhL7k%2B1KMymAAaRtIiELj%2FO9eH%2BykF0q79cCZZFBMzQyCMmDiVZ2iaioGD%2FrVNlGoicn0KH%2BoFplQ5yWm%2B1PvqrWuCLbRkZwnWBDzgLLs0AT8edVT5Q0nLvUHKXKjB7g9KCn61m2apZoYt4u0cGV5wJoKjQggW5QI2A5DvuwKGyrvaAa6xuYSb95Wqqq4lHCE5aPRhc7eRhkn3zE78UxBZqH9WwZZ6bHmhEemJEPzwKDVQZdzDtAnc%2BT1iR0CawTFH78PngLWCPyfAhgheEKeg1juacb6lJzJAw2aVrQ34I6KigFqUX58Hzp%2FMs3fNYf5xXIOhAOiqzpqylC2aPUTVHZsCLqedCZHz5eMDhGG433ASiTMMLZ7XeiRb0wCI%2Bzmd66FxgMOrhmcMGOqUBHicpc%2BaT9K14UErbDxb7%2F26ba%2FNl3XNZD2lExraZd98yjEbwSHC6P8IcRCG4j2L4Ox1VqgQE5TgXCbzaypfua3RaIPtoT7azMF1SJtBw2KWPuMiTKF4vodv0H2QSR4yHDvMwpEpKQ03xy2a%2BrBAkIWA3jHWN%2BvtI6Vi3sAd87CAQOOs%2BgF3sX%2FSwxF%2B7C6wPRGyhZ5rX3nY%2Fmc9equiNtz4tnvCy&X-Amz-Signature=181468829dd5c0a5828ef9f2769bea1ef8ef50dd0823409ed4a55338f1a83d6a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
