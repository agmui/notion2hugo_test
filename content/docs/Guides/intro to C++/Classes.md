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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662B2E2RSL%2F20250502%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250502T190703Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEEaCXVzLXdlc3QtMiJHMEUCIH7QDwZgAEx0jnsJ6EdfeSZSDWcpBM6Yzg1WP6J8gpflAiEAm8cxXH1rPagO7h5T5TTHOCUaTTNm5yEFigtr3nBWTUEqiAQI2v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLXS2vcHesW841tlVircA3YaLCg9NssmC7G6sX%2BMcSoWkmdJRFn7iDXXL2Clq7UFticsWjhhpDpgTjl6btHxWllVDjDH1UdAaSM%2BUmW%2BWLXulmL%2BXZpL7QSWBiJZCic0400%2FW3vEKptiFpBroEXSQKXA9LCwk%2BPIPvEUC3QuufQApOp2pjaLCLsVS2k1PCe1t7cY%2ByV4RQmJEaIX3LusYXXoruZzigTOfJFrkcbmjS3D7p7o6L7lKhMVLQY1aRKpplz7bMxxcLWibHFW%2Btwtc77uCScgbAS9hofJKYLIxxh0XpMcTvLeRGKRtBvW08RxD5nTPDZgOCrgEQ%2BVLIM%2BoKKf29deM8YuuT%2F5RNxTlhs2W8zbPSkVH2cerQzGetKs4se3KXnHg8x2pTLhPf0lmgBcYoYmT8%2BN8P16yGpzzNAjdeymi74NJldw63aY3%2BvY8MFQqchA8Pxb8j%2BZwmBpJEX54A3ubvKLMBW8QSXusiYBG0cshOb8vRrb%2FUexqL8Yp9rnDwty23CrRemSghRpA5LWDNinL7YGKv5BFCttlsZ5FYZnqVuZbIR%2FPgtS79khrqxhd%2BVkT7qcnlflSyBjR2OR8ZjFcZMAM1I06fRN2wCnDuQNP5fBscy3jSq7D8djIXJzqGqVE%2FSwqqQZMJDl08AGOqUByzumT3GAZ0zrR0t71ge%2B2dtHozevinD%2Fxh8TdZXXQgAsfnnrW4I0CRrlrtLsEuL9Gar0vaDZWGfuu1moE2%2BHLtxBleeGfIEqA8bQKKopIGE1jH5Y2XN06Ssr3OrWQvlIZNr1GImKZVA1MHXV8ruQ7qKqB0HO68jYGiKOj06QuVYOwSxVDGwIq78XriSwhrp5SBlLMoi0dLwoAuuXeZ5mXXiJnlWq&X-Amz-Signature=f7b7d8b015eb7d79d538338a2166710d05ba7c70c2275cf840a9768687597355&X-Amz-SignedHeaders=host&x-id=GetObject)

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
