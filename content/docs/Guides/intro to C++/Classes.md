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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UB2Y4QEO%2F20250308%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250308T090144Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBAaCXVzLXdlc3QtMiJHMEUCIFVnSR3fEjJ26HHtehJQPo8ZTMijP%2BPcZe%2FpoeU9CjjNAiEA0fAHAFIQ%2BBI5G%2FAzTK%2B3ZYe3nRmDTF95TVXqau9pG7oq%2FwMIWBAAGgw2Mzc0MjMxODM4MDUiDBuaLIGYyWFvunzB2yrcA3nbtNeGlkWfMdF7lKcKcyuQWkKdYxID%2BWdfEceqpcvVxLVO1HUxdm%2BslWHK6NkxB717t9X7TcjIPp%2Bh9vUuIS%2B9O%2Bh3%2BeBL1BnDyHEk9XOQw60Nt8BsCGONa2qrpFsXJ1uigXl7LIMEQi3WBOBBOBpW2nc7wtQquRK7ypLXxRWQLY%2Fvp9L%2B71WXYOMEImHEEJ%2FExMfQnHOPKd112GoqfOAQtJOLKxglmeJ6amWJ%2Fd2kQJOKPsYMDHb6vrqG0SSwS9teGzEbFvLyKDl3vOZpFp8qMAgm2z0UW1%2FwlQoz%2FlWKq4jNcSak792jUr64Sl05%2FR5gzFovkFMOKLtJvsK3%2BViMdVOXbKSqBfJXLL7kyETMhyyUTtZKRovQe1pvtTDEHETyCatv8r%2B7KjQInKX%2Frb5VMBmuhDBM7hXC2vlxCvJRRZnsEzC%2BuGI8nUQD8VYd4D%2FP0FPm%2BlN%2FTIllbQeXqQUMIbT9P1iM7HlKB25HRLR%2BE0H79aPYgqJhN91f67gPCBafQVE899SiX%2Bs6aIV49QE%2Bfh5%2FHnd4C2b2ruXJYqQPuhEOnIVghCXSLrA1zn8qa1rANOpFl%2BMzEHTReev%2BweZnHOE0wLrU9GSgXDubmL%2B8mM4SQiACDbgiFMcLMIzgr74GOqUBJvmJVkf0%2B9OKzHleKHeZonJF1QPaZDicjwHLoHk4Vz1reKzOqyckkkhUxRmP54%2FOBaKxI3BcCcAyghdY54ysypBSG%2B8YmHdandGn3b6G5WJEWQUpTLUEMXn%2Bt747LtN12Spg8bh%2FoBFegZhQ4Y7cc85ZYpmx1Q9yMoERXVcwTxsicqbVvXQSIJfyWoK%2Fn8NCKQuv%2BuTq2V7%2FvX6MAz2dQY3Op%2FUl&X-Amz-Signature=2582e0ba65e1218320d6af4a61bd3beebd1e723b71a767b8c1b38a3a815abd23&X-Amz-SignedHeaders=host&x-id=GetObject)

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
