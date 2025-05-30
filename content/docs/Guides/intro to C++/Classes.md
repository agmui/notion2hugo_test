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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UO54TPI5%2F20250530%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250530T200936Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDV8nJSZbj27Uozq2z%2B6XMvBD620n3EHTBLbiW8NobayAiBvcSaXKjm0rVmzaKl%2FZX6MfYRDpZ1cWoDLqy9VXnvzZyqIBAis%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM7OfycGbhGd4D7%2FPMKtwDNvDcW7ZX3IvhnsBWbMct0Rzc4HCUHJM3ANN%2BM6%2BiHbjZsLhhA3EnhxDPExzNLxNgyw5aOHJxqbYM84KLcqX9V2ULpMiLSprUGfFJh4hrLD4gp91pB15T6K%2Fq7%2BWPO9%2BHkv4UzR0LKg8qtRxg0dJbmvTASbAdj33cKsrEogTwI4DcHtujgH%2F0nYiVFZgV1az1xo8WvSKOXFUJS70ghgSN6aBxWdMCX4nZ5JyZH23U5z7hb0ai%2BlUzHSq6gqiwBxbg68EmbC5Eq801zV%2FVWzf3Cz4RaKakkGDs3rWIHV8JyvGJKqaZjQPMWVF6miFijNnSVYoppVcLhXag2RsuG8GvKDi20b6PpS%2BClK7dOFZjHINyUYq3IShoRdCxf3Ry7YcSMLMZgS82FMq1ag0UosFRVqU0AAfZTkwPM0SNx1ck3p2R8rxxj8BXmQQoxEZwDCqRnltLajTLx9OQbcTnLaNbfOJrXvo6yI7ILndU%2BeGdVXlxx7vfO2OrEKWZMZ5D3M688tYqMYTsrlVzjVokXjMVwLSOXNsQBDNaghhFZdianLerk%2FthmUXasw8oY8tIwmThllN9PQuVypbZ%2F%2FFP8IxWQxZ0IHINmzqvQkr%2F1hNHag%2FusmnumTUe0DzGk4owjf7nwQY6pgGh4e%2FTtH6G5Kf34R1NvM0ihHI%2F9s1jrnnHScFrNauO0x0%2BeASH1ZyP5xyt07JwsFfzl7KSw1MJhxJXvtqi228lTAHFt8WsNugCcj%2FD8Lad7AdabxPDqfAdcFyS0USRkZG3MSd5s1RjfrpM1V%2FkWIojl0jsgMuS5j175miaaxQkI2TpApjWuOLFdjJeZ0VZkCXAkOvdykka1nQ7JVnnjuSUBV2hi9hW&X-Amz-Signature=3ab0a5dd341bb5f6d93a1cb558f9b766ce77c2dc670773b77aeedec9925d686c&X-Amz-SignedHeaders=host&x-id=GetObject)

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
