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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TXYJH6NB%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T044320Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEwaCXVzLXdlc3QtMiJHMEUCIFCAZqxY8E5Of4aRkrfc%2FdRuoLz9K2INmmfHh%2BjcriZuAiEAjNxS%2FwJRCaHsprblbK0SyVF902zo50Y1L5bCX027AU8qiAQIhf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDO3yPXcJs0EwxeVcRSrcAwqjhWu2ptgY8vuT1gPoAfRvDkEXYM3HMR%2F%2FZf2OzfSWaUz2dOBMct%2FzpXT%2B%2B9wVZJTxT%2BRcif9EqL4ZhoBJoizz6uHkAhoQz6DFWf%2F%2B9owiPBuSPtkCFKuu2XRQlv2XMO1lzUXWFn5mnFPxw17ctogQ6RRrEaPoXgX5HWI3IL33hw%2BUWwpUvqp0ftyw2bDL5X4GuSfOUzNTb3mSvb%2B6ryaQdk3xwY6BW92MgDPJb0dTJ3QD3efx0krzB4ELI6kR59Hwb0yK%2BYV%2BL%2B65cTCl3sx9WCZHRgN%2F93M7o7M0GGvVSjkbdQoEp%2FkRd0M%2BjpQT3HKSf%2FsanTla5qr%2BFAEQZPp4DShwfdP9GLvkWcCBqzZL4DvMW%2B8q48OXT3gVP6utvCwlvkW%2Bc6ttEnZx%2Fz6Ju7A1NwSPfYUgV%2F2A7eRV0EOFEMkuZqZgwIYHZFzrcEGWCMvpRofbB4fZqQWg3vhX93sMKkdUA1jWPmrZqEgB74ZyGJj%2BoHdvqpdiYXUat6nSXgllZR2MDyKowzLI9ay8PmSB0lj5SqEC35phh4zIpKgNf9IL8AJTvjh5orPpRnNAhVYWZ4yAKhYcJp6m9RUX%2BYraXfF8gWQFKBZsP9dWV%2FLcju4XIRMSgBItGWxdMNbI0MQGOqUB9aW%2BX54wbiR8w%2F1tIgGsog85itBn2xi%2FqsiXBs7ewzTZapKp4ddZ6wK7ty5Gw3T5KUylTeCEWrzmaSsmtfV8Sty24aSRv9z2J6rguEnyjqTjidFYw9jb1C3HGvRoNP7%2FyurnrFqe3g4MKS2zL3V9mdfPjF3PJSK6RtQL9CFc%2Fs0WdCj78h3X95rqsLh80%2FPql%2FnbHZGptcKo7R6j9pE%2FWUau7rYB&X-Amz-Signature=e1089b88d85408df35e87dc55e5660f3e50d0b61fee103d582623c27b04ed194&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
