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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XUXFOGGU%2F20250616%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250616T081335Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG8aCXVzLXdlc3QtMiJHMEUCIQDOdlAP6EKZdTmt38pUiBZayyTucsE8sY6cvJUcVEr2fwIgaDnhd0%2BsiAhnBwuyw2ftmygsqhF%2Bwwa0dW6%2BmtH0Fagq%2FwMIWBAAGgw2Mzc0MjMxODM4MDUiDI9JxHIkjd5oo6TFZSrcA%2FNEw9tEhwbMxrKy1SNtZ2Cr735FJgP9OpiaNdURQWlkt4oxtYDee5CANw5UwtgnMYws8k%2BKY%2BOInGuctG6VIWRKfVRkbhWAFsQQOde65edZTZiFwTV01MtJn5S%2F7LOXoEocUmgB8T1XudpatqdiAalBYyqkEv6a7b8Jfydvbm0ySdX8krC2%2BBzK97g7zUCLcmjAuz0%2BQSITRfVFzHLj4OUv2b5YnLrO%2FlVXxwZfD75%2FVvKSM8bQxIgmTk%2BuzgsaiMUgkw806BemOBQAEjBONtoOYEMxLtVdCmiFe1iR7EE4t1WuenCgQ%2B6707V%2FLFPA2v5DpBMvYbDvHdGrKbv9%2BA428oLApw07FOgei%2BIyEWLuNTGQCkXP4E0XzCVWjASIOj6TcbTS2W84y%2B2n7etSw8cs%2B%2FOKszVkl5mKLKAhc6%2F%2F1XQ4CHsY6wJUDTLvkSlJ4K3BkCkW2WLzntpowsQ3fEhmaoNRZoMVhTiypBfOA7pExqKwgylI2W91NNNUDnikXpa7g55Z5UNdEgPWGMG6mO9GMjHZuPFRxvP%2F2vJtGzSvzAgqi%2F5FVUM%2F5pCVGML0OGgP1TYL49h014ck%2Bo%2B30HeLOARgAMXA0teDNZ1wKnlMCoiXQsoXPup1JijYMPCIv8IGOqUBuaZehl02du6j69bEU%2BLoOUO5zC2zrRPf9xGod61VAaGNMK8G0msRDNkFP1COLDHZ%2FM48xTzcqDNX9CHyivbd797Sq5DSOIcV2Kc17QlwnSzPL2XLtNcvHANuiaQZB23LaOMSC%2FYXy16Pqhm5aa3jkO7dqrzMNtJu5AZa9hPdzG0pMXYZ6t7RLG8S2amNR6sV2LkTJ%2FgtK3WckS4As4GNU5s0OUfK&X-Amz-Signature=da06c77eb73a22ca4dafbcc70e3802eed5acd4a19d3a71e233b742d77a3fbf42&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
