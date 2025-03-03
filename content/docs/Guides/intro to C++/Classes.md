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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X5NUVWE5%2F20250303%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250303T181021Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGhWgU2FyqVxWWmSGBuNPbRUNiQNGSEEejtUANKqI8lkAiBinmnFsSLJoXlNAcSIVAWscqoGTeEIao7Ea0mpyZZ2VCqIBAjb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMC5H4wqaJNUMLYh6dKtwDMPd8s8Qu4pWcj6%2BZRjLISnZVYHfdkJvhDjSKnmmlc1wWOzDd%2FYym5C9dmEt0KpbWJKjduKwB5gSmk%2Bn0MTJP0arr1CIBY1B8%2BV6Y6QyRTbVsU7c75xuTvHaeqa5W9RR3zyZZMZoY67ulTKB9jqyC3SNeKfS1QCC1GsjA2BGlINW73sC9SwxFptFSsfsnyi%2FrxfTldBIXiXgBFkHGyIvizi3ingTr4n1s7ZyS3OX28fnV40%2FBvD1ZvvMIbKE5yb4nNcp8ebTKmJZVzoZEbIH53CMREK1Y4%2FwXmcTvD9BduUqjYXbMjTWyVmSzxm%2BKpom8YWi8Vq8L%2BFtIo3DkyzvcDSYArPO17k%2BRfRqlfXq%2FDcRW0ZxCtp39TJ1RQLyU%2Fb2YwanwMVZAlnNzxSBlTxsTElHoZC7yRMXPY4xVARbuV7H50cUHQt6%2FNnBIq5kH7rvJgBi%2FO0A%2Fe6WHNruJEfCYQ6Mr2gAOGxYnKp8QnF%2BnWcP3PY0XNMSUBVBjLTVpDKc8IgQ%2BuM9AgWrESDfoLOfMK8r29yj31yVrdtpB0QAFxLX%2F7GWPa%2FSVWP9uwKU0NKcZtquys%2FbdAHVZ%2BYAY23UwTWE9irzTPnCJw3MiCwTPrCL6gs4L25Gmk5I3D%2B0wytuXvgY6pgFqMp%2FtKH5PohVEV9QsLNVUk8LOHLTiUFqlVYZWlCEZykuBT1bVLJjZwL054pn4uL6TbLojytpL%2Fvg%2BMQgX9OGyGeVkYNcG70hEL302lvOGZBFoFItSTLu26R0szUNrAo%2FN0kPUOxXESDOBJ7zFxds1VNZSidx2I1Z9QixlYgheSb%2BBJSHVS4ujdGBvyNutBH78C4iCkBg9kddrQJsX54fIup83kuWK&X-Amz-Signature=1a0552aeabd895943217227ec4874e91131c46a001297cbb3e0d33fdbe45531e&X-Amz-SignedHeaders=host&x-id=GetObject)

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
