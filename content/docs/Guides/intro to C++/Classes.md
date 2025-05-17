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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZYYJYBIH%2F20250517%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250517T160913Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCpGi%2FW%2FMqW4%2B64FI9nZDroeGUDsvWsJE8URkuDh5sJGwIgXX8kT961N9pQA9nPz1lWXl%2FVjiEy8kh8bsihVt1ZGiQq%2FwMIXxAAGgw2Mzc0MjMxODM4MDUiDGx90Pm1EWnuQdyDmCrcAx6NuWBp93fe7KdCw9nYtJWCpLvp%2BPNdcmZE0gW8JDVwCJePPB%2Bb62MalbTPwaCw7UnubtAo27QQZEOja%2Bjdi677YCeOb2z9Q1kv51EtJEKYQiMTZ04ML8ztGb79%2FSPfQQN%2FzdKUfaz1ef974knM4X4aeNA%2BNXXxKbFrjImRbDPLUvt9DwcQSsR59qd7kOZ8K24GqBQX%2B0gueZ%2Fu4r7T3fOEsYledYu9GScguX5sGI4v49uyXMRaqu6JoXGtphBm2r27hbBg6jT2Tn4mv14GBv2FV%2FunXVHaak2yBM%2FpdUTgYtlceZ1MdXdtV0z93Y8qJhn7CX%2BhSkqhbMsfyEe8YnDZv1cN0UM0IFWAHsaPOXAerWVTCYUyYzOvhC1BMsHpLlRT1TdOl%2F22OnFxzLZjM6XQYKcQ1a5%2BRIqoZ2DYLK7HexYx31BaSEA7cYO6SIke7rnx9unEgzCONp2V0r9xH1DnCBmMn6jxSnmdfkjlFH0wH800UxJpZFYgIZUSwTMoBcCgkp5QYNIYcquKHMtyIddUlblRoJ0Pf6DGckzrp7m4BI9COYs1HIMKlsJhSSjLPg0K7rz9HY1Xf8ZsMg3cxqlipGYmrVDrRR1lo%2B9z2%2BVPhgsttrDEVjO3Hq4RMN61osEGOqUBc36J3zLw7GRWJXLBCwc7D%2BTrAmuegZ0xqS1Q9vtNWr3M3pZUzTz%2Bhm9yRy9ObhVPFrCi3UBEQGFNJA2md97eoOgyZrLpGt9mfdXODvPgkidZSkAmZa2CBYm3%2BKACgEfzpJ7yT3vXUaCOej7WBCMOXNLgYFz80AmBpiXye8ae0BqEtalgkJt%2BSYYBilFSnzAAkLjWVoGxlygWupuDgVPstTb8Fro5&X-Amz-Signature=b80c97cd1fbbf19a0d1c5bc9bcc9ea737c670be3115a9100690e1f58419f3162&X-Amz-SignedHeaders=host&x-id=GetObject)

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
