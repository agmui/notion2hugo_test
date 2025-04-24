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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XVNK4LGG%2F20250424%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250424T003958Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHAaCXVzLXdlc3QtMiJHMEUCIQD40hD7MyGzuXZOMbb6IZmU%2Baqy3aA54gPtBTGBYRmnlQIgN28m6oXukhlGeBRuQ%2FuubFO9u45PYwqDeCXKnmVI36kqiAQI%2Bf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHCIbHz3oUmm2KyYtSrcA0EJ9mUdw%2FT2TOUE6tJEtc4yCgn6xyu04q5dFV30IOgLxMscmx4%2FhN9%2B%2F4zYuiR7nrdO7KzdLXQxh9v2gIZ7HIE28a2wdL52%2Fs5V1Gk9O3bOjEEkSaH5WQ1vCw6bnQk3ZzPH2Da5Ux%2BMm8yHLU7JE7BY0m7RncJRtRFNauREcmuFSh1T5t2aLcKFOcWHJH5wBLCQr2zN2x07ZvTJxdAW8RwelDs4LSqvl2H2eXXpUCYQAiqzAkZSkBMzXsRjAxvtR9OneC3nEr07yjw3qY9OaYjQGGAJSjFxuvQiOM0jDXeZZoD0kr1oMx3UuLDHu7JwAxj0GzFfCJJgRGgbLeaOrElwsOdfJlm0jScGsPStyoc8AEIsfIomwe7cHWLz4wCQiIwr49xn3C1i3LJlti7hD4Ou3LaoVWq7IgaW7%2BI1bKzLzHneVnovgUxzpcqncIh1jGQtFKcyC6Ug%2FQBnp%2BvWu%2Br0foC%2BqkTHZt325ODc04K%2BmoJIajhYB5uHGYJew9MmC4LrltZNymMCGOXxIqfYs%2BJQE9iKYy3zNLhc%2F3M8gdZA6AUT1Y3%2FXu6eAkV0VYgoSmYkNa3C2p%2BodjdtKX6xGpGWUqcG2rNt8E4wI%2FuIOA9K%2BZByOsiZ6xaupBoeMLj8pcAGOqUBHrotVmCvPSzD3mrKn6uoJGpud8IHI9UCvYpchFq9SEnJK0zoRNCmqU6c%2Bc1qbtNQhMGE90%2B7YWF2gMhClUBjjJXXSOdTyJIplkFuF07B4tD7QZBWtAtgCWpfJvEYnYxGPzL1Jk%2BTwcfpT58552ayZpKyMghwlrCaQ4EKVyfY2kgbBtDDDLoNLu%2FnoFfHgjHWZVcs%2Fd%2Fjg6qkEo0kF7G4e2GbS3m%2F&X-Amz-Signature=46b344615469f0925ccee6b077b7fa05b4d482561546098b0f71c3663677840c&X-Amz-SignedHeaders=host&x-id=GetObject)

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
