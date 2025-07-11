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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662XMVSYF7%2F20250711%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250711T081243Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC0KPo8ou2WJjXt4Oph50Szw0sW0Df0sIHHEgam4bwS6AIgAe34xm2smysOB9NLXILmGKAc0xBmf3S6te66ACQTppEqiAQI0f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMFPCMPdo2KvK8L8fircAxPAlxGa8JCMZZBCwjxySqRQFPNRpqMVqNkKPImESrzd9RN67y9IsKu%2BdmJdo2QB5krXNkSy0kRJAFWT73uwPvVVWkMjKvyRaADifI0h2%2FDuH5AnCEj9Bo2kcTBlh4xhha5%2B7p1my8AOEpI9v6JIHJ2GtP%2Fcn%2FEiqw7q9CxgWEl%2FZT90dlNZRRoNmy4QtzKKCFy0VwixqBRzfhz60HuQ8LtcHHY2%2FPFw3154MoMqavKkZ4u6lkcJCFjhr5tZ8qCID%2FSCFUbBzu1Eg%2BWNAcReBaUlsrmWsI2CZXWp5Nm4rLXDtCiNUolFrUTngoz29Ib%2BaLa3kvIwAzC%2FEAF7uQ6QIFWApUM24pQgvjkUiIOsnEg0y2SS1UX54MtSK0EkgHCa%2F37gL26i6gv3ckfiS1qP4ZWE%2Br8LsvIeZ2KvJ0o7WUKF2Jc6B9rImI1%2FT%2FU3WGVb6s2hPQFX%2FsgSVTDCN3Y4erOGKEkp28myLiPAJ83IOVO6Te39VsZS7%2BlwzqcRvir6TjgxpuAAv7eUj94XwLuZ2E0%2BEK6wgKHk5N5cM6WdQfPWp2D0dJvcfCMIyqXxL3yjFIziZZVgemSIjOtMNrjqz1g7lPL7r%2FYYfI54Ux%2BJb3OFdMr5XRgtFGGr9njuMK3%2BwsMGOqUBDOcd1gxepjiGo0wifT92IKNO7Zij0gtsNu%2Fc%2BnH%2FJ5QZMBexCLCOkti4vm1FlW7E3N89NGHO68X%2BB4jQOZulbxdpV2Qa0HoRtqIaeKwQ4FBCbD6yDT04Ou0vygelxM%2Blk%2BeK9n46JDOszcVxv3PuLivp1sEavQ0sQc7mDroUFi6zZ1VpN2Xlhmls8VD0PW%2FSvQONi5EGA4zvhY7kJVmfqt7va2mV&X-Amz-Signature=1c89f1eaf1deb7996f9d12190ed439766e880b6512993e51ba06e82e8a2931dd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
