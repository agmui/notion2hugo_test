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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y7GKTEIM%2F20250417%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250417T190332Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAVymlZzu2JhUY8NYRd%2Bhs8VXXEBZUD0ncPrnV92JAuOAiAG1TNQbh6AU%2FZ1n1XIc7qbun5mm7YGHCO2qwMBE94qiyr%2FAwhkEAAaDDYzNzQyMzE4MzgwNSIMS6OPuCjyRS900TqcKtwDwPA69JvzC%2BkL9bLio2NKiP3rogglMm0GadjpwaAcvcqy3a5yXVvZjREmS4SeKv8CgLWbO%2Bjym7tqXEGQblVXhY0fapgMMt0J0dSzSBV37UQ7DNovzvLSPqUUT%2BLsdMqaQ9Qj1ztOnxyy8IEtK6Zt2QRSknkFE%2FARVMk5xmvXOJnKOa8COIcF%2BpAvQ3WFVkvgTaiuvjF3MEF6tbNojo6MNxYxNEpfIUQM0%2FWvuzLEEv0Y%2Fvb6%2BhvV4LW6QioWsxoyGB5EdDssAZsTf2CYvPRvJ%2BF7hqb%2B%2BLOpoK%2FlBo5bUNVrb%2FZ8aNEBfeKttYwNX83u%2BDYJsSf5nVre4ITFWwLjL%2FVULgFJhodqyvK3OV8R1ock5agJb1ansV0He5SS5Atpk3ApiyMB%2F47BpekcwvOzYdl4ifS%2FPqg9b5oKViqh2ZcKZmDdZ6BMQMxKihGGPn7NuWDgM14MPeko4SIu5gfVVjCrS6mx0eVrrhiDcPjsQWSKrULZ%2BYCNcKU7F0uyFfQH82Hv2ACA1d8bhDXa4IfoyG8zjoeU%2B%2BNhR1%2BEKWV0TARPXIK%2BrU40m7dY8Pv6d48n%2FOb52o1sSjIT51d3ORjLrk1%2FOBEXA4LMr8pkcEgZCni6r0byl7xxpPEc5vAw%2F5uFwAY6pgFkQCYCBpwyj8INW375Sby1TUsuJegRK4usfbl0BKFIYjzuHbB6dmp4HJ4HJxS7FhNP7KeeDATKb%2FHNiR5GRgX6u2xY9pQY4QavlRVYMgK4AP88mO9SmEyh%2BuG4eDL%2BF20bGuZChKDV8LwDshbnu2JxeiSp9vrHWZJ3o1sN5VrTtcKNiph4dfFoaAnFOlnTHXI6B0%2Fo3rmU7L1iDiwEZRa2djBr%2FF15&X-Amz-Signature=02fa074f54267f6cee6525f0c84f72165f037b86b0c0a0aa5ed39543629e7bf8&X-Amz-SignedHeaders=host&x-id=GetObject)

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
