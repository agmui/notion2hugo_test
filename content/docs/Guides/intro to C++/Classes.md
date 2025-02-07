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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R45S7TUR%2F20250207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250207T061105Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFYaCXVzLXdlc3QtMiJIMEYCIQDct4bz3w7Zc0FUXiAaczxUU55m9kToB%2FooDLZj6XMs3wIhANp3tGkZ05NJ0xmJeDWiRCiu6TYSFM33bGvft6H0KjBlKv8DCG8QABoMNjM3NDIzMTgzODA1IgyVA5we4%2F9phkWJcIgq3ANqyk8NVnGa%2B4rj8J4VQxzM8645FWO4Achm1vnPksmGwbcs7d1NWMSdWVBPVpa0UL5hwYqX5zyQbCe8IAyloG0vibYcLqmDv%2F5yjBnTh3NmDabezXHOSR31XAC2rtdhUsX8DvF1ryz2FFiYbQ8ezeGwFiXA5EOJxW6y2nN1Rk4EJW3FyuAZjaEO63tOPLt9DpHEfpkHWguULalOPVaY5PT%2BMCos2np%2F34zqv7OSiTUivkkoUPCUtV5tN7rvwAKMkbN4gmp4it4l4K%2BCGJRpFcxEO%2Fr6kHRQBc%2FPWsXN72niHw44kexjIy30xW9Oy5SQ4Zz81Bl20yC5ReY8%2BVhteqrUxdIv7w3tIvp7vCl38g5SVMd3NFU9XWS2rzZ5%2FV%2B4eW%2FyPauku%2Fa49OsJ3YON6vgcVxgu8xWKqzty2XJpYLFmQD5Y3EUTVWSMVUgwaOj4wj0UuhkmJyTZRAjEEa6tSStVQyfzsSOIA23gEOhWnnz26It%2FvZ5gb31OCXfjuL%2BGfwzRmzVpLMuOOTassp85CEKLZMdWwdQ0Gy40C39QJNMUbF5JBOo3jHg5x1nRryuzrlkWErjjTSDklwSw9wuCXEDNNKXMlW3s3ElFW3SEhdRGPNPZuJZnEH%2Br5E%2BtQDDOwZa9BjqkAZqdSWLZ%2FN29r3HKQGEVZL1U24gM0iKus4ZdYgmByUMokdDEtljGutrYfPWfHbbcM69WvQL3DxMC7Zaal40YfC4aWPNvua6p4%2BbTqKgpszS62PUjZ9RxPacnHMLwqeCEkAebeLscf21SDNj2cCXGtfpLzLjLXFg1mg30zpkNDUurS8YFHlskIch56Fj7WsVtdu8X1xwE7HSA0qhdmAhLyf0ItR5Q&X-Amz-Signature=44a2d78860f23f0e66b213fa16f449cd8d2f6147c85fd078034d2413774538d0&X-Amz-SignedHeaders=host&x-id=GetObject)

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
