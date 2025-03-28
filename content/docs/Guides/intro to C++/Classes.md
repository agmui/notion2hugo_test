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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46645RHPJF2%2F20250328%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250328T230103Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBfft4NYx%2B1FK2qUP7%2FKKjsftoR7%2FSBCNKmFYtFE15qHAiEAruz06lsqIPI6lgLmwajFQsiBb6aM0Ttv%2FeISSdJwhSsq%2FwMIaBAAGgw2Mzc0MjMxODM4MDUiDAcL2fKqK6xiNU242SrcAxAK7s%2FIbBl%2BGH836aM2h0ZaU9OmI2pAo7cmH4T6uKW0GvMONRvaiVxo5Y5o0lvDl3bdeDbfQrNoj3BsAZnAhTOgqZEsSvY8WtG1cgq%2Bt56aSAkSZe0kTjWy6jnOOK%2BzMBUB01PlDMT2P30A6ARxFXi6C%2BPW%2BtPgNWOOrD7zLAhAQ%2BzD0xRS7aXNyLk%2F5gb7XKGegDt%2BZiCJL%2FDKpxI832xOP6j0mB0s9%2F2o%2BowcUHjpPkJBlpw86eBbfqFViiIFQ2Io6AsYLpbm%2FRvHVK%2BiPuYtEvV7783eH4ldsIA54jgNEabhZKaPmQ%2FOhbHEXaeBs2J7VkfupYbo17XGdoCmTUPC5OHp5kPFE0ogz7qiU2%2F%2BcZbp5SXo1iGzhaRbOwKqwGq52PdRLxDyiuvBZamArNlJCRFTPaCV96O8Ch60YGSkL0fFKolVVyTuSMeep5adg%2B63Svr3VqoafKBXmzAXCD%2B0m9Zz0lMcIVKrHiQ8fnJSjzbX4wnrAb9%2BgkWISNT%2FUmw3zGLyqltzRBe3Tx5bl%2FsOh6iepseHLo88wxRB%2FCNWgl4YzmrlRypz%2BLPLDNHHbOFUKI9dHgexuFQcMiBWulufUECj5dy2q70IO1ifZV59Xk7LiNwZyohDNE%2F3MNjDnL8GOqUBNvEok%2BnC1irravsrj%2B%2BvOZYXLA7Dp7k%2FyC9fAwroTvu0HIQFx6Ud6zf6ARdZXcptP4ZQvluJOVMQ5YOLZN5QbS8V5sx2P66I1P5cgKlGkg6gNYGESFsSO1fRAlTSlSitAbeLe3FVXl4Sqiu4s6Ou5wuQzVEk33uIXodyD1p424BTZUnVeEnA%2B2c0GOa8hT5rMMVi5QeGKSZnVUTg6Fn3HbM6EV3X&X-Amz-Signature=7134565be02960074cbff3fb72583276ff970a08599b39f9fadbfebcb0aaf3f9&X-Amz-SignedHeaders=host&x-id=GetObject)

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
