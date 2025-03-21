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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QOZ6ZNXE%2F20250321%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250321T041005Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJHMEUCIQCGLEnZ9%2BorXjo5yzozSSi0BDzWwGmr9vfV6fmq%2Bf53aQIgNILTk8b8msPnY6%2FkkA6TXV%2FtyQfPFjMEA%2Bfzt1HMPYMqiAQInf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHjLm6%2FjUg2P79gfwSrcA9iRIm7Q0KE8AsNxMKr%2BwoX5Vgy4rb5TqxZINEA%2BY0dL%2F4NwlO57QxReQ0snGHm4CUAp%2BHbmBsKcxjVFlnBG0h%2BVIB%2F9Ko7ppSGLjqNF73XNMsueAR8Q5NvghVgQsd7wyCdpSHya1uCeWte4mzD7E7WQcIH%2B397tYVh9RF6IGX%2FLbl8kN1sglTTx9jCja0H312h1cbb2CVmasrFVexCdcOG0lWIgrEvRtaPY78cF5Tr4d2%2BfBu156IujfucuuPn2c%2BczY9qjlNxrxuOvtrClNPCtzrObnEs%2Flx6s6IVv0GVwgzhtyJC%2Fkm1n9JEBa1LOlUkY4Ij0Tdu8MoppkJRsuMjlt1WfjER6umUvJoXscmzE813x69pazxlZdUvH83xIlpmZ8xxR9cROneUD1KxDHMwkLG%2BYaZSrlLuovu4eoz84V5IzMmVdA16AsWYu%2FpNccIDJ3%2FzUrCnxcKX0tKijm65lCwJ%2FwmXUXGXbs3zvJLN%2BiUc008G1iyaAm0moVaQqAlhLybxzzbkdlxlTJl9qJ0aSi1Ynm8nX7pIbDZ69kyXcdN4OaYo%2Fl7RPqSqUHtxjPy6aFqVkVgQPBNF89Yx%2FqSaypPdCUHNJNXmq%2BTBdWM5nIjo9cAfc%2BGMy3gEjMJK5874GOqUBosEZuML%2BzueoSDK5wfqOf2Dfupb9S3tnPOTYjvpgTcrKckoFoEfPiU26o%2B9YU6BNFLqPLCxNcajlLulPdMELyYPf2S11oKDXe5Kd2I8jnh%2FWZryTkt%2BmZBvmki%2BgSWqy4g6ZMMngIVGwU%2FJBOIi00boQvq%2BcmWL2tkD1CzDj4rVchrPdFvQvQf5hGBOlzHI6KqSu1clH24ynSnfCEYiqFUI8wiPc&X-Amz-Signature=b26cd8dbd18fb93b3dd93ad925f771aa6ed6d3ee905eebc20d4e947bb582650b&X-Amz-SignedHeaders=host&x-id=GetObject)

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
