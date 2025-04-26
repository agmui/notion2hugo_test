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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WFXP6TON%2F20250426%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250426T090758Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDt06TMNpUDd%2BT4RSzn820NduSZh3RmHdC%2B1zo2Xq7g1gIhAJCdZCigKZAOx%2FtM8f9rFSue1bYvwN13L3Y6anwovOs2Kv8DCEAQABoMNjM3NDIzMTgzODA1IgxZ0Da9YjcEfJqcbTYq3APAmVSB%2F4nuS%2ByJoP4H%2BWppl3GvimMsrivWYnPoaZaCKf2%2B04lqJlRYOz4xVzmOe2lM%2BT1kDcsEAOotYw%2BgUv%2FCVrxSXfl7Dcg8AbOdlAuh2Sh%2B3GnmkjCe2ggtyJYuVLevu9oTWg%2F6DAPAzJd6e%2Fmn53cGB3ZMFFaOQtl4edCgkTLKDDZmDfFeusscOhMAsb6OPFLcsSUiDBmE1GWE5xGR2dXb158%2FxWk%2B1YRR8ZmMEniwINJH1hEEV7WomLmpnVs9dj4kRMukLqop%2F9hJaOfhZ6YQKVUl9Al6v%2BPfnTpqLH46OgA7xvyASbg2g4ri2qFaiz%2BgCFeDF0w6oXfJb4Di%2F9cB%2FKslyb%2Bgtixd3wGuAdrn0Y4bizmNONLhi99RBMyPJBCTAKwHmscg1vU0NCWJyVpBGwWZUYvOyywpANmab4eviRBFA%2FynL4CD1OTDm%2BBk%2FKP%2BWp2LRS32cbWPoibSG1%2FfEVyz77S4lAiosUE7sOA2s2K2BIUSaW%2Bim73nT601s%2FJP2XKYYeIs2jFQd3hztywyAWmRZso9uYUBZL2%2BN%2FuuEzwz5UhTyNOTCKcIlVMqtFgYHnhSH2wpMDbJweaFI65gdY0UIN%2FIFvH%2BMQiVwwsCybJ9Jo9iEYRohjCJhLLABjqkASe7k%2FBuz8hDqefnLY%2FGEWAI%2BFawY5nSK5OQVNIfM46IDl1zypkH5jmyHbkducQmbuclig17Dun3l%2BzPRDFhQgqJARDK6z12dhN1poZ29VeolGE%2FAIv0qsO0gPEtdgbLWKz7FVfC7XWbR%2FMoQMVX37F9dQxhFoe38Pxj7TTEQc2pwqyJEy47adIHYYlU%2FEzZ4VryXYTQp3nnC%2BvcEBTVZ0vyiu0j&X-Amz-Signature=1f9d53ea4b65e5edca341b68e99f0df3bc1dbc6048c99d261dcac7844f51242a&X-Amz-SignedHeaders=host&x-id=GetObject)

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
