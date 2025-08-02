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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663MKVA2T5%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T132317Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDcLxkQLtDyNzOLhR3AMtrkVVNpFAr1jE0sHoT%2FDHZHOAiEA36UWwmDcMJAYBULrp2UrHgtfWIVeSMOsVQn90w8gdPQq%2FwMIFhAAGgw2Mzc0MjMxODM4MDUiDEmQUf%2F8bStK8DNW2CrcA3CdcfQOGW8y8TJlwA%2FLdSm9ZBMVHE4EtcrlHEiiRwqvzfQsuu9SIj6rlffGOE4yHsSGKeBw65K7disqi5T%2BVVwfxnvrgdclcgSKgyC8HuRyC%2BthEUzV2jcH73%2B%2F1acuUaAJoC9Q4gZC%2BlXtJ7Pd%2BOxd1L%2FObWiCRJnIc27ydKl9xcpFKvmUiUDyIuQuCBKUiAn6T0fg4AgeeR1AcjNqHT%2BZwqlChLFaBODygfJS3QmSEyKFT%2FAVq89A1p6YK1qJT5uOb7kGAi%2Bn4VnelJcLBrndtn0d9dZa1PVQY8kWwP7DNXeRX3vAsvVAjXPJqcISWOk1ZGTTbfUs%2BEVLE7DZ45VjpE7qk3JvFaR0J8RdQOmN3KyUQ85GPy9jkoNmaqXiO2Ra2kz%2B2UBceSCe2YcVwYf0hvJxvZdqx6vGLVIRdZQvJ0BCs8YtTRKnpihHjutg0AtDDwwypmkp4mfnq%2FtfCS8%2FgQWPTe2ktXAO%2F58qEO%2FHYHOqiu4zhsJ1RzKm6JfV5PxcFJ4xxRSMUbOYQkTPbOf%2FT8oywm%2Bsv52GyXEXH45mga75j0eUCvRgpyu%2FCCyGs3DpzB%2BZTXvjhLFY%2FI%2B%2BPFMrzzR06zpqsQdwQbAk4qwlNfJ8RRwUd94RyTSPMJ%2BOuMQGOqUB11uCDeuDke3%2FHBCAGzqcooy3pc5lGPfYmr7z6U4PKtLrjywAG2SvnUVyzBPXzNSiDeL75oYk4Xg%2B30qsN%2FIt7yv5UIsr%2B1CqgPhcfA%2BmgYtoTDU5bl97b7pt6G9r99%2BkM42LtnKn0bQd2yvTWLfAXXLJ8dHly%2FaDFYYBqvnIK0apactUydNcjFrFCp4c%2Fjbb5%2BIJbT%2FGHSiQo1%2B5wU8hy6uXPgd9&X-Amz-Signature=40079627db2094e99a537052522ab81f8ff1c15a7f7c0910176c9cab4405db80&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
