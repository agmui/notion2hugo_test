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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TXWOVKGE%2F20250214%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250214T061038Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFPqb2hHUJOdy8p3iTQe5QY8guzStDA5rA5qc%2BlmCyWtAiEAmJ9mfh0bwNzy2%2FlAamdXCsfJfDbf178lPIDJqagRumkq%2FwMIJxAAGgw2Mzc0MjMxODM4MDUiDID8FX6UpaRXpxTzkSrcA5aPrvMpGGAUNcfB8QE%2Bg1JMsjJ61FShcGggr6xWToSOBncyxC36WlkHr94OyU2B4jD1%2BsJI49u5qTIzrui77Amrn66oiCfI9KWqksg1QTjsPs9xi45QWJYjt72NG2pEDdFbf%2FlvW4LP44VyIrhBa9EBFzvMdlZJ3hYXmDDQksqUfnD5%2BgtRHOC9kJKxU5zOKPhiR%2BNro9H3gDECO0TgpM6Jm300xI0yaw%2F46mLT66qHLa5zfxNnSHEPKUHqRii0nGWAaQWSGelyEe1Pb2vuqjW0c4SSo9432mvQH68bOLkK%2F0F5n5mJ7XC6hGbh%2B4%2Bdg4xRab%2Br3M0UoF769jdWvXUPskI0zfVgLsJPqhuwu7POaB26gQWjzggQWWNPiDCd9cBkUlRQrSJ3pUfIOwNi8JxCtNP5x0dfO9DqRWv3RP3Ok%2Fe%2BXCrJTl163%2BL6trkb1sa599PorjcGEfJWxP2Nv1UsrVhCF3yqYusVhLCAP1Jnxd1vGidyrZJ6B1Rs2vR7Fbq9w128duu2KN2Jc%2Bqzd0fJwJ8Jdc1N%2BgeO5OcR41%2BYioqLgQ6vAtA5RIIdNbiVirKLcEz6qACpEdDBnNH3KzAVdWhQ%2BJozL96bxzC2u1HmWWMAdg%2FfjU%2BjuiihMKyru70GOqUBD02EHZxlX6gsYDBofvtO3sQyc31BJ5%2B9JhirjWWrlSY7UY4litwS1trdWiw1H52isxEEw2ky48NZkTCoABfGLosyTw%2BXwkBCQAEKjrfeN2bpWqnygvCPHwn3%2BUwPna9zx9EDnb8Kp6enz0pOtDpjvYzqfAe7bLhzL1FvNbH4g6lcLk81LIqIVhi0HudFNLGbJFOcc1tq8ZWWruW%2BFbcNZ%2FHpTysp&X-Amz-Signature=3806337c5923e4d933b56c77130e790d9979dc7f0f2543825fb405e673b3947e&X-Amz-SignedHeaders=host&x-id=GetObject)

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
