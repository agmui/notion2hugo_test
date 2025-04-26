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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666GP5D3KE%2F20250426%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250426T140647Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBiHqbGlWiGVlk%2Fl7uEIOuSwO1sdSt5MhFou2YaWjj%2BRAiAh9z4A2E6JBOKjt2yJZyeSubFxZ9GB2G1feHDMaqodEir%2FAwhHEAAaDDYzNzQyMzE4MzgwNSIMF6mZng%2Bq3v2gGhWHKtwD0azv%2B1plbnx4CalTnMnUGb0N3zj9sPp9PwTAiZn6DfzkfuOozH%2FE8RNw1JJEZo6hR5BJ4tYtJa4s1%2F8uj5QKCpT74GMxSQDbG6angQcPELpuuNqXbq48KZPxps8lBqQtroU1U8Xz7Ug6rP6ucfhwLh8IF%2BWtytjVyOz%2Bgc2tegWvQlZiUtzRpm%2FLfcAKYiC0AxQJ6%2FAzWbdwT4nQtZL0ZJBVBP2XKsOdRGrPVzGZhOpo5IVZSKsHJl06IicPjIUPIO%2Bs%2BCNvviU1TCanVLy9FY%2B%2FwUllN9MyhdreyA4vGsiPkHyEj1WHHdUXmjBptdTXhxUIm5J9QU5Rd5HcxfSPoWGfSMrzXuNn4EPPPxHFX4hBylBbS307pd57lPyTBVVN8h77qcjZGwBrsyujldKKg0XvK01Zhjc0SJRn%2FCorJwchYfaKywNS7mlyjn9BpF184rLezU4KesW1njp1kmlmsJwamcmym31a%2BUIhsyRGghlRrK82G%2BeBvzzvIL9zfPiKfOWYIjsj6PYiKJDYPgTBUgWU%2FUpHhYJfgykqEYfzPTZlRgnKu4XDDQVCzh5axx3PMWAIZw5cTh6ev67KP1CPxgr9EilkfQv33rSHiTdS41w5coRRMqrUgjIeXY0w1syzwAY6pgG9hVhtHWQNgFB9wsYG7SC3HtwVlhaxQq7l9eaniMk%2Bs89BDepkedXZIbN%2Bj2Kdx5FCQd7lnCtJZuwqpttCjj3KXkm%2B4a8ZXzcv9S2mlM5oxHSd6ZHMRxjH25pfb4ytPFVBOcqRhxWkw1%2F%2BlIPWI8a2j%2BD1Js1vPGN%2BAHasWu4TlHLHQM%2B4NdyAcGuM001qf2pHWEXDcp%2B49ei78n5LqoLW%2BqiVFLe9&X-Amz-Signature=cdbbc03e33da5d790ccc91ea5f9343893536624e43affdca99e4c8aef0223a8f&X-Amz-SignedHeaders=host&x-id=GetObject)

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
