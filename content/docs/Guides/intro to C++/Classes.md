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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YAUE7FDS%2F20250301%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250301T170228Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJIMEYCIQDFRSMnfGcZctkzSgUotvUORSBoCDolChIJ7tI3f9C%2F4QIhANWema98V%2BiZBTQWeg4UjujhuBIkTkTb1SaVsDCNFgjwKogECKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyA76EvLrC09VT7XfYq3AM0WEjLR5Vu1idyYNb6N3PAHIIgMlKUf4Y7oIBom7paW7HSxAInSgp1sPFeU7OAIFMjbGzfBc3gymd0VUbsrBcBnrXJno01cSgbPZlNH6vL848D1DCUwJDJ9lkqpr1u98TZW8jBx4ZiuDL3aBbiJV%2FOnR1DEu860whd7xverDXnZGJDuvP1NvlvU2%2FBZnQCpai8j%2BAL3vlmFroowIwCl8nA9OIdW%2FQC9QRA672CYhxPYltl3UDxsar2R%2Fyg6FsBnRLTNbWX2%2FKdLD9hySFdVzxx2HPxRxUKtbCT6iM6OR%2BeHIlmvba5F%2FGbCP5dpwYdnBKIsDw36mhV%2Fh9JWt7tFkXC2vvRKsBGPeqosjld6ma%2FtVf%2ByIqCW3Eqo5xO9OUHKP5VMBapbQLFqNS6zD82Feq0Te5rYnOLpRpTqnQxQ5%2FUNE%2BbF95I0CMut1kbY6ioI3w4L3Jx401f5sX0WoE8jnv3ENc5DMOXNj4xolQxOZGGzcjeSEg7iplA6Slw6Ou5uGHYLBadT5elp1E8DY4sit79mz2TapQdONGcmgj22UXgST9nXK534DlCsDOx9XvGaWK99Mt7k5geTt3e5iT5BgghEnEwDTZlGPr%2BK0t%2FbzthtqXgVVus%2FUPYQhzH%2BDD2lIy%2BBjqkAQdMXIoa9IVZ4FFRIccIe9bELXQAyD0lUhfGHBREtlQYODo3rj6U0OZuxCVg95byPkODzktvr31pepAtOKYQrEHJyxpaC2JjHyUOg2T1jcJDTqJNbN69l8EHKDDqlEsVuyJtGlCUQaG9GxBR5lU%2FFhXFJ7nCuvFi77qaf%2BWFBIeYlUqfGPXQhdCFZQSc5Oh2oPfphJ7l%2FhWLwxuF3ryAxBrv%2B7Aa&X-Amz-Signature=9980208658c3c2f1f94161c1d15c663242ea8d15106a315e3c18dfed480aba5f&X-Amz-SignedHeaders=host&x-id=GetObject)

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
