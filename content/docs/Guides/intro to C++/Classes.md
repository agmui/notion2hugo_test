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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W57VR5UY%2F20250331%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250331T190649Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJHMEUCIQCy4XaYhcgZnWTjvzl69yY1soRzVKc3Mid5dwfYHqCZMwIgeR8sx5J1tnNZcpjQ46S4%2B2KFBpE6gPC2TPBiU12bq8IqiAQIq%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLirC%2FWAYdQgQy4T%2ByrcAzaKvCTyXxPIvfZ%2Fb17yM%2BOFpyFNfmqqK223nTV2UTA9%2FO4nHw%2BoOferIvE1gXAtgQmLV3UmrTljlkp585qYGolIDsDT3OlCVUhVcioMxi%2F7OZBt7Hmd5AjOsQALinWdJuHjHuJv%2FpqMjS4Davj30eLekzRvpu8%2FQYd8ixA88dF71XhJZETs%2FP5MMP6JVsEkcr2owATxsDDIgyZ69TaCpRYLHWrHtXpqBumlcMF%2F1%2BK8YrT23X71bx3nMpeq%2FAAG0ugJm%2FWPLoznZx2zXkSXNIonvrEL7kwUdK07bopI6LzH%2BZe%2F%2FDKVrzdWuDaPl2mqk3nxSv%2BUF9NYlfLpyU9kB7RThZ1DKAGrIXCf1%2FQjKbLCq1WpSWnIaQrz7xGOCbYU3Rh%2BdTD2I3VegioYBAfhjCu3qc24LLymZ6clBkmeCmLb6D%2FtJg0I8x3mvPnpmZfqCKXA%2Bl7F7xt%2BSF3WR1oaLqdUD46JBupEqvYEcAGQXaTueiGMLbkhoYBasyZwtAogZHHHHG4ltVBaoBn02Qgx3EhLiqnGgNQQM4tfI0IYSuYcEEHE0E%2BUluABP53KWSG7mWykrBFd23HGcZOnRpY1pm7nPch%2F%2BgOcr%2FT6FjAoX0Jd4mRTmQHY4rGhZPEHMPm4q78GOqUBi%2BA8aY14oI7vIEHwCZU5EWPPKnPC7FwBmtgZvzxsQUCgt0s3G%2BH22spIM%2FR2p4N0m475OHGvGSt0qMn%2Bpv7D%2Ft7m4EmIkb6CpTdPrKsdmUSf3KXpwo3nLN1cQhevrq7pyYoUpc07EHdXg1PIyfgL6xzkeAPod2R7%2FeTXkERVT%2B1TOzup6F8ADLja1HAq9jTvFKg%2BYc156Equ5wk8tuyXlfAHHQaG&X-Amz-Signature=fbe3fa87fa6b4054ddc61f9b633487d39c385d68c911b6d1350fba50e3f87b68&X-Amz-SignedHeaders=host&x-id=GetObject)

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
