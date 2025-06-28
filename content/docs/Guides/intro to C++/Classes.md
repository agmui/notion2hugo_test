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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X4QOC764%2F20250628%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250628T033753Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCe0yyaQAPtLIsbnz8Acylt84Bua7lUomhJnbHSFRJpgAIgGiluARW%2Bnc71sN6yxJnVv%2B96IeF2jQbG1avX%2BEILujAqiAQIhP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAFRd8nqJ7LY8j52%2FircAyEBKuqVxUeOXIXhmxZP5XGQtodReG3Lc6mXdC74nMnth%2B3cLH3bYaG3xcfCw4gWP5Vnl3Z63tPwZEfb%2BNtX8hZuzpU6w5AU4TOgZOUu6DP%2B4%2FYMvoLu7%2FCM5%2BazhQNrhpeiXX8UBA91szl1BN7Kz1Pguaj6Njt6ZIUKH7o3qLtmaIif1x1h0B%2B2q%2BEuaq3YpG8ANgL9qRI8GYRp2bf39Ag3XEeyIjy%2BHb%2BHmU1wHO77E7wic9t%2B9xm52Keg4gNtfsYcQrsDaKRYFf%2BOqGN65U8rAb20DiE1%2FJfQLG1ZJXjyY4csIJ6R5%2F3ew%2FPk2aatzGAa%2F%2BNrdXNvt4FO9PnFOo0%2BOru68QcBgR7Os1yfGwIU824USotAT8trIXgIuWAFTcHqO0lumYYKoYFFrRLcNQPZeZB2M8ypGZ%2BBqfviOI5HPBi8SPGnHd6KN86JloMv%2B5cn4PN9Z7u3FLWsffnWz22wxSGNXdc3fJIG3gA4NkY0nLMY%2BwOBIL790dvSQ9GGskqYslZTvTI4nG5%2FhB9jw9nF%2FHMErqfaD0HdPl2QpywXTdCHnzQB74ewpzGNzX%2BrdthycqL%2FeR6sR4wv%2BaKx%2FOwdn%2BElvsgbhPIBxxAJZpTodwBzR%2Fn%2FKs4v6EMGMJWp%2FcIGOqUBgNGGp0Nz1iQkMoMXQn54XOXjE4h9Pyabf0lKiusrYP18CC2GNaRsjfu7daFCFyZpKcUz6yrqP%2F8uBF5XFbRPAKBruQP6v%2BGibZ0XkSeVErnTb71jIPxog5i2Ir32xsv%2FoVWUc0a2hxS%2F%2FZh6Rb51pi0Toyna8qG%2BtDPo86w2SO4O1iwdhRMicvgvnQqAPgd3%2Bew%2F4bxtqaPeZqqhVj1JPK%2BMqEAj&X-Amz-Signature=607ef091ab062cc02e64d8ea17865790cdf2ec3d8b6c0621eeaa3730a5e148bb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
