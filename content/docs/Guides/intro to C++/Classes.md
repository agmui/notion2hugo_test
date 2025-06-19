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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TUUN75UB%2F20250619%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250619T024006Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIB5LIVWDgQyWjmXJk5Q8gden9GDa9XSfa%2BQV8EHR4HLxAiByDtdokJgzgG5VlUnSR1jP4urvtNU0IN%2Fb8YGIQZLT%2FCqIBAia%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM1G%2F7blFGeoOODPPIKtwDXzNOynpwHbeEgnjznky8uPDbg%2BDv4aLfvPve8T1FxrHq9vrOSq4RuxV55gBau26BnZ1fgk0dXDOCglL3759dXBV4RGeQKSi7qO5af3oEP%2FaVdKWFQHsTpoR%2FA%2BVmXU4kXnthw4OUdVpNyaf4ToCTdFq2YgNdGdaqVHc3tree2OniXaaR4r7AFE2u8QaXMjmaACfYu14XkGDOIc8bXCkxLke88zw1hM3lI1U%2B0CrSxRLkD5pQRSM8JW6FOpzv3S6g5AWqe2SgnrQYIyqh4zondjg%2B7v4mKkDbdHHkhTUDRlyVwvhRsOVjVxLgWO2qJjvD1L9fUAv5E1baFzpuW5epXx4NYBvxV8Elc54gSdwmCZVmy%2FBz7hkra71nWQwO0Uebn7aw9SLN6iJXIKXSHN8qz5LI6SUilu67DODXDZ5I0HppIfityM0XEOeQLakdP%2B2n9qCDHALU4Amkr%2FS3coIChT3ngL0di6wed%2FbwOI29TGdJ%2BPOEH8zVqbIiMyxICFJSV5a3gW567iFw1uaMCWIWOc6yJMOaH%2FsZej51GGcqDATod7gfssCJ10%2FbjDB%2Bc7Ie8EDpv4L4qi6PW5XTRkJCtwKGJ57NngT6olFLNPoLGxg3Ss00sdcxNUrODJswlsrNwgY6pgEBvrPa%2BhMEgJRBmnhU9AGDe7K35%2BZp731nEpP%2BsgHkFvb2sNVNLjU96cepQnlmZ5TtQJCbT4JekK9VmSI0xvSZN76ZlKJgSy9Q8TUSm%2BZG7RSxVZ8CZU7caJqEskGih2MvPpHKPSqbCuZh%2BB26zmHupZa02y0IDJDHqAp9nlzafUCaO5gZhg%2FPT2P1HUAh4KpbE0JFp0JflIWD1KaTQ6kGHs9bCk%2Bj&X-Amz-Signature=4b911875611b48ff92e9ef64edea578837608b8d9894b3a5009af588caff58c1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
