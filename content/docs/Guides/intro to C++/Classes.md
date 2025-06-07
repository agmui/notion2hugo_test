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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q6CU435C%2F20250607%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250607T230839Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGTxMS%2FuvVbGATiyHJaDvBFm2pjpbcCyUsKfgVrqFNAoAiEAwuGCiGUiKMotZ%2BaQlOjzh5pj%2BHgVvr7HS24wCftmCT8q%2FwMIfhAAGgw2Mzc0MjMxODM4MDUiDOm%2FhJSrZEl4WH%2BnHSrcA57iA1nneVD0RVYiTfCBkEVsKTXZY64nfqdrwNCL2obq09FyERyAFKaHFr4t6rSReIF1LHYpgYgDSFH63I3bujQKDx6R9TqKywBSU08z55yjkUdf3E6rl3SvYl6Xq%2BRKqVG%2B40pj767ev1oINRqXyodYmW%2BqwEbIgFEBltfIp08rcpOr2%2BTe%2BObR94nBsO1TnPIhqf0zMseYsAsgqxfi4XaGSnQSZRivrZSq2LZuyqX%2FuR6aa8vIjRJYxpmkU9tHcTZjLByqr5m9uDeGuGzdxlV16I%2BLazPgsk9Gx4DS%2BsJSRMluVsp%2B8O%2BdQ2We4ZNqRI9DLR0WiIdysgIx%2Fq%2FLZor7fKVdE%2FLVicx11tdoe3mH%2B%2BM4uvMeeS%2BqQAeBCEJkfUEeqb4pAriyqMnRAoB0GUERveuj0Gc6%2F0YThoTBlleIcfiGaevNNZFNAzJlsL6Wydsv4LzlzmypArdGPTL0iN%2FvDOoQKk9r2yz%2FE3Pzg9HKaHx1Z1spf26M1J%2FT6ILnX2iaQrDaJX0%2BgQYC4sNvUy7%2BEkb%2FZJ3d8ArrgMbxYK42cCVKLBorU2QwNucCIV0egSMkCmZuoFDNHGmMy8k9aQCFPbZQZTLTet4aLiQHZz1tiaDxGzn40TI%2Bzl96MNzTksIGOqUBJYX3q304rrcLibzDHuManTbIXEj05CYy8Pv1aVdic6hb5MZwabCpXhU2V6x4CSBNrenQDi%2Br9bDKStaL%2BdUHU14ne1Oy7IhUYUfL3yieWFQAvOYmnosr4vX1cwrnWppSNjKznOOiRLVFVdJVq9ojDzWx1npY%2F0qFW8a5CuKE3%2Bf3TIXvvTva5yI%2FDAoRQqmVzjz4g2zbLY8QJlj1%2FdmP5IK%2B5RPQ&X-Amz-Signature=0d6a58e924d96aa374fdaa4def105d0f29dfee3d0962ac2308a718460fd4be6d&X-Amz-SignedHeaders=host&x-id=GetObject)

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
