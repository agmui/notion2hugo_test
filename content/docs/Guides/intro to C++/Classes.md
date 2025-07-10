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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WIQWDXRQ%2F20250710%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250710T161057Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEP5yQZybVqrzZqAuZXUca5o0owo85R3ZksYZenS5ev2AiAy%2F8iCRSltOaR15Vcn3SFXun4H9pYagJEd9xSTlyGxEiqIBAjA%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMTPIrHRBR4jWvlwxHKtwDcLP0GdbGhAUC5uJNh%2FOnYyLk1RLZjwj4rhdVI5EItk3LHUU0ainSxyK6t4Q0CCRZfZTjp0Kmf9weqle00t4%2F%2B63niNvREU6%2Ff688Q3tFFkHm95qlcK77p8T%2FgEODYFDPApKeCoqp49IFV9FmHrbkSsgIulT6GTjKKNUW09km%2BGH6snY5yGP38%2Fw7w%2BouN9j%2BYliwleMhhyvzsyip2tfK0sNCw2ar66Hc8ZaI6pj2jvBSdQtekpgKHGdT%2BRGWovkIdqPQxHmX0MFoi%2FF9rcLFVpiFsv91DAIHF2P4kJNk7K%2BldxxusnXn5fXbKJ%2FECd1Wyf%2F4LNpjIs0iHFQiWCTHB8q98jbjdrEpQ6tw4caXbMAV5OoIsY%2FyU%2BZGX%2B1BgFLLVJZV64tMbLIG2LHbM4eWZJgHMlASlBIihtwIjr0VmFn%2Bd%2FQr8vxnX2c7RkNOZ6cAjXYxs7LOy2GAtcNh1zH%2Fz3Ue4azxh2AcJs4lYdY1acklEYS7Nep0Y1CdJEeTHHF%2BtRKMF57HT6rnmLjIur58qwMj%2BqKhZEDXcNiQqu5rRu6PdQLVnOfBwHBDSLJbAYmQvKF7a5SuuLN0M8PoI9FYTGFd6VpfpmRZb296sowDdXbPn5f3fAKSm4oYYD8wg6i%2FwwY6pgEyoWNMMcWwwiv9oR6OhcCOpZ3gtyp86377MazsiT2WdyGrDsOUj%2FYDX%2BcX%2BkcTFtCNs54jtY6YZphgAYLcnhXDMeTTXTg%2FNOyJs84jYkqWs6VKbAPRMefo0Fmn3GWMrHqEgShvY3vCLbjDOKdaiHwI5szoqmy8PE8QwYuXe1N5ZvDzWz4qGiyvBW8WgTdspP18MJTCEC%2FYIBZOy6EFpGCjuhmy7M6R&X-Amz-Signature=a2b445ec511043f152027919ccd07421518bd34f057e0ba04bcc43f0870786dd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
