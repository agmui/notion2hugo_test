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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SGPECMLF%2F20250227%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250227T110652Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDkaCXVzLXdlc3QtMiJHMEUCIGBdjTIOT8F6TxCFuMSl1toRhjnG2KEAg7QNGnXeM0V4AiEA1axbhx7p9QyXhTl2OcJtnDcKdXhkmpAre30FzwJYfjQq%2FwMIchAAGgw2Mzc0MjMxODM4MDUiDMfdjtPfflhtxLXuLCrcAzjoiJKq7ey6oZ%2BW4FmWaTdAsfIyNNTrWIIOPKBdqTm8WL3FV21aRKzqWpFqzYiGDkbJcSxp0ofrBdC4pSvDkGEIbV6vXJYQDM5PLwGFTA5vuJ1gtpXYRVyCD26%2BVF7YBc2bwJ0pjTZyCUbaMn94jCrIUMICTJWpQj8QqLANgncXTkZCQwsV6%2F0K0mAlF6OhYdPZOWydf%2FAeS66ht26dsM26kOBQbrE81iPCt3mAZ8aE70GpNnb%2B8xWWMEErB77saPuAd%2FpTofEG6DlVwynv5WRw%2Beaa9KVGjvrk3UoXxgm9VrOnQSRmeDmTkFx1WDjo1mMx8emd8LfeEEU0mXNADcOuYgdJ0um1RE%2BS05bpYzQbAQrIF6MiDaKnKBM1c%2F3fa39LFxrKwYakxIKP0hc3nfIhoX%2F71s3Z6Jldh7gderPuZGskg2yaVmjOe%2BZZaMiEn%2FTwqG3Pl7%2FwyFnuFjWhv1I5tH1XZvJ%2BtFyTS5M3%2Ff9En2M%2BX4dfZRHUFk5wGZqwaBXt6j4mJ5fuC9ra9reg6RyFpLwE3ssH%2B%2FkITVuy34XEDsI22LpewEnph2ODcOwjecMyldd4DzVcabDoO5F4A9EqWm7Q7Dl1XvQtDLnL14oMllAQy%2FlIuTJ0OiJUMLjRgL4GOqUBO%2FuMKJIO87jKpvaWc2BW24rwVpGyiXqevQCeoslEctS64uFvhSDvuhkN%2B0R0ea4Vi6pzcVdtAkgvNF5Nn%2Bs6KLGEJgOwZIYdcl%2BSIw2JY0V2AY4Yh25N0LnR7CSPgwiU1d0u1r3YSkD4FnxARmY%2FggxpFLqEuZ%2F5r1aT4kXrJSrEsVnN9BbREq5Y6bMwFaJq5bn6hQfZCkvrpPvN%2BwhuShCgSQXg&X-Amz-Signature=c7a4b35df175ed6a8cb32805f020eeddedc50493abda286673f92a9592904991&X-Amz-SignedHeaders=host&x-id=GetObject)

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
