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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WI4PYMPQ%2F20250325%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250325T200852Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIG6StC0ekGX1i3CkIj%2BHwSqTonjnEOyebMfu2x0DK%2FaNAiBUITWpapjnFjxp22j1kYFHpJ3%2F8UvvIEHMDqxAVSpS%2FCr%2FAwgdEAAaDDYzNzQyMzE4MzgwNSIMt9pzomI8a1OeosH4KtwDc9RtkW2iyksiAtj%2FbQsaPzJD1ji3L2uB7Cg2n%2BCH7P6pQu%2FoArbnH28kHlSES6cW5cSGx7sN%2By9VGr81vVv%2Fj5shpwefydTKOYcFNNiu4e%2BFRirdF330qO2NtRYDvt7%2B3g9Dmja9G0Wxq8jbsxGbHOZxWUvSk0eGa%2FUC6YSHaAXlpx08xAHhDkffFNjEHgL2CJTasUT3PjnpesQHuMFIRrGAhdXFX1SuiNeKD7Y%2Br%2FrVacfLybOePB1CwyvZipODw8WFIPkM8EKZvwnCtP%2BhyCZO8fbfXDCdXp%2FwreuopKdcr1qxQ1O4htiT4sGjBUh0Dv8VrDjMFBAhHV397%2BYSjp9oABF90BfGLWl2vgy7fMB6f%2F%2FmcI%2BuMrfjTPhsqIc1LE787ZIn4xzHWW%2B2xyRWr14eA8wm3yk7dAcFHdYmksU6TTYjFYheX01sE1JVnTRLWYWNHq61TgShHmAl%2FsahgpUjIK%2F01DtSLlq4ERSpwJHT9QAYDnksIA756Cd1MD4MuLazg2aOTc2KS1fcQbwEoI3qLGOXsilB0rqzBoaTjbLigUX2IkSX8bb5OIPlvnOkYwc6j5J3civqwOo%2Fm6WSGPUAgTlH6uTVAQQL44UkBQpPW0M6NbdI1VXBct0w85eMvwY6pgFlKSAsXaeZrWV7BDnl7Z2W82DDbIDDZVWd5iNYNfCceiZYmuhbGPN%2FSDRNx5lc9Y89%2B693HN5swQJZAqsCf0ZAn38b%2FcfVpTz0%2FRzZOhq5cbd40Yyvgnf9Ev2twv52JS7lQdua%2Bfe2VVWVcMs0YdjgY8u1S48SHnAyfMBykr9b7uGGEc477t%2BVaPGwPbrWLbp90GvLwvpBnN4FfG2WY3qmtH1Fdgqt&X-Amz-Signature=1579db287cd99f1376bfad0f043c1bbb6f2fa9ed0004328f590818e643385186&X-Amz-SignedHeaders=host&x-id=GetObject)

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
