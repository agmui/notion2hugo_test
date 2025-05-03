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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666VJODCLI%2F20250503%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250503T110109Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFMaCXVzLXdlc3QtMiJHMEUCIC4opubkAQ2p8%2Be9Bxd1qt9JJ4OjUgKHbbWKRCruhYasAiEA7uKMYGU%2FKjdvESKAV9uI1gItashhaXOtgr%2FyPR4SMkwqiAQI7P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFXI1v0TdhgblOTQnyrcA1riPp9Xo%2FzlBhSXGS%2F84EPUjwzXSvocPXhNMntTDRRWlI3tioEn%2B1scu2Wa2AMby9ZH49S0PVBS%2BfERi%2BZ8QkPTjIQOdz7BIfHRjNl1MPl%2FLwdLstdqGeGW42I%2BZiII%2BFIh3VeewYYmizwgEfMgT1%2B6UR52EgEfCrl8X54%2F90ccf3iatbnjgoI%2BD1GY30WD5uK18sBqdvcvhmFGQzIdQ4Y94bPsAq6ySgYYSXuMYhb1Xc4Uvyi2bMf21Jzd%2FuF1u2hH2vIH%2BumwG2uPkIKwnl%2B98taB0osBkA3XywJS1jKqIQjScc5fa7X4FWvZV1vXkOEXwiq8uCRL2%2BR%2Fcx0eV%2Bm4FDADeTaJedN%2BxuUXxm5MVrwyRXpNh75S%2FTIiGbEQT4fk8kS%2BBY4wOzr9xr7%2BTGsGx1VBD8%2BKT6AE7KCWktnE1v1aXkopAC4n5lYXdgd%2Bqsr7A34cXMm10nYKoNkvXLvmhNGwiLj9bbEKFx3NSvMma%2FsT6mcbA4VVTVAHBx7EgxDMHY%2FYdf6pSnQcERKfNy5FyqAs40tDkiaieaXLN1OG3XlTSSEy8UUsdw1TBFMkHe%2B8JS6XR0lTc6PA9RF9%2FlxkDii1Va%2BcicXX%2BZoMWHlQLEsLL0qB9o6fUrHsML3e18AGOqUBwQN1zDx9XHwFylCvXHR1l8w2ITvWnYylOOgwmZpd9JoxbiCUQDDZHSPJOyOwVqoldpZ1HnIQAiI2BgR8tb4knHeSeZvGs%2BtPx7IvFmiInJhYbKo8owODaFT6gJv%2Bu01J1sb50XtLY8Yn0BwsaGpKq9jq8C5mth9Jkkv67YFpB0kTR6RiU6BqUzerzKkKbCU9QhltXSo9HGM3VzDadqf%2BN1q0gJRY&X-Amz-Signature=76ee6f5b85d198192452e8454fd4a410ae95d78444a0145e119ea34b68e4d4a1&X-Amz-SignedHeaders=host&x-id=GetObject)

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
