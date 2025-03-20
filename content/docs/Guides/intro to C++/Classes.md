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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y364FH36%2F20250320%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250320T090823Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJIMEYCIQCowFi4N2NKYtdqatsFMNxoADA6o12B1cKgCAQ0SHqpIwIhALs6dfbDlChhVS2NSstiZiVnHmz4EWUptet2iImSpSOYKogECIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy9Ixqot%2Blw7hRR38Qq3AN7lE%2FJsdyKkmhIUxa6JQhtYuHzAJxwSSmpvZM39OccJhqQvxv%2FkOJAcE8T57%2BYZ0%2BLJsKKSoqSC2p03b%2BKgA%2FC84QJgUfsPFN0mKTeE%2FGm5LKIp%2F%2FoYT3GkNs2vZGxthvHdut49N7V8XcoMBru4B22PVM9UuunNX25gnwoQoE%2BtdR1SNo238o2zaJ40yw97sDoe9ZaVFwOm3m0wTTO0MDt4gSQyaOWK5XbpSztTjiIllNlXjTWGEEUUhzh8SXe%2BdPOAFEa%2BOsZElYoKXTKczmtehK8oXdabGmejmBV09BTu2NynPMOJRw4zX4B2hSOOePABZhPFAB5L0xlkd66Tn7aei7HjhKdC7EUkvp9eVlpo7c%2B2tmOm6svbuiZY8wzQoJLPva7WL8QxoDz7%2BHY427vzhzYFWN%2BieNqZRkn3FATpj4uudMH1SKU1W5O%2BPXBCTSDQuBm%2BNWWJZTn3%2FFePb75yB93BHeIh27elqL1iGaCwv31%2BdLoJOpcInxhBmFmlt2Drqwe76WyZEPBtIzNqXnUo68S2czQs8kcbIAnlVMIktDeh7HcuJCkl7gzmGMGKP5RDZ%2BX5wpRn3JPOHjDyTWjQBoMwK8jAto94b7WzokoBcAoX1761Xn%2BW122FTC1pu%2B%2BBjqkAX60z5hkQuBqPZ5rBfcKLCjoZ4uzGe%2Fgc7bKCL6C9%2BDSG%2B%2F7Zmph6scUwAdOVLZCAriuKG9I2%2F2aeF7C%2F4UVohyRsFwWmsLgBjQTkbgPZWajdzUr6f05gpT%2FhssmHS4LyuP9Qiyp80wG6xBq0qqbd5ev1OhaHFMgCKlGh2qk3MzenqCojoG%2BO6tsSZERUivi5Sk4V1yQ%2Foy9M49ifPUyVAk0o%2FAX&X-Amz-Signature=03fc4b7d93a783e730fafe080b446f3a46f76c6d57114daa0b8a1b2d0d85bdef&X-Amz-SignedHeaders=host&x-id=GetObject)

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
