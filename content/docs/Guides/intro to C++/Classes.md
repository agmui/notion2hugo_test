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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663IJBKI47%2F20250629%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250629T035040Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDvm8NRfocWwBHknShiGb0zJCrKQowJHFKlawq7h8%2BQPgIgRaNT5W8GcnfdJxyrWlFKYKTy7X6LL1tWPK7xnG26PfcqiAQImf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNit82ML6Sq4urOb6ircAyUIb6r3cHn7W95ga7s76JsUU0Sfhl90TaXPptSZMfjsAFSOX7EGsfFer71gq5gpW%2F86G%2BpkxyJ6rpRmQjOkgV4zMJV0nG%2BzZKHiyNxeIioSyEGotwxjw0RaZSVux%2FnS8lODT1JOOC%2F1S%2FxPv6oQzjVDDXbrH3u5gRuMMDo%2F9Dsc9eOWOrczSsibCp%2BTBwuMv53TotZHQXjhXYMo%2FltIzaon9%2BW%2BzmeyCTf0I3YoGkjJaeFl0vqq29oyE58ILeLV70o8Q8VD4LAwEL2Ongj%2FjyR6uYP%2B8ctvCSerMNVBhrLvterNYgJ3J6vbJF2IDxM6pQbkKMf%2Br0EAZA2h1QPYAPE1RtuSnpk0xmFabrIZ2dDs8joYel8vwb6ZRf%2FwW74FIdo66XONc5uRxWmHEeYk4J%2F%2FH%2B7i12SATgEaIQ8MhRLERICmsi66Oxwr%2F%2BGVLE7naR96p4qWjxuAes%2BkrRBamrAzNLIG2fAV4EmwHT1ol4gJGEM9y0LqcferXxGFVCEj%2BNqgKekEvwkOBbnad70HH80nmz6Zj7dMk4q7WYGNdq6VyxmL2w%2FxCK3625M%2B9H7ELBbcG4gHOLQVSsJm%2FS8XGGNnz%2BsymYOKoymugU5enlqMQqB87R6Z4YHqn9giMKmOgsMGOqUBnMn0NApMlwqy0WjcBIroyhsLZ3cSBuglhmVpC1RTUM3ww8mQWBlrZae0CsmjV%2BXmGuRkiwUcRugn8GCqF%2BYgNkLiG%2BDdhIoHTIYD1cY8%2FH8PYslC8pCvBlczMMlNyEUEcpCT5FcV3GIPxydeYzp%2BYTgJtulQdCVxi%2F7XPPlYwPYhaM0lasx5xNP1G0LKTLrkLiKNLipfst3b%2F2Pp7WCcme%2BRbO%2FI&X-Amz-Signature=944b65f87d849a0ea3feea730bdb733d75bc18b6b56446d46bbcd20ad06872f3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
