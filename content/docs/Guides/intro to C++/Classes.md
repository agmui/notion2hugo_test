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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XRXMASOQ%2F20250718%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250718T150902Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJIMEYCIQCJNpL5ScyaZY5%2BWgo1ht4lARYmmwqB3GuWjEQuNl3xVwIhANMxGRGC3EH4msxzMsYGOUWJXgl0SeTZuPq4VMUsOYdwKogECIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwHPxSgbxQ5hFL%2F2Pgq3ANOc%2FBEaiMgfbKyfrIOBYoJoyJvbQ2i6h4db11s29kGtRWJjIyw8wA%2BXZg2ShmcSShvYJbxtVJaTWAR1zBLDJehSDnrrg%2BKX5gmNuqGK5XTYIMG7akBRbDLW5kvj0LCt2aOZMq9AQxqekLw2eRId0m2iKZpzzp8g2G2qkcclpwLc3DXA1eHVphrMKBmBgiuUz%2B3d%2B9vvT1H0tjoUdCl%2B%2FRxhKzB1fsvt%2FQWi5bR4fsQyh5ugohHYXonuqLhwHfHk5p0dv4ii5lJRzq6QTyL3TwigniV7Zfe9HkUIfqLvydqjU8RH4mUpUrYGHYIql77h4Xu7IKDRreRGeJt1BEwyslQ0wka4EGZFXr9fhAkRH531HdvW6rhx7cMgy157n%2B3BnVE1DJ8dVbqMEzhGBIvz%2FwtFC8sv7js189TEgMT07e3HoUnweqoxpkVKCqEIsRuV7IB%2BCgfyKBVG%2Bp%2FpLDWx%2Ft0RxhCaKd%2Bzk5kfpVad4qnXcBka8wRn8qMzONrACw2%2F6TCCtgbHhSsWa1U2CldxczmizfvsBYnVBVCC5GW4pV%2Fwkw8VcLStx6y9Nlr3Exn0251TZlQQuBwlrfQgQd4Io%2ByFSfCetCvZ7dCa%2F0aO7xV3FgJQ%2B2pKFw%2Fbxm1xjDJz%2BjDBjqkAWDPrjh42vz0DZ918LlW32CiCzUMvkkLnpJjGcNsgus%2Fa9GqZWvGcRs848YOHKJQ8%2Fm%2FLW1mTm5KUZSm8%2FbL3Nz%2BMyLtb9iGv%2FJq4ZkO%2BC5JYUtzZgwqJouGIzKuQPstA1DWewhgxhgUIDrl9af%2BJ61QkokoPotHfJnNcX0%2FPSg1ZPJoUBs7y0TXf0nL64QDDJa86opYcthqjabfhVePN0aTMec8&X-Amz-Signature=cdc21afa919a6e143bd10bf8c6ccb26e5078908772ae2c0d4db2fdcd22b51c97&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
