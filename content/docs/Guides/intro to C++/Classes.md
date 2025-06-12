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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666FP6DY4L%2F20250612%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250612T061331Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA0aCXVzLXdlc3QtMiJGMEQCIG17hOAQqoQ%2BiS%2FfJ%2Fw6R8tnFeSaQjT6IY23wVvPg%2BHRAiB%2Bzh03%2BuCzjTB7T71NzcTs200d1hUOXcegOmf4cRitiiqIBAjm%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMzzhRFURGrOsNEnmrKtwDDcZEiVFgfPbmCHjvK%2B4nrPaTtTLaRZ%2BcYoHQXStKaflVOTwtPf3iQcY1nsBDEuaiTziU9tPcdCsSrOsYSG7ShM93lTOyFo67CaX18mbd6TsDSDpbN%2BCSYkW2MY1YIOCFyh3QzZLkG%2BI02wRzQv9%2FBYPmGC9Yh62VIueinZJdzBJwSo9k6Qw9lWvZOTiw0oufqVj8QFFBOHhxgDaMKe26cb5%2BP4S1ZQrF86yTeT9brzJ19h2X1WWf%2BtB8A01pb8zX4NV0IkhE5TVTOcOIy5uR1A%2FDqjbPx146uuzJ0KWO4fENwS0hOkQDFXYhfjNvpIsX3tKkvcCfleTqUjV6i7BX7tUGQwnFkQcdum%2FJQrfryPawqTwwmzjlhJgm4zksjh9tAltrVb36MuIZublBZ3e13VPPzxLt%2BTRf6YhPoMT3ugxNJjamrkdApdlIfmAeNcpsOb3hbov1mYOp8zo93azYL3iBVVz4c%2FeMHh0K2DXiJPNGbzc8DfkwfVJopUORhSvBeHuTVvKxybAlqngROMJ2Aqn0BcLRVuVtSU4pzKCcesJeHaf26fyJ1Zp0v%2FvOMxGlVpEdyXNH%2FcjPVQYWx1Fp1nmMFJX8EVoD496LQ7DDGt1kpBuJPMfKjOdqOXMw%2BcGpwgY6pgFe0OqsSeP7k%2Fy4u8IBwWEDCTtzdLyL54Mu3w6UFQfqDhecz8yxbIyEsyqvOo1T%2FPxSM1PW63uTJ8i7W4Kz2SlGCC1EOe96let4Jk8K4iKzFuvBIwjVYxTNStqHIrhufckUGLtgbvp5G3HUd7soPMDfGF5Y1e0fV%2BGaiJByQ2DiSbh8m1G5e7yBtwS8AgFh7FLmniC39%2By7rVSgcuQFpKNGK2Kix%2BTJ&X-Amz-Signature=f0c5d7cc6b624b62df997abd740215f50a3e10443de58d4199a296a1a6799562&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
