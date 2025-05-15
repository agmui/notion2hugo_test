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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663P3JG5OR%2F20250515%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250515T081229Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHAaCXVzLXdlc3QtMiJGMEQCIE7NF5%2FkWv3L9FVmkAhZRLGuGNTR%2ByEs99mGnSHljajOAiBhRHbvnxSh8v8SG95Mj3pgmd85zzVyqTf05N6AwEVwEyr%2FAwgpEAAaDDYzNzQyMzE4MzgwNSIM5rOON8pky0iyAvG1KtwDd8UBBNeRtTAvOOXC75nv2zr5xEBf4K1u1mPUzpTgef%2Fs2wiEKbNv1kXOEP2Ju3%2F9zWpwcLabJ8Zwh4hw1st0UBBankf0WAeiMV3qYiwVJriXGKKoCiPXYqZjXr1vXGR7YHZOveE15cZKgKVR0YRtSledRmr7Vp0E0wT6AWjWOOJey%2BXVkFPwrON403GWWY6Cg29I3S4P%2FoAnyug4JpXazDdJOCoVCgI%2FiZKbH8D9LKHNcCrcQIz7uqc6BBCKxHBo5Ht1IMIe3%2B7qejCTk84wrxBCzQ0VyFjkN%2Fbboz0gjg5bMorthGahFYNywnSiM0mpjdsfWhyucGktwfd9ew7QU%2BKNaL%2Bln17mDB5vVpy2yLuZFDb9UPjJnWFV1za%2BAzwDO3XHVbfym7fUJqdrmFtp5s2EbSeEZ9C4e9lj6V11v1VGPJD6EPJ0NtbxHDyQ4RZMBCnruQH9eYrmt4b3Q3sZ4G%2Fx8TBVroFXgULsnX0UKNzH%2BwY5J4D1%2Bqs2f1XmoE8Xs5zgl3XbIskagejCOEYEKLLNZL1vFLVHe2WajQRzyfEyZRNJTsAtEj2ynGt0Fjroyg8xs29MfUIvDGIpAt%2B%2BKQofh%2FMwV5UC03IhB5Sg4NRB53RfHKWLRKiHWsMw%2B7aWwQY6pgE%2B4Eqha6ZqiBAwf%2FGDYaY9ndaryW%2FUxlrhSejCn7m%2FDm3qMSyQfvNxPzO%2BRrR9OIO1JtdI4Z8Hf45CzNSPk%2BKUNt9QHGWzVXjVhxtnALUUTgQllNlFUd2kGIr%2Bp%2BI73QBIfoip569O7LF8bGjrp0y4kHuI%2FmOaHFEg0zs%2FbpMYUTWESREW7nLdFqoHcUZTCCrgKHUDgz7B5SDE2bV0kMHCKB%2FjU4rG&X-Amz-Signature=7d0d2673517a545df46d3fe0356e91ee6a2a47b43724ecb4e711586a8f5af99d&X-Amz-SignedHeaders=host&x-id=GetObject)

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
