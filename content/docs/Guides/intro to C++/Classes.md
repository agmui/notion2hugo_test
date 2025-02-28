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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662EDNTM7A%2F20250228%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250228T200836Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFsaCXVzLXdlc3QtMiJIMEYCIQDyGo486srOkirrptmSL5IdQAsxNooCyTLF9gzduNBHqAIhAOpKYyr0ERoFlG3I8qdYm3xaS3KI9%2B98A6RhChMI4iLDKogECJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwAtkrmIiyADYGzVVcq3APY7N9tFz9auEi4kgrGaVUWkvIt%2F%2BPm05zGQC571k8Gvm8zHpMaVK5MtYXnZd6Qhl%2FTt5jaXBmAfZCNNZ1n33a5tI%2F5ylI%2FJK5iQYcHRqj%2BUsELnTPJaSIwlBu6u7nDRq3GAjHrmBb7GopZHGkX29AHaq6t4sJB2lDbWJBSM8E5h2neR4mKFOXayD8f%2FBwSVImaO2dGfOelKmyugSgL893vKy8qUv3XDdSF2Bxcp6JVqgmz4A3%2FtRY8yXgUtHcAH0DvUrq07QZvSYb7xcbE7WBwdSFnUkXWmmY9GP5xj48vmnBQ0XRllxdAADGlI6MHCngGPcLrUXuz0GoTnu%2BO%2Fu%2BkXVoTZM2fFxPZhQfytynkP1k%2FPP6tLWWzmkqWsHwhiRE4K2RUhUoOa0Dk%2FOACeX0R020hzpd9DuMso6G7Y2oDQsOIAyZBa3SFz8hxIU%2FO8ziqbXiDRZL59FdUZ4Fw4SBUr2NXigcfLto0NmTT9uRz4rRCPXm7y2VaZ0HEWp1ijFEGLtyaRURPW73zhpSP7UcQrCcztH%2BBIb4U7OYfIAj8I%2BSZA2YutO8rVbj8fPCg3PgEXQGFClQg69xGvUBqzZgaohK4XlPss%2FpRBJouNY78IXcHk8Vf%2FaZosGP0gTDRi4i%2BBjqkAYpOnl0Zklh1BgrahTrpKwhDcWqYKVwZYGvBmrKIaw2EuMO%2Fn6JK1kvZMGyPCTvikRCjxA6kwu7jmSG%2BE2kY3DIQk7XrNTknpzB%2Bxm9STX3VDBkMvZ%2FGK00G2Hbk20osmK%2BpcB3w%2BTS32xBD9hORYbuP0ejdsPcmj2cZYFGtE%2BzFGjTLilDZDWT3wc2FkQkqtymB0GgAfn3BhK5ynPnVdeIyGcak&X-Amz-Signature=8d905d22b36ecd31380480972055223f4accac224db3f072812b320d8bcb4560&X-Amz-SignedHeaders=host&x-id=GetObject)

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
