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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662JSBSIZF%2F20250516%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250516T022749Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEID%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICRqmPKbvh8hW0FNCv3pgMUmkb1em6xqCQSGf%2Fa4dYDcAiEAzxPxareUREVNmW%2FncBvsQQRcHSNb1o%2Bd6ETpExKoUZMq%2FwMIORAAGgw2Mzc0MjMxODM4MDUiDAxTS5USvrEIhBpGjyrcA0oLRAZ6%2FQkuMPXjpHuQqt73oXsLWrhXwAHEp0Qmg6rGgYZdXa4WKSgZTnMNEK0FMXLOUXjCam9r3n5QdO6jLYmbiRTnQh5XYlVZy7h6oSA%2BxYBNkY11EkiTYB2N3QonBg20PXfw4ZtjDPudoG7hPNcW2E%2FGq4ThrVipBBGrXWD7kGVOCVqUqye4vnR1I%2BJLbHiIDY30jCgRi3yon3BZApIzbuZmLkIpVbNzp7GISSHJ4U74hes8yMrlY%2Fm2fo%2FuqSI0rnpmeL0cE5snh2S9Oh5PBxpbyz4pQGRiVAviIF%2B9wZgQz45Zgx413Q1ViTNzcwXu2mwmPuVJ%2FA2FOMfaKzfwmnBiOUzFLvkiaAe8n97b8zgJZCmreRkxnWHqF%2FRjrTg3mIMpXTiOJeMiPC09wD3snnvGf4lcml1ZOw9pTenlKfsv4FZW90zTdeHU3hofp4u5bAaJsZpuzwgeMXvipNAiLQI1PELOOqW0yigvAWaZ3DT%2BhpjCsm64UXEk3awt%2BJZgn3Za0MlvFMJryu5CHjbQXlXUfU9JKwIIw62k8d8g54bYjV2WhzB%2F3gckFcmzPFfNwnoO8H%2F1zC6yn8mr0ZuBsZcJg3CXjMjBVUnA3yUKF8X3DVWbViScwXQRMO%2F9mcEGOqUBjNstWCGbPixb8SBl7u5fC1mBzcEUAWlyFVnIkly%2Bs7mM8yYco%2B%2FiXZP7XXYj3jN51TZMM2F0eWBwYA6kqVGbpzljJXMIh29jZLvOKKQL8rJwsOxC8aiPrXTB6uM0gOxTGaC%2B%2BS7xg01D9GQITXBldCaUrwBTQWsaEUtNHXVu9Cqds9X6Zj4ZTb%2BuYyEIAfEgRUtw%2FxBDwnWK4wZQWf86Wv0njJQp&X-Amz-Signature=5dec9bae4ffb496507ab223fe739c42724f880f488481b795070af000366cc00&X-Amz-SignedHeaders=host&x-id=GetObject)

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
