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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666JBZ7ZUG%2F20250702%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250702T181242Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDioNEAEoukvDUVRzqup7CyMy4NO8ClzFDrp9DLJiEUgAiA0JQVk%2F1Wo6wQlI2jqyKiH4Tp%2BviS410NWtN%2BR94j%2B%2ByqIBAjz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMa3nULYV8O5wpGr%2FtKtwDRgDRR1iaRuLrGa3fo5wnCyg1UNbxAvAdDRGBJmt9%2Fxq7LXVeUvjF3z3Bnzms2UOsUEd12pIUbB40Y%2FpUskIPhhnFEwQ4wu8jl8LcKx%2FhL4vGUqA7r3XtCM6A%2B3kMz0Z804MwXgEffzvgzHHfVG0DPQLg7W%2Fi8oDgoqzYcn%2ByQlBNS2ksYT5%2BUy7ddRYPiP2%2B8QZiKMIm2oHlzGOuLxgk6bGt6UaA1hQnUBgw2f8sRtV1fRL2dD6TOYf8sndogNpVCKsjWtGMkhO0pmuFBoz2N5ue62DNfETn69RvSFTZAwcjucU2f%2FuLBVJ3DR4Jlpvt5zI8hJvdD2%2FvAQCvSIo%2BQAIhR0b8o2vyMM%2FrfTalDQzR7Aqn9iNOaAcA4TZEAUUEiA9ZAPMaCjbMeSlc8g09D%2BLU2VnF1PGIau5g4oplfFx9T0THPig56rivCShjqtGYLzz%2BpdhWfxCez77uGGX8uGipniwwVxgmONvcli0fg73HHXzc6%2FkhxtlWBtV7JZ05Tx%2FnGWjvKgphfheNtNqVMGlHp2X2zyAo5Y%2FHmbQApgBRQ5B3rlqyHIxZkY6099ygk5qpvqKyTVF0%2BkyjKx%2F1RRnV11%2BlqMHRT%2BggqZ9Ngg8n0Ww9W23q43R6W1Uw9OmVwwY6pgF0KsXDLpJNH8sxd27qIj0%2FLReSwg4uHCXMik3Nen8jEbzqdgubkQwYBUk4a7RlYUIRYU%2FFS%2BNdZ6GakDhoKlAw9spZGTJapmWvcO4AUekVnM7drI%2Bgcs6evreMb05x0WTvFUKbKptoay1Ac576Mv41XeCnxqp02X17ZqYNcgl1VxTmrGv%2Fi9ddJu7ZKsXEcSJeCenBHwlhVpniPALJ2wbqKkGIRYTO&X-Amz-Signature=7b269635616ea9209b842b22a875b886561539473a786dc0949a88087d92f1f0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
