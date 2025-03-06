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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y2K6B25E%2F20250306%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250306T081116Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHCxT1SU7aTb5qDdVX25dK0tDnGMw3Ow8brTghB0na4NAiAdFWW9tYD315MSAjlx6WultBHfOJ8Da9NvdeyquJiEbir%2FAwgoEAAaDDYzNzQyMzE4MzgwNSIMO6t1GZOWzoXodoYGKtwDfIRYjcS7%2B9LhPU78StXTBPIDeTRCpVT9yX8mDSfQ7vVAybbiGNVW4u9HotTx08Y1jBvaB3jwLxEVLbwTvAb2r5uMNANrGeiLDWflRgpGxZb%2BAURysoXIppoQGzT18hbnKZOJL6jKSpXs9fEqQnA62ebqNroYC8XimdeVrIsWhMV8jmOunObX8NtAB68OB22YhWCDGFXKCntl3CGUrvaSneDlmJFQYE%2BaFeaknm6SzngCAPmn%2F1RapGVsiIXCB3DFI8QNqRqOk%2BYFhgXNj6mudXXYTp90nQorSND8pv70gYVQeqvyPZQ6no44LDHUlnoYQo53e%2FyPFDrJJLxY5SeAAp%2FmuEuTsAu23xG5UIFZZ0aq8inJOU2cgjWWm9fBcxwlw%2Fc33zq%2BChNfn3SKurIld1Ay2FTQ%2FhSLL%2FrRa5hNOHxfLPP35XPMRWKM3Fj47LaI8R%2B%2Fef21UtZkOu%2BxaSWo1jwqEiNYAkTng0jkd4re9L2se%2BZupg8HwBSlK9GaZmSylPkY4lOfkrhZOY5AYQuwGDtNAG2z8e7brUDjLHfTE9nS%2B%2BSKleBbOFgmL7ZL6DV%2B6%2BQ0BaGg%2BdTFwMDgx6yuSZiPRerR3JLDSijclnC2KfdQCr6jH0wv0CEX9UowupalvgY6pgEAb3U34RrObPTeszyzR6c4cMFk9a2l5H6e61GV%2FeZjUV%2F5nSYEVu5WqSdZWNCJJFWBd8aSAp9ceF0NSKU%2BMA7XPvRJJmqVZ5ZyJbkza3wm7ketgGG4Ppf4UTxstNaumVOxZgQFstBpgLi%2BYLKTnfnx1smkp0juWV8srNdmGA87T41wuKkb8QICvxo1GujjUS4JSueR5elWSVGkSVXAbmyKJ94yhf0w&X-Amz-Signature=7768c921f409150847715706fefe3a889c7e022d1213b3df4a5c7b635ba42734&X-Amz-SignedHeaders=host&x-id=GetObject)

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
