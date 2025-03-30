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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XMN3M6FZ%2F20250330%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250330T022434Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBoaCXVzLXdlc3QtMiJHMEUCIAXCsDX1ZdZyWC1h%2FCZwgTtjvIpUaXpC%2BwJp39oKIoQgAiEAy2NuDqRMrFP%2F7RC0Ef38yqwx%2B9i%2FDafRaBwhb%2FJJcfIqiAQIg%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBNtbmNggz3mJBq%2FUCrcA98tcr0gODPtGoo0YhCaV1wlU6qwehwSIXvc3Ajs8gHsgrjJbR%2FcyJZmLx8c6TKA6erAS0tON6Mjq2McmNQbLX0xtr07ErRzobNl2ShxdzJhIE4v4NkCGFg3cQT%2F%2FhPqrXkbGtudGFNOsPzy2WYWZIdeMxtt%2BTr3lJWloEG7Y15d6nKFrWcbwFLglSZmh1YgYv5Fd%2BOioy64Wq5PsX73RHjVymetHKaFW7%2BQkA6TKlQi9ITqT57VbXUIVNxZbKLM1jTvrz0n0A05GhOujvxwqxRZiZ0C726E8Ht2aCcOdYp3uT555HUTvLn5uoY9ebtnda7wlphz2jKrSWMWHKj8MGE1357RGJjlPFGgAw6n6%2BDMFkdhg7S7FL7BAbK8xDeAHw8ohNM5q4lQX8mspnpDnKTgfq%2FIqNBmuyfkTAa7VHQUjtcQ%2FBqJV6%2Fn%2FRlOo32V9CpkqYJCd0I8nLAWrqnyYO4iafiBxmgjYGmXjAEOZzZf6wuPvBHqxGrrqFU2eHcWTZfog565FI%2BbKYrMBJu%2FrddRdkvOi7y1VucSNn0aCz7BvNhJPJ8ba8l0UrQs5LjL7JSd%2FvLAehudvdNz8GmxGc3cXloOt0nqp%2B0R3nlPS9qU1TWrHg%2BGHss0sbNkMMzQor8GOqUBa56ssAUBjm%2FWsfHVfecN134FC%2FwFD6rVJL9XgE8IehhzlxTsxqAKKPu9PgES%2BgalTu5uncqycG4tgiFDDfCzgN1rmcHZcp6TqN5eXD1oZ%2F%2FCpZyzqWJkbQxdupmWn9vcYZttw8cMWdd4k%2Bu4M%2Fyyp%2F9qllBoBcwsDKeESOQ6%2Fv%2FYf8jssBW1izJdaLTCMzLoSPUbpfZaUM6PxT4jcdjKxkaJ5sO0&X-Amz-Signature=5018c63a6e682a855704e6a2f560633fe837ccd77e2e4ba5e991a9315d5822ef&X-Amz-SignedHeaders=host&x-id=GetObject)

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
