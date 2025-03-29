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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z6SIROH3%2F20250329%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250329T061023Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAYaCXVzLXdlc3QtMiJGMEQCIEm7haB9DHVdsVyU8W3jgRxXr%2Fz0JoDDzg4gkndXdFXgAiBUYZDRrH252CKi7MF6HzWJ2aAXexYUkkbL13D9m45ELyr%2FAwhvEAAaDDYzNzQyMzE4MzgwNSIMWFogHisC6ksIFPrZKtwDFGynozDbzNTfaiPMofWldRHkZtqzmiIoJXICkcHutJGwmESFeHaJmlEXGt4iyS1%2B5WebddD8csPNhuv7BbUPENXYQTz8E7rSoqg5zLMDulLjRD3OBOmUecai%2BoTwIBUToTHJlcPdpNVOMvozskxAcdTyyyo4ZtKVXc71lty5N8m%2Bx7Sey3mjIRDEF1SaxLcmYJ5YSlI%2FhJOYDOjPoIrFFhq5uPAQfLa2QKgg1lb3QFJRGz2vFFK8ANL63%2BxiAninulwNM1JUx3NULZoZv0JnR4UYN0PemEKBTl4efDDx9PhnNe4pSKRHYcOMDvLJIjxvxBHs1JZt1jaJZ9We8xOfGxCuDgNaD3XhbjmLzWbGhLMQye9PKNhTc409s5kxyoD2chJlNVPtjPjXEIHFt554nlHWWCUcHcyYwUSSU3BrSxaIZlEOHAUuFWqq6Hz2ywVq3aZMbhUIDPb0V7GDpe8QBD7KFlcKlu5aiCvN%2BA4sg5VvQ3esf6reD%2BFhFpqXeKtW6DMYwhVblxvOP56rZEl2ng3XjyT0FT3AGkOa%2FCWTaZwjzpKlWfTwiXgelIYTYNB4rRMHSW8UbkZGbDYoMg1SSSDRIlwALbWT%2Bp2cIXBwxp%2BFy0eN8Q%2FPgNzuZLswspCevwY6pgEkbsYb%2Bv8VlfLaVOLsdodqhjy1gFcZFbUUrco5v%2FzWc0l3ZscEhdnrSpfuZItzbz5%2F7lNnzv%2BGCHgRkI2EFEGVgvs0wL2x%2BMzJhXQZrAvphrNmTHZE1jWGdrdQnHDB3VWc10enzzwebaoqQOko1OeG6lyAg5Fz6EHXkha%2FCR66zL9XOXLE1IznRHgSZcDtKbfdDkHX5Ecm0nBFp4NybKeKyNEYH%2BgA&X-Amz-Signature=2be3dfd5ec6d5873b7cd74e977dd8dfc047afcdde40e8f129b9f7b98b0f7f207&X-Amz-SignedHeaders=host&x-id=GetObject)

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
