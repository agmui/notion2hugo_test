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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UDDSASCV%2F20250710%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250710T101008Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGM%2BA%2BNdLzCouq0L6YJnMsaZNaWggQxDQ67ZE9X4sN%2F6AiEAqEbH8qm4CgqvnDYpCrpIEqoQwvR7uB%2F7fFPZu88NIGsqiAQIuv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDM5Z2W0LRhkvAaCPiyrcAx2sMTDm2tUd97%2FgJp8TiyCprKxwD3SltONKUrH%2BMyh9kM4xgk0NB%2FuwR%2BR%2F8c25qanhgYQlAY2M67iSmegCAA7Iy7bdZ6Ce3BrKbW%2BugwQZ%2Bj9YSa%2Fq%2B%2FQnvsCcKVx5GPozwtxbqW9Qw9rGIBhvKdgZHx6HvYKOcUcUaIDG4nC4y2TIPINf5bEjQDdZ4fwTsH%2BA8s1bgNzTYWIdYaNXaMiIWN4HTfLdMt2K9Mh2%2BUV4Ts26witY1bgdEOBQnq76gzq7JNhAsLehdW%2Fn%2FhyVS1q5%2BFRV%2BKVFujZwszsq1iuJ8QVR3%2B9ofsE9mEcZWpDJhOBmf4DxjNrXQ108ym%2FstpJZyC4w6OtIEcf%2BQsEuFHZ3I%2Bo42BAfo%2FLfXbsh6HXiDjObsp5oAu0rUaJX%2Bp%2BrAkdgamyk05K1uTdIlegMPfMDvyH6ozf6jqehorsBXd6OFuQVPJVEVo1La7PqWzJdb2Qc6TdwK0r0RFVlT0DYoI6gfsxgJ%2FzZ3dvX3CdFuFUTMB51vwpz81kupGU3RKzSACjLemLvWGf7BTaFOul7sBHef0LCupdVRBqVHI5JYtOpWHyo%2FZ7mDiXJwmIBVMllZQMAgvL6hK7lTHBzT8Hq6j7IQZ9TiyTQaGd3%2FQp5MPaBvsMGOqUBGoMwHIYXJZoDyBC6Q4u6CxbKkRIDmBsdVFF086NM%2FoEf6BsBfKzmboD1XZxrdAg2IoZU38EdIZL1oAsPQr0B5KG8cYDkgR3q0Z4w7tq5alSaK%2FlTALSzvTCbAkycErr06A9%2FrmM1YLv6eTId9tlUCCbfvXalgUjCrEEZXDsedw2QqgR5qlQ11G9%2Fdb5LZYIBOEW8CGKXIyJH%2BvuN32Us3KIVGF39&X-Amz-Signature=a7657493c16fff658a0ad88e2a182ae01332269b8ce2061bf41feb7ce2a93828&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
