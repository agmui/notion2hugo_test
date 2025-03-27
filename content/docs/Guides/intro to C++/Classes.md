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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666SXGWUVX%2F20250327%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250327T150847Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCID%2BBF1w3%2B5P9%2FU2%2Bm8OODzF7D0q0RoQaTZciCytGQLgvAiEA81TUjG2iGYHlFuPUsMEAVCoeEsxIJtEbUWxQXuLH9ikq%2FwMISBAAGgw2Mzc0MjMxODM4MDUiDNIoasA9MHGvsJIJpSrcA6lbmenL9VbTgFja%2FmUtR901tGh5XvrbeD9KSHG0ZU8hbl77IrZ42DSI3GMfwEiCBkfV908lJznvAy8dNmF5rKBtCwczOSYdJRSBQrG58x3c3dCOT6Qdhcw84Wm786rv1lqoMw4QbfMWKJYW9Ds57ghe0ZLnz1bSAd2d2NxNeLRx90YIasPkArHl0z4m9AvnDRqN7oUQZG4YY4gFmCyKUC2i%2BA%2BUxcNDt4hIbozGGkDGntu7kBBkbBmGZpGmlfl%2BIwFtonu4H5%2FZ%2BbMhy%2FdTz0jQqihZGANio7USqH4jRTDJSdBjvUHb%2BrMB5rRHmgNiIzDYkIaE%2Fm7AJQjT1FPEcO5fAM%2BgF6%2FS1oRBFZqVJvjFmi5zr%2FRH1TP%2BpoaQ7RcIAFHVFeK8BtcbXa8NcENx%2BvUB4Lj1oBt7lsBTAp5rGCQDt2NuK3yZB2cxydksbO6trNHfLZenmWwyIrfy7MZW6tLPTtjd%2BPD9GY5hRCmurkWWbOyAot%2B0DHIJmacuXhdb%2FL8Q3vvr6u8Jtnq2RxdH%2FLw4ay%2Bwgqsl1JlHzxbFmvEKOUbpqgmtUCkOAktOaHDSrVUA97yWcJK8HWCt%2FT91m6ohi0S6Q6cf036k0XQU8nxDBrHRhODQMb5vQrykMPHMlb8GOqUBDxc1H7C2h%2FGwHPXtAn8XuL9NawU8DlSnTEMfbnzgGUFAxW8KHi4krO4VV5CD3EJpKnvUA4sCvVEYl8YKhfUwcO%2B9Q69TGDZbglHaaZuQfG5cmPzvlQiaBF6PifV5d68yzQkTBiEmdsIMn%2Bxhvqo8XzgP2f8gWX%2FCud%2FMcF9F774HS7REyGrcDlnJ%2FYsmOFvuXHqxctKpPi17Ek2%2FS3sGgfovS8E9&X-Amz-Signature=95cb94d3890ff9220478e166ed8fabfd28843a35d02085e3e949713a87d4ce66&X-Amz-SignedHeaders=host&x-id=GetObject)

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
