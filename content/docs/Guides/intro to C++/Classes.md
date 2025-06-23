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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46642QL7NPA%2F20250623%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250623T091229Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBUaCXVzLXdlc3QtMiJGMEQCIColwubDQ%2B8T01fdiKg74HpHQmnacrPgShAMzHEF6%2BJmAiAVPDnFWtd5yY7YhlvIyjaSnT83hC5iVvQBtlUU7PKgpCqIBAj%2B%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMx3M0d%2FYsno0R%2F%2FGoKtwDtGyJlaov08da58Xeb0C3vWeYJ%2F0T6t2grpgTiZpv0xaCT0zZKKOxryNWjNMlua0b6Eh%2FoS8EfXMWyHApWaUVBPpqKN1T%2FQcTjrjLnbuoiU2MrPblyShwjZnCvWGCreN3fDS5H%2FMMOLof1zxz5DjY5WbTRru7yEyG2mhExiiY3H7c7FseyvvFnyCAp2Di86NveP%2FQcp2DliSFXcsa75u3Fo5HFhdK2ZeTelUoGr%2FL4UuAyfsKTMY6sJ4BlJE%2B8451vF3TvxSM8%2BtTESo8Bj1sRZSduXYpyUi22LgOZMPDMIGwd77RCiH2Cac%2F19VcZKn8%2BH%2FUs8BoDqHaGL9x3VG54GFxZSDF004U%2FYMoM9%2B4io%2FeFHC6tQwtvPq47y%2BWKW1DhztYwvoCs1UfymdMeBCjcX4p2FLuiaXkg3LAywYjvYWb%2FE4ax2uMvPVEIgiASU377zvxo3S5lsFVg7KG8Qydw7FtB3HGiyx6C%2BLOKMZEWmq1LaqwMhwoMgcrxr4XXBuVLVsSpnR1aZgh1nNAEulPms99ZH%2B5eADnUzt418%2Fkmz8I6%2FzShGFPkTkJOGFF6Wf3DZYqucVuSnzt6VImP4YxF7gnhzmYyMAKZNPT86QA2ghqIegCyoZahIHWRxAwpK%2FjwgY6pgEZV6np%2BvkyPeVdrwTUWN1eiU6YFfnejFFT351V9INSpsZ%2FrBzr1Ej7VdIsi6o6%2FGR43pmn4HU983WpBQxMs1y3te1aLjzg9uo%2FO6eCpT%2BPaE%2BpDEKlS70E2PIb%2F6XMBiUZXwn47Ep4iR0PvSFfzO3OidqpDIKCNXP6J32VetRQlx6Vpl%2FQ7bbkX%2BNiP%2BJsGohbi8NY8MMB19fqMRMppHcTWlt%2FrmFg&X-Amz-Signature=c7cc5e43418c3c202bec2190179498fff4f45b93d8ef894893fcdd3ec38a3de5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
