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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XGBJVO3J%2F20250522%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250522T041345Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBQaCXVzLXdlc3QtMiJIMEYCIQCPFQUMVxYIpnpFUrDflGjW%2BMYh7WkLHO8L0K%2BWc4jCgwIhAMzPWbXtiCheZJJb7Hv9MzO2k5%2FKCDFndwe8GEWcLEiUKogECM3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igyfb0gHVKfUmcR6Zbkq3AOnjHaOiuKtS%2BegH%2FH87kJHSHR9l6ENFnLUkWGQlP%2B8VQDsuKNGht3tYJi%2F5f7BvIBC2iLYU6nE99Qm%2FMn7awIzdE3pVT0E19%2B2pq3rLcDP616Lzx9D6yQTVc3eExDiIs%2FtpXvm67OISVSoZpO9fo2F2HXd2Dl0uyFPVHtL6%2FW03LysixPPsNwQBQr%2BcwRdbe4sLpZ9jOQFC1CbS%2BhD7QM0%2FfupWlXUj5LtZPjNCtWAt3KehArgn3MojUH%2Fq37kTGT1hj%2F5OC2LSdoIDY7XP8UKm2RLM4BoPt4usOiotPlXUrUhs%2F75TsIFzkumWOZ0TZoWzzK2qBq64kpxld0GqbfG5GDPs1oF1JI4L2H0uNWjUVQTK0mU%2BVcwQcHERAyuWXliIuLJDw%2BetFpv7XuTGqYzuosvxPMnd9u8N5dVo%2B6kcSiOdM%2FYzv3gvXmfI0SgCy1hWTPk5eLyq2sNfvTo6cnAWUABEOIsquejNKaypuIBLVnzNTPpIz4VW0Ye56DoEEtD7RpS3rIK4RjXjA3rLFyd9V%2FBlLOWemsKhkhvU9Fw%2FAu8gDbIkM8LAY3VvmnFRLgMur%2F4XSaf0OMMFg32qZaI1nQKzihQzI91kNlNACkfz%2BZGvX%2FjSk5r83jHBzClwbrBBjqkASeCtc9ZAWLuw%2Fd%2FS5LJcvmxzrFiVVB2U2tJZlTa4WvbvcTh3harrRL2apzbJA1TgP0qn8am%2B7WXcqs3rgdAq%2FAIZMv1UMJiDHCJGiDJR6CRokrbB1osa4XQ4H0TIuoJh%2F1i3M51jbn0zrF1gcGUcEwRyqjDRB6%2BbU4TbYjcfX6pAEC7LZVT8d3IfKs9iRJ1iAP42MXUs6CtaUSo1OaXNWGe%2FH86&X-Amz-Signature=8610b371bdc4a02edc825ad6c0890d7bcd8746cbfa3c1a1a7124c32a6ff40938&X-Amz-SignedHeaders=host&x-id=GetObject)

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
