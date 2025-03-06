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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664LM32EE4%2F20250306%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250306T181034Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIC4Yu9IJ6DX%2FGKHFqf77pMCA7nDqi%2BKewUbHPSsRqe%2BBAiBLucnlVy09DsHuml5MClGzZ94RS0Rhc%2B1evJLxn4P%2FuSr%2FAwgyEAAaDDYzNzQyMzE4MzgwNSIM3debocUR5YNlcVjSKtwD4SUpipZlulxTHfmEJUUw63mQJ1CXS%2BFa7euBvJcFmN%2FgMosgzqWECfIwzL8QYHpmD%2FI8is%2B2LPNlHvPzLDfmI1%2F1w4mK0cR1rR9LseO0KOZYZO244cEXwBjTHW0CFBIVrYed6e94BzN9kwBWv8RW%2BdcJSzNCc1JG%2Fc9T9HbQYaFa7kJuKRihe8cc%2FSCUQ4NvblxhR9XYul6xVp4vEP7dU5vPMhDcln%2F1kdyb5PAQmneAuLgSxlf200BUpr32GWLlG2g5VDpoDXYs0OW88U%2Fa%2FERzXViCo6HHZ60Np3TI9m3CW3JjOEO%2FOhBQk1ljFtZvkdTL%2BiUhE3cC41N1cKd4JmtWEYjqfwfcEloubg8BSoVXMS%2FIqPFXLVpdVNZlOLqQ9TMpPcbXS9Ppfy0wkeAMkNzBwLlwlQeKR9ZEeuSCJKFE%2BXU4OHBrVO%2BCeUpZJDd4%2BbKHt5q82YhChYHaWIqOQhbytTGNGggC2OHAkI5CFpfwvdnI2jC%2B%2BAyfM3bW2VsDh3G8ZbZDq0xxN2jgnmlFLVWXjZqowLqxpyHO13NY7o73vfn4IaZrcqPtyxW36H%2FVnnzUvHMvqrsIR2tHYZk83%2BJA2MuK2sKHlXWlhY6l4xRHX1NNh%2BqnZ3aVkJAwya6nvgY6pgFZHXbTHm3NfnmUBMY2wAEG%2Bi15eQSHAYTurHcdWmY66Vp11iwUn%2BB6LMVQU1ga04XVrGsD1KLVJk1U162EguNtP%2FGvhJgDbWZLpAFdmQx4oHbUJsQQSdis1jQm%2Boj8dmwFJbWy1bRwAJV4o1J4rM0OcrMWf0Gwigpymf6jrRGEkpjvF%2BEwwnxAiDa3M80MC3mI%2BtnYM2Vm%2F2hMFMJYk9NdLncmHK92&X-Amz-Signature=b9510f6eb75cab68e5e56ae4b40ad3666ffcef17d904b34eb1a65dc79823b228&X-Amz-SignedHeaders=host&x-id=GetObject)

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
