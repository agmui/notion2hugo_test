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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46652ROO2QO%2F20250601%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250601T181025Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA4aCXVzLXdlc3QtMiJIMEYCIQCxC1IDRl55ltOS9Ljzvu22FUYXqhZ1QUqcDynOI6yM6AIhAIch3mD01l8Vz%2FoMPTrQ1mxneTSlBGJYQaclwL%2BaPV%2FaKogECNf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwQ9ncxLvda8bTlqn8q3ANSNS75xriBGDn5RCq9cMulfy6Tp0Mxf3jNbRmG3syhRCXINACzT67wnWWdU224hnm3RR0q%2B%2Bn1ARE4Dk9utHmIWUIRgvp9mx%2Fi%2FfWP8LV3D5J9WAC3GHTaGg2d%2B1STZtHBrwBY7EbAHxPnZDYtY16XbS%2Fe746qVA%2FZ7l0Cyp1Sk0eDDGvS%2FFD6bnFS1WtfqkvIi56iQ9yEk6jCPF%2BX5P4jLA6kz7b1c4QZr5U4gw96mcyXZe7wfnvz3UbJpDXrT6u9m3tU8kZQl%2BzEmLAWqbeNj8zV2b5zc%2B8Uhsn8DXRpptJHfn4OQHQ%2BFHE9qsnNKvNowTEul97KA%2BlAE7GBfxI93xhHUOQh%2BRUFeZi2SPqO7jKepUnwwFM9M8jN33omS5uB9SvRAl3%2FBPE5q192YtU45o0vkRF26Lrl046ydYFbadSFUnD4X511SwpqKW%2F2qwg9kb9Z9kb3k8G9Y50Tyh9j1P9WQ69FYcAiaTz8YTTGKtP6FbBx2Efs0KktJK9%2By0%2Bh8%2BzlW6qlLWqilYthxd%2FJxjvMdnLPGIxWSk0h2IpSXLcRY45qKG8nERyNjEjxnrYK%2F3euWEcwLaHjzeIDR6uH%2FsqQGwvvNJ0qpvSeyzWvfGAIpN3G2%2Ff5QEqEODCgqfHBBjqkAQXp120tSltFddXqAlljZ%2FB2WBCQeDwT1iEsqruHu657fMDFSUrF8XsZt%2BDfSIdbHtyQ8vzogcu3enMmDuD3EL5xzpCiazboZJQ5tl7ejf%2BhLTPrFEQGgtlVF0sGdEm6f9RmRiQwTxKftoUGe%2Bc2hWkaIJaeJ6UAQp7NYDT%2Fiv5cx2xyeo94Kj7kERFdfVNTuvIFeXiTE0BEGuLHo3qZWjENj%2FxV&X-Amz-Signature=5a42ad0c7a31d91534f72f397bd9e232dc361e1d9897e8d6be1541b8d9a69fb9&X-Amz-SignedHeaders=host&x-id=GetObject)

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
