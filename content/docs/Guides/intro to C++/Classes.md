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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XORFXKR2%2F20250613%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250613T150918Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC8aCXVzLXdlc3QtMiJHMEUCIQDzCTHsGJenGBV2zAL%2B3Xqz4liCAWdnyrBgYYsfUhRHHwIgLbosdlZwFu8DYY9SXG1n6NG%2BHSqUCaV0mPieJlFzAkoq%2FwMIGBAAGgw2Mzc0MjMxODM4MDUiDBuotqCWymu1E%2BdFzircA3byxfJ9I8OCwcuWha85ETKHRr%2BKPoS2cVko0QmFDyXYpfIc0V%2BSCdh%2F4dts7FvRy0e%2BeSLNmtzyq8AaanYhyFM5Ywdqxzi055kuyOhrmU3hIIeP0KH1SE3abdl3VbIK8OSO2v30X3igQj7te2mxRd3JQIAEwO%2FuavqYzdZ%2BJLT6KrDtjQkBqqUt0bJSzffBNaPO5TbYuNVuUqwnjg8DN2i5ayCaeSKOV6kZTyKNboG4Z5W3ReX%2FLuFmAOX6GLALZL3wZmpI9HGRirIosVD0gm0YSJUlti3JTkDomuvg91ipNZ7OhzppxY4n%2ByKjtDH3Ky03ofiSFHUTLWsSsVmXFdvDuDuv5TKqw4SLAaZW1vRRxCxYtECkPeJO%2Be%2BF6S2zUqBadhYaj%2FXFZ8r9to%2Fqu9FI0P4HIzBIWk6sVFUr4vZHvYztLNJFiHSRfhWRPqaIKrXmaK2yvgFYHAZ%2BkGsuse%2FWARjHE%2B9eSVrJgRg4fKzlPeb0Qc3zaYaIxBQUbvBZwW4vEWIUjuDRQ8xfvYnMaxQh6FrQy8OGl1Z97jWUlPFejMHR6XDiYocylPivVQMUZzoSO4siZgMn%2BJHibVmL4GXkbj2qV9H9be7oplBH9E65askZzcZEV2GmjJ2LMJ72sMIGOqUBpc9bkfZ9%2Fz2NHr0FHnEN%2Fuk%2F9aFyH74bhwbKozC8911yjXly3AyD6KdgBGXjqd6SUBxHeYFrS48aaHaWE2hIqwDygWbkSUeQZh5CiAoJ9heyf6Jz9%2FFmpBG9StHyM70bYRTZMzc0PHxv2JNTNSPIRjxa59Jq4W531tmjmSXQWKSRkOr%2Fw0h%2FisAXnMXVxKv5FZ%2FGo%2Fg%2BhDt%2BqZ%2B6Y9%2BVCuxcVYg0&X-Amz-Signature=f46be762d7c9b969f2f2a10b429a4ed12fe054a0327f6c4bfd904c7aeed264f0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
