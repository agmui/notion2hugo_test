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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667A47WH2O%2F20250209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250209T003820Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEID%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHbCXaDzB8a%2Bqj8fpX0c%2Fkm%2ByLPkLCw48P3xmDWXfgUqAiEAhZj7vS6JaXKdhNJzUnx1aRkzCUTsUKgi%2FmsXzq0x%2BiEqiAQImf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDG2wDCBLFEEOAFE0%2BSrcA2UQ9NFO2yqWHWgZx5kY5jEjWyy0BgemSVtWzHQ26bYoOOvh440NajCHP9CK2Bq4HvqnMTmXhkPQQQ2%2Bf%2FPwoaBWwx%2FM%2FXblZpO%2BHNXL3QIl1Bd%2FGhwsxZlQWgxjmtQTBG98lI4OlhTypbQSO3CBgFZ7iAQyZD%2FQLrObDDqLiWFx4Bt1GWpuGN0szV9MNGu3E6c7ptbUh8XgoTRli8%2B2qdL8F3l3iJul%2FDtL%2B0%2ByDUGoZ7p0NJokW2tIKlr6QRYiQ9wTDWKPnOOCbSCymLNWR1vlyEijKYFI6BJTNsU%2BQ%2Bfn%2BI2C3KrD5IBM%2F2O2nIfCkE20rx1%2B7Ox2qt4hgU%2BmRNMFU%2BtEUono9rv9Vbp23ZSMTTNcQSSF0aU2ssnO2eDfQqnneII3%2BkoM7OYoq0T0mPCSM2sxqACbxUm1yKohSorq6iZ1kQquFtBQ02RGDXatZPuXCJGHf8ryP0r3fpe8c1wW52TZajqvjB8GjU%2BKJABQE4HdVsQ9kDb6aEM04KxJuGKccFLEISmoDiT7en402hpJcclhXjfMBen6SoafFH%2BLAmlAQ6HISwezcPapC0aKPEcG7%2BA5OpJ8YHHhBM6Hz2eKm1PY5UiZgXdiovTiOiEiMsx8KZOIfz%2BoXRSZMNPYn70GOqUBD6HYY08D%2BTrHgqGWcEi1TT1OADbN4VkM32P2TS8s6FoZZzpT1bZ2xXZNcKkNb4T6nzRRxgV9f1q%2FQDOB24jc0neFtiY9jVZqhdtW4lZo%2BylZHPU9OsomNs8SiLuBB7HdGgTjZckzcQnB3CklRdHUAHY1H2mBbEnehY84wDvlu0MqwRZ4m4YTdrGtlIMUBW6qhQN0atsfh26SRHpOxpqjMYqNuCB1&X-Amz-Signature=d22fba8e76ff8f8c4a6986a1f1684277130889f809fb2a663f0c987e04703f35&X-Amz-SignedHeaders=host&x-id=GetObject)

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
