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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YT3WQPL2%2F20250616%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250616T170844Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJIMEYCIQCUfV0NJgfZ3MKTTH7%2F0HvOc4YzrSPaLtjYIpYTXDbaXwIhAP5hRBEngqSzmg7iIJsYdqXOlwrL3VfARA2aq6iQgh%2BkKv8DCF8QABoMNjM3NDIzMTgzODA1IgwN01IkEcwXjUvpaEsq3AMp0PJVLjS%2FL2tSage4DmVXiN9y3Uy2%2BX6IS%2Bp9xqUSr1kn0pqVcBTkqst9pBD3NWmFbkYQ3%2Fw7SgPAdwPCepz0fv%2B8IIQrSXtuFAiQZMM8Gi6eBBM1mQ7rELBbpJhM72%2F0PFb4QKtRcwI39yoTtO%2B7mYrISV2yR33vKRFMrx0D2G%2BpROTQMpSEPDaKW61KMRJTnArRh1XrxkhdfFn3tLs%2B4y%2BJ1d48EVqPyuM7KB0J65VGf1xTA%2FIkjVqr9e%2BWuTx0gC9WjUwdtuHGNg9NBeDsbsqOCDVFhHwyiOL%2BcPHJC54G7u9oq8ZAlVpFDx7ZAgsOrc%2FT4gjydhCBG%2FqnoQYXbCFLXbZ%2F3zYVMTll6it1X%2BvFi0pVvyxmNyZMgN3SK0pQTKL%2FFn9hF6Gk8Hx4oWT2Q1lzP4LSwGu%2F5sE0OEGA8krcStcSzcY%2FDpU7DpZq8F6ByrU0dAxPzzzhdPPB03ENdSHVhHknEPTXDkk%2BCHicSEpNDBbdV1D3xIj8HrUIU0KCUgb4JAAhLaZ54xt614zUNSqRt9PSSzGdHVUWwRSkPqvPHj4vV%2FxaHFR9zrW7%2FNPV%2BK%2FwS0%2BlB%2FlmcqwLN04a%2Bmd15eMT5ILgVUWPoaWWRbb3UNaIQYGNbog8QTDZycDCBjqkAUNr8wHOSRM%2FN%2Fjh4vrcA8nzDaEKow65Gm6%2BgwdicGAglnQlKe5A%2F5BpR21nxN6KKjMhMvRHFUeeF42AxJPVt590DIJVBZHF9mTqQBWQMQEGNTRaNFJLbeRCwnRY1qoI088sbUbZ4reSMXbCiYzoXL%2FJztjYFstlUzeLbK1VrjJ%2Fcg7ZMBe7eKgXcyulzjGNBFpqSA1GovrYZj7C0b8tMCZogUxX&X-Amz-Signature=ef8146d2cc9fc88d7c234777dd44325d3e2b4fcb1bb2a651b55887e5c04d2f80&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
