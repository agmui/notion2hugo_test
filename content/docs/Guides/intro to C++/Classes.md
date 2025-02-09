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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466425OI6PW%2F20250209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250209T070240Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGmvERbp2Qh0k673DoXTlB%2Bf2IGyFrzDxU4PMoHMoJNNAiAEtytO9CbHbFi1B2g0a%2FS%2F9LmUCNza0QDvnkECN5%2BYOiqIBAic%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMyPTX8Ak8dmzJlBm4KtwDbByWnnnxPDPnw%2FVYe0PbtB8G5ZUmrKzhLLUaM7iFgchEPi0JwHDAwj%2BhaSgqCuWRj5%2Bvf7fSqf%2Bvv62lUEcPulGtJjQ1mc727%2BAvWDMNhTN5%2BGTyOZTL9%2Blh2oiuULxeHNct9TNwufh360p5imZvlJR8Wrsnk3ey1jD5ZBtt62pMljN%2FtMIM7RrtPr4J6DOqxZOE2YEDjlXHRCitK6WTdvW2cAKomvsMkZF72lwRH0lS%2F8jctyO%2BIAY30RO6jLM6KllRyv%2FDOr8gOE%2B4mQqBOPRtYgn1pN6XEHyH2pyysj5ESqqbOGQbGiGxwnZ70l3JYIUURy9kVOfxeaZ3F%2FmBPGPRgb54r6CWfgHeVCJE%2Bu0lWYoO6swv1u0mafgV01Ow9IfEVXWbPVQbQzDWmzwmumsELGWuAkuydnzyIapW6K5dVlOPXo6F5rRrny27yi%2BkkMSkgJr1IMQwh4NR6lRz3uZ3sf5zRmDemRvgKFj2sXo%2Fz5amscDDGAf4qfC4QJjvspWR3ZPjO2aL0Awxc6gm%2BqOrX5K5YHqy9j%2B2S0Iwn2X2%2BzAxbKEJYTWQa9xKeCMzNQi5kofxpZbR3ZQyh%2FitEKAmEi4YP693YXXd%2FHei8bu4stmk9s7Xm60fL20w6r6gvQY6pgGY72GWSpxHMJh0EWXFAMEOYwJ1xkRZk1cMxxpfEdSRu1irRNHFeD7kGVvCtZrzbbN7XIa4B2Rj%2FL%2BjEZd6avPKtq3r72kvspF4EKugl1KHueAH%2B5o%2F1xah5F64ypCIVSZvS72jaI8O6Mp7SbgykvMXq7s2Tj5qu9DCNOs1kROHiPtRmBAoRkWG5mbtXAhpyPQx%2FAjZA4BOGIjE2x7Ig6Xz8TX4w9Nf&X-Amz-Signature=d39b2b2dfd042c0b90c4dc0cf0374a1155438d455bf9787b6a2041f84dfa9f3a&X-Amz-SignedHeaders=host&x-id=GetObject)

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
