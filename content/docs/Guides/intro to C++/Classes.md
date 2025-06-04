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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663QJ52MJJ%2F20250604%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250604T181155Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFoaCXVzLXdlc3QtMiJIMEYCIQDC58E63jI2o4g6Gt7hdrS1oLhtLwKzpMPsSveItUbgwgIhAOLMMCwJyBts8llofnPM%2Fdebci2sFmvcl%2FyARNEYdL9AKv8DCDMQABoMNjM3NDIzMTgzODA1IgyAWQH%2FQ7g7rPa%2FLkgq3APaNxlIRuX0toVwy%2F%2FdRFUXlgiScNaWRrggYT%2BomnD9OwuLTW3hUL1cihzjJjC97O6ijxTUJMcue4ClZiAp0cVnxijvZINtOt6iKCdXp8diM77QT8YJpIbx%2FUZ3QI29ZhfUlskvpnLJZeEpV3XbPxqCPJNbgdbVSJZZKZ0vMQ92lRfUv7F6y0t3C8n%2Bq9wkfmJ%2Fl8k2x3cDnfKU0tKG6Q9GfK8TVEE0DioseUFrO3203MwYdFfU%2BDBPdgkp6FUXBJwpWdVGBD2QnIlZNR5fCW7%2F%2F80jUaSiDpeFleVUIcfelWL9DBladUIG82prlvhJiVISpW6hQhr%2FaXEocJuUQSpHOrX6wWNIfSa8c2rpK6Sn%2Bh2X3cclXMJysjcOK3gqwrTLRbJTTdDcgHpn9vTyLU%2BIOWpUPvNGKfJwaKrNwnoIMJA5uqqwfF7RkhEQ4NCIURa%2BzDEkAwvnt1kcuLQ3htrstUhP5tWSSPHIZB6ftcehXyYubE8I%2F2lZY9AvF3qafQ3EsPlEWawYUz4xFjwgnIdMDnXiwXBBS9x%2FCAXLl%2FnzBuspIKj8iGnDSDi%2B3vgCxS1I9hOy2IGWilq%2FkfSaBC9XzUrmXwuQPjZMM4czDXvf6JA2LgM3ZYTcIcUCNjDehoLCBjqkAafAiifR1XSeJ8l%2BNV9z%2BWVX47aJUgK0CjR8ycSdOOOVQ%2B4GjadADiaepv788UGEHl7klOw1zugGM3YKVlWtp7iUX8Hf7RENhNjRZjYB0JIC%2Fug%2Fn9UdOll6ORHZ01eFeP5%2BvM5%2FvUomvqZpPUcLGoqULmSZuUWhJALJ9CTp0XKdabuk6f8AzfOpQKILuloDdn%2B9GwkPnr0oNFYe%2FaUrriiMINCZ&X-Amz-Signature=b2bd7510f8720c6167bb1704e7f390e1bf38963c8743b1e4a0cc14d67ccf46f5&X-Amz-SignedHeaders=host&x-id=GetObject)

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
