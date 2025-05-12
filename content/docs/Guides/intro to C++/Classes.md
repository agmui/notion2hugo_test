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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WZZA5L3N%2F20250512%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250512T101011Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECoaCXVzLXdlc3QtMiJHMEUCIDMFF7oNfgW6BKOoZ%2FeGvuXcdmJMo8qNDIu%2FS8w18pQCAiEA3iRlevAeq5%2Fkh%2BjC5VtJGLT6MxwsYYGSmEbRUaJKzPcqiAQI0%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGJ3JEsOCY1Mw5qIfircA%2FYSQ2TFM1nv7dTTdwr4jy2M4%2B6vP92bhvxqLRpqSyea2CAx7KwRl7VaCqh6N%2F3YnA7G3aR10biVdpMKx2Opp%2FYsBDAA64OvuGcnweVU2bWqDucPcuEyRhgwYjA3kF4MnMFYNDtu4yLOayGB29gbIsvF1zhbWy2danzpYqCyNwdl3DkwyXtxvly8P4U%2BgptHVX9cPs7qdHzUYPQxC707x%2FlRogsuI9u7AbdzUgXi3N3Sr2Zsw7fe6XcOnbGXbpRnHf%2FP0pzfwPPOLmBbVG%2BSnjEUMkQjuDXQ%2F3fUWRSRsyb2W36lNNmPGKt73PQV1Ds%2Fn6s32J0lBiaoLfZ9xZ%2BB2dFUtCD4dII%2B5%2BGzJtPZr4CYieJvDEWoSdNy2UY1y1a3dBvVoDlrqiYoJrB%2F5LDpQ%2BgtSHF01IFiYcInuP6XSheVvJF4cjf5XnulEHUrFC930t9eDJucXzyYKOyV4c8YrxdKmr32xJSL4Sp0arbgxaQWn1KKDuBgGIA7oGzE1uSwhraCVecnVpMyC6uXkv6nPS866mYJ%2FQGPAbKzBvybbigr%2BnCgwpdbt4pTWB2%2B4K6zHJSXI34ZVwolTdzb5KmgdtHnfilZkmxAJ98ZLbKoz8%2B7U%2BI18TKiCt9rikAHMKOCh8EGOqUBZvLyhqrfkL70HvsLkhdkKglEBqPsgb2wfuEWv8nkmD4QZDyKV%2BhbmRipcIuHxqKFQwgmfhbGyV1Bs3E6FP7Yn1oVElQF8yubBPnTqAVcABjfYEUFyAK0r9WWvEhGSoAP2%2F7uUk2fngH69gi4zJ1Y2WZ3uR%2Fctj9CUFvIqnDfmyqTTNnTs6BxaTn9PpoU%2FYKynedCF1wQg%2BLMee6HPQUx0Qp6vhFo&X-Amz-Signature=17edcba4ea147b932010ebef263ca2c00c9fba9f2915a160a06e0c7d939fbcad&X-Amz-SignedHeaders=host&x-id=GetObject)

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
