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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V3B7EN7W%2F20250614%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250614T004058Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDcaCXVzLXdlc3QtMiJHMEUCIHY04An0ZlNN21yy0MVwPG1TdNHLx7CD8L4bW7qCTqcpAiEAxu4MajL%2BRslH8ltyzGMADHuC25LtL4GkqP6uvKBlAcIq%2FwMIIBAAGgw2Mzc0MjMxODM4MDUiDMwlpXW9lfc90pz2GCrcAxor3RW9oD5x1QOFllvoHXkpBmwLvjQ%2FCzruGaqTnTyzp3Nx0oRbWhc89pFWOMZxGNJGKpN3mrabZBoniBN3te%2BqvZj4MG0Z1DZISDItmpwHXZoXdjDwkKs%2FX4Yjwr%2BGMbxSKIeLm%2FVvr6LccsQGVqjfxUVOn18WpM4vWGgpg4lsHQDSg3DY2oSBG3aX0XJx9RvHJsq9hbSxeOr7Ki6Vbz%2B7qcSRfG0UMbc1pnXyJM7BQjVEd91%2Fo6ijWWFS8%2FnIBij3C9meBEC3FMni5E5P1YtSZMoU0JTp27OyG%2BDzcT5mKlmvWqNDkN2NK1b03EKtf3sBs3EDGaNhlHmN6yXnomAysOcYr%2BjlEEdN9PKb2%2F%2FKwXLfNMGf8Q%2FgPh6tiAWuyjAvc7%2FQsrtlrqTm02hLnkjUkSH3EayanPfMm1ISxIVAmFuIsTiA%2FX5PUGmQ1Eq9UPap%2BPrgi7oTXYp2HbqMYKWCYK3JAAdQ6fPVTFjfuphj40QQByatrLYB1Tcihd1QuuUpG5g30FG8GojK9Xd%2FodWsGJeU%2FWH2gM2%2B6bipgnxvWZIeTH%2FenG79YGUoI2lGveyN%2B5TKcuk%2FKJJyUGr3mUXlGoY%2B2JNccSywLhxiNmvwbFlP2fWzNSEigGM%2FML%2FbssIGOqUBxR%2FBKir%2FlVZGt4gytemU1WN2VdCN6QbJbRPZIlojQrpuOnA3YKlcm%2FRvisV8Kc8nPfSyfPhKi9l2FzSyBYfb8vQHoNNpU414VKG3YC7YrjlgFiV1JV7GaHCpuhOe8M7kFFVuni3cBVCcJLPMqdPg6nJTX0Lpxnv3wIh1atFxVyhoyIMnqDBTtaglj4r3fEqYYmZI87%2F6ySe2NhfSL4cMunzSXvsb&X-Amz-Signature=b2cde05923d7302c5b2b6f1755e47530a4b879a3ecfb44fe2b0e32890cb2ea52&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
