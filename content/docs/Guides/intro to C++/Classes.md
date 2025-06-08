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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665WSAYRYQ%2F20250608%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250608T140721Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICkBKD2MU1TlQd7bItWUQm21NZe0fPSEvhruaMePUVo5AiAaJfP9lSaqVsArrGB1%2Fl%2FMeGwRzZo%2BuJxTbEO38MF6FyqIBAiK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMjdVt5y7E0YT0AEM4KtwDa0g%2FgaujuFffjcv%2B3wDJmUXj3O9W33hHmH9zfgLjzYT8YpOBu6vHnbGo6VUwI25mULAEnT0uyTuCaIuj8IZRKumDtM%2BMYGMHUn1mqFBaH%2BO%2BUyQqtrlXjPf5MSr1gEjidOeVcsz%2BDhRDUN1YzOY%2F2ytIMSqR6g%2BP5fB%2BkGUZwF7seXGSS8EnVtE0Uqe52xu4MAVxBhUB3oF5PAjYvsrzOXsr3bId6mgm5e%2FSkEDR4vcQ2llmz94VCRW1vLMamp39ddEwyGV6jVC7Ou5BMf4%2BaxIdw4B7gFCfUaNLI2tp0EUtnkv8pmAVQrf1MwGueOqBedhRkg9YoCUzlOZGv3NljqVrC3aXycwXfPfxMRovNGHbAzTUYZwayVLiup4vtRxGl%2BFkjg5LnoU8%2B7R9UCOBmzJ4DK4%2BJfYnIQGa9u9cHnToNEPKKuvSPZdnvdzW6RbEfCiqjriPLCj3jQF52DYcnCIi7iZ9qmYVJt9J5QG0I320uBMcq2sqFzBiv3rKQJdQAZ4QaDnzUe21Ntj%2BAvo%2Fh2yuLt%2FzLhO8QkaFI%2BfYsi2KHkuHWUBHvuKhvqSDlJB4uCmF%2Fa8NeAySU92gF38GDBVmlYIl1GQhr26BWM1Bs4a7ydWwjAhwwA9Vdjwwk6aVwgY6pgGVWxXm4GUsO7kWxovzDmSV7%2Bt5sD1%2FtoVbNOUSvaFmZ0eSCj%2B9sPlGueuoyoXvnp8u2%2B2Ckui9s9aL%2F6Noszb1zU1dsh%2B75DoqMrk6ABCfDk3D7ftWZHaIwIGMwSx%2BOV3Ue7BG9glwyKfrFttElKn47FYxcE5ULkq85YkHUUGys%2BTMiGXA76y7cfRVpSiebZXL8XxtASQxeZ06jneG3n3yUgxqzgs5&X-Amz-Signature=32c61e6f7ffc8cbf1f1fd745701617de1630542a3812abcc832894bf0d3eb9ce&X-Amz-SignedHeaders=host&x-id=GetObject)

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
