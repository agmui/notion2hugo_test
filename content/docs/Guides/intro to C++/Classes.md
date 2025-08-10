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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RJKUCU6S%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T081122Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDpxhjI68A7iy%2BKx1fIWau%2FJaKrcoyRJkE75qq%2FDsQZ6wIgQ0sC1YQPwMz%2FyGfoH7jHMjHJfi5qyQHztaeb7lLAxP0qiAQIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGdMQ4NMGIl4rhLXDyrcAzvIJ9vDPNvwITa4GSmS%2BHiC95pibRuRsVAwGxGNR0H5b6Q4TOL8jAMDmq8me6LePlA2fRf6VarH1C5G65Chdf4jwm5IRR57M%2Bkh1qkKMwOHD0DsebLDjjfs8ANDJHtx%2BNOZ0pRubWVKY3cIy4SoY4vOUmiOfiY7vcONSXBfUYLqcL34u6GLWp6z2xIiKAMBjpbkDgTgoiSFnA5PrhEXsbUHqhSiMsq9LxH778%2Fz84qoUblAv6ceMMQ4AnHo%2ByDaTmYBzT%2Brhu9ObtxJ2SsgLUMks8SmPAV3oW9wYd6qjRHK3Ti9TPPAcvImeV34MSGCzFlNWogGE%2BZ4Sy3Hc3vGInrzAeVy22qdWnq3tSqiXh3HTevEgujSd8vWIScePmriHpmQH0if%2F8RCM%2BG1SXnW9X5QhW5O7yFHclEShpywUPb4ADdrwZ4P6qIfzr6wWIC3qouPqUpTsb31F69bn4xdIOWO2F6UF652VO1nrLhW7b0l4YS%2BYM1E0DYvQ432u7PJrp0YeGQtAI9wUBfpy7pGej2Y5HTt7yNtd9nKe%2BZdZyzc41u50leSbB3m9CcFrjD4hPra14CONYhsIUr9%2FfTCNPfYsFvupMyv93etZOlMb31xjP3oZ%2B44lrbYZcIgML%2F14MQGOqUBt9L2hXpoDHL76uhU4UkXpvaIIYTkM9%2BiRjxMAYBy%2FJJqwgk5ChBB0LklSWNKoP1WDX%2BJ03IeO%2FIkKA6cwIEet6nNK5sd%2BrFPky891D9sVVvqvWMeBJvW6Csrn1qyuIPdrmmYeHkoriOvyobXDzYK580wmPaVf1Z4qTTs1H2kfg3r%2Fil%2FxGOW1yLseJGceFCdbXiynqW%2FvclImspMzsAjZWfFcyS0&X-Amz-Signature=ef4c594514386110470e2ccba01f3ef9d642f1e340e6413f99b85bbe5bf3bc1d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
