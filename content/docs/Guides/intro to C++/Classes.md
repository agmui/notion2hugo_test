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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VVWLVVRE%2F20250228%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250228T160937Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFgaCXVzLXdlc3QtMiJGMEQCIB3edy7eEMDZ4c5fadBAdMw5bL6%2BrzS%2BUGFkjHvB5cQpAiBKpFdIF%2FNakXsQ2fxNzRNu2XLPgiADOEifQQf577dlaiqIBAiR%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMdbNUCXQvosEWsJtSKtwDC4g6HOOnJt436BnjbAi%2BQZstimJ7R%2Fq0nYF4A7ZdugEgfFqHiXQ2wJdGhT%2FhY7DM7JIUBfvhLy4KzktbHZj3eT0FQm1WWckxxVl4TDO6mb%2B7Ks%2BInBQokwTHdnDtTHsa1dHmU5gWHJp0hyzBqORvL3qyNJM5BV7RBOTBG0c58k6z6z36A1N%2FS9xg3sndyGbXQkAyVpc2WjgygL07ee1s9AN%2BcXf4Go1wJkOk%2B79Be86%2FReWw4uLKRDwjMhyD7IO6V9cgQ%2Br79TeCCMNCbQ%2BajK1z%2BfwQcp1y%2BVxoFQmThN%2F9Pne8bQ2ZE%2B7bI1YwtYDe64yASd9l91RGDQ6SUcuBjr1lYUgjI0yeGd3lQT3xdtuLvntC%2F6qPnBltFM9yCKM8tXcFdegwH4dkOYDVHQa2Sgkcqk3D1VkXLUaz5fFqZ%2B1aYCeDnJ0XiQwvDjK8L01PYT1iKdoNTHNaKZX%2F7KTGfoeENusrFIOKNKXtZD30vOmNqGJF0vpoTofWksR73SxkzC%2FlGQ8v9XxgZs6t0SGASIbPLGA1rxCCGB7NuWqRh4ILycu3WAVw3wsLDLBIdrYjPw93cWYY1An%2Fr8u3dAwo%2Ffs6qq82YNYTx%2BsPs2%2Fbgdx2oNXz%2FMhrZBaKZ00wrK6HvgY6pgFPBUG%2BuIZAGCWp6whtZr8d5orytzEQkjeExclog2jwuspbUxnjcRoMz7MGUZ2u8vrGaepyOi3GKDaeaMGEEYebT8DXuZwXf03LUIVbIBSj8OzLfnTZGb6zzqc5%2BIkt76LA5RxZtW9JAQaK7CoTjn3ZEXy0yrfklpfGSHJ%2BZvINuxP7qkBbM87V9nqWOrAoXqoH3cVn%2B4VfTiIf%2B0%2F0PlXM%2B8hHEfhx&X-Amz-Signature=3b22f7e8819702014585176b43b338fc38b458e317225cd1da37788fc601ce8a&X-Amz-SignedHeaders=host&x-id=GetObject)

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
