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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667KEPGV7D%2F20250706%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250706T051006Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJGMEQCIDVkDbRRXhIgW1IwpbJbM1SY06DW%2FwzRrik8LLAk3JtnAiB1IfZXlh%2FpDfT8UdtSNlEybO9vf6LcwspnuuVHecUF0Cr%2FAwhSEAAaDDYzNzQyMzE4MzgwNSIMotlicbMjwJgo9my9KtwDfwCn731sWQRa1lnKTgUN8LLfz5pHrh9ujUo5F5KDDMtjJ9trBAmNNrizv1SImwyli03k5hs2jK6gOhzIlmpLxCNxxV1o6Dg9TjWc29mym%2BiI0%2FGsF6Pomj%2BWtmbB5%2F1G71VIeSJUwqZBjEV4GMZzcaiQuud4t%2B4dwQvuAr7zuT4cTtsniByDsIL4%2FfsqzjbghYT2epFgdo%2BbQmET%2Fxfa8Hf156unkuyjLohtOh23lA0dJYZck3Vpqc4pEtHpKuKxwcsHZqyj5%2FNLi4hAQ4ISre0aIijKamKELSzoNrZtAktXtjro3nZ9k7KdIALgjYX79WbIHhrXuXHGyj%2BpE7ilwooNzIKc8dVKHILS6qMv1vS%2BXcRC2A0HsTKOrZmKX2pG6naBFkfVwkRbz%2BhmULRa2OwJwf5J4cLouQpc1BS%2B6dhodpoAwIRUG5pQzrj5pIZ39GVMVF3JmOhu2WRABwV2F0x%2F1PjR0tUKJTqlmpyLyRCDUQS%2BPDtpnte0S2PCJpzOcSaH4KCGc%2FQSDP%2Fs%2F7axObYDWz0hwa0x1sodrfmVBRWQDnxyzkJybCtpIzq1ES5VBM2YgALECW1m5sHnnWR1edCmtOLMMihiyXKTy8Eq5G%2FNI3Y8AfdelEJxzigw6I2nwwY6pgGtFzR3AVPFXsjh4f0HhoFU9bp%2FPoIhQAdKCMqIlsJCDQXARRz%2BCn4srtE%2Fl2%2BJVlg3z2tk1EFlhXZB%2Fls5Jjse9l%2F3YG8QVoACr%2B5bNA5zxzjdnRWtBf9%2FIwexU8DYL4nOwSD7KPdqgbcBGBd4bLcMPGAIGTeOYfMCUb1ovYZRGKOAwJwG4TsSjjH%2B9lgYn2uR8%2F%2BiV2GVYkEKJJqq10WmPoD2%2Fwxh&X-Amz-Signature=d7d9981773cbc526a5622c7604a1088b3ec15964faa665232f7efc3c7e23d308&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
