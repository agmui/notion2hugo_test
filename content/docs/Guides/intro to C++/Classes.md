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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665HVM3ZNP%2F20250409%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250409T190647Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBsaCXVzLXdlc3QtMiJIMEYCIQDXfvQfjxzdPoCCaFA87wA5TxUL1%2FhEkYcCFUNK6%2BlQXwIhAP2asnJVo6WYUhujyHjlZ6HPa%2BvG1VgQTy%2Fe9KKv%2ByR%2BKogECJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyHqv%2FzII05B5sLpwEq3ANSN1lvdYsz1P9wGjZtdTZem4CRa85TUvvxGmeBpA8lPwTKv1xR0XOu%2FOXaNaASfrzWfTKifAAnzbf%2Fh2qKPDZojyNjfn4%2FFgs4e6K4JnCRqxUpRDqU5R68XbqEFn2eHjY1tRWPcWGJFShls1Tx1mQ3dgcFVsRoYNbHey2NH9%2FQHV%2By9cUAxKn9mZQo%2Fr65gTUISLDVTjoZRly3d7XJdwwfaWSWIAUNulyE09X2WWFwOorz4Kwb%2BskhNvTyUYFKqOhEHrqgNwRBIEyym3uk1UqQVIOgUrerdKtzPv%2Bh1Tx%2BmgNvL7f4Y8xYL%2FCJdej8NH9VymGIDougUVJdjhevI94IZ7t3LBUYyF4sGN6toa%2BR82RcqZiDAHFaHg%2FUSpUF43oip66Cml%2FpQz8yDL3i7RkTJh8VHQuMx2MsF7ficuJSiB%2FORPovWWD4y4eYYV3YPGPAlIIthZPQbt6JKSq7muFKg2iK9ZMbhyCnHsvS3BwT9zcRUVYB0VOKsaseMrNdXnhV9az1%2BGnNH0JN45oEhclzHf%2BgOZJN1Y0uuL7mtbcUOQItPegXjnhp51LpLn%2BTCmUKgBR80eyCe1JL%2FzmQwhONgR4jzZGuJQ3mt1seE90%2Ff222LHJfHnWkDEKZGTC8%2B9q%2FBjqkAfX0OcNNPV5u%2BJXj7qat98%2FuLF25ImFkSs52BEnHBSDktvad%2FnjGi0unJWM5LzsQ4fVm8bYhzau3nJX%2FtgdP6O%2BjQw3wjzmRiuTZG8yBd5rLfYpcoXSwY%2BXP75kuLrJarPJC1gx81DFBinIh6QVZQucYUIXrXHy7C%2FBNKG3zOUBD%2FOaoqg7%2BiBRBKvbrQtI6Lm%2Bc8EgapITUn8S1Df9ZATy3KlXP&X-Amz-Signature=1602f4121d9fae2994e4d0d7aae25c06931af0bbfc14953b25726f8e8e02e20e&X-Amz-SignedHeaders=host&x-id=GetObject)

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
