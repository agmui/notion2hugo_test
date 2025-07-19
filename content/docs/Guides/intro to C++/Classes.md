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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664TLESFOA%2F20250719%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250719T170814Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD%2BickUc4AbM%2ByCt44fHqLT5cYl3I32dfS0mEnK%2FoJTWwIgcW%2FlCkQvnGphF1LqTm1YQfPLvKPsruRV2rchFMIpuzoqiAQIpv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDABZlCUa0bRLM7hfpCrcA9NV97X%2BbQR9Dudr6z4RE3HoSP3%2F0xRCTZ80wNVcTxI19dzf2uzmHw8okFqk1Fqks3JQu21suImNEuKVVBIGD2HlymwflaDG5oqyxyyDuv0qu5f8QkLdG0r5TV%2BA6VjwDgcVpM3Joj9HHqmhtC20xFib%2BvD5AwKR1TJnu624LS5PRGXjADTm5OXv%2Fys7Ak7zV8fckSXEV1FHuvEqVe1HnF12EbsAcdR3cQsvpmXF0JUtp%2FO64IC1hidNnm2ylr2overT6llODX5B62HIO6UYxSYgvlESwWu4WMEFVyScHjTv5mcNeWwW%2FJCPIQAn9XfzzHDCKGyhsPn%2FVAgrSCoWwgft5FZ6XLfj7lnSUT0XPZittK51hGx6nVB%2BUeIla3iSbsAifvOpTMpmoaaitWJEYykZ69CuE%2Fg1pP4Yn56%2FNklDhHfS3z6FAehhBtkVMFpJuLaW%2FNV01ZfvHvhmC9mHkfpX5nXChOhBzS7SAl1jTHH5ELrIsCd%2FTA3xzrmqqhqQ5dGpHrpWS19lVLCtMVupssYFuhKCxTfn7XqUShOxBoER9N%2BWYtZKzjslcV5RmtVkGgzCcED7Ara70jATyxX1vJqh1tiPrfV9TLxXAz4hmnfn0S5PE5bd9eOh51CqMNa47sMGOqUBZWGJ%2FQQ5e67auDyc%2FMjFy50ApilKDc8xcPgIeTkebXtoDDoamIY080ow3p3r4iLMmw43lPqAzApWYCHzZ7N9Ucj0W42s6lcJEFv2iOeerKP3ZCURbxfuT5AYm1odbG68OoqSqSLIi20zRgPaN%2Bg0xZu8Fq3rQnDsVOSvTvsSBOi%2Fsm%2BuDPoeE02m75Ft16ZyELZu0qi%2BUg7XslPk3IEZ22f9BtBy&X-Amz-Signature=d2b0adba91d4ccfabf96ee48dc47ee936e4f48ea37fde6b4bc147f6af9aabac4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
