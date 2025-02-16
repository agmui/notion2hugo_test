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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QSH3FNCJ%2F20250216%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250216T100656Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDAaCXVzLXdlc3QtMiJHMEUCIQCrs7aSOCFodttRtD0zQnmjMsAnUgkudpz91iSnLl7AKwIgX8lsuuZ1Dv35EIzikkafoEkSgF3Cp5RiuzZZFTV%2FomEq%2FwMIWRAAGgw2Mzc0MjMxODM4MDUiDDr13FgJdyy%2FnGOInSrcA7h%2FTduiwJtjbecsOHgKuv0AMX0xUijrJbwesVk0pEPMl62I%2FVjsAq8W6DUFKcCTb2Rq02iE3R8mmHqs6W7BMJW%2BMp4VdNRgxFH6ewVuoSfxMXHLxwgqO%2FbxD8iAmkhMmImM9%2F12jDZOWD8OQnpgstyYGpPiZ3%2FnE37bjCa4rgYHEObR6%2BBFCAtNK2DqcoUQhsKGJ0anIcTFfwQRv0bar8b3eBn31dw3IADz2bTtDRctaF0s8TDxnGRkr793tg12%2BZQmK7M5pIEK7rM%2Fm4MS%2FW3LGPUt1jWippYgcDDNQVPNuTLPg3x016ieMkiGspoI%2FJoL0PJkzfdYcGO9ct6crioydVp4%2FJP0AiVkBZcJePIxpoVCH%2BGlRQw60azP%2F0CMkgFLxgMmjNQsSA1Nd7fRF%2BvTnACwcRGeIggPBE4t2qIcqWspHWoI7DGfr3FqH8TTlKHDGUs42Sto00a%2Bqri0MLK7ZyX6vHw%2BM0umpP1%2FD0ykeDO18k2M5Cv9b3GXdGUW4WytlFQ%2FMwVPQ%2FmV1jDT6ls7DG3IRGTqsx2zbhHKJD%2BOLugXlN7eR%2BDIJi0LfrMjKfoIzGQS4rGoLRS152k8r9xNwJoab2oYX4fTTdG9ku6a%2BafPKkOeTuLF1GOLMN22xr0GOqUB6tCcmhn4BjQEIhQjX%2BPxVAAHiSP%2BEe9gJR%2BpQ%2Fm0Ci7XpFa8zzrRjlsB5IBW239Xoj%2BCQKEwTna9TCEysg%2BzBz3zTtemSwuC3%2FurlAnZPVyxDUiLJo4zfrhR9F9c8ZmvmHLMMkhW27%2FCieQ00imUJo9yCFfd6cAL8CgvTN0pOq6mutnW97YzD09mKCqSSy3N7EZliuvfXa5ypCl31Wq1%2FWwFfhPv&X-Amz-Signature=96852074a52946feda05e9897a37cfa883217b93b34ed51e32d4a0a5dad63e17&X-Amz-SignedHeaders=host&x-id=GetObject)

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
