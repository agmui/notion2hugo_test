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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667KQFTC4Q%2F20250309%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250309T050158Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECQaCXVzLXdlc3QtMiJHMEUCIQDLwFRZw4e7YxbOul6wC4dh35j5%2FK5qgRwXpsSoM1pj%2FgIgaih0JVEJPz8nxDrqRR03XNMhuEmuBhh32%2F1cOux0OSIq%2FwMIbRAAGgw2Mzc0MjMxODM4MDUiDA6%2FHEhnlyV0nJu4pircA%2B%2BrFQ1SxeOWXzFCasulDs6T%2FlB8rvumbQjn6XKTlnCnQW4V1Q%2FY19HPwRv14pY4eoBVEuaeRRlDXKQHNXf7P%2BBDda63fUa92z7CApZJcga7YjO%2FG8U1YdYzRQtGrLQeFh5BmtZV31DoRDIoGx7LSRtYHEz92iWyYfBfK4NNEfa7KljzqY6YsiMsC%2Be71CeyTP6wGGrzrEVrQe74aXpHjT5Je6oGm0I6Cidg8YL6%2FN2sV6QDVTe39czVPaC6ViY8TmSxSrGkSnZ6xzHAQQNYEq6MSv5wlcNLx0GLkjGgrFQlkccppBTUqzBlcPRHFBYa3PSLEGzzmGXkj78U2FCJV7VEH3bye6zpEV3S7VR3sHdks6JgbfuGjD5DqhHSCAtXm9vyTZrfh8WuakXsW5dJ%2Fuhj4felmLiBffFnAXB9kYG2sbh6A0KWiX8uZFjnFtlXEckrdL2cWQLzdwC%2FQR1y%2FcszLqBenUrUO1qK3eUjlcB%2FqxIiJFq7SA6JCCtirTJbBLDU%2BXtliHtFJSM7AKnUYZaBeAc%2FJsdcxQUGToktwLZP13RsN5E6f6BL9Y9mrrEDGOTDEclka9tp7hYQvT9u3eO8bSMkU7alX6J%2Fz4snj%2FNkMlpYdMRsaQ8PSlMwMLCotL4GOqUBsNB9Wuun7j5XFwY6twInuDV39eMz0oBzHv5lecPATdGILVx%2FFu%2BzAq3c%2FKRiLTQ%2FiLblZY9awP62u2TfzFpXTt9tLyf3AGeDE%2BxVB7hrLjE%2FFzMwbC2tS4Phf0rpIB7OQ00bN2rCOBLsLYeil3Tx2SH45gujLzU79e87hRAxdRa%2BTkpXW0yHi%2BDOsJbSFASzKdWjdpJ8AMzG6xbLttIjJgWPZjmn&X-Amz-Signature=e1cf147e5fcc08dc23bc860ada5e0b3b2a7f2c9a06ace396ac28fac9f65cc102&X-Amz-SignedHeaders=host&x-id=GetObject)

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
