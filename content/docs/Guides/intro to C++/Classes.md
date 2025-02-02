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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662Z3INSIW%2F20250202%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250202T100459Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDcdJL7MxyTOUQriLvvA8FA%2BdMlBXs7ZjF3k0rKbVP1OgIgZ3XzfdocbkMF1UD6esByJvRGYSgHmHOiXLwHaDONAMAqiAQI5%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHIO1HciinbUZZWx4yrcAyOf5F4RFbQYQXH6bMLKaBco0gxCXtybOjSZALYd58NEEdUZZvK0RMyOe6O16PSY%2Bkry0Jg4jX8BTOTdUnmajBNnRvVSSkswj3nGG4oG2BvJR3npQaZp%2F%2B2q5MuAeDhMmW6ScPusmz%2Bl%2BLdEWryAVIEx6kn1Ss%2BuNzsaepbZPcrpJXWsCtqWn2tmwsWAsvIBnrWBlLFsprgxhaaBDZmo1lOWuEFHRGYLJv6QqEMZagjhMiPfI4dgClq7mnbAQ9%2Bx5Fl68hqka7%2B4dluLLhn73fy%2BAEPJ9v60sX3OWJpvwoX8tUuHxVv%2FY1WsNFxdVyDiCpv7yQi%2B5MDfaH%2FFaOygbhA6FCMb7cFLgFZlHwqnDkkd9BsaAsNu2EICtFTLRdrp%2FuhRT9uG%2BwZTQL8bAPqW%2F05AOcsKd%2BxPYE19LazT4800ZAD9fg76Vt9Jx9AVkaJxgV7t1SYhY%2BdTkewabTWX2UoAWk%2BrnKbxYwjMxngRj1Tfl1r%2BRjpJsqkP92JxZgEZ5kzXQarFeQ5wP03r5xIaUo2Cs%2Fvv3RWBxFP6jWptdDL18g7JZ5MuBxdo3RTNeWi3nzj%2FfXqepNAi%2FOQuobu8vAl6%2BniKcHPIMR4ge8ki9vtmPM2TSs5YcOGN6fmLMPyc%2FLwGOqUBkhPhSt%2FF62BuAyB%2FrYGvkaVzOsVI085z1KS0PB%2BdMMHEdhogWozv8nuCFvbTKN%2F9Z4UO3t4nZsptpOYuuSC1yrCcMd45PWo%2Bm4h7R4HnzF8Xf8P0uJAasxbMWpz57Bhpz1sIIdYgwYvZ8VEu85HGQHjj0MzkyKE23i8Z6V8TXpVWnKexl2SxDOftKtGudq3jcCRLDETd2MoZUZ6Gh497leKttSYj&X-Amz-Signature=e26c21f597ad8e0e67ac66fd24e056f36d8aa54975fe71c7e607286a5fb731c7&X-Amz-SignedHeaders=host&x-id=GetObject)

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
