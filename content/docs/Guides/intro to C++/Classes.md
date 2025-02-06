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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QJWCLGZP%2F20250206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250206T031133Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDgaCXVzLXdlc3QtMiJHMEUCIHoQS8DXvZGoY2as2mMTXFkcmTWS4ok8Cv1%2Fk9BEw92sAiEAyrVDSsRrsN5yM0%2BqDWqvcQ9lcYsQ%2F5kB6nTMf8CMtwIq%2FwMIURAAGgw2Mzc0MjMxODM4MDUiDDwFweVIg5abATo7PircAx6JogWV0%2B1Xt0fY6bQQXC9SNhBJ4W5yAO1%2FHdXi8G1ZYzzp0timfBlf5qlXQu6GQmhVtcdaIMzfmSM469C%2B7NIVYobYVwAlG9Q3lTX0pRXc5qgJN9QJeB8W8RFXHNq6MZKpCClbAT2h%2FKsDktalTmn9EBVLkkYLYGBdTEz0imPPJnckJPnWuQRVju%2F2OQQS1t99T%2Ff2ltQNH9JpSXhNJ2I%2Fy5P9CaSnLNf%2FluJ%2FaWTslhBX9TZr6Hjf9Qj7gq6Jn2xs1U7viZsiSvE5IWO0prSxzay9hwDPSpxnSFFsnb1Ky2U4NOVcIBkIwKSgj8gdKxknTsJfEJtbqE8sB1pXnb8lNzK0YsTbU9fEVzN3yBQMpoOfZrqIj%2BN%2BoOPDDjdf9NUX6IwE7CQIaES4mSC0tGApuXztzDnKqdNmQTb8PEpC5zO%2FOB28Zzq76R5pgaCDzpD2Ugo4AcBAnWIi5GtrnZ2Gw6hkHY3y5ROYg10KbjL8r1CUVCxnzZOD700cv3WJC0GvsdAcNACTAmoGpzyn%2FyjHtCUjlYr%2Bn1G4tMWaUX50EBXOrrU9DsUe5u3UroRTZZBqnF8Pi1XlR5T1CWmo%2BBT6dKbj291QU%2BIq4V36EzLsp9AdJcEIM8ikdK3dMPfsj70GOqUBT5%2BmLed2c3zTFj4cL2U5ZbTIiLU3RFuslCFGYJiz8e0NrKBya%2B%2FuiTaB7mnV%2Fr0dNp%2F%2F%2BRwGT5lxreQYmYT9KED5CiuGH6khxiGiGdtxVQV3XRn3nqF3bm3RZZHnso8c2btQUXq4XiaHpyfQWzdOf%2FY2Ak8igN3vY2%2Fsp0XQAvH2I7Ov0Z56aemXJnYI2BzCV99vfMtAm4bAA4La%2FwyMXjxXOwMB&X-Amz-Signature=1dc5dc174e6872ee3dcafde1d94af631e52ee203ab8bd8e0b17fba181acb166d&X-Amz-SignedHeaders=host&x-id=GetObject)

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
