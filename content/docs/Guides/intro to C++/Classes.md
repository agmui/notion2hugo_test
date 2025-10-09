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
  <summary>{{< markdownify >}}What is `~Milk()` ?{{< /markdownify >}}</summary>
  
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XR4BCKRX%2F20251009%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251009T012402Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDAaCXVzLXdlc3QtMiJIMEYCIQCAwZv%2FlpH%2FkvO%2FBf%2FyYxInDeqtUuzQKKxxyJG7tL3onQIhALjsEIdvU3UBV6WgPnbZPcHTJX1TL3ZjpY5ZPwDiejy2KogECMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxFXy4qTvifamG2zxgq3AMmA5PczwefsoNMbAZ2MpHMi1TSjSSs5pQhoiUsCoJJeZNDjmmmyVJQQkZv3qbjSGcezMPHNttdGVkP7WRNsvnh29T4tRuXX3p%2F9xhZmTp8g7HeOA3G5y5aqLnMZxdcz5IIrQmFS8qrPtLFOkVkhfLkLzfAKKzzssUAEYSXYYfdAK14wfuUDehPVw2TO7nhcYqLTAGW7%2F9nlQMACLtnRmXXp9%2FEa%2Fxpt74hl4kXFK3fPNQ2QHvRJh3U%2FEx06w1aa0JuGEnoeT%2BlHwyYa3QAREdNl5e3w52Ps%2BGnKSwizOHmheOj67asEN%2BA7Wo9hdr%2FXrfUCmvdGDxLo9zqPtfZ3R2N0NufH3aNDWksvpM2flZz0nXZ5TvLPOQPM3hi4Y62Gy2B2E1Uett0wKv0woaHzAfEVIU54kWEsrMOTZijILbTcJokkgo8frH7UQSoMQ125pC9TirF2kWz5R%2FP5PeFKLDgRg0UDDMTupDmcsluzqVHPcc%2Bk0Alyo24DNyhaoxIBDtqCa%2B6QPSrm836Z8A%2Bkm8ErLX1wPDhyfScy09CKAPNuoiAbazVlEz0RXVWT9SnKoWj%2BL5ul0QQ0fAy2bHyET%2B1D0yT1Qg9KBQ%2BQZIZ5VUiDJriFELvh5N3%2F5WgajDR%2BpvHBjqkATRM0KYlIMyebb3ETY3DYbQhNr1u%2B%2BVPHtl8O5X66hZYRsQCkiKYqo81s1rxvgrFiQyhzdbJVf9%2FbbqJIRr8M4Sa3J2loTgKRYuXx%2FGn2AqyXDaRp1txeBMP%2B39Pos7Cy1RJOFdVz1Vv4hx6P4JW%2B74S6K0JRN5xRsHe%2Bc%2Baufi2Qr5x6SYcea6u43tM3H%2B5LiwPMGZCim6z0tUKEGGeDWlHuH4Z&X-Amz-Signature=f0cde666d259bca14a2270823f99c3849fd9563bc698b162534a874208177f8d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
