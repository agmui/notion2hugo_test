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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U3YM4UDY%2F20250216%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250216T031529Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECsaCXVzLXdlc3QtMiJHMEUCIAmnW2uEuMiOS2TIGXWWR4hnQj4LzmEdaB12qybxGR6%2BAiEA57wR%2BLm1mEYvEUwGzcPXYPKrszdxFc9FR%2F1oILBXkQsq%2FwMIVBAAGgw2Mzc0MjMxODM4MDUiDM93g81vdlpYSxZGISrcA82GKbEU4VuQvVm2WytdEwSoXCAOOaC4YnXQiNAelL%2FlYpKLkcKQ9hfLz69%2BsxRDSoTu3pxRtOAkNLlfuHR1b5eGn79kQGCJKiFgJl88eRDyQNPWf7oM%2FOe9xisoNHd5LRuhJAv%2BxWq2sSgy71bwUx3Dh%2FHxFL4jIcPEJrHruOJXYbH2mVDqeNjXt5PwWGtQ9I2RYBEHq4%2FmSWWpM0Y7U53MykcmRLkRZzsqdq%2F9y8OlNqLCkh4YjdGONAf%2B1%2Bb06bj1tJKRMU74fag08xRbnnRIzmQOHgE9W3W958uQ1VSStQU%2BHFK9lsXy%2BETSmNqZnNJPmqlJjBVrwVsqkvoCZ0lZRFJHRzBCjQj3Wa02MGg6U9xk97GkVc36CPSklEVRfVnVs4xsyFr8%2FuSwRg6ovtICM2hwqyYhW70LHITkkQO0mbaJTD2g6kexJaezbf5%2Byq8UTsi9S8%2BLHVix5f%2FIoD97pcfMYqUy4JLEGRLNtHcVp2fDmTmg5tCSWiCvTRLo1YVaJcQxUA4BLzs8NXEZo84NZt7heqBIv%2BnB1E6RNNukLIQn%2FDwVk39JBIEWzjBISWrEznHNdGTagsdS3oRyNHmUBPCH3BNGLw4QmyXhyceH2ZQ80YTvuLZVlP%2F4MJ2qxb0GOqUBiADuziK7eF%2BS5I8SwXgC1jK90WD5n8VgBkiuH4WZYT4XS6yqCLNnn6Kyb5%2B%2BmZ8fJA5EoH5ajB1n1vkIEcWno0zYoTAKUUQplLdpAbpm68w5CLQfNFJ2p%2BK8OjRE9%2FBiLI5BcrPLIGwhkpRaDE8x%2FofSAo07bvRckn7OMofoQjUHtYX3UutUFc1dm0HLqUIsGDQpd0Ha%2BxIcE8J0C91uIfq9ySFg&X-Amz-Signature=772ceed16756a09faeb24a8b0c87efd2f1f204794b98d69c8da0ad2583c01596&X-Amz-SignedHeaders=host&x-id=GetObject)

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
