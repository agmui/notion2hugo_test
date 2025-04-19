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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466STUARWAS%2F20250419%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250419T180926Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAkaCXVzLXdlc3QtMiJGMEQCIAUNDQmSPDhDMVi4%2B2TRjYrI91PawB7DwvFXuuRKG7V2AiAz1Wm%2FvBmCjAnmS7Ug849u%2BwpO9YNnp5p3xO7Jj1VpBCqIBAiS%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM9D0o%2Bd92Lj%2BYG8g2KtwD7dWXHVGqgJ8leprV%2FvdNGHtdIvBvwQ908ArJrRS2JH5PZNGgsK2ka%2F1TjdtKZgJzGpnpYBeeWRo2jPPLAQqZqIEc5QszXotndaj2gYaSc91KtRN9YOXT2Qlnks5G2XEUyCWaBNYYNsF2jKGMjI4aqR%2FIIMb2LuPomGfiXxA3g7uV2Svp624O05d14TCJKZUsEJixaCKBcePK4lXobJDai%2FjtqYaJV0B6ebFL8Ef7stw3V8cAVor9C6SxXo3ZQxHp8%2BHEz4LcTWGOlvX3NOM9pwXXTsTddJ6Bfk%2FYjHff5I936Rj4L0VI96s%2FJNVa3FQf1RA7lCg5xbxQ0KB3847g1dO74SpdVJfdfwk6MOib3P3nUck6D%2BAxy%2Be9HJbia9BAiY73joj4Ekw9UX62YHD7PLdMeY2ggz%2B2OFN9UXgQsWcRlGEmofWw6vYr7%2FD8IIeL%2F0gbauSqfoaRRkb6xENn4dM9t5Zl6AjzBr6CE2iDIEvpfXepbjDDmAxC2ZToGT1qV9FsvcvGbffJed%2Brul9qUSFauDI%2BuEhIJfG2mg%2FSqaYaYFTrA718UL0iBtrWiRiU5AH5cdTyX04yaUbw1gNxsTL3cdDGuHyutwYWoMH7t1XFSAboN2aSr7jtSMwwz6CPwAY6pgGEoCWhbuiEGqHGAMTa1WQAhQZ1mNy31Nf%2Bc4a85MhygNY9N3WRi0%2BHauwwvEJR1nqef0b8COOGn2b3GHEhGyLVEkOem4osREQynq2nZB%2F4qtJWULAW8JAF7BvOanYJwnfnU%2BwaqsjHSrVh4LCl5LVWz4L8Ycg1UQ8Wc5Avb01w4IMASH1%2B1yJIScqumJrqBUJ%2BIkW%2BqLMnrllKjSs8KbsiCNDvvdYV&X-Amz-Signature=e38ee2cec18d0d85557e36952349ae45f3b40809456b5121c8bee84ef3a8b2f7&X-Amz-SignedHeaders=host&x-id=GetObject)

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
