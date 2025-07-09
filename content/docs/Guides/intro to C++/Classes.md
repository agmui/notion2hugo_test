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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WSFBPBJ7%2F20250709%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250709T140914Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDwfZDLFk4ASYhDlFAhtW7XCcNfAkISTE%2F%2Fim50eH4EmgIhAI8WpkoIP2X8RRJjlxTDNU3YhCL0UE1UB5efS9J50galKogECKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwX6PHkV6QI0UB1utAq3AO8HJv8IJvKVDJjLM6hNTICbeOACyjSc%2BFSS2Q9SaFkZCS34siT0nr%2BMOjN39OMaXZ34qC3zJJq8OKgeUv5mBsuC5uzCBccuJ0twLJBp%2FUCLaIDc4Ap%2BM89v6zIDHSWwn7yds6itxSLlX5odlZx20fsWX5D8wdSXewqiUZagejbRyiGmaoFw%2FjE9smtAKzuEM4sEY%2BeJYxQMrLSL20gbzMDYsyjVfRg42nBxrbHZS%2FCEAo0gJ3CblI8GdLyVh3fn8UmCuXrPUSMemTHM2BIACHfJh%2B22F5hRHYlzG7ePE7y3mUegFuR%2FCkifAj7kKOmtuLN0IXvmBOOuPDewAEHcTXLJ5vZPO%2FDIYbfuxPNZZ967GS9GXOfijoNm9N%2BIAduFSAFiZhgx%2FOl7xa%2FpCT27gdKI3ElLgWY93dFAPgkZ4O4mUu5kF%2Bx%2FGJWiujW6wOAtje%2BKvmo%2F3n5MbfNPkRXnEVkwQr6iBqxD2kJLxBM68rsd7GZ%2BGQaYR%2FrKPtHpWFu%2B2p8HgSwAV1oLCNX3%2FZ8Q%2F0pGA8%2B6xnPmmk4Ssp%2BEMmGb0w%2FssnaPCYrqv8k7U8BB4a5o9Nmq%2BtaZdAXUyqkSSmtTvqmzh0Svgo%2BkRi%2BBi8a7lqbN6rxZX7%2F%2BpK5JjCj67nDBjqkAdrZumduRNB6L%2F2EPXYXg27MBZXtlbZQuIkshZNT46FbQXJO%2BaIP3BvpPYdJN9%2FO6kOb6Z%2F6setKkHDUlefRgRuAlouoRVWAKDQJwLePooava6caLJKPROYFyUCHRd8Aj3TRoaFHKQPaqeFingyfRsS2Dog9sjPHp6OCsQHwjscdrdEDHdr4sXm2L%2FPj4U9lIitVCx2CTloe%2BX5rCr240Jq22kOb&X-Amz-Signature=40e60c04fedda1e36be9251fab81e0b70483a520345c65e284140c6a66197c5c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
