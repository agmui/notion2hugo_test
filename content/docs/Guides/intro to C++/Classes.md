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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YW6HD7A4%2F20250420%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250420T160813Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBwaCXVzLXdlc3QtMiJHMEUCIAK0WgUOZjAMGz8aaqZwpdrRYb4mckp7MC5CLcz0UiNmAiEA4aRiPoRsrNIFiYHWMWD1j1WDwi5oMzWxgKzGgAZLfSsqiAQIpf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDI7E6MVoUZ60OspL1CrcAxlhC0PlcKcNhR2bCYSdcwRPmXG0x7EgCQhr3%2FGwgBwyHLJnT7CIHTR4knlnQIXQlvvfReV72I2vyvpPGBJl2m5%2FsrzTTkU0yp2kUWWkiGiVmW1BxVywwlZfb3Fofx0uxVWCbQieemzaQx9%2FYsVYOqsUz7FdFwMTE9L1Qfx7g73VwgN%2FIVpQ3io1clonOoDaICny3LJ31uTvLADotAOUIiLQ4qfGQyIO6sHVUD8GKR21lXnTnYdwW%2FYiFSNuesLPMapmPcROjOcv3uTLqjrw9LqXRrZ8MNm9Jly1j3C9s55250CMFenHLoESmx0gBUp7beC%2FS6aw5nSV9C6k2twTtoFKdjTjIgeKgAG5%2B6l2cUyGtMl9ymhQ6XuV2wc3P1WbcSZvGSZysduNqjIoxhQVY1MMDZ7AQqSUgmbgiV733eL7CXZdJAOQPUMd13XkRo2mUxVn4qDebEiruQREuOGqyomXofTgJHay85iSpT0ehVJAqY8FkRhLqrMchvRBubBvt56dFsquYmS%2BVHcEV20JzLnhqdV8DXtxMVBMUrO9Grds602XVffkorE0g%2BRzWR%2F%2F54kGUPTBa3IB1DiAkGL7CR60%2Bqm2pN2%2Bvj2dL3f9euzKaeR0rVdqx%2Bb7eh%2BUMNvEk8AGOqUBcl76K6ZZ8X4Qe%2Bg%2FSh9sL2JjN8Y%2FfWRa%2Fs65u8B7dzL2svjl2mS1HH76xz4xTu3ItmShoN%2BByxMqQrnCL9R4lryG3w%2BE3YmU8OGSuhQacDF5j3bsU1ctFoBmDwl4nCjLkEEdOrwrg759%2BnHSAKMUB2UbHFwv%2B2pLnYP651WIhHLPy962aAG5Outg5b3Q24eMzsQTdkWdJpJ5WOYhCYYfnVbvUcJM&X-Amz-Signature=6dcdad5ac86384cb7227e546c580a6906f8e885d0785d6e05c4a22f150a1f94c&X-Amz-SignedHeaders=host&x-id=GetObject)

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
