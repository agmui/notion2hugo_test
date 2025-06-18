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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667AHU25GN%2F20250618%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250618T201057Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFJtpGADhuBuNuS8e6ck4L516czpCVwOKT%2FUhu87nuGmAiApqqVKiSEyruOCPoN89XdweMrKrzYYd%2Bynw7X5%2BAMFfSqIBAiT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMzDZDZFtxoWe7Wf7UKtwDHaoOgknfk6p%2FfPQJCNAG47xJZ6Hvn0UKnrLWKxkhjwxo7wlpsptHm5RRs0VOjrWLv82ydeJu%2BgZxTdbX3vwNh4wcfhmUvfoXyRwDek37yvbqTVQXA4NS0nt6bUAqDanPjkNHaqB2NZ%2BZcaQKeTdMUlVDKeBvHrWkio1gENOfcz5cDWom9wVDsgM9TP53bOM5Ry%2B8WalA2HaKcdePNGubBr%2B6zJ%2Bs%2FfjQshDjLP09MImm42clN0RCDUP9KFKBfk6oyy%2Fx0a5rXEnJUQpERImokdKKcNheU6m1TZaqeUeLbUb5STrkMzbYqJ0WfjuMZ6IZNfizahC4fimUS%2FyFNQR40be33Yw%2FLNkcJ4h5oVqEVEqs%2B%2FDBTUtcj6UcaqMoTPRRE4M82gkFWfoaSpHgyWuWC%2FRbuK31trDUUVyff5L2Jh4RaHI1np2YLdJqKt%2FoxxNgAWUiCh%2BsHCtkD1lVPmTjJ%2FxcH%2BuWoDVszeOqXhC5BKAWza4LmUheKYM2orQOTojLvQOetl7ktydG2%2B%2Fz72U0eJy%2BlVOIVLluO%2BStQMeiNVLXekjK8Av%2BxzOzQFYO6fc7%2B1IRWkkOkfZhnZzL5kUb4rP2gFgpN0nY0i3IdfgtbTnvI5ga4jEmlMxUebQwwPvLwgY6pgEoLXlVZGz%2BDjg6Els7yfY8aVgD87a0wMKAf2raXIVaFnSRIw%2BNgpObt6HD1S7AIrPMXIpav2adhQdXHTn0svLNaAoZW6q67emrYq%2FZzeavZR3Je%2FP2Rei2ErN88qcugM7ilCDcWbQRr80PXrMuEw7R3ZEAcnitPu54tcnUECdPWa2pb3CxjD4lNIhNvO2%2BRRSbl7D4y9gF2UWNp5vzRF6cQxfHhO8O&X-Amz-Signature=a869d202874c59d9dbd90a481be1cbe9044577524ee984594a4b3edf3985959e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
