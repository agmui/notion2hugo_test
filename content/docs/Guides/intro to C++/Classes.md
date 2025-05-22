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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RX3DWTSK%2F20250522%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250522T070915Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBYaCXVzLXdlc3QtMiJGMEQCIHDiZOr%2FJWl5YRFakj2GWr2Ut71u6gR1IQjRlIRpy5v%2BAiAkXzHBJDNblbFgxoWh1xp825xGhSMvTQ5xFHF%2F6KXaxiqIBAjP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMISjSDFjRRY1LZKlaKtwD4Ns7nC1CHUHutje4EDV7AAt7F%2BpMkj4AUCt9PQ9QGL5X6zYaz4YUm%2F7MRKnK0WQ%2FwMZDdGstFU%2FWEc%2B%2BOANBcfghZrxIROJ%2F0S4cR4HaZpB3HRjm5VYtr3p0x62EsBJw3vRmkWIhTT%2BOGrZrWnXcTZ6CziBE0gLbQnACIEUm3hoziRTar2gC8OT4jea70jHq5UdJrOvNBCFxWxyi%2FFKNdxifxm72BlYNA7cxaySTX42l5g2wP89NysFPj1lwWhdEeKExQNqumEivmljVP8UzgAvHf8JhHKfw6gkkj1TvHP%2FtBPWy3zOd%2BeWIQsRz8HoiT5J6XwAK2eOPEXXyEQgSWeHwmo%2B7P9zMY89MST%2BRKsy6%2Fj0hsmw2BUgmgWpf2d6SF6kqM0bNpj%2FheupxUY%2BepyczQRTPnfxvGGYvwpmET%2FobbrDxwEJKLj1zDhu13gK5cFymzuIgMBkZ347L%2Fn3Wk6G2pqAwu0GR4Cncuhz908V5Aki4woIqIHibJ7ed%2F%2B8kT2CEFce5NtkUBQnTxsN899vIbOAPZi8Ggv0XbhKgvn2EM9ZQ3XsUUVKkd2wD3L%2F1SpAgKRj%2FGETYDuKFGR4mQd1x9HTWahbIprQx51a4AoBHoul9%2FuB2R0tZqhQw2Pe6wQY6pgHAA4Yf08eolBSIQry%2FS74j6KGHl%2FJleGunesYDsCBjxcQOVDm0UWME%2FCTDap%2BRqOHkQ9CLpUe83eTxcmN0xyH7r4XcHx%2BWMTrGhg0xS5sUiVeCDIj2XUqvyyCsKjMZ9uiEpycTXobnedgxsPObxqS1%2Bxb1Ir2xyY0gBuRlubBuWJhIGH%2BKCfWvW7PAFf2qRAwi%2BZER0g5iPU8atDFPkDEXlZrJdRJG&X-Amz-Signature=bf59b5746868d8492a0222be1552536d14c0247424da42f5a3cce1ad6feb9378&X-Amz-SignedHeaders=host&x-id=GetObject)

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
