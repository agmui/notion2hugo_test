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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QECECLJP%2F20250508%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250508T061243Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCKmo62F8MJKPPJRpoy0ZNGvDwrD%2BPR%2FhStBiEJL6TAEgIgTR9eAq3HFoaNWCvlpAy0jUQbNtsHJrENzA%2F5HkmkoTcq%2FwMIbxAAGgw2Mzc0MjMxODM4MDUiDKz22IqAodrnR0UgkyrcAxVEQZruZSwIn81AXyrDSbKAyPI2832fA9RmkADKFcsCFCkz5kqf%2BsJaqMwImbfNxB5Wf4vQqgj1cUvxJQTj2laZrLosI210qGKpZGe2bcdL5L7T6vVJa5B1Lk6ZIvP1vmdu1dnoRVm20ZZbuLhDerScxq%2BVmEkgkGKYg1MUkdvtCS6LwnPqH6RdN%2B2Nok%2BViyYhr7HSEfRJipeM0wurLdDoAuKP5mVrZP0AvPEuy%2BYm0OGQNReg9QmgSNvlKtN98J8jp3khXiPqLirUdDAdARrNbop8fvXPrOUHQSdxVNm4NvVHRaDheFaoxVjPlomsx399UyxyNi7NDRWaXuLS3XEMv5T0wBkOs%2B149PEQF7etiPt%2BAjr7rqhmrClfIgVXYSZpWYeR18gM6RIw5oFnV8HBe70kWhrz3Qk228AikAdXmtCrDiJaqTb%2FByirV8uO%2Bcl%2FdATRt3YTlWCw%2BcO9FVJKPWHavPIA8yfTy7nG9lfJwT%2FAx8yzcdf9W%2BXUynNi7RORQdjTWMOb%2B9nv%2BmK4kLxCYpkRnoIQuAoslCa2GBWf2nADHeEbsBhG%2BkUY6p1nVgMNPtk9vKcBoH%2BBAJwYBcDCpHdVq7D6bryFTYZiLWKvvY%2FU6sEmc%2BvguQ3xMMOU8cAGOqUB9sLVm7gC0Aa2tYI1Z1jF84qOz3W7lIFTKJX362wmv7eIHBsoUg9EMYdXQMrSWdcpT3285rGyoEvEPuA%2FIM6P9T8HuKR9XrHy7QBA0Y20VZzaBI6JXNRsV4VYf4%2Bx1mCEJ%2BBxlDjqKTWvdLaN8d%2B1VarePxLaR8ks887EKdbadTHUJMzfzj%2FwixiOeS%2BERyCdGD3HpBDlTP5r%2FjTXdV3bo0AU1fbA&X-Amz-Signature=aef3c2adfaf5bb6a4dd826384965e6b626b29b44ca476c41755a947b19eb0a0f&X-Amz-SignedHeaders=host&x-id=GetObject)

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
