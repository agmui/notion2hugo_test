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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UBXFM6IZ%2F20250422%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250422T121448Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEwaCXVzLXdlc3QtMiJHMEUCIQCMwNtiP%2FW0E1CFoLn8uf9iQjeDRnjqyuQBx%2FEmqk5iyQIgBZLOTi2xSHEl76Yr6mQeNevoS3lVwl1FINLBFiVVJuAqiAQI1P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCOBi4QcsmBHZLONFCrcA1GQYyuPfL59f65wMX3qCCegDpY%2FeQ7TUMyyQOVRyVuLkyrTYC6Q1KNKbqwWbLtL9GlrNNNxWUblWb601MjYvvLXQuRoDBwRcZjFToi%2FZDSHf4F%2F3KCl7r7u5Z52hgS5iuyUuetRWBRy3W5VIJutEKV1T0DPMg3CrblBfLyDrxCJMWAIUek3ZvLEkuoa1Pyfrw%2BWMBxpNNIDitPqhZJa%2F7nFunOiaHkvxozx78qT2L40EHLOAYLfYXvZeyTbhFIdZQwXPn0yEyE29ew6a4JSF1kr%2Bv7WD3JuxPpkpzzG4MeVS4hw29rxC%2FVdagAN8RhRv8YXgLjLy36K7kST1eACDxQHoyh3fBVnYGuVTKGBNQHY0HJ9dgdZ5nJJKok0nebP6NZTemr2MJmbLW8VRSKH0xHYxfB9bU%2FmPSALCbkyVKd%2Fan59MxYLirJf7OlZr2BFwldR%2F4R1QG0VjXviFPQopSJy0%2BI5CXb6yrM7FM79skln1qXIwfoyIpWeyeGCdi5jo1Rlt7zfUi62q6FvvH99x5CYES%2FchD2PheoZI4nnakUrWNZH%2BFTBeI6KwIPzMPxf%2FgaCt3C6Hnvxx2zXBLQWqlCUyZX7naI8W96Lg%2FmcnyaBpwOGYlTAE4eZTxpmMNj2ncAGOqUBuI2uXUtSoG0ZXwL%2BUPprcthmf5U7wTNRvrc9hntmMgBQZDppZZYN48zv7UM7fyvCOnMDLdC0RDjxnDfY8mJjEcTQt2c5myHg9vj3BOCbf%2FkqmF42HtQFOO%2FycKw63wFY6pPShnS0OwzxNVo6kjA%2BHEdnp%2F3OvE4p%2BdbuF3seNkBf%2FEP7IVkqjtgdawgtArgdb6I7epViPHAMVjwho8L4uHiQvbBA&X-Amz-Signature=d375bc3238310793fb47c6f264fafa23de330b50ce20ba2a22a92c33b3553747&X-Amz-SignedHeaders=host&x-id=GetObject)

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
