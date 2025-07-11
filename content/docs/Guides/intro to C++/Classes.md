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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VP5LYZ33%2F20250711%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250711T121600Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDnYMxF4YY1zm4e%2F4wObBUqT%2BLXl8zsFGUzrtuzg75u3AiB1gbnf5ean8FwVM%2FTzACyBBPTPBAHso%2FsDf%2B92b13QXSqIBAjV%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMKRLaCMOE3DJR4fyqKtwDWOLr1T%2Bo7kjkn1LB8CsqLU1UGb%2FlYtJH%2BRGCbHDpYChv%2FSwyfw7C4xpcQdH8tLlQlM7Fhoi9VUm0C6MHNlehdkhhAXZLQxO3KsGoPlhRFC9CKu99ijswVHYlcJMsIaZAF%2FjHpPyOOeTl8WEfrTnf6Fv%2B34r1mW77qtWYxXKIp9pQdNnwEptyLRGdQsZn2Me2rBG7zufS2pwZJw%2FgZXkwAoauVIEy9ty1tAgMIMoG49%2BrYAaI78HKrgmvWJYrpscR0IBwTIkRxx7cKN3Ph%2FVhZAeWEweEOYV%2BB28eT62jESoHx%2FChozJNZDdwUlMRzeYHmhQdMdvqHTwIW6Tng0fwoKcYYw73kzqe3GwRwM%2BvjblHdQZDtIawLFLqONuNaWUCqZFWLKBRoMUkqAYTSJ0sAJ6WcuBTMZ%2FnMMlB47kZ3uxEzs8i89Jh4T807ZZHtBTWilblqm3A638RduwJqwJXci%2BOBlucyQ1VsmHQauGwlKOOnoYNfiEYJTygkpR5jGxwlWCTdD3yjtv55%2Fz0hHyd09DxQ08c9PW2it0A%2B4DfKHr8HvBI%2Bz%2Fbb3cE7QhLF57fITCbpd6uRgRSocfRVbENGgQwC6CRPZoaVlfA%2BK8lRJKxGIWxqiItVt7jPewwyf7DwwY6pgHy00cZ2WivYwljhv5WocVNgrv%2FuY7tubMdlCZLu45JYJh7rnpQxFd2ty6a9oxiPNLq%2Fs27xmyoax4844vz37KLovHDvxjIUDvnw6XCWxGQNY8dhtOs7s1b3vX%2FHoC2aRkkGRFaLvFb6MoBvIu%2FPHy1LvWZxV7ClBmUnwIOYuDy0rR8eaH2Actw9nzj4rpBZubLj0D8XhFXNY%2Bsl9P1scqDRjNXL1e2&X-Amz-Signature=024d5875895c5b57da22637481653129319171b55f0f6c7e67a0af6bb886ef3d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
