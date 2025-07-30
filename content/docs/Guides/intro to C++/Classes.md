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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665LWEOHBA%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T004555Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIF2FFpplENi5A3hwYJd9r4Km42GK4spexNLFfglk6lBQAiEAnNOkFCp%2BWhgmTaxC%2Fu2pGMjHz5Szn6ivZe4BWXyaI2IqiAQIsf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBS8o5Exm4HzbqMlPCrcAxudS2%2BDq0V6m%2BmwnOHGo1Qp0UmZju4Qbf2pa7e2BQDWD8Q%2Bj0adxDEb4R6lr4OvgTVtJKAJFgoD%2Fe69CYXgZ0INHR0uVVMZuyinR%2FyKxkM4RewoxnUAA6WU6fVINR5zQ8ZtSEA5xtgwbSksD%2BHLNYVcC24FiQw3zQykBAMhHpFE4B%2FOMtOPbGkI%2FCN5Vl4D0PVapnIw5LyZYz7N4wq8Q5GoubkUx0aAoDUL55FkI52kSJQgsaknCGDlkSEWDTmsSXdAcmudNBRIOlaPONxntwdUpa5BsBYzdzAnfekzR%2F2%2FPl8INS3SLy3yxOIQf%2FhI7jIT3OGqnY053gNFdrl7UmNJWElG%2FmkH5mi1nLb1ZakjN2jBABqO2fmuZRI4F5lM4ebekaFwPQW8qlZ7IF0zywErE363KhkUWqSIWIqp3m7Z1jfj0UjvLQLyR831ULowkMROzccZBs%2FCmDqDaAPhoFs%2FOUxUe%2FXHSTskXfVAjeZjRrmWv4rw9mn1p5VFaLB8ZWgT7DYOGt6uLsL8Ht%2BPbHkkmRR6MfN1e8FZFVtgva%2B0fHnir4HJas1Sp%2F%2FERWZTXI8zkFVgt6oscX6vrHJebanC3fH75fPrlL9%2FgJ0PgTMPf4VYdUizSlNU6d2KMIy4pcQGOqUBh5cii7DiJIf6O8CfRtzSiZq0JTWaEhvYCJyAZeL8D1OFjod4L%2FbUA0jpxwjo%2ByFdSQXm6JgVl1alVRMBRA4r52%2FNpxE7uSzMbBPwileI7tqshFrX%2FIVKe8U6Lc3QZNEIUmr9sYarOppfaHQYMPtGr%2FRUq9Ffo2HyzzdKKnWekzyRHZsojPbsQbQRu%2BUAwtaPq%2F102BkmWizgBmcbmUXc7HSjisFh&X-Amz-Signature=393d3ee0ae23dbed5e94242fbf7a41d81bbf8949ce8424ff92b9a8d947e2a040&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
