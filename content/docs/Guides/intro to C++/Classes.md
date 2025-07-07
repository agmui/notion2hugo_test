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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665B6PJV5Z%2F20250707%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250707T110809Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGoaCXVzLXdlc3QtMiJHMEUCIQCWBkJv0D%2FWK03dPJuyWxY3cWp0%2Bt9ThJrqY37hogQ4SgIgfpyeCasCz%2BopovAHBxH4sNzdJtvuCQksAWdWZIxyPIwq%2FwMIcxAAGgw2Mzc0MjMxODM4MDUiDI17XdaYQ%2F%2FS9SoGPyrcAwirRMnKHvmKKw8UPdNKNoOoRZVw1NrB%2Bfj3DvMKm3iytGLjVaGRPdTwZvPKxaxpL314nRzcnyH%2FB3us%2B%2Fyk%2FTxTp4mYv%2BL3Vz6K%2FGkeZsFH0RZG9px6LEy9Zj5KLAzPLjps15aBaWzyEWtjl5Tg5dGiTdNk%2B0lGUYai1Wah8F16vfCznk6amroEhCyKjopDnpFEreaDWORVtlqUKxuD3febtDuZvG3NudbJvi0hMbdrP%2FCZOe2VwrV6S6rZfl930uTHAPgyFKu3CvtO76v1I2fHjrKZcrumG1xZKQHCP44W0PTWyWQXo%2Bs1PtONb%2Biqwlve5%2FDP8lZn7AvIpLUgQ087rvqttoe9%2BCn0qFIHgwey88KdLcvXdSv%2Feih7NMn345HK6dKQLHfT8ADdPUH1VtiFPqsmoDF8FuiMcN54X81WYyd03fUB4XB6nU5OwXknAuXDm8DWKfleaO%2FEBZHAFMqc2pLQqT5NC4hiBzOkn3ba1464fCoE1Gur5uxi4i6oGfJMPbIhd1hodfCCNYCiFasgc2GXDZ3SHlopGH8G9J9Mt7RTojeZBCl55O7e7tBiMTD8Lf8Q1sdMFFGONyKYKOU0oSBgRA3pTNJQgP2KKrV6dBT8yxxQGeY5o9gBMMW3rsMGOqUB1gwWYp86TNxNSGp63g1fRLQigr3q9%2FL%2BMY7QqMXezRz73%2BG5tMHdfLCG68QjZxKiKDV9hOVoz4eFDdDLSGV9ZLEUAbkRiMOxt4rYaUQ2M6pbBkPCgdAsW2q6JIFGnIXFvBMTBAAJgdzfAouD%2Br4OYxQ1sKXhNy1EojWQsnR8wm1lxboR43vA%2FpvaybOdRZ4BQ5GUE%2F2PouR7M9BgeXCXzwaUsX19&X-Amz-Signature=a63b7f90a567ebe45e625673992ad7975605901bdc5f31375297d37b8920a398&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
