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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZTWQD66R%2F20250327%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250327T220726Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGxFgtKLPWvpu4OQfFrUT38Kb2tHS2tVUAx%2B9U3Uue0FAiBWzn0R8TAXCD%2B3ybDDPpe6qq5JcXwo0oD1KTM0%2FkSfLCr%2FAwhNEAAaDDYzNzQyMzE4MzgwNSIMCCA16X4xI6huhy7pKtwDn5kusGm1JZqW3yOdpNsvg8WeTg3dFI1yLUFn8jX5cQHGIk2%2F2SexWLjC9LaGbnIFOvqO%2BNjD9oskIUQ2ZGNjhO9aU28nZjwnUYwm3p8tVvHfRUTr85TGjorIEsQ1EMAfvn2RJlc5khnOQZLp7hwOnre18pq8KpFnA7elv1bCHk%2BJRRYWKoTaSV7cABGdTHdSIjETHZFZ5maCsvfzQ8Ev0bUWdfa43ecSZyECv2oMziodISvDnev25nN7qz%2BAmUftpuoEfBgDDv%2B%2FBaAWgGrJ9nIIH7CHUKmiqNWWyU2MNgwy1VRxzbxziV7%2Fwf9tp6sk1UPOIxyNiiam44n1u6l3wxR6fAg9w2RuO3%2BG4FtfbhY8WSoGv2l%2FQHyv1Rj%2FjAZ9QSTf%2Fh9KKdRJy5iFrOa04PAQBczPumm0rKxLT1gDuXbNOOOLylBJq%2F9jJRviAuXR0yy1k4ebsd64SbbcvI1Z9WflyIJ9HPyhQ2RJ1UQL2aUBC9gUJomiInjLb8Aa9BlU8ut25t3cKcGd2IW9oYK%2BLZ4VJENECrUehRtuwv%2BI4zo5ByogMSzh4%2Be70HryfcJDiftizfj0UOoYUP%2FdfEYziUAGDIZXhq2fnT3ZlNY%2BcPVUIEDD%2FbNE2GbM6dcwht2WvwY6pgF8Yym7apBx907JlN0Nea4qidzNqZQkywQGvURz0rstLnSH%2BkRo96bJyT9TPGSRpv4H%2F1andqvPCbHIr53O%2FXHSv2g9pxny0RKO3AaKomb%2FNZu52hsDNGvZwNP14dSCc6LAXC0%2B9%2BIGAej%2FpHw2rV%2FTDB12PDej5215zDsCIq1BzsBq0kgZmEV6c40yduEBtr95ZzLz%2FTVYQVy%2FR8fcYPgZWgVYU4n8&X-Amz-Signature=b8e3460fb79f365232e64a36b7936bb6828a9d6c9933a17cdeebb64c74c76d80&X-Amz-SignedHeaders=host&x-id=GetObject)

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
