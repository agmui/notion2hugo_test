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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664N6JV7V6%2F20250509%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250509T220755Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGtiOuK67b%2FdbPnb3VzkJBf%2FiHY3B7PKxDWNkCCTA%2F77AiAymJUqWsCL8kwdfqzBTSZ3H7rpmI1QCDv4dkka%2FBAC0SqIBAiX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMCQBUeIqB0xWAN%2Fg8KtwD%2BcLrup%2BrBqV9bqeQp8iYv7m%2FviEJGWi8V7NHtWz2pdcxDoXDJpVtDd3jY7UI7P1gJbTKZMdx0Qxoe77cGvmDcB%2Bn2iI4T8hNSdulwxEbSFs6pj8iRhE%2FdpqMn%2FidoIvoG86qxs7ZNcqFvyixWlN%2F6xz52le6P%2FYkJY0Vg4cMPEZ6stXnqZs0Tz7ahPmoZ00%2FU4tn7xK9QjJvvjiod3HHH1%2FKyYzjCK%2FnMO4G0jAR%2FPm0AhXyL9dC7NB%2Bg2nOnDNUw1A3MZbItG4zEC9ncApVlmL7fZ6kBC6eRpbEpqLJs7GGCZscAg59XgX8oW0y4R9zZaotQHqio%2BFsaa52NOQ3Q3iY87h%2Fu5Uv1RuSJA8%2BRma4sSAsW%2B0jpNYHKHL%2Fhv3ag2Wtjn0AneIxA0UCkm26rV7pMYJEbz10coe32iyRCoe9qmOr3An0HowpTzq15fhH6CMWLcfOMdECdJBFsbYIDXMcCLXvRu6SWedDvFs2VwJOXmGom7g9vv7KmIM8R0A8G2hU1piAjH7cSgsePb23Sj5wcj5IV%2BcH2xnS188pTiMwgclnhB3UBjSKR1MmMGDsCsbA2TfS1uPnI0R0bRbzX%2Fa7ZOQfOeCtEYHkf6XFQO8%2BeeMw4TszTJcco8Ywm%2FD5wAY6pgGG9brGdKSUzz22XUvjamdOowew78plvxP9e32JZ9iLkOxkv9v5QUwcDUav51w1Ivx6KU6K5wbdh%2FIuFVJLG4eEj9%2FQFd61bSKWBbWgCThT%2FPTkm5Rgna3uhHWbtNi%2FEQPPq%2BFtFs6pPpEl6YGqW72heHUGQETiCMrtaacKJm1lXnTPKQR9TwI%2BzPoo7iEX%2BhymlrnrVPtOFTxa9RmZXwUpwz3dya6c&X-Amz-Signature=fe09c966fcb9aa2d06ebd1743ecec07e2d0322fee9048a0a9de4cdc3f63cb88a&X-Amz-SignedHeaders=host&x-id=GetObject)

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
