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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665VRWBGXJ%2F20250718%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250718T132921Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJHMEUCIQDeTB8y9cdx%2BonXkeK%2Ful9pRKGNLqy04GcP4AGEd7cK7QIgUB7Vt5jDbvKR9p8flBGjJ25VcuJvpTTXJCrD%2BU1wDpMqiAQIjP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLLRKAWC9GtL7Ar4vSrcA5p%2B0DIJGsYBjG51l7%2FsogtXeNf9abABTr19Kb0FBSMijkmz%2BEGfzt4yytL34XLN82VYIUdg23o4YhsyVDVAJay3t9FQ8LtIMqvar2KY6856fkvtUAtizF2CpSq00WgRCxq0irBHbGX1CIsRS8uYkz9bpW2xRTVoxLV7drwP%2Fn6xLEZYydB1WmvEsYFWtPx%2BlBPEdlQKFXN4iprXioG6RFQWG0rsverzxNzYdGISg%2BR7PzDaJPGmE6Cer2zlv0wI90qDOTNfFVj6RV7zofKiB6UU7BH%2F4bpQ%2FaljO%2Fok%2FwWU8HRNLO2GgBw%2BOsAbylCQ0MDtgHwoIBlzjmZIVZ%2BHb%2BEuesIqE05YYKEu%2Bnz3y%2BM%2FgsxnMQn6KmEnJ%2BiL3VBZ4qd%2FvngPk%2BSTuUBPlXjO2FchD%2BwVwmwrUVuwNt3du0X9%2F89uoQ%2FnVA5Bo3qTwZ5AavsYvSCdGDLWAxe%2FI5MghsQCLyQ5aSwe8YmCnTCt9IAGBlUwKtOTkKdu8ts6XAVWD7xEP1HkruSE3UhNnhPgi74Y%2F4nffKMNOJU6lt%2FfzNLCJ%2B5QVZmHhx11j46LkYyn82IjCUXiQbOMzJMBOUIK%2BcuFnYXi9YMyyQSW0PLuhRADTO57blTBk8%2F9SowCMOLP6MMGOqUBnOd5fUG67dKfEluLHzxoqwx2wN8aKDRR8sIJcMaYm7z3gv7usGS6alBcNQ4GbSV3xQN48kmcGWcoIWrRzDUR3F6zPkykMvG8RVRK%2F2%2FaV%2BCGXW3YT%2BjKItMyfiATCfcxA0lnEqFH0BDALi1uSEdi81OsS%2FtV5IZvaW7XCFaZGpPVG9xOnhzUIve%2F1MxAmt49KnI%2FDd%2FDwaRoQpcGpP8H17KkvbzU&X-Amz-Signature=a50196817575abed088c47bee3be782b7e30794b5c2d57e05610438e24a7b54f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
