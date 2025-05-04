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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YII4XJR2%2F20250504%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250504T131648Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGsaCXVzLXdlc3QtMiJGMEQCIBwB7z7LGxY%2Bonbgp9K6%2Fe%2BQcHgUa7WDScdWDYkyOO%2BIAiBaqsDx1xkrRDFXGOHfEddCYlw8MxgwSi%2Bf3k9m49bF9yr%2FAwgUEAAaDDYzNzQyMzE4MzgwNSIM%2BZXE0Mg%2FYXsYkU%2FVKtwDAYNwleZ%2FKEHnNMrUULYfdxmKh0vMbBXeuTzeLEnijq3gdHHSgSjGrgsbOMjLyNJDHAHrR%2B8yArz8UbcqStZ5yqxWRkf%2B5g5%2BH%2F4spPeQtGz5MI5GOoPW4HriTM%2BKWS%2BI%2BiQ%2Boo0%2FZB72zFjPqEyAUmNF%2BEdphMgjOE5zWHqggj4WIEoA%2FGSXC0ynuXvP1b96ZaTsqgIIvyb%2FxUtuk2RJ0akIY2pXePTqhtVroXm6pzHMAWRbDliOBCr87ddGhX6XJOHanQsT7T3vWvjBvXVWVtyoDeQno9FBQLz%2B9FNDGmaIVh9vBVAY%2BHoRiSVHJKkHFzCLMu909EnJJI3qG7noh2S%2FrawNdbT6u78txPo%2FkA0LBJw2vmOLGVWZJWQ1CInn4U%2BkiOVGu8TyDmOk8w0REO48WRITRcK0Qpp7VypI7lpdgbkb3WpWBt%2Fnm%2BkYRQ4KQVRMx8Lr75%2BnyRzbjPA0kxXM32neUygtF%2FaenLEnLf3w83iI1RAAMasXleN%2BHJPul1aYBOxGg7MsamBxmmvPLb1dFRT%2F3pZB96HvWyuLSNeM%2BzPspitl%2BpLLFbA7wFlbXzc59EVMfjWkVSHZ%2BqkJqJoI94ZPLjpf9PF33SSzA2WaCQ4o9X44OwfgolIwi4zdwAY6pgFPbc1DfbVdKK0MBNg3cY1djgg1cfmged2kVqIu9sv0bfc2TKE4eKYttdayKPQf7AXWxzxnTpGbzgwTtsRMmgxAVbqlaclYeva%2BQR3WBgoNhAJ7SFhCcM7kP2SLvr1VxAcPxVDkI8QoEJFHQY2YOAZal853%2F8BsBCzM%2BpuMMTQjI56nDGN2nz3imEvp9EsGf%2FCTGA3qcMvLRzyW5UIPl2uivpQyur1R&X-Amz-Signature=4953f3e2dc58d2b7c1c0ac7173f559897071b80b13e6989138f4b45c13de1c92&X-Amz-SignedHeaders=host&x-id=GetObject)

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
