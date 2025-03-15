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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V6ZH4XAZ%2F20250315%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250315T040934Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCjeiq3Tk%2FWC84G6DIsi6vLzN3s5mHHRAsn7ZRAiNeRwQIgf7N2tugAaNk6Ps2RxRR83vh4ox%2FBZxqiLNRN0UjlZjAqiAQI%2Ff%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFkQj57myHtRmmaqGSrcA0T7wAiY2QQqDDHTh4YPXv%2Fp2cT1345S%2BjhT8cFM3g%2Bjl6RodnLeg%2FDnFBE3Tjw%2FBB81FKrkmjdeKyp3%2Bp%2FIhgkMU%2FvDzwY5w3K7zzd%2Fb1wKxXIdu3yy0iXpUT%2FA2u24KLx0IukQMMJlC7UbXHf7sgs0vJTYGfjDwR2Ty233mNnDW0yVK8aSXnzUQAEAo0i35Gp4%2B8yypH7SRrmhwoBD8gxloqJ%2FaOK2CLk%2FTPivMD4t1c5MzAbk8De40zDlhJIvxSLUibkK84aPw16EDmyCCyd%2FLlAfIn2LEa7kOC69YUR83bzrBMlvGHPfL1rE53iS0uqRoJGhpa11f12xrN94teJADDCAVMQiBJuqwlWnfWmTpzrbek%2FwuZao8kEWYH2hSx%2FSDrmfxh1MFkUm6KHF7cEIg%2F%2BSPlDiuoQasNLcJzN3JRw8gkq10LRSpq6m8JKrxOo%2BmHOui5M%2Bw8v4gqw9zwiOnHRFpoyrt4R538t1LfT55%2FHQNHnNp4AWcc%2F9Bfn1zTfim4Af5V29mZu6QacReee1sL2GwapbKFovCWM%2FpZTJtCOqXDss4Yd3r9Z2J3%2FMffH%2FpTRvoUivtkmg3%2FFm%2FdVd%2BviJun97yMQSZg%2FFfXIIPy2%2FGKF%2BiK%2BY2rv%2FMIXp074GOqUBHzPUvaENUtuxiXENDmBJCY5HpQ4jsHRRjXbb1SPWyyfiATzQ9%2BU9Atg8jahKgBdARBw%2F7qhbQca%2B3fnxiEULj9y3mmqtqAwonSaE2ihYGBexuHe%2FT4Zo3enryCoZW3yHKsZ0f0UPZrC20P469W179qj2v33Q7v5BRrpbYUL6ZxNvzZ3trY1le8mqwJ5zFk1PXX4lGTzCeYCT2HQC7uhIcpJmevAJ&X-Amz-Signature=92e5e293290bb67653663a6bba8fcc1bd156df32eecd3cf1be25510314fc5b05&X-Amz-SignedHeaders=host&x-id=GetObject)

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
