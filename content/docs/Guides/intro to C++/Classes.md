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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666FOHXQ2I%2F20250222%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250222T100555Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIC7z18G06vVAXUDwtPnUuzVAqmj5czZBEixy9hdTwwoUAiBzlVpBoOU9EMGZsyJMpqicuWcaHBLWuqT%2Ft%2ByBp%2BXzPyqIBAjn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMmTNWXWLQa2IddM%2BpKtwDqlEaJdb8gru5liS0qypCKfMw2J08dfJiE9RREJSKEDCTaVyPedzz1kGYLIi8ON61wNMEB4B5GCUIPLhNk39nYft6FSPjFO5J%2B655dPmLpkeTWO6hPxZEZbon8OhmTrrIssL4MD%2FzDfAvBwlXjveBnOvoG6p9R0K%2FaRtlbmI8WKmKRQxf42ukuX3bWA9o9f4A4u7RjpZNdlVwSDXGEuTQt4Zw%2BuVAsLqohuOfdNlaYGY3PNcb3eI5Ub6wvc2szCU0%2BZoMxb6I%2FIVsjl6%2FbXZeRa0a2dgJmVjj0z24w7vxvkinkwngjsRP2qxK507DY0QZTLfqoeXzEedTgfZt5wP2sCu7gO6QPHm%2BlkCuCanKBW3KCSyUZG%2Fqcocu0tvLO6dacpFgcyi1O6DTx5uQINwUIgxuev0xr8WoSI4pyGSwIBfQ7LErlc%2Fj7GfGg0xFHs%2F7QfccJcb070w9bPc3DD5xJEONGTi3kFg0AnVYrBDjIJDI9myJsxeE3MiSKloZ6nDWKJOAo7fVr2uXNOZl9CMZPkBVP6XF5jrmCldXLgKKNhUMLhQgG6phEsEyGH3Av2oH2C730H2lZV3qXtYFtgJVBapSxjNoLbNJhX30ruJ0dKsN3fZ8xanhR7LSuEswh8jlvQY6pgGaxIIRHY70JIu20D1WPWvsvmjNAnVmRJcCNRjdhvwcrG8dtAUMClFxTvnZpUyhHDg%2BrF%2BZ1o2ITJECPy87mGveaPv487B6loGVsJFKkID%2F9dAoIE3ZwnhPE%2B8Az%2BUBbUU24nIOoj6SmjVfjW9kuoa34jHuahjGT84ncC9K49tM21N7GKdQdSnmgETnHa2%2FM2UAjPxrOrFGn%2BuPrNbMy11%2B2UoojUX6&X-Amz-Signature=baa35c65a3aaabaf99f7783eee2dd78192e2866c9e18ebf4342c0918c6893b67&X-Amz-SignedHeaders=host&x-id=GetObject)

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
