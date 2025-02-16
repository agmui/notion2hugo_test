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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U27JZHJD%2F20250216%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250216T150233Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDQaCXVzLXdlc3QtMiJHMEUCIQDukGXsP1CqxkVtJ7O0PHuUndHXw6HBmL334KxhYsClsgIgfVJEL4pV9dIEM7sYHpPALmglnNHy3XG6V2q5uRigVaMq%2FwMIXRAAGgw2Mzc0MjMxODM4MDUiDGc28VMB4nF65OVT0CrcA%2F03Lzq2ZM3NVCRr4U%2BK9WmmbbbA1OMfP8FQXrJKgWDWLL8y3R6RF7Az44ajl78%2F%2B5wICU%2BSF9nMfkdRl%2BoKF7P%2F5m0nEHNl%2BvSk64egSo9vgVU8d1KA1XerJEBOjcG2jfxrbbYuED2rbCtjf8cwFl6TCUKI8toRmtha5gJZo4ehaKslz3kZLv57QYFTlfjQ%2Fj%2F5UyrOdRqvCqiXM0YBLgLOqBTnq76YYu2pOgSNAtNtCrZTyWF7z2RUP3Dm19oNpcG8p3lvHR%2BbAHlSfycWXJ7Urwqgt1HOuG92nXUfkt5xvR3aaxHOV4zMWGPMEYW76XwxaWVAa5lwZynu%2BjTnhVArr8sk0vQ8FkxS0VReDXnhW1c%2BEggNmBrKU7El1XJnN3qV%2B4Tapd%2Fq82G9v508wApY3cBqetC9fIiEbSCUeDgCACikpKzW7kMx%2BqJOUZVp5%2BfD%2FZfdAp8VflLDO%2FXR70vRlPaEhwQtWnwobfgh5zj%2B2P%2FtzNC9QcVqenmxSkMC26I8UusaXu6xM%2FQJ5OmFivDd8O0liGYiFdPTjJsAs1sRJR0g060XBtP7TXcOCjbBeyi6RWGTHQGC1dvaqR5gdzJ1Fopq%2FBIQp5NQaAlWBNyFBo6kdFIqvFh4jLyIMJeix70GOqUBP9Vo8BC5kOAxvbrmHOl2tdw%2F4pVlP1x6ew9LhPm9VTPqUITNM3f2sy4FeAl44MxyYUQ%2FhjBJe7Ls3SDgLCUw74B2yI9PkAJ4BEE74dQ1OuhnjJX30SqE%2BUz7vsp4x8oPHMExy13QKYdFsYHSqoQAKafRQi5K9jPGVstw3P19SnJ8GakCj4qXZTf1wAOZk0gH3eWM2zGvJ6sHDJ2Gm8PpakVBjxve&X-Amz-Signature=37ef55d672d7760ebdde5e4964aa5387bc326a3f700e9a2ab52d39f90d404ded&X-Amz-SignedHeaders=host&x-id=GetObject)

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
