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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46663ZDMOLA%2F20250422%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250422T170811Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJGMEQCIGFHSWoLgDS84CtxP%2BVSLdhijGj9qLrrccmrY1vvPJ1PAiAGcMwrhr3bKWJtKhNACCafbLO2xj94xU7EEz9jAsRJtyqIBAjY%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMpqF0KKE%2F%2BJwtugEvKtwDn6XqwTO0t1zDj6Lpu%2FJHZgztJR7q1gorN%2Bc9lntMIcKKWZo0UsxHelRLjkd05d%2Fm5DLK%2F37ybapQ8Ug1%2BbtpY11C2Bv3sBXYmFmxE3sFnDVexR6%2BiadanO2znmMixvZg2n8rtSvNbxcfLVc2MQUs9YyzYhGFBTgeIHGyz0NRqJNK7yZ68QAiX4LGXnDRPMTPZyVQa%2F0Yvms1xyVPRPs%2Fh2RjZP9Wm3YeE5YFsBSfvh2%2BAC1bITieeUdtNui%2BMUtsvwfUClAGH37OF0AX%2BC4rfT%2BwD%2Fq2Qcb%2B6SvbIwY181a8a5N5MCm6A8d8IM5zS4j3pug3l%2BZw5m2iBzZnKhV67ve4cAGhAH7jwZiV15gxFKXrrOwU%2BSOtMCQRzo4ijNYcnqJQ0bUKrwVH%2F90y6PW1VuW6kKqRUKkhhgaVJSxn5jrn5swezss70evgpoMOkduXzu1v6N4YFlGoZ72bDo4Te99w51hiJvw%2B%2FV%2B4pgkQCU3z7YC9NjRdrcgqNDYxzKGz8i50uXvZmFSau2W%2F1ZcDL%2BiWuqcPYgfwQTS4I1z%2B1V67LckwCCzkJos3Sqt0eW%2Br5Tujq6ED5My1xKNlzPlxVp5Q3Q2gXDSOiaauT%2B57365uFe8AegYBmDtS3y4w8%2BCewAY6pgEus4NlEjV8kO8zOj0liq2O73M590VTfYs93z09mdinbdXpNnErnpz%2BtM9zuUyH0b6ILGosu1mKPGY9GaOGBw6UWYtcIFnxZk8SwJfvwxjDmjG79LP8GQAuj3jvYHENHBa7T7F9r8Llzodyh4FQC9x3f8zaVql%2F82xE6JaqJaPM%2FMeRfbVHSNiDZD7T1bk8wCXEt4CDAZPL%2FZPGqnLOCTMjE5J4Blz2&X-Amz-Signature=d413be552a19077a23c14673ea017858b4d15877695599fc5a13c738665891be&X-Amz-SignedHeaders=host&x-id=GetObject)

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
