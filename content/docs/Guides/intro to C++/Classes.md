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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RESXHV2K%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T200907Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICWf6%2FTbRmtG5Z%2BYNpjqdqBOzdYcja%2FcNKTqKYKdb9JrAiEArZ7kGsqZT9qZLZoPcvQ1TNgopCx6r%2Bcs7vDf5539tcEq%2FwMIHBAAGgw2Mzc0MjMxODM4MDUiDFpqYgJ4uha2raM04SrcAwdX6HF9vmnKMO8tx7m%2BkLhuFSw3Y9tHPTjIQqxeb2jJTWtskY5uzNnlhFV3%2FMCxSfRpNq7nSwfGdqYaZU8la9T8x7EtlHADsgemHxV7%2FG0LLVSp6a3V8giY6Crh1zrcYnADbsRhD7v86pyiBASVhUT2uDkB8FvSooNQtlkW5NyINDXbMXSZzpnMZILrdh28IlpSQxcidfXyQnS81MQkCBfycCxJakDdpd%2Fc0Ri42Slr%2FIlwX9J3SJeckD%2BEamYKLa4aE15ebdVnLnPD4oeTJHWhFnxYxXCdHkblAd4%2FBUWvKtKtYKtWSQGkgop4AWm26H5IfMM0dnKIFhse1uT6mG7%2FfJzgyw9%2FNVwf33powk%2FGsr7nOyMIUkSPUXztVACUplR966pVCynjqN87pYz%2BmQq7f8jYgVNYOO2bkxGS6%2F1aCup8y4fm1TGUYDvLQYhlseORv13QvTqMYHxV7APqH2oGqFkyT%2FeFWX7MxT4hrNt4xtVJrVpRykdYcYnt6GX3L7561IBUcTz3EnsMeKz%2BxtnR0JgJfJbW8K29hoakz9JnbkBwDPP1H0p6ibvJ%2F%2BJOAXB19sEvqrTmwrZbKCcp1K1eg8thDkBGaP%2Fuibmhj0fKOQZ3UKjS5SydBAUCML7EucQGOqUBi2KOWR5s0Wgi6bP1yXSwhimO0%2BaaFE5GeZz53aZgveCw8wp4s1k%2B%2B03ofvxeVqiUNqx96Q72buf4opM0tQb7mBHwMdQNRvp9MYvjMxk5iD3xHCrJo81wqKoL08fYm3uqfo9UewaZaC4qKkaqqbQ7Q3GEfrBLtzxP0z0xzJmzQYxXEkcelcUMx74lB7EULlecdlP%2B9mgMPDUEWLH2Qw90hAlCvq9e&X-Amz-Signature=a798cf99eb2e4036d087a66b8577763dbc4f23dae48198d5ce57dde06f183c62&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
