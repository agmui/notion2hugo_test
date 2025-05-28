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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665M76GNNZ%2F20250528%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250528T220812Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAOV4XUZFT6dhwGfesUb5uaZ2MQn4hOCYZyiOBuj45frAiEA3hqwwPIidU4ljHNU6WgIc2oC2Ok83efFMQeSBqUlBsAq%2FwMIfxAAGgw2Mzc0MjMxODM4MDUiDAJCUrjWnGoZ3rzvySrcAz%2ByYW3jsnIfXabsvU1lHlm1WTEgkA9hux4hug0mgD%2B%2BsYLPs5M7Zce%2BLXp9CD8Ip%2BvrADwZ97g3uojGCDjnRs5PL8t%2Furd9zRFVDReGYgMn0TAFfAPBORNJ7DPdhUHdBiiIvsAz19eL6pi%2Fc%2BnX%2BUgQtpSyNfWCABoxTp8JWHWZsGxv1y2JYcCL03XYTsQzWVc2eLfAM3KTiP6XfhnPRSHeTfndVgBKlxmSJrgnsa9pEgk%2F%2FEkjdWfyEyRBiEnmqMStaLHNyRU1plRn%2Bov%2F8ryOPxREesX5MilWDdTO1x3ZFsz1ZDz8wG6BUVrIx8rsvhn9mWngo25cnIAXnPdZwxuiENPHmO1y%2BtBD%2BvOEFsGSCY%2BPSm6b7ec1s5yygU4tqEOuUkOT9HMerCZPEuc81LuPxw%2BEzOvd5ffha7MaLxdR0aA6i3ccUlmc0kLfKouPIdVEi9eVttggMQOBp1j2phf6zx%2BAv9YN1ayEbXWL%2FT%2BrNAPPd4R47OY2gL9cUjD9HmamHGpCtWv7NmEoa4AJGQ6s677JRFrF6WHQkmOjz6UPCxbRT%2B%2FmfEQzyaCxif51cn%2FWClIfCbIX2Lm7cV1ZUJcvyjZGCKugI4JvrpGjs9Aezshh5P1OH9KQflHoMOSQ3sEGOqUBHekrBhIqTgGAcIjHv0fa9JQct%2BeaJSVrA%2BVdS8kGZaaPYP%2FC68SJI6fmXROX7Gmfm8DA9S%2BFjDx6UqULBUlnKQrCmFB3G%2B2KBhJYuwraw4oUd0EZ5Xvvi%2FO7mWBTcSCu7%2FNTQSFX%2FEWChvotT2r2z8zaHzFt1ctdc8w1XtApsrjNPnlgW%2BOpUp0JskTrO7ywO8o604%2Fgfxn3xy8HqCojw2%2BNAFSz&X-Amz-Signature=7d20ad6cb91658369420872d10d7cf7b0ab2d00b91019dcf57591a99db8e848e&X-Amz-SignedHeaders=host&x-id=GetObject)

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
