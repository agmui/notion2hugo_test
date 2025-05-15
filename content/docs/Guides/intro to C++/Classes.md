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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665HMGGVPV%2F20250515%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250515T190106Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJGMEQCIGhXLNSBl34Vj4Piy3RoaZW5D2MCZa1qyz0R8e0RU8G9AiBTZtjqXE597MgKXne1u14sx3YjUxct7jRxnnCXpIbF5yr%2FAwgzEAAaDDYzNzQyMzE4MzgwNSIM5yFjX6OUlgnTcdGDKtwD9bdotj6WIbNhdcTWE2fMma5zHZ%2F5I%2FCZsqatmGMlc0YcDMDXjEydtV9hBt8lv407e9xDnkm%2FYRyWlm8vPmrV1D1TR4ou7bAxOXvaGpmEl%2FZXZ6p9%2BmakzPwrIhTrwcRoi6Y%2BMojjz6pjtWMmnLsfpzwFujW0y0jyjxv7R%2FPT4zfp35Z9S1mc8IeIo98n4lC63HB5slc5Fo3iAbMepockXEmJAH8ZIyqwqXHQYmxZhMZXhA298iuQaHgSJ3RS2ePv%2BdVxviX0Py3V7H2%2FFFUTeRJkFmoh%2BW%2FlOOty7Dvk%2FerIM4f3%2FrE9Zin6rZnbF2x0CbKsdD%2FJSg5GIq5hGxhS5ghC3LSjIxrq%2Bh22Puc2qvrEkSBZKGhrI60JQ4jBjO1JBmazHNr1bWUYSqB4XE8LXOlv%2BpLvuEXej%2BVtOogfFurNoJ4ln7sFpb3G3jqo3BsmHfu3yyoJOhDjp8qvQMbsFyIgRyxHni3st%2Bz33fTt3G5EmivEvZvzbE4Mz1yPetL4%2FAoKedT3tRZuK6tr%2B9aripiYRY9yp3Ka9j1dLboow2G5noiWGNjgF79Qnfqy%2BTiB%2FQ%2BARBJqVHSHV%2BIByNrUl23FUGTLV18yX4jWs%2BbPDBev%2BjCH8sH7HRso2qQw2N%2BYwQY6pgEmuJgVpExnj%2Fevfa7hfQhl4oocLKvMxev09vPxo0K18JhOS3nMX3PBZvCEiXbP0F3FyLcIq10dyHH%2FPtbZCCp8onrQBES80HVgD8MZ3KkbkovRl7uQCSPI7JpMs5ZDo%2BjpSG5GaQtF9rjx%2BylWlxRJMwSAF7pQR4fUT%2Bs9JWwEZnzGnZ%2BqGxR%2FwTAWvUC0jFDy3fw5YitIec8oxEBtKGSWUxKKmxaU&X-Amz-Signature=064c66c5d4aa1273d9623426160e939b298596d1ba2d73e62814de1edb0ab092&X-Amz-SignedHeaders=host&x-id=GetObject)

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
