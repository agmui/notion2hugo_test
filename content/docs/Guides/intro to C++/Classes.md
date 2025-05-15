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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XCTGFITI%2F20250515%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250515T170755Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHkaCXVzLXdlc3QtMiJGMEQCIErO3Kht3XHgTBwbNJ71TeUtL7WJdlIDmtpTkeoDPn7DAiA3YO0YrFg3pSV09X7Jt%2BSSyc6cWAzVvR%2BrtPvGX4x77ir%2FAwgyEAAaDDYzNzQyMzE4MzgwNSIMPhFLR8EQiNDYhZEDKtwDWTR0OLxmkRiSCdoYCTeOz0eVkOt1nFAeQxoypta74iuconO3xhEOGsk80kVOwxwzlLlHk%2BHwEmdnIWfCIrcleF9L6hWqsb3lTsmwp%2BDkuimqDfoSA6FaMtSWYiMX5orqoXbRMUk3G%2BrRXyv%2BvWcRTkVeDkfN1%2Fysy9BMp9I9hvVu6jlDa4u2Ww1xUm2SqXwsCUflmS7bRvV6%2FuOjxH6ieXFXtIBuBfTOws7yd2Q6SM0hSxqdPhBQvxItzf376RrPLY6xc8uL3Ii%2BqNvguVHmZBRHgFm6L3p7FTBo5NI2mIsm287FQsrB1EOlO511wlYSO6DSC%2FoATWoBoWPr1nRT503jlff7gdaoY68gXdHRSE2JLw%2BUQ9xA86Bvlq7JMu11fxepc7v4wiFQqWyIuhfRflayyRNrLWX1Swdsn91ZKxBm4dUPl%2FlC65t2qDQTiMelzLzRxwz5vUlIBi23%2BZaZQr7M1qsLfH4AMIMXLHpFtTMSxWUVE8aEHwZZj0Mrn8%2FPTw99L5rgY0UHVQrt51%2BhRgeRWJAvD%2BDU9Tcm4WSq80G5ZUbqfdtkj4PzCPnU4tZTQ76pEYNmowE%2F0ZrIDJoo7D12nhLmXdjwVdDiM%2BhclE1D%2BfeIo5%2Bymbc1e0IwzKyYwQY6pgG5FpXUx2WGcbkxbh38pZmUPD8aIBqFazxikSOysgfxxOq3FU9evnazNMAX5oBDBYzvZO5ROdDF5Ns6H6ZES%2BKNtMT2Fh5Xb7j3S7odzGvPhvCP6MdsjrVimkGEr1ChbNgVF0jiYqzJHcX5niZNsGjAKTCs%2FmwYCYbVXbhavfn9rMrnhhfQuSTO%2Byc6G3TOxRUJYX972TE64zJzYyaz%2Fj0CBQeOwyh%2F&X-Amz-Signature=ecea1b060afd113895c11550c1513dcc1e5b840af802019ab2176143738a6cda&X-Amz-SignedHeaders=host&x-id=GetObject)

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
