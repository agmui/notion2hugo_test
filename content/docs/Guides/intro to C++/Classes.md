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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RVPNCF64%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T004354Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJIMEYCIQCOaUCEQfWfz%2B1f%2Bw9%2BWNvpGQfjyDDHF5i2tOQAkZgi9QIhAOS4k%2F4uhm%2BSVV6aaL%2BPkyaH0YtyvtkIIfHep%2FaOCMpOKv8DCE4QABoMNjM3NDIzMTgzODA1IgziYOkz5aQNv3yx9m8q3AMjLoBZsdHu7tAdOlhAwouQxsZDQSB97BY8Q2AAwhu%2FhkSceLPaWeb%2B20EwOPT0kMPPML4Crg0XQP8rzutOJUKOc13CEz%2BwpbUZHIJVXSfNLTW6fm%2Bu33TZGrv0PN9qevSALX0ML7nKqLrRoTOlC0KE0a5KrBPE09ucZeA5PTCUFy7gXmGa%2F3sY7EQoHChOSVKTkTM64Mz%2BSvn4t0WVbcpq4BYF0N6BpFBBQvyUeYeMhM%2BfVOoZqVRqg6Lkjh43kh8VJoR5xCVIdDJUq9FTqdSxwVkphrNjYC%2BcN5Tw37HZfsXpRBt5coGkDsb9FUbWipb48rz4cRmcQM%2FKSmWll1we5g0TW0SI6HIi5nonZoya%2BrElPa1abK3v7M28UEg5Cvchf0KGKKtZyplXWQkCBM5ajio%2FCnnlIAHLG3XNxk3sKxGICqkaMatHGwr73bswemldt7WIMGi7Y3eTbsfrfZWb35AGnJ%2BPnmR8kJnbno4LWWnmiMh9V3z%2BvX%2BRnCAqJH6%2BZ%2BOyU22u3Z33xunaYTtPuHnF8FcqI3OnrU7aTGcf491RCfpnXb%2Fm5WOo5qjLslod3kX9NHp3k3GBD3lfMiDIoJ8RoBsW0SDEHzLR76912xF5nSC%2BnwNCxY8jTzCA0Y%2FEBjqkAehYLbb3vbWCLl5jnxRYf4uUxr%2Fucdc%2FFRhy%2Fq3dXNEb1N2F5C8mZRT2gqNb5lA9Wn8%2F4KbWsZ8l1AeTd0iFj301eb1lGQJN5bdYRCfaOC%2BxcAaam%2BMZQmNf23NvHlSpIhhJ%2BBFE68x6VzQ4Jy8hZyHbH2gB%2BeOAWbbzZw2b1RlhQ8nbpISx9kc2q8pIY3WuLf6%2FhchsX3WYzMUV6WKB6cWCxyod&X-Amz-Signature=0a1d90d7896d8245f1eccb0c128a9bf4c1493d6ea099bbc7abb1ed57ec5a51a0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
