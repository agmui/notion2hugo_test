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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663P37FD3H%2F20250216%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250216T090411Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJHMEUCIEE3AGIvHuDn7Bxazn1zP%2BDydS%2FTOaasFogM1Q64Ky6XAiEAi8N1iNQj0FOpBNlV3sWuhbOl7R8KzGBtYBxMSYWmTHoq%2FwMIVxAAGgw2Mzc0MjMxODM4MDUiDFqLjTONvzEc%2BlDf4ircA4YT2emGPo93B2bqz%2FtWM7PYE%2FdxzVi0i2t9EpMtJljaqKO5BybNNSq9LKzZ64vjbfvijIgryOG%2BOYPAeUFU1nie%2BoFO0NBChU5xZsJoaqyNIB1cTnjJJPF%2FrJoDYJtN6TWjgidtTXhMZqUSkv17YVKpOt4CCOH7PRIM4FFwdICtK2%2FKCkhNlXXvcQmhgte05c1MwGnu%2Fc7Ti6w9ORJ7ON%2B2pf5pHR3Rk9L02fz8fK8ezs9n9dJECZnUmsDNMy%2BqEPBYGVTR%2FfttcMS7Fm4avPD45VCQ3U3%2BgC20bw%2Bh7xFbNi8pYUeNzPs09tkz%2FBFm1k1ZthwLorgZDO1sl7GRjujpSNPiHHKsFkmoN0RNyGJROtE2Qpy25g%2Fr3VRESCvINnI0USBGQE8QAMCqLiA1s%2B1Obt8K6dB4NHe2p2KFoeEawpSBM6DNf6DLSSpBVtYfTx6n10SX%2FQbvMhWX%2BZcKE6LyylnSRzofrVPY3T1D%2FQ4g2ijFm5UxPBIUupJy2jhRrBHj2Q%2BBqAtVC2hDt66IfpTy9dI8WfuLXSOJbDOdW3Bi%2Bw3bn%2FhM1pbIJ7FHw46WhcskP4MzmPgFcPKhAY8fnWYw4tSu0E0%2FVprcPHtkAy47%2F1xOB1DoJcGU6Wy1MOL9xb0GOqUBeJSkl%2BYow%2FM9vZ87iLARqSTHWYeCDcGxCMrVd00dUqemaL74QZEVobmgUPIjslGyQ2gYgO34pxyxRTrxZoYXDNaoaNQ3eb8I5UJ3JNYGmwx0duEX490Uk%2BSDVbaYEz5slIoeGRIhuOoZWrJmYMyr9ToskChs4MOnhUhVUZC0CZnC3ln6K6XkxC0dtEUp55iICI6VRLQYalLQQkNENNyfn89LdM3q&X-Amz-Signature=4a86aded2621acd0ec6a4fba22b5d12db3471d6af08dcb18581f65f921288cdb&X-Amz-SignedHeaders=host&x-id=GetObject)

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
