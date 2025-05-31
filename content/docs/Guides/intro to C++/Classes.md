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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667C3W54I5%2F20250531%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250531T050847Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCs0ZWXKK%2Ba%2Fz6rkgfqAfx9NpeZeL2rzc2g%2Fjkn0C2SfwIhAL4YIxIApk9UVMzcyPS497KtIt1MRNOavQDZQHQ46iOuKogECLb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgywKvCbqzT84ZkZlAYq3APnZgPMbnhGmwv4paVlH4HtMEzclFKUnRHKQ4igtuL%2BAekWhHW7acTKhnyHqO1RMxtwkPckHqKPH5xKY2q4SX%2FN0e%2FeXWx4d8KuZ5gfM%2BW%2FLBCh%2BYxxusIYO%2F7UywZErSPbp4D%2F6tIsoEBMx14tVsBNWPrbSXHzW%2BXIHfMLXNQoeVEZI%2BhEWeAhXaDvm2fwcZ1uR07CaSVBYP%2Bh3%2BoidRsmlE0O3fIxXrxWkRh%2BAxBCSQG23SzYgF84tJbl4IJFcho9jffFhb0yirf4DYNDHGBxrTC2wyVjKeOuJekajZFwei7gKPrsOFRmeFy%2Bb1ZTW14YG%2BX5ZqOy4Wb%2B7X2PQEOofOPEqgJf2BL%2BkFxltD4FvSzvSdeWMBJkS0NzvUiweVJ%2Fy5D5mNrSBxzl6VfbO9X3IKW2dnRVkhfmEfKIYZhTER25Ac2xbt22J5Xgk%2FDgP3VyHRoQWmH6PL5otLJND9hj%2BtEvQFk%2BsS1aILuBWiEr6dOCVdkl2cgq0viEJBtm81Qpq6APrfe6F7QmVEfPZ6rG3fcSvM%2F7dFVlsL6NOu0s7HrW3zQQlYFddaHsczabR6elny%2FbOfA2bSePU6%2F1Tur61ML7nB4ahyXhao7eHkO%2F03WR45%2BkjvOL8NwoajDRjOrBBjqkAcFNH%2FetD3qEYedDYL009i25i11QxIAHDITaGQbrq9frIq64b5EzK6wTG9Z4gHLgLREYWSybfV8MP2uFXNUo9IwyUJekJIMGMKkbGBUrLIcl%2FwJMMkFiKj81k5Qu0EOJDrOygiSDSW4ZV82g9yNA0RR3d6PqsQ3ZTgg72BRg8%2BHdJN5OCAfhZ31baQdYYib%2Fb6p1KtxjaVUgs2JpZdDQHLnhgr6N&X-Amz-Signature=5c6f913a6024e86850296f9d19322f892a32e0b3a7e4f5128c02201c2a07f80f&X-Amz-SignedHeaders=host&x-id=GetObject)

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
