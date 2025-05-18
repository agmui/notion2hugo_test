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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T2XWFAW5%2F20250518%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250518T200908Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEIouNGPYpw1CP3ziU3tiRhVbiFBLR21CR63MOE1pIrOAiEArLN2bLDJdi2GWh9nxUoC5y1yjFmYQFv0BvfY%2F18OAzcq%2FwMIfBAAGgw2Mzc0MjMxODM4MDUiDLgNmy2y%2BjRO2C3TgircA6ruOu8ME7wg5tcVHK8YoecllqMPvxWp%2BmqZ5eeYcx4uLQ167GTe%2FBvbx30kTNmmTeExrTU%2BS5bMm4z%2Ft6CFlp9Xs2G5Qh8oIF9XZqffq91rqDjmjGRvSyaFjOz7YzDQbaIJ96GKtM0JtHHea6sP%2B6EZQOidG0kH4kIBJgWbGQZm9%2BkXbMEsNFETFNxDdED7DaUoT9hpZLhtN0gaNxOikN6X2f85MQgYNuL%2FLKC%2FfIGG8dW06Pp4gn%2Byp1rgAIzC1XL8LSVTBRWjBm6hZkeh3bLayHsIYIoOtufp0m0q80ibS%2B6ZribyQ2gbH2J6ZF9DATbfcxZ19LH6xrWtXEdRLEyukAUVi37wHF4y8gRhkbs9oMHgKUtk4AgtuZkt2C2hA7XEMM7CE0343wZ5z27kYN%2F%2BQyax5c3PqPqQKb2DvAi7GbQJBM%2BYnzPfif7hQ6SGp5at4bibHHPYqsk3iAKPnD8ItK7cZ47ibw1to6J6m4KWwQobCafUMZ2zk1ninZ44jTcdxmBOKxkats6R4RBJB7ClITarRPa64NgiT2FPQqXAR9aWAcxzO5Jj9w2%2F2HSGP9xFntSbD7RNPbFmZeuEHG88fy%2B0dCkQfkoeSxjvIvoCyoOuHDARqUolEqy6MPHmqMEGOqUBDyc8IU4PBaUq8ws55eEWvvD9Q2WBb694Ve4yaYkEiwJ19iRzVgdSNu7lvMWq8qsWhPhc7QrBlGW6uUCbvknt4XefkvdWaqZHzKUzEoeoGmHJGSPj%2FN6dGDOsxuRytaG2mh%2ByhRKWPeFH%2BlSiBYTsdmlp1TH7eDzwbyInq22%2FUeKYWAreg%2B9Q3h72%2FoFlpopNVYNMrcPz%2FNViWKoaOTIMfeSxDCB%2F&X-Amz-Signature=8d94e7b2d7ec22c5129ca2d47a1d1d1b101a291d7be342fc21c341ce8ff6f362&X-Amz-SignedHeaders=host&x-id=GetObject)

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
