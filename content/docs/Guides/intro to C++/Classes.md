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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664T7CV42F%2F20250206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250206T220736Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE0aCXVzLXdlc3QtMiJHMEUCIFB2DCI9BLuFgFu2A%2BvfFq0nm%2FXEhoOIIt4448CQuz0SAiEAujyDoBAq3eRzp1CQ0dS3nhXTZwwdipe6VviCcA%2FkyaAq%2FwMIZhAAGgw2Mzc0MjMxODM4MDUiDF5xqi14hLrXG8zq0yrcA8UeP2pW%2FDy2MQOD2He3hT6CP%2F0gfuXkxxCX%2B9nPvJddbMnky8PLCOc5JKFIvSvOFHYI%2FrRg2CNYU5wrV39gFB%2FbJ%2FVjYUlfYvWYVHeWSaiIq%2B3xDw%2FYs%2B7YJ%2BClMlBxBMV9mqENt7V5aBx9R5509r0GzJ1necXLQGtvcD6rLl7tpFb3MS1xoEBg9V9%2BG3pwxlvAV4a0elMuB5eP5pJW%2FtNQKhFuBAPL8lu6yuiWOKfYYNrif8gmV2bsyd0UY%2FNoH5HDuxOuJ6Izba1A1Yr9woK0Jmn9vpL%2BfWuzL6CmiW5ENgjqNtUwuEs6NNAwSt%2FflkIhbpWcCbTE4seHOUy%2FC6ldWa%2B6xQw%2B79gCsazjUaOC%2Bfo3GeXeAl3QAooHkn6WhLbGAmzYfT%2B1NYSIJlXYJ%2B4PwUuU7azODx9wYTv6rvC0%2Ba1CaOuZRTaTiN5zQV6Cydei8UvMWNnqtL1%2BDjyycbNSPvW1%2BYtowyXjcADwAyPegl%2Fj3RA1d%2FTYU9fwlJLbkl5wste%2FxRUCutYjPJvLQ9AjfITWb%2BtsTuWiU6S1iM4Opisv0j5GgKVKsezOTflMFWZkJuFBLyJPSZxLqc6jA5CPNxGwBmw2kJcHXF88U6J6e9nIZtc9JxjZADGVMMW5lL0GOqUBPPSX1J80zzH1qRiQQpUXcYRfI7Mdq%2FpbYl6Q6HI4APN%2BFRjrrk60Ls%2FeMxKyoj22M6aLsRJJ9ymcZ2RR32IE1lU1LaTwcdfmmQXWV639NxWUreNdVRCqyQPak5FstMsHdOs%2FIFJxf1cM9aeY0MnI%2BwIykghPZMJHVC96LgO9zUjZxt71Kxc7Ksxb%2BdwqwftkomtGwXV2evLuil0IuxP2vGlLInzN&X-Amz-Signature=38f1c7527aa205e697b718d9f7f580a50e5515e5d6526852144f827be35f0ed3&X-Amz-SignedHeaders=host&x-id=GetObject)

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
