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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YHXETAEW%2F20250621%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250621T090808Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICNP6lnxQYbCPJVRhjUna5xqy7m90%2BmdHqN5pkxflRQNAiAqT2SOUnFxiqXvOLtAZ8bmCkgOi1MtSj0gL7WSYJSTNSqIBAjR%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMAdZRtTVSBgkD%2FQRoKtwDLzG%2FmIifC8DU76NXuBEcjx%2BlKwzA5SI2nXYilTwFWwtFcTUbzybcVTi9Pw79IpEP21K4WBeBrG%2Byey3vMzX4qa4FcUPrl%2F9B8BPP0wMQBOo44s9z%2Fh0wQh0SWE7XV2EgO0sman%2F%2FXe%2Beo5epcZeCmbZx%2BjjStCfokaG%2FR4QC842ANiX49V%2FjEcxE1Dvg8uRp3wYLdAfKjG1oDhVOG32L8nGBGeR3V2zCCa5R9VVVlRWTH%2BtZeSJ3Gi6UrxrhnHrbTlAhfLt66t7mrSuo058SEDFEXoSYCphb%2BU7e8UQAEduc9zlOl6MN0h59tYy4EOJAFIycGASKxwLeYCqnj1WtHJxHUmWRpVy5wTwGCO9MRcNrT%2Bm3%2BEMMuFzxFdUm99KWMBzpfinOVcdn5vt8lFNtNsYYBxCALyTQDWDgAygU28vyIFNLUABXJDtsxwoyovwi0qR9rw3qPznjjn9YfQz2rtNrzvbXy8RbZVf8QXrAUfMQPNHaNrs3Fr9nsIFIdnuR65lnlGW8UjsNpQ7ZBbkUQPgpqIDeaTPm9DfRJC2%2F8Tl0Vokf2B8EEY%2FtttwmD54F9hbqqY4IXc1iT%2FZS%2F0H16FCQzOTgPhWpRMPvQJqZykmYCDgDX0t36x8DL%2BMw0tXZwgY6pgHQQp8zQRXwX5jev%2BIbNY8BCgn7LqnKP6WF07mhfPpnvVVa5NQix%2F6drtcDwUMaWtc%2BYTkOkqGrZ6Pi1Kj8F2RlXwvjM3VjYyuu8nsAcHj75hzeLIg6kk8Uhg%2BXMrRfbdrTTvErA9iomXvdIr1gumeoMn2fg4KDGRMhhkT4d1hQBf5igdNUVQGpK2vSZHp3Brw6cfokMt%2Bxi1Oqiuy%2BHWkc9fea8Mw6&X-Amz-Signature=fa3e0d093ec6cf545d9656c122d3634b0bd3533d359070837c666272c31d556f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
