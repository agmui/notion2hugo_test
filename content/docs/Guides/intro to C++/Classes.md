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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665VF5W7HK%2F20250219%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250219T040942Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJHMEUCIDhxcSEW7J%2FGYkRarF2JvkHtVrI7yn6JQn%2BhuW%2FDzvy1AiEAs7Cb6bjeuHbU7ccmY49xH9rVNbIOEUV73TMgO7CU2vQqiAQInf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDA%2F22fBjEh4ntJA3RCrcA4Q6zC7d9GC%2BGWV%2B2LzTX5sBonGG%2F%2FGkthTfi%2FfFHSBSdFiCbPtqyBQT0NbGGdaxeN8x6neEZXDIBwGUuYPwq9%2Bub5LrxEBRASI%2Bu7gdue4c7zE6wbGJ%2F7eOSvrbTIjz4fQ5zVnHyfv1DFukd1mkM6NXxVHhEWx7yQNaqIYsMdSeXVK7ZBxooWjep48%2BOln8PzEd4osRm2bgrClXX0AxlFnVBhXywP6vDwkLiG2RFcpHL8U8mCX5dXHSw8LtUR1JO006TaHLbqOKU8cXNlHef5gOiNsy%2BQCD7X5iTLC27GeSR992NeaowbrXyvMfsH%2Fhc4g6Ctua6NBczWGClKyxD%2FFYz9a3bCAQzxTgiem9UEHcme%2Bs1mPDDblingyd4M7f8OP2rP4lE%2BN9ypDqlSfQcMppsB0tZdqr4WZ9TuWK%2FIouCeNkHcMja1Se1hPgPAi7XKToOVqnmrbgIP2kC8bA%2BdwtgToWmTQ8pHlU0LZJTMHXix8YVRqLAjhUZ0Agf2pQf3eOPX1L2OEgEPCEmX%2BZ8z1O%2BHt6z3Q5ryr2XLelI0zEogSa6r7BlslBK4QqJGz7vyetLMwzWYlLbtTZgbt2CaoG21h9iTXtbpv%2FAqMDNRfraCJ%2Fdb2Pi2OAq9dKMKii1b0GOqUBocZA8%2Fct%2BSeU3GoyXkz8lTa0tpYR1NUc5sdq%2FEex5ykSeKpUXgN%2BFsS%2FfHJMGC6KrBzwbp74CUGmt1xIMuc9xbAB%2B7R%2BQuMLx5kBVt8xqCZvpm2XPRq8VS2sJbfmjINhlTpY19HK2dScIXVFKwsGCGbYYS1cZNsPyF%2Fg6NbRS%2FomKcEfrw9JMBnmWK1zOdE18GujsDLjno45XOHS%2FQdc3JGscqbJ&X-Amz-Signature=61fb7a8fc7ef36e6a3389bccef93b8ac6ce66bd11bac473bc27dc1d2e53466bb&X-Amz-SignedHeaders=host&x-id=GetObject)

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
