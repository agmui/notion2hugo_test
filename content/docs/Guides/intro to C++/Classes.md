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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667TQWAWX2%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T181154Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGRTYpUAHCyuw3yPrVR9mW4jwCOwkOxhpK2z2QEuToxMAiEA1cRB0Oi%2F5HBi75Or38ltJQpE8yCZq8hnKGUFjogv7EYq%2FwMIGxAAGgw2Mzc0MjMxODM4MDUiDGIOOnfk3GfBbaTFZyrcA82Id1IEIRdLiVbvWsXEAPncDAYT1gnXisAkXMb%2BYv6NSBk6%2F5sLjP2WTk%2FsqEXSz%2BRuv9C2z3VsNiQLN9P4o4nw6Zpg6fTp5qvU37xnLWKlV6cbT74CFsJ5vJzgZjWVhhi%2Bjaxrm%2FHSfytttWdJz%2BwrqbF9qBQzuFkbKbIiUI5y0rKUB80W%2F8GEQbb9lm2bbqMYcHD3FlELudhy%2FLp1OUgcRaQsK4ExcjsXE2ZtAjEV8XT0UD4AF9HN6zV4J6BUo4BiHLaDa5nZZpL3rnwytPz%2BQXy7TGsM8uNO2j0fN2ydoW6GKe8O8gOr2MtQG0I2QlehrXs8ovMjs2BS8CFyqgkM2NHwEb2watEpn0I6XUszGUfrWCLSC8zVa%2BX3iUF2Nva6cuyoxtTkVdTOTbo4eGChkgOh1IZd1YOJr9YlKbiYlwsCXJgLWretycu48GPNGr1zMWOXl3bc0BE4oL%2F1YW5eSOjHGYd0rH3L4hu4amGRDe3DQ4zE0b4nwU%2FvAgMJkKdEzesN%2F2j4HjdRAlK6KevaQZiQhReSy2WIpVUInte8Q3gadigIzCl9KUvwDGOeZ%2Bg9ON63B28G%2F1s%2BnPQlTh2hSxn%2BPGk1DAjQijD93JilRGzoVExdzaiggkdNMOyducQGOqUBEKxo13PV1SCSaKGDGv%2B91yQApss5MFLgDIZcLYnl7J4rny81ei25p9W1zl17UCjMEusxdRpYpqkierQcoFEpkWSGkLbKmIiRJOFrvjakHpQcC9%2FNS7OOaDsbSsF9bq13b%2Bj8iF4UoB%2BOYVuFF8BvV6tK1Tg8wsZo2bj5W8ANsDgayOc80xx6xHr8xBO06R6Vj8lYI%2BbruQl5ST89n7WHLmRVjyA8&X-Amz-Signature=ef4ec48dfbd05cf3272e4a6940b2ce98e0f61bd7dcf5adf0e6f8a9d32ed48e53&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
