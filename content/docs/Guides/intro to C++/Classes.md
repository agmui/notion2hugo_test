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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TUQGR7LJ%2F20250425%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250425T170732Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEn5Ku6iXXhWp%2FLEHDMDeO1GIbxUfWd8Fkg7c3XD8hjEAiEA%2ByQ23Mjg%2B%2BOlIVOtlCQL97kZ5Pg07ah6PVDrChGTUPAq%2FwMIMRAAGgw2Mzc0MjMxODM4MDUiDFLQxbqURQ0lp8jeKircA9dY1bfSNhGiC0GJtvqHJBqarc4HLdx0CfDkzgU6gsTzrQj02av%2B94uVayvBiWBo32FXAwzXyXeEL%2BGRDxJeaox58wba07b%2BGc4eY7jPc6FMIPQRIBTetmZVEMWxx5Dn%2BgzusuglUwkY22I0QgYUQ0ZFEGtoQh0jugM6MnQ6GXvYXomkbcyU%2BGkrj44A4V%2BgApaaqIw%2B1UNF9BdtouPedV6x1imMeIwPfn%2FnDNs5VMcWGz79xk9119gsyw%2BmaZlc%2BzvTjsyI%2B7b7miVHTh0HM3z%2BpBaBfEsOhn%2FPUXDRF95mLhk5s5oBCo13xl6vpnYYWjRbs7IDXJSHq5DbBH90ssWm5fjGsrP7VG89OWNU%2FXHmmqSx9XfXT8ZC%2F2pT4xd4ob8fu6CkJrn7LjVfaHOFamd2woI7nTurpUEmCXblEofKPvhqDbdpLksB47PV8nCtf21SCG3fo9wQC4QcQSCH15C7CSbAeLgflEQZRSP8lFWx8JA%2BVix%2FbXeI%2BTXBnNryc9aokVTlaIOenF9vB7Dk1YcGnMaLiRRKqInAEEAXXGO6SkpIO6jF1Dy9BBIlHmvovdO48mZYERhv6YRrbcwXJju38WZfw5eS6onmA5aLRp8i2cp7%2FLKbaCOrigVmMPznrsAGOqUByxvSTvBtOKvZoCvMS8QbdPZnsW3TtAVUYB1Y1bKGFxjmflvcdeM2e4CyCWqLAS6BBrRRJGMfjRdfiGJ31ZPEKk4S8LOFaOh7nkgJhGAd8NM6Pw0P%2FbDVl5cT1PGrxILytYD40NzlK68TrP8bSOQp6Sj5Lzz29gVZmU6rRohKWJL8YMxD6IGSYREdsm%2Fi3U%2BXkLIVYmji2N8m8vVw%2BdCOmvePeGuy&X-Amz-Signature=62a223a6df2f6c2506f29a62242c540241749b729741e0689c10c53686da3063&X-Amz-SignedHeaders=host&x-id=GetObject)

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
