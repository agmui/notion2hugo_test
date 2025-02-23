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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VDVBYX4D%2F20250223%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250223T070702Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDuM%2BTLLhhuMu%2Fl71XtA%2BIJ19WXqBkWIhXqPXBP6gVPGAIhALFWtKEhJtzCJYCAkEvL1sGkAhYe3FnpGRC%2Fg0%2BzK1NgKogECPz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxmeJt8bgO2smSFXIwq3APl5yIBMd9fgVUNCVtta35PiSHoIC0xYpZOy9doW8IEl3RXA%2F47%2BUpNhGBSpFjaJE2LGk52%2FgLIBKfuMHa7Ew65ntZtcuDKpetXVWOl1TT1s%2FxvrJBpig5Hks9cQDyapfrhJwW5VrsClvHGC6bO0XPPGQyWKA0DhpNU7SufqWFGsI1K174ZQJbE2Rki%2F1jNiNwL0SW%2BqruupzcPfDa7USN64YgNfj1WjpqXTO5vg0oi2VRtqXkpzZwroP5AYzPoL94WTZkn1xEic28xRQHOESWfbb9amBA43xIvMWuIEoat8q88Ia7S4l%2But1jkwhWYACw1Zg9l3oH6Bp9XL6go47v%2B4fUXYXmexD4a7Sf7y5sRY%2BGOeVzg2VJZ202%2Bo6abGbC%2BMZ0hNMRzNKmLOnc5rWlu8gXSUI%2FVxwh4oqU42LFkxUui0ap15LbgzNiTkKOaN18OpLKghbmv1HNtrZQC5%2FX53f2vAm4jAXRso43hwrX9Os0ZxurPU%2BnXu5VZGUW31yypflY7lMDlLwQBQ5BmroHdtqPf691dJ8Pyi45LBnH3jOZYw%2BSvvw21ppotDMMJl28ZDCfzx7zfzrQzFFE06UWYwpMa4aZAuSZJw9L4A5Kq1RgVMd%2BR6kG7lWGSrDCcn%2Bq9BjqkAZE4XXBGtLmal7bXf0dm6wDGMjzOsC%2FJUirjowhuLgzOmajGSqiP%2FNPx4M6EQhJqsTGa5hjOFtPF8UPENx08K8hnRVDPixSILO1I8PTj1Mu9QplfQpJxLuAWk4pfDD1n652g57UUV7Rs0APtXqMPu0MbI2suGrvaJdrKo78RCcuTSJqQq7lTKPnyfcLs0O899Xbruvrdbx2VsBkwkwJvf0Rm8BF%2B&X-Amz-Signature=3c68bcaa458fece8bf29e1ba44954c1d209c4b2421f6833064817b2fd1bbc679&X-Amz-SignedHeaders=host&x-id=GetObject)

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
