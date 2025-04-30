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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667NY75QBF%2F20250430%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250430T132007Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA0aCXVzLXdlc3QtMiJGMEQCIEu3V32Qg%2F7Vp8tSnX6yzEd%2FJ55U1%2FzUNFtll1vQnN8mAiAqa40aTYe%2FyO5MRgGOQVTbwIHFVWtqtIQYNLfXxfGbcyqIBAim%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM55L6pitp%2BnzxfXZMKtwDbrIlgaefBAnkyQWeQG8ziTSQd7x4vSjSxKDk3K%2FVD3wHaPptPA6pQWuVOs77eio2F%2FW3yNUNYPMwT9zB1vqkDGTiLfkJpSvUW7XiqGG61DOhTBRxNQXHoqDSc%2F20aT7Lhujrozcp9VkR4e9iQJr03%2BnezwF2RnJMn4dJzhmiskb%2FHk9c2a067PfOYadk6j29n1TUJHieGNobi60QPdc5xR76059aw6j9lC1K8f3AdRXxO9gtpNC5PWiMoPe97HByLKGfpw%2BXheLm75d2uSYxjjdGPgKb9%2Bc1zvzxwCScSPSoVQIWhKMV%2B%2FPGfdvWbtGeEx42v5s%2B3z6iGMLq5T9Hs8%2F756k%2BSugQI3P15FoLISvIxRMtZgiVHh9yAkNyfsKgM12Leysfgl3NtfAgJX95iBcRkgcQZX7kJXdZvBbnHV7PMi8wFfiltykHLxI7f5fFD56K2xjlaammVfllFLtwLaIFDb1PdTLB3AYYT7wVOcFsZ2YxdTurFcoO3%2F%2FawpVVOkfFgZcxJ%2FAK3Oladq2SsIgiOTfwMKfkzt7NiK469Cl2UuNIs72%2BpfN0wXDPKDG6xFoHC2h1tS9W2%2FnyKWz%2Fm0eIqbRl7UtuUV56nuwkZHFLDwBkmLCu5y00wagwv8TIwAY6pgFUVsS5ebS%2F66U8DuG0eC7W9Ehz0oWPYGRmdL7QAHYRW7g%2FRTr6HWcUmDyCTfJUNIrocaQWkEboeSrnDsRfb3Cr61teRYAM6ghYpbT8VJg0Q%2Bs4jKM4F7CMF4Kp4ZGUaLSlu7Rl%2FRm1NQPu8o68C91dNiKYYtP4pMe7NAFlV%2F4YHcLw0Uyyz4iXlsAGAkRF3rr%2Bx5XHaYee0G7nt0SOL6W6%2BRgrF1x1&X-Amz-Signature=d80cc14fd60a9a54513a2edeec6196ce8ef5774abbf2f4aff3d0f0b183001a0f&X-Amz-SignedHeaders=host&x-id=GetObject)

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
