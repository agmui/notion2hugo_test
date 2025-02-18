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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y4UX6UBH%2F20250218%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250218T140740Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGYaCXVzLXdlc3QtMiJHMEUCIEq5AlmFiDWs8bKlGQT9gv9rlPa%2BGjhouZ3yUqYw59cpAiEAne6rgxtuNTTw6i2LqwtXmTsIObOFlSljIVomGNgGgoQqiAQIjv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEQvNvOrAC1j8QUz4CrcA6XWBu3SiAM6QKk0BVOGH04XK1hmy7WyVLEq33kFw2ggE0OS40bewPXQQt6LMDU5zNu8W59OWS3%2FCh0EGnbGICWLU6lc5SzmKR%2FMe%2F0O9qeSxrdlBmBiHFNuLH6h%2BD4kaui1v%2B2xrbKb5aPnBfPfnJWsUQOwGqFdjzOanGPpgXxt2Ew5KuyviRZawfFr8ihGnb%2BD%2F8IuwhiQLKzZK%2FJ4uoaUynb%2Bflv%2FrDG3Y9zL8yib3lqIq2Wk3jS3M5H258%2BrDQFSK5WKeT3L6JXoQZDPiBznkLN3HbV1SfTEDlsJ%2BIHXLF2mkqievutA8YRJSFz%2F9NbhFqdEIgr1YS7%2BBJSQUig9lNFIj4Z%2FxeI5%2BAn4fAHAq6BM0V47aLXQmlA8AaPj7C2EGB9ZgzBtqmGmc7VlxlHvH4Rw4BVCRd963csjd%2FZqMgPtDjn%2BS6QCILibdFTR31hjrFaiMsvyT091UbXRvJtpSJdsEDjMYuyO6tEMQXWtc648yLRS%2FiB8g01TUAPyV1XI1znSVCegeikdF37PZoTwrVFKLAgBVOE8MjI%2FpiU3nSG3mN3vtTpqWcVVx%2BHgXjDTilym0TcLHRDgjQGFEVOj9DWhgHPNyohW0iqZtu74L2vS1Ejt%2BriEo%2BL6MJKU0r0GOqUBJWT3%2FaZxigbuwRWuwgt8ANyZXv3Q08RdzYAB8h04gR4xb1k5PgUEBj99fmP4tyPQEYf61uhSMdUy8Lr3ZETClP2rV%2FTz%2FIIEQ074dUShgDuoqx%2FDY3QoyTyNxg09yTe%2FofVwqdjC5aOQZOr2q05Kjrnttn1fvuoxth%2BCHdrVNPti%2BRRI8ntjjDFzn5wf0gleShjFR9ZDrbrO42OiyQqQeeHExYN%2F&X-Amz-Signature=c10389c64137ef63198f1494c5fc23124e9ba5a188486cb818eddd87630329c6&X-Amz-SignedHeaders=host&x-id=GetObject)

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
