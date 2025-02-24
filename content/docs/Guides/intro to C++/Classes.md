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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y2QTKWEQ%2F20250224%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250224T131700Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD7IBmgeHeAUHTJetMg%2FvuoHsOAxhEtbkoWTCtD84El8gIhAK3lDPIiZVeXUbGQyPzBE%2BAGJwXf%2F7ikhes1U048j2ncKv8DCC4QABoMNjM3NDIzMTgzODA1IgwATioTj%2Bs4Ll8obY0q3AOi36zjVCFvxleQ7WxKDt0VjZ7LOsVVfrJPCU17%2F7RZ51BboNM9wNfbxg9H4q9PCJRzEdka%2Fp0uchaHPwQWk4YqekZEFP64jTA%2BKZNwbAhxVyftyxmpHc4jFgNSx%2BFfGfrp0dLtvqTZSnYgy0QOahwPUhFCulZdcizzH7w6wIMKhenR5MjqTDtFLP%2B5zqRZr5XmHrc4bsw4ZlsGqKXyHH7xhCfLAPrUU6r7FhXUftTeVKhxreC5N89Kex36%2B1%2FUh213CHjI3hT35Xzykp5YmUNL0pf7hP%2FKD7RuejKLqslytoXCb%2BXJmJGmNdHyQemGWDKZAxnsZSEUiiFV%2B1B2BCUrB4yPx67YVJ7%2BL7j9gOf1Y6ruRxdw2d4IIaNremhJQutCIV29vwjQ4KbYEESIMo%2F0bS4VI%2Bhx%2BBYbv%2BuoTQ%2Fil3NA1ma12E4IQVrCXM%2BcR5wox2SsXgBsYO9e1QzV9AxcfuY7dwdLalHB6x3324oU7vgM8bnaQRVBpK1iXdDInNGOOT%2FLixk5Z%2B3CQ2PqHfudoU%2FDK%2FV9yU2a49wf3kcWpnJNRuuHF8IAF32wVLo3YhiKTqsmtDVm5%2Bps0Uyp6RQVPCCC822fUKFbRDz4bfj5mUnpIkxn6i4O254yzDCJ1%2FG9BjqkAcl1EZXqpfNIe1rjJdztNbW0YxH%2BINeG4Clx9gmCgRDV9wbXd9bQZCwr35LzGaL7HoksAZrwb%2B8LLTWN7wg2EMX2zE4wGzjnnnvv38cfYSyOJPQ0P1BlYUESiCXIaF6seXBIoLP540tGul6M8eunvglYOHTr8OQWSOqm5Tu0ix83AdPzlk6J0Vm85glXWlp5NkRD3rc0fKIt73xIK5z04R9Hm9KI&X-Amz-Signature=140312f6c5ed8f71e7175e34e6273bf18827f6afa6eb79b104dc8bfba12b5d7d&X-Amz-SignedHeaders=host&x-id=GetObject)

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
