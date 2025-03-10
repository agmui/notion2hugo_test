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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SC6RI37Q%2F20250310%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250310T022915Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDkaCXVzLXdlc3QtMiJHMEUCIQChqIVPQC0PkKukc2HliOzE0C%2BzSD4v0u4QIhXVFRF%2FfAIgOsfV5rLW4aw9ZRjpFfUflubNyFdqlzSwyIgNTAr2fIoqiAQIgv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPYD5q2tc56iKmmvVyrcA2tyL9cbEcu2sH8%2FE7HSf66a8IsJtX8TTRMHlfDq86fH%2BYoDAkqATU6OClP%2BKVA0ngRQuG7tvzdGnq6x0I7fwFjhhkYkwYhuZyjKmX%2F2Z7j%2FpE0iC8HVvD%2Br9AvwNMHoX6T%2BsCobj9s94%2BaWrPoJahv%2FuqHn55hZEzMZ0fqUrEMpKcftSl0WLPLYNUzslja8sbFvHMQOYuV6ojbbyaiK2o0Mnb4v%2BcOJ1igvHYU8ZSNeJwWt70Z3fAtJKFfHsCaLL3v%2BQB%2FDv4eCHy%2FHne9iW3sCkmihMuzSToOgn1TT5%2BVW6rPf6WZcZg5H301jhEi1D5jXl9hBzmFnh6mNKeWua5bTcoixqe2xDW5oQTvpChBXTyhOIbz90jIj%2FlN2QE6olykqP3x4DodoFfJ4qQDKdcBGOlde0eiXdpAVC1bx6hI%2FSM1bUxWp4s%2B8%2BMqk3w2I5yeYtvLYyxOXhj9VFPEj%2FJEqbjndIKiFEpNK9HB3T%2FGwMbmb8S840bBUH%2BPOOlNm9W0yT32to1WY%2FpteHS7DHVolUjtZuKFbo2LztiWRhJbkPOU3LOl3FK74QRGq%2BlhZBA1EHRDN4nkybuXitaX1sWoljmDTyUYSmXq13NcSMaOxxQePsszNgbrHBhdFMJT7uL4GOqUBqW8uthyT1gm2UFjl3yc81IBzQPtyOwLofg1hx13eyDOb5hbu7tQwiXD7qal7h9yEotlbGmOYB3oyPOpOppohVAWmL9ShheyHluxIMvzGAqjnTZyy3LuCdqdPnwEgh73hn5mT5kBzI7E51OCPloHXzwWoumzkdMQZKF0KQ9ziq36jnKkF9yvBvFG2yt7msROF9Tz7lkEyZmbmATFPMkIQnW0%2BNXRg&X-Amz-Signature=08ac73da20c7457dce0bc2f551dbddec44d69f71e17559c800517e780f2ebde8&X-Amz-SignedHeaders=host&x-id=GetObject)

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
