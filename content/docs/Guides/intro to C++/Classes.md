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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z5K3GH6Z%2F20250516%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250516T210730Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBPY7l7SLobAG8AYZWta6je6vJ4beeAYIbctbsWdd5SNAiBh9iPOt280AZSWwmg%2B3a2LkOSl21R4B6lJzf%2Fyojya0Sr%2FAwhOEAAaDDYzNzQyMzE4MzgwNSIMl9VQokQBAislgwsaKtwDL2GAx991TN%2Bk1Ef8IKz7tWuUvYjijS02w1tF7TqwS672Ju84xkeGhrVBmRxlfbaahGF1PlPr2jxV72xLbLBwovW%2FItV3nxQ3KHMJMpFEIQiXKBL1ekrivu6EWZW5zjDHeQDYazHtFfSPaovimOCj8ExAOP%2BVMF3mtkC%2FFsrsTImJPBoqjXbHIZ6ubT4D7Ee4FmpRo9uRT6EhY%2BHwmTLDGuEnXi5gLxuoVtU7cKJwtFfJuE9og%2B1OJ4rkxptN2tuj4X0uvNUz23ltMIS9yL4mah6p9%2BktvcgMJA9kwl60S0Yymcbovl0H2QRjeDbxYSLtbcReJUYGkQFT19EF1d3ZJi4ZFRhA7mZXRzRfXn4NyG%2FbjCuum7bfjndIAXivUhXJTnNK5IBEDWZ1U4NBzerNFmPGUPqAsQ4G%2F6Eb5ytVV4ixTVsNoBc6jXmOCCq%2B3pVX31%2BSEvRABeKVr%2BSHp66OPld4WU91rRKEEa%2FLEtNJ9mDwazMmS1Dd5F1JiO1c14w%2FaoD0viiaXloqmA1Im3dixohv%2F5cCBuKnBUCK6fQm27HjFRr7enYd7%2BWURNOqty%2Bys46R24ksPyT4VBmDC6dZckhSOXTy5A7RhpxF%2FItD0%2FvEpVLWfSFp34gfVHcwqMSewQY6pgGUxpGac9u3KIzCf34Vi7VzUjU%2FuO%2BEJ1lUTrTF0W25A7tJTaQvKoiUt20ynHzbVk9H3TmcPTx1oSH4ygE3dpfIs3gTU1AB9OApw6t31hkNHR%2Bliq8Ri926C9LxYmh5IFWCYLJyL8%2B2mAUyPD0Q%2Fb0kFA7QGCtvXC7qUCj%2BCvaJSdGknbbdUhKnXl%2Blcv8Qd1rnueebBWmbs%2FK250PKliebCEBqG0sc&X-Amz-Signature=ec51f7c124b0fbbe272a2f091d53d9e5b2657f7e1bd45e9d9df34c267d97fd90&X-Amz-SignedHeaders=host&x-id=GetObject)

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
