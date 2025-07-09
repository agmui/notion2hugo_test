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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662GCLNQ3B%2F20250709%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250709T190821Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC77i59RiCtmCWbjUTKg2PHXlCRRwbJKHf1QqZ3i1HCRwIhAPdsF6Lu9iX0zIiykdiALiA66e9bgoqOwSsOcUS25fYXKogECKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igwtv3EOR2U7vj5QmNQq3AP1i2f%2B9J3PZC9xyMU08b8CL9dvDHU8P5HrAPWkI66DDqJf7Hj0FLuLAS3tPnpuRdJK1PJbuvBCY1CFkXV1OGMmDotfFB2I6zgirpPA2pGdKptHxHcEU5tY%2B02Shff8DXa78KrWVcsGgF8SCYkCXCfe8AH28ygfwMMil1bjyuvQY7kySBO3BwJbGFW0%2FA4dUl1JN3Ygf341wk0b6mLSlWC%2Fb8RS6zfLl8fFvO1tJ1e0b606y0oT1MRcloLIUMgj0znBHlX8cdLQeCcQ%2BBgduPXBvuOpp2YLVombDwjTPVova%2BpI3AwrOsTe4W8H9XgBqGFpHUx7HWTNBw1gTXGUq%2FQxrHFJMHCobgFAu6pjMalUXKw9cALs00yG50%2F5n9jOdDgJgwfZnrY1uNH0mAYdRSrHgeW39TXr8M%2F9mGZlo2M%2BVpn4Zi3vWE3vxLrYnT42iKUfFWlPPCt%2F76i%2FgxCjEUqaB4yMMSNv2AVFC2m8OBh88MxFGZIpYiHyKDNwYDejKfG09I2Fx4E4s%2BXQvk7cQLYFpcHfTIBiV%2B6RGBmiIO6XOctv3VIqyXds0ogE%2F3dBNa9cqRDfBoBQ7XdauBTpUMBIakYtxRjq9YMqXZXdDO2BAHFbhhZiIqgTU0KzbzD97rrDBjqkAS0pxFCtINnfQS8ICCHI%2BLvC%2FqXWVGYLAXMGNqJAtZH3z3kemKx8kmvkpQlLZsizvuONzrzHdx6T9%2BKmYqnsrPx2k6EFA8q3ZvMV1O49xJlH8aave2oV%2BOD6mjcoyyIMMw3PwbPrp7IC0rFijVCuy5are07jVeuSp81a%2F35ABGw1Nz3KG3%2BF5ThlRfgCaJ%2B6yKaW8QA2s4gjZS5xUlFsi1q2kTZc&X-Amz-Signature=b7af99474db53967351820a4bd3c0e1476dd2e4f6b7a6a11da80721f0523e710&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
