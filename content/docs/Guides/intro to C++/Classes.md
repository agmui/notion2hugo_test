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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XE65EPXA%2F20250216%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250216T190106Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDoaCXVzLXdlc3QtMiJGMEQCIChJKsEJXvFSby8CMUIIVXWdfO6G6ClMTRDLF9lp0jY6AiAzO%2FG6KLZ1iYfxCua3JYdc1gtPLg8cJ71H%2B6FaNjbFBir%2FAwhjEAAaDDYzNzQyMzE4MzgwNSIMvkCKF3YqoLbLInidKtwDMoUNkNqdp2b5cDelj9zW5pg0oBscPNFhSuX7%2ByfBZ8f9j4PdWTbArF2CeIQlV0hnRBykvdonEFPtQJpMrxpPu8VGmPUOeW%2BB9V1BS2nlsOHiejiC1YBBylofrl1DfeeLvy%2FblFpM643QOwkWxc1YHhq9ZUdTax26UEM7UwTksOMzy3Qc%2Bl8XfgptesJ9oRKUyDJ8wFBj0rsu%2BLXxq1yO8vTY0KksWpXU9hU7SDU4pEmMgsQJkC57qc6E0JFmISgqmd6crApDjvHwItVEJzMnePIGtnwyW1xj%2BjrYa2kzI0dU8I6Uzd68%2BbWlNQyuiHS%2FXlNSVJGdNE0y8D6%2FMmNXyUm05L5dNGZVRjaDlChQCnSubTLCDJeZV%2F20QTCKOvy4Ne1txkKyxh04DTW3REeO2Cd8ZTQLxSn45GKmQ2v5RqD3hHBfSaMzVJGdFBicvylCrSJMAJeMjUIbzMIywIQnEM8ar8P5I1rAn%2F8anh9FVL2%2BKTlQCRAb6OYPfLk1Fcjb7fMUZaMfFpxM4AqIK2LVnaoucXOYt3lez3kxPEIjizcOksNUL%2Fuf52HeLPSkGszfD3ucLbADbnHWmDHfRv9dT066py%2BEWqlGrZuao55%2FFtvsTletja3YAwrtracwq8HIvQY6pgGfD1S5v5w2x1NC9TEtJFQ1UKQDXctIu4YRcK4SJPBwMd7V2d2DtUk6JRRAhaicLs6pMkugnoncnEwiqyMtF%2Fye07Bsrjc9lZE91jVpaS%2FTu256z0FOTimhhgz5YvC40%2BXD4Ik%2Fy784fTIgKNeOXwyp%2Boj2YJBL%2BmUGWLSZdpA%2B%2BR3YfBRdAzKDqjije7lRs4JebdU277bucAIXpbS2EfgVqO%2FIoETJ&X-Amz-Signature=8b54c034bf93ed68e1245c2188dcdeb0d3608e9182792e1159a82e76ba2f0a38&X-Amz-SignedHeaders=host&x-id=GetObject)

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
