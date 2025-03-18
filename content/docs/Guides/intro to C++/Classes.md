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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46635S2ZNN5%2F20250318%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250318T070841Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC3jEpwQzrVtPYbQjVZrHLlhpSFD1u3KeIx3d9OhNZA5AIhAPGdm1SfKSpfN1Tp%2BmMgfqEmlhTH19HDmAfwUTBrqrwWKv8DCFgQABoMNjM3NDIzMTgzODA1IgzAHqN1vbD6fMGFoUMq3ANu1sCG6GebndNclbBCqZnDKmgP6EO%2BE3k7WYdM7xOuoGixzvRH6oG4Q2O%2FPMXIW1xDTFp0LW8JdF7p70XKc7zrbU8Jf0gDgbOsr5O64%2F%2FQPsJ35I1Orqgdq6iW8u7%2B77sdA8S0HGHuklzcMcdsp1yFcLLS1b5169MHJ5W%2BlXbqh3OVi0axODw7OXlY%2FGanxSzzG3Xg%2FuF4E%2BtKIt%2FbqeKexndg0mxvMRWpt1JfVjcPCj0My%2Fr%2BglUiSQcQCjsp6QthA83y3CUuLRpn0ePSv%2Bx2SepsMEizZ7YaVH2l7QU3n8qA3KvHJ43jVAPn7IQiz6uaxK9URDJkehu9qUzpiCR22MX3Xzc%2BFyL56%2FUSjBienaFiolY5O%2BAkXSS6eJhHYi1lS%2B8AR5XqkovtrxRMT1Qu%2F7SiNFA2qLE%2BljKNG4tgVl9GI3vDLOyfjJyQFRNquQMSzP56iAeXRQBhgEKkp8KIfvOCyBtGOVPEICuRUUMlWykwQm%2B8w6W77wyudw00SWwLG45wrBLW3BJVdD72MJyjWgzATP3nrZ6uBheEhC35mq27qblQw0Ul4DVVsJbCeeP%2By7D6%2FzAQ5OzRDS78GYjQC9Wlf688sxpetvAj%2BTijOrBD5L%2FKJ07R2uSjiTCvtuS%2BBjqkAUUeSVk%2BHDXIr6nDAbrUhCrkQUOc1l2%2BKMr3mBzlLjBiSBxn8yvDq8dfnVbI8qQKVlCObkV7yGv4g6SVj9fVAHI2Op19D%2FTiMaq7VetgTSkyhrkwBc6kffMuk79cubO0xPAcbbFWvAQIJVEigtavOSC6mSj8qc6JmnjkN78JLY4AC0HCt3GIlBuF0cxneHACD7Doro3LC3EPY31OoW0FTlQ6k9L5&X-Amz-Signature=36189ad6d158621fd72a08c8063fb4946bca6453b6ad33c6e629ecac21ed5a9e&X-Amz-SignedHeaders=host&x-id=GetObject)

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
