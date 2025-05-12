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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QHYBNMX7%2F20250512%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250512T161047Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC8aCXVzLXdlc3QtMiJGMEQCIDUSHZs9dO97OBLeI2gF5THPQvje44Zsp%2FtAQv6gyf6eAiAjh3enQEzNm2HmnL7TZaQASuwpKMo7Wf3Rb3NkZycNqiqIBAjY%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMmwNW9m58orCADm5dKtwDsA1CHccgbUMvR2nHNOcjmASQzFkjjCMqzHUzq%2BrgNY2OKEm%2B2r9vkG0x%2Bl7D2RYJ8k2luk8c0%2BJGG55ipNZeLJ%2BfXp0RMLIiWUtKMPxuOtAkhXHQEWvAdcbWJ4j%2FSHRxK2dlM99LjTt0kAyjRbumX2JHj7zjHT0XkN3qZHaBzuzrG9ZQY6%2BjQ%2BITve73WD2co6kCxpB91Ms9xOv2C44h4v5z1XMkERUZQQtcRipCFLMJCIuobe0eZ5guMRS%2B4O1X%2FSx%2Bu3cjU2tEushf8%2FK8EV9Gokq7VDqgSipTPs7Bi90R1YomUrMcXB1vhfm6KNlK8E44oS6Bwe7VrT18oAvHKTaCRm4mUUbFUPFn7GLZgQocjWhtPPRraCaTIKxscHiCXPtiY5G%2BXONbK28K3zUCRzw0JYVRQljIAog2Zq8PN7wwjUdAb8iPiEdaVXmJP2TbixFhZ3XklHczpzTNW%2Bi8a%2FCixFJMgIYBEk9Y%2B1iFy6GJjsXKaCJcmrlA1RWGQuhTcLtHZqqsy%2FJmyvIzqSXlfe85Q%2BG8a6EIjN%2FkL51XjePuwjuBZzkUC3rhPlTIlTxIx0QS5fhVGZiv%2BrzmkZa%2FYrrNC8fyzrwv0N2k9iRMJuQdN4w%2B0cIA0lg5nxowrJ2IwQY6pgFCR7uR8s1XMWOWFaj8dAlinHX3SJQIv8n7WW%2BcF5QRoEQO5fd1Gjyki4HJoZECH5Jd9DjwvnbImXVvM8%2FtfSvFrUQYBuy%2BVSuE7XSblV3eRHG%2FRk47UT%2BWoKzGG3r5Bd9rzMEP%2FoPuAi4X8XrBj8AnTSLy4HlAEP41I2eaQREMDh48zv7BdAji0SAcl9Kl60bFNuM8ew62pNn78hCT7Ff8zCHpMWez&X-Amz-Signature=e1fb4e0ebbc9d7eec98c9f9960af37089b114851e6db9d05cea31ee3d0040241&X-Amz-SignedHeaders=host&x-id=GetObject)

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
