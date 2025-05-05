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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663G75Q3V5%2F20250505%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250505T200930Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDearFdhvSk%2FB0q5XbvMkwPl3hA2Ql6aRokzk3eMfX8ZgIhALrdrn4vuHBfYHXwudmAeFJHtp95GcDGFQxLdO3VV83LKv8DCDUQABoMNjM3NDIzMTgzODA1IgwC%2F6i%2BJBT25l85wlMq3AOlIYQa4pSNI12sY01nrUtU0g0uBck2GPrsq1Ep4J6ob0bvOKqKxfW3LtdHygHA%2FpDorAtPbVJZv63OnwNHI6vcQZQzKOMmB1dbmoyZi4WuN86K4lyf18fQv1RdIsxz%2BbLy0wZqdfGCtJkejIE1WyRWGgcONbgaxh3zOYaVchgsQiGGtJ7dOKz69457UCQ6rLQNnP6sNk%2Bci%2FiBbf2%2Bs9rvJdlw38btbvvyDYpYX2WNXO83UDtEqt4YUaXzRU26WXc5cJf%2B0v%2FDrGKnQbU%2FlTwj32t0eUyUL4hpnh3nibNMjS%2BQJIinw7FC7MZVyfyV7muo5F9opnODpCbs%2BZVDf4qW41wjfEVtNDHv1XvH83Qoo7kEsnq4eLs9wTiwvq3WUjJiGA149y9vRCfImjtVlTtdXZ2aONOfIIvoyK5i9yrEkB54dLdOcDDkSlSEqP5X%2FnqziIGguXhe8Yr84FdHRiUyfbrr14zgmIp%2BrE4B4ErZBvRs42ZGQau1qImha7VY039FycDd8l5CV4XGIGHeB0YKrjRodPcMxhZ1BXSKfzUE%2BHwsiKs%2BAVhB8IgKMfv%2BfGoFydQojb52ZCCHj9TgOlgJXHQOhtf60IbyFFzs851fh0GUZxokcoTliifp6DDTseTABjqkAdoOAEy9TZMjzxi3wyFH3XLBucG8dJTDsPKv4TwnYDyvAXMx6TLBZkeeL36vPjWxgXA7yrQfdo%2FFEk%2FcUZ5JZjJhRwH5x5adveYuk4cdyUD7UgGfFLGQN3o8Z%2BTpO3u98OafXrsfkR3Ju8XQfb06aJKRj%2FuIEhxanKjl2BQBagbo4T3ZTde5iRWWlhtzoH8U%2BIkWYcGW1UxBAGy%2Bb3WWELNPeC8L&X-Amz-Signature=2a50a9481b3acb2bf5a24b5639eff45fa2f60f6c1aa0305857455845c419650e&X-Amz-SignedHeaders=host&x-id=GetObject)

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
