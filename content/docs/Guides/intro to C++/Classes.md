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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U7JKG25N%2F20250410%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250410T140839Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJGMEQCIBEpM4JMlRJovKFGgBf62AKL3avuofPkO0n7MOSaThjmAiAtBXaUgLiHL5yuGANNWM9ii7fc3cG9TfczRx1rFmNXISqIBAin%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMrfmOIV5KkvAwPnDbKtwD%2BDjkyz6p4F3zrtiRwEOC7oPlPuY0SzKeHrE19FEkZJ1%2FMbnzn7GZ%2FUn4q9Q8ydIteP%2BKEk%2B2IKzG3gkdSk6oH%2F2BTcwunSpSdu99F1zRcVnjxi3%2BH0UmJ2Ds%2BmwPX1YbJkm7WvNHvQ5WVLrt3DJttLIKnvTm4PYkBGEb%2BZY%2BpfgywU50z9CJ5J5K92x40cX2YdaBiMDIbsgsoBke8FtdTrisXNLACxYQlS5ZKhSU2Xr7k5mWCopjG1nvnZDVXYbfWE7RDH11QBBmAZzfl8%2B1CEJt1hcltpmCHeE%2F16En7IYvgb3rprqbBb3eAGs3ZLWcZuLk7Syir6LDJ9OGP6kz4SgASPcPenArHbubMi1nktkA3nxqRPQE9GIFcjbDUGEA7NQZZQbQC4qFviXoGIBHresyAIalpnakNvSgkQiANn76D%2B3J17HMnYlclXZCrJGOe6iFM13t4%2FTQ2iPue%2FWYV4A8KL6t2t1Ld%2FvMOj53MN0De%2BaVqXopELTiIjWJVWe4pbrOVQK5qaDbW9Cs3%2F9%2BsK%2BBKKQnO%2BwJk9Z9aNaqJ6OHjBeSk0LbxUvnqy5kb65ik0x0SFg9TBHhuVweqtSEd%2FnFfLb2d%2F2iWh8JyzAq4gneKfZxIZFLDLc98UEwq6DfvwY6pgFuFTg%2FYVUvTeGkPDuX9%2BmdzD%2Bn1jzlfXkZ4lO2IfJAAWRj4k2XQ5Ntcdz8skFHl4BD4R7Z1O3%2FI6ytIt6tirTHPml2MKGeORcOM%2BPg2aTuAg78%2FKs1zMDk5ibiSGf0kPNxkr1vQM13uXlpR18%2BDsq4iIKks8iEBe6KOdAFhIhpo4REUkXSEWwkQ6hgp8M6OOBht3jIPPsWXw0%2F2innBnrxw2FRzhhs&X-Amz-Signature=7c225bf5422341c8ab7524522675a05d71db596870d76b54fdf532404d4573cd&X-Amz-SignedHeaders=host&x-id=GetObject)

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
