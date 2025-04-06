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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666AH4V3ZI%2F20250406%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250406T032701Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD6GnOBWqUtWcuWi%2FtztJF6nePRm1e6RkqHDginMzpxwgIgIgY9KYXWiALyvIrIojEmOUTceSWiIwwPGmYIqN7XZlIq%2FwMINxAAGgw2Mzc0MjMxODM4MDUiDJdpHVexuz6kerCywSrcAzWHQZFD3O3EG28sC7RYA4zTW3VqEjgtLK7WRrDikKuToyLaNew9MXOX2gOWWtTTSCYGKPClA9K5CYJVSGjYsE9R96wSP9ao5sfw8mZD%2BXEX5b5qXtusRWhbiyIT3pYY%2FIqV5kQSykV8NsIEtGcDnB8wdbbudt8pgXc7kPv7a4oIauBS0YBU7CpQAwauQJAoKipMhwzR9kZejYQ7il%2BgCayu%2F5VvRt62ayYqf6VNZTJguGEeCpfJZTD9yrauD9aTXGhZOy%2FOvZ6Pj05ZIOAmzFRJA5XI6%2Bj4xHk0gbv47VA%2Fj5uYytxGmyHCpAPsiQLNVpwOPPPCgHFBMj%2BFnt2oQldlyyZuu5%2F05QX%2BE%2F2cp52PyXH3kC%2FdCS2mOar6LDSoDO6hIeJlgIkdkunCb3Q93L8EQ%2BCPWk7kczGh5dXvHidKzp5I5PWjs8QB8CfQPFeJmn04IgkYmmveMmFCddKfNlfXCjVi87voxRKre068mkiL0uNbG2ZlLWEj9Jz7Gq9l1b6A7KCiVqyK8iOz5NdbxnD14F0KFVstv1iL9ZJfeWZ9XnkU07Qj21JdGbcIp1SOHJYCEVSGBzM7TvDhppjepF7X28P4zdmCiUS9NlWGFCAtxU%2B1qlpFBxdKmOKmMP7Cxr8GOqUBRBTR3z86VMecjLcfF%2BVpxBi%2FTecRawcgc5nwKtmEZSZUIo%2BNk8JDMS3it%2F9EMrPyLzgfXeKoXbQ6wfvN1F4jW2hNPc3O1mkiMtncKk%2Be8Y2O1NUzUpEf6ZUhUs0dx65boOfG32f6v1h2Lj%2FE4YyoH8dxcByG%2FLwND7%2B31Mkjh%2Bt7XCvBjGSf%2FJcrD7sndcIHoAUaSS2nqtrPIFiUO%2BzGAHIBtBXq&X-Amz-Signature=039bf69cc0b91e2de7917de2560f72ef91f60b787a059d2d393f31563f0cbed6&X-Amz-SignedHeaders=host&x-id=GetObject)

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
