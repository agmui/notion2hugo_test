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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U7XLCD2I%2F20250705%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250705T170726Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED4aCXVzLXdlc3QtMiJHMEUCIQC0UzCVYJcgqUujBRKs%2BFb%2BGS0V%2BNg3nD%2Bx8oX85vmFfAIgdC%2Fii5K6dWsDB3jH6JRTLBuiV68Uon64H2%2FOWs0Z07Qq%2FwMIRxAAGgw2Mzc0MjMxODM4MDUiDNjLBKd4%2BQ1N1hk%2BWircA%2Fiwa9OvfaABFsASfDae%2Fmuaq54bJ5iqnj3aoHX1k3h70EsR%2FClruFHXoNyD62vD4i2VfmYgzSvKRI1yQPa380kBW5EU1a%2FlRvUE%2BEmrgQWQkcLff6M22M24pxqbZUcNMsqDcBOCP7rMy8l9zMw8ENtyLaVArJuw8QCNekLpvYDG8jWcfREWr0QCZiOxdXXD4aN0X45Lmo%2BTk8wJEWsomm46wQUjtJiMGJrh4WxBsilCpfGUjFr2UoJSyBuvZSji4BZJJDwME7nDYbTAh6K5N4QelzW2f9JfPguWnumhM1Qj2W5Mzzk9I4FsosQemWogw4Rwq1Jnj5dlOi%2BjXE%2FPhIeKOXLvrOMTpc2dNEF1Vswqo33t69WsjLtyEKVxpp073h%2BByYLl4C5VbKvg0zoUvOJKDJtD%2F%2BewYLjGw%2BOZDWhLlYd3YAbr6HAIf7s3a9TeQuujHKHiEOoVKhKmkMWwuY9%2B5OBUL6A4yZGk%2BnTiD6TI%2BuSpEkfG6F67jpKaZckYPJyD%2FJdMIC8Y0Ju%2FIIHIYePmzkfKsYbz59spip4il3Qq7cRkuPcxticlqk3jHIxYHBbRQZCWYhOKI9bTkc%2F%2BfE8Klc8QZzh24qGEbTi%2FxsgNm%2FjP0J71Dxv77NyQMI3SpMMGOqUBSHrAxmOcGtv%2BZAaJzGEJiwmMRDcKWav%2FH4bQeaKAj0mH%2BVQnqFjUDypy0W%2FvBBPYCertS6dgfJ4G2Z0c2BCzWn%2BoUeEiz6BbH3CAxKH9cia7%2FCXHvH9bEDKM15LOXUDcw%2BVBa0xxhdXP7bl5A6AvvyME0QyfrGRbx997QzbbJqgp9SaJioEbCxZRZXQrmPVF0x%2FXxMQl800zl%2B9y4S9XFno0wR6E&X-Amz-Signature=35b0772222f319d0a8c1b4ae8d6b7c104be5ec059cbd65f820cf4efc92c92e9e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
