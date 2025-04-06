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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YYSHQBQQ%2F20250406%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250406T140244Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIH6N7%2F%2BykUP%2BWXf42z2pnocL0v6XRxCMdAbAkSzrpsH%2FAiEA59lGwOAVqvZt3fTJH5tcpbAx9SbayYS5gfm2keGyBG0q%2FwMIQhAAGgw2Mzc0MjMxODM4MDUiDO1reQbFq%2BqknmSt0yrcA22ti%2FO%2Bx5ZO6rcT7CyB5oyLaR3Cv%2FSAJyfHJ7obihduJYms6rKkHBo5CKubLQEKH3koadrg0TpOBW7KYpR%2B0qP%2FuZMDJAjXUd4N6g1mT%2FgfDQaBBZ%2B1m3Kioj5g%2Bbn53JV2oBfxl4g%2BU3Kkodugki%2BYTUG%2FQ%2FLcm9uI%2FpVyNZrOfE8zVTyCpSvU7B9ynKxhvrc7P%2BbtUiKP%2FAS8gT1jBl%2Fy6SwYMPuG1KweJERosKNCiWPv9u77xvhOYMck2h2DSQIxxmw2KsAgRqdA0pgqnjluZZ3xp%2Bp2bscCJ%2FpLVDn6rbNv6EjgZmD6L92%2FfYpYYblTLjQpvpYqd%2BGZfpEEMng%2FL7Ge3RUl65kIl%2BqwY2Y8aE5z4in7AnCmnCTrYz9cYn0U0PC4rCAIDcodHpXxXkBC1l1totPkmFkUSzYaSxJDpPBzJyRVqd2UH9UY2dP6FEEBXBwt4k%2FoeFb6VNkjl5IpHKM5n%2F1v1poAPSEDVYP0jPGGww9uie6F%2FWkk%2Fcj%2BCamEU6%2BQzCmcPRsZxl9VSKttix7juYE8M1vI17g4vIKXWJYHleWUlZC6IIK1W3%2F6O2fhcHBWwRaKBV%2B0hM8gB60WEK7yiO%2FK%2BxcPRMSjTX0KbWD2Cv8FLi5cIhnCMKr%2ByL8GOqUBP6MUtgOPsq%2FDyIAmWZB7cSw48J4HDcBV3qRouSSjsR9GrGdJkvmtzVqIC8RGzPnSbEA8pCwzYRHeXHSERFqRdW2alkMNzGIOxbj4GxvGjPw1yHRl7WcaVUfK%2FXugqWrtcGG696ZryUY%2FU2fZarXCfBK%2FI%2FVv7k9h%2FCY%2BBrXuU3xSwjCLSXaPjRNxfMDgmfrjHw5RY%2FZ7Hf%2BbqEszV81WikBH83Pc&X-Amz-Signature=950905633d7e8c7b962f7609f55565b9adab7b5045259cfac713b1f3f83a5cd0&X-Amz-SignedHeaders=host&x-id=GetObject)

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
