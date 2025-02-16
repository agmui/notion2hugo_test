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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XUJ7EG7E%2F20250216%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250216T080901Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJFMEMCHxRrGsLf5%2FxH4FgnKLVdX1bmQqaPeXr2wA3eFcjZaTMCIGE3XgzanQsvN%2BGyu%2BGyD81OXQe2vqyW5azziZyjkzy%2BKv8DCFcQABoMNjM3NDIzMTgzODA1IgwMcTKDSn%2BlBPoXOBYq3AOwI17BXbQAc7aatzmYM6j7Sd1ih6X4Bb7rwY3yJFY1DCbPK6bRylk83MYvGmRa1RpUK7gQ2bvZGUcaBCSLaPKA6fspv5XctYH8NmuSwHHsq07itZ8aQOEqgT2xdxgRVsG6ZKMfgrAHZuA2wC0to0RIR9A6moZWdCW1n%2B4SDP3tk34k1dBgprchhSIsxzbc5yxDxvCyd9WtV1as4%2BKHsFUAJFAZwpeTh5XibWU4UODs7%2BjrYnILykxA7A37gxY9N9i4Bd06h7XwHwhLeX%2FgXBg8yz7RBiz%2BDqbVe1448Up0Ai9Cce8bntNIt46nBO%2BqW5DarzOL7aTX%2FJtpgWEZec8GEmIC95wptLfSaUmEW9S0h4VOmaCtUzCbixsUvjYLIwiBbvf5qIzBkzn%2Bqd4tOES2BIV5c8PmYWE9qh1IHooX%2Bn2HqB7mrBuNX0tEWU6afSkPGaSHWNN2Ar2R5dgRG3ol6Pzwy4wmrbMRqOqnX3kClF%2B7tgj2tiex4lPy%2By9%2FILn4qCotEARYUNnzM5KvJT%2BvPy%2FM6qfs%2FStlnoE0h9qngAF7krnh3l9N89RYxs4HtD2o7uPO4I1ieqdViF0f%2ByZwDJ9%2Bx0EoApjzT6WS1S%2BASfe3r7tgAejZb%2BSQizDD%2FcW9BjqnAU3IIwBtr5All3wuzOpbjg2xeLEoHy%2FWili8qpmS5PxCsCVl3wro9izkapuN1NhknKxuavDttkzb%2BF4BMGSU3p%2FB0CXmYzHgpDMHdhUDxxgvK6Pbup%2BweUrnByj%2BsnTogXOBUuJam%2Bs2dJdM0Iyf4AA6%2F1LkVXXBleCNFeZAjOrpWFZd2PHDGD3E0e1LbtKmjx9mAvvmbYzvr9U0UwNkoLOKU6%2BTU%2BCJ&X-Amz-Signature=473d4301b4bed3da1559bb87df6be053b0e8b5fde518cb1aad5cfce092044b6b&X-Amz-SignedHeaders=host&x-id=GetObject)

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
