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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664NUHF5FS%2F20250302%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250302T131206Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAUo%2FZCpXAYYJV4gDXlOVVa1qMehgl0vYmRX6ffHImonAiAFX1o9M6okcXD0%2BRRc0kiJ7yvweGl9dKi%2FIm852Tq11CqIBAi8%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMK8oIYLgRdXpgLu7kKtwDYGvnOicm%2BmYnEzzo0WdCTTVK3gZqp31oaGI8SM%2BiIeer%2BEEw%2Bi%2B0SO%2FVuwtWTaZyaFL8fCAgJeG9VYsY%2F6npSuYJbgkdPTD6rfGhbOr%2B36oazkcX43VaT6k%2F6pzGQExRf8px442hU2gzN73G8GIVnJ67YLdS7yRG0BKy7NlPaXEZQv6I6eDkCqseKdGGkgk8GggeHDQXUlnVQpJ1dFZQYGQ%2BOEvuRqXUP2WpYFWNaRNUsuUSrwOFvTXGfluSxgjj6R7v9Qq18BSuPvya%2FA0B%2BLb84OwzpaKp7qJ1WnwxhsrqB7CgLHPDO%2FkN73QNX00EPTZcyuY4YKNZt6RKLhyIzFzYi%2BSn6z1yXu8O5vq%2B%2FivL3lbwVCfO9I5Oo7ZLEWHYhc5gby7K9QrndMc5DrpCLNJhK%2FptE5%2BuHeZrZwv%2FV2%2BctM0wGTWKz3ADT2fd47gUIdgpPQXXnWF8nzClNUZXQbSw2qb70Q6E0WKxaUcHMFDOjsL8rnUqPxD7FhwbvPbyR9GU4tvMrdpL1wFvHcdCJN6tsq6XmOvjU%2Ft%2B4SrZWFUvU0EFPUcTSlj%2FE%2Bad%2Br%2BEN2Y0ysm2Z2S5TtrUoTjb1Tc3qhOBR%2FVZuMM3Dmq9d35EMH%2Fhbmg2s720Foow2%2FWQvgY6pgGjqHm8rIsvEHMpm9bjbnj9QqCDTMdFX%2FAHkNvQ56PdRcMoBqbZhIKuvGeu4u%2FXBWUg6LQ2w3K09aKyMfoYg9RlC4BK4BxG%2BBlplJnAXUR2%2BK96zQ%2Bu9L8fcl5iTrqKO3rVj%2F1P2g%2FQMVPApPsI%2BB1UbC98c2cHjOBOsFZP6y1ozoqswivaetnHxiSjZbfBp46XbKq%2FFStvnpSq%2FT3gw6%2FG%2FL9gA3Mk&X-Amz-Signature=6488bfffdaace3682e00c8c6d60bf6d26218b455fcb8ec82d57ff661d9de1d33&X-Amz-SignedHeaders=host&x-id=GetObject)

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
