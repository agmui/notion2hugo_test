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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SWZL6HUH%2F20250507%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250507T161043Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDAEtPkNTAnlIUDwQ8NDAn%2FogX%2FFRhzT1e98aJ0qV9RAgIgFZjah6JJA9ajvbJOxvkNwAtkZFCDfRYTQs3iHqOTGgoq%2FwMIYRAAGgw2Mzc0MjMxODM4MDUiDFdfVvTa5n%2FIxUQx9CrcA4FNB08Zj0WyJYI%2FbUey5KyjzG1od1iAxi%2BQ2bTHXH0rN6y4nLA8jXCkOOUrVDjwI0bwwBJ5JFTLwwq6may8TRuVgr3AWvEILp1Ja6o2nwm3G1drReCXZYYqthBEHt3CMIHiaFyh7PDBCXgj63UM%2FW32QU%2F3ZP8V87PiQnw2xTLZwTl9uPjUWjqG7T2%2FCLXDsfOrTwH6%2BWmMiPT3jIiQ0aA1RUtGxhVSJIwsNEXi17S4xM2F9U1t1L2%2FSn7970oqW7imo3k5eaBIC24Kj5bJr8ulgZAUjvulPUIwZU2p%2FZcgrDAYqXJMQFaRNMPUYR5PKgpoGpDfqA4Xf3Lhq88pN0TptVIjxLk4%2BfoYRdKjG73NEX8VHcxViwxTrj5IGoJ5Vb4pHcM3VNfIQ4OubxvC%2Fa1nvo24hm7SZln7BCFlg9d8hJlklbo9EzgWGo3LdnJVF9%2FZavSj8e%2B8t%2F3MJfbeMw0PLUuZRJpVX2pUoVmPCp0PDKp8qN65oZwJIGbhKCgrw4FfXGjaEBLaClYKTa94Rwl3Syd9BHSyvtAnV9O2fQ4tAqXqw5yAawtAWD3nPiEj2GtXoFKSR3kUV3L7cs%2BX5H0SDREmHUznyBqIvBJfgSaV7QLwaXcrbZS75XUYMIGD7sAGOqUBdDIIcxhizmKcgI9XlJ%2BumwsGxiww1qtOqBWavvyLuHEvOMtSz5P94gXtIiloXO%2Foz6Mr48DoKFOsVBojrs041lLpG6Zu1h0UqqBw7kbyHKka%2BBs%2BcdwsYGZ1zcc0tx9Y%2BBDYZazjwuEoI0X41%2BCMNg3LKNhytLsehC%2BUuEiCqNsO4GWineG2xkSHw0Uqq5WAIzXrluS2HR3jppAU5pByjfmleHEN&X-Amz-Signature=dcc77fc1e606e39bb9cae265fa264ea27c463ced990f96a706987bd4eab02ee8&X-Amz-SignedHeaders=host&x-id=GetObject)

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
