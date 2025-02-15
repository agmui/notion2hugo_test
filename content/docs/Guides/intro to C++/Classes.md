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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666RTOYHZN%2F20250215%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250215T020744Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBAaCXVzLXdlc3QtMiJGMEQCIB02ugocrJC875hcFpeQZ7TaHUmSXQCKxOjub%2BlzRStWAiAQBhN3C0OjMf6pUThxXY8%2Bgs3XpI8l1%2BGRnvKVejQ9jir%2FAwg5EAAaDDYzNzQyMzE4MzgwNSIMqyYKQf0TFZR%2BGQT9KtwD30G82g%2BWex8icpKPH8%2FWHqYR05RL1I5lZSeqMGkZJJNjSrhtNfmlNMzwZiCbfSm7qfcYmGcGm39tUNu6CY6Sj6DTHEL6FoEx4W1vCIW5pLdpclO3Mf0IcjyaM8NruJj%2BrkSPNFHAyy8v%2FgGfalPoPOrcCKO8XZT0bQ%2FOpRgQlvVH9cplbOtuVxWcLsRb4UIbioXOWM%2Fp%2B96oO01qbQBpBhWhXfu6N0zD6G%2BHAYrr0QGKOhre323vJaQ%2B0qK6sSVxaZTDgACWvg9RDPNLO9CUN51r%2BtL17FxMkTYXwDcJ%2FXCSOWBYcQ8vL8prXFuzlS%2FIh6VwZA7ucS2Fj6XxERP9MZUO7dIygfrvkQwDG73SQZdr9nUPF%2F7woiz8HOm2S1TwGIHQTHAD%2BOeV7sCGETfQ7okm9%2B4oil0%2Ba%2FKNKQxCDPTj9TSz8CMtM6wrB0fVlb8jzzIz3i3EKuNR9fweAjTO7vHTsfagCeEh0MZ87sExM%2FjPVu3gisX83%2F3a1o%2Bl2WcZRoM0JdsDJeP4LSyg8cd1scjiPKmlrQFB%2FOlii8vNc32YHLT7s1KFLN3Ln91rvv84nvfObkB5VD3EwBlOpvFeukSxCyyRLghKOfzo0ISVmGy7oxEQrtLkAonIipIwo7S%2FvQY6pgFvqWlVDrk1%2BPOleAv092R6jTMix0w3VngAEIyG9W%2BC7k%2BsvG8mdAbpNAedQcoWbKVURoOC4IGa%2BDQ9tT6zw9LqilzCTBd0VR4GSjNeIqb50DjYqnw2MBOAataqJyEPuXO96P1YPYmEg9YBB1JgbNMWrYYVPDDZYi26qoojQaMt9oCTgXPLxX0YnPC6JWf3tquQxeRgOE%2BmCX75fWm6U%2BJUfpYA%2BJUD&X-Amz-Signature=11502882bc307855369952ca58a0507bbf60d23adb66551bc93bb3ffe3dc1bea&X-Amz-SignedHeaders=host&x-id=GetObject)

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
