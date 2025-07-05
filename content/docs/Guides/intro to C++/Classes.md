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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46633KHCWWI%2F20250705%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250705T131915Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED0aCXVzLXdlc3QtMiJGMEQCIGGft7E9Sd41XBLog7n6xoeSi%2FGE2lin8u5D0YyD9dXnAiB%2FPCel2G9y%2BnCqp1tqVg4t1EUYPfT8PzxRDYOy8jwTPir%2FAwhGEAAaDDYzNzQyMzE4MzgwNSIMsw4HVQNTGNUcDh0AKtwDXbUOcmOBnH4icFrm%2FjSZ3J8B09bw3NaImr38gFOpUPgac0UG%2BdspgacuN15%2B2yMwPktKsLNEhDOyfIa16%2FGWgn07GPYnM4zV5c1UzITflL7wOZmEztQuskACzszNFXvxBdMmwETCD80YH3KzswFSCoEDl9oQ8Z6Q%2Bxuj6JAIOsJjELd2bYfT8lfprNdctR%2B6Pz%2FazDthdjKn%2FMF2DXPDz%2Fip7L9jOz4Yls7PK3Tz21L5cKYxEGigyPrBHoq4X%2Fpd1iG4DYihxk5BjFxi8WI9DzRqAQMH07YdrVJauEpKPUc8tZDmywSVCJVAuuKyqEMeAr3iNE8LRW4YF2zBPo52AIZmpoIyo%2BYZBZnkejHzsricDuXBwau7clENyy9SkG8jy7WPEHasLleKI32lXPKLlRHABVhtiULGgsAWhS5CzRxyARsENalMmpsMmr905%2BRQNH1HyWlnpYvZP1ztaBIfBN%2FKrR7VW3TPxzr5NQT%2FImt6BTKmsMFFBdM1vDuxSM5js%2BpijYPxwnkAX5vwbbWCFiooEM6i83eX%2BWSHX%2BWpR9n4bbudvCULN1oNeaHkBcbDCdFQYQuI3ZBxbFUL9XFiMWilrc4blSCxRd06bmzwkLO24WvRdkM%2FjIG5WOAwucKkwwY6pgFWZHE11SIH0Nr0MulTZbZEuO0%2BYKmwDK1lBGzyjwCzZQ1txjt%2F4jukd%2Fh9Qru1c3drIKXM93F47nuwjZqX1PtMe5RES06G6G%2Bgj6HYhVm2BAG%2BqJFVlq0r2YbJVpFsZqM5Kic32zbYEq8nFcpuj78%2F%2FCzuD%2FWeXg9wKdlaqoDH%2Bg3lLXBeEL%2BKIY3Y5dyDXzJkUoGftOPFpwTIGzS%2B0jBEY6pjv3J%2F&X-Amz-Signature=528af3f279ecda77f2c9bbcfaa5230c22f43d8cecf46c764d38cf3ff56da633d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
