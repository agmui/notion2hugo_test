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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46643I5NQTK%2F20250524%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250524T190141Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFIaCXVzLXdlc3QtMiJHMEUCIQDMUrV%2FLI0tflY24JrplxT1bumE61RuMA44QeGkn%2BgRvgIgbIWhjHuYoqEA6be5qTvw0arBfKgCE5oSmNgCJz2dxSIq%2FwMIGxAAGgw2Mzc0MjMxODM4MDUiDLnGHSb7dUQjYZiGXyrcA%2FKOSUFrTf5T%2F63CDrpOCBFpmWQzNZ4NHHFelGvPF5CNE4TQstHT6fosT5S%2Bg2L59I4q4HQsVAHzgkt5GHWmJ4MaMC4ldulWOqvLzahHHQAgRPBlKREXOFh1DlvYjr0Qcx6tAG9nqfsS1pjtefX0g8OD45s%2B%2BenkpOH7QOYWItUMsvGHPCKrKh5kGgpdROZBSM3IMOunRunWyS3US%2FlGHDA%2BAHyIr%2BlqedtQmluGKp%2Bfvda%2B4Ta8VRRT1606ff4GY%2FgJs%2FmuKROTbZGqwqYa2y4EaePzTUUL2RK9Mxfqn0RyZFj5pCNFD3O07q3TkX9CiCel%2FRqsboxTEpoetkqVDFBqWjlNhVnM3dmKXOnl7HK5CFl%2Fuk%2BsC9oJPdCiXDqASVMswBACWmO1BJVDnWqIuGM5dYUXMmcXBIbv0Y0wy4PqMf6iTvCXLnd1qIrPqvJlmQtRQh3NdIEOsarhKYhBE%2Bc3%2BaTu8k%2Bu1BL%2BpffM%2BhGyY90bo7%2Fwm1WGCiX4VbAi7yawA3SN9Ckb8ODPQqi8rsdD8Oss6vA5E9wzvJhGwwTZL%2FrIX0tRm1C%2F0Voq%2F%2BcK6qJowSaPO6uKjqVxALYllBOrceqWbJggWywTG5oumu1vi1alzezXiVuAVtNgMIWWyMEGOqUBjgporzi%2BIeQhryDgdY5FKqgkcHFpFO5Wv27jgwZAPAiAVAeLy%2FYNJuq3wKNsXYrCwpJytsbFYAV8SfEpQNuLpaZGgXX6UzcBMdAvZ1dVM1F6kFPJCGgMcTu7Qargu6RI5AV4nSt%2BlLNW2fNKktTbxI1NHN3dqhDUbT2%2BxatcV9U%2Fr4HM2SG9MflT3g0uWKX3VA03bsQR6HdyQLN221wshOzVxjbj&X-Amz-Signature=188e68abd4427e2fbf4ed72fcae87e62a1613777943de6b5ad2f306559679685&X-Amz-SignedHeaders=host&x-id=GetObject)

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
