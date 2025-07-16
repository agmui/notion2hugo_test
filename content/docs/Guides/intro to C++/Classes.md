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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YSLEOP5V%2F20250716%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250716T220924Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE0aCXVzLXdlc3QtMiJIMEYCIQDpOYonEulmHOY2ddLaBsN2moRjHq3dBs7IgdQ79PiyegIhAMtHZwvxTbc%2BCeIq5cuUzaeLivXmmt5PpZDzZT%2FppJT1Kv8DCGYQABoMNjM3NDIzMTgzODA1Igx9bqyws%2BkwqkuNpZgq3ANdEOiSKwq5nLa7LKy8J%2BUvswvCDQtqhL0iZYGPGR2Cg2fof2By0BDk0ly3gmfBkAH4G1veL4q5NKXvbwHBR7o1771D3DcitG%2F2nMdwVp9LNSFwDXrRyTBJrPQnnk%2BuTwsb%2FgxRzQLCKpcCTZlpT5F3gt7PNKnfK2uoTRs3tvlP6PN3Qh7jofHDloLruPzufGI0XdNddl7s6ITgY0rqGBp3R%2BfAoLgGwIn0uteNVPgaDDuU2IFaQ3829GVT5M%2FT82Ce%2FvKX0P5a%2B%2BUIAFGuSXpdvXLmA%2F%2FRbX9j55Q6H6ySmdXaiF5nRGdwiTCBv%2BNmxmGLr%2FZstqdVVIgM0groex7BU6zgzeXLDnXRqTMNCFNBZWTIWyB7gaLjnZdhrHCod4NpMXPDfUMExwmAKxdoVzqJQqY4AITJG2acMHLtsKCMXNl7sDJT%2Bvi3ZuzZRZzsCBPp7ji2ic%2FmRUdpHRRAGtX6vnV2Y3KimA2mHcZ73Gygy6SXqAXDOaR7zgO1jUBt77jIxYzFk0grG8EoF1pXIxDNW7qmMoVWso4%2F4J%2B0YQDPZyb%2Fg7sZMVVB1iqRgY%2F1BKVbXzb9qQxQ%2FmzAl3F60DpHG5IwUbq2RS0Ab%2FPWMfngu8PMFtMm7PqKhTO73DD%2BluDDBjqkAdHazUkfmESR1oY5OywBeMKk6N6c9H23%2BuHZ%2B1gsj71d5fjlSBCsos%2FCVbiidVdtvxRCe2miB9AD33oSvbelcPxYV3KKmnzlfBATCD%2Fgv6HC1BFf5VMOLLIr%2BEp1KXSkm1hdUQdlWUddp%2BfrLGdeetSxh9JFe75nIspE3zoWF%2FIRcmkfKxroGyUbc9AKjSEnJvK%2FW56MSch968ptnklg5nHoEMGk&X-Amz-Signature=a2e4583d4288813d9718211d29ac2f7d3b542afb1db91a410c93764943b6290a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
