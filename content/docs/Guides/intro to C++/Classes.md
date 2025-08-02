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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WGGGCCS4%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T190701Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCa2YVngm9jcP6VsCyY1KzLKulQonJekR6%2Fe%2FpgBxcHUQIhAPHc7iklOoV8Re4J0gRyVvSBK4g7rPgMNYn7TGEmsgdfKv8DCBsQABoMNjM3NDIzMTgzODA1IgxQgY709YUxbP7krUMq3APwgQGdA5pMfBl9LKeSwXIgxulvsOKIbVBD5VtUcpAnLRpZ9pYSrsJRlaXzlfo9WIm4LySdIhSQyKhkDFCPDozKX8Mhf%2FNxBKrnvfwxnMTbfJ%2BvHd6%2BJfsAtzqexPhkHW%2BugSByZC16iaBd1ruuj%2B6KahQtszIHs%2BP5nCL7OBnFFPKXX%2Bazi5Yvn%2Bl70%2Bs3oLLUv35rhBy4LzWMq7SxwnCYnrFn636jBcQyb59LSRCQnblsnv4Bh99gd8tmoj3Eutfe8TbSq6ZuY91egUiMGgWKEYOpQTg5%2B5BV7R4gm63NoXhDOUUmFa1T9TWt6SRziiroJEDybHWfdqX52D4mZ4wLizBLNDogQcKq3WZJuZTYZNn1y%2BaBBo6RrkovcLA5x0ClKGCxwWRfG4T%2Femp3gAq4Ps0hxVDyEeN5j1m7uXKaDG9Dupt%2BXLHQ9tZx9vte2%2FRTLdwgAuC%2Bh%2BYvlrE1Oc4PWDHwJfM53v7KmmqbehafZ4tlHTusXLMUZ9MnpzBJ4vvKWni5HWhM%2F%2Fhd8Z3d9NyhWh%2FFEWjJQYQy9Xb9whVE2Y36B6xUip4bUqCrY878w1v4TsrpnT1YkGPWPqauUGlUm3H1pWZ6IY9VsTEEYUvwYWdswrSJLy8yCKb9zTDAnrnEBjqkAR6YNz9USOi0umRc3T%2BNocjAiDYZk8nOYsLvIAOdR7VpsBDxlpmEZIsaMaVgvrg8BJs2NauxCBfS9in4cQc7VZD6eDsYjSb5ldGERyg0J79f8tKJew6TAv1QArajNFzHhgOWebyKGtdA8P8NEdxqStUmsGuGrKZMIkYtGrdk%2Bev5dGrQtDVJe4vJYp9QTn0z3A4vTpKocaxDFcVnObd3VJS2jAsB&X-Amz-Signature=3ac00abdee9258309da637da1c45a0cc504dd664fe32663717c5ee70ad390feb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
