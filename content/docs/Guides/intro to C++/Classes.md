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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YBQSCPZN%2F20250429%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250429T132515Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC3jHCXOtwKvxT7tTLlhDj%2FAqI2fnd2%2FBEyp%2Ffi6bD%2BmwIgR5AZcvc5ux1LEdqOlqXcq3Azk50PPdPSEPqkqLGnBqgqiAQIjv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDH2g6O8cGKxQgaQSmyrcA4YcVxx%2FE8IzQkSE0eK5v3pUUGPrM52LfYZrIbNafQrSTq6KzxtFBpO8gOLO5bEduDBicUcA%2FYkUXldxntW6wHJfhrIz%2F%2FGo%2BJ0IrK9K5fWVv5Ix5%2BppTMENLjKpLSwOtquHbMsPn9v2pBadGYxQzWFN9QaOfQ3WCEqZlnADupvqtvXUjKxgvuPtjmcy0JPk3x6CB7b2TcVdrE7NwkQWy%2Fjl4HtWJLWFY9%2FKdTpYRsImdC%2BemzA%2F0fdg%2B2xNpt6jkkOFDDhvR26Jra6LOGFUorFlr8P4lPWqflaIwaGPS8lEnRmIb5BJ3PWebja%2FzNx0xV3rFt8wcnSS1qz%2FKcOHRMcvBBq8zr%2BXydyuBPDbj640DifAIz07ykEf12m1T6PuxUO5Q9sQY4yXkNdxvM4n%2Fdo%2BO9egiTjp%2FSWiyHejLXipJLAUCZLtf%2FI1p1yOnItbX6QP9vhvctwzyiS%2Bct%2BW3xUd7DrGYfiN%2Bco3lciyfHd%2BrSCR2DpB9GdtiheTO8zdbFHArhkprtM83p1HpUaTyU3rDmxSUtTVIIedvWNwF5u2TvcLfOpNcYidq2zw4AepFCWVkZCfTtwuUaBbAJG9LmDu8JREVhCWxYSVqHU9KI%2FFQIE6Cj5eUgCC0XAJMIOkw8AGOqUBMFt%2BbQRJDZ63SVq6RBeSlVH04Jua%2FKa7tFsicrvUYoFGfZ3LoQSzrbmcNYcGGWf9dG9BA%2BkHCLN0Q2xekBvrZVjw%2F2PIxnkaJ75dwl0qBFEmAkJFHU8oi7wY5AC%2B4dstcRyG9V6tvP%2BtpfQMGduOy3iijsQUPr929zM%2FTkGHFte%2FBsdcZc%2FcHOOJzMfLh%2BTV8TzecWU6XvVIcUkk9m5d7Sb2hQPI&X-Amz-Signature=eff59ccbfb2a5e79df931a9a731879d8ef78f4713cb5b7245bd63e79f292a6fa&X-Amz-SignedHeaders=host&x-id=GetObject)

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
