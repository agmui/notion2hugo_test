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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y6JNF7OJ%2F20250414%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250414T070920Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDaWpoDyVveCFkQa%2BK05oc%2BqAwHwXA6Vlo%2FRffCzF5jRgIhAO0jVLpZGqBrRm697UQdysuC6y%2FZzCUEaPEDCTqnDO79Kv8DCBAQABoMNjM3NDIzMTgzODA1IgwThtv%2BKnRRgsoQh%2F0q3AMhzxzedqNbJYuXNdG%2FiSQhZ6Qzg5K0VcNqrmr1jl%2F%2FMyLR6HGB5PcxfsRzdCxTaId%2BCXuwYwctzIJ5sse8aKtbmSgxi%2FmCblcwz5bGwg4O5gV6RpHvaO3Q7cM0hSeGFH3EUcBE6NDtMBa1XBXRj54XDa0VssdWWcAidSkSfFwSadCfoWneWEYA%2FiAt1vMRnu7l2ZkzZkHpNjygQcJXc9OSdlIjlsXhEYYE3u4%2Bo94MyGj%2FvDhWtlLfKjFTgbUHIS5wrqVxJT%2F34%2FvbDW2uv3iLZqP6wkUTDWzIW0z0Oh4lUxjNl2u80EXfM4MW%2BOS%2F%2BCGOj0MYMAUJNNCrxgdZfdU74qjZnSQdnrPgIXBcPXmmoIVcZs%2BGbA2sBJG%2FfGS11iOG0l3WNBokPNajxEw%2FhnqTK7TwfouYurWrQa%2FHwCK1xKMWsStQNuOOb7ewNv43Qm1%2BMT9PF6C0hs7Imo6Jg%2B%2BP%2BHWVoc0MmwXLhQxd3g1OmDTasQ5eOAda7%2FlAaUUYoY7lfCGpDpZfUWRivzqI3GmeKwQSkcR4eGy320CMqABbKsH2PCNg2OgSTQSdoGxXl5qSr1QvCnqMuQseL4tGwIjjNlR8aeLitKamzXpPDcDYGgBsOk0ZvvfCrSizmzDQ4%2FK%2FBjqkATwTgA30U8egjFoFnYbpge%2F2o2P3txAL%2FEjJ48IOP2yhmO9jPqQkQ%2FdHabHajCEqU9Idi3DB%2B0LsOqrY%2FGJn0%2BuIWcDZuq3WQQZKmWr9wPKT41nwUlYWUbyMUsv26eOsqXmagLL6TGRGsbi5GB3KIKIcoqO5heit24fKps7jK4Zy1BIk%2BwKyv7zwWbknx2r%2FoL07F8MDV%2FqxBAD8NdNP1pTDK4ud&X-Amz-Signature=5adaf86394b1c0e31490c624d65ab264dde319892d8a54d22c50cb2566b43622&X-Amz-SignedHeaders=host&x-id=GetObject)

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
