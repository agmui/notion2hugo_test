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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VCPQLTDU%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T220930Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA4aCXVzLXdlc3QtMiJIMEYCIQCijHBjsfZ32nfbdtpS5bBpsFqbSLj8Hc7I1x4SSmUvrgIhAOXbCtRv9%2BTS%2BkQ6wOZS6OsSE8OulrzCARjm5BnAnpn7Kv8DCDcQABoMNjM3NDIzMTgzODA1Igw4vfT%2FAEuTvphju44q3AOlPfNL7bDyLdVe0oFbDZrfAc3SnwdBbqQgiV27KA9pWnD0hUijyj%2Frdg4usRaOYffP%2BiQs2o7qJscCv%2FELtKNW4950z1IGmIsOlanPBXXmOfp03b39PzNoVyT1cEjA%2FqcwurVnaIcAenvEQE74Q1M%2FW38xCw8eFjiHocnOIUrD1DbFd5ofQuD5HicopPuzPbQWq%2FuTXPyXhDz4r5Li9M7W%2FsGlrX8mFVEw8i94rVpNR6QkEsNaUR0CK7eOn8tiIAki5UnIMX5VXL0WV%2FRC%2Fsr2wjW2SotRQzSMSYsZmoofKCfNzcq3uOt98KDHymImvk20ukIgtm5Q%2BRdBlFHUsSeQE%2BAnAmtyHrqWLwD6ZerepaS68v1rKothIcXj4jn0BxvTiE7LdVSUZ4SoEraGh3S%2FFomwQm0gVtUMRn0LylxBHbrj0vfjbBeMaHwkw7TtgXlgdWXZeIUVmlej9ITNTpBsydSbwJrowlQ%2F5yVssJ4S4ZPi17YHHNw%2FuCGojzl%2BMa4ooMmVuVlUR0dayvKdjZ65GvZ3HFxtN3A4HNCy6xkk9BBH5SF5u8Fskfg7HMs1JqnQ%2B0%2FhVfp9YIlf7AAYgEWjlxTq2dNL%2BGQuKTf54AyefkXuJX4V3HqO86dLlTC12IrEBjqkARg27XR3ufyKcwe9lRBGPDVVnlwtDSo8wDn94TvufUzCQhYnT%2FVUtPdZxm4N4VtS8DGMDKLrfG2yCg0SqFRezeE8nFGbrGtWDX5igkzLvi89DSf0XEM0%2FO7XqnzSruNuj6ipMQDXduDzkooV%2BL4LcBPasCP3OXPx2lGL8V5CbJlIPt%2FSc%2F3TEaqHklWHSldfcsCQFc3Uddu3f6fBL9YEZ7dp8a1J&X-Amz-Signature=431e2138b3544b86744bb7c559e7ef5353ab66486c11157e21dd72dc8a280ec2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
