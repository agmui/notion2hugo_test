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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZAIUBQM7%2F20250209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250209T140101Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFulKJ7OFUiVZ7MAgMMJeb8xfsfciwFrfCl%2FdfbDlFezAiAej3nfFdZqv%2BZEjPw%2FC%2FLdAl4KpwBT3GDYZYDNDXuP3SqIBAii%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMC8q1Q8BJJ05uer2EKtwDiK9j%2FSeh9ELuhm97qzztV23cCO5nIg272HCjT6%2BV7XSzflmukJ40RU%2BF%2FjtWCY4noI3gYQX7o9dizNu4diyQoeEtsvDDDzGLS3X%2BCsRGKgEOTvpgdfgKfuiMSWl8xquiC%2BRiMPOGUFr%2BqGjwgB8w90mwDWeUVL0Eh%2FrU5CgtP1SSTFjim8q2%2BEuEUym278TzpzyvLGgjEI%2BEv%2BnWPOuZv2rFqJ5q6sazi%2FRp9R4IOwKBmRY8Ot4PT44jYQ4q8cIcfNDtMypkbybPKJ8Yw19led9odgXBZKdf4p%2BvKp5A5NAhB3mZd5ID5yIsU5n5%2F9LHEAd2m1RekV8uljKXty%2BWdAVhDTjKp7SUbGu8whZ62mbYqBfyz4Kww8u6EyF%2Bw1WbGVO71nInongElLm97g%2BY9SSms879kCqfk9gWg2JIhKTCQmU2vvQ9xhs5saF8%2FrmZ14tnYIAcO8%2BsmMBmH5bS%2BUyiMhv92%2F9ea8BOp8a5jkONNIe%2FbaB12xFmlWaXX63Hp1zCYpMoKwRMaMC4qhFa5mfyWLZrmTtTs2SbtRHGT9M7kb6MjDy3EkDZpQYAYyARKE5KWrjc25W90GdXlo1Bu4uAaBTlWrWYr9%2Fq7bZIfmNOBCqFbtIrljeH9LUw0OOhvQY6pgHRq6I0FNKMeVpv83Th2enqPkUDPeJ2Egc%2F%2FuEkkxssC6NxWGq5kO70RFedLfRBkP2Yf%2BXPfg33Y0bZqGo3M8QwzJddNMp%2FE1mMY7UC4TAaoZKKW7Zt9VKWXa2qvKDKcL7DEc3j07qEq6lR9Pi8%2FoRn%2FNfS99EGpIVw7T5KSK%2B62diSlUWVEGleMmL2%2FcB1lRf93TxR1jS8PE4A2OpCWk9n9vjlLCHe&X-Amz-Signature=4e7dc8d4181fa3cbc0a40cf24626226ce2699664a4512e164e6fecca819ef8f9&X-Amz-SignedHeaders=host&x-id=GetObject)

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
