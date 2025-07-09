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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZJLML35J%2F20250709%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250709T121634Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCcbZIpTpLsQzcFDQRu2y7l%2BLvvJj8%2BrsTYZoRV5x7tqgIgIi2uPxPG%2B9hn7vssWzkKQej8nBZHsoJX3djHYxJbPHIqiAQIpP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEgIYSJ%2BenoIusb0lyrcA8kS3vwTsA3f1pjKioBZiQd2%2FYe9TaWSAy9bceba1oFz8BIZ7meyWIHyr3Rn5JfOhYwKlEn4IpsRUIWJl0Iaaw6WBKs9iS0Laisz4t%2Fj2%2FQp0l%2BXB3jhMV21N4MLdamzceOVjvJR7MNco1c9D%2FmPHExJaVwmzQcZAsFU7UtPp5ONoYpLjALmgysInBg7X2iHUFstOWtMD%2BGIxiMrsyUWiddZwzu%2B8qYrpNZKiW7g9aZzaR26z%2Bh5EK12xH1v%2FKKIZZkMJrnItshjuWAQwb57RxfekCgoe7VQpCVB2uyp3N9AByG3I4RsPlK7ehtH2gMncbBLDPbdZ2Z7b2ui4l%2F%2Bsu8A8TxMMhmt3R9rR008%2BEDfpo2g8QzV0g2W3H3FxDXphk%2BvnTnnx7TvtUXYIxF%2FJbkQrFq0WaeFQ%2FWxZfw7ijPGRn1ITe5O%2BKvH%2FhRNSong7TRR%2BARAr3Yqerlx4j1voQVVERyLjClA1anRmUewVcQ16QiWlmyt%2FWIvCZmAEFYpKGatbeZm%2FcDUo0fDFpTDXsCHxea9m9hpvDs9WN9sFkgt9bVEbUknkOyE1Kxzr%2BG9BwPLUHx3h92B6lZYLmn3BorEUDLCv%2FbywO3Gy6hNUAo9zHbdbRsnjZOpZx1AML%2BLucMGOqUBibRuPedP3yQjVzUevrIt1X5JWWHxr73dFL4Kf6tGXJ6lXTvskdFOMqe6j7BCttbKuefeudY50hWM7NIia4oB9swj%2Bi8amsdNvGeGVpQSdcRsJox9icN9szGxRmALn2X%2FOsNgH4xOezDnnyjbcD2HwRD4gYv3Sp1BmibW1MtPbHkGtMh%2FvAmxOxtsAnjSQrLL9e6rwM2sZnWu77144E9VkALG%2Bsgx&X-Amz-Signature=487c3bde2b92ee64567ee747dd09e2edb67fc747f8531c89b2780e1ed3544c29&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
