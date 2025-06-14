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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WANVQKOR%2F20250614%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250614T022628Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDkaCXVzLXdlc3QtMiJHMEUCICtaxlpz9NXMPnYNL3atxk4S86SjSOLmUMkujOnCl0G%2FAiEA7OoONgK6MppQObkG3nfhW7ETjzEQ6GfTi73AN%2BcKIHIq%2FwMIIhAAGgw2Mzc0MjMxODM4MDUiDNqg1Jl4ABZSMBjNVyrcA6dITuxisCrAFTKM69bMmDEA8KWH6eURxevDnjNiHXOZGnDinq%2BpTLCRl5TaTfEI117sU5sNutemzsvIoCsCCFLkOO%2FsEWcKu%2BYug5F3mwCqWhroAxLZgvAiZC7w59ZOPGgetlxVaF3my1hKnOc%2Flba%2BeXjO541dIvLCPSj2j%2BPL%2Bxcyr9u%2F482F0A%2BsetiN%2F7bmxXx3bcwVvgCUyMkEoTOBN%2F%2B6%2F0iUYN4kl%2BJ3I22Ul%2FDG7CX30I8ScE2dVxR7x3Vbn9KwrRacJ4NmR2QWs09PoSZyovI0k6kMB4YIOyk8ByAnFnADGu25YM5Pcbxf47vhRiYebJ98tcSZXY5V096jrdyRBT4647fV3C6pZN2hTW3hkQ9JpMeEe5JP9trxLiV%2BbbC03hCvpNH9W2HGdEjcEc%2BZqhk9DTLjrbi11%2BP1S38nQA%2BN8kQ1YT0KfbyK%2BrBtb6VJjwm120eoH%2BwCsXRKu369Zqp9tbvo8HAxghqwC5k2fAjtgJqECHo6gqAgNu%2F4D6z0gDVzVBcXoCM%2F225NgrfMaz34i6MamGdAoi6cARPKOpEmJQHsDdz1SKDr4bs%2FRjA8%2FgFhOoY9JMhSXUGAV6l6RxIoK21EUlZpAZgolBTvGHtv6BoJZ4QgMM6Ms8IGOqUBVIpsTRC0q1FovazzuRxNOOuPukbwJ7Jy3hOKDDLy%2FmZ9kWgO3rpLYzbsf%2BWAlzYCIwivRRaZHjbSs6r4LwTf%2BJCRh7wiU%2FQFxACRtYBKiBRf8ACqnYymAZOIZ32rbbeBZgRx%2FucvdxgRY81EA67MEwCMYK2U3a7bbHq9EWskv%2Fj9ZvAvho%2B%2BYAAT6q5J29lKYjh6zx%2Bg9%2FhPhWvZcc1vCzF8SgTM&X-Amz-Signature=922b2c614280839e358f6e9dc952f4822150d81343fce5d446545bfe1910ec7c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
