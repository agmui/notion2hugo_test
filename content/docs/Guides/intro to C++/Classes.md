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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662WBWM32N%2F20250203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250203T140757Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC50OZxyU4PENvtCrlnkSjbxt%2F3oj%2FjigHXZUQZjzdU5QIhAP4DpVo%2BR5wodlcEed9ZjUwZJ5gFS9uGd42aRm9B9XULKv8DCBcQABoMNjM3NDIzMTgzODA1IgymbwjbE3F7FeFoVfMq3APuZu2b7%2FtE3mJ%2F1FFLE0G3mByuEdbV39aY6PxAe82mzlhjNzZ40FxkyC59VrfFGTMUh3KCYHQxSWXkAAqjCl7lgl%2FxlnleImFxuNFpxsdmldy0u0g3ad1dQJBsOH3IoqAvI8vAbYJBwkObW8FTP50cCLhbueR%2FaYTguNN3g2Y9%2B21b8zydQ%2Bf2dUCgNLQp0hBPNENT%2BXOXDwGv4PCJO4JXAkyOzpp0n5SWRCTpztBRiUuvBXearWBeW43yAWkRxS525ZOjWurqF16G5PhweDzKz8e8Z5%2F9QUjxK6%2Fs5sUfOQWNuFt9xRlSzu6nwMiv3sMq9Gi3IA3mzFP97VvwwNA5ZyLuGWxCfIq7CjDrfpob4qyfkoutOjcbIROaGjF5UW3n2y9Y81S3FK9Q785DmeOFHptzgYXasGdFF1ODKyU%2FqFQGJphkTv6Hl8VDACNMv0ZqYxHMeRWrMz0BsySsra0qSyfjl0z23M%2BURdvXsX6pIvZySymaQNlOy4UkoCxhVN0Hq038i1EKuuw8R0z5qA05Mm571a1Px%2B%2BoGLNGccUVNlOOpSBO0mXKCTgG24Z8EsNFq5iwRMTQKgOdgkdqsctbvUK0COlv%2Bvh%2BThXQ4hYr0OT4zshjOLtqvqfYyjCOj4O9BjqkAf1j6mnDhJdoX4Vb2AFlbUhAAZgwacMEGkCbQ5sJbbxx0ihuwjUKQQHTSq%2F4h6%2FLyQgKmBzt5G8btMOICnDhkqOfEDVkoEUNE53Ddpi31zepzVIWwX%2Fjgg1gcks4QuMXy2ebctIebZZn8r7LAEhrg2ZjCEDbMdVnvGxtpY94ijGEyDEwujvuvsGbfs%2By8rT7NPFoFmMCI7XIQWSq73PXaVa5Ando&X-Amz-Signature=6b923c3cf4be132fe00339e949aef5435f4aecd9a27472b2b720d14b40819e7a&X-Amz-SignedHeaders=host&x-id=GetObject)

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
