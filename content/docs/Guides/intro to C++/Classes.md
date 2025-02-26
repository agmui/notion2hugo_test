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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YMUFAK3Y%2F20250226%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250226T190148Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECoaCXVzLXdlc3QtMiJGMEQCIHykoAoq6ExFMfW8N86lGWmORR%2FmvF7azqcKd2GUSwnmAiB9JA4VpLD0MKr15Z3SZWGawMRDJK2Ff%2Ftz28apK%2Fb5SSr%2FAwhjEAAaDDYzNzQyMzE4MzgwNSIM9GEnamCM%2FvIIXgcwKtwDH9wNJv%2BIaZP1f3TPn%2Bfzrznohc8eT7SDBzddDwcFmR%2B4ivJf6W1E4KAuDQUOIV8zd6g8kdVRst6L5O5qgVFwRXySRiTD4cxu%2FUiGAO52CYfnCzFuC%2BcQiOg6oBfDJjK4b0aojbSvna1fs4VvVGNpO2clzTRGMIgXLscRxgFUgSQ67Mxq3HnaVq98iaO6PlBnGQ4zj0D5Mh2ZZ9X9vKO%2BSCfv9DZ3BqzlHOqQOUpTkis6bs5TY9ay3yYazC5TaRm5oQc4j3dhFNym5IlrF7mc1SV2U9ZEGvVbpXvltlsl3%2FFigeJlGqebpIvhoP68o%2B728Je9SOZWxlFcU%2FmcQTi7ua3pVeG%2BHcxoq1XOTBoBl7Akrn0yWts4PRPO1WyKqhFYgXbmHZx6A31oddx2PMY7KRHuxNPeKenVjxK%2Bv%2FNapj6YRNw6hmrd7F2N3ZUyF81xujXaqQUJ5YhygShaX%2FOiuGbj87EbK0O%2BrGF22SgBqt8V74uL%2B8iSlll2hdXW3QqGninQO76ptnsQZ%2FNna4rt52EjmX%2FyDJXdm3mqi9EKDpGkCmtOAQmf4Xr6gIc%2Bk5fbhPaAmbVxZbg7DaLT1uqMgiSXyqRBiaRMhxZNBailOyU5LJ4EgrxPVhfpz20w36r9vQY6pgGqmyWj2uOls%2BRv5D41P2bG8X0hdq4ZznKqZJfQlRim1YZLSjFgJvnMHiZfGIKuYKlfZaW%2BYfMPsIM8KRgbqjxYMgJfOSdWXRKW%2FvGiCLEpYBMYpo1AYVw5SB2eq%2FjDIJMJr%2FztRE1S%2BEvkvVF7KY1UVwQp2naabBJ35AufF4Bm%2BcIuEdm4LLAdvWX0y6il%2FeeSpgP2dAxtRKyRNHwIs37GNVC2pQhF&X-Amz-Signature=0a69cbc8cb590833b1abeb141da0b9993ec97d1dbff0408c43786402c7b3e8ba&X-Amz-SignedHeaders=host&x-id=GetObject)

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
