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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WIDNWMHA%2F20250312%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250312T081055Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHAaCXVzLXdlc3QtMiJGMEQCIBGYHnNqXPipJX2w8evc3or98bgXcOP%2BAVpKKNioBKQsAiA%2FuzIdh9n4X1t8uxQscNeXk1ObUhdGlCNoZgbIcKQCgSqIBAi5%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMHfHt6Gz2cH0Rv%2BsHKtwDtb2KGyEyvjmEQ0nuCUsbIZIiPv50pIBa9bhOWQ9LK7EIh6o6K19iWEe6u%2FxfcjP3zyQyx6hjCiYZRV4NjoHd7Wq2CdVW9aZ78Z0W73TxUf8yNMhDD5iVP%2F5NHSBx6BIRE3PtJXbV575j4b%2F%2Bi9ymCtU7Wh3duiUe5MtUmRQAeUR2z3JKwxCVuAMMQ8IbboIIZa1pOtoAvB%2BGkIlhoZTNAucBG414YCpJZ%2FvFe4uLbKgTKWGLzVKglJaUfgotC0gveEmjsrPaLiAJqNYC4vnl2EmN8t5sFmtWbiMWoYz1cSWVoM4hYesyJ8r2EXOYPJItJmksRnWYbYBjT5ifQ7gjVogKZ9ha4kBtlp5t6NyXv4EIw3vOOjM9lOoPL6w6cpJ2jfVk11QbgKAr3VckkFQG9iKYEFWDBrohHZXLL3%2BwfKfqXNnTM6QzvQ%2B61FYL1%2F%2FjQfs%2BVPW%2FYrgcTdP%2FBJ80%2B%2BZRNR2KOj2IUMnllTymYy5ENRdfybovKrQWKO8wRPWorkipo9Pa2wEWcSRBdnap88W%2BlJ91T0N8dyqqAbglQYpvZScsAd5lWsAisXYGAhOljMipjaKVQHd%2BhP4MiFbJQOZzTz3EAoJiVjVEbjjz064k9KAjCyRlasnDZ0cwoP3EvgY6pgHd9Njjv0P3FBb%2Bb7MjAfLYK0RCml2vvWnFweA2BJMAcBN1MkKqogJIKfVgHO%2FrqRz2Ic9I1jERSCecct0LxS%2FHVyv8%2FmDSO3rOHKeuhZ2VYPpXZrjY10%2FvYMtBaFDIFSqrcYEqQtIGWsAinE1LqvWG%2FYKp70Bc9vDBmtw5Rx0VBoa8V69xyUcwvCwofLfgZEA0%2Fl1ouW%2FfySnJhkj6iL9Pm2G%2B2Dca&X-Amz-Signature=8ce42da615531b0bf54ebfcd480d6af75d6a49697a29d1d55b5a58ddb4d9d40f&X-Amz-SignedHeaders=host&x-id=GetObject)

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
