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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RTP4TXSC%2F20250509%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250509T170732Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCrqbJOJq6qsCuyUHMXyPvxB0evZ64JH%2Fpbk6zBffcbcgIgfPuEal%2FLJ3ifhavQXn202zZOOl0m6mn1J8My9OCSlrMqiAQIkf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLjEQg%2BiqJsnn0Y66SrcA74lCc9N7CElzrDUWZ7RDp0SdyTCECnV2eIpjFduwmZL4v3Liu4zNhoRm2XLiKJNlrkBhmc5rQTw6RCiWTzS6taCbgboG%2F3b8O6L%2F%2BTVA20iP4rxRuFBQ0M8j7DdCMrcnUAFeGwdqrp6t0HbmEdF1f90cdxMEbxhb6x7qeN%2BS88RCeUiYmvG1mKlz27ZStTAHti82GSnKEq%2FhEQx6nX6GOsVnM5%2FLBwTEBOi4vaNROwGwdsIrScimYwOm2zPWterAl819ZTzyMhOPOYK9bCY5BjVdrQczAkYHZyH%2FfeQmqjDaWO2h9c5SZ5BipfhKdTDuv2W7gy2%2Fj%2Far3afchJo%2FO13QvlYe9f0iOKEN0uMCHVzFpX5WOqh0FiA1nNBbAv0aKZ%2FunU9n8vK7MjQUP%2BDrfJFQvNDiUsyKEVOyfpYtuJSi6uYkD3AK2vQPbwwLJ8uh367f6pPhNsXd%2BsYHhSwZVIu8LSJwWZSyNURs7NViBTsZCWE%2F%2By2wCt%2BIY5MuZhYorKpsZt33PoOvNQ6z7S83yCjxb1r6SjDC70PkSOpsDGIwAqvYsqVTmwWKaVBsFZXYpFKaDgUm0O2%2FYjTgFPOyrMxttaC%2BFfEhyVxdwwqzjzoXV9nw3FSr8ARajU1MOrW%2BMAGOqUB3C5cnMA53soNBOa4V7V6Ikek%2BVJpcFKT5K2Sa1xdu%2Bt9HedWcFBODUsgj15XUqGHbjdRuRpj9Y9lnw5IQ4xWR%2BU2L25rJGzWVDg4Ar%2BKFTUNaZvA63BQfEam5i2NCBt0cW%2BMQONdf%2FiEaH9uTiVSNPce7O5DxF4r2d0Oimi3qG4pQZ2I5vgYJKHIAKbDLHWvpy590L4BYKJOWU0VFRPh9U6dbHDZ&X-Amz-Signature=a508781ad0c657011586b35dccaf7a9c9d9ae79ab4309a3db6444c1907c09576&X-Amz-SignedHeaders=host&x-id=GetObject)

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
