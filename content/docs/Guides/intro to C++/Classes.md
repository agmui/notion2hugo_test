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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663RYXFCJW%2F20250617%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250617T061315Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDOebG6A5uCU4uy%2BHNjEiUQNFENPzm99rX9kJrD1YKrdgIgE5R4TD9sYiPUi1hPQvjn00Crb6AGruuWJblqBMRvymEq%2FwMIbhAAGgw2Mzc0MjMxODM4MDUiDDb9QDT6C7puCSHUeSrcA9oCrsthtYhzbrCQPOk27LKnNU%2FNtxQGFrs7ZyRtTYZtg0SOVEf0TvfM%2BvMyg3RNEmG8fbGWsIGxsJdN5xlzOAuBXmpczwqBBBVJUkDiijf8Xw2VpJluqGnh833xLn27C6t0YVgCseAYOmagnyKIy9ZdbKsI0lF3vT0sThQm6OkyAxY%2Bdb%2B%2BDV%2BzVYnV5ERzzRTKNacKInRC7GJ2ja8wKk7S%2BMbTlzPmlryrAKMEOz7FYs2FCrQiIZDtwrHY7ThNwoCA0aBZsVORMI4HCZi93IT7%2FGBHxbyMb39bk03ziLu5Nf7XmlqlF3IDuP5a9w10%2BoI5IaGS1V54lClQ7WG7Bd%2BdXbz9nxQS6AiwmNc9qA36ZPTKhJyI6245GY1o72Wa4MHprEYpjLR152s901dW%2B9DFTYB4eMfaY4fuiGCBfOQm6pEh7RhDngHWd7bBIZsLM9kcxXBS54uj4hw%2FGx0SbZrNepKjgjBe%2BzAADVIlJ8CM0Tf5I8ngBi2howH4rYXBCninhJsLJCrk5P5aMrTfPcL6rXIfXVjUkz73ErggBDIX5Wwu266%2BbSZTFMYrp9k71kX1XJDclHU5HsWFnQUEPoe%2FnGZdSfKkQbLGgQjHQR8lUlVTYRiEf4zoW4VUMIPsw8IGOqUBRNkEHzG7VYfZhFBqdUVB4WnreYIuAQN4kR6opiuZaYK4NYg9BtIQaGDXuJv3WTzPLXnyJdntkZAtY%2B1%2FFDBDdJxkgkcWxyRT5kHbb7dR1D293Dbaopo6AUXhVvZhVLUM%2B29JfuCFsMKFdDtkeN4gt6pS4MOjtbKvHwIl6skJmO79%2FVxKRf%2FSecvUdhnLY9df%2FBuNQSApfpSbszRWaYE6QPRqi84M&X-Amz-Signature=d5d34948b43b63130aff193a76abdfe644432ccbd8ca9f0659f795cff02417c0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
