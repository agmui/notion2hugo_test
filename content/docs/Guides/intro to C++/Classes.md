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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XUP4DVIU%2F20250403%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250403T041048Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJGMEQCIDzO3joeZtpJSFOWM8GIwnawy9NHd9VcILBpOoLUCz%2FJAiAfGV9lVoQsy2rF6ApinPVvRgPh2iRzk9vergwFU5n%2BASqIBAjk%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMBBM6OL96Mgsl21qGKtwDopXPwsNBTDwPj7foAnNumG%2FLBv6SCDBrhBvW9r1TAhWlE2POO7jXDzRADtlSczUSfHBksz%2FHAuYqpG4OuPW%2BBLMQSIp1aUZJSIQzihMsC%2Bgrr05ozX2%2B%2Bk67Z65DoMpeA0XNEZwzudPNIxH%2B58ES52dJeF2G4YMlVm%2Btbn71kX%2FbEhxPbCpXIrLzlkn8JqVNNEt3tWWvT91DWOiRUFrpqJzQ%2FHMQEBHognPXrf3PKBss0gVxG1VtaaxrK9GpTPYpAt4z62J%2FXmKFLWUD%2BS5BsfVZR1u0zuTH8UGzuvQ970XTGsXvw4oKwcubvgpomLM9%2B9nAT2Wj8qaL1y1HWg7lI%2Fb6QgkhVrMUpoa4IYpL0enPfuCQopgg3pSNINsNVaBn63foNCosoy%2FUY502LHjT4ujb0pYsvDbD3%2F%2BvAE6umwM6cFHUrFTKvwo39r5ip8S%2F7usYo48jvay3khb9wRMNnZ5UshoIm1MKRu9B7dYJGWUAr%2FdfGEU0tFzcY7giquDcglCRxaYXWFPNrT0p4pWLUBfUtqkTE0d5FbiQSKReWkTOPqjSaZYPnXcB0asDXRu%2BiLvwn3yNu1A2%2BSo%2FT1%2FHEzb7shgEIiAb6AfxuB3iaQEbLkJvEAdwIT%2FXmEkwsfu3vwY6pgF31k%2Be06iLuLhiapJD%2FpVsFczu%2BrCVzvGiMqSvBoolrXl15UKDPQU3b9ZO9CQf%2FePeI90MSPHqN34KqKK%2BRo%2BR%2FKdMzmyoRMHQe0eu9g2OKlrlDonCHDxSwRBjU8g29QpXKOaZgJdfERIe8v%2B56EIFobrkp3%2BloS9rBtaIJ5nx1%2BERJmFNfMHj4MwdDxUou8LWQAo4oeD7zux5jQanoCCUD9lHyeYJ&X-Amz-Signature=01d1553a32f86d302480c44e72da626274f1e60d411cdf26dac769f85dcf22e9&X-Amz-SignedHeaders=host&x-id=GetObject)

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
