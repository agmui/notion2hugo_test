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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RLNFBGSD%2F20250420%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250420T170202Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECAaCXVzLXdlc3QtMiJHMEUCIQC5Ms8QhLB5USSmQq7pcqAkict%2F0J3IjG%2BYYtmPiMDLVAIgesGHIx%2FxTfVXjikAI%2BlRozBGQRAUiU5IPJp2%2B3uI%2BTgqiAQIqf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMhwAx58uRXhQ3iqRSrcA8%2B6VCD4iC0zmintKVJHpcpq23%2Fn4LPJhZAU9jwtrbf1ZCMwZYMIUbdXC%2BV6tfu8QPq2lMB6b2wfqYflxPRJpbikGW5vSkutZ%2Bt8u%2FUUHnK%2BnC39hPiwKdMRrckIC%2FVsPYT%2BpsFM0BHv%2Bgie4VqWvUf7uWShDJvTYjeqtYEOgjWCCxny751Tdr477amePcBQME1jkJS5BdAVukRQmWv356ihvw3utulG0xslxLQ%2B1EZGY%2BJUGeukq5ytAgvAqvJqeKja6vUQ1gLesh09X6HX0uuWAh2mjaVaWV5GEN0Sh5yAZ2jLy1opPeBSGiEBxy4UTdryJxQfSbwkGfmxB31%2FrmNPvmYnR0e%2Bjek1e%2FZMRzLLgc9ZeWTBdWVoJod%2F87N%2FH3G0qhna%2FKl3Krl8LzpyKVaF%2FBDiTNolmBnYrEAXULlmVRfV3uVxU%2BnsDR0AOMiL1phn3ObtLg4JixVWZbQofWQQCksG5k7kr5PiJyosy1ePwTXabIlQ1ES7y%2FZEeB%2B8i%2FVD6VcooFNWzvlQqeEW7lbLUAIDhoKLdGzpWWoSSG3%2Bjf0W87YVSnShZ3ZFHA0y6J6u0spbjic1ahbZAEx95bJPJ9MCl18GZW7IwG2A3Ol2ntTUcF7WAC6S9N8JMM%2B3lMAGOqUBEiCunFhAcjCevlVxvkzNb4daQAgT2XBX3IR%2BsJ5UCH1A1ZxcS1tEszgLjk7WIpPLUlBc67e%2B9np2Fw1bdm%2BqWGG3Au3hsvj5JG3jzyBPHNGzBLJOi7oUIsjuYHXBuTRVJcCk%2BuMBhG0TXTj3kBtMo%2BHbC4w3O%2BmtsUZ3U2S5F1h37xiu8RyCCUR1TykX6EWF47F9oZQS7Vn%2FIjlYYHVemTPL%2FPiT&X-Amz-Signature=c43cf3c99cbac56a25cdcbb9cbcb13e2a7a62ca9f9bb4a13f1a9ff7f476d5b58&X-Amz-SignedHeaders=host&x-id=GetObject)

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
