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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RJ4JRJ5E%2F20250220%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250220T190207Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAKQyD1NYYt03sa7eI4jORvLIujwT0Fhzv0rdgp5UP7SAiEArN36N5PD9qqPtdWmNtqr2a91cxacFeaD9xz2oC8lzJUqiAQIxP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPcIFGYafYU8wtt4VSrcA0HT4dcKMJxbtEOTr7oNI2ySbRtFPTM%2B5UDBFd3XvjNc4gNN9vYDIIQl%2BGRdPtXzbhNVhBqZmL5tfO9M18BnDJ4IwqcCGnQzOyIuJ0mMGYZT7BuzEV5Sozy3tmfYmMEOj2pzdh2dZjdkXbsXDOIa8TgLCam1wC%2BTCnSwR7UB%2FB0ASlhU6UBcFQfxrG8GKNKk2mZZrvrFnZb9HppueNutRCSxA1gUfmN%2B4%2FZRJclvQlxmegOpu2VAeOFlV0wHfCT1RRVdFMfbZ8WgtJRveDOYFcYShott9VVAjMrOyHYUFw1c%2FZmvaGDSNEhVn%2BTW0M07c4vQ6dSNiFtq4mlRbYwPUNsODqv2H3ongDByTTQKHWwM2yIb5VRppn%2BHeyKOPBAOPP%2FTFhInX1quDdUXeoY8xlS37lVpV46hYNUVow6RYGO84uVfQj%2F4KPD1E%2BziqTevpdgesyhIU6sAd0FsXQtOMW87TT5pUXBxJu%2FAzeNgrseq5y4gqcQfVM%2B62GOyESnBMkEoFpoMXxH4DUMrTf7IxvfpyiWZ2uSmR6ZCWAeQitvwqunipa1lwYFHSekMMZBRYKWieYeNb%2Fg%2B9utv7u4RKTPbW8ikj8lbGIrXP3Ll%2ByFQtHyB3sG49BOVLvyAMJHx3b0GOqUBLXMl6Izh1dYijy2X7kicYegxPBl7Cslv%2BrPJ%2FxmbyP4ixGN8xNi7r0MC7uMXyQNwpD2r9FnlyVPSVaIEXRjbF9%2FnjmGwVVWm7%2Bfao8F1cWs6iEl2ynyXDnNlioKrHlamghuCy4aab9cnfgJLfNZZFKN1xix3l388lQaVh9ybOTy9Su79aYEbITCNtfOzKl5ewRIBk5UK9IJE%2Fb7DBCML7gRMyISN&X-Amz-Signature=85f2882d8895af23fb941714c7a241174855ad0da46f1ab5deab7f05544ea8ee&X-Amz-SignedHeaders=host&x-id=GetObject)

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
