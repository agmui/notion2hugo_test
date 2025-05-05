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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UUS6X5AN%2F20250505%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250505T061324Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJHMEUCIQCW2oMFDjqAtKcqUZzcYzz%2FgbAImAuoJuWXVQpUWbpIIQIgdQYQ8xZo7kocVVmyHbwC8J%2BXYOpx5%2Bk71bCZC3n2sosq%2FwMIJxAAGgw2Mzc0MjMxODM4MDUiDPgfOqZyHdjT37imjircAxLdXC%2FYAkMFMa8Ha3yOoyoe%2FzzFBeqbFNMVDmfFfsVQGJAIEQsNlxaRWNPDK7Zfk%2BCvP%2BtlZSGFNS7HZB8wKhOocvlW%2Fxx%2FkhUJcId%2BaVJVzgn%2FVASnJ87yQgLj%2FHEWmM7lTxRYZlzA72eyP3q7B5pKdfcgK%2FhkIdto64VI%2Bf%2Bhg%2BloMXclU09hjoQBdWr6FdPfVj69LxH0OdGWra8vNReVRgdq02ukUXccvnMVs8cXBQyKffDr6VqXh1xe7t%2B8dTSZL39kPKnCVd7QLlp9y6UlcKuG1pbmzNGDll32mDpdeVpPwkUkQDENqNtc9lBIfQ0UK2xBWNZb0TAPSbyeuKphQK3V%2BOYV0WRy4DD4Q%2FYagvruTQRdYt80mCM88gwS2L9VtZLHxFtvlt6D9Gp5MSMKFyJhX%2BJVsTRU69wWjGCtrLJBp9mj%2BsHmEdRBSYAShYJNsGA8aNM6tDP1V%2FtoTAfDY6FPHbr2z%2FATmNbkPHCEw%2FlbV9%2BCe6f69beV3CKBaz6MMSSpiWMGV6aAxc6q4yhZ7KPplJJ3g3ussPnZ3NLimUzwaA0f1K9IywgfZQBvKxqaXIhYx5LPqTueAfbLagCOg9hkn3H6BZyOqo5rhCzUbEWsrrZUf7efxkJoMNaa4cAGOqUBw031M%2BFkIz65pEVwSSxtX4UHwDli12by7i17Vxvm2TrtitO35PcLnEoKhXHubr1hJQfVwtBbKAC7d925B9lCjI6%2FBFfWccxllJ802hYVoDfY26j0wIcBZmTbRPS%2FjUh%2FzMnljaMw54JnUiklaSIe0q1%2Bd9%2BXkq18T9VHMft2pNj54iFTKwJZJK25FFvuhqt7wHe0eflqz3%2BSnDahCouHSiDERm0o&X-Amz-Signature=06d4c0774981f1ea815a7f91fd5077a595315270a55346b6d885e640043faf56&X-Amz-SignedHeaders=host&x-id=GetObject)

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
