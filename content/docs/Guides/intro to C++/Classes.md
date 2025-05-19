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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W5RCJOUK%2F20250519%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250519T210758Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDasnSyYP0OGqXneqQkDDfa3uUL9tYGoM%2BKKB0hOl8yRgIgP5IWX0BANOj9bz5Yxs8IOZtHWamMneoYgsjbLsWe904qiAQIlv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJfwRBMtfLCZFyehBCrcA7QfTOLXhsTQgKyO8sfLDqjs4nK%2FSjn%2BoCK3y3FTj7Aa%2B2IkgxQPd6qbJTtpA0TONGBeNrJOTUGhB9gUKOktvZuxjRSWiGtvjjKUfCGbR9QuPOOpNuPKEPTyqU5zhDefZ8OcP3FLiVURG%2FgkdYxBpTT7l5ku%2BicFP5Or8cUxcmxD32PS6vCO8GeK%2FU0axinb2qYUj6fha6TtBPtv1HE5vcP2xpTFThwbzj2X5p4Kz%2FaNqoBo1k3NvqhXhTpjWLMXfqSG%2FE4aSBhnVEQ9q6LNRTXfC0%2BqR0Xkj317B6yw8dyPQKpoXC%2B7s4Jrx2g7oLmJjxZtp7uGLyIqy7sdLZhAiazjmmY%2FmcD5CzMOZWSzGff6byXINxI3ZHJTrIBnQwyBM2i9Lo578ZbbWaRDRGUQlYIWdTLTj8qRXrWkalGpByQCp3Hd7mcPbINWRcIE3Qa%2FpGhUdh0ADsCx66l16uHvY6RFBXR3A6236x27P2RCH18xX3yOhuPfp2ZMFcK6%2BkT7uHuheK2DaBLL%2FryWlfbTXDXI%2BeJHhdyXWLOJfbK1XpVlQ4N%2B%2FCuCy0Vj6woTYueaP4ek%2B4NrL%2Bbm3d8c%2Ft7R0%2FbIoBl9vk6ca6qx7ZQKxuno4IPOprYFR9icozPOMPKtrsEGOqUBfPS%2Bx2cCzK7RnLHfQK6826fVvUcU9%2F7gmQu%2FdDDQEbjO%2FSflvMbbdbXlFbKRc6ljDLm7K%2BNBm75DzthktUBRhoz8Tywx7SFSDfBHetLyOpqX6wLIygFSpPDqHGAmJWL%2FHO1NM2M8wKq3xa5me4OBYVF8rctAKzJ7PV6uUAomTEkxlmHn6ORx3U65VeD04VUdONZIyc0PKcFcSWN1IAyM1Jj1JElB&X-Amz-Signature=0953c05a62e687b21796e91d374217b9e3a98c62a210d7ed0de332257ebac648&X-Amz-SignedHeaders=host&x-id=GetObject)

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
