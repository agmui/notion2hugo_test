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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UZVXE47D%2F20250327%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250327T070821Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHknfNj5KdXc3QFYn8DeLDtoYaUbIrx2GFY6D82aSTrvAiBdAdercjR8t0nXJ6Sa6rmvI9ps3QkWHDSvvYxmi4R%2FLSr%2FAwhAEAAaDDYzNzQyMzE4MzgwNSIMk9DAP8cbGthXAHfpKtwDZIGN0FXHpSd4%2Fbxd15zDcERTxC7QQUDU1iW%2Bn%2BLZPoIhkfMLMAeexwqEvm%2BgoJbxiUNdo9kAVmI57rvwIAQl5Rz10j7eKW0B%2FL1uaiq%2BE%2F6O0JzVTOgX4I%2BJElqc2NmCps7j0f07MzwNR6PqozDXbWthJTgzV7cSHvaqhY57BtVLati%2BL8HbFitYWSG12Jx77PHUUBxDzSGApVtgjT49Cwut0qp6qBk2gR%2FvSseXljjyPkCghU%2FcsrKgAwA4mNInGNJkMMrhD6pFtrDQyBkGW8jgrK46pxJbmTGNArWu4i5uAHI3e7Qrb1089Y4i0D%2F%2FgMFfxj6s%2BISCQm6h0JPDRXmJB8a3nzdN2WdNKU31T8rUHRYLUWJLYfzjQqAATUM%2BDwOSlmR9u1DpHK4j19FCb4soeLM24ktN%2BVPMD4IUsiuUSuZ39nJxZis1jD%2FlwCFxYnDY%2BFCRBlmSP%2BfTq0DsC0JntvQUHhINDCIH8%2FH2%2Bm2GxI2WTorezym7YEPFVmn3oCCfzqIVukbiz04WeOifOCNVe%2BRlrC58EB9oZsJgkby%2BkPo1067600mMCowE%2BCTjG6EishKCsdTxEnU2UXMffI2HkJJj5k5CAPAfa0tUzS4HZTqO9KByvndHJJIwi%2BmTvwY6pgFQ3q2QMc%2FUYjsFSmvwID7%2BCKZmJCXe9f2%2B8pv%2FyLvOZlTsfWXgBQ9LY4%2Bdzs2GbCJSoOoGd3bjpltv5cXez%2FtEIr74j1d9ea3DJWAwBYemz7Rt5cvEX6e79KlpFjZ%2F20tDf8%2F0BjEA2MjhnEsTH%2FF80IKdP86dBA66Fs4if7ymfD%2BB9Oc2pSmt%2FeHyIXxfh%2Fa1sZco0TuzFkfe91XXbUHNtwRZTWNu&X-Amz-Signature=72ab47325b48b58386a1018800ce8d7826f028c9cdd6a22ccd9e206402e18db6&X-Amz-SignedHeaders=host&x-id=GetObject)

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
