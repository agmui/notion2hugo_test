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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U5GYT27C%2F20250423%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250423T121504Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGQaCXVzLXdlc3QtMiJGMEQCIEgd%2BJDzAf%2FcGwzAL9H9xzKMtrrsRuA0ANf8CxLnSNqBAiBxuwj%2BDyyKSa8QlExH1tZHMrbvOVTZq4mh9gCEzGNfYyqIBAjt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMuKM2osD1LVTbUk2QKtwDegrQoBiuzr23HGZSSngu4kHFAeOncNyl4kzJ6dwJOQPe1vnl7YHFrCwyPfbkF%2B%2BJ2KfhiV8GbuMJY%2F3WbbMcqMd8k9le2CuyQTAv3pIAcPMd70VEhT0Tztwq14P1hCAnFNUQwml4CRhon6VK6Se24DWpa6hhLlUfdE7wO64pVdPwmmOOHiYwh88IB9kNW3vUB1Dwgrsjj8cLnYqW3oC2EnKmCgWq06FKIEGJ%2FSnHgsiM0UWvyIql8UOmZHkLQsu9HLlCSHNwkYi3k73VAa1BJbFcOWO741HHmSUqvJiNRidEan9bVogDGT1ZwE%2FYH%2BvvsUga9bcP23BrBxxfhqf3bDooWSm9m%2BbFCs6XMwnVfZUDkHsPFtWTv1sf4LJP6V2FpB5%2BrBiJxaKK5CeEW91k%2FWcIluRCS8LbFz9UwFMHut4LpLolpaZyBsOp8PUxk9%2FhguvzFFtrkMs0B4Up4rCEcBMYfv3C1mdqteSfNSZ1WHmG70hUOdZ6Lu1mLhdGosLmDBP38xDKGA4xRVbLFYnRKpJWDPbSJGIfxNLD%2BKXMq408w8wX433yI6%2F79tS6%2Be1Efsw71lk1Ge5vmC6h%2FzmYcNHkWPLdEMSqhNwOJabOuFUCoZQGbCxwHVV9M5Mw1p%2BjwAY6pgFp0wL5smEIdIf8o2r7r%2BZgBI1SlNh45EyPvIGxuazGsZXx7d%2B7kznWtkpKHaDV5szq13kAmkcTUh1LiQuPIXGXlE7Om8tJQN2kLqB6GpYT60BxoDfUAeU6%2BKMxfF6UR4Id8drjYO0%2FC9IxyOdpoADN6rH7%2BZtV8Vj7s8jPppwNzsbZZD3%2BwCJKsYQ7n3npntcuNxpk6LBd%2BOTRPYUdiKDbqr2Vscqn&X-Amz-Signature=177c2c90ee280e81fc554436b1ec91ac936b83cfaad1ab2634f906acbe5d6cab&X-Amz-SignedHeaders=host&x-id=GetObject)

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
