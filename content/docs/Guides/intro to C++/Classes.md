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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WWLVJMFM%2F20250304%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250304T170717Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDwKX%2FTRft0hvliq736Rp03ABKulNbIFmNonXtT%2FOmcaAiEAu%2F3sNsUPyYr6tQsP2iWLJqUklzzLKNjWlPQHh6iZlgwqiAQI8v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPYk8%2BilTt4aXCbfYCrcA5l6tHu4sVbtdfnqZJkHNfAHsGeK7IhtGMDPfpmF%2Fa2KsnpeDErfDXrXuCa8GW3NDPI2YTrIrn%2F19CWxh64oz8Irxfjg98q1hzvqnfh8Sphydw4MZqIeFdemm%2BkSboeG4he8Y9GzIkFk7ivM5tDeHKRctjP%2Bsa31DpilDZ5VWxgGG58TzwAVxBaQgENRyjkpTHGIym7jWxH0gvRSbU2kTg9GDYtl5uq1qVI9uU1AV1v4s1VLaR6BQTZV7oomEuwRy29GJ4rRj%2BlP4ywHpV6bFSZqNAWddInAnr7N3iBf8XtYQm%2Ftph55vbNWCjDh1fxjC0h8BYT%2Bp1aOPvU1pSJWPpo3tp7mgZkqA1ctgnh2JRpNRchizkZVpqGrUbP4viw6WlVFR4ZxAJghaHsE1OPAF8pSLLV%2BfJULJbYzJol344rkzlJoruwjgy1N1Rts%2BTLhhD%2B5fxUh6%2F8raU1DbR%2FXn4ByGpCuAzdYKDXfmoR8rkNuW5r9WI7FzY0kR2HjaSKWlwykZqceKVihVyiLPi5DmYKdJpTpK4ikK6sE382hx3TrQ3MxQmLjR6ebURSZvpOpj8WjLV%2F87JQXNMdBbG2SCOhgTawNZqShq5h0MjIgi2qU%2BfG9rqiUJJ1yCG4yMIbTnL4GOqUB7KBXvlpPmMlcuPPe%2FZZlJ0NHYLZMbvCz1u4MnB3UA5JhBkjBW89UyYV%2BXzAGDw9KxiWimzSR5W6UCJqDbmwTIKcw3WgYVQDroNO1R6kqM5N%2BmhsGhSFxPXt%2BwBS3AzIXCn3TT5rZbNIA4ZklhrN20X6AO6MLVx9uzHd48XsXJ2oFktg2qOgIjN8hNzWTLrWuyzKXmfYA3XVGYeyB6GbUwJ17fdEQ&X-Amz-Signature=28edab35d3a4a8ff1ce9d59680e19a232fb742eb6701d5ff7ab0acde9bca996c&X-Amz-SignedHeaders=host&x-id=GetObject)

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
