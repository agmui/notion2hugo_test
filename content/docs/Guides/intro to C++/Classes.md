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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YZYJFOHA%2F20251123%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251123T015000Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJGMEQCIDdSYjPM9t2TQ6NYOPIBArtE0KnXkL1XkCiktgyyz%2FeEAiBVz96891iErNXYnfCOGt1BD6Uihi8X4y%2Br3TlBfxqvYir%2FAwgyEAAaDDYzNzQyMzE4MzgwNSIMcWBUt8x35QVk2PKBKtwDGgWfhamRURWJ%2F5YkHumdLaV1WdV9H03F2QdWIWO6Nysyo5dzDOPyo312IuRLM6KvquPYaheGdM%2FOeNrvCaf4ucsEBSBKyT%2F5lXDjp2M8jCEx2dUmZvokPDL4C%2BXXasVZk6XRFLE%2Bb9wT9YQFVjLKyHkDmW3zAD%2FE9%2BSF5Ov%2Bxg8DwZcj9LjPrrlRV4tf4A831I%2FgnoYLZMIQ9TJuVKagtUm9c3cl9cKajNjv4sEVX%2BTazvQIq9AHLLol6y%2BjN4SC%2FMPkXmupAMo0sm1so1ZuvJcBYRZqQ7DXglUmjyCB4gHUdtf4cs6WqUnuPugkpacr8UkP86K9CHAbwamS%2B0dcjiJiFODgeoia9pNzBkjbZK69NSyq7JfO%2Fle3cy8ST4wsS5hTjKxtARAMYmzLqh4A4uH3GTG%2FbkIYBg8kdul5xxpCK5pskc7Bnl7bgzpoK7yK5ZPn1Q2CHbJB4BIzx1x6l%2BP2Cc4xgKksGkeOMHKWq4M%2FL3%2BauE5OlorybubPKeDY5C3T36bNkxUIKA7rk4Tjb5TcCtGzfdZkZLNP3mIHg%2B7TKIyHQfv%2B%2Fh0eihuckasQZeXZENhaxI063VxIj7QOIhDp0GwHZbW5IVh8QLWsdadjGtUbe5q77L2FOjEwwbCJyQY6pgGnwz0lrWup2BqxAdaV0blDccZYbOO1V284kBaGj3D6YjlbSo%2Bt3znPc3gyhWujxLcMNN9jog5GzNHu5h0vFNuZRn0a2GaUHiLckHITA685NoQ%2BOfHNWMCdcYwhaBdrxT44wWx356n9E73Oc82NSxeITaumNfaOaTXCmABLZgmm3zlOR15ABdBecOZn0eKM3IBOXrCXJypuIkfAvqzjxrunCkonvH7y&X-Amz-Signature=f783c69381674074b0034aa3172bdf9ff461d89106d1cc287407dce574220cfb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
