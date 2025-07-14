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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665O2XIWLO%2F20250714%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250714T081426Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA8aCXVzLXdlc3QtMiJHMEUCIQDswFNBqItZN8Ow7zF1g%2FPyYgSJSYo3Sjmi6jPGKzuefwIgITxtRZzgSiQ%2Fq0XXQNDjE%2F5vUttATmomkBtKpYbTPDgq%2FwMIKBAAGgw2Mzc0MjMxODM4MDUiDITh%2BIA6x%2F2nqGygfSrcA0%2F52rVYr4zJdukVk%2FSes9M2MlXb5HomYTrCTUbofgfw1DfgndL3IuDGdpsds9pXOzNNYFUCHYvH5zPdDjr4Eb4jXtBL1LM8joNGPSCS1VAwChQIcglQRelF1XXU4h7DVmO4uJm%2FrClkCxa8jHJ%2BUTTcbsaS%2BlzXKu9%2BMdqsRIYd7Gwv9gAq4HZ9J7jwHW7zfDPzmq5fjzo9KhwPR%2FFOb8XV%2FKL24X3fXJgR%2B9pxT2ANiTClj09eQo0u4ed0AC2OixMaRQgRVlGjxkKXkf7Y6c%2F7hFWAcRm4IitB%2FAzFUM9hIE%2Fcud03S3MQaHnHKmrCvG4BVUYxDt%2F0jI0UCU1XpEzQTEiEuJMr6FYN1dbY8oUdb2U9eHZJnb%2F8MNt91oz2i%2B9uXmHFmVltT0dl5a%2Fr%2BZqLHrQEgPZ2sabFOd07dXDD2QcNWNGLYtoICdX%2F9dlC4o3LPJz2yqchphcQfn03jSVccJPFEPJ7jtzKaPHQsy9aFWzufvPu1oWNCYjh2fMfR8XJsGE6RCz%2BdgVHB6E4BBe0wjIgb3yctrj%2FntE5l%2FtRCQln7t52PG7%2BvC04JnU6NlMl8dQ%2BNVgcQCXn%2F0zkfRlcRJjAmBz%2BUvG8%2Bja8OnOE3URNd58Q03WOTKOAMKvc0sMGOqUBViZy0gkAOJfoUHTrde6C77t6EckrZevCFF1cA3AqTgkGTKV8ZOCLt9jo8pJS8jcKll1K1FqqwD%2BaE8fGTW40G1eaN5XhAUDRqbihFm7eYxvJlQQSFBfkns5yvl4g18ZhwOLwUga8FJiQJmzdJw4%2Fl50E52kKIvhEpgdOg%2F1HBJdPht%2BWJi9BdoLhhKFl8cEd6XcwB0bpAesBHPCylIloPiOKmrUl&X-Amz-Signature=77de50feac2f3ba0db00c8db4597858f7b4c512c40dab84b3dc3d63e254e3206&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
