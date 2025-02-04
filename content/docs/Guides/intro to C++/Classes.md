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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W2SNXEWM%2F20250204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250204T003518Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAcaCXVzLXdlc3QtMiJHMEUCIDY3i27VGyynZ8Wk2WGzc45SWf%2BdXoE%2FBJ%2FbI0fNHRufAiEA5uQYjhws9Iwts%2Fir5hpjzSAc%2BQzd1ux5zXsMWy5UixEq%2FwMIIBAAGgw2Mzc0MjMxODM4MDUiDDzcQLZVCJgBWyJqpSrcAz2nU%2Bx2ZPi9HmfmpP2UN6L%2BKlve7uq%2BNx8%2BlEsGY8gXxOc%2FlKwEZDJHqQbFn9Kt9h990rPrPp1LNLeI77CrLibOE3uPP%2BEfZW8IEKJ8X1Bg2PC7FErunwgGdX62JPdnguvp1wC9YzCGqlqJk78U%2BbmQwSuIPWERvanOhhQj4%2Buz8CcLAfLpLkhiqAkBXgZgZ7Y%2F7r3%2F3YoYWCSXjdFca8Y7bp78ivODjQSFjEtpngZlNmcF6dbzlsV8GHw3OZS9WlthN0IXKaGFB1ofu4%2B%2FxLfVLNZwC%2FS%2BwRNyWGZQnzT8myi%2FQvT4BJJ%2BcbP%2BMPjUdi5qISKrP8RyosZd83Fo%2FK0vPaFVmlvUbRwwIGeZXOX9%2FyJW%2BoFe2337gdRZuLwMxeuQr2ScPgy0hh37BpW369k4i8QEbnarcDdxBNxwExK7WXTTguLGwU3I%2B8RyNcBeV3yyYMxVppKkQnso%2Bx1K2vocOWWxafx8N1iH7OSiAmdLKy7iyPlRXFplxIJjHObO2EM9B%2FlSw8ZF14V6iwa90CFFYVCK2yPUZhqls8Ny7AcCBlsiFOdunVG8Wp5fdzvWLLmnt9n6ej3OTG0J%2FBGDco%2FHpwPQsXWsnchRqlwYN266%2F8%2FoeADvA25Rd7guMNiVhb0GOqUBNhBv%2F0%2BF51OWxihW3srdymQrOg8wTgi2Zdc1ARkpDIQeaty6ZgR3uRssP4DFjnsjw7ywM80rvoxYfkmrzBqwamznfmKxSPHMCVR9isoFhtelZ05qLwirKo5GGqs6nOoisq67qIbfj6zkOlmw2twPii7cMqmAGLsOWQXMO7%2FTF1Icn2%2Fs3ZPumgUCF5NWdQvkJMxWb%2F46KwMi89XU5WzUApP3RSXS&X-Amz-Signature=3f47d9c93c2532d578857a1786d2b769e6844d02abba61e6998db807ef517d01&X-Amz-SignedHeaders=host&x-id=GetObject)

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
