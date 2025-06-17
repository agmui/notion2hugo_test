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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UG6BEAWN%2F20250617%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250617T004237Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEID%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICP0KhbXKvkLPQZkb9YnRq5Q7%2FfF2Pvzy99yxvPz0L9NAiEA6pssm56zRNPdAMyZ4A8%2BqkgqmhIVcHDi%2B5qdSpoE%2FVsq%2FwMIaRAAGgw2Mzc0MjMxODM4MDUiDC3Ap61FPUhcMBw1RSrcA491NPUH6Hf5nc41xTwHGrBM3%2F4KgmMGCstraKFy5ZZKMgDMGlZJMQG5gy7iN%2FOdPKCibY54Z0h67ZMj90iKTIzAT%2BD4pSE2djORbw%2F5NxHXQ2sGs5UVPUgO9mAL75Jhra1i9Fs53L5SAeCd6SGq2dUWhjNpsaHRzxCbVtFyOZPnejskk4dj5X%2BByauoObmTArH4aikGCKbUfDKqO%2F%2FNl475iyhThtDIfVj3mz4tTeh4zUMg2U5vA%2BNFIRRFkGf4M%2F00tat6RekbllxbyCkIN3ghTzPughUTkB0%2F80TY4pdC0VT8eXMwlohAC6JlYEgNtgfBPcO24okqCJfLv9g9GMNF%2BXc9yUDksOYhH5S2cKm%2Bj57%2BuP4aymEAMbo8TfXzqOCjkvQvnAhsWemcQgYB%2FoaqWuzRuWxihj93eoo7XRhabeaF9H9OrBUQcyoNmlNtpDtQmw8ttOW1gnRSdmj6zdaWh077Yh9GsbVNqE6%2Bk9k2%2F1wXhK5VPzdYEvA9CshQo3%2BBrIOA1xqXBdIZBeBNXygqWEEC%2BT6KPagrUf67yupTmWrtjNRBkBeLjLCHwpS2FfDFdokoETA%2BZtLpxAhfa8Y90fC8nTSr%2Fr%2BeXc9ikOVBMxeVwR6HqAsEME%2FTMPPewsIGOqUBh7Nv0Qn3uG0oCImKDJkAowOajgClSl70%2BaZ%2FPcLemV4txzKLnoXKB9vSs4ycpn%2FfvmKJg1W%2BRJ7npTFsxn8W2GNrQrpOWZeOUDjwAdCgwvdDONq90ukgM2eCde6eX6TmFtUT2u%2BwIr4v%2F%2FLC7hBeqUs7RdmmCDNMBQG%2F40OtnTfEUz%2FTFoy0kIA6X%2F0t67LfQ34rTKutGJOmAEM4XlMJEFhC%2FI5%2B&X-Amz-Signature=70b0ac7831622086102504a3689937504bd91a6ed7353f6544529543267f5361&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
