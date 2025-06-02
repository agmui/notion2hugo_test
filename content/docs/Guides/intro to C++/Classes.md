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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S233NA6H%2F20250602%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250602T110809Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECMaCXVzLXdlc3QtMiJIMEYCIQC0iZhMRCDhpJPjblqO%2B5QuTFIMiA%2FK7smmo1o1Isb%2FzAIhALsEd%2F2uIk2PvV4e3VX7yUQ6EKz5ZGodid1W4lSgPgmCKogECOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy%2FJ7v5PwyDQcmeSHkq3AP94nYxcM9FLZ3pO6%2Bvyq68n8DfM4abyClFc4ZyqabUGiMx0O9Dxmcn07Ogu5lTxzp3tcSvapAZM7Ii7QiBk0uZ7al7%2Ba%2F%2BB3CjRhwEVAne%2F9eCP9nqCsjOZVeJhXHug4W3s3unrZmbs4D3FglN6jB9Ftps8cyXlYDll9xj663tRYLXm1NKn%2B2QNrLsqf158VIHuZMG555m41%2B%2BHrCcwKC7F1BWQRxkyONn05tG6PXCHl1nWknRcs8eLVSAP6U0KQAKqaP7Jom11aZQd7UaiVMxaPTvSMs2cgseXEpbo9YYtvaMYhjW7DfsL3EZxicE1BGEHGENqm6a7IEf%2Fs2haEQeqipaBUOwMeGkuaUjE3AQ%2FEjnhahRENMDeFo54oeH0X2q8XG%2BgTkenNlr4tb9Z9SyNcdTu1kti0XYjHmW0b98xmb7jTPxREtQ9Ru0vNlSM7H9Qth9AdTYK4pMrtBNrxKOUCCINuJ7T3oLXJi378q2jdoPLGJsGS7QKiYGPqIdBL0aoDacWV5FvSWMwZMAAcgXS3wcRJn8eKKVz71LHvydEEjx%2FVbEZdAVtZd6Qd1Llq7qSMJ3bGG3uQw%2F2SUGGVDBZdndtwsSmaanAh4fpTESb1xTqBu0gCXK%2B1iMvDDm9PXBBjqkAdegebTsBmKGDB5SGPs2YLWQUL%2FAOEhiES4NAzfS%2FF9e3WL1go%2BArolGdylwWt%2FfRr9BRKwK%2FO1XVA2KsEYwWe3k5%2BR5%2BGHeN8Ig%2BeexT1zhNieiCcGo2JHW46DdBgSEqWdhFA5yp4LGH2WhwlvLSLvNQiDsZZV4lfUrkUA6xq0z7Bsq9b0psCX0pRkD1oVPhZraj6WANiUT2BcUPI4BIpcH%2B05x&X-Amz-Signature=a27d71a75703120b3ad032f32f88f618e92723a09b1239ef544e555f6c6c0034&X-Amz-SignedHeaders=host&x-id=GetObject)

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
