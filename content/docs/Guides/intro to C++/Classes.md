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
  <summary>{{< markdownify >}}What is `~Milk()` ?{{< /markdownify >}}</summary>
  
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SGBOSP4X%2F20260730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260730T022453Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICuuWFKHYLwTERX5jQIcW5VJJ5f%2Fka0nr%2FqaGZ%2FTJxHiAiBoC7XrxN20WeB9F2NJbsbzZPSyzAEerFGVqg9rS0HhDCqIBAiL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM3Ieikul6B789KkMCKtwDWcPAXg%2BmDv46lgD%2F9PWtz94R8paLVNkyeFoyIENXIT7J0r7jrDp%2Bo6LeqfG2tu22c7nIO8mzHCKuP8phSP9PmeAXnmXa1iOIrf3AdigJlbNk1I%2FiLbdQy%2BaaBR4pbtyAR3QiwFiygR5F2eTipnVNHoMogtvmokMTyzurpECJucQYj%2B8X82GSYiNiSnIfdbiRdJtNSgM%2Bxo3M2MpgYJjkKWc5dLDCKIBZukqSUBi2HOfYLxSQ6XZz%2FZIyLMHP4TEsbUPjA6%2BkqdEYqRTIydZ8JkEW1xrIhWaAmITbSM2HX6QwNibmRTJH1Ml5yHM6NUyXDO2Egon2oUNSRz8Ly5CEFo0WNGDum4hXZoET3xmPUpiy%2FMNyaJgHDftPi4vOlMnIFQ4Ze4vnZ1vdIa3mY1aj1TLP6d2gqLHKfXbivVdvGSnYC0R4C59vFOklx2MJTrldkS9fxIq16TjerFbXxWM%2B3J8ZOB32IyRs6bxeLTEDLx61tpRVk9QOB7SqjMb3FEj31nnzD%2F3VzVjYM2%2FQ24sGGVffPAjD27d2EVANSUFAaEDCHbznkAoUfv4lwFmTxE9RYYpntKe4uEi%2BDgkNAeuh7Sezc9RXt%2BvvfE8BNzX8HdBByEpxyrlfrpl9%2FdIwquCq0wY6pgEwsNIOzeaDbUpPuwT9YOInn1nrobOpmGSEVG%2FOZ5RYHX4SIeUkkdHZ%2FwZJqZd0gH86ydg%2FtfzFptu1VPWieu3eOVoEoff3kqjmRyGPwEk%2BYWoooh1w6j%2B9Dt2rirLxtO1gplIEI3hh6E0rYUwsVR7pF3O5MMnRpnIYdvwyyvDUu3u7YFBrwPbnEJ2te7v9D0jSR48MnIod96IuaDWN95Yv1dxMllJS&X-Amz-Signature=79cc031144c2aec2aabe24181b463e5f52499ddf29ea0a1c7967618c128d4320&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
