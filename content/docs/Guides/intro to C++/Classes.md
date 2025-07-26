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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RG2PMFNT%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T150808Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDYaCXVzLXdlc3QtMiJGMEQCIHM9316zCiLrBG%2BqVFbh599NUx%2BFY0uZvyrIUCQku9WMAiB8GjPsG4lkJppa9Sjr%2BHXSY%2FZt2rDmBxs4clfF68UatSr%2FAwhfEAAaDDYzNzQyMzE4MzgwNSIM%2BjNVskkbSOq4fdH8KtwDoFJ7AJhl9D3np0vNyS5ZsKvNt5fM6ErHSujwELTX8cCjfYrOUZmJlJZFE2hG2uexpK8Ee8TfHNBO%2B%2F6uN21mkaz4w%2B8C99fJiyKNHodsKSsD4AaHWFQUX6BBmBLOQfYjinHinfCmZq1ACTRxRuizi8YjYgOvUUHFmWw63TC31vvOBm0HOLfUFP5QwtN3aUGQy4HDRJlt%2F4hoItulAirx6i%2FmHZLBZYqKJMlgEV6Kc20UU%2FdvG64pY9a4HaEM4GoQCYKRTlaCkTiihBRAwgXj8CEldOAYZiRwmc%2F1qlT%2BBYVHpiFESRBKm%2FqpMNe4ZJB0pNyr9INLRIMr2NPY6%2FgeFCVdVxtzj1maoeJj9Ip3R7V6CpXP1yXQf2HdXIOHnooxXzdp72SoyhQRclMqzQqVEfs56MlwB%2Bh1sXPki6qiHn1k5PmZ85nTfmXvt6SwJwGxC7pTINYpdeluNLazLPWIUmhNymOnL2M7pE7MUD0WXTRq0J%2FVmHVo6tIap%2BK33gCpxNsM8NtT8XfaLvwFe1pm5M%2FSiQrk9h28aHeIEjAoc8O%2Fmmw5GHQygi0l5ldF9Tjjb2RxIHHw3oFjc7U2Rn2R%2B%2Bwf6VL4dOej5wuaHesICNTjCY0VgzoNK3D9HQ4w08GTxAY6pgEwgBwgz70tCEbhJRTUXfLE%2Fl52WnwiPy2ejbV4ADk1LtZM5RHcWW3%2F3H9ixvI%2F52wlADumm8Es7V73gESkmEVNjD3K%2FvmrRPpHpuC4AH4BkxLd5VHd5YTYDJHCjQdytXkOsVkqTmX9LZ2cgZoGGaN6ky0AOjD%2FL%2BQDU4%2BkVA%2BhlyhiYSmIYbbO4O2d5Je6ErSCE9VYCqZYxOULLRX6vrh2YzYRnjU4&X-Amz-Signature=0744a87cdea1265cac27ba119c0f2b2bd59aece85b0fdef8fa20a082923a29b9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
