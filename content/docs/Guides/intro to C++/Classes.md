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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q5PQRGU3%2F20250131%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250131T081003Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBoBW8qt4Rm0FwoVEJl0qhE4hnl59qvexknTDsCW4%2FAjAiA5ZarKIfYJayxIOrvTfB1edqntwEI%2BAzcZXq%2Bb9NFbEiqIBAi5%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMlOiWGB%2FfBUt7YIwTKtwDaTkjwyxYyEyfZTGTQ7lvkRDxcgcLGbhFAt2p4doi18T%2FV0uUKB0OgGU%2BqL4IvqQUBnYYtd7ZWv9fg7MNzk4u1%2B0geq2JGPGQtwkDJT5juMXhVjMhEZDfucY3myhZd7OdlqyzpSjax92wIqMgvZLyI2TKewQ8Pf6yjN6CSOlo8ehVsQ%2BIPY0CwvjfzjoQQ%2FZIA0DkOGhsVDntzIGY0%2BYpVbPC%2FkKJfMJn9Y4uudn4D%2FJWv6FTHMsV4sK%2FvBBOzbgA%2FJ7jw8IHxVf%2BnELY4rJGbkSyzq1tiI68lyGq%2FWl4cPayw08K6%2Fmr%2FUJWJYOFpBzdtYrFrPBi%2B1yh1UDHAQtMVMv2KVtEbuChrBpV%2BKSY5%2FtTLSIymOF1Pq8iE%2BL%2BGrL176p7VEHBQghTCJoQsY8jFxreatBAMBE5J0tdiM7pCebvy1hvrJseUhlocmLRXDO6UWCUG%2FdqV1ubsCVG4gc48Xm89WD429B6HNg0f%2BmiF6cVy%2F4DF30t%2FZgvTCNtOynhzVKokkH5UuNBSPDIz287Q0K2C7qxYTFNUmkElW0p2LzkgRW7Oi5YQj1znPi5KpIljkT7yGyV1fQiV4UEOfV8PzhOVSWjQ4u2RD%2BGBvyaY5gJIYEtT9HX%2FzPfOIYw5f%2FxvAY6pgHbbK7hrIte9Zd0v4pR8IC%2FzsYP6fscg5lnIAz9ohji2cAJ2IGOmV0grdlSYpWn8HQ3USGKCkE%2BZX6vrsWnwYXqJbaDZqd9NzZOb%2BB%2BiiZqdi6cPOwshLHt4tcxK4VZzEZH9wSsBvrdAGf3XH8qCH%2BzJkzUw8U3Ub3jwFtjoKu0Ixl%2FXR4BBZLfP0Rz%2F9v1XBNPa4QTwDqSK4OxD0qfUCdoVuD%2FBD9P&X-Amz-Signature=c1df6feca9eb65f0f3f4abb992cea4c11e335ddb5e3cba1eeec3fdcbcd2d582d&X-Amz-SignedHeaders=host&x-id=GetObject)

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
