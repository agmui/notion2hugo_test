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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665UQN4RFB%2F20250226%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250226T170701Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECQaCXVzLXdlc3QtMiJHMEUCIGMlkH80QIoSHg9LQvyO79Iz0bWMN1AlgzJxlmx0b6qpAiEAxakYnsNjm%2FtmhWsWww6t5MMI6FTD%2FBRvtbbT7z%2FQHkYq%2FwMIXRAAGgw2Mzc0MjMxODM4MDUiDDs4nOA3%2BNKt2pAYcCrcA4nVbA4a4uil7W6sZcaQlADxxBheOxG0khOmp3DcZb6txQ1d5sB8%2BrxuXiNndfBl1wa%2Bim3oukjuxlTgz3evWSlH0B%2FprV4ZDsu4NIDI40%2BYdpjxjZow9Il5CMJXA3j5I1U%2BXgnd6DKWri20kXPi8FvUctTVeaw%2FPOAPzf3aF0DBPlm6Y8F%2Fy0ZxlKS3eayHRSxa7Js%2F5q6dISEXyAK6Lcdp8LrSZBroDvIhTkdOEbauuY7zycLnx5CT%2BYBCNSJF9mLMQ6va47MtbPYuTL55qgziXXvPAanflV%2Bh1ijTVfyU6eOmyHN8Ypyy4AXrdaelu4Grl0xvdKJ%2BmuL%2BwD7e5sL2AgoTxS8ZsoJXUv1EzYmshuclpdGyt1vBbXbQiEwYCuYnB9CqIAdgRzm9TJUvTl7IkZvMZhcg5tOrP1qZqh4N9xfYWEMa3CrROGEmNG05t9A7PKqPvILiaYrNEIpp6B%2FdRBTkWsdZI0aNf1J8PiaIcNRJWP6qX4xAJ6Q1rM7961ckehqsLO8Yy02D4uYYT1sGlMZXlsCeBqUEsJF%2FwuvALFjz0jXjjM%2F8Xj3g0roHODMZEdjFQcjXIQ%2F3gsfdfFF4Xr6fMMZoeD0E1Z2Zkjt%2FkoZ%2BkyZz46FrWIHnML%2BI%2FL0GOqUBOiRNfirC6VdOa%2Fn%2Fpb5dEspEIFiFgNcc%2FuePFQDP8I6XI4WviC8BC2ZUDbCMGdrAOd8567sgo%2FswulZB6mFnIT1d1aO0HC2qfink84RmBiEfj9ovZwnPwSaCCEtcG6bm6x5r11PZeyRl1XvfInXlul%2FotZkrhulT%2FiUaRbiHEtFtF5GS3QdkWN3y1nE%2FQzssdHrFI1YBcmdk%2B0XYVa%2FLrkEIPoMz&X-Amz-Signature=d261dec442c300c73d13d3b06341e5848a2c01a55d3a34c5ebde5c0c86e188ec&X-Amz-SignedHeaders=host&x-id=GetObject)

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
