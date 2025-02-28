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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V2Y26L3H%2F20250228%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250228T150806Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFcaCXVzLXdlc3QtMiJHMEUCIQDwmC1Ew40rUUmPeJHwS4VqPVjQq5M1wJiCmxOKEdrK9AIgAoK0QBBbgdebArzMn25Z4xSKm0Bo1nOhlfjibjIG5yEqiAQIkP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAmXGn6ZmBaFRvxSRyrcA0NsxpOIeYlBb3iYWtqQjVkmamnW1CjzNa7%2FSH%2FzkbATiw8kkdMFeKnFJMUEZsUEDpmgwcbc%2BQTuCUoyCkSLXeNaMP%2F2ZNowyTSQDSdR%2Fow1gr3OcFHR4iEtmOnNXNuCS9584e7WqJ2OfHqvfKU31kbkGtCL9tXL0u7YOWvtEBQwI8B2jxEHR0SeUIPZPfqzGQoU76Z1k4iy2L88oZTmjIFjGQ%2FSTQpz%2FhEzrg6tWwOKQGlIKDeUY8H9HZByWkDy19XvS5loO6TONROBUSkYgb%2Fi3%2B4HaIFM1GPG62JS04bI0LsbeJs0U%2BVqNw%2BiBPoqePoO73tzuiJhXqkNRsDpRAC2u4velWvmaBa7TuU7lU909zp3sqaSue%2BUkH%2BGfcQSOnHCX5rUo6BExo7vuVFR8ywNTpFS0uK5UrU4VrAwh8tgoas4xh9zBKGYJkHC2AZ0g7w0qgtxExeiMCLczx1fKp8FZMjkzCRgAEj8xVDSdUpi9hc1cwb1YqD9rd66dvOiLQFLHiVy99d1Y6SYVSNS8RkNu4dHgpyw8JT%2BKubCUj8UkSbo%2FdnO5GpMmpnL8GhayQtrUgo38w%2Fv302mUOVX5vC0X9g%2FBvAK2mdKkjygc3PJj9G%2B9KvjCvEGeDN0MKOQh74GOqUBK2TVBM1y2yL7uaoRlRuat3qnHnxKnvAQeRyPNxXhoiVdF6jTb4h848pnk8R5jZsDJ%2BD7F6p%2BB%2FeSS8BZsojogG4hxt%2BZXXEgMWPT9D%2BmgLtsGbXr%2Bati%2FZ3UeKL%2FH3RaTyeh7zWRU1%2F8H%2Fn72Al9%2B5u2iGw%2FeDJrlitZL%2FKc%2BUHzr0yI1p1LDGRo2PR6UBWm%2BKyEQxNfnxb%2F5TejIz2LRyXBKlbP&X-Amz-Signature=b203bd0a45dba58504e34874f212b50350af1caadb326909e119fee9ab7040b1&X-Amz-SignedHeaders=host&x-id=GetObject)

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
