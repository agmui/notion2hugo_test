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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664TWYZ43N%2F20250622%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250622T200839Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAsaCXVzLXdlc3QtMiJHMEUCIEckuwpAmSfBTQ8p3%2FPBOAPdpUc75wCG16kCso1EgPAFAiEAru452O8cCBL%2Bc%2BMMbcXuhkGMhB%2FMLynFihYjv1sy9%2BcqiAQI8%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGoGeNnAn4kON%2BnWzyrcA9E%2BOBdDIPevkLkTVUR5DhmtJxdNEbY%2F5wUHrMkH8pAX03xJpiPzQO2ghzjlV0BPRRB59nvP%2FRfHkBc%2FiuUvKA7aMgw6Oux0ByDV%2BFcFNuXG642nHQgt5gxV6y8xpqtok1Jtwij5AZH9G8WRRiLRjxmattc4G44w6P6eKLV5VXqQ5rOUobjnD9Wg9HVDwUIuFZT%2F3gybAYa%2B15KeWCJxYMPDjBC6wnhFBBuH%2BeOMwk%2FNP4A9egvoZeR8s5YAeBfy1ye%2BBwSXWLAA1RWKW1fuZoNdRgVtKuuDj1FXRavzQ2hUAyR4jc6%2BMFK97l8sQof29Tfrrz8lcvldFiUwGYTL6TVYywIEyGPFgo9ej%2BG5m1tkUU19CPpzLcZqqf83wOVx5vXHLQOz8YI6hP8kkFSjqHzLRVMmPuzan6IegPF5bh3NlP5SlcoxvwzwoHwN6kZrrzX5pYaTzF1zX9KvuQeDpX6lEKKUIVqW8v18aIVn9czsGs%2BahakDlTdix1ywY9PZS%2FthFoGTnu39P%2BDTFRB1NrWYJBy9oy593kLSTpW9Rjthngo3b96ZeWd9%2FMRuL4Bg33HkmMkQ%2F96%2FJqcG7QA9Cn5kNtrJDPD44gQzYhCMFKSJVB%2FCst%2B4rMpvOWXEMIaU4cIGOqUBY2s8kDN7dCIGetzKKGVK2%2BhXZxcnZqGydfHTJfmiKDFhUPe5RFivcOIDihTggmlhKgO%2F781g001KbdrnnZvWwbWkzRfq7pWk4lXXaE9K%2FGCqAiGWjLZQMFjwv%2BTDfo7BR%2BHl9Sy1N9I7bFgXyYzdMb%2Fl8cEox55wlZKMOqeIRpamTV7LcNzzgdOweFfKMld%2FUnYe%2Bd2pC%2B4e3Y7QR1s%2FRV936h36&X-Amz-Signature=990338958f29a2a6377d71f49c32b53539357de6709dbb658b05dddad95f2cf6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
