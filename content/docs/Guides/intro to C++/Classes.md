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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XLIPQ6QU%2F20250214%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250214T170206Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAUaCXVzLXdlc3QtMiJHMEUCIQCq4frY6oJiCtnOZNehOpUIu0xXMV0a3dJfshLoUPq6KwIgTg2h04btpalQBg7oi8i9FFKm47GyDa%2B%2FvPPKUDGsaJEq%2FwMILRAAGgw2Mzc0MjMxODM4MDUiDNhOFllmew7u8ESxQyrcA4BcI0igo5LJbD8FH0Fshkg85v%2BaO9ZOnAFc9wzw5ZFf8RI1be8eNKtE5gfQj5Eq7EikfMXxWjiqxwKp2QoeHP0Ljc2S8bou8V1anOYTr3y0SQvose2%2BCf%2BseN30bjpe6V0X0FpyB2HVHoOYZ0Kj4cF0X5irY8UcOqxa%2FHgUuB0e4sreukmWl7E9W7Jb1xXaAbQeV2hHab%2FB48yroxE%2BKkbLVKjtMNGCcUWxOL9Lkp1FUtHuRFFdgnsQwMkOVJwkZ63d9ZWG8fWbvob1fDx7CL0mU%2FcYTaKMwaeJGH%2FxWkYc5WzMxiED4v5jUz6QB%2B7m4sXAyTn1su3Lqw4Ra2bKVPLK1k2csbYiMkJNe2mJjGeKUvyRxrU%2F5V5EUWReouu2h6g5a0huzbgWuM6yX1ssHWm25TlrO5w8IL1N7XzL%2B0IiTLh4b1OQFUCQTVFhbA2VBlLC3JyQ6AD9y%2B%2BYi2juXZ%2BpVyuL767Tcl2gsbpcRBmR7kTiaocrmsTFD2XQpcNXrpz5JVun0ywFKQgocZoTdKBNsGA%2BR2OyCAG%2FVW6qqYfL4gpKXbJLR7pgqgEwb%2BsHutet8KbZVLUWZIMpxU605JQmDbwAWZVvIHT3oShG%2FuJmrlIaM17SV66mKiP2MJTrvL0GOqUB9DnLw7DjunEC9qVLS4pj%2BZGBPhkrJVwng4L%2FF%2Bi4YfULFv4KYY%2BbmWBd7cOAAEtp2gclAA8Ec2WO7SbuhLNvGnblIoy7VCnFGHal1WN1BYvdJEygWHlB%2FEn7P9%2Fy%2FQ7w2DJzDmyHSx1slU49CiuDnDlilsmOvWP45ROElmaW6zUe6HFknhhIFaWTxif9mZ7ps4IE%2BGGSJ3RS7jNYxueZ1Qg%2BXshB&X-Amz-Signature=21418c7bcff01bc1a902f7e5878e9c3b1d2d94006cc35aab3f0af8fb6a85fdf0&X-Amz-SignedHeaders=host&x-id=GetObject)

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
