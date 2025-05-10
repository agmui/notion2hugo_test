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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WX4YFBB5%2F20250510%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250510T200812Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAQaCXVzLXdlc3QtMiJGMEQCIA%2BMszqwqSXcC6PUrJFI6wE%2B2wWlF8oDq%2BUdPIG4cgPAAiAyNozxYasOmNJIBeEl8KAo2mhncT%2FgatiaieL4QIN2RCqIBAit%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMgWsyc8Z9EKtVBonFKtwDVNxecA4byQPp8IbJrE7B7gzP%2BOAAhCu5XDeULGTk0MgKv47eIh8R%2BMLZ9wxu918i0Llf%2B5PSbmwNTbjFblX1I3ENMNfBMwpEawmiF6SG9TK1cGKwmHqEO3JdEnWMJiVi7jHNiSRrVX4JRn%2F0D%2B1RtJY6a5TxA65JQnGnZYl8K0EsK9cLPAzkiso%2BaVsaEmtOpjGQcKFYm4pVzIuVWn9jvvAPKXFEgyOi%2BYztyJ7%2FfJ3MtnveGg0LTUV319mivXgNJh1v%2B7RgW4HbS5pmmrPpH%2F7rcqtYX%2FdRYXrnSTx0CfquPYcY2yUTXoSdjI1BAoBurtTHStPMapMPNkpNiVzsHJMnLhylYPKrMt%2FjnnZJG0DlWtGpphnG3ZL2gNO5h313ZfAvPoeDIsLt9CdpdsOqTrjv%2BRBQnuJGj4yQeRCLA3O2IieTIosatdvQBsULuM07eR2onirmT1v2XxX08Z%2BKXt5%2Ff5YIdr4q42IxvViGOfleefcY%2Bzshgg%2Bojh5CsuyA1jVRpTNgQ6T2JqrJ0xs5V%2BF%2B%2B5gcY5ckz%2Fh7UCICDhLObYvHjodMLG9mArMYzUQULzn5tzbiLFeVDtAoVc6MezX%2FnUSUsaOyrVruQyb%2BNlW1KLpeyWjmiRrUOo0w9NL%2BwAY6pgGHu1zlZyl3V6uZKywWOC7YPpMKGhArhcjD%2BNOI0EQKOGkdxk8wDPMCRp%2BulJhsrSoih%2FJVcvg3vKzanQJnVnLQnhq%2B9gyAq79x%2BPVaIG09aTpjTV9VhGYPl4K9vwYtg5Q3kIf3D8Nvj0YyoqHw7eFd8OAnMm%2BYPM53XB%2F%2BKi4PdS4BgPRSKMpp7sQ4V5ygWws%2Flb%2FTLsVYYVUFEo3x2Pi8XyQmw9nG&X-Amz-Signature=c7dd237d8640a7cfc726ec74e20c84867bddf32a484df1e6f4ddfe57830615b7&X-Amz-SignedHeaders=host&x-id=GetObject)

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
