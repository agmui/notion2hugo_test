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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SM56PKSG%2F20250217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250217T090921Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJGMEQCIFeSDgetbIND0D9vtE5Xj7Pkvv1zitV05bOi6aONZPSZAiAksTvOOO%2FHtlGKdZki%2BPX4ldwmjoN4stXj4qmIPbfk3Cr%2FAwhyEAAaDDYzNzQyMzE4MzgwNSIMbIFyad%2BS3qZrTC5yKtwDcLcadI198kAJ4jHj3yJDT68UDzDPepDWLTy6KI9d4flKpvfq0yixMaIfgrOV%2F%2FAEFMzb6AZrdYrSJ9AXwnUw80mKoyqeLg75XuZbPbmcbWJH9r6pHdhlwF9lELbjDU6t%2FEWanxA6T%2FdetHjeXaVK0P%2FYT%2ByjH%2FmTnqQyE%2F3xMB%2BK6Nk5lUdeLJ9dr6%2BMzDP%2BX1zifmSChXcoZ%2F1PICE2ZJErJ3ucJJas%2FD3VOyI42mQwE5F1Caf3LlqKJOKtX2R%2FUFNcX862%2F1gvsHX6AqIhiE80xf7JIXxjUkow7oozXG%2F54tX3FUZa1NfMhrTusAXQlYc%2BCVW3Ym1eNEAQtk4UgPWzI9DKT7FwKDbQZyRgWQgjDgG7%2BFGD0si1gIhmfPyZate0E7HuhPMsvko1V8clNPR8H1DLOzVp2iwQKvqa7x7L0Ee4uMGx%2Bb5uiabOMCz4ehmctcaNi19%2FDXw%2FmUk%2FW83hKetNfI6Q%2FZit1YHV54Xm19O1XLEb0yPQ8jpF%2FPwZ4PPwPjOrcPJ0gpY%2FesGEkTGO0YWZcJtWq1Uw%2F9YNKOaxqsQPOBtFEp14AaaWC8iuiOBHc2UO4aq8u4PrLLakvsxX4BwlwPziUpDSOy%2FsAFDc70Nj1lk7FMylw30wnOrLvQY6pgHGned8eV7ilE0HSMUn9heVabbFXYQa3kUvFwpDQazaiE4CekVFAbRj8ayJY24aH0B%2FXX0JU4XQVgk0At1ciqkzHdfyLzLYAajz4svPMoTBkng7OLH%2FqkuZIcN16GH357BVM%2BBcRCNDSnltcKtsj1Swqr2imil2Kp0ldLKVvhMmfkBcFhOuM%2BsfyuyZyLIJh2ZhkvAPVm78zl83p3ZnWyLd2gEgF%2B8e&X-Amz-Signature=627bba2e26110c76a30fc9ff2b2ac67fbd3a0f40d797bfb2185524d5cfb89f6b&X-Amz-SignedHeaders=host&x-id=GetObject)

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
