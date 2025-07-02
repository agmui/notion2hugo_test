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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XB7KRILN%2F20250702%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250702T091144Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCX0UlV5fuWL%2Bz6ZewZabfJnJ5QbI0bqVk7KmnkUGLV1AIhANyaDl5nryEmpTTWR169qCzju7SGvahng%2FNHSB5TqjfpKogECOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igxl%2FhHSGOw2KAuHMV4q3APEDmoGxCZfbOMuT0sk%2FD62dSQtrHgk0cumkvRZQyjH0V%2BQiPz4YuV9I7fZZ6SkKDWYQOlwO2QE5NBD5p0xctrv0SYYeoaKlfFDGE3Tmj2A0VuOn3m7TOa7xoaRYEb4m1ayN7jedqjnvUc19lih2OYPdu99dbanjPhGvF1z4TGhVeYwakUf8JxhzKOPwdK3U%2FN%2FEhL5RkTCxPbinSNl%2B1LCozEr%2FVKKmWSp7jN%2BIl2zqRJFlz%2FA%2B7o%2FMFiyKhTYMdLIH00K%2FGOknLSNuw%2Bh696k0%2BkaO%2Fnk4IdOQ18biFcebInFYQhio3aYeuTdCWiru9P%2BgrVAdSszPyxgGwjyUdYb1MsB067H0bAxW7iQVxLi0aHLFbylzNtFJZYkGpJU7y0nxR68UIlAkU5e%2Bli9s0U8w71vLn2JUQdaiW%2FdhCApIfSTs%2B8LoACOKTEGPeElm9KKryxlSdYfuSZJp885qFqIAgYid%2B7H7IAhgjJ%2B79dMI2P0Jt%2FHXyKZ%2F53%2BvBuEzQ1ogDpR5P5EA8m9QGEEErJ37fFmKElfs%2BPXSri%2F0vAIJJTv6CltzEE9tsWoqZybol3CC1P3c0yf2ugD8ouWyOikNCLRHnU1swf0vRU09SpxIWAnkzmN%2FaoaKVDuCjDa45PDBjqkAfKr1MYOP8c%2FtSsLd2%2B%2FopEQPvVhRYiJi4rnTjc0hU2XYwerWgFPNWgkFjh81Y%2B95ATUgyeyiZ%2B7ZresJk%2BTHDQp3We4TY2M%2B8SUWDF3nrnVg197rV5vIO4vqZrQNfzR0lywiU6XCVEMfuEI6eUZNb2sCndG2xTzCuMGCsILmFz1mo%2BhAn1OWZImAE1zvonW7KrTiGaggXQmMv2tp8qVXhn60TXJ&X-Amz-Signature=75f1acc60d03953ea821e23c0350474648fc48d00d29ea316c5f6a618b96a319&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
