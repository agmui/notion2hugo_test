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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SH6JUMFU%2F20250214%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250214T131525Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAUaCXVzLXdlc3QtMiJHMEUCIG1kfy4AUSxYquSX6WZBAFtlkIj4LFjSnsCLr99rTgWqAiEAhGWRZe5msbRx0Nz9Uz7TQlTsdZlkYuDw3dMmji3rUV4q%2FwMILRAAGgw2Mzc0MjMxODM4MDUiDGJ8LudGP0zJGau5MSrcA6i5QhW%2FErpUtU%2FcqoCMeD%2B%2F8KVUsfVToDzA8vl73Kx4HZjXF%2B6gnD7dKC3a10Ez1lc4Xc3lqpApEMnm2rmdN4%2BoD101M3Qe5PGqbXBv2bs352y%2BInZfEKk8sFTF35FCYt8MT%2BP35cxwErMa0Z%2FiTmVw2RuFGGmtoXEBMkVgVSwHCA9NRIzmrHEHb%2BJ208V%2FaaBb%2B0v9gs7NuZk4Q%2BNG6i2wfNbpUYjr3xtTlMhvxc6u2D%2BVbuDc10LbjgXlTNy2f%2FEMgF3mgud5pKZpdSn3OBs%2B4BHaPE%2F0s7Nng%2BhQg4DRtEw%2FCysyKZkJvHvw8znp8qVoGuYKrwHGlpP%2FkdF78xz4cL9UdZEVhRPJXKKr5Pcdg5OvoUzokeiS5zqccwFqzW9YuuKQ6Y7Npysda3a7tKiwMQ7zlRMld1hY0dTRhVCv6w0GvUmb%2B%2F16v8auBeD53tiNnuvHi5WcFWZhC14xqfhqcO22F6yeiGfWuV60ovH%2ByTO1TGwTFVh3HuklHGuPJRNw1ge60uzo3l5GVH6knrTHv15RhVUVPbRJmNpxNFNOIH6EYka6n6V58omqAH0kGskcK1GgHp7KqjJchxUJWxzbc18oNLYZP2%2F1lc0HBPvu%2BmJCxx8Up%2Fo7vWKdMIDqvL0GOqUBjHd8UHeSaTfUNXsVMRyL3sJMjbACdYLwFmyGsHeEVpNXjRRrbR0BWLmo04a7of0NhjByAQ%2BXDXw8F3l7lbwl4vVbXz7EYlBakJUa0RYfBymOptkeBTmTQIxOXDXhsYDJotG7Gu6AB04QIPq29DLer8WV2NMCiE3JRx2zeXqDSzwNgYQVwMLagsIyyhi6W5iIN1wuj9byUby9fsR%2F2mymIdfhgEzt&X-Amz-Signature=9d03fb99ac474c8c0e9e36b420171ab0ec5ed213804f267d4442f758d5ca2782&X-Amz-SignedHeaders=host&x-id=GetObject)

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
