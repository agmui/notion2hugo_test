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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666NG34O4V%2F20250531%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250531T210709Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDFh1SWY0zdcLXqCr353dvAhsYH3d6HzqoXwXL8ma1T8AIhANHAwWudkNdeND00AZu7uiPW%2FBbVHsfaVK9hgBR06so7KogECMX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwDq6HOpYhCgfebpOUq3ANwdAYNI8BkcMr0XQXHuOT8Tx%2F%2FDBPxo2mhVCBRnohSh%2BjtXNM%2BPmEq0GBVnF43n7bit3v1lo0x2qTmGoglSQYAW0W3XqxODcuFq6P1flT1yJfEgUDwlNnarcAh1cia4MpHeNs%2BocIZtDfw5oOoVdIIVUk4pJKbqeVtnjwmpugea7NpFTp2ICOEzDDrrfVQZk9xwHBx77lDbErnt%2F%2B4Ik2lEcMXB9lMIvtSTcXhiR4mxQDXnEwPHlgMIYhKPd4CaSRWUa7JChWtosyndVlCxUVAplxwrLf03vHb5RmztPedoDJpUVlmGlDMhof8PdPIVYvR48yCwnvR8dByuw2ORmbSAL%2BrDZkIujKc%2FnRGu2hZ4Ef5rpmcr9lF5mQQzlyU5SHrF%2B119uT0In%2BDJMoE%2BPepRcGyFCR8exNPLG0a5zXVWauloaHh%2FKqXE6ebu4H3Rc%2BiJxETaQCe7krAl8wZbKp%2Frj7v2NpUBmN7RXVIeFM2ZcWVRMu%2BufSxeGFB9FlUl4VzQigo3Iv1I7wfoOspOlmLr0%2BALOsglD2M5VwbcL47fHZnmvOE6zVsrytJQvrqg8fZ8QKi1LyVRQB%2Bzr4KEmSR5R%2BWDUVYyrB%2FroZd1rEVlS2uOBtdETYJaMa0nTDUye3BBjqkASwBW1MEYle2fofg1olkuVXP2Fc9UmgC91FgCFTDye9LV8r3h7rhJLD7iNeKbPkbKHIBS2cBiy9hl8AA2Hp1DOLTh5hmtFWbyXiL1K1wmxsfLpfniIyODaDV0%2FJQz2fb0%2B9tzDovSeN03b3wZQ2hnbPylkgAGvwihrkCr36PBmkZWP%2BLboYaQwschAmo9FPQ6ANMUVqxFz%2BCJ%2FzVPkJr0E35H9hh&X-Amz-Signature=178fe66a7e204d3d77f5874f4565517764db5c053238938b7201d1cc82dac446&X-Amz-SignedHeaders=host&x-id=GetObject)

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
