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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U2SDHA2N%2F20250523%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250523T210659Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDwaCXVzLXdlc3QtMiJIMEYCIQCr6qnxiQu0qS4f2opszcjGMMVtaDUc%2FMXY7Y7zCPwMXwIhAN91pHPIStru5fL47E%2FH6MfrVmXbcsnTsghnohhTf34vKogECPX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyLFI0V4pysyDcvvnkq3APKfstqMXj74F0UjTEAzj%2Fs74iP4BStamCmvxmTUNWlQW8%2FiTn1DygZZvmwnJpk3T6YxCxAxXqqLoTNFntKy%2F5HVgKogkiukTL38Vrq%2B4DSzcjgJEG8lK0bsgwUkPrZXDdacseCdFGLDQbMe11EUxT1HJGpDSl%2BAETBGVhIul1jkW3ExHBXhv4kBzrhlJP02pFjYHKhSoLe5qpppdl31iZOWCZTe2issStcead24Nu31DtPl98NcMLDoE1QKzQI5x899aKzDzxXlzEPNsv2dBOIEsaDDpJc8BiJaOMLrNYjaCSdWML%2BoxU%2FLPAxvDypfo%2F7LCWj9R58W%2FBPJa6XvjGgu4hhqvRXUJ0tkjqO%2Bsly4Y7rhWTS%2BIKZ50RNz5zDno4r6miQUjtQQGhP934sBo9wpyyNaw9pdIh%2F2aHwhixUJxD%2BgorhjDHsEuwsfZHFXgYcdP%2FedODR2VoP28i1hwQVPMs0kXOk4j8A3uZUaORBr0C2h%2FPMgg%2FO6NJTluLVke8j7AjNBp1l5V25aBQFJ%2BuY1Ro5n1Sr6xROg4rejhvx%2FgECZUwyd9bTdUdNGXcdlHSq7FeqKvXhzM3FCxqhdBKbZ4xch9ow%2FrdrwXkpJbBU6%2FlFBVWp0x39LwmSkjCEosPBBjqkAYDdoPH8S0syZUCF9gMwF%2BZnpw4gQ8mCdcEpTAzK7Jtmk4wmlZCP%2BLtU1lnKPbPB0GeKp3wt0ER%2FUYSIYmBDkD5MbN8j5ImWwaTOHgOpowof4BhPPPQDAbJsvqi%2BWN2E5CxtIt4LqhjO7b4Igrf%2B9He1eaGHd8lRl53WLnZAexUKwqEWn%2Fp2aRLvXUB5J0KxM22I2ygxGklVMvJjzKEfJ2qkjD1i&X-Amz-Signature=c6647f414e9ec37d29f9dce79ced36b8a6877eeca176d957f974936a999ba247&X-Amz-SignedHeaders=host&x-id=GetObject)

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
