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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VUOJWMY4%2F20250718%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250718T004433Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGcaCXVzLXdlc3QtMiJHMEUCIQDMdNDXPrP1k7T3INmux1q%2Bd142NN1mfBxf9r9wLz9uywIgJLPpyHIlk2VNS5U%2Fme9ksaP4gicXdKewIecYp5PWjGgqiAQIgP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEZnuAfMZthLqSnzdSrcA%2Fg8vL7BEdxx7cyb3CBiIuCNvXt5lM2RpY4qz0np9J%2FhL5hMBW%2Bg0hPo34m%2BEf1mTK5fEhEjoPAE2NQ6%2BaRqp5hA65xM7VBW9QQL1l%2Bv%2FySZyKg%2BVWB6%2FRXR3W3yhH0Srn0%2FrxrT68dGhGgDG8SbbCIBrQWvX2Km1sGn0%2B4wggCzR6Lc8MyvZeNvGbrynjHoDeVHCP7fyCAJSEBrRG96vrALqtngV8Kl1jtGfia8JbDFmevX6VaSVj7SCpKhIR8s2zdple2OJ53G6XzTdTLFOWc64DJQoN8WXLMrIYAKvTyNHnxjaMnQ255%2F8MLPuPPJZLGUZIHW4X2v0tvE4wC7oK7fuV2JR%2BiDX8sFNJia0Alt3U%2B3VRlRQmrdSZM6DcCQA%2FZirV5O%2FMJZJ23C%2B%2Fj9%2F8RZk3yCiJ4dRTVTUbaK0xcNKMOgSNOIcJX1P2YSDh9A9LzqM3IupRLfdO7co7k%2F47iYuwu%2BYeEd3U5zj%2BIyDs5zs0%2BX39wE4NvPs4Q08%2B9eUO%2FTsCdoZC1QGJ2pXFK9f22iNlBwEFKh3tbbplyfXCBrLAWSMAoXOXGibyAH2TLHcXUt9qJyEXs2HLf3q4CTXVcsAwfrLGzIX%2BU10M3429GoD9aNhKa%2BKUoFydtQMO%2F65cMGOqUBsbzAMKSebzE3OKTgAdNJ%2Bm5wcFOQQHScGbA%2BVQTmoZ2uMINwaZ5O7LM%2BKFelU1RqkPihfcSPrgAaY48DMKfGTlzObgbgbr37R4AWCH6hi3Wpjfwij%2BEplTn1v77DAAZHQBvoWoNnBLEr5EMkNhX3oPDuGd0W4iFvqpf2nXyxL9SchHMKyPLxKMWkk3k4VgdFg4w9%2Bu8xqykP66cOfK09L57c0jr0&X-Amz-Signature=db968a939850139013396ef452dcfa15bdc591e461e0c9c702f31b341404d831&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
