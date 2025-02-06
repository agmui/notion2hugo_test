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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VVTN5LEH%2F20250206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250206T020823Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDgaCXVzLXdlc3QtMiJGMEQCIGhajZA3Bk4RbuAmf4kug8hWOUWkixghaPgp6FZPsSkJAiAc07We1h9Pm%2F9lm%2Byc5eO8zyJuKCzA6qhT45rIiHgfwyr%2FAwhREAAaDDYzNzQyMzE4MzgwNSIMO50S0gAGHmpbjNPQKtwDRLITlgnSZdrnZslxVPDMLtjnQNJ9wv7%2F5yjtphA5LBVbKJxjtP60pSSpJr0XzS0XRRJJZ3duqqtuIQ7wWr3ia0Z%2BQ3Ghvv0%2BFUOUE6Ul4GRcGwl6B04r1WaC7P1Z1c5wrg3I7hioNdQoFFH382xRTuyLgTmp28g8dNYWp7Ah%2FB3fXcbR4Nowl1A4la5dfSFmS%2Bxurn6WrjxaKQ8ij23igjpBFK6%2BagnOhIq6OB7shhnnA3zMbRUpxMypc74EPbMNkySPfspqjnDQWuZ5KJ3Tme6YbdO8%2BG%2FTDFip2foyefM5AOjGobgzK1CgvRyM81EeG8dM0O74LpmETcyQq6KYz6lEng2%2FYmyvxmIouXMdssplkB7Qlxdzf29%2FchhB3kD1uXSiqNzxOTnSet3nBmm%2BbO5k9xzN2rf23esyBklE08OSmpPl4EciEULDYIGhqtQ%2FkmdBsPHw92Zek6NgcJXMBNyXRKbPIc4CvVXNnOd794w7S6TCrNrAyTKMzIBJiQePj9imd8oi7xMj0Le5%2FXVWi1v7bNxQWbKurH8pe8IuvhBUYb0yVq7lUjMceQyTSW7ccAIzk5Poztjykr60RBWgq9urhtk5OuaUVzoztGzJIwAMRz6VePu6dtRk2wowgu2PvQY6pgGNHd7nGP7gfYwCtE%2BS48MCs%2Fjt0pBq4lYYQwuifn8cVlJziOOBt2Gd%2FU9Wj2HEtNl2mLBI7ovq%2FYS3Zb%2BwWf8BQlA1c53czbYW%2BEJ7Qh1TE2kzYFMaUEHgHTMg6rqxxFSnGB3sPw4nX3YxDmlrhK%2BCDuNk9ESJST0xPU5EOYlvhlgT0yrPgNHOB%2Bi75tfY3tiFR9Iib1qrRZGcPIo6x%2BodGVUrRZsf&X-Amz-Signature=2e6269e6df8d3817f9cf313177fd065ae78fad4c83ad0943e2bcf6a81cca3230&X-Amz-SignedHeaders=host&x-id=GetObject)

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
