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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662PJVIN2X%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T121535Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD16%2Fs9tZCHriPQDSLrDJ%2BRY8fo3CvNYF5%2F2T2LcMfENAIhAJ3fUayxMeO0KPR3eRBGFwr0US1Hfgd70sGKsROc7ClGKogECNX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw7jWsz1ZqaQPTxPOIq3AMgMuDeZs1lc7XKcJDXXpPMrWAqFrm3vH6xY4WbVzCBB0Hs7q3WJaXq3IuOS63kJnNOlyZaec2xVHCD2OF4Box5cVCgbRtkbw4ZhLGHoHamaAIyBpj3C9E31hGbpHC6QvLKeEYdUp%2Ft%2BB1GCxeWy%2BzXfwvEn6E%2FGMWLW2OouRrDmZIopVleabPrunXQuH6y1pfXo2bUmYu1T71QzabnVPEGj7y3nRe7uWR6u2W2k23BYxkWWe9dcssIwBFMtXDO4sa0uvtZm2MKPWQaH14L19T1vRz%2FG%2FauOpBrhT2wZGXdKReqLUlPk5sPzZJBluGp0%2B2NKplLqo%2B2I9hqJb%2Bh3115TdMLWspcvIxlVTsaNm%2BHlWVRdR7D52c9YOmvVHwkjPWoB3CQA%2F9sHPvehwJpwQCUthBsadCBL8azQsQ4lcozh1VDDtG4CElFx%2BrKNDLjzmXO13NAPF2csKT3M304t6StcHt5MBHEvxk92PrUAHcwrIezfGh3MZvuoguDFhpXL8AeYvHds%2BtbqP52nlBfzctqWftVABXvGx%2Br2RzzEq2nj4KtIRQKloV%2FS5D2EgKjbBZ1YmG0GMMMp74AY2gZwUc2Oo31uxIVfe1cCRVlAewo51QPOnHQQ%2FV1qJs8bDCmmOLEBjqkAfEbFUrNpH33k5PVJoaV8TTAE20Yp0pHLUYqc3D1ZzDyXLPJA%2FydGzM0n8ciuCySQka49PHhr%2BCsOJJ7kPyTYoXq5g5w12fq7NnTLf9KjU0lSNfwChZOQ6MPlAIPYn3EYwmgUrXwowh5eZp%2FRD3fKXOPaMa91i4MNbwBoB8Fa5r3igON7U4rlm%2FF9L%2FAWROfaSSopCdp86gaPmLCryyr%2BkqMFW3B&X-Amz-Signature=41e505e8325eaaa6ba33a347e926bf1490f464807d14d36a9f412a95b68322ae&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
