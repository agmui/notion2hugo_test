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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663XS72FV2%2F20250313%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250313T081058Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEvG%2B4x6U4CgidHVqOEMD0wtsssEmmV43NxPaWcKDqHeAiA426i7RwjuYkRcduX3SNl33sLYUvJJUccdbLHE3hQDkSqIBAjR%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMyuzV%2Fb8OqC5mnaO6KtwDdXHysqcP0nbrGrZ1KrVshxr%2BVxq5yYrP60L8eK4EwrmHOjXkP8WlubbXaLpokVmcxiME1vKLit7b8rj4PjTBuBltN9S6DSF78ZFuKR1QkmCqoOe9UujOMqj00hKBJ6iegT4kWq%2BI7njSwNyRpp5zJ3zbo19S4gnrrM0YhvMrIPH6nlIXhtqb%2BATpkJTehBsvorqs3kJUyoWU9T1rdBtiYQPlVeBGTwDaBDTiCALgkqbZZlWgCpJ1cyRyDONbg%2BjIeOdnXJPCaVSblpbwvnoLITvpS4QSkmucNJUmiGVvV0CU9YV7HEp1gS07rx2eHii9TmfJSAoncmISDXN1cQNVKzTSR9vUU09AlqX9rhYh%2FhV8I1pgCely2e9gtEghiAr%2FwvodvgBBZOrtUzbchA%2Fr4k8E%2BDa8NAgsahJCUMguCslgRzo9MdqzCaPgh%2BrV5DkMB2RLkerfr1xfWpUwPHIleP%2BiXg8jr1sdWnZwWGIw0hOjF%2BI4cZKfF52VTo82YSmw7PFknYbKqMNGoFDs36%2BuJMj1xhayspRWaA%2B%2FB0cUqJwJ8kAnsUGPJcmiGxU%2FLkLKVAIWJ567yE3Q0DUZrDga9AOuuPf2S3iU9AogfyzQwyLOaOUsnO%2FJeVYuFsgwxKPKvgY6pgE%2B9hK%2FInHwavkjn0M0Bp2uONwiZcVGYiY%2Fq0sCK1r37N8vj%2BAuCftRBqcZihmfOolGkxfBHeP%2BTT1wUW1rl9awnyoekSKN9uKNxkDLfu8i6lRXOL07LYb7gJlbAOsmfyD1Q3nvVG%2FXZERHY%2FKzyJlX99zIt5yHig8aTYazL1%2B%2FTZ6YM%2Br6p4wQqD8J4hhgQBzqzSaWn34p1qBJiQgCoHWgzuK9C6Bz&X-Amz-Signature=14d1554aa63fab696edec367dda5482b970ee8aacb890a9f4ea6bf08085f1190&X-Amz-SignedHeaders=host&x-id=GetObject)

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
