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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VUEQ6FOM%2F20250425%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250425T110722Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCkYmjJtPfa8e9Wsl0g1XemBMEAJ9jzY5VIqceAIAgrdAIgO6oGADqJifYcQy%2F%2FnCXV5tUe1d8sWxZmEZfMLn9x3Egq%2FwMILBAAGgw2Mzc0MjMxODM4MDUiDJ2mouL99RA5Nf5myyrcA8sJxGPc0CXOKD9dknS7SVUwH2F3EWvHG8VHpruYwRt97SjS6WyEAYhXlEkxWDcI%2BRBFq6xN%2BQ6XXybO0hSLl1bGd6a8lcuH6NZWxbjpkZel0It1wHCnlH2RL5ibaGQIfRKCCBobXFn5q6PYyuCaejLd7xwAMtxyM%2F3RkREGpwQZAGzbOT4PWyqdW%2BsuUe4mh9gowOzGBUGn9GDJxHqaMqaPl%2FzHRcQ1m4cbCmerHQLbLsOjgTxA78tnqVSgsOfujFbwBuGhHKI9fS1KojcrGCDXi%2B08UiHPg4JC9Y7VRKjz%2BLvejYR%2Fl0TKg0kqh3oV94Qmh8mKAKQozZFHMh%2FG%2BAqYZp9b0OKfgi7dMpDcoyKKg3srggt7hWS5SVd%2BcQ7%2BxwQzM2AEl6XzoCBS8YZf%2FMh07a4KwYklahgX9AaxpNZE7%2Bhs8KK5JJKDwJoBE06CYe7Nz6DbxlBLuvzYjIjOj6XqW7XpfplpOLzVSsywC1ALOMkw2QzAJhU9PWQGIlixfT9khXhSgg9dmqiBC0di1Pht3Emvj%2BZkjJwJp0Xp4Rvzwd6j5Pcf50VZzTHuGel%2BeCfizAYm1o8BaGUCiAHLseoGexpH2lRC1ulrYiapC9OTxmGQ%2BS5XvsfIGKhPMJvZrcAGOqUBD4nyWK0jsmzBjVaTE%2F8q%2F8o1fMhsNbcOHWX3nQdOR%2BmXQxfBEOg3mVJwILUbHVQfQOcx%2BgUd%2F9iPHgoivRdCOpLcPHiQuoF0pLCbtoNq8PGz6dSJ3sLgiO1bkz5JrJ7JA0qCTVX0Re738v1yinSv4v7A%2BaHaTnsGZcDB%2BFxlJzLGbc6mShGkQRmqKGU%2FeVkUTazB2FLCXjS1K0f2WYZsIS27o6Yz&X-Amz-Signature=12c74fc8c38b128a3a88a0e751a3b2bd00b42f480b906d372ed4dc4e8e268e38&X-Amz-SignedHeaders=host&x-id=GetObject)

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
