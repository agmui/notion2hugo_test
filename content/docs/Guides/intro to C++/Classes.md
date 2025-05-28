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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZB3ZAJOD%2F20250528%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250528T181113Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCfNm1qpMFLqclAoUNBPZ5OXhO0Rr0weyk84k5eThy92QIgB6shhzIbGmQCnv3qrozNWqC8fUJJ2hXtKbO6vg5GvZ8q%2FwMIehAAGgw2Mzc0MjMxODM4MDUiDAhMT7lnOxYPOTLPaCrcA1fyncb2o%2FQqfywPMxekb4iKwcFKaHyQsZu34uKoVpSTZHa3tPwZ7Pp7MCRpKoVJpDqi2e5Yf2LbyD1igP1cD7lpb4GOXnnBjcxvzEIMnLz4MMUgBx4b0dvIkCPtotar3TdLE7MssSVh4lpg53VeOYXFt9KL8qXsmp4taRjzApcLOCLiT7Td6n3B5IIaieoAb%2FWQD%2FfNT1fGqo3Erj5keW6dqHHlnYbU8VVwGWDvnKStSmvO0ik9GVHHWOrvLGx2u8KZIZq4xz03Z35TI70Y1SIORv%2BWVKYBU6pzH1ef5VCxQmo54ymIX67bkqJaWfdHQK%2BFIzxMAHXDBZyu%2BN44YA33hykJ6dpv9dhbbUbZGEMOW5z5HXGzFel8qr%2FuFtk9DNMkz4NFIlpEm12vNQLfgWFNe1k43rVgjTWL6HyVjlRh%2FFlcGI9xKFlvihVWz28kpYoWZpuInKhb8RbVQ2UiQUnTRckmiDG9ThJ%2FPyj8D%2B8T%2FQJIfMATK%2BXfNmCfNBCaimCKzZTlAbUTQJ9awU9UOBAMQXf0oV%2BISw%2BAnXufKVGPGXPTeAo7lGEb%2FWtgCg6lbq2IKONXexvAMfa4ysZpHhHBo3uMa7irP5Wx1L4bftLSPyj1WqKhKRExdDkEMMX43MEGOqUBuuiIi%2FcSG%2FWZKxmlvAKdbMnYWevgVEp32b5tRD6gmBVpeIPNNv7dj%2BSuxqOdjPFEYzvQh1bRfROM67CEtkM2pMlyBwN834YzLhhOUqh%2FuB0gz1Bjf6txBXJU8Ri%2BcG4Zhy2R%2BR4N%2B8hMZmfr2SWi8jMnmC2PsG3W5EqnNQ4eD5i5FDW6Y55uOLy05ENezPeVZTTOFIsNE6EULWp6h0FjSFWA%2F2h4&X-Amz-Signature=42ecbfa737e0c099433daa157340b5ac27e674f8e101e2f1763d69ee8d2206e9&X-Amz-SignedHeaders=host&x-id=GetObject)

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
