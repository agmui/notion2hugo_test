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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZTR4H543%2F20250307%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250307T190147Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAMaCXVzLXdlc3QtMiJHMEUCIFjuU1sTRr43jxXh8TxdYpnqrGAF8ruRpvYkzqZCKPq6AiEA7SzZGFsR4ZNRJtXezW61usMGZG9kg72qgX01GnJ6XEwq%2FwMITBAAGgw2Mzc0MjMxODM4MDUiDCa%2FuQlCp%2FtLmKTg6CrcA66KlVFJTdpOqZCau98n3PzittblmlTlEzGBXzJap1lXd9D8nJ%2BEmQgUf9G1UQsxYG2EKLn5mgrCM7Qvu1lPcl2MUz3QfJB1erTPAkAhqQsYK%2B7S0Jp8ZFyFcdmeanWvHNjxP2XqKfO1KsoVJH3jXnK%2BwVgcufLzUiCxJZfV2fMo%2FO%2F7ZANB0%2Bxej2%2FYeA547LRF6GFwsbQ0pZYMOhmU8mxNZhzdrkTJj3LQGXVkDDBhNgY%2BYsreK7usFAofwTyKEdG3Ts4ZXs7qbe%2FS%2FZQaPn1onINY1Hrgg8ugltKOqSsVutHvKK0yoGl3w%2FST0XqYVrjZQ5cSPR5RXJIsaquIqfNdZYdeobVODtmJeXca82NM2pLu7hfW8IH0NMb06aSpwAWIN%2BqTYTB8sgv8lXkxgrRyTkD5thAammhKfHfivCpuYZLV6S7aXQVR2Gk4xOhXS7fs171GlIr96Ml1lVK87ZwgPegKVcQG8uh81s1rxd0WGGbZjdEYDJ2CHUYfOccQyStg7DhZk7axDXGEzgfUjobuPUFa31S7EDp2Bg7t1t%2BuY9bxml9OPl9W%2B7YmEcIEbaX%2FnlIf16d1PVVosiVKr1Ip2RYWfkl%2F%2BUfzchOHIbmM2ly9uyZLQXWZHl2CMPb%2FrL4GOqUBw9hGml9FZXIz9tytsbE5F1VbqBxLWa6iEDBkgc86D%2FqMgqx%2FXy8VU2k%2Fm7NOm%2B%2BXPpAxM8nP4a371JWtMu8USX5mvIi93oEWfmYnRCt4X9hIKPuD%2FenXmbUuVrwmzmH6%2BDSaM6bqvnQOtmKE3qbUSk4cHEbJYkRCEoLRhCCdXc82J9X5odmMlXjdG%2B8Axu3TgFKRqEd6TJ6DqXzY%2FPOV3giT3FrI&X-Amz-Signature=8254dac4a08442cd4a2a0793b646a4b143d83a8b3c1154de8638f7c34f821d53&X-Amz-SignedHeaders=host&x-id=GetObject)

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
