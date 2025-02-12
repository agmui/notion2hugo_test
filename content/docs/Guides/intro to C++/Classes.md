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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46654SZEOUW%2F20250212%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250212T190120Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDV7vr2%2F2qHL22vCLFawCXHctr7Euo4S2rWsJDI6GnQVAIhAKIe0xQRDbNCEIWE1U3%2BM%2Flpl5%2F1f4%2B%2B0qNwUVM4RifwKogECPP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxcQa%2B69lY6Cdt9AYAq3AOp6XadBR4PsyQZrVtdPw2Ld8nwF6uPyZlS0aGHXCmjSEn0VBzUkZeuHEuWXqxk28%2Bdw70Wi%2BQqOHpTg%2BO3gqPJH2Iq3oSpPLM6rj2bMxTD1V1lTFQXqzl7pcVUA9p%2F0qo4qBhZMl4f2WEbH8biQadRc41P232ioRjSSpx16J5d5EYg1P6rsCDfNXon3dFYAifw1vALW9YdjvC4fsD5bUXqMi%2BywckfGRZQ56d7T0hIYlof8xHTSPNDkq2KCs3K1paw1Z0gCqGyZOlGUAPcqJ%2BhGtLGafXLoGuNOcDgwLuqQJAPhhSQF21xjL5XpQZKgH4SwKvD58awUlkyUxj4Tn4eV%2FhhaE7rSlh0zU73jwQdZ82pTkugY2T78C1h6j1iuynmgZtT6vbof%2FoFMOesoPK%2FjMkoLjOqqie%2Fsz4aEn4MqrAp9Ueh4dr%2BxTAmZOvAniyZ2kBqwjVqs2pfv0XURpL8IS5qt%2F3e67TFxA%2FP%2Bua%2F1eAphFb0JYNU9AY5vTzI6rLkkJoJ85yVaZxWZlT3oxsoAiGgEhTsEfLr1738uieGyYL9IZ%2Fe8mPRCgNSEiH9W0QtayEriFf209JfrIj%2FC%2BMMfhSEI9cICbMZDrshOeGDwC09Kwbsc5A9QuKnLjD%2Bw7O9BjqkAa7bOoBT2HcYulpRFAmYTSJ4s74bo5It1ynR8qmaisluX8VrJDX2gK4jZzdlTPBSLs57DMGJAKSKBVWS22kr7aFOVBzX15AfMqUzu2IWafiFDAYDypGeAIu4X2PPFcPFGPOaJirJuT9nqY%2Bl5JAukcj7V4xQkRIQMqP8KAXV4C%2BeBvguV5xuNAhrz8YqlYseF9l6p%2BQmYA0ShjQxSp9ZqqB%2FoYzI&X-Amz-Signature=8b0fa676adef495a012c03016cc3f68883b80290861e220141757dad954099c2&X-Amz-SignedHeaders=host&x-id=GetObject)

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
