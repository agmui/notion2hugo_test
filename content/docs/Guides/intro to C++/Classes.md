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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZK34QAXW%2F20250305%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250305T110214Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIA8aiJunnNPpXhIPWdp0QK0z6eVrqfrQvmXL9txkDLrQAiEAwZMnEpuIpCyhvUvnJQqdnvDSDvFP1ypfxqNSNvnrPnwq%2FwMIFBAAGgw2Mzc0MjMxODM4MDUiDLTigQHpw45%2BD5TJtircA%2F%2F0Ep4RzEejqTRSK8Z31PWkd%2FetiWRuRB68Sn%2BzwSwkNm%2Bc4BCFTv3QIrIFgbFVc%2BYPUFuogzfPLIiDi3ys6mQlP7h0ZFLBzMaxyQXjUu7FbsR%2FKQqfWp2HSF9F6cRDb3XZsH0FQnXcrwgcyJUY9eADbMI4mHQp75ZoYhdNqWfaZpdZMDnlJKugeMT%2BdVZMlY01JYvyd8Z5PPd4NRBBpmlPjXTDVMuiD7Xy6nKpRZn2CryZe%2B8AmrGsLek%2FKtGEmMuoScIov09myVjRBTgYbkrHYsQmtkG%2FD6%2B58nEx0LH5CQWIabHqBFWnDtRzRbQ%2BBEGM5ASaOPLaavFrQZmaPlQQzZpTT%2FuHDVxeQoClrN%2BIUo3zOaLRwePVeDcC4lv80k4xZ8DmLXO0OEuTWVKntfIlqnJqBapfzu%2BxeVhu3uhp1xKNcsDE7BNGKtvyEGjUC1%2BmJkeT0dE0aA7Ln8MZznGywVQAaB7gZb0dtFOcOyZ7yd16ZPbqc4KX%2BAxzErRRcGwBU4lQaBLftDCOAEiFBrXJ9piavYvivhGijhn5YrZFvTpCJhhgiKtF5f5h7eSXS60loYRzDIqu4MCMHC1ClwIJFr4O%2BTRVg%2BrIPX7kkXkuiJUIZVclDixjzFTPMN7RoL4GOqUBvACo6aYEHay4i0FEULLs3rbWw%2FeQQZZM74xX0XN3qvql9%2Bo408CWuIBGucA1ZC1i4X49utwXbmqmncTu%2B%2Btxk5DmR2eE8u7Dd2f8adhLgrpvSkb63dkyCRoKVft2JERiOPUj6lTAjb7rNXnjijImFhmLI%2B05zYoyDaCTRaL8mwzqOvdFe9SNc5Cd3baESLfO5V%2B0lfmr7KXpZaiS7bURbC2IID6E&X-Amz-Signature=000af2a66c67b183fd8233eaaee3272d2aecabb172732ad086e72114157a4f52&X-Amz-SignedHeaders=host&x-id=GetObject)

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
