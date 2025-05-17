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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TGVZM6XL%2F20250517%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250517T041047Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIByEeItMoeCcOPXfhb8I86qirMyngHkYrq00yELSb9feAiB7ftTy3jKrMvjbuu74sB7oK9LqjlqfiB448pOW%2B2R3Tyr%2FAwhVEAAaDDYzNzQyMzE4MzgwNSIMrKBrASnuwCDhy4OsKtwD1D3hJlAjYDFitNTKm1x5MMGaxDIx3aKlBtjMWbzRUrqzP%2FuDYeXSXH2fZYJYZrGOHRVQbI9Sb9oVX6CE0DjxDvA3PJ4HqXZ3B6VIOY%2BlwZD467UjlvZ%2BG5AqUxhr1ZPogjNTaUb9P8PxysKWRlW7YiM0Vdr1XFOGJM2cBcnYwZJ%2Fa3gwnsdnjEp%2BIbEAJmSi3BWnGvV7n%2F7kEfXREIk3kpryKRfT6sHu6RP52Yt%2FluUckWT9WhTphtxJnqBwQmvQc752SmmTVK%2FWTIFmWfr6bv6zY5St%2FAb4FeEWP74ODxF3txwTobiwPaXPDXNUlbh14Et2tO0lYnex3uAhXhIMl2d2QDfHHZqVDQBiXhyKoJExuHmxHY%2Bl4PRsPTh3CjTDp1BPF6HGcxocuc2gUDpuJY5Kc%2Bno8NuPBcNuRMwjKQZuv1h3wHbo0j%2Bq8jD6ROe9yMPZJYhwteuMMMXKzE0EEiRIgxeUn1SsBlpHacEoakK6RZqu5v%2Bq0NDBYX2ajif0V1wmvahh91jn4GyjOOmEV3FUA9RyT6CrHsMlIkzXFNheVtkqfh6VusvhhTVeehaGPdpYwFam7%2BDivIGmyKfWVKdYzZSlrs71UI%2BPuj7TlKfpzAXWrcpXXEYyS68w14%2BgwQY6pgEs8aV1iN94OjQPs8Ijae%2B9prGDB8yBiDqrfCIVXFKN69%2BwwQ9%2FGLebWbY8ZmmRaphHfEkzvYcyvGSKQ3JzCsnfxuCNEw7KLNFZ8o6N7EF6Q%2BF6S%2BX6UjGJQJmgzMj%2FA%2Bk8qMek4O7qAvraGDfYiY0ZvMPgpaJo1l%2FfqFFe2VZLLDk5zbSGkTo6k6SF6jwzwc07xwQCt3c3QQZy1dJjGFIfPPHgDLJl&X-Amz-Signature=a2009b9f03becc914e8c0bc4bb608e822353fdc37c33b4accc4d9437325a017e&X-Amz-SignedHeaders=host&x-id=GetObject)

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
