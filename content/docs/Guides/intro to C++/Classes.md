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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UT6X4KQU%2F20250204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250204T110148Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBIaCXVzLXdlc3QtMiJGMEQCIFBWqh%2Fzj%2BxGhevz3W5FI1MDqK9Gy2i8VTk6ypYtb2SDAiAdr4moPtYx2vwRzAL%2FtzuOnsgLGoa%2B226agknMd2J6Kir%2FAwgrEAAaDDYzNzQyMzE4MzgwNSIMMm2DzlIdf5E9KPgVKtwDuWgBxPw%2FIPQsy5bGSqT49xHtS6Q9zziifDd1yhyD5PSok0KL3N1yQD%2BXi%2Ftjscp2uEsj24iT4AhHui7HZIWnxY9uiOYiieZ2GgIyqOKBEEH%2FNkTiJmIJZZRvMmioWPp6HBeytBAQ6%2FfZBtjGxaxqfmtWA56SUymqD5x4CSd16bdyWMir3Y%2Bln9fCN7nEzdh6MsgLFlDLs9T2Sg3aZIyFaWDjeGO02zubZokDS0guz3AJpUSyhZbhH76kxF50G72r%2BU859apxBBpO3nKp4HAeOhZ3H8y0iXHQKDUTlo8OdNqiI9WnqMc3sbdB7Dr%2BKDWEanMpWwBFsVk%2FeHjkLPRuXDaMVoR9uNLfBhytJ2dPKEgtAh8uPC%2FuicI6L4eFSN9qpTyBETtze27iDqKqpnhlDv0K2CQmiQfAeEN4ovke%2BxVOAhv5POAEdlwsJg71xX6bPKiTcDeN1J7qhQ%2Blv3IvbWJEDJNydNUYnpUHokpr3q7VFQGHSVY5uaR0pQPDJpqHSXoAKBERMXrMD2%2B2dSqXgtqsUDLFDdoqBMkSdFeBDF7CEnKPQDDRQY3R9Cgkyo7705eI0LCIoQcbLqHhUutPQ6hQnZRdsCUsvvx1Wy%2B7ZMEhftTs2QDhpRouok8w%2FsuHvQY6pgGUInoqpw2ZHm%2FlAleNf3hNtgF8lUrYkzy8lXP8Vki1XOK%2F0YFC5SKhQItPrsoANUf89bKSDGg7XcCLEhmjEmp7Sq5N1M0%2BfshLtMEbCxp9pq760k5rHgYlYeUfRT%2BdzvcNZ4mubwoewmlWzRGpRmE6h6humDcbzlZUH2o9mElp1rT7T%2BwPbD9cwQ0XNz%2FfDuPRKswxvXj3dnWcZC%2F3wnUHFs7OdcMm&X-Amz-Signature=9a88644ded8c9f57f8bf4adc108300cbcc2965cfcaa3a578fd76c228d76ca268&X-Amz-SignedHeaders=host&x-id=GetObject)

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
