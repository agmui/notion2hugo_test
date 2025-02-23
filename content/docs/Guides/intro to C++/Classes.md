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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666TNZHKML%2F20250223%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250223T080931Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQClG%2F4Gy6DmKtv9rETJRPw%2BgD0lGku58Ma8qn95azIywQIhAJiqPoJWLHikEN7Qc4yt7ORaV8FG3GSqGw9A0FWzqc%2B2KogECP7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw1AGXxa2TiAqWdzTgq3AO5SKYiZkogOWmFw0DJXeSrSajrWgAuQIZh%2FSLIZEo1M6FZkXTJe5f1VeTZGiZVwFgCYKav1Ji%2FLseOgufkRECu%2Fw4ACpTwvPAjv63QzWj2vdH3Wnvhalf2SQLp2wG9X1f5zH89MWBVoS8hXo0qb9sE6CUGrCCbTQYTKKbte8CM0zUVAZx4hrVofMhjaNPuJx%2Bp%2BMa6FTHDKm81GatllBTeLShW0YuPuexdpYppHRKm09gFiwwXVj2fvk50sC0PSdGS43DvLSwuwKHm3iE%2B6U5bTV%2FoEgZ1E9GZZsktKMQlbaE5h1x92HtT30FFdrATvD5HOllRi7UzhYf%2BSVwmGIigULZy9jXDQ2pSU4gS4g9VllxHNIGrlBEcG9RVl7btnNYak3hoa3zC69xujp2CepUhz0VkTAs0XaK3AN0e5%2BOdG%2BWTSftbuB%2FWnBsRosVcEQiVN2JOpDP5KHS2iojjpnQxmgDctjCumtB%2BHLrjWMwzEIv05Y1r8%2BEs928uRVzklEY3jFjwy5YwJQ4PoV%2BxmrLPUWqlfS%2FljEYJ3BK%2F8F1B1oqGmPzwdl4Mlt%2Bhl4lJRmwCucKxb4Pqpo%2B%2F3vzP80LKdJKF6TjkvspR58k4EotCjiooUL2n8xYc0BcYeDDgzOq9BjqkAeDOsyrFXGmwuB5coOjl7ZQpLYeyWwCkTo7Gp6TIMHJVUGE1XDXKenXI8HDekoqiOMylmcvJJsBaGdzZSZomgIW0G4bjXNrQ49MmlCtkrj8JeobtDw1ZnlaSynzZErp7yg8gwVoqpZz2DeU9%2BXe6LQFtUAys0nU5hirF9j6pI6Hp20ylTeWWr5nlJrA63q8FxHuqcl0Wl0gofWWpqUSHXYkxidUR&X-Amz-Signature=5f07da38d94560ce4ee25f378ac4ace210fbf13c3a2f43b2d265bf0cc3de1ff2&X-Amz-SignedHeaders=host&x-id=GetObject)

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
