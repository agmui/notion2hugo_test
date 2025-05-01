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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TEGKM2QV%2F20250501%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250501T210751Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECwaCXVzLXdlc3QtMiJIMEYCIQDkvhAsjR%2Btr6%2F2DD%2FFRKgbGQgxJN4Nl9y6R7x2GYvbdwIhALd%2BNGYVbhjKXHWNY5riXmFZ9ZWpS9cRa5LJrEqx3oQuKogECMX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxA8EAGHh93jKpisMMq3AOuG9bNIYdNsSlw2GsGb9i61l5XlgGACEheab%2BM0zcaHVdefp7bsk85%2FD%2BcjzRvi2xw10aCdkXe9iMflfUtV69f24fg7NnDrxq7v%2BiNwYWyoLOd6cEEojhyLKZ3hO2xCalKfSjeyWXYhCecAPzfO9IiWIdGZAnkk671Nmgdh%2FpNT7RqDrXxS0BNkg%2F5s1d5Ae55y3BqIVPuUQfsTiLz0T8cnXk0LtAilCXAbW61CC6lSAhjQXWpBXhOQBD4fRjYR2DzB1rQ4slxu6BEpXogItemnRwduoyjMvE2u33Am0%2B9gzSqWvUcPPPVkQJ%2Bs0L%2BeBQZDYtW7l%2BqveE5CWkzhMf%2FOdgdvGfwpP39yd%2Bzgyz%2BYB%2BSMEVZTpWPEntB0Tz8etKH7g33X%2FHjWPfzN4x%2FGJFIyrvr1Gtr6C52giQUUu4SJ14jKvKhBVRhCSUhKY1kanTLEUsGjfjGXJxrI3r1nh7NESnPFroqbl5xe0z6kfezaWuHT4P40dz3yIFZxi9kvDx0Slrh6iBsUaunsFNyaz0QB7txNOodv7U0XLloMSI%2FTBtcL%2BnLYOupstIPqHHg3g1W%2BmVhsdLMWULdYZ87MzhGu%2BzsaXPQgjzDrp0URbhrBjn0S%2BOu61%2FPR63F2jD8q8%2FABjqkAYvqMq%2BvjHIJge7JvX1fz5mP2nD392efe8Pfn7iH%2BYzKj%2Fng3jj5U%2B%2BJ7mEuEUcRMpEeyqz8OT7%2B5fBs5sbi5E%2Bklg7Hz96G85rLJo6q7D7i17rC4%2BsxZv75Mp%2Fjpw0xtVzXwxLOpFsPAa%2FERl0cYPXqZ85%2BaZaAZcm0wmMZgOo8smtiRqjCQCFzSzElyMNMrLqYS88jLXTlMC2o9LG8%2FwOY8kl4&X-Amz-Signature=5ca65e0642d553f5ae38fcf071e99b6addd0e46757dc47b231282f315829631c&X-Amz-SignedHeaders=host&x-id=GetObject)

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
