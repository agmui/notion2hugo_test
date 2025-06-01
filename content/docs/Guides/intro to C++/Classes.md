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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666I5ZUHKP%2F20250601%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250601T200908Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJHMEUCIF%2BPDieDV6MLRDt8gpXKl37uEQZvOhDzuglwMTLajH0lAiEA%2F8c5ncsCI6aOb2%2FXRSCNUQWaU%2BJaaoKSqjopTOhXB5wqiAQI2v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMk%2B92FknYqNEfRzZSrcAxx4bXYDkigZcduOz%2BE9wBHDwS9chkEGdaDoZSbm4%2FArj499gol%2FXre9o6DmpF578DPUy81m5cv2hXXySMArD00%2BE4EvzxZVa363c6xt2r5hJwLt59Pcr9yFLqF7cIcDV%2FyCOEzatoTgnX6PIj9zBBJNRwGuGvQ5ONQdX%2Bikhe6cfoVZVi0hRjq5an7IA8XFWGChKQihMp9v3WymS2avoG506aUBona75ZBYFOEG5MZflY2UhG2j0frHujLZ%2FeexzFVtKnoaK733q86O5Sq7B%2BCwbwk2sxGj73I9ChX67M%2BZDBp1rc%2FPaRZLEVCFVbheQBYcFPeL8CaUfczXXrFgaPwkHHOFikz94SfMSxiikE2XzXxKV%2BU90wMZNMAnDinRBbuFeBrEMS9atw0pp0p3KGF615as%2Bip%2B%2FMdsfiObJgROqYOesrt5X1vlq1QfFex29Aw3i3QzIWBlz5LO3myRp6iECURi80NeGadX5AzA7nJHpBrt59B8C37R9SMUBEAsPqCIKKHtfoIHhdry4B6vvc%2BlCDhcZjsDul%2BWf4Yy4mqZp%2FuA62N7bJOLgqSE%2Butr7D%2FME%2BbE4MypkK6gDD3bvCsauTiRFi29MMtiK9Ex%2FccX6uAJlQ2ck%2BbM279MMKWA8sEGOqUB5T9h8JU%2F1sSm6sEzVQvo1IV2ACIp9YVYhjwgX%2F%2Blpi8784%2BDlobptTiXJdwJIV1whYpt82wXAmDknHTWIVubEtM2TFsXLpx8M5miCimcb%2F3FmxxcDG%2B7W%2Fdw3IoJRAOf31rd3pVuWui2caV1saG0Tm2zBVyOwFIRdcp35nze4IxmOG%2BrrNir1sixJ2xkgOjHkKIQihnd6mabzv%2BmyvgUtyeu77oj&X-Amz-Signature=29dc72798ba4614a40c10be8c6810e2160bfd36c94236315558eff7964265679&X-Amz-SignedHeaders=host&x-id=GetObject)

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
