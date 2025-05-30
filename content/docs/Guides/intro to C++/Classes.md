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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QB32NMEK%2F20250530%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250530T121529Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAFHjTYzscdrAqErDM9Tf3QAkkxAvrIpuTGv4LZn%2FyVNAiEAu6F4BwfQHBij61LzdJaWeDg%2BGhbRKuZUOLb8vtA0j%2FcqiAQIo%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLHebBjnWxH3RCQj9SrcA2rMNyokIzVdUhSrJNcB%2BmCvcFl9ws2vT%2B%2F6R2sIHQKhM4p1RpVHjxhSZtSpz4WHva6pKNskqlTBV7gvFaxXQB%2FWqTnsOxZFz9MR8dEVinXsYDM%2BNAdheHHpmf%2FOG44jR0rl4LcG4s3xIhWctooBntjN7zbEJHI%2BrsPYz5qRuk4RbnhvbtYtJnK3EDVfs52ohrMi50vX3b%2FXeS9mN1yF4e4eke%2B5kvU8nvTJYlxnRCiZ3eVSLfx%2FjBWgcp0d4jFMBkABFiJTKczKaeICxiTnXFt2S05cTVWYkkyEzUFOvLI%2BfQSuD3QZtX7tmRN5wiSabzVBHTEBorZ8HSx1wHk7suBEqj07m2Lj52dtB3ktmHoCOdRdRda8AxyFypNJ10mWvYsv5vnX%2FzqdGFo%2FSw%2B52zroKYJ%2ByHKxsDv9mxXUCS3RagUjdfwTzFU4gzwmVfK%2FejRspfFhlnWiTZaSEIpabvxnCbhYJLQZX3Zno0%2FYqRLPju6Ve9cnLuRBtBDdgS9zFqvcJu%2FNspomcEtr%2BPUb050%2F4h5VVjjHgogs5Mila09mAwQajFeaUUi94LZIBEbESkS5ItxaXxbwnEqS%2BSp4jNTjvRfFAyw9JZe94kcxUP1qcAHdz6rL1zEsSyqbMJqO5sEGOqUB%2BUxwNHygb%2Bj6XbvCbX2cdFDqEWkyKZscAwNPRwE812ugduwSMFImmbqyPSak%2Bv4glqfemDJEZGVckey0mHU87ORXynhPKYpXWjLMXuxqzauwotWOBQJnuyogqUTJa2bE9FymAAhvZjZeqtwI1%2FoFyp26BcXHArqr3yH2TGtlQmesl0aeheaackhme4qAhV6mXaTex3vQ6%2BFtvPKTzsnT%2F35zT3LN&X-Amz-Signature=7aeda3934161f333097fb9a11665ae360178afd638fbf805199914bc38126984&X-Amz-SignedHeaders=host&x-id=GetObject)

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
