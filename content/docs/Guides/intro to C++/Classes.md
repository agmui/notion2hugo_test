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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZMGYM65Z%2F20250313%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250313T110734Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCOdKFCQ1Ydq3E%2FQ2HIV%2FVbF53nAGhINa6azsb7rB536wIgIVu%2FKtwFcdhyV4MlfTeAtlJ%2BqX4h1FvPgyHT06NPNT0qiAQI0%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMh%2BZDs7pLoPECJGwircA%2FqJvvx8zikmyscE0QERo4ySg3dppHD58boWT67yRztATstKfL8e6lUOpei2ixBv0mTys%2FTboPmYK6M%2FMr2m8eGqKNX3wTfYclT8baMnLMJU3yH3VDOdYBg8sUUafi6vvLJteeZRQ%2F%2BxyvFirjx%2BjmRF5VcEtzMJYUh1DSvbXMlT5poXff39YftGtkZG3SEnXTNeSalf9pXp20l4hN1S2tZCt%2BQrnqHhpZoiZyzIYHQ5sr7JePPZkwG9cbEXr3PsGpTRv%2BXykPc20whwHTKOUNl3R9QQAnuZdVYWYN6ky5zZyOZmGqAd1rjmB2ozIP0DFGEaWYcE6JURoMVTqbmR%2BBmtyGH26MskFM2pRrqMd12JpztOLzLm%2FHQWOpINe8nKywwxD2kDfSaYUUPKy%2FJeM6xW1TopniE4pWmKDdocosc9L2GcqXU35ms8yzQkh4d3eaFc8Cs06iiMWdP%2FHwOSDApiYLknUMknIZJi%2BcG3di722X6D2xPduAwKJMJ%2FGf9wAYk1gkljMWi9NjRvwWrRu1YXd6UqPcWPRV70OBygHYCQ3EDw46rcaJL3c7saj7aSWzB6v8jGrUfPQp8XjgpB9Tqn3ePv3pSVi3%2FOAsbyr15pc%2BWFbn9gZh9nSVAfMNjWyr4GOqUBZfM%2F5WMopciuRhpNmG%2FGVKUSUE0TfDCMBzLXGZ74gCKonwxPtyRVQJfLZs5g%2BuLFjWYAIUiwvdg8yi4hOOOowQefmshBLKuz77zGgVj4QrISxjD3%2BstJrp5rddmEFrlGjoxvagcR%2FJ3ZgcEEZaTntGEQbvhhD1W5T%2BxHuG1WCTlEDf9uYWsgVnYfa7abxigbqhKy4jBdnLkKHo%2B%2B9GandvOFsI%2B1&X-Amz-Signature=4beb92cd3bcca71ae2891b611a27a81750dc0e87b7d443c3b0d7c9fa61aa9f9c&X-Amz-SignedHeaders=host&x-id=GetObject)

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
