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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TVZ57BRW%2F20250310%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250310T050729Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDwaCXVzLXdlc3QtMiJGMEQCIFmoLYoUiAkZy8kSj5wtor%2FMbLlAcfMNy4%2FR%2BGs7JRhyAiB%2Fa0lh1OmdckurFH%2BuoFHR9jom2tKrfgyyYoCVT3tYjCqIBAiF%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMZDvpeoWZHGGw%2BXmLKtwDi%2Bsw06iLJkFp3Fx39e%2BSs0KzZRF2JplmCo3IhPhp56%2FI3xyrRED8HGGfAW2ytyS%2FZjgXHbvV6FSlzzpK%2BwZs0Vnx9N8%2FyzvmU%2BR6VMnCWBtuQMD1L63hkLpxYOF2GiRDa2LNAvZxpuVerhSwCXhXCq12wOa2KoZ%2FvmwVoVL1ATFqYc1zWMmtsfntiD59mq548sXzCbq5RmhwSSfga3g2EwljwtvilLSWO4AcFmEcXtYEBXxqEpI56OjuubvKSRVQRCZtKjcuoVyYvxxcSIlHRqMeJYXgNFcmJxVOjleMSQ4QNAGfKvjGBW0CEy3%2BsGk6FjJLFKzI6Uwspk42Ttpfq6%2BTjBiapY5Ud%2Fu2eZ9OCYdN6jg%2FBbxXk8XjC1NEr19z%2F%2F8BUwaCin88TzhFvz98jNh8qbQrNbrzTKSji6ARDydGFRqDFEPt4aRrLIvRmm%2FayRUTtU73F1ym4jH%2FUyUCNI9bcva0mUBCPlY4nTE8ETASF742d3nVfqOEdxXrxcR1jD9PfiRJfgvc5qXLerS0pyGiPE%2BGLQ%2B1knEI%2BPgNkZRpaq0fm%2F3F%2BVCLNU%2BwjWuUlGKaypUleWAKsQhrRRFZ2ZQEb3p3Ns4SXaitV4n7A1CF84yCs99OTICoe2swr825vgY6pgHqt2KyDuXUreylEUE%2F6Fu3CDzrUfZEcnzyaTFn0T8fVcXCG3fAgs1bFcy6NajYohSk5CTFW0jBHiPzeJoSR5fJLg%2FpaDpwghmV68EWgGQAe5ubkS5%2Fckfqzq7erNBIJARzka%2BBqCRJM4ajVl%2BmaJqtt8skQpWmwITSvzvPgOJo8LBZiAw7Qg2BweyyCTkaL8KIrStOz6vRFeboyCJvZ58DAw2lYy2T&X-Amz-Signature=232e00f0a16085b25f9c13e77c64826ab1ddae42cbd1f534d2e7ffb431fbc64c&X-Amz-SignedHeaders=host&x-id=GetObject)

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
