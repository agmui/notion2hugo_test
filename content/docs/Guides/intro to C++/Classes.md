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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SQJ5PSOL%2F20250609%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250609T034443Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICv8jd1ThAr5fZ4XSFfChybLDF%2BbsClAQblipp3lFPi9AiBZeuQossZ0mcBAA86IiCQxhNR%2F4jmYWQZblEn4zX5b3iqIBAic%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMMU%2F%2BdYzXdF5Jh%2F2jKtwD%2FZBlvRlxQWDS8YLmI3R0Yzy3D2GidolNeah4pk%2F6LrvEePHW76TdKDUAuWKqLWqMbGEgYlWG%2BPIZ4s2ctd27BAj%2BO465PHG1iJKJWow8NjZf8iqmXPTGELn3TkVoyUnKGoV%2Fg0Yn1LwB7aJgiJcM4jIrJeVLTPGlUv6MHdBwhX0FRCV9jEGzoSyyYvuvhf6t8CSaBIx9q6btuHgYDILSzuyjpJQhdGBB8CC4%2FlR4E4YxJxhXKWmY%2BewGucJ7j9k5aeDqANsHjjlg2oJFISXz1XukF9Toy6kevsdx30HweuwudwbKkRh9XAf4wzOZtOPTV831BkfDdiG5q%2BEgppC%2BJ156bNoK5TUSgyUZschdFSw1kANuL4SdrHC22qSDC1jV0ikbdRxuyoYilQO6fmDA%2BfShbD3JpHIAiI%2Fm4nhihYkaobSe9RMUmUNW%2FrdK%2BUctW7eOZbS7lf34oUZEwgTDX0vQfwMYsoXUbSBzvett27EXURuX1d14P86vnm53Ysm8Yw4K3ZFl0hGY4Nxg7nf8VEoOt%2F%2FPYkoLhh7KfLtjPPe0YinAByLxVpcJJuC1eZ0lYkn2%2FI3x40QIEYIb801RmaGjFCG1YSrAinwXb1ONwDeAWSMDJBbhE32MPt0w6J%2BZwgY6pgEEQfmc%2FPS%2BA7japOBK6%2FGRDazzgaTj%2FaAtZ%2FsuoQ3SNSC716vbhJnchyoQ%2B9SPQQfArAZTz8fZy9gIwIRJTbUrPIVUfZEUh6H%2FpZCN9%2BzDDkn1OP%2B9TJvmsNGzqd1arEoAQpCxOONem1%2B7VMAMUwUiskY0DEaURdBqzcw%2B4yE0TGxXkAX98HZgFg5LGhyv66%2BwxCqhdjEIxFj7QhkaQMWDPrFskqIe&X-Amz-Signature=b7da212d1bd8b778aec417348126231b05826d38bdc31a79a5b3292e5ae0ab83&X-Amz-SignedHeaders=host&x-id=GetObject)

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
