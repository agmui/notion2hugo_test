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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666NMC7CLY%2F20250721%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250721T161039Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDK%2FoUaaPpA8NPITUloOhPsLc5UzIpO8wFN%2FsD5FUcskQIhANxqvFlHDA2RGRNq72d%2FplvLLM6cSWyl91ketIYUQTZpKogECNn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzELcAREY3FxPYe3BUq3AMF0d8JigP7BVaTLZMqADRUZDjkoWvzCmFl%2FViB4g8BVNDICJKvA5vbeYtG%2BvdFoxM1nYGZjWgwN7XxiPyaBxDspi%2BhL2G09SPUDRLTTULou7P73XWyjmA0Swkimsw6wbiaNU%2FOYDoWGA9XyyBwbN4m%2Fdg5Ua%2BFMWkoW%2BEv98%2BinMuGEoC3m8EZI2J5dpX7OSY0OaWzJslj5FN2Qakbia16zpbaIqi8NgE1Y1qHee66zbSBTw55MyUDDUy5482ZP%2BgKRV%2FOU3JRd8U9iAMHNd5nfvTakqKCcOOT4W%2FQIH0CwjXk98ySjHn9Da2BDcvN5uhumIJl83TtcpUWk8U0iz5mosO2%2BeAxvfl0JwWQJNjuX5zVKp7pmERvCgkaZqVOUAw0VQKbW7wbNeXIvBBD4XCKxlfRWd%2BwjPO0ET6FsmGhLEvWObiEZnuPBZzELaY1bYrxCOF1UPl6dHOlFzUW7vG2AEr3LXcCWZxn%2Fegqj3xxviZqh9NJPpLthb1oJcp11Smblc%2BN4XVg4GLALFgNtgtNFj1Qr9w9AFkTyWiXIyMNckMp%2B0jfinVrp6VAdRDWNN3mBSpk6RAOidxAP9IXQeaOaX50MOD%2Ba6ErLR7TnRywN9r4jmkDDLS4UurpdTDGxfnDBjqkAealBy5OLmJ13DmIZr766NYsPBQ3wXcV8KHpya4SsFpmnzQNRqwpuOSn3pmoVdXYnw4J2IZsN8lbeV%2Byq6OeMlq%2B6i2nzvIcKbs%2Fpr9cxRO%2ByW6EWRE9SsGYBiEZ4Xd99kh4aDq%2BpUFk5lJNqWd2L6lHBBcHwNf5U6GPa4HPtrTug%2FCuijVt%2BcJ0f%2Flq4VjHhSe4R9FhdsqZ%2BDZhYEjG9nDEqM4B&X-Amz-Signature=f2fcf5a16137f957b6ef5217fd257945fb6651f006313d3708c3bc8aa9357394&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
