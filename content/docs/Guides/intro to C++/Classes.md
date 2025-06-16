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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TADJQUD6%2F20250616%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250616T161052Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJGMEQCIGCsX4DRZ5V4jENy75AEgbmXQtsCYv8BeB97p%2FUMHh0IAiBIV7x3ibYp80DI8a969XJkRUu7K8jkpA9OXpaQ5wyo8ir%2FAwhfEAAaDDYzNzQyMzE4MzgwNSIMsJuO9J3FYjgRifkVKtwDE66Yyze6aZJLk4kLALVUIy3Uf2xGdyH%2Fpb6Ipt%2FdRIsgNOwiNWV%2BBbapLXU4gmgfNM0OE%2FmKiTBzgLe3e7SN%2BKnMNb9Nz0m9A6nnsK%2Byv2cWsH16Dm6P2DebV05%2FFDiKXp0NaPIZz5v5cYArnRK5ILFr8Q6E3hWr669ZRlZkuOXyFLObQmB1yLc4LLJUIe5SPBqoOYl%2B3%2FzB9NQFxsVzPiL6ddmbQ3wFlSzr0wIhLCjU%2FKfLAsYpQ5K8lX6pXmCDbDEdy%2FClYeexAT%2FUeMa%2B4wI0jPsQxXULPf0Sv5dXm74tL6OgaGlU%2Bz9ooJxx6djkxXCjEqPdW8n056%2B5gyKo%2FanG%2Bp00vrC5%2BObprEppmtKUTo2FY4Vql0VVRi8AUW2tQ863xGzDKtaS9%2Fg0OcQQcUEkJ6RWDLB80Xx5n6eDfuN%2BdWz%2BJkzKM8K6f29WwBKI3aEEQp%2BEaQGgDv%2BFWTLnBprQe3fuxcPJ7n1ey3C%2FSAEQt6e6Nbjg7C4GkFvj9j7n4fN%2FjUYrSiFPti8DVpTNgGProDa%2FX63t%2FQUpohj0PXzxvMr43xiN7mxnZbjpaTqk%2BAMq7D4hLkmY1uU15DLycrX6%2BmEoatlWibz6m6i%2BNQK%2FU4ZGrqJYpvhhWHAwwMjAwgY6pgHN66aJ%2F0EauaCthiRPXwa8DQ5KVYsLlGMW9kxCmPzVGQQT9f5Ix4mAT%2FsTXQODFXSgZ9%2F2y1U88%2BrgHHaFDT7UTT7hQDZwud3KL9EiQYr6g3x9OEDucMFUwEbEMF246SdJ7rHLFcA6%2FXU9I8Ivrv6G0SCz6xk%2BAIR4jkEwp2Z6eQ4iTwzsL2My5J7UyNcQxpabCEMO%2FUM%2Ftup%2BbNocRCbI2UAuNfbz&X-Amz-Signature=99b5ae6a462d113c3a95e90dc2a768b868bd9c822c1763843e9fae9e87b350f0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
