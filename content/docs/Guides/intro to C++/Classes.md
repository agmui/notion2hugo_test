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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WEJ7GFKH%2F20250704%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250704T051234Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB0aCXVzLXdlc3QtMiJHMEUCIQDveWY4akfZ%2BfmNpHGh6liTFCqZK%2FexWypdjEB2Rx4ZDgIgGQERCahHHmPOmXacUKgOO9FuBbjyE%2B31QB2uIRgyJYAq%2FwMIJhAAGgw2Mzc0MjMxODM4MDUiDLczpQfVu7FP%2Fv21ESrcA%2F%2F6BpFyoy70tptp7%2F%2Bn8n5Fx6f10C9SxRWrZn4ddri9bz9VPsfJqi4Z2UnVJXyyFVe0FGPqVAwF8Vg1J2SzNKUqTzyegO5%2BShgYl3zpqV9dVVb6TXpKmR%2F977bmnahLGgsyjedeDcWbZNuJuDMoZ8T3FkepU7aKUKrhvqfNvEvDhYbX7ME2VHLi19AhRcOqwclWlTaDpb9AwWp5y0cN%2FHme4%2FVVf28KXW20pL83DH6hnFyxyThf3N75yhtaPJoEpEaltJYk2%2FYVqw2ih7FSwS94TcVv1yHDP7EGwdXPKt7gtzuvHo7JCzUSOLh%2BzlnQY6sPMDyZJJkoWcI86rlQ7voHbIW3sS%2BMw5YGQTNHQ%2F67N6fWwTtFOAwgzrg9B6tBhHkBh100nKdzrwOqA9HTloKEhtv3aJRW8GHjSxbhdSMmAa6JUTQRuBb%2B9w6WSJhLAz6jLFBI3dBD4b%2FLPqKoCfE3uxfWAkMNo3AO72chhKKAHP%2FwiyTGD2BOlWCcI27Aa0XcLDUWcznKESX0AiMjvfoAAkVWkMAXCMbCQEQiO3YB1x5PQI3WgKBdnYHkNKj6CR1RgBHHejBC%2BPE0p3%2FEsGxNfnleWHlzrSBsFc26CoAH3GGz7BPwcDLo0ECQMI23ncMGOqUBQsfklvygfEan1rE2DA65%2B%2BXBRsbYZ7KHV67l%2BbAfrrVvE%2BClgHeSzHrQOY%2BD4ek2gkkYCYgF%2BIdyvwWraDi17OfO2iCPyESh6lzMrbX45wTzSNNQ2G05w1epAvOD3si7CT17LQIdn0jbFeZnPrca6%2BRI0onuRzGpn4rYmq1%2FjXQZF5lLBd8x2%2FuFSW54DiDdXWysbrofxyvxH2B3ovQLLd3jSg45&X-Amz-Signature=9828a5465ccac59b8a31411435ef1cba984f649be8fd8940b342c046a0d241eb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
