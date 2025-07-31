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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VJM6J5L4%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T101019Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCbDwQz4Z%2BNCft7qtE7nIx6I8XaKfbHjQ2s8myDUktKrAIgBB3JKsuJCy2u3gC1MKoXCpSrkORdIzWyJGqNcDiyXrwqiAQI0P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDG%2BOSiiSGSgchFHtIircA460WWsjb3%2B51szOz%2FKswnIwx9Zbel0cUBRrS5OyDwTdOV8H%2Fe6XOWaBXz8N%2BzpjzsmmpTbY6FYm35OXpW74cBRio7%2Bqo9libornf0RmF065fOmGfY5TFZBdxj%2B%2Fut%2FsemY5reLWQoD1oZVs10asN6Vd3d%2FbWrZJOlhyBL3PmNnCqzg%2F2VwdtwOYa6TY40%2BQh%2FE0WV9usitLmQYvsHsNMFNNjVtysKlNRI9ezWv5LVjboW91UqUPZ2vUpEHmC6dwBfr%2BD3JgrDufiy4bHskdaxo43xlVB9YiI5XTtmRFRiCQ7tmny0zkB2QZwkwKgx3XdqWVa0eM4Rlc11gsxxg4aOiX%2FM%2F0ZULpRRQOjjhEo7X9g8FzTPZyE03GpfjmLLn3Tb9hL3vctElaaDLLlfir3wgnwAaTliHQ1YAkvl%2F3fDSUQa9dZ8oJ%2BGhPQovTJutrm5QR3NFFpZh0vu7RlLzTPI7VuUC%2BgD9TJ%2FRSg3zxZcHSgUhXheC5%2B12yuvS92mdKUOY8lbqAE1uwo1VPH%2FfgaQKkyWSLuvPvNDqt4M0XRHmBrewH%2FeTGCtxzhgjqmJFFidG77uYGaLpJkuCIPwryyJhgnE3136LDmn9yX0ODb8iFrVlvrNpdPz8CE0wSMJearMQGOqUBIdJov2tCCgMuqzl2pz%2BFRVQ0SKeDKaEwjq6JAc1hT28oP%2B6x85zERaw0CDKkGTwazt%2F0h86g3bb9onS1AyzLh1qFUF6I2O1nqA%2FF9suhjdt01K%2BnlZjp2kKIhhGmu%2Fqon6in2AEUtiLisgGP4%2Ba6byfO6Ooc%2FkbuCxHz86662TyhqfmrEpu8WyjEFBFEj0ET7%2FWinU98AsIwD6SubQv8Q1F%2Bv6c%2F&X-Amz-Signature=6f290d03f59b3bf20740ba5405ada6758619eab33bfbb191beacbfeb1f17b56e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
