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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RGU3YAZB%2F20250531%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250531T230803Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC3JrefaG5hxX40QrJW%2BKviOET51OmKEavJcIdcWgQEXgIgK7UlAip2TnbbGHoDhs8qpoauXOXfafdtX4TVnbOaWRUqiAQIw%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKsy6zEsulYwh5GouircA1dFph88Q29BPY3nsQhA54XWWk5P039d7ELFzIEqI1qgY%2BUUi80CHwpOHS8nAm4eFxuv%2FK1v1ow4sBHfGh4Ijp85F6TmiRHdBoEsWyB0duE23zWu7VE5cVDyYbEvyEIIWx5DlbupYH7nfQ3EkhoMk6z%2B9sjjhFg5acl1VIQUthU9y5SbFASNFRgvisvuNpkCrxp6DBUoPJaIcxr9%2FqyNYa0r3%2BJhc%2B6qnEZ7lOH6UXuJxomsp1muMEIxv8AJCsStW%2BACiFfIZO0Ujajv5vpic3tpgQYHF1pgkm07H4ZAttkH0bNEwrEOQZ3fjeOV949%2FYYXffe2sA1fp1jQFxO6zM43qYB9RTpNcjBjVQ6nILQx9%2BeUVNDD%2F91wGCdRJXQTnUvzBHF5tBPiCv4GLSg2G807Gua1R7g8Y1wAgukLrBTLCoh33JD6hHwYbE%2Fe8HffGN4Y8e3OXstNeL22JxaB97%2BmVlbFf06LANhe%2FAr8YpH%2BL03JI7BhvXFI0ivKEakhWy%2BALE97X%2Fn8qV%2B0ak5V3FSMohQkizgzeQ45F0Hg8ZgkZAqignzUoFJUfrpKJhew%2BESi1ZM8%2B32ih5ZyEUWQJmOk%2F5YXZhvlspByRLes2YahYN8JTzcs0tQxER1OqMKf77MEGOqUBJ4ir1szR%2FPryn3RT6ZPCgF18j5TxDRVPhpkH7KlFdVO1sdJ08NGKvYlpm734%2Fw9A6SYEoineOdaNiyDJdRC9Ej3emso5Yoc89BflSj1gfUdjzwWEK4RqdCNxif%2BxgBleX9BE9P360HRK6CfNAbjxTcQeNufz7ZgfZ%2FIO90iljoFGlNDkWV0O%2B9YTGPJI3vW6oHtTl9W21bf92ntQ52%2FgCuv4NcBI&X-Amz-Signature=6a3cca750323d550287238b12532b8e5cac5dda4a1a7a00547e1dd53476ea4b3&X-Amz-SignedHeaders=host&x-id=GetObject)

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
