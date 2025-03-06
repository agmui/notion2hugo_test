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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663SXWZK2K%2F20250306%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250306T090846Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDHPPSo2SOyM4iaYUNAmP8%2FKqgb4yPvMbtrLOX%2BjT%2BG0AIgQnjtY9pqoAe9tGmbZ1tpTAc2lkvRZ4Zs0X5C4UIhDkUq%2FwMIKRAAGgw2Mzc0MjMxODM4MDUiDMOssonyAr6Akhk16CrcA0x9qtP9PzD34Y50%2BlFO3h3cL7Mkk5inoAat95gDgGqRAtX1%2FQaJ8mGM3XjCiA3nJ66bPEcwJuPK6vr4EPRLJhXBF0ebZHbBCCdrR9uei7APkrgSILVonA4PYHHX%2FAzggnJITZt2jBAexJlJ3zjlUTUYN%2FcjJRs1eDrW044l298QGk%2BSPjC1WKLmxFEShhxJqDgHx14Kyyg7FOFyBtRMhUcrq03XQ%2BaBgvSpeqcqTUobQaIo%2B4jhRMwEjeoZnCyjjwWOQd9E6VwikAaBXleARDJVUQgNXJZ3ZqcnUHOnRXC9AuYU1e0kzbPzf6D44N9sVQTUltOkQ5u5HroWTK2N9TrJl7SR1utK1FI7kCfcNhk0QTuib%2Bwnwj8e2gws%2Fi1Gqpk9Ch04jIrzKchdsFAqZs9EWl6bXV304WIZ3y23RosjbxSiPawzP9UlA6UI5%2FzniWd8aGGeRH1xv8dADN0NJgTbn86b1dX0YZo5E%2FabVrF02rwjnAvCnJeCVkRdczDIM4g8UXAE%2BbJhjYau469o530o7hatqgAgA2LusTRvZy%2FlOcp8lepB2DCWxfZLdPc%2FNQQvNB88OCQrrnghy58Vg2vgtfT5pMDDEibv4btwevoAujNGC%2ButFv8G5xRiMKe1pb4GOqUBbdiuHTa2kGkQNtOyFK8TspZiY01tn7TmRFAHlRyXHWZqHUFIMccymTZoHoFk8WaLZBjtG7cd5msv6EB35Ft3rV5XyaKUYqU0bUvFDtX35fvJj85wRu75NnGUncThK52ZWzKDvrn1%2Bi%2B0iYUAJYvFFxSpcpwyd1pdNvxKBoOqHzaoxxym6yfOaY6Ypu1vdmmUo1H60EKXuCsOThWGdC3Ed%2BjVx38e&X-Amz-Signature=d1c7835125e03d0d003dbaa319520818a2bc731bcec7938514592e1b4e5cc48c&X-Amz-SignedHeaders=host&x-id=GetObject)

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
