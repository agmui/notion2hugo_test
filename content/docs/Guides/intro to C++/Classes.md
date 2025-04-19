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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RTPHUVQB%2F20250419%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250419T131439Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAUaCXVzLXdlc3QtMiJIMEYCIQDZiSB9aAqVeoq6Ij0k20vyZ%2F6XagIcoGhtr6xq9DMOSAIhAJ7lAyXK0inLKDIjzkQhTsoqrQSKh2X6LObHVgH0y6NdKogECI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igwsw3tU2h8ll%2BO4%2Fmoq3ANv54jKvzy0MUiu15cUsIwNGZrNm1w%2FpCRVgCZ%2BhZeMgCm8CRZ1kokU4rUYhd%2F20r1lyOaQczxavndPIuLSIQcmSy2CGGkHtExY6%2FoEpHWq7lQseNtPV%2BRlbnE33yzHJe767bRgFTiYNhcz4glp%2FzAp%2FGN0kUWtnHucn0hPqH%2FMNeoCOvc8I23aPSaUsZNyRXxpASeagtjGhV9M4NFcFSE2gQojAa1h8267VaHhFdrI6kBul9uThg1ou90PZx7ggcmZAP4hFfbLeglHjf7IJadHEnzrz68h332GTHwXqRoM5BibRorr%2BqFStwJH%2B2C%2B8HN6Kvnfm5h%2F4C1uMUBd5GyKsDLiovxYl6xtFF2huypKJRVcJnVWbPT%2B5nhNdsrMZrSIsNB8lZuq44Q%2BzPoqAs32jS7Q8ceWIeJZ3eaGpnYiHCZqeh9PolHb8mnHNj1R7%2FtPosdax5AqYZZGXHj93Nyaf1%2B%2FoDVn5FEV%2Bc0MTvDu5rW%2FBQqQHzt92Yss4SgU9FUT1xRgb2eUmKaUDRCcXTJt0i6nI7yILRTX8YS2ZzIdMfj7SOPq%2BqaqhS7KjfoLre6PlezJKcNG0TuPTLufErlDxwTt3MSGfjn0x8DB8QhiKxybGF1LNjd66H%2BnmzCnrY7ABjqkAUeEbItNVGEl%2BRrV8Y7n6LfhAGiCqL%2B6zWmH0%2Bx4cDdEwVnx7m9BczZlH564j%2FAT%2Be9t8JhXUC1lvAcV01hjSOM7Oc36dOKGBlBTuNzzJvQxQgVYuiwf0SKnDXzy6l01qiTTTQkNew2zGCxRffGmkyXGce7VVFXSbOTaVbK1PEigZsNMZUkEAGgU6n3%2F9Eh1nMyRIdgTT8u1J8%2BIQD%2B6BTxFi5FD&X-Amz-Signature=b0974ec728ff0d68fd19021255c46e326359c1f59af91b430982097dad1a7bf2&X-Amz-SignedHeaders=host&x-id=GetObject)

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
