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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663NWOOGSM%2F20250406%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250406T040946Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGv4CUNZEG7vvu4pZ3KTrGcJUVxeJT%2Fzw31ddR%2BYemfuAiEAqAepfISc8jXMKhrx%2F81ZgNlMptp7RGFkCxKBxBCuus4q%2FwMIPBAAGgw2Mzc0MjMxODM4MDUiDEgaR80RtfDC1sR1CircA27ZDNp2kTl3ECTcRDEUN4lWfb4qj0yVoJdVxa9Ykj07MPthLK9DVJZG0CMVMv%2FkPoypPJmZ%2FX8%2B0I7bFN9QZWHA6wdpN0E0Dlk1xU6OzXn5tz31BvkXHkRifGqJpdCqbB6WY%2FGMRJwHHZMCQ0WrvQRAy2fpTtZToe3qa2dGSjm%2Fle4%2FehzqgoZUpgm%2Bc5K6xT2gx4Wi8jtZ3V5yp6wzcDY76j4%2FT8XH8flJVdpPcGiRQRt7iyJNf18bUtVgM26L4iAB3SOg%2FL4ChePayFz6J6c61kiDYWIBIhDbZvJVL7oCZXBTp0EmaI5PzpQV7kuCtkBg3PWEjchdDlSVvoXcrJr9QkfvXjlLNE8VlLlXHwnrQjZOYKjcUr5L9JMeRSYJQCA5dxE95XQi7Ww9KqULE7kxIfyffDzQYLZaZqSgGkFCRWhCHJH0Skwj%2BsVo%2FSmSQ5upnfY5ljKglSj4ysoW9zDIT8wLhWtpDk12WFjQcXCXP2mmvVXdI05FvKOD8l0vEnyKxRFQmV0umF05mFYSNwdG8F0jvw1Mzj%2B7OQxAKm43ONL4NHNcN53wC7clOlaJg1JJcTeWxG2b8WSW4VBgOsVrHUHs8kTHfWSugFahvHRW0%2F%2B%2FitDUjEGxILf9MMPfx78GOqUB2eN48cSEfjeE60AgSjpE6NYIKpqBpoxLosKx5LNS71Wwb72Fby7yX5HmV4JETNbE1iDdvIOogOZb0Eqg8cAOrWHQEbXXlZn5nWByLU%2B2AEFIzwwro2l1nup9fxX43hEFTgdycTwfdkeDpTCva9iqbnZjBa66jBVGcLNdWiovBo4YL2XCqTj1ygdI27nzLOZP5bcK20Rxopab2QC4lzfwlAGi7AkD&X-Amz-Signature=39f50b0bb3c5168871eba24d5f792a49e47ca331087a11d037038c4b35e59090&X-Amz-SignedHeaders=host&x-id=GetObject)

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
