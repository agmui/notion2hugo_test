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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RXOO5FB3%2F20250210%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250210T020940Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBGKhkIryPWVpFnbtfa6nz1OywdAKI0LIvbZDc9IvY4DAiBGfs8pwFYhpjJlTg%2BfvQ6BUkev3R6Z5ytwNKOJmj2SlSqIBAiy%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMTjoHifivb%2FWXS4uiKtwD%2FcDLPkff%2B6HQNcQdruZ58YAh23w5LQXX1NqxnLfuir6FsUEfrTTV6H79OsF0A2UKiRaPVovjAdQEs8KLAdPNyY8RPlnDDXmEoBkDv%2BbGsAYcBc16yntDRwI3r%2BKMH2I1pOoEr%2F9nncOYxV9UbFXRhwroxlsYY4dp0me0AU8QP7REIH83EnJigFziNMOyAtBdEV%2Fx6GY2d4I0amn5xISlR17UmMcrDP8xH9xFhgLV%2FH1QA73Xu1K%2BqRRMhK2SataTJWvcKsivTfAlv%2FbX4tSNfU9gdYVIbBp0CLs3nfT5EeHokcaKiQFJiRHdD735B4uNaHENR4Pp94e54Sc6mKhlsoo8ysxnUjYgc2cTLS87lBMDvASxsoNqWMjyq18WFsE28r8u7BAX9ZQ05cT4HE53ZL561w9RpE50NoygNbh0%2F9zrtkhX3XAcFZfcK4WRkc1ROSJFjYYa9uT3SvHEsNQVLfKwIF3XOhTD%2BK%2BX0RroimjT1OL31ezbhmz0jBgxCWU%2FWYKDNoSPUsV9rDhAi4hNfVvtKGfgpuVKC%2B7l9KI1Ik%2FcrY%2BxXv12zTyzemXjNBmRiYPxIPc2z6HpKCyCVOFDC4JRDil%2BkP6IMt2abknI1eaZr8c55MxCYRVBHIgw45ulvQY6pgEnCG4mCccUycf%2B0Jnj0tkIACJaMXRdUu9SnDB6MG5rhwNlPZRNAwa74wZ%2Bk8oZ5YJMDx%2FwuMzFb9yzDcBv07%2FM1rvvWOt1P0eRo9UWzAOmw1H1qupFZzm1AHo6hWp3PfJ%2FfBmiGXd%2BVpUJZVeFzAzUkPOhLcIHbdZ4wQvrY1yxUh9FaSeiyZBs6hIDHly13vY9c7QVvj1gz9MPHSwpsedqB0NcpCFF&X-Amz-Signature=7e94575f904b03155dc29ed886da1c7fe976c1fe55d4950c4413667416bc9691&X-Amz-SignedHeaders=host&x-id=GetObject)

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
