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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TFES7YNT%2F20250430%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250430T090925Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAkaCXVzLXdlc3QtMiJGMEQCIEA%2BYgu97FLkrh812X2bSksHa9iDUfecVKA2UAnmEwAwAiAyMdP9jpPyVJeeAEDp%2FJH%2F24OKPf8HEAI91h7C6H6tlyqIBAii%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMl14T0FF%2BDw%2FdJVekKtwD16UvygUOS7ZSN%2F8c29D7zEh%2FlIV99ngGPUsY0R1Bshu2E0J0uHSJS5r25Y9h5luIscVKZt136pH5CjPLh%2F4vnf50eQElKSG%2B4yfikVERo2atP5cbn6jukOFsth1fyrhEseqys5Wgi2dPIw2L%2FpSvXGV%2BEZFXILZuyHm3r4WfZNLmo5OI1vLdwgRKJfXBVdEs%2BH0L62zrRU1%2FHnws9fM4In6qxaX0T60WTJRlykxXsRBJQsVK37CYgB8RKF4TiPmIYwOawxwEwuJoi1IOuyTX3uU%2FKJy6bid3op7PgOj5FHo7aQuYC7W1m4RXXOTcTMkZjdCNMP70PkyB%2FrksaTe5cHrT%2Fe8Bc%2FGVl3saM%2FWWNmgz%2FmX6mCmIoJUwKRlbEYZmHOtHdogic9mSg4jVVAXu8J%2BCPUNPTJqOyybRazttfTSHL2RPFaC%2BoC3sNGm%2B6onmAQh9GEUmvuW81DOATcyCRGXrKmonRW0yGPF1hk9x9ujzEd1woax9WP7raJQeMJiR48s6aMLzbsaZu8U9xdDgYnJM7X8nwkNODBDRU%2Bw9PMhXT0LxhJFKIzIDobiBZXoUl8XkeJ5peTXZXPDwaE7CoHf5B1u7sQXgNhZ7WACMzue3WClQKFylyElJcC0wrs%2FHwAY6pgH9K9hYsGZmesSpkLESiYfkMdgyTtLyWEw1p7xgf6JUK4gO%2FJfy5FxhSSftGRWrfTZkLaZHu%2BNnCAtXIh5BVU%2F3hagPDbysTiw36zQ8EHw0EC5iIZQ%2FJ0E84R23A5924wGfxPkcRgL5dB0%2BmSjlLjcT2johG9%2BHbsC4joyoo7kaTEYRxrb3QoD0Iv9zof%2BBxM3qNmkrFlJAvi%2FU6xyucsacZpCimy0C&X-Amz-Signature=c532b332189af6fb7006f91318fd8386fa5bdf45c2b62677b10fd1550cb41e82&X-Amz-SignedHeaders=host&x-id=GetObject)

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
