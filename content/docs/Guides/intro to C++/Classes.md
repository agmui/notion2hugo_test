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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664L7KFRNK%2F20250623%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250623T210819Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJGMEQCIAdz3u%2BXp9bAFwwiWkMOovx56d93vI1jkms6U7lVo7a%2FAiBiSvP6Wa8000jGr%2BUJUq2EiMZ4oVwkSHctb2NATV0gDCr%2FAwgdEAAaDDYzNzQyMzE4MzgwNSIMeT8c5a5qlF8mtbuWKtwDa5Va0Pn1xTEtyyP4cugf2upeQXhOZ%2B3Jgr%2FcXx%2FtD3fXKBhMd1wblA1FK61DEkgwIZe%2FiffArLnjSkUcK3asGHCn8QUYDhOvGghRdEZQqUhQDD9VyIlkNxUXImYHtsAy7kVtQpZQvH8qyLiYB9oeSgshmim7atLEK21pT%2FODiVlorA2bGzMWcTIRZONyV%2F%2BcQL6T%2FJZITqV5FrLwhmoSoyAUzsrIZiz3wOXNJhO%2FDrV%2BT8UNtZpS6Pbcc35B2nWtTWPuQxfRXCBJCI4lQ4K3He1uxtWvKTk%2BsVowGMMFAnp6ROE0J79ET0F3ihc9TdXlXWhwhvrh8SYsOldT%2FU7WcJyKkxBOjBGkl%2BAj9VsijgO3uRQWAtnVjlvT1BuD6nDlfaQp%2BgUiJl4WuECSQv7JdNmAR%2FMymL%2BNiaHhOGi0ywyzKlMaG2FtibBCm%2FaddvlKHtwEbmFXO5c47%2BnccQS49G4IrapwmwV98%2BHK3fbd7uKXBUfwDPlOiT%2FcjGnr7bwouB5FeXSIjIkrheRWwMCKM7F%2Fdf%2BS449F4MK%2Fog56Yr9wZ48Du1a2kmmod6YzC8EulR3VIDHBS%2FRIHQldczzrKvJv6BGv1xbBMIqbIced5yJgiPX5PHkmkW9ke2Ew4e3mwgY6pgGxW%2BiDleMeNvoNdz%2FEXpqRPLxB5MsfTQMPlb1TYjrv6L3jkNlckb6Eut6rnEFNlPHreFC8TidtFUXpjb8FcO1XJ8y8mRoEsnwAvjKCzFPTntrOFNDd1U2vuojhPTEeo7PfIprNUQGucNJ2b%2FSZQh8wQp6DVY6Ml71nt0vXJ%2FJsecwrF8Ty4i%2FpIyJMIs%2B1DmKF2enGNbEVV1PZJFChZxZKXft4fBSE&X-Amz-Signature=a5c45680b96c94e8183341cc5cb13903d0f7d2d5755253820640a6e3b7728098&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
