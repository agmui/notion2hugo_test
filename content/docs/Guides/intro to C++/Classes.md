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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XRRHVCKO%2F20250608%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250608T121352Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDZaI7ibJ5nwaVfp6Rw0EZjP4Cs%2Bv1LDfsF1mnJ6qSAuwIhAOyuX6984GBpVR3GQFJ%2BhIjm%2BbXHzbSdz%2FaJGREnmaOMKogECIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igxj3pWeuLPxiSmIw3sq3ANrwZyhDH4MEfyrGtt09KYoBbCkb0V66jnsKiOwRnVmVPVWsVjEya7%2FkjT8yf5w%2FhNXzISUkkJJp%2B57oGi9mgM8Q7QaFbbf0VaA17bZFmXyXa4kRGuJo327anY%2BwfAuy4SE5%2BfApS5j6R0BNlKyseNDOS6L%2FsnnKlDedO1m5UCEp%2B9zZZbY77fs8hd99lobXbFIQVNvy0NN3wtkbC2YE6Ab8tjch%2B1r5y5ioxzZeyloJcTuGq2wDbgY4Uf8yLTGTwyYtpv4BYISxxYcVM9yj94mDdciA0uVCn%2BDIKg77p8HtflnpP1oywktiY6lowF9Pp%2FgxOSKhsMfq2celBaCowV6WlFj4vKET2CuOa2LT77n4GuVeghCUafMo5cZ6ucdbhj73gU3c85esdWzjmByX%2F61t3%2Bj%2FQnlSVVGo5f7%2BZw8vIZANHpWn%2Bn6sfujd%2FdAAQaxcVFG9Rdd%2B%2F1hUFHctwETsDMWXH%2FUg%2B6XuL6KcMAS6HxoD9HlP%2FFaUT4Hi%2FsvdYHh%2BOEuv9i5mgC7kSHewICEmmJyRPyyruhum3FPnolB%2FjfikZEZQmvwBtEfuTDKjM%2FKCGvUThkpq0lvVV6i4AGQeLLm0dH6qRobGgdey2O%2BE9hBIUczg5XqvZcewzCDxpXCBjqkAR2BOiFQez%2FZliZOOyQK%2FkfojllJYdYYQbaF8enF7nSw2RtFC06Ybm6%2BUVrqm5eh7qAVnQGjWggoPBUdzT8S%2FNTn4c7B6DpS0PpXXDtKkLm%2BUzfh9ndOsAeirOvSm8zl8laB%2B9ji1ch8nP7q5FDDbr1ZULZSxwNmf44fWePXAK3aaOfbTCiu%2BgQl43RI0EeSmreHegW0atV6alAsw%2BDf24%2F%2FCJ18&X-Amz-Signature=9486ad1a6aa3a687813747def43cfe9780c4addf44f5602553a52dcb6c42249b&X-Amz-SignedHeaders=host&x-id=GetObject)

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
