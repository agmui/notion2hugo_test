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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T64ULNGP%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T220912Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIE2kKCuqnZB0aGyIA7nMIzAbIUcizciOWlwJtzPOOLR%2FAiAb7PiH0p7kGjllxCv7NF8%2FfDycqXLNQZWAN67cKIBIgCqIBAiv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMOf5cQOTYfweLVe4xKtwDj%2BySt%2BRdspr11nsvyyhUildjKKs9w%2BaR%2F9dbQDjLZETUSwIaE8KW63m2ZWeHPpoXk5dtNqJup9Kvg6WXAEo8KxguJk1V3n76q2bZqoshl5Jj%2FqST4agdXClAlnJFATCRr3rCmXaQijiUaVk9IQCXr9RzcsJqW4rmqV109JstAINdPcB1WOY6bHEYlteE5ihdVELMmwcAh8tEYCGYyLJpVAJstM12Ky69nNCN98Y2vZ%2F5tyQSF6DH1Z8pEtrfPvawkH40KRRQNzfmaVaurrS67w4jOZh6sb5tnnXSTIYRjHYHdQhVTmsAjeOJVz5yXDK3z%2FiNeIykeCa45vqUxdBVTH%2B%2BE3UJQh4rjhcrcoEAISALfHwcTe8xwltWcYg7kQfZrNXUaFHqadK77gOw8yk6q1Lgj0L9wzV3cdMjvWOckzbqhfX38qZLTrw78oD0vb1%2B3QUoQn0aLRsMuLBg10Fi1QHREK1p0CZQUoXuR2Hnnny9F7lHQKJLeJWnPwauCR%2BCjAoqDoJtZyN6CrXd5xfMX56R750uV0Z2Dg0%2BZYOwaTT3Ry%2BsRX%2BAf6XeW0iAfR9OanyNn%2FnULnk0ujyuEPe4QtWVVdUeGJoeRQLTgTn0%2FmshsGcpML6SBw4Map8w2IqlxAY6pgGMv%2Fc4j0VO9OyZIDJzpaogZZD6%2FGIdSkS%2FgkQfn0RdGudx2ZitIthDa312ttI3pQox0%2F%2FyXoOQauSsoanmgC84MGh0Q1LY3hC5SO1KQ92R3p31fojlLBQiezfG%2B34GEu77FMojiazHhO1AbYTB1NBwaZpcQG2jtng28LMrrw%2FoYKi4%2Fdm0Lff3i5xvJ%2BUqZ11vf75vZyVD%2BlDGYpSBCW67XV1ZSPBU&X-Amz-Signature=d51f30b645c86933ea5f6fa2dbb7a3b768d78abab93b8a3326394177b9c7827c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
