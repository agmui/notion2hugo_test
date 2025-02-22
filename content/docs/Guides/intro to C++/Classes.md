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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V5GK4GU5%2F20250222%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250222T003459Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFr%2BZlc0Mtzdb9SlmIC5jFGPJA2pfKckITp9I5mqKOrVAiEArQaIeWscD2ep7quqXnSvMzxToxlZ8PRlIIMINFyhYB4qiAQI4f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDG0eEfYxAQP6QykamircA4XC9Ct40WvYMUAdnt2CkLklLvwsK3ScmjfC%2BxV4RZSAM9S8Zbui3H1xfD6JQHvkukdKJy7YTvT8mBIaKyc%2B3dkxcW7LCju%2FIcJ0v90VZtCJCUCFDaMKylpIsa4SVmPeNVoRsf61F9s46CaAqzgbCTSe5FpPIL752J5wfLOi7mxxW3JPeKdqbOm%2Bcm1IPhI4DywUzy1spJrt%2BoenRlwu0ouhgpGmCSKiEI8Eq2ynfoefU3syUrgzpAXhtN1x5OlgMkq38IdQU839aSXCHZFY%2BsNKb%2FyH4ebdG8vTeVO1klO3%2B07fZ8GSsqsmP4oGKZKXrYHhC3GB7nxULJS12DwoS6XB4J4uv6N1J9OcskTbR%2FYGoxGhcpoNlBi1AcTE7boUe98TgShh38ZiJY1OW8gWWHRJNDTNR58ocUD4pxge8pFOz8Dih%2FVBKPojIvumzeGcC7dNSHWD%2FakybftsfzzFvXWdB11flxVx%2F98QJkwrm%2BdrTLvO%2FIkyq5taVyvG2k2xSaBfq8DvC9qxECOkRufl5t%2FB7BROtkE0wadiMqmmxPOw9hyYkL3PlZ7MPP44DFd%2BSH0W4SYuKHkkap%2BgWOYavvyitu7D%2BQDYlN7kczVIDaOnqAKcbt4JO2Y89XkNMIqx5L0GOqUBLhJOlPDq7vBYhIkZRZwEPpBJMO9iT2OXiH5RxcbVeUPWDEg%2B0xgc6tmv%2BzOgIipTPlde6%2FFc41385ZO1LM%2F6WtV2i%2FDnG5x5AhNmmm3t32WHsxEfp7iCIGaymECtHDYt%2F51Ex%2BC1%2F3afImlQv3AUzasXy0GFuVDYi2zzgGw5eMbE7%2BNhAP%2FUwgxpPmxygLBO5F5P6aSii59600fAhYvHgpgMc6S4&X-Amz-Signature=3bb3b197e5b05721bfd81fa5b338d333ef90901e220056b35b0f2a4ba4bc0160&X-Amz-SignedHeaders=host&x-id=GetObject)

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
