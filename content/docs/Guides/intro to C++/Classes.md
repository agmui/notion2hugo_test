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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VLMTMCZA%2F20250505%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250505T210732Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIC%2FVemcZAxek6Zs6%2FPEgBZRjmXogP%2BjTi7pdUSUCg%2B%2FBAiEAniUY054upQb%2B7BCbrkJVX9lJeNyqcACghv0PEp2XGrAq%2FwMINhAAGgw2Mzc0MjMxODM4MDUiDJMsnKxFlcAQClVMmyrcA1j5j%2BTQL7Txy%2FyQvNPrhrzMJXaR07qh4VrsCF3XJi4fM9IWcdQrnk9vWC6wdglJROppO3dFlGEX3lZ%2BxV8CFqdr2%2FL0JlmE2kFX1HD9H%2FP6jSSQIX5WqFuAa77zCGL3uARYLHpJ0ylH4LkTYYVNw5J8kV6c0eih36LG1Zl0fteuROYDUcbEvKLoYzsrjlk%2F5ghRPH%2B56p%2BoD6DhgvEIYT1cjeYIeFU4bbYElGPNFyDHCQ0RDurejhUl5U4LJ6tOSKUdLhQbMuAB9igj5azvKLRmlQzkSByUvhUMsbGjRmcjwNCS%2FgQuqYbWbYUQ1wvsLbXYDNSPh7H8V9cAcSnwXGQShvYFa1Hwiutmtvm3PhzF2Xo8Gv04o1GKBjWbGAm1mEWoK5t7ccCf%2FKDuqSVRAKpmk8jbFwl81bUTL7kAycUctiEUalSwHhPNqpevc5N4zVSIP5bRPlW72CchJ9cm7fRUqCCGOiBtkoEptiSWTF096iG6ScQjYEP6JQbzgF%2BA4NT0%2FmkvvZhQZkgE6dt3palRwd54B%2BZlg6h8KC%2BrmkfaWajagb54fQeOQ6Iw7KQLuslZGpMCd3Lp8qjV6iCoJiSAwxWIqTPRPgW1PpQB3vqnJ%2BDLFc8remJ8OQBnMMHM5MAGOqUBexApmGWVVDMI2pt92LFQ48LOTPINmjYErhTV%2F4ktsTepwO1iAC6mSumyc5ZOsBCNi0WWF4FgFBOZ%2BrXohxj%2FbJ4DqTXAdeCn%2BwhTC92HhqBw28AZVZe1YnXBLKkeGnWSh2814XokaKWCU2FvcfvhC%2FUzH5L8aUNXDwIwFFz2JMwryNGGMU24JzPFqTF7xUzJ4zQOKvZkI8EQ9lcafYyE6VQ3rUXA&X-Amz-Signature=fe4122c1905b5c59aee86500494c8ad0ff2848d51739c147650d9bd66a55b830&X-Amz-SignedHeaders=host&x-id=GetObject)

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
