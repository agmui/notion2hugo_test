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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XZWAUB2G%2F20250621%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250621T140705Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDJaRKffvP4iQI%2FrbhRG7qIDGgiUkItDK8UGRQTami1JAiBxZqs0sYSh1%2F5bAkvLe8DX0Lc8YNzDUhXrM6afULPmxyqIBAjX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMLXw02Om5VeREwmsfKtwDK2bEmT5vuY9mUUBWRmki0UgHeTLZH8yAU1SWRSTf1eI0mXnyn9XHZG7H0E8uJI78mHyGSFZyvVUuTrLrOrsEPioR8cKpiO9lT6DEAKn5xFGhosiNHy87VdUQKyREDqt9zKjiW7THX%2F8ukYPZXN4EsP93iDhsnMn0jPbNPh0tcfswtSzc2udovESxaAQziRZbzaqCvcUtlF75mT28Vv%2FdIH0n0RbtA5lre5ZIIzsKhpdkE8HyrIv%2B4nu%2BeP%2BhvhOfyECvANNFeTQMYTlT7sSkrrgcisB6xxynnOqNF43pYPsEOR%2BPJ9zpiMYeOPw5Oy%2BhRMDrYp%2BGKy0dtPDC4IMTmInMr0GWBQodoOks4%2FwrQ%2F1ltAem%2BgsYAnz2esVstdkYKToJB52fNp3tULlogxKR1z7MUn11PAfMVVphone8i47wFc8tZuQ7bAuwTqxDmwCUygMrmWgRqkT7lJLkS2j13w9%2FgVGknf8ggCMeWUZBWYBTOnVdr6rg2NNUUOvEPVdD1bDHUH46yl%2B%2FQw5rij2Y%2Fu1PvIZyjjeCF2F%2FQ65SN4Pe5ANpeZiHNSL7EruM5hEzotZNPGth2lTpmaE9PVhWD8AlgEtijMqw5jxZfRc%2BAZ1dBngc%2BxMy1RJRWaMwzOzawgY6pgGVNf1xbOW23Pzo5uwRlh6IMtifY8Xbb2KSNnaTrdUrqIiXS2Hgj3Z4rPHZu88v%2BXQ0MomCZNoQhHBVKig0q7EiNvJPlQWkF%2FEC%2B%2FQ3b7NrxoqrK2XTnrZgp%2FD19TbIG5OG3XwTGnsbNaPDatXC47Em6fEJEp1I30E6g46ZkS%2Fi3fNRKBc9NDVNlb5p5Cv83UvwS1hcSUKOMsX6DJ9Q3BFAuy76a2UT&X-Amz-Signature=ad5b940bdaa901e89ed6c40bf65bc4ddb4b59fe7a00139f1b58a0fbb8f743d2d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
