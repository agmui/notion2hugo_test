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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WY472Z4F%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T081312Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDl4gF5z1Q34PTvvVzC5Ml60%2BTcou2YnZwflvUrVwPDrAiEA45M1m5%2FzOfyvTNQAO5p4I44K%2Bv%2FPKq%2FJgFJLIUvaaU8q%2FwMIKBAAGgw2Mzc0MjMxODM4MDUiDFPdkam8qllMPL1qXircAx22%2FGmA7JQ5iEEEd8yx%2BimwPts0r5tm1zC8vmVn0an5uDuU9I1EZ4NYEqe28qgMb9CFRd64vmSmngMDdO%2FnCX9zlle1A3cDtd2jHR5HKlDDmE%2FIe89KApnviY6WPwGKuXxdF2vf%2B6wOUW9GDwmE2xeMyyNURm%2BPZBZLRsV78QP3Dzt%2F9GzF%2FemkMkWST7Nygx1qFN0fh6ZT5rt7pn75EJFDnHefeNSW4f2hJtG0UbLWHKueMHrFntNP3s3SDMCGvkNs81m2Mqnx3o8bw0MtVVV9UkCqetwXVOziB5VwYaHECHpxZZTtxyLDPNzjUPhKJqB8uTZ1sDh%2BMgTUL63npH%2BAGZK6jWNjDLnQWLYpm8xIrkZQvA%2BrSLyvN7OxlEQY%2BFMr8LnYOhvCR2mG9lKrOgN6BRBwsG%2B%2FGz4IdlsMaYB59%2B6pPsJgczlLRDykC%2F%2FH13j7ILR2l5taZemqrv7UscgP%2FWkXmcB%2BIysodIC6H%2BQyaIykrdz6B163%2Fva0R1ilYu93GxR9oJS1R35VBLmccsdcpxSQu%2Ft81TpSv5cqwNUeBEWTS4FCXAqV%2BC9Xfxpcrh7ZMCtQ8nvPpg8ObtR944e7xU7mb6icQeL5jlAcFvGpJOPuKQEMub0lh%2F%2FZMMT48MQGOqUB36mGUp%2FBkFXgq7hho3rH5NzHsmDAM4pGMF0aYaGJTczWRjUbDSNXcL%2FjwSviUzwkfiOlM%2BY6kgAMbOFmW5CPNI7afN4xcust89ryWyHQsLcQlEhuUKR%2F%2Fi55Ddq5RrUNoN5td6oPU6WqDksJQkHEucQFa7tzq9%2BFKUnZhx3KBJHFHA%2FJGTfqXJRL4u7sIWTlkbjANud8kzlFqzWsn%2Farf6A8q1R1&X-Amz-Signature=2ffda27e134644a0730c154c24bae8f536f38dc4506f4004d0a0e9c9de1a3416&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
