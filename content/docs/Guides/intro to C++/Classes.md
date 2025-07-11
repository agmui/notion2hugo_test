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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TDBEQ26O%2F20250711%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250711T190744Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBr89GBPhx1Ywuu93JAzzL8g6TZ%2BVXGamoRtmQop5xWDAiBNk18i9oH1UQI43hIB%2FhjM8waI%2FBlEKoeO3iDQbOLzFiqIBAjb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMALqPhhyAfp4eGidaKtwD0H1HbK%2BExBRu%2B8O8PRptDuLoZNFKsxVMaQkJGU8gzCZZTKgDOtQZv7RAR0xrk043tMusqrn9dlC%2B31F6bDBosvJmj5CcG%2F6RayTbdTKPQd9ftstL6s%2BxiVG0Yhy0Tmqyu8Y3VZOQOi7SoJiOrBdvfab7s%2BUTlyciCdNDWSbwq%2B8iLVL%2BuTuLyukJ3%2BUZjO2O889T3V749uSb0irCVXa3jXDfE8%2Fn24wBu1HidO886z5%2BWTAOtUHQUUmXIfa4pYz2O73J785ook53zA0HbQ6sU%2BdapoZX5LlCzDuzcxc1BD%2FxY5JNmsJIJk8D6%2FoYiRE8NaBKEnp57c2WzaTHMY4fZkASIkjezmu5EvrGE44AEHO4Co3bR3gIgQCo%2F%2BgqpClxXhz461WuuqhUEH%2FaMICb4VTJv72TlbE6kGNyHu2bHj15un69xJFwBezk7s3yUgIRV7xOzoSTRGRalkfTRWsxIwvScHxUXASlNSTJkkjW4WHcIeksCFGaik2bAk7M4TkdK9lp9Ov8I3kerJkHJJXd0HjNuZN9QxXHr%2BRfGMZelZXTFDEJlKPOAxWJMC4yh6GB5Kf6VsJjN57gGEjBy0iDEljFwj4%2FDGk7RoSufKgxFt8AZHMRsn%2FLfzRhGmgw3anFwwY6pgGF7GBkljUDYdc2u3EecPd%2ByNtpUq0stBd7HWhTOwDVFesCLg%2FswQwIEw5LGiJII6FqoyS%2F3EjBcfrZTZtHa3zRqbD7MVhW0HSfAhmY9kkK%2BV5kr9yj6D4kZ97O7m3xzjevxjP%2FQPzGA6iBrM430YFhd6g1TqktzK8MGOygfiqy7jXg%2BccD2wCkcHSigYRso%2Fk53qNXdTPiGhSi7vqXuiuSo7oqCE88&X-Amz-Signature=64c306a3f78afc5e699b982228c28813bc6013771f908e3cf507b984de81a01a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
