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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VYGXPFTG%2F20250320%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250320T040958Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECwaCXVzLXdlc3QtMiJHMEUCIE6wg5%2B1hqtQX6LFfsI0b%2BYm%2Fg3WNjL7kv39HN7AlX29AiEA3%2FPL7%2FZB4LgB233gg7mg2E%2BKl8psZa%2FiETjxHUOdQrwqiAQIhf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLWHfXZ%2FOSbQDNQm6CrcA4tjGCcCdwBPNhyoufx%2F6WF0j8zHNhgOD1q3HzeWj2CXPd9lYmCF8Ps8c4qDi1BARkZvXRZGjUvIYrpQiGl%2B%2FaZnkgwda8ncqmQLsT6USCXIlZYUi5hDNkGrihBP4gvZZVxGD6tNbDvTCpbrTc2fqhXJe5d3Y9HAwFhXn6%2F%2FvaHxyjhnbjGr6izsIEvBGh%2FoWwKC2f0%2F72Xgv9%2FPtT5npxxwSjP%2BzVrUCpFBxGMIjqp8mIBZ7sFzvOYOfyzP7UtmdbrsYy3LVLPIZOw189VUscHJk%2F0UXQSnWVQTu5zbCksRAbZNums6y0Ap08IKbNySZm12JrminsNSBl5AOSO6a9WSHq2gySqpqApX9oq8bhTg51SKxxS2Jw7y0vj%2BB7onZNftdkXCzqROxkbvIc8q1l9WcShbEV2wyPkiAftQ6yOCSno53gcKaqh3bXhmuHlZ%2BFpz8qDjuTTMot1L8eRB3M%2F023h2KdtqnvjhSQ%2FLetj3JvajjkzdsYqlxLXpmftV4sPUDdA8qr1YNj36cJVSpTAZbw1hienzQHslsxX8qTCxJWTH5C5Byv2cQF30V2EMCl3sQX0ANYkW8FHd3Q%2Br3THY5kqOZuBi5fT9HND1RO9s903huXGkg6UmJwGtMNCn7r4GOqUBfmwKAWeMxPFeEHeBkMNWHMjxhom24v%2Bu4id2RYshvcuKBnCxP8iQDBqIIYUTAN0vrtbNW9qn63e4Jm8iGtmeSpxRoV0jd0%2FlKl%2BFOSU7oyvsZsYsmxaQfOqK5ikV5U%2BddXPKLKfaiwIXftNM440y9jWyM4aJ9ju3L1bkLPZFw09r2QBFfkJLSS%2BKZp%2B2PBOcriQqnokn7W9l2vILWO9AxnBYllXB&X-Amz-Signature=f0f2c75e14cbfeea098a3d54aec5c6fdde34b02ebdda993fa3df16b4a0b60e80&X-Amz-SignedHeaders=host&x-id=GetObject)

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
