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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46622UNCDYU%2F20250516%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250516T150822Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDd04S0ysDaDCRI6BYjuxFLoLZqDTV%2B1mdqcQKlQxDdDwIgfi6tk3DfMvv2rw0yFNmtiekBsdy%2FUv6TJ%2FOJQ%2Fykxeoq%2FwMISBAAGgw2Mzc0MjMxODM4MDUiDJ4f3SVVVpot5X5oYSrcA3KFfSpLlrpmSgkSL7lqP4h8uINydp7TLca3cDvYQyl4S1sCsewss5jFsHpmK1Lwb1eGK%2Br1eo9qwkk%2B4OR2fz%2BRkZuiMDETMti6MeU0sx%2F45asZYrEemI520GLsglJQVbkA64svlgVj%2B2pXuDRPZ2no9Mh6x3BdtBW0UjnGakotJE1bKMd3WDGcYuhVtEjTpe0yXO%2BXqsXQOCWsXu5nZE06glUEvAR0M004JX6F7RBmzDTgcrtemWoYEyKQhRQdrMXcz7ZI7yP3INw4P%2BuPq2IxORBNcIWdHDDmR2L4k7bWrB%2FZIO%2BcdWieiuDho2HG9IL4rVCBoNJ3JwMZu2bRd9kREWkZ2x3bJ9VRPuLDqkjRgyn57s8lemFWJ4VHF78S1rTR4UOlA3LZ0GZtsQX0SczjOSBFlQ8xKyHDHq2ubKaLUxJJzNAQr%2F3AokmaZ8%2FYbA5Pz1fe7Kx%2BtIEukd6xyFays4abrOv3HwXvQDL6DfWKgEvTuErgEWA8xAgQXn%2BeCn%2FgWGuLXWkoJ%2FUnXMSshk50uDw0FEl%2FfUfPNV8wE2HubOcr3117uFSENoz%2F2kLNph0pErrULRYg4cQZrcpqx%2B%2FPHOmQfuFQVYdk3XQ77Wa7m4ZV40NAPtD0l2KdMNeancEGOqUBTc0QZvkVdJP35SeIWEMpxGDhn7%2FIuqi6RgSE3%2Bh9tKxSxlos89rr%2BOZS1tO8aPm3F9ODTelhxCCSjbLInDYPRT2KSJ2MyDDWFCQcoJyRL44%2F4gz%2FmqUU3cGnYf0m%2BgIyuHZVAmRx%2FxZL3dvHF5%2FmO07FbCgT5SpZVV7z%2BQ5BcMA6Ouw9sbl4K4U1PN15AaeGds0zgVf7B%2FDpwfuZ4I5oYwQpaxp4&X-Amz-Signature=0ab347e5fb2f60b7a7f24f97ae25041bafda3777412100f478914f3be077a8c4&X-Amz-SignedHeaders=host&x-id=GetObject)

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
