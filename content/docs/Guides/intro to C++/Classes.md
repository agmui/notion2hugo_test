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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S7QWRIBR%2F20250610%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250610T081300Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCID3K7eUPLsGxZoeRGvt%2BE9pAvcXxW64hhF%2FEh2FPPMr0AiBpgCE54b864gVGbjCPBujow3J3jM5HkwLVif36KiiWnSqIBAi4%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMseXMjbhTmeoMfg%2FZKtwDLDyT%2F%2BtC7vdU6Gkz0JWtuTokYZvFqJwIAW7Cpa1Yh8FfWh7%2FiDd3UG%2BC%2FkkzPpUPeORNRiGwjQeKM3zXIkTe5DN3IJts7J1ivQyDRvbE2ApSC6AeR0g7R%2FpeQYV8ecwr4KuVlfxpnWMqgyYOrqcnFVg3m2EeSQCKmZTpM1hrEzE2qMGEKeIs2qL4SxELwD1IhMJ44NtDoGRJ39w0z9JigJDz0hyGCR%2FwYdvhAT1H0GUr4A%2FJP%2FweCrabQ5vOHpZNDgGuy0OmiSNlMIZXM2NWeeRA96a%2BJN%2B1OrngBU1HLYqIBRXLDlNTQsLiu7d4ILyYm2QCyG11Iy8DFxrLV2u%2FO5MYibFdBBQOjRoGUieyI8BifqySDSwCh%2BdkxkMFi%2FnBhTfirdNhvkW18WegZKudqvaR0naSz77Y69P19fvjWqcpD4e0X7F9vQ1mWjvFsS0nFSvLHihB3EVpixBs7YIW3sFa%2BQ2dPNj2R19TcJ9cMBAqU4bLvz0YENpTduJz2MtzndacqsR6mDJBX90TmOdetfrguaCRVmbjYeVTYRGcy5QIKS%2Bhk21Uvm2P5Hht9e0PmAzkARlOhNaC0C7cLyyRX7a06t%2BtZ%2F1ezqPKwcv%2Fm%2BE0q%2BbyO2iwykbuMKcw%2F7KfwgY6pgHflNxCj54up5ZjPfkKKHlNkz%2Fk9aAz%2BumAYrcTZ9KJxW35BQuYnV72clQWssOlQWKhk%2FxATnjOsA173ZI5QXxsSbghpP38J9usw73cqfcgs81GTOnPVCHNeu3oI3h9izWm9sKJu1LeMaWKQOZT2%2FAsvrO%2B%2BVVOCCnWFh3mxar21D2gG2iFyl3sRGP0V4dF3pt3tdiP%2BQCeRk2EAal%2Fft8KHsmKQ8Ua&X-Amz-Signature=99894e8d9d4077a82cb279539b9b9e403fdfd8b9918c9a2f47d5886862f28bf8&X-Amz-SignedHeaders=host&x-id=GetObject)

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
