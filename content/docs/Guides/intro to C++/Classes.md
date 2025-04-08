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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W4VEPMDI%2F20250408%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250408T041026Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIE1FKlheQrBs2rlBEPrwMPtaJKd7%2BNQzRLj7qqMK8LrPAiEA0wQM6VJe00oUL%2BqctS6WgIbCAt%2FNDYY6%2BraeKeFMizQq%2FwMIbRAAGgw2Mzc0MjMxODM4MDUiDFhnEJS87oD8iQSfDSrcA5sNVZWjEwb0mXZMnsAkLK0%2FdDnBvFJEHunAQBVHAMkt7FNLSt5vjwI1RMDItG52AQhsX5D1s0jNlo%2BTg%2F0eye2%2BlzYLhlKET8fThBfVJVGKsWG%2B9qyjxS7g8eyMNcW5cpA0%2B%2BuQleqiz0PHnnVAeXQZ77WxdmsmNvX%2FzAfxMA2%2Fg2R%2BWn80myVl5dpWb%2Fd2bqF9uSbOV8uifcn%2BYywNLnSaS2DvyB6lL5%2FcVRcXFWh0PdBwVqFCa6XhlyC8yy2JagmvCHmNBwk8djByMCYEe0SetBFYD0odEBBxN6n%2FCtIOo5hdj81N7FmWptbFGgek4ehr51aSbeLijQ0b5H0JIYx%2BTDcJ6rC7GExWmYXRpNH1r%2FHHPlNk5CKsrHiLNf0mpt98UjelWwyGLCm9twQNg0IJjyTfuJhSVhEo5zYrXi6RoOOwySKh11RA6vhoD2%2FZ1MQQAu%2BhPfURsySJVpBAOrvDRoHp%2FfTGxd%2FLrj6kZ%2FcWgtbGoJmZ5t4RbhK6Dsb%2BssOyVOj%2FweZxmFgRv8y2CSG%2Fd%2FPmPSJ%2FVrrbCIKLSpsY0PhynpPSCQKMmPpRKI%2FpfK830%2FzDDfo6dBAbiT0ziByEcUeUrsQOsAdAZAWzOb%2FJjMJqSWh7aESNrdpTML%2B40r8GOqUBmF3yzjoMoixVyiyOASa8gPc5gH2kpgLFFJm0v%2BbY5RWDtKk86wlQq4LiAmU7Eo1MyZcmWa4AB2RBrn%2FpWoZsp1M0xGDv%2BsuEZ%2FjrP56RTeuHlRMl4nHAOeAYkmgWeYdvghG%2Fu6m7QdseMg5jOoe4E2GxoHaB7kU%2BUUiHfO5uOn1W1DLODKKLfdB6YPZSholG%2FbNJT9nkzBCXGI%2FkPE1bv5qTaAX5&X-Amz-Signature=c9d413598fae399846d14fcc8ff8589f1a95a8a580add4e7980d7bd5361ecb85&X-Amz-SignedHeaders=host&x-id=GetObject)

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
