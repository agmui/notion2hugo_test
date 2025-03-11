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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466THSJWVDO%2F20250311%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250311T031949Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFMaCXVzLXdlc3QtMiJIMEYCIQCeaqENtfv%2B8FtJZYXl%2Fc4Gz8aLkQBjJM6%2FBRSRD8leygIhALuRkIRruXNi6v28k3ibbz%2BzzTl%2BD%2FZdk9Vmwz0rIvOzKogECJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyVafZ6Yb3GEW88COYq3AMe5vWxv1V9LjbKHS9aa7Ddm1YDx4dqySBfB0bzhXHfl%2FDt8DFf9fwHj7mr03b1rK%2FVVEKJzeKao0dkUHxLVYhXrmbdnL8N4jAYEDk2MP%2Bgdn%2FiSVGT%2Fn61i1K90yPBJgyBxV9O7Q%2BW%2FuGHWWnb4dznI0Ghwka1ALS5CiO6JB8EeynjbCIHEUjeDY3KqIEWmuYSljePfSgzOvqD13OHmxafvpRdby8aYimf%2BJzyoMA2wBK%2FWH7vsw4u012Sz0tbqox2rRVWv37xARFDmNqaTvV2AFJx0%2FeliooWlMwC7sUQfBJrEM8zDcnLctUAyuJ0GRXamEMTn6cTpfLdIbtQfu0fhzVVJ2d4dyvkeFVMpnHi1i9IaBSyU1qklxUmCRm6zzX0na1CKDyDSNLDf34ba790h%2FJRgMvKWPQmXCDebC855LWF3tkjnmtRuO2KFiXmBFyrS%2FsjWIoheoc6rD1gA0hZeMSA5hxhbkGeOjZHZR0k1CTG7fxl91Imw0fQT009AQIapf3MU2XjV%2BDaShYsKl14BcMVpEqMqnN8%2F%2B6Aar32T7sXvwT6eVH77AUt1imuE2LnqXHGXyRB%2F92niQzmjArwNrgLYmvzLl%2Fsy5IBIgsJ16W0QiyQL%2B4ZGJf5ezCp0L6%2BBjqkAQ%2BwDSFa5JB8U3bSyPbeYlvO8vXskCbf2kSq4qzFctJ2IpGazgIafz%2B8DBOHrleiX2aj9T327%2BdrgGXX6El8NfiU%2FnRiSCtIbi0JOjRT43XKcNfZC15kmFJTivxZy0jU3XJ1GA86w%2FqWqrohAIClba9mj0UDBlZd%2Bcl1W2S6FbQBQTzFBQ7gFaauE9M%2FeWdNygVxjDMpnTpuZW9gyw%2FWhT6fVEKo&X-Amz-Signature=f822559e61244d47e6ab0e500c5e96ca99e002ae0c16952c6615116c9ea8845d&X-Amz-SignedHeaders=host&x-id=GetObject)

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
