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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QVEDDDK4%2F20250213%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250213T131538Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCDogegtnPCV1TxJIwjoiJraZVrzRTjeKy%2Be4gPwnddhwIhAMaw5YhcCUaCijsrBNY8AicmP9ADXQUmb00JufjXYtbyKv8DCBYQABoMNjM3NDIzMTgzODA1Igy%2FbHumv7%2BnxnAiBBAq3ANNILgF4nYcTHuj3SWT2VOdkulfzgeHM4i8G8JpBHCHoxQWXc%2BnHXdPvajPMdGw%2Bc3CCA4ofyQgwGdn8CMA2h5ySB17il4gxF8FOWRj8ZzcLUNb7y%2FnCGsxHw34EARDo%2BI%2BBETJ07S9%2Fvk6811ESvFcEKGptpyH%2FlmyOIVlAEzhC7I%2F4DGbmecANg3HIxmOMqSKFrWIvNMZt8xkad%2FkUOOKr0MHZV94Cz5M459jxT6rwulLZWyQkuL1XCDRxQ7p9ny2Es%2FR67II9COxpkStTfKDAphBvRdV6%2FI%2FkokcSCJ7TCwxCHWodUQ7U5%2Bezdyg7p4x2BUbJNo7eBBPRqlAoZoHDY2J%2Fe7P6NNW5022qAndBD1lu7vDosZim5hhtCC7JmTRLXE3JIrOYQKRbkWMyGqle65HcPzduytgZeavR31FNClRyUrMpQldnx0Al2K0y6P3LE8JG0TQDo1kk2T0x%2F9JxxKOaP512vUW%2BEKO1JzmV3XlbrCY6wDpyqHx0yLyplUxNWkRKdETp1bsBfEczJ3ydqEd8JC%2B%2B4nnSCmnfq4O3i4rdmtHivVu5VK4eMp%2BFpENXDIT1TJkgSMJyWPZGPzcfUJc0avbY18QzUjm7yVthhOdjBbAywrTt59kRjCn3re9BjqkAeiWRxWFTmOUENd5318mmdgfmboYvz79vjYUnAhrgC8BiQ%2F1ZUggHYw6cfRrWxjl40Fa7gDJP4sCyLy4gdF%2BqsF%2BNrlwfBRiMiRZpocjHpTj0wmMxFjlZoOGQSg24wYsqSrA9iA0P7raBTUhaQwirfeMoBWs426zrVYSuMFJVXYo7L6OwSotzG9tpVmShc8a6NsrkEcgV8f1XsIhi60hO1%2FkM%2Bob&X-Amz-Signature=522f8b82a5c1626ea5e522eab92e969bf48e8167cd8a8cefba896b054ce14eef&X-Amz-SignedHeaders=host&x-id=GetObject)

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
