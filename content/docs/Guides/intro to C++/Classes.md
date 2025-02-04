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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WRRI74FG%2F20250204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250204T131454Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBUaCXVzLXdlc3QtMiJGMEQCIGeXi8gdTBZt5AWkWkAiMG5NkPX%2B7mFiPhzt3a18lJe3AiBO%2FQuKerWQ16%2BRNU6mYcQBd6WW4EwQ%2Ftf855%2F1p7n5zir%2FAwguEAAaDDYzNzQyMzE4MzgwNSIMN7v1uMmesGQ5C%2FrCKtwDwaN4%2BV041EPCBm5MJ5XBVgFXvxp%2Fg4fFvbnEZkDt6R9vAqt1GPFp1NMxAdylYFcoX8kfUKiOqrQpFtUCdTVBUgJ%2B3hZdMmowDBXen%2B7FC2A%2FMf7X9hRAkG%2BN8w0WUc02b9MyjWoKQbEWjgRbFDHbysdJuMfGc9E6bjU4dmxeyq1tPKLeS45mZNFaqpritZji76xBw6TMEZr7EsbY3BbQRWEg88j%2BPse4iLA4iKF9nv5jVNa%2Fd1b3j3Iwh1bMxnBvmfx4waSA2Stvyzl3MFEPBMUaWevvQuF%2FvAdqFtnpVZlzaNuVbdW9WtfGY51jMtc00VZLN2XFwlgnu%2F2pnkAqxZCP1%2B1JdXWGtrfTbfXFV%2Bk%2FhrLt5N1d7muVNlbT7pauJgcyWAM9hnlkMb7C62CblTIe7v323a0QA1kIhgmadJ7B62Eca2%2FJhFEboStz0C6kE890dIBxT8kDdmWWVqxmzXzDYrOsGjmJ7v0Nqur52rXo1iQAAe9YlNsdZoqccXFZ9pKvTnnAqv0prRus8dDMPNP1cjS08ziK%2B79IgYU6IQYqDGNIhuFeMRpgicSt2g5nimJHTgGdOle02gdYZrWm%2BdnTB96bFhVwk5F46yM%2FEL1afqT23z0jFjs4SsMw%2B56IvQY6pgFMvDuzQSjxrgCsnDW2trJ7bC5KsWHdhnrfFKBkhOvm6FttizkThdMdF5u6OqP3pQtBX5YTjwl51SMvud%2Fohw7WY6Ahhh4%2BBOE%2Fbwphq2Nco5OsXOh0NJAnQolf45EVXj1LYB2YRnl6%2BJWi3UVkXzpyyKLnaZhyN9afswBSnLo17zBVsVLuAZ%2B4QjuFNz8TKlBgXx6nXg8NSf173EWCCUXRhF8P01zW&X-Amz-Signature=e0a488d5f3b957c0e6db95289ed34d6573ed1de0704dd295a2e6d122c7cc056d&X-Amz-SignedHeaders=host&x-id=GetObject)

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
