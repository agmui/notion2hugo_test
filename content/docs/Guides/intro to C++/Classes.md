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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665JDCTVEW%2F20250221%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250221T050759Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIF85RQ1hWbKgK7VFZzCFW5UCpsAhqM%2FuyukOn1V4VHF3AiEA7uvwBcYqyZLRrWNDPrzMxVAK%2FmcSSbKkT%2F9JquWMnKUqiAQIzv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGMR3R3c2cgaggp7aSrcAx%2Fnw8w3jvA0Dl7NhukUjQ2qtayt6fLMwOVatLku8pLT1P2BKi0u4bwgrjDZGb%2Fol%2B9mbQv2IQbIVvqzBKYPwCi%2BA6PAxHP680FaXmThCJ7%2FTagmDrJY%2Frg707Y0BXXnLN0dhPjhTFTcCPT5RGGpMWB22p80GYw7V%2FFM6nr0MtDVLcrFTMkqJW16RoNIXYTNT76C40n1wAUIrOI%2BK5Lw796r%2BYQVH6QpkAurQVgE7eWmQZD5qG523bcerWf8QgcH9FKBBKWN3w%2Fef2EffH9j0esyZihGpcFIXOgCZ3V14erwwrEBmCJ9uqI1XrzpooUc7kThl3iLT7tJPTMqaFF2Iq%2BikA%2FXFHG56rzcxP37qm%2B1tYpzfiynLfWk2OS5iBf4fhoQr3%2BBcvLaP68T6WwrACAlhuxkAYA130RxhWiy61Lr7XMSP8UKkv0NaZAMy3yfCHTLtVjagxH5j6T6aFQ09jEP2cW3MGpVC4y8btzr56cfJCgIUGJP3Ij98d87Pqc7%2BmOdBLSnWHtkVWPNvkWgtPSoR9pLosaAuAQ00kTsfLUw%2BdWv6WEsHeg%2Bn8vxGSnpB%2FDOwDOnwm3Jstf46Yw%2BJONDWMRa5FrzCOCJwNrmNUgT7%2BWe3sDuS0Glkb70MI%2BG4L0GOqUBlowjQCAIW53za0cO%2B19hoCYNfqBEQAHU2N6Oe2EliYQ8gQXD%2B3M%2F44PAKWjH1CnajnhlG3X8UFDm54yQ0DWkumjeg1cj2T0uiwLENapJtEOdTEjl1ruA2d1nlVTD8nnvukR1dA0ba49zsZr4zgvnyL5OGUb5NXwL78fCG49vYabuXofc5ChWrUah0bEPXV3V369Bts9LblmZWatZr%2FXS3GLIwldB&X-Amz-Signature=8c7efb48a710e3b30688fbbc22a0f78f3e0d5449a29c38f98e11b8f3d84d57d7&X-Amz-SignedHeaders=host&x-id=GetObject)

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
