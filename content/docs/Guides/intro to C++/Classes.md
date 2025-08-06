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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665N5MYUPM%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T091632Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDgaCXVzLXdlc3QtMiJHMEUCIC7jX3k%2Bx4v7%2Fe3qPh%2BdezbfFP1BQO0r%2BwzAmaSCgdZXAiEAixUDfJSyk8KMA%2BhF1yan5mDgYMTxoFDLXkG9MQaZ2JYq%2FwMIcRAAGgw2Mzc0MjMxODM4MDUiDPFcVObeYo%2FAEQcOpyrcA1FqLS3AJ%2FV3fmjJg%2Fuj%2FUZ8GTRS2AxTAg4qsN9dC03ExOJQU%2Fm1LFJS2kNtll9h5UGzlbKnG%2BrTSUSMLY7sFNKZ9TdmWcOzpjv7%2BSmHzSteOctlff2XiEtQadUryezGWPK7bkzD%2BIuqyBKd7HL1TRi4c8cCzeZeTURO0vXW4iVA8af8qm6XVKEUVBuYXgkjR8aEb0eBTCnvzl%2BEjqZXtSrzMYsDubZq%2Fr7KMLG4q9JL2DYGdlZ1k83sClUEjWiniCNNW1t81lwFJrvZAy%2Fv6bMqi74e5DafCJuo%2FH8wasO6CAfVpUqGV2qtW0wmFikdSlR%2BlPVBzOxU72%2FLS%2BMquShDLXi06TVRZUE%2FltcFwSXUVq1fNH8GIjRTkJb3ywYy5HNqI%2Bmfcig3%2FP%2BFWDAkTkbKrJtSUQ3003wNvLZDXMMOqxvbHARoGlc3lFw4eYzRK2PkwP648T4K4aQMd9lR0Ux2YE0u3q6IJPkm%2BN2a1fTCYWfMgvNA9b9H0ViQ7kK5qWvNRtYgxQWVX3zB8CshToUOXNtTWOh9OPu5hk8m67LnCVpKl5OzS57mQSQSKrZSPwbfa2eDPATUH%2BlkvJtQX1XNZ3eObR4AJujZc2%2Fpc%2F0Y2rnITurlGeKSOogAMJuXzMQGOqUBr%2BUNC3gj%2BkCybDgNv7HY1KFv8pVTfrw3UXC0XTTTTbawJ31zwCQXsiACv8o2aR7uVtArkCpoaePZwxQgVCSYFVNPcW9LP2bHNVH7g5dUbqboVCcw8Ddh6%2BLz5pXZd32%2F9NDJLzFBtaGBC2wBwEZKjF94r%2BDZv1Iqu229FPGyTyzqfaJi1PH5NJMMbqxEPW2yKmPAvaJPsn80xjQvdIq6yOF6DGy1&X-Amz-Signature=920651486bab8062bb257c73ffe3d18f8dd49eef3080da5f8d764eeebb529bd7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
