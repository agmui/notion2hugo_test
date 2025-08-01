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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TE4EFHWN%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T201012Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHTXocdufXzIsSEicHTPIfhVvf8a8%2BC4fdzeG1rPqDpBAiAaNHxEeqxh9xFX5gZxsEq1qUbhgT9I7dOp08DtHxuD3iqIBAj0%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMVmi36PBJjM%2FIPtZFKtwDAUriwzzV4YxUuu%2Bjr0QJyLm0EvTClWdHo0%2F7y4rjvU2uznfKWOzmFnc78H0%2FF14BDMvYLWGmugG%2Fcz%2FjwYbYO1AYY3hBPUby3DCpq%2BAhbeq8bzH19ka6x92meW1vzdirfWkIA6AsSQzm%2F00iAIsPDnRHr16oD0J2f6jizB5oecdQZ2rnTh8rXTsjYWS%2FZDhByHxSzi%2FI3DtyDHSxMCcC%2B5LJdUI1RsVET6te2IAroHtDoUmT0BlxCwyP4xngrOegxXJW9hRH%2FFmES2Dtz748BOYjlT9rACacLNw83SpEA8rw%2FYLPSswRtCRfC%2Fato7zg%2BSukNzplFTcNbIajeOWeRtFlmQ7tb4lGa8GZ4%2F3FdkK5ngDWnvMrBEoRKLBifnGhc%2Btmkt66HWrcYh96qG9CNzFOKZN%2FEjBGr3pSmLHMMC%2BUQtAuVBlFNLG4iO8QW5U9D9GYGV10obG7Mbqj4wtLp4k7YTEQ8QCORodMmSSQfQKFVyh833ScdO2m070twml9t2lJ8N9XhDYAlVr0a7hOgnxi5tH2imQ7mApWh37qhIuMTc%2FSMYel%2F5JESqdjtR8vq8TA6mmofRLKNsAmg%2F6maXUWHLGBxY%2BaJmFiNnvMYqqy%2BNRqzNaJZhQ7Vhow6KG0xAY6pgHVLRMwo%2FO2AxpkGachcK1gINZZQGNoIDPYkvajbAPQl0ogshfQrcajZZTSdFNhxCn7%2FMRGV0qkZwJ25r1lPOWd4le6N23o0LLHei4nZSYsLMuPA69tYzujulXIOrDAPIiRk1fLUnSmlnEpOvkafw0FUVcyQoVSKoXo4UnemFXIBppndOqUdoCqE%2BIFxhS2xOX%2F5jR6WlN8Co6FRIib3O1BynIxjknI&X-Amz-Signature=71682860df7ca8624a1d20e4d28fb1976d500b3e06cbd6618d002edd60d8c893&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
