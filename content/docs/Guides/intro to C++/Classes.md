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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RIKDMEWN%2F20250405%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250405T220709Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDiTa%2BkhQUAvBd8QNryiBQ7%2B9jaSIFFv%2Br%2B1Ovqtrp5iAiAiPy2bzZcWtm4ipHBP1YYuKzn2SWD6BPCxhUAtM5TXwyr%2FAwg3EAAaDDYzNzQyMzE4MzgwNSIM09cEpJL1%2BMMCsQn2KtwDnyII45waZKoduHoQB9%2FrKeni68WLmAPRkKpa5YOEark%2BD9x3VCUs9W5pxFlRz6nQxm9Ge9jO8P5M5DqHXJwq91h%2FuWTbtrJRcjTAcoETgd%2BV2La0CHn7miEvMaRSNtb7WYzdR6PQT8P49NYELniz%2FGlxAO5phSp78cxtHzcTlgIcuPS3wCbGMzkRdGV0ujsxqO3Od3pGscXaWJv2DxG9l62RLAoGs9z1xMp8daFYLKy761y6xCnoOlzKC%2Fdbq64eQ2ZWU8gQQRbja5v9OEI4cFb%2BNyBHohKLZKkqfSYPC5l2ybjGEx3NOzhHPd9C1Bi2JGp1o0HYRgHs%2FRHTssmTAm8QsS3Gui61jgblWj5dZeCyJb17jvT%2BEoF6V0ghlAJBfWr3e1qMsdmot5og7qrERlyn560mhYxDwxNBO2MAUuvQ4rnMai9fmnU0Lp6bql%2BZn1hhDjLzOrzBayCbKHsZHd0V2QPv3R06eDssv7Bo5fbEZkl87jIzkQ3cY38xrRda%2BmL5KyiNmSwFOiEYx8NMiFSzLYlyj7nn%2F%2FY1ZggkwpIhKPrg5eqDQFgSfm2kOgHyA%2BoiO%2FzZTZd0noMKWdAS%2FsCx1LPeCW9vP6NPbHAyDpzr5QABhc6y5e%2F7L5QwwMPGvwY6pgG%2BGGiqfRy%2F8HFCkla785lbI4uOxHcTdZxCDlqiaNLxvB0mSsPM%2FBnrDSHElghllj2e9SIt%2Fop3pbVy%2B2sNzPbhPwd9adiIVDF%2FUpG1uEEpBPPddTHkGoNsNlLL%2BXdkE8XN4YpFWCKBeoa524n2oi3w2a7w%2BZJlv%2BTTYBocKS6UnXkOzrXi3giO%2Beo7HxNXdahIp%2BMPYgBdDwndDWL9%2F5SkACtmLy5w&X-Amz-Signature=6ad8cd27c8bb76b15084b03adb9ecadd75629e36089ac93d15d71dc15aad4acb&X-Amz-SignedHeaders=host&x-id=GetObject)

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
