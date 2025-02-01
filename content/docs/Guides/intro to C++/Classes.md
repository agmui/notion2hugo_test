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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TZSUFLXF%2F20250201%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250201T003758Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBxl7ZrArLq%2Bkbi%2BN8JK50MclCs7thFJg2EiBUuouVv%2FAiEAv6%2BnWpY%2FjaOkjt50vw9o3HSJqIcsguTWNbqwHWOAiLkqiAQIyf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJ2zL2z%2BgK3bIAA4HircA3hzmQ%2FldyfVElyGyOwCImiBamusa1UpUbRAFIOmJMDvcFdwXI8XVfAIGs2FFgUlp2qxjrb%2FhtEeSDhm%2Bcomhhy2cnA1LNHVX3S1TkBhoTUdhG4IkpDMQiuwdGqTrFP286W%2FkxnXUmq082Gg2fh901wQbMvFpQr9toYcDa0sk6fgEPbl56L0dLIOw5RLzehsXsOBCg0firb4DAlt9TxNJ6VJOe3R19N4PkLBfeXCy%2Btu4IJNFijuYz2uwWrjHHTMC8wLhVgz16nbgrlsYVEG%2FkZOXtlpyx8Vdr8XOl4dOedkVuDqTM9dJz3Y8yAFYEntS7yFNevGLbEro%2BtxgRiBh30IGR9M94q1g%2B5xrJUatGs3eVwCKUfeH6CaKBIT3R5ppLGxoN%2FvVfi5OtT%2BLdnuPIJMAejUzLSZGgzXLoHUoDBFIzse4%2Bzdg62lSnDdwRr7opgagSlXMPiaBTjgJb0q7K15GhQas4kM8TEx5e9Gc9ZfTZmpsbf6EU2kEtLbkbxQXD9SBPX8Z6W%2FjuaKzlJ2Iq1j6Zf5zP9xp%2FZxAna4RW54bwCTcLfPRP9hhxH%2B%2FIuIawdlCZQljuqUG1WcVEas5yMELJvpkERgme5ML03aVBGcmR3XMiHU91jjeaz1MKbO9bwGOqUB96IGcPpF%2BnrTyOhTtKDqsTU8kbKBD3dkqP26s%2FPl54DvYKqP58euOkyQCbtrpXOdaT%2F5SbjVkCXzUe4fzuSBbsr%2FZEn%2FdoD4Heo12ijSg4JzIENFKol4m7DW33A4YUx%2BYlVioSwSvfNPjtvxdPW3GnFXhpGt%2BKmU95gzhNLXm8GlmWNPmvpT%2FAqh91F6APU04P2g9t8%2F7TlIY40wamwG716O%2BzBx&X-Amz-Signature=d1bfd3f7fa8887eeafb423a1e25998b7660104b5d98a3b99071d42136cb4b6c7&X-Amz-SignedHeaders=host&x-id=GetObject)

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
