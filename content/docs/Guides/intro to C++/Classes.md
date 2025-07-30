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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XBE43CUF%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T191056Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDllq0Y0wSS5gUApWSThssDLb0jIXc9cpmlYcSJNxlzvgIgBikQfDoBaSeiDvATmYbZqYhe62d1DUJ7%2BLxND63voswqiAQIw%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOXyXATSBblsQTC4dCrcA6m4Iu5Su8Sp5GSOhHWRJ6ELod6GqWDu9CWotxcAaZC%2F%2FWEVoXnXHorJUNbCny24zUHA7V4JTUX7zQWUrMr7flbvIi4FqAGAj4uekJUOJ0Lrr3uVWY3aRQgKhDDZs4GEkX9VZ7hvb3h8btWAyHK5JdX4PhdYh%2FW1zqWcx7ZPeD8AAnh0JWsvfdysFfdpB3Wf84Sr2qlW%2FcijcrjkQbrfCiywLEz8PlEMZyTRIzp41CkAw%2FfPib6Fe8ctRhsfnEb0hJz1tDbNg9XeLPsa22kQafopSuyFGigh1k3uvBEG2Nuju2L%2FT7c71ehYeoTCBeGWdwuG4uA7ewSDnVQENCC0UpbZlxDvtvD7ycNKBmWWtYGYkX3KNT6Tn19IbdGxJIc%2FRe3OuorQJLybq65pDp5qd4K7K51f7KC8%2BXBQNGvUdX%2FTOjsTmI%2BSyp%2BITyCE%2B%2BW7Bgkzl9XBm4VtBOFGtw5XaXf5uIfNFssrSV8CFPDXmK98hF3EWnAKaNtaaSUbSwFPTkt866YGYDBkGdSXwqAJXRJybk9Hk6mIrAA%2B3H%2BOHKldBm%2FyaQeB3JDcgGQfEuvCEtnOeHIRTSjy90f8g9G%2F3jKri25iaDC19ONJvhR7KOR1AV4KkQoFEU1EGT%2BAMOu6qcQGOqUB1LP4MMe2%2F9hJiQcXFhJ3W4nKoIqpYmuqrP5g4mw7RQLFlcSOYf0Fm8h%2FSF68V5FKCnk3H5F0qwYUwfPVfgV6Id3edg0h%2Ftm7XwSnhSzIbn1IxWrj73sxrHUKcFVemynJYl%2FvvSOOTtVOgXrf%2BTiPzfNBhoIHeexBL8wI2WWCfAgRpHVxaWu3h2fSvqJlBrsJRva%2BRnAcjNxqVaEw5Qw0UCSX4wl0&X-Amz-Signature=91550678d955409e6c47ff8fea5120cb5e9b3f8d2f10d5bfdee6e30aefa91853&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
