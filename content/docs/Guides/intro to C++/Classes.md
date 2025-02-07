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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666COQBBTO%2F20250207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250207T230710Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGYaCXVzLXdlc3QtMiJHMEUCIGaLwplWUXsh9YPxIsrt1GcKPCSTMQhsGQp08nk3mC9dAiEAhmP4ybb1S8p%2FDfxKLEQORQ5cXsqIEd6brYAM19xEW1sq%2FwMIfxAAGgw2Mzc0MjMxODM4MDUiDKV1hlRto4755i3dQircAwDVm4wu6jIQQXapQmgOqRVPfCpxwj1KcgUmigqWelPEwAc%2BUm%2Fm%2Fp4hNSBYvFlozMF2X7o0hmbkyssmLPDvG69ez%2BxLOo24xGDjDJiyLA%2FPQCzgJw9fPMwxrbvKVSw4lTYmNxATNC5qlBj8fYmrjHYxlpZnvL10EO0I9BuQA%2F%2FMULtxHX7l8Nmnatcc9I9np%2BuJLeKlvOh2kStKnssc%2F03to6S9M9gA2CDM2OAnvYWr5ukRPmIcwTXXcAASQIFnOccd%2BLbiZzc%2BrPWBggASQIc0RcpD473aCggF4VRHC5y3Fkj1Lda1ZjF9BUcX9GDVLu4wc67iPjjXaijjsbGAjkj%2FkhywaGlkqZuw7WkuXBRwZoaZ2w1N%2F6z5qkOaApMWQymfATSu2xH11yyyQm4q%2BBvBPBmvql1Sw3RHJRelfinDbnj9zLxwLJ6xQBMDsSf1qJ2l1rUd%2BYBh949uKTR3r8cUzo0XGWqUxHLG%2BzSfNZ9SZwMK%2BjdtswVfNnTPEFETo2%2FvQZoDDYRcZGCZE0jAJohj87G4IBweZgIj0ygVyTNsV1WDgidQaJNA0KocDE%2B81e28awuP2eAZMVYLIW2gXl4jwsOiuBOomlmMDMJIYukfJ0XnDsBdfkHTX0W0MIOAmr0GOqUBlPqtm77RgLhiB6UWA9xTVYghle6G9pJRaf8oNzlTVTip75veNH%2FPxrtju5RI7NZJb1BEH9zYbipW6Fxu9OosEHC5UP%2FbdpleAWZjvLcVNDHL7YlPsUEuLjFp8S9SJBAlcUtuW6kXPERWKtmHpUqvyba8sEDAxZ7cyzs4U%2BFgIFur60B%2BXWcg9IrA%2Fo4NSOHdRjRR4XTrYn3itJsD371clpxRPSBO&X-Amz-Signature=4ff61e6ebf73c2616765991a04b5b0981d8002cc3e6091dd0b13a6e623ea6df0&X-Amz-SignedHeaders=host&x-id=GetObject)

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
