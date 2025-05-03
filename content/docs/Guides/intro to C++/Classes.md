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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W7KODJN2%2F20250503%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250503T032851Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEsaCXVzLXdlc3QtMiJHMEUCIQCPIWN3ZuXEN%2Fw86SonDktnzfx6fV%2FTBYgmuH4zaUCFtQIgc5UIYpJbX5EDHjzUvudnK4zU%2BRTovKPNfj1Ej35I0oUqiAQI5P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDO%2BbsNXbEPfsxkRb6ircA24eo5WxUpSQSPaA%2Fchg%2FsrVfn5meKfIvFWkU1lKDLpekXjLKgzriG21kZHXu7ekcBy5lNwCOCX1DpRWe2W5Te8zNTqLhr8A0R6E9WuLUFY8pbZ2BPkDvmpejietECokv%2FPh84Z98QNrRbg8jXCg6b9B2xZdqivbb%2B%2Fg1fHu5bhAFiRVYMVuhcAaKKk8bROOfofEDed8%2Fh7z1a8rIDEym3T71fSV7dWLyvxlB2%2FmGk2k9E83hqCvlKiGCqQMDfmeoT7j82GshOMR2NJsGmNbNrQ0fyPGsOnPHbVDcRcwY7mrKlZdnYUqvpZniLQiczigoHKdUwx3zj%2BBRTAP8sDYd%2FwgNRouGnloHfouiQ9v4jSkFdeoUnFHWAm3lL7lQ3uNKA6myRoWW2Mg%2FDp%2Fmr8wMzlhrbyy%2BIJrfi7Jb1vz2cKxPG3DUEkQtUT1X2GEzihbCSm2lP1kf41QhfT3ctt6dpKXTOnt2ttT8LdeabmMgQclp8zMG84l68i0XhvobNVd4I8nVrref0ABvywNYjA6RyaDuJOuJa1aD01gqhcBCmbwfpBhevjRzw0c%2ByYomOIODmUxxByehdkkNxKbEPhWhiRXS6%2BQ40xdfLQcC6pVlrRmU4SeVnx%2BQ6qAdgY3MP2G1sAGOqUBKj0%2FB3kYtM3TQ0OnJjSM7FQB3NiB6CXh9jBnZwL7I7JCOBa7LeU17uBgQYzwbZjXbSZbKioqzmzokW8SB9i%2Bvfu2RVmb7Pzp41GbEAgJDExO50YIm6zZOXmhUVO4SywTMPYuMtisIhOmZRNPyfIN4ac1Npy7e6W%2BBfej4GdM37mrGALc%2F28W0qacSuniNqcrBmA0R2Jc2vq3sDk1WIvGyAhWDhSI&X-Amz-Signature=5f3b1c419098c1fef9d99ed9e694eb89a612e5c649714e3b6a19bb454eb5e2b0&X-Amz-SignedHeaders=host&x-id=GetObject)

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
