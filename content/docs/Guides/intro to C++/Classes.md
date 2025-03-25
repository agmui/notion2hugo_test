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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664PNO34OY%2F20250325%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250325T131915Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFhxhyDFvq%2FIPuqK4Rz2tYpEBaU5%2Bkz5j9QyoPs3ZcVnAiAvgFY3lANbEYGIVJu4jhz4qA37N%2BH1pVzXAagz4tPl%2FSr%2FAwgWEAAaDDYzNzQyMzE4MzgwNSIMEPOoFsxHLLV5Q%2FMsKtwD5AVhVQli6pVvWl04cliIznlBJBHs%2BDVTIexkkn%2B46zvFKinH%2FM9U0GVaC5yMHGC6mwn9DuyYs9v2nBwUWfgZR%2FhYL3F6MmJs9KRh2sfo%2F6W1vZlWx66CFzq3CdbCDQb7hD%2FS%2F4JoZGiC9423WNkZikrnK1SsNlBvBTefEWGVTu3tT7G6l8rSBRbLwtQtgoHN4vayMelw5E6HEyocyHVDNmNuX7gSPJPIML7QijqaJiRKtDfY%2BlEPN0I713ZwZUAr5ehXR%2FI%2BS3q2zP3fACnACJQxvk6SGyJD5OXJwQdjotfFTVhOKh1aQHNmMWH5M7cR41JO1d7FGRDxsOH9OCE4YxkBZd7JelPtfdvvUNt8P53KHcqnNiSOZ453RYJz4kpEQEuMPSFg4LgVTFT1JJRwgVECV3p4sBX%2FNXlQTESWRWzwNX24VZCLKWc1zx4oQdz%2BvtUXdc%2FIWH1IuKQEzKP7hxZHsIvl%2F4qyuEOnoveU0LAzyi0S1%2B7CCxos4f9w41yh%2FpSZVNF%2BmuansVnr1zwts%2FbnzG1k4%2FgM0%2B13M7indTbqhCb4Z3XoBnvYQaJSbuiIwx1nQNVNpJVRGXNogWTpjtE51zCL8H1ZgwtALoSm1vgklMVswyZlM3pgMwYw%2FcaKvwY6pgEaSl0QxKxtCbzK1EGBAXOBI%2FZoJFuzNRcrMmlC8lTlr214Pur%2BTX%2BinKZNDEOOyrI4kD%2BfZCR1H3CdS0V8x27MymjdVFaM8tUM%2F24lB2agdQPm%2B5ID7Soj4XmTNROrnxF32HntSFbGMK2gN%2BXtQj3LdG%2BumwgJWnHWb%2BeY1K4hCDKHjVUshfsIOXKbR5h%2Fdlpp3WbD47IenXDXRFIaH48OLlZx%2FREy&X-Amz-Signature=c8141e7410fd669bc7a3e0c5a1237d9eafd8774d8c4038ce2c6426852338e9bf&X-Amz-SignedHeaders=host&x-id=GetObject)

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
