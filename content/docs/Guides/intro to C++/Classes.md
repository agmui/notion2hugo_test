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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663MQCJDCK%2F20250423%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250423T190119Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGoaCXVzLXdlc3QtMiJIMEYCIQDelsVdenyo%2BLf5ykKRxZ6JjorcmXhB0zSXdW9Tb0xHcwIhALtJofsSTGgNlN8u5miS9uTzRxqCmfrES5SpuUUdUwyeKogECPP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzppxSxWmQFmXCzv1Mq3AOG9U%2FPdANI6qMF4z9ZQ6529Vy%2B%2FfnmQamaQS44FVPBUz5TU75EiX0j4Mzk7ASOqdoTLA%2F0QJe1MqUbDkqRuzwN%2Fj34bfEcv%2FMIe9t032a3RUHBDWh3V8Z6pqp11SBsHQ34BUhrlpvOsyvA2cnuBrQYE27fQaxlBt6XVdCcYJ3dlI00vNr08dBE%2BuJJfkdlgbyv3x3O8%2B4ftPquZjc9FyC3jXUvsfrjBfYhpmOodPqZiUOb1gdsX%2BrLUj8nH1BlWBvDkLQiU%2BPhnt06zbfMclTTp3bTA8uvNh1p2mw8MnywXkAvzaC1V9LkML2syryFkNPhy5ffU03jTcyko6T1qmTNgK%2Bkuq3gpL5LbrmbIlgVdm2VX3Ow8DVvo0zDkmKFav2ZOjOcBsCtVTpl8bv2R0XuKA7ius%2FdnEKTAuqwoDoJgb6URvhDAqStK%2Ffi7%2Bdum%2BMyyQoppADhCwyJ%2FLd4a2wZ71hXkHwaIIjWdzfMXI9ZHUpu0JHDRFPJOBn9PbIJBM6bbJa3Yq0%2Bd%2F1kfylSFJTROvPlsz2FNNfERn%2BCrXNpPL2rGurQv6VbuROXebdYUb4D5DEjTKn3lgPIwjs9nrFVlSxqpOChlx4bKb6l1y%2B%2B6Lh91hxv3zQnZgwzazCe16TABjqkAdrPjmfHwvAByBcJ0%2FmtpENsktCA6DGQOgfCFeGQ09eDwqTicndWpkZx0Iu8JLP3bbee4aFu61uLKXN9tbXmwy85v5GUIY0JpagDPUjxndL92IKWHTpZFpl7is7yYPcpKtQVIvbcB%2Fig3jD00cznW%2FljohQ280BJi739HDLYBXQ1eEO2SWZazj7o2ovXtf6Tq2nNz34j1ynj9Mn0I7A2UJFD5A%2Bd&X-Amz-Signature=9483be2c4e2c217b0afa3a34827ab27399a95abbd13836a789f31bd09708f1b3&X-Amz-SignedHeaders=host&x-id=GetObject)

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
