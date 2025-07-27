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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QNBPS5AE%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T081127Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJIMEYCIQDRdNkerf5K%2FR9fsbbV5d%2Bv69POCTmDtRQpX1NnbouUbgIhAIk16kBYTHbmv1tdI8Nt29CVM6pHnqMgOMncN%2BM5IkUXKv8DCG0QABoMNjM3NDIzMTgzODA1IgyKiP8dztFNeXvQbBMq3ANOTImCcVflh8O9JVXCivTZCc0%2F%2FM%2FZtppIDMBbnSOJz%2Bie%2BxKU26v9c5nZADhbci1mCCX0zL70mlv6S5eJson06p%2F4N3mWIRt6FndgieaItVcQIllyfqeCm8K3LfzmBKaJcw7I3HGp%2Fzs1SpYjYt2bTDEvWGU4%2FWUbdswoMhuu5MFszrznI6%2FIoYqSQ%2F%2BwsFjGY4AJtwks3g7omo8wz1DRfG39umiF7e9VxOWu66Z1eX9jmJtkQEemx79caCJgPhZzXHf5x5%2FbOSjBs7BFdwPkiGB%2BHSxOLEp4CvQ87HnxKIqjTiEbRG6kucXlLIMZvnobCxsbZ0SamGiPJoSK455vWgXCenn1NWwe6VtQX%2BWrrRsF%2FNYLSXOuAd6mfZQGhmznbYZ%2F82pYZXVihcjubuW%2B2PisD4fbUBjUq%2Fd8hF%2BthHWUISoqvTJOjZgb%2BiuYeXBGPbWG80A2t9eW%2Bv91Dtwa7O14wV%2FoCANI6jz01uzh%2BTFOZlqY8RNjkPaFWmxjxAkwbUAofDW9u1Xd7zGnXXEGq8PQCgaYhGZMSSYF353RaRSioKTnHQ5LzIc55IeFtoYUdzpp4rNowII9ptdg%2FwT0M%2BLp8ffxFma4HYsGEGtBAEWv1R5z%2BIkEmmi55jCDu5bEBjqkAS8GWelRS4EVWHa6kHvdMSe3%2FsDMkVsofKfH8Pyv5Wqh%2FtDVJICLjnm6iyAJsp%2FC1P%2BVbWKxWivGX%2BjT%2BOR1YcgWmwTdgdpEkYl%2BVJcNnBz%2Bco3xmjsM5nHjRcGGpmAvlKXNUJNqtnoxKhCKRPoby26CQ%2FKWTg6rO20C7wFsMmsOC4FfNmDpbON8GDY3%2FDqJCfX06zz8V3uihEmfTII%2BofzbRmnI&X-Amz-Signature=34dd0c662b645900222f8ef18fc06e5b261d8d396403932af6aed943e7f1bde6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
