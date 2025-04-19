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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YEEMVM6K%2F20250419%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250419T040937Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDnZ65acSksp0OdJhfr02KoSjMtPWHjC4HbIXbERKRWYwIgPbwLZyet1vcuTEZnRzvejtPYDU7qVn5JdzMSvKjs2vgqiAQIhf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFqgjUtFvNo0a65JeircA2RvOve9o6J9Yp1vbdkZqucmktCerTO1LW5ygkizIA7vLgnuah3RgPIp1uZcmn8lUsasfAyTAfPUHNoBIxsjaiO72C6Ls7eHdl6uhO2jhngxrOXDcfuETIErD6vNT6wwaHrnesqWAep8vfa2JLtOIKBKPR0pTAptT2QOOjDKUuywFsfVWcDSY4KeX3IfPQUm0ne6zaF4WSDM0NZ%2FK9n%2BqLdcsAzkrEHyjnjlX7ZnCLp%2Ft2PljT6eajrFaadmb9Xy2oi0cmf%2FeMpKSDVox9OdKXd8zXYLHIrMgYPTjDbZcsDejNf9rsra0aVSxS4TpJ0VCOJjP4e8P9VbiOY8t8h4xq49vzsm%2FRrNdyv6Bfkch3eDBkOadnQDWXEqYRGoTXUA6ppu9gXB0BJoY%2B9uS%2Fg2hcE6V3V7PtijFXxEFhv%2BlDULc4QGpnw6ohNbd17PZIeUm8Z8juyLzjLV%2BlAdhq0Ke8QVqJUgMADPtbvTkOU%2BpNHdwqGpzfXYXoPYWAfSJXjENJqX6HNPCxNnVCzG7mZrh7csaXp8wGvL4JWbq1aWJA1iuCiHW9k6Suk318bYedoRZJhuTsSZd9vFWwnEMXCfaDAvzEexzX6DLAktuGo6QDKvVXqfynI0KQU%2FIe4uMP27jMAGOqUBve1Q3i25ii%2B6EGiv2GpSS4UUBPGJHEs6pOQHWZkmc1UXRUk7UcZuYh6FmMvDJG73V%2FQ3p7qbirBKn%2B%2BmXZobeq2zTpxZ8zU7Uuidw8BUAwjaiehb76L%2Fm8ls48tajogLWYIK3xtdhO0XIJREZ5xIlFt40jvjki0JxovS5OiFGgDqCzDr3tMyTq6gTWtDU7rO62qRJgHL5XcrOfG9z7W8g1ezVpj2&X-Amz-Signature=368a8cf62ac43604f56d5ccfeb33e0d15a4bef1bf7588041c8abb7dfc54cc3bc&X-Amz-SignedHeaders=host&x-id=GetObject)

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
