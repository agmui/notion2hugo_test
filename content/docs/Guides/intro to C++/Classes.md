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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665JQAG7CD%2F20250405%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250405T032235Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHhetwBSkrbc5H9bj4GblrTHS7Pn1anYx7YZIHkR%2Fx9QAiAh8qjf0mwxtybLWoEGq3PTtX9lpy3K3uhgSwn8xmSA6Sr%2FAwgkEAAaDDYzNzQyMzE4MzgwNSIMisPunpWZci%2F97LX6KtwD8aQLSWABHFNieY00xq1ONiOBsULpOywi%2BBSfAVRXJ5AQ9tlnVmSct8QA1LFlZVpiGJLxAzmGfP7jZOToMzb5ULDjAYGNFwuj0v59%2Ft%2BiLKc5dwOa6dGFZwyAR%2BF%2BNwq7%2BTqAAMYUpfr0NX7E7hJ93HRP%2FRzjRETDSumuljjLYrd0YLWi0ajNFRTVJIi56mQnY84ynsOpbkIaVTMZhUKZVPKoZA9MFLyPDtkBBtHiceXN%2Fa6M%2BRXaHz0tbbyGFSLaRAgqVhyrd3Lpo7ahFPs3Ebv7XffWu9DVNlpZYdj7AY2mWrDTNXUkt56XBQmHecRZc0fyVBFvAfcmkCTb6jl1lY7hWwqh0fykV9BpkfvTdtTk%2BZ3GUlsroY5F%2Bxz5Kzov%2BKS1iNPLNXkK0ZhWaXAWZz%2FEAlt1r%2BRcL9xXwwLR09fqCOFho6y0gAjeDKO7E8XAp%2Bzir7VzT7LMDijYnFDg0bT9jGsYurvjRh416yuXR42IWOavlcihsZyofnr9iq7rNs%2By6jKLx33%2BYP0YAmz1iRtLCfB956962ql%2BUQK9o1U6dLgqjlb%2BGcIQOm2mBX6f5xRoJuhvVAwQmd8G24XKbIRK943bLj7%2B4SrpF05xd6U6LxRMSNuynDp5kT8wrLzCvwY6pgGTulh8Ds5h22IC8QUx9FU1zjqU0ziw6BnkDz6Nn9aLFceKS1xR%2B96RsqPGg5qoCr3jJZAW9kewtdWnp6SD3A%2BobeSLs3eXso6tNtoZHVYfPKbtTQ%2FyGsRoEqwV73kB0yThJPvpPVOzacxWNc9vQFkRCWrK2L2DPVM%2Fkcg1tMRkhW84WvnpHLDZwAby41pFmBtj7JsJMW2vjJEeaD3h9lxg1befJsuN&X-Amz-Signature=7e16661a0f6e516d5b4f3210440a3caedca3d2527e0e037cf126d01d86d1da8f&X-Amz-SignedHeaders=host&x-id=GetObject)

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
