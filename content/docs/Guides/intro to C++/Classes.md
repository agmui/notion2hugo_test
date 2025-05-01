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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SUJQYHGB%2F20250501%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250501T024025Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBoaCXVzLXdlc3QtMiJGMEQCIA7GOKlY0BMXn09Q6cXc9llZL1L5GRIlDMqr%2FUdA4zsMAiAo4ynTMtCRPjD1ovAQanrNZvLOYUP7WjWaVOk0V3u3jyqIBAiz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM%2Beej5dcIbMI%2B5RaNKtwDzRP2iWBkB%2B4XOg%2FeItVgCEmWhzAu3T3yez2WU5%2FYC8143TW00XNmcYxe1F%2FHpR81ElPDricD5OmjbjMFRR3i%2Fu%2FjIvyOj%2FoZSEbpT2R8sJeB45AwlNxdyXcuMbsnNk2KEl43u27qO%2F%2BvqGK4soAc1wDG3Nhrfsu4SHfTLbVCwm98Tn%2B5UvPAANNQVa%2BgtwK6mCSjHxA6whh8YEUMMcYBwnKVWwuxnBqgkx91fumA6vgJt2MY4qDZJs9GTxH7GWiAA%2FA%2BVNhKQeI1THGiQ%2FFcX13OJYtFqCgVoClPW31Xf%2BPiXDjtHjbMwlVhSlXnq9sVOuAZOrW%2FM9WBw2zzDzspiNGdb56Z%2Fylp4UK%2BZ07BuoIytq%2BvPqkT2vKNsbJv34%2BFmMbu3d2WRgeYvJAw%2F2HtnhjvSgp5k9b67F8myC7Eb3RURbOu15PZce9DlxdmXy%2BsQTj2ZFsZWWjSV1UZMafG59nEbzU7ZZKqc%2BQ%2F%2FFt1VgiEQ8bo6%2FgOcOgONzF6J3HaGxNewPDroWzZlo8Qfzd2bvJ8w728U4VtRp103RIubTXGLWpY4vw2oqFOGxJfi9yKLo1nlAR57RiO5FJ8PuFVb8qbCrAdF7XyVd8RdQhy2vP74JMlIDEPaQYIAu8w%2BqDLwAY6pgHT3i%2FuNRLmgv7cOLPeQUWzssFDFRlXGPJbtMc6%2F8RJvIe7Lhl58OLoM02%2FxVgzeb3K%2Bc7iUrXHkQunMsbC8MrQT5TnjGG8klEFOnQJA9MGwFU%2F5D2JeBKIP3dnUsnEBwCbaGx8TDKVGGLq72LoZnSea8LBHoF8nDb4MoxUH44nM9QyWBuVn1NsHC5zygFvH6RlWboyZ3RNoEqY3mUKYZPHF9iefMxh&X-Amz-Signature=3b9e6a99bbe57ecc7c6de6feca2d424590fa7df395a66ed2e382bc8f204e2d8b&X-Amz-SignedHeaders=host&x-id=GetObject)

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
