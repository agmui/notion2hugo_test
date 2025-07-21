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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46635TT74JM%2F20250721%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250721T110838Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDBz%2Bv8MIuDWlUd8r7tKcQDpE02rA2UlJlzjTiWawRnxwIhANisf0MqS5ORgQVR%2B4LCMN4ApFA9%2FPGndDVVJG5bz7T0KogECNL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwYMN4kj5fYfWW24Rsq3AOQFpum8S1wyDSY4PsDcfRYT6sY%2BzdmtzhA%2FPDgCap1x8Lj54V6U4sy2UvaVV%2F3xJH%2Fh2PuRgKxQVem4zCxS5v2PpWZv6yCmpaRIUKu1F47IhUJ757kqQAmErtul2ryS32FRVzp3gncCx%2BJ1LE3UHFt1JF41zgOjBHFuyP6umAjk1Lfjji%2BGcwcAUy%2Fh7FYCBz9%2BfHbdokxFLnAp%2BUEiT57NUL7DcezKSRY7qahGICNk5PPkHsMq%2FPf3OTXOlmN7vhrEAjRSr9hea2HzxVN0Ip8FI4ugaZqB74Ze7kCZuBeJmUhdkvv4B6cUpjZwHCZH37%2FGjO7RwnEmE7Q2nI%2FBF2E3%2FmOzf%2Fcos191PUF0UFnXkcfNUxbUG%2FNcneqf5Xe8SlOQowNmkKoPA1TbBYh8lxN%2Fg%2FrHJMavj37UfVQWK3kjlORbEHt3dI1JMuIfvCNuEQYvAmDH%2BN0OOeE48xnYnMZ0FtOsM%2FRliVxngkFBNjc72EvwBLPYsOkpLmP5xMBkaNN4P%2BJ0bxAZQNNV1dusMCz7c%2FNezCNg281V%2BbMZ%2BRtAjpq%2BAfTh2vEquSoc52wQ4klYEnk8TqZn%2BYW7TviVgqdCFHKkCzekafgkw3zAsaDow8Wg%2BFqngPSh%2FMo1DDfjfjDBjqkARMjCvPoRoVTEiDQhyAbvqGDIqne8w3nUazJARt3RVj2ctX43%2FiGQLDLfKZxSyI1hIhh6%2Fb8bIPKHxJo706OOs7ODYpnu1noUeecGAgSauA%2B81N1OB6ihObokwA5dvQNZ2z%2F5uD09rjWwuyHJnYteiZbFnlqc2Bak4WqKN8fD9mzaGYTJ5nQ6reeo1J%2BDXpxTFvSzk9tpkPF%2FooxeUKda1ivvI0p&X-Amz-Signature=68d80a774bc52bd4e2b5ff78254257867b4b8beffba3a7ddff88092e55ff9411&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
