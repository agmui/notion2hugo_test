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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664DVKXFJ7%2F20250526%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250526T230756Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAh9qfDRxXLh5%2BAjk9C0nzNLHpnN%2FddErq0Ew%2BJ1Hi%2BSAiBWfOFFkArrkZFSd2gG8HOhRKr5%2BiOrx%2B0n%2B0oW9pSFRyr%2FAwhPEAAaDDYzNzQyMzE4MzgwNSIMBDnfxaM7Hci5nVKwKtwDOdWk3xdPj%2Fg7tBv2uU7MxSstShiqmIda5YvQk0Agz5I%2FYFbaWdZytBBRm70ec6fJwK3cTObm10cLfaGNfgTOfVHuFeSDEmLlgrHIsmdYM4T2PKxGQ3uVuKZRN9rHOUKNUgJKLdXRcY%2FJHFFQTkh14mmxwLykKAZWuvG1%2FrkEGlqcR5xChEvZbgDPcZJlshmoDGC7wLrvhVxC8ZsNowygXNpYXddEJ5lvFbz2iGll2w8C0rVLi4RsEftU6yLuJlag6TONjTRJTYuNCoWjEzx%2BbY1huG4eg%2BuXIXaKqIA8lY%2FL6s%2FrLjPz6Mfq76iHpq6kK%2Fqdw%2BWbOjKfyKmUp63wd6JhtlU0w7jAfHrSN9Sgw2dSzrAamveldVPuKaX3UnZdobBgfj4crkKZWq0kHnqDKjaCsttvFa17yv02MTFWOc6%2BVmZX5eNZdaxCEtw3NnNdoWOilWdx9kHAXvPMk2Om%2F61XudXqiwDoDW8vfldg2mfX4B2f%2Box86fpLV6toDIgh608csOIq4RRNonmmAQLHC5%2Bm2Z%2BzKPD%2Bzrcn0wA8HGM1isNr7bSnJzCU7b0Oy8Bd0b%2FW8TO7nhl0pB77KwOf9OeMy5tBwGXeJ7Bp95SkN%2B79Hj9%2FCEtBT5aEjq0wnNPTwQY6pgGI4xNiz81z4S2ZXPqUIrv3pFZZzUhiq37nO%2BbBo4Au6WdUmADKR0SKaR9%2Bst7aCFBg07HFIulb%2BQTfJAPEZNJjZwTCNQj17MgYH%2B7jL%2BkZBoh%2BGODAgVtX8Fyo3wRiM9zhJpmp%2BImJcTtcXxrB5MTDs8yNRrFoG8PdJ8mBfMNmlixlmSfo7b5i8EVf8bNzYy%2FJAQjNZlZaWiScvv04l3SAC%2FsTi8Oc&X-Amz-Signature=1480f595c93185b87522703710400c24cdbe63af5fe4106032930d9ff2b99217&X-Amz-SignedHeaders=host&x-id=GetObject)

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
