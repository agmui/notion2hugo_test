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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46647UYKHT5%2F20250320%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250320T181121Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDoaCXVzLXdlc3QtMiJGMEQCIG64eCmLHFp5bb9%2FIMl6CWo92ocKhQJ8e3qQSugA77WMAiBXuLlAg0fwiygo4XI90fm1kCPaT8gRkkrivOxKFpwLuCqIBAiT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMa5wAnV2YqxvCVuchKtwDEsrz29QtOQ2L5y09gNmm%2Be%2BCkJ6FbIBcLBiZzVDetxOEI2q4PNeDCprWeXG2Yot%2BR%2FHQCFtNVRunyzPNxp5GGiHS3P5odyo3xFDSqlB8HEHpcUrSBRRsGU8glTOcyUU1JJI78Gz3G3LbfSokihEJbDiKXpy4NzM5nCbrMLmB9O1g%2BK6%2BVnjB1TfdnIAFRr3Xlmzs2s3nZe9AQphmM1u3nEI3dTr9utRPjhVe40f%2BfxOSN4YrwNvG0hyYePOs0SudUEyl1KlQZ1DR1xq1qCJ%2F987aYyqc8sGSTLpGXUnOig9WUXq8uYsFHoajFVFypBk%2FnSVwaczNrlbEAEQfaQtz0HrP%2Bev8CmzVZRkbcn3nglUfcoRshoZkkn4v3ExD4Gxb1M7R5AvJNiGCGuTHwE34Dp46A9apMBnpGHAk%2FZFRfjFahKB3SFFYN0pQY7hS%2BAmJFV%2FEz18isDJ8ioqh3GNWrsA8BFDAXwc1aSFivOC3aVH9JrIHBA8ioE2ECqGBb09X7dEWeE7Mkm6T1PEe%2B%2FBVZos%2F%2F9De6Jcd21e2mwq0p4TRjAMPMlIz1ceru2H7%2B3l3UA0pDNIzd5Z%2Fpp3qVioD7lTxfpncgT69roIIGotQThCdW85vuEGWePfSIjYwiKXxvgY6pgHpGlKPMqBiPzJ4%2FWEbY2ENWirrDx56pQ%2FNvxclIlmJEoqQCFOSaUo5jKhh3z081y6la74D0rYP7%2FI1NvzGCnCGjPTPTzXo1oVcjLGqiV9yMsJOEzE73BO%2FGLBNZw93w60yKrD9hfGvdTofhZPhTykoTzPHSs32tsrTsNTQHaF51jpjl2y8PW68q0304p0LDM8TkmG1IMLUwCJaBkTUJnqFacn00svx&X-Amz-Signature=e88b4e8079a55b065534ed085cafbcb902d6cb2c70eca6262d02dc8bd779152a&X-Amz-SignedHeaders=host&x-id=GetObject)

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
