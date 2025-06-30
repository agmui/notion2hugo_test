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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666CBJDXET%2F20250630%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250630T042337Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCBiZGCEH2O62P%2FvtSNzCyVjU70UCSKy6xp9IuS9GxX4QIhANl8rT0aH7Je6CggmPP8KMoPChYvTjbOSAF%2B9T%2FR2pRAKogECLT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy6Zdf0HBRFlyH08wYq3AOF8WEoihbgArjwDh8odsMqsDSykuv18AeYVx6gbYmX2yBe581XsuhU0LoX7bcM43fp7b%2BsiMKnACV5RU%2Bb7nP5Fry02NM%2Fh4WOubuA2yTuOrvLJ4gIc229b81%2FR8BmDBlBLdtvItj%2FI38LQNMn5e0hr9GmIfrWl%2FT9Gi3RVQV4sMtdkxBmMTWGJcx%2FWvgo2U0V4cNrizCySzGt5GFWYWQT5QB1OM9PJ4L8pwOAIpOmLTlQWbO1mbS0%2FLllGCMpuS%2FebXso%2BojwDteGpCL1nz%2FWVj5fS6pVRHh111OJmVSJl7C%2FSvzlqWjW7CHnwVNcVqhou1R%2FgJHf5lpdVOjxScQ6gO3OTWWjY4VZNxqJvhvVp9kMpwY3oBkkDs2lnHhYVbf%2BG7LiLSCqJtgYcek5V9PPkCy7wlKM30wwC3UBma%2FadUpJ6eRaVnkQBBPhK%2BKb9%2FUqoSHib9W5MsMewN6rRZgp1lFrfoQ%2B2uLuQ0RoN5R2nO%2FyxngSskNTNA5OELGdQDqmnevyecXdbDYtvNoSRD7ZPc0WlezD7%2BQ5x%2BktMVTTpjnqN5jr%2BQPzVyXZj2Y83ZArMPIXNNcoElqNdwRG9XKqv4SMX3QA3VIPMFCYsWtcKz%2BW%2Bmx2mSRcR77psTCm8IfDBjqkAbsJQKTTv1nBkx0qXCINCj146NiO559b1lrjYYe77l%2Blsx7cpMvRlK5KjJ0XEG9tQFomseUOFgGuOzYNMi64A5gh50B0r9tZkfzWDRfZDDejt%2BnXly22yI9UrOAC8Q74Ixa8iWQgLQGIMhCTuM7%2BmBhXRZkumcaE2zpBbpviGSvOJ%2FyfuQ6XQStM5MW1YIxYnX7gqI8nu%2BnvpqS8wVmTn%2Bqgf915&X-Amz-Signature=3f31ae809ff48e32d16df4ec85fbbe85246cf6894d1aed21d8ca6222176a5401&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
