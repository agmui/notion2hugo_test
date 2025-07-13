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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663OP4IME4%2F20250713%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250713T110652Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFuxE5i574rH2MmuNoZ4f4RBaXquo8%2FuovGRPi0G3ba7AiAEYUKXrNvhxU5t34hAAk7CLxkZ5322cA8CAlribG87gCr%2FAwgQEAAaDDYzNzQyMzE4MzgwNSIMnObT6vMYzVm7NOptKtwDk1bBobhKG8hgnEQdqeW%2BH6fN1c3dN6rJWCLlEPbhlb%2B%2Br6EP1ILD%2BNZYzRZqFBSC5LKwe4L6hxxJULi6r1lrNmdpPVf3gPYUUi9hHGVWXFg%2FPXQpiT%2BqEBOtgaszSCzhD%2Br7TyJo6z6OTuPfpKN80KW3BtpdQRDptcc%2FVRj7jAj8ee55U347hxUJklt%2FOqBGsWNyIRPiGdYs%2FUwshGnmyNYu2h7HaHl6i5eOnULjpKxZqA9%2BLM2BmYXk%2BjujLzhYPYP6lPNHQlzEQp63PvlMsvYV6Dh5h%2Fbg%2BY4tyCD8NYXV7CosPL%2FJzweDEe4ryqq6LgCsE7MK88oqlboZ0xVkJJoKndbRUlUs7D1U7A3m9iV21KqUSVySdY8nHHMPYIvyzBzb2kEeQuOAb%2Fjpo%2Fm7%2BUQl5L1bM4lfm2qRSLMS%2FgPaBX0wOwkcmlfc%2F5gtUyz7mQCgR4Fmp4fbc09DjtNuRahqJ04Rimd%2FJ2HCy0ciw5NqQgyA9VHpJ9BUVRA6ZxspCf0OUpz4jsdyrDmddPT5yIF3WbyybUtpoSG36kTQEYgx0BN07Ni4B9FVNW3sxXhKuyxGIUFnuGa3DYKEe%2Fr1b1CQdUOoaDf%2BkxOY8MARd7KTrBfJPEIgkiOHlNsw76PNwwY6pgE8II480Tk2zRzM4srzJHTTGsolm%2BIl7ZZdFvVSmJxvYefpgBZ21a%2Fhsf8%2BHdLm%2FTcV4127jWNahHs2OHoYrLqjnPBbfjvS5gQ5TOxDPskdrAVP6lNgChLU%2Bkiz5AsO2Msvi2hjWGom6bQAsSXjGgNFOS7RGlvYHdom3Tc4wgOoyvvVKeOwYbDEbuDUdI%2F9W7rL4PCcQZsUunbMa51%2BUm7PYmkOkcno&X-Amz-Signature=fe81e4211e47c44adc31a02417c28f74aef0aa25d0c6b00d3b64f236b2c1a222&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
