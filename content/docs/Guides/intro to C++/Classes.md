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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QSHBPQ6X%2F20250304%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250304T190209Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCyHvoLQNltf19jjqP8Crv8SVcxKXQFusNb%2BAKgMaFddwIhAIS4wraJMNnbbqtybphPoOc9HIRUCLIHEuyu%2FQb78WpMKogECPT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzGtZEdXx2vrRlohR4q3APUgEoW%2BE%2BxCgZFC6EOHLttPiIsAQ00IVla9KRGWvZVZw%2BVJr0lM1hpghsetwT4hRUGmg9OZPXhRG72N3v9z7VsQHW%2FI7qd91VKhCJPrGoz3SRQmVdUwfyASr7xnk0sYCQloPr8kbOoTuzLIDbxs4mJqQevU%2BGofe42VlSnr%2BpWYud8XIEU4BwImCTl7TU%2FDmhq%2B%2BfCD%2FRkOOrx9ukk0CdKA7Fnj9VWwOcZcQX2k%2BTggr%2FNLhtNtfZw5Ly7whVQEqFU9szy1d6r4IvkJFWGln%2FUlNsN5KwYrbe9mb23kW7rK0q1LRDv6JqyCYTzW0fDakPtkJPcIEdnsL4b2kUVqEG%2BC1ns%2BorJwbPcEbBEHVri3ac6AoZFBMvwP5%2F17zxTwxeYXuEzWw7cpIaTNCQGBBJ9G8lIf%2Bumlm1i%2F8QXkEO1DCOvmfqvaMT9tyEgJ79Oi2%2FLfh8yBrKAeKZETyh%2FFWfywb6ON8IDbR%2FnyNNwZvoCAzZBr6N35MD4nfxRgiR4Ufb7Lajqtmsax6ON9iu3xK1fiDzFoqvzY8YnhQ8WuW6L5tx2o%2FtjHTIH80Eql8FpGHE1G%2FOunavxtIyOOkXViLGq0HT8tvcYzHpAYOxAXAWGsHs4tGgc3WvCHrCjEDC1mZ2%2BBjqkARyYSjFmKWA6E7DtF69SG4tZ5oKk31ccXZ3Yj6Vj9xeRTnGgFjsmZzp%2B24ELCN7azl768Mml4LQsr%2FK7dK3%2BMeMjnEtfzZSBEXxjjNIOOmyRRTSHsvRboXHNs%2BThHqottEHLvbghsm98ga6wrWHZfjaB%2B2pAHNz6E0qa9yaaUt0Ew3kBvyYK3LiNn2usnjCOjS9AHcuPdZEJlmPUGHlLtbeAiCyX&X-Amz-Signature=7f9b4c851334df3d5b07aa59895579516b7ac9bf95021b55f14dbfaf8792c7bf&X-Amz-SignedHeaders=host&x-id=GetObject)

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
