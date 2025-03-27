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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667SRT6IRE%2F20250327%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250327T050857Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHSkw45mOQCn1m%2B6IqcD17Vizs7%2FXATfZ9QNRqGjU%2FVtAiBOu3GO8llRi2j1N9VjdtwHlIoTMVHYrC4UDbOHxWAeZSr%2FAwg%2BEAAaDDYzNzQyMzE4MzgwNSIMq%2BREkmm58CDCE%2Bg4KtwDZ9dOUVcz3%2FAi3kZ%2Fp6gCL7QR4TXd2UCxVGA4i9ZIFGwK%2F5oAYpeV9mOBhfRi7EjSHklCAoRjWIXIR3Mtq6pnenFN9F4t%2BnyddJgvdwhdU4S0reW3b5kvny4yiKVLpoZRCHwZrRvWHp2KQV5JKQVW%2BeGDbAN9W5%2FiMmVESl%2FobFkmoLEgyDR1UIvs1G09SzVXnaHino%2FAjjCTHXcYe6oLbpcYdUYJL9a1bESKHpLTCP4gjLfGWYjFh2WNwhfdwjrBU8NoXQJJrm%2BL3lrxn8goolL1BwFRlwspBA%2FSzRk%2FWa9F2UgFrbRzGW6LDuAJlPQDNObxvTJ4yyfnUHBss%2BfymKO1quTQGvtzfcEwrmTPhs%2BhDqaQzLxLmbiMWBqzijU1clO%2FpaOs4jAJe6iRBeVvMZV1W%2FUkjMPSeTmEogerLDQRTI1vxlCUrmk1tfdvSVYq34JNvWg7xkoxCCOMXqbpdCNoYQqsgPSzDUPy43wZnrAfByDukBEHg1EOF%2BnqppUVkUEdgJ0FwlAzlAQaCmKMcYyjeg7iymqwXR68b4EFikEwUxtUTApGbXlFJ6s2qkyMfSkhncszQI0UJNj1i%2B4Dtc2tJFA0OdTMLD4WXBkFddw3lDm5s7u78Mi2KlEwiaWTvwY6pgE%2FX%2BVjZn3q2SrGDVFvt6Z7OeshF90n4VNatmPdZ2WNgQ%2BC2e2tcS%2FF5dnW%2Fb2VzHU1mWpa2PElpAfkmIai8fklJlKeDc7OYYkk3%2FtEK4hkePvJ0Pg%2B93Esv%2FuAbL79oGIOo%2F0LuTbuv5GNUbx5fs7dCrdV9aYG%2Boz4TBhqAFAA13AqoGnWBmpkO9nYG%2B3jNgtL%2BMigil5ATg94m7OgFS7CHyrysiCs&X-Amz-Signature=7965e530bd8518f7dc66cd35daaebcef92fb59f062c3328a9990947e15bdf646&X-Amz-SignedHeaders=host&x-id=GetObject)

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
