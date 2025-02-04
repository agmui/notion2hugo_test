---
sys:
  pageId: "2329c1cd-96c8-4fd3-a4f3-9920d69d1c8a"
  createdTime: "2024-06-25T02:29:00.000Z"
  lastEditedTime: "2024-11-08T18:33:00.000Z"
  propFilepath: "null/Guides/intro to C++/Classes.md"
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YC5B2ZQT%2F20250204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250204T220715Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJHMEUCIQDRzbO3R6To6kIp033T2CnWuVwPmytMDJZbcXE5UxSgmwIgL3vkHrOsL5urAEVVl68lfn2kSfExauA0jpjNJ8jj2Ooq%2FwMINxAAGgw2Mzc0MjMxODM4MDUiDEJn6NCMGuxVYaJzpyrcAzUcfiw%2BH5kh0ifsN8SLrsDKI2nCvLrJ3Ce3aCf5FGwm2o6umSWnmGvETV9%2FchgEMGSatLxd3CipVe8ZwfXWhYVOeibVbJeqgoiQYY65vvzV1wMM%2F8p4FVadlhXScgT2k9%2Fa%2B%2BQzpMCtkt2krrIa7EpjtYP9U775Gm0%2BPJu2meHyEoL2%2BH4%2FiMsFhwgIZVgWUio6lEylRpOvPXF5gSkmCMpCvVDR1ZwEOp8P3BIZMEdBfZLEt6LwxeCJVn23163S5tVRmVZYOiLxB%2B%2BvlhsSqGSTH936MPYW%2F2aycKiGhjIzbgS9OO%2BKFHaAV%2FrB9qTTTKvif9%2BLhGFXfPYWzWolOc0ATSv5ZaT2AjJpuVrgm2BqlAXL0iiXLXqHqa08mm6IV6XNm2WFiwah%2BDVDZG2SXF8e65c%2B02W3BanXhZ9nHD6WNSHQJS5uDjxencAhNZholAslmlBpnZdEmTR7G9o8%2FqIMkPLxKlvZxXvd2BKHQ%2BDh%2BMi5jOqUOflDCxvmBEEpaL6yOBYtMABW9gcXesrqq7hPeodLihuUzoDcmCCjeV%2FfrZRBcCqAXtA7m8YuEtUC%2FGxui9cF6Es8WvjJwTSagG4QlK0POU%2F6aCD0nt90B6j%2B0zHrzA1lLRsSscxsMO6Vir0GOqUBK0sotD67P4%2Fx9bHZqc38moocgSZDqcUJtIaEsgqg359kIEbLPhC%2FRRWPw8F9CtxytAWXPw%2F3NUj4I0K6sgk7IFTsZiTGhwoKZbMj20NQaqkoiPDZvlPcwjx%2FUzr2bM1lrPOe%2FBzCRjcVaFAO62IrFdmPNQm7ZNHSltuZVQkR8yEf80NS4RKAa4zRoiQmnoR3bdAt4DmC1u2zrmBO4gWLeOO5G5p9&X-Amz-Signature=f55386e9b7a12ca4f318cf2f7715555cfccbd6776ddc44288e6a499da13d0c85&X-Amz-SignedHeaders=host&x-id=GetObject)

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
