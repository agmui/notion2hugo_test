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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665CJGXGXB%2F20250205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250205T081035Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJHMEUCIQCTmXqjPLLyVQzu6cPAoOxEVqNNwlbE3GipLIYuYKAEkAIgIBXV0gICsx%2FotvGMUf7cwo%2FcrZ%2FBSKBquqlLbGLbdfwq%2FwMIQRAAGgw2Mzc0MjMxODM4MDUiDK2Jl%2BzGViKrbYAUUCrcA%2BRMNtR82Ayvn8rO6QqYITesT340t3VkbUP8lyljUYQEVc0%2FEs3lAiT1PBeYNONnBx9MVgdIjD5K4Yt%2BdhsF6Ich94OI5e3TE5xba%2BkEz741N09S6wIXqKM62citfBZRrwuEbQErzoHNQBO6CiaSpbVF5Qy4%2BL%2BhqkmNawytYgEli%2BXoguoEC7kGTv9AsaY4%2BBD2ynXIx7Q%2BW1g0MlJZly%2F8bE8aq%2F42u0sswD6k6Ut0OYIflPv%2BszqzZkk4km6eQHQltUfGBBbBH95agMte8TO%2Bn3E298Fvy1iORKB96zErQoIuP1fWGJzah%2BBdw%2Fam7c9d64KvruCvozyBzX4uN5VsQ%2FwFa1wjnbyqLA4mpm6w422qjNB8qM98OsYd4KQdoT%2BJfC8Ap5iqHoXyxqBFlFq5Miqca3JCTAGHSfjDLBH7J5%2FPP57d8IRWLTiB%2Bx4v6LyWSvPQlHTpWot%2FQ2hUBhm66iZGr0J8Ir1FUCYpvljRfrUTGu%2B5uHSxlBB9ZA%2F1YVq9A4bf51CXz7kenhhEwhPs1iPTilkqHgiWsFEL%2BGRVL5C7MV8AIrUZ5SmWgoiC6umpdq4nYdZwlKw32GEWiHPHMQ%2Bu90jCcnw4pvGofZ2FFe%2F2nHT2OyxbS6XvMJa1jL0GOqUBdDzC7TA6stDf%2FFCMAo1dsEqvtssSKeI2Lis%2FvptPwDxCJi4EuyBUwqgHmBtjK6X6emXMDXBF3pVeeh5NO5O32jviei49EdK14NyTIiE6nEhNtFBuXNCdKswIsXquMO7logUqpUlH2RK12%2Bu2mTnKdTOxzdejS7aQ9Xpq37gOGf%2BJQ3N4can4YAlknFaJ3agmA8GDi%2FTR7csInUCzQ40cvB0LQPgr&X-Amz-Signature=36ad156ace937e32f7aa2ecd9aeb6365354f4cb61e38c3156aaeb3b760626e6e&X-Amz-SignedHeaders=host&x-id=GetObject)

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
