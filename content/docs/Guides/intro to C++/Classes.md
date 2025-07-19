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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q4G5HKYG%2F20250719%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250719T132204Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDtDc3uVeVLPvI%2FTvQIfJfFPZC3bpCr%2F51KH%2Fo5kr%2BZlwIhAO6r4MmUR6wIrd7aqBOFbPmUOXummgH%2BDN1vg8y3kk17KogECKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyDY2%2B6PzaifkTddjEq3AN27yKY5zu4SqFP3CPyHubEbzKzR5LIX1HFusLmNd8%2Fs4Y6Xd0M7yPpPrlGW%2B0ktlEkuOdUf7ejjmtXh3qmms5YRhil5XhDiUrNGaasrp2a6mI5Aezngs6jh9qJh11ibFFEoqRV7NBfH9UZDRYk%2F6LC8wYikycmidLVjEO877Bg7R71%2FenX4keNg5DsgbfwtkZawV4SEFXBDPDC5V8r%2F6hny1vSKhhUyGBRts4Am0MFQgW%2FdYhW7buEBP%2B4zmB9bGqDSNmIF16ZA0AJ6ljr6T9k57mL7CfP4WpIiMoTxyG0t7j%2BieYkHhlu%2FHqKEcrFlaFowW%2BTyABZMC5zBBE%2FVdEDzxYF9z8oWnCfgHJeycZaYTozXv9cUOJpyjdJTiqQSIBuoO8QE%2BPNdrrguxfAzarG%2F12XXDRr6UMO1ryz2zD%2Btip%2FZ%2FiiXXWBUkd%2F0zoAp7F2a9ozTXkQ9jdk1OYRdd08zSFOl5koZ0uQzdADY0XB9sHPlpQOEp2OK%2B4Hv7KuF1BwnQ3O%2F8CPefvFPwdJLRHJIT3q0cA1ZQf2t7CQ2wpmnHmQ6UEqR8HJeoAD%2FmTwPSUV8k9BG%2BQsdG1D16PGmSiQtSmHtaOfYdbB0Q5HUeSJv0IuxYzv524ENRxLXDC05%2B3DBjqkAR65O8%2F75w4tp%2BpRzwoIySv53ptRfDpfbFT0w9UUwzx3XLINVgqT0Wu7HG084C7gcmcNW8GSVM6pRsZzrkkL3kAefeI8y6iCXoILtwDCejaz72WKdqVvD6pBhaSEWu4V3%2F7qEXTOnHO9goGZhWSx%2B6B%2Fo7ZVSMAmsxbYmua%2Bfl%2BheeQ%2FOo1LTZQYveWkc0560rigKFtLy2Q5dQEZe9sfdrwsq8Xn&X-Amz-Signature=30d31871fb323dcf953bd666edb37d4d99882e9091abd4bc91ca1c1935946145&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
