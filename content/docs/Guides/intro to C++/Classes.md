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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XG7WWWKF%2F20250406%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250406T050749Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICA45WejvHdN33Np26Prrrg1ZEvaV3%2FglPIr38VkGQ9xAiEAw9OANNB3rPpSzpsRAiq9YVHs5Nmr1p4nirFDYNyVwLwq%2FwMIPRAAGgw2Mzc0MjMxODM4MDUiDHZHbImb0f6A7Tw6FSrcAww9riYKOp7g5t1OuX9B0HikByofxkLWsQK0k30S0%2BSS3RjU4ceauWNLmiXFjkhQR8kxFh%2FIRtN8S%2FhpCvAi30VjE4ecWkrw1LEf4ner5CPHbT%2FTI1X%2F8OHR1p%2BBI5nb4%2FjFmwyX%2BS06EVYZZCsOA2mKEkunTopSyWhAsdE6tx3LF1CfAei%2BtQpAGCvt3nJJwNyjogA4w82QZj1a7mFeGtptQW%2BvMTdJJJ1MrSsT2cdCqIx%2BaFKAmD9rJ1hdLTXSizJyLN0aT2DQnDB8GwOh1Ymjqdxd6moNRP%2BOkw2BOBz6h4Zmo0LxW%2B1n2WgddVgL8gGqz2eR8AWNsX80i7v99lQ%2BcWk5LdDO8R3dUUnahTlMRhaQE77%2BqCVnnqZgQd37LI0F3L1rjNRU%2BAeY1n%2B2bnPpXYqq4AOpqMfV5R9Khu8xV%2B4dlq7MeYMaKu7d8D%2FfxylgYuft%2FhGFfvsJswy%2F0UpJlnP15pNQKEssGl453%2BGto4AjvCqq4qlFXTwd%2FPUvy4fzFYHoZ%2B1Xn0M9W2W6i5S6yYyU2a600lnpasp72hodirnA52cHbnxfo3IIMHopc6EmI9RE2TV0atxKghAKsd6ttRsXdxCmO3Ctv3h2vgK%2F%2FE4w5p4SUApww2I6MNH%2Fx78GOqUBlGAV1U5v6te9iK5xjhl0nC7J%2BpkVr8iGYrGdtSnlL0ena05Jwdghx%2BEh7T%2F7QmEvUL7KuteAb5oAjSF6m2kmERhA%2BW7ISGHm17ZKODyv5RglRQjcavjStgNvqPQfxBM9oKuOdtTl7alKwLXTD%2B%2Bq5xVfvKXqbp50uK227w4udmABhg%2F7zVi%2BvULLBgkwWeV%2FxgUNOYPyG6KFbPhk78%2F47Wfky%2Bi0&X-Amz-Signature=bd6c655f12ac2497a97ea9d41ae1c5039770f1bf849c36fa3de9fef265c7de0c&X-Amz-SignedHeaders=host&x-id=GetObject)

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
