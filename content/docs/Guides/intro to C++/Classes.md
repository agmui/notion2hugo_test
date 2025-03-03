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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZL3LCS3A%2F20250303%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250303T200835Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCw9HMVQ8W%2FIwu1p%2FCW7Qbo5Pf76aQIhLBD1OJxN2aplwIhANnh31ErmjBN4cEUpyoapAavtq%2Fmviy8B5n0XJBxl0YTKogECNz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzR1JU7hPcXDVskdsQq3AOFlAwk29VgibPHwREy1ego96SSLcuNiCIhReeBXksRtGDkBRG0rnw9CHOLyf1zRCWVKMdTjVLXjB8sIW41rr8YGdRfUVEuinR21hTMejv2wq49Ddxxbi%2BGTmYCarCUF9cy5cJrNY2ouKZVZDxLncYGdlrIvvhtqlL8gY3txAXA05AO2UE71ES3MXg507i2XDkFT7PElCLVCTAfHc8TVAPOCjZT0BzSOUsUgw8LRMwfuM5FLnlf6ywjxWCQHEZau31b5bW3nPtnCqxOWJQAmNEqtl0gi5me5TEOdOlSePcNnTAm%2BoaX6qCVEPSn7AVC3ncHZ2y9B2UOh5xWaoBWOZV7pderDGcSmO5ElLHjhmPpkmIMD%2FrxAZ%2ByQUxTdtSOVlTMG0KIAjauQw25Sp1a44PMLvndAFE2n5RSeWKNrZhnCLoxQmcP3gC1jSK%2FpyCjTGxG25vw%2Bau2ANmP6MWx31QM33nXhsjPaJMbW4mltNKosYmeiicgolot%2FXqFZIZGN446U5HM%2BA%2BiSUSbw9GdjozjmQPjRyg3%2Bl4aOehpYhM6vmCzZygfavC1mThdE2mON5tTZrk4UpWs%2B97qkqFxxTBvNY8oDfuiC95gbSakmqRCP1uMlvMOFilBWLhihzDu%2B5e%2BBjqkAbceMO7FWo2fttIwfLSVJKoYMbKmvLZrq5T507TlgxGDTDt2n%2Fzq3okF%2FhI5h5LCMr27gB1Sn%2FsExaiT6XIufoMp62IJaph07hIJma19jXfT3TOJ73BQZx%2FEdz7CtHPOKpAt4XYJxMUh9vid5nVr9%2FCPqzYz35ouKoFhnpi5JZiJDo1hOQJyc97df1xSTBhO9%2F60yojfkfhLH%2FvKk1GG6QQ%2F8%2B%2By&X-Amz-Signature=fb7345f71337332a0fd1c6fb0161f030fe9e12da6077899256981f09284daa6d&X-Amz-SignedHeaders=host&x-id=GetObject)

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
