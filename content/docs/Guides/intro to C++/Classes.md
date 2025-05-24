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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RC2XVZNF%2F20250524%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250524T131834Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE0aCXVzLXdlc3QtMiJHMEUCIGAlG5qJAEesM8xfoDdRQO1exzMUScw0JMy8%2Bp5WBkjzAiEAwXz%2BLMbGZ8kh1sbCKX225GhM4g6jxmd90%2F7xSbPbBsgq%2FwMIFRAAGgw2Mzc0MjMxODM4MDUiDM2GmlY%2Fi7wJJ04%2BNSrcA6ja72MCjPF0Wd1Z7V%2Fy8jrqtLq3EIHdHvVtxipbFUq80Trum28U5HJZ84n42pol1MPUdM54l%2FsoFh5uEHOdKCrxvE72S8Syn5xDo1UmQIwPTC%2F%2FAWzgcnA5dgSKu8hCb4mL7P1cdjBMlmNMfrzCzAUKdaEXcB7%2BnkX7J%2BH3cqEscy3hrjNJeyUULAK9LDR2BSOhRc3WEt%2BN3Pd57Xsyl19lpESquQE0iy9DSHXjIxcyI8KAGJwFq6wmMDRPrwIvBKzYPt71ntiGtZRCC9VJa6%2FJQKKj13gIZ5XdHiOaXz6pQ7hf5UzgmdVg1lPa5fktNMt%2FmT6YHbLz77lM%2FpbHJdpzXUKiIfA6kgse1qTbnJ5yEMJDQfaJgfVtf1cr9VNjVzcmkm59JYUHk%2B909nlqco%2BlKwMRFaEYJUg%2FgcYgGcSY%2BkIJLMbSHfe5OQIrCqwdx9BAT0B7jJFQa2DY%2BL80%2BV8isNZMJVLMZaF531PcS%2FlLTXf81Z9w8HGEzNX%2BzZ%2Bo38XjmZBIDntUsLBIILyDG2o%2FSf3p4R7mwMGYtG3jdBES4NjaGDvazMUPaR47vgRfwVLnCNpGMxrtRLqS6a4hOBnHTtEMFujwbmIV8bKl7mpRqIKQXASC7h1JUK76MJHzxsEGOqUBB63M64o1sIUFeEbrG8MgpDhjOCm0SZsO0qKBoCOO3GuPfGNN0Frz%2BcwYjQQ6W1eKdkjmSxcfG6hE%2BSHsKjZvbVRz%2FoDSXqe%2F9UZfhccA6tzXsudVvMmwm1z59iHiNkhx8RCFGhkhLXuGWTzLiiYjJfwhmmOqFXbfuIzCWwrXqFIVtCZD7zQ0SPjT2TGlr%2F49sVN6uQRD9ydzayYCFM%2BfOVw4QjUE&X-Amz-Signature=77b935bf38fede5372755ac969ad393197c14804fb23f5f09b0aaeb0305510a3&X-Amz-SignedHeaders=host&x-id=GetObject)

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
