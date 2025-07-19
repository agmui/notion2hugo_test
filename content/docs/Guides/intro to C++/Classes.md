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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WSI4HAXK%2F20250719%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250719T220827Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCVzIqqANRlPCOhKh0P9GJgthyO5sGRFBGTTc2vVF%2BTCgIhAMx2cvlrvR865Ygscf8MPZfNTqcISYnlTv%2BQwAe8uSJcKogECK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzpYuLCOGceb8kXo9Yq3AM8SlLsG4%2BXRmlrC3NME9ZVveDSz0HLFFLOw9%2FIfz7xp%2BFZR05AzOzfziVn0PGtZgowRw64Ib2eqsahGs1lfEPBctT7uycKqVrh5fX%2B6ooYQ2PbJkhMsmR%2FZWECa9Y0wU23n%2FJUn%2BfCXc7YuPcKARZmK4LppaENsDg59Mr9ANo9enFI2y0tFTaA8%2BZ%2FjxAsl4cpSQMcgkkBO7KtOGD7Sc%2BUouJjJNfrjlQduB3kv2a0Zc1Se2H5OMz1SPCG2kNoSwibYV2HjvxA9lRqRfuWAIDdKWacznu0LtHH%2B5GVT%2FEaCQKWnEv%2B7PPGrOBZYrOR73S72v2NCZ1B0fIGmEHBbwOTEvN%2F4rjvW65kkbzp6uvn3p6M%2BuY%2FTnJy8SkiqowOTD9tK04p8YG%2F0aD%2FtEPD%2F20IcU0O9sZzsZ5Sn%2FGLIO3KvMAPSSgFJrKcKxlE%2BRwj%2BfDHTWhUZfUdiWUlvZb3ecAuUhn7EI15Y9g8Q9fKz%2FuvKvxezhfxytRoAd0Sv4PiCRi8bS10FcpwLXPuayF8w0ZRWeTR88cxj99aTBmphgGzPPB931T8nNQauocNOwKK5LcR8t%2FrC8XyGDoxY0mr52NW31OT1M3z%2Fi%2BEBMq9UddQneoUm8cpCrmTdoh%2B3TCP9u%2FDBjqkAXTfettnU%2BcYORuwk%2B8RtNxBusLc3Qn6Mu76blh%2BVn21NMqogtzKJbjWIO682N%2B9vsz4uT2Eklr92X6ZZAxkNctX1iSMAQuuAE8KnWHMityoruqDkpF40xqn6cxyiMepPrEiNrVEwh3jmtXSpXiar3KpD9pFBa2gdNq5trl0yfEkLVDxx3thEYMNO55OV1D8odW7SyJhzqy0GKlhMJcOe%2F2fGbEW&X-Amz-Signature=e1037d87b59c9cb9fa98776c469267f5ba0cbd88064ff7f932f84014f9774689&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
