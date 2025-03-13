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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UP7OILG2%2F20250313%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250313T170106Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFRDVwE9ok9KkFPiaFoH8igApBuUF9nvoUPurbVPkKAmAiAwgbDi9rhjBYIX47oN9WgDbiR%2FHNaCiumjPCXEzPNvUiqIBAja%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMRJOdrO5Vs72R2PJMKtwDSt0xIWv3cHu6uDKAcTRzqY%2FLUQ7qTzP49yiXVEhYk%2B5EJ115QZVz%2BdThXl6MbT27ZjR8mLtaorSGjoO9ydaYwhry%2BH%2Bj9Ijo3dtM38NNr5xCE%2FjVFqAK47PwbqMhwSmb%2FNgPCqdLLOtWSQPT0jWmotZSd1Zf7pI6bHwMYr5VjywEPY%2FBwogc33s31Iks1nnyhUlY1tjpJf%2BSV%2FT7eQoq9aKDdbY%2Bz5aK%2Fs375OnqAx8YLBKa%2BKua1T%2F6IBt2ZiKNSJppzwb6yMOuichE4jCQgiO2tiklRkehmrAS6TWUTRuX2Wg0UL%2B2ZpinZ0dXGAU23ATEStak5l6CE6uEhP%2BeeI%2B6FrpvIuRpajB1J853M3mMq%2FfET9uRsZV1UuJfu54ptLdl4KEWfLZfINDOhsuri3yTdIhUtQ%2FGooxsg66afP7BDwu9B75f3X857OATxqVNjbw4QG%2FKRrkXVMGjYv2%2BdI3PDNd%2Fquv%2BU7mYOgCmdHt94En%2BCdhhnYsfEp1VByK3ngoZrmk8%2F0mRm5HmjdRERdP8vR5Nrz0IbpInYW0T7%2F4nlrNi%2BkG6v4d1SvsysE4JC1xfA%2BYkKgKT%2FhwWOVQmw6t%2FXEmZ4i8fA77EFuEYsC53PwWYSfqAVcuvXokw0ZfMvgY6pgFJ26KAV8aIFVqEM%2BbKx6V2Uqe70s9SNItBb4kM8e4aG6vaUdFa1kiFj0rYXRLXl4Oibjg4DIKOKtyVPeZULN8EeutHY7xR5x0RhzPE56Mup%2FRUvCprRMS1Zsbb8F%2BTbniq%2F9gzigrudKic3AZYVVrJ%2F2oRzVBBScOdNhChhX%2BNptIRuZG0NBdTsbDtmlRT%2FpzrzNyWfTigRGNWXAjJMqaHyNPYduzk&X-Amz-Signature=7fe625c8bca5d2a516c1863638133e1f19686292b129838856edc6f64f0bbc42&X-Amz-SignedHeaders=host&x-id=GetObject)

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
