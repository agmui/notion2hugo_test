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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RAI5FHQZ%2F20250412%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250412T050803Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFUaCXVzLXdlc3QtMiJGMEQCIHmtLCS6%2Bfl7M29Ggsrc78FEJwnSkDVlheGQDctIcAlTAiBBv2MT%2F8q7xJMaeeD8P2vZKhd0m89Zrwm3R3M2av6mdyqIBAjN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMTGboCDMMUoRioRl1KtwDSlQ5cOxetmNfy0TMO3VRQF%2BSKzgJhYUWa3xBQQoa89YauH4lgg73yMtGBeeLNJ02NhMKaQerwX%2Fg%2Fj90d8h%2FGfu0tAt1rOJcTabNGjMRQKIWS2Cj3Wxj8Ca9un3diWa5W9L6Ty54PBfFQ7LFsHFuxZyeK1MAXP%2ByugY5PR3LaqPdEdXh2n%2FpcUk6Mzj%2BNjSfyXK2IxA0yF6xmBYwRCfVFwtHzcITvPTMoDVI22ap8dcvYbND764quq%2FAks4ZDqz9oLd6jiM7g8Q2%2FzjYjn%2B14hFH17DhVo0CVEHHfHLZFmx1PzkCcz7%2BkuHPxBek3YNWMExka6VdRxGtZnLmqal0dveLjXl%2FR%2BInfTzLu%2Bs8gU8lrEsw5FCihMWplHjMOFNjJ69fejRkpzQbiSTy7RGZoSAi3BoTj4PcKG%2Fua2idhCR7TBHUqu0Y70AISmALcBu6LHtON9c1%2FZ4z50KfLukpcr%2Fvw9iGCzDFeTX3%2FXe1g%2Bvxar3nMJmUCKgCZRo8sa1%2BXpXvNKoe4PWqboPI9ZEzOyOCw7656fPcJx5fwhti%2Ft%2BeI63TSAxdOtgMeSWGeeW9kaVRP50A2F7rq%2B9cFotVoYRcLyFc8s25ovihbhD54ljLiqDyJVisrgVH%2BeIw4NPnvwY6pgGqQDRE0rK679YtnUeuckIsy4WAAAZGII5DYna%2BnAS4ORs6bHO8kzBGpD5zEiiDmCcp%2Fj%2Fes6XCNpdb1TMa2nvAb8kN0mZ504Jy%2BiKCFaW3ZccIvMb%2FaXE0uaqYRVtk4h7Vmyk6BzkRCa2kekIrIHnAOtOtpn2evs2jMovK4lKsdqK%2BvKfz0o%2BPr7ibXjQwgreOU9VZoHU4ECfxlQ6AmL0MoXYygHYh&X-Amz-Signature=7cb291c02636133f43510641632ccc3959cdfffa5418a976b85b8e2f947fe9fe&X-Amz-SignedHeaders=host&x-id=GetObject)

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
