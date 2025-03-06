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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V3TQXLUD%2F20250306%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250306T121416Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICRNEnnj6BJr3gJ3K2lFUblTWWgXbuDu433ew38opwDlAiAB3ISheWCc49WwBfGre5fEJULqQ1xYrrgOoy0MCShH8Sr%2FAwgtEAAaDDYzNzQyMzE4MzgwNSIMoZritiIcMwdamP%2B7KtwDV2HUJRJGk5Y5XlNGSz0Wi2unlcgObCpsMau4ysuCNPn45wHeCM3NtPhbQKoYppB7TEwH6wXohQMP0ge%2FWF6y2KKNWysp3xpy%2FseBKlsozVLqQtY4ULY%2BTZwKsLlWPXKf%2BSlnRf7hTVYtrbIgVSdwp7UzxZpNQm07LaKJZ6JwTJY4cNVDFLHgldcFeRFO5qN0Kd8K1dr2Oby5u96n2DMg9BCNsvZqMHHpJCZAfO5FtzFT2NPgBtJa4UUg0BaXPHmrztPpacjI2sEILugcBvYpMzPMhDEEcVOGlPReDrKJ80mEoPEFxNisnngse7sO%2FWAU96Qwpujm6OMmNEePEVHywXmKZlmPypixD8elNR7ff4G2kINGdRAcMqh9N%2BXs90UrkuK8kgip1Y7puXf6euX4C1KMEfajKDJoGAgecN1AEjEu7zvfcRWDgy%2B1Uguv4yFh4GhgEoSg%2B4cGXEIZrZOy9ydUTbiIT3D%2FalraV1GQtOZoSuV1N3x66tfOlKdeivnc2g1V%2BSqPDklTx%2BpKTobMD5dgdRcIJEGIt9dUBvCU19kshAKB601fvNbK%2FEWzz5nCwGm5HnEbe99N02VbAmCTCIwQbZw6E45flPekLavRN2LN4gphqLKvzQRE7xYwspGmvgY6pgHx50m%2Bkez9eCsrPUKI00Y1oub4gFGdjY6L%2BHdvdlVOImhxRyrg1Fcu%2F%2BguurPvqiQTX39X5LUaL3dyZJSTgnB%2FC2ecIa0bcHSIHZ8WdeW6ND%2FQZNHQEEXoYpbYmgoEOEeNfyW8fb7iNoBWaHGUCAJTXKdZ0L1Kj96rCTBOIISE4IJ7DUgNKNcsKaQvweYSNRAyymIRj17w01PjaByOrYnNy7ipUQwN&X-Amz-Signature=68219afcbc7ce711c28095fcb0f50acb916b77329ac913904d8da386460c3f89&X-Amz-SignedHeaders=host&x-id=GetObject)

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
