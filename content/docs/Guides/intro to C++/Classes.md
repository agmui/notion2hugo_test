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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RS2KHFDS%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T005125Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDfi8wT0gEKONJE4Hw5dJQDhG7M%2BmqvcedPbLvMnd4Y3wIgCkCXFGCnxSC6R1ObpieGBrS3RIfUD99ya8MXN5JLTNAqiAQIyf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKLe%2F5IZz%2B3joYsY1yrcA8dv6muLdW81Z7jjFCoqoJDGASnEUoi%2FEwzi7wmrFcPaua4viZfLYltQeJaTn1zouX4pOqquq1kzY%2B8e1tiO68NDr9Paxb1fl%2FuNy92%2BkKzOEDK836u%2FYQJTQZzZHAqHceuyG%2BiqgSek1rQFfzkLtl4YCSu207R4LZlbuwesQWEy%2BiYncAJkBleVoArkrsIozVjymszLO1CGSIoc9EoWvR3dgI%2BP8mtff58jQ7MNqjDYb6Lcv4tNbc%2FEb4kb4FzYA%2Bb%2Fc2GGZw4yDJ6lzWHKKICUQwHKsLOuTBPRTatDVmi9uUx1GJ7ISsO0ZgpH9EHq4uicey3L4lQr%2FzKMt4Vgpqx1EzNTOlHolrczyQxh1unwudfcK1OFBO9BB9RLJeqCybIMkHkfXnjuOxXkOrnc40zJ9rXW0GKPViuKyuLyvFRoa0kCnCZb5vC8drtzztvo4xH5QCRP45vyjjkr4pQdZZ%2BuiAXsAjF3uh7K1yxKVQbvb7KdZNFajPkhj46kwfWwLbkfiTZtC5pwYdXHYArFTD7V1%2FDjexbWnSxdXkaCHsnzgyHz1KRJ2YViQ%2Fk%2ByQzfFUbcZLW5ZroOZGX5D%2Fo4vuwobUaTLgFpFoU88PJuiVUwTLK1netLcWaRPnuyMJez38QGOqUBpnlJkEWVwwTWtZKweZX0chLbYxolhFlx7b8XfyNkOdVsH6Ykrqgl2rJ6e2r0ZsSZrzhm8Tkdc%2FovlDOuPcY6mpiC5HlO0yTukvJOis8MomBjEW8W4zOta14SVAymic%2BLNc7hf0dAU1ziXEVXkq8MDo2KSLNPi%2FoddZJWrTR7qQSvnlT6lfPIcbHpwOHsNvahsvtmlDDlLU6ho0nAoTSEwiFRH2oQ&X-Amz-Signature=bc13a3d1a5711d00d5ee77a22ef711f0899b7a310062b43b2b80de9ae0df9114&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
