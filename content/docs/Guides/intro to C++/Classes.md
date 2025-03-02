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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664VVUJONZ%2F20250302%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250302T210238Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHUkx5Q3gqCSpLO7w9xxwjj2ANpViGcNg%2F2Xy2h1jSbIAiEAq9EgttufovvjIObpQ4ah5%2FBjq9rR63fDEYyx%2BTfh5D0qiAQIwv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDD14gIGG7ZwuZgUFJCrcA9QeoXtdjoXDemq%2B10B01U8VHd0VZuzXrNEOpInP8UhKI7xTK4Q%2BVkK%2FZwo349eEuvzfJAledHE%2FKeLILbWNE5ia7ToD4HaA2PNhxzqQsOzS7%2BhMYBAmavZgAv1ktUIsGKpqbg08dYF%2F7MBbYlGIju7IwC3HjrurBUbz2AGhmY25Tcje%2BxZsfeIy0AI7H6wFce%2B24drAQYnYJLPoZfPmbmRtOYLhKIKCUzeX%2FkX%2F36QoYHDdKBn0jrKYcPEiw84kjjh8xdM25yDwHq7mEqq8neSBkge32cu4W%2Flnbh6UQjgejsIMyWbI8A6DWOfAaowV89sINAjX0uzSqmRxgWtox2%2BzlXKua1QNjq%2FW7L3uvoFaCX9R0HXnF0e3mmoyqgANZnKSKGSIxd52h8sw4Bgo%2BmAUSh4IPRu7HAXoX%2BGn3%2FCAmRQ%2FkK0V%2B3Se4SsKNE39Zg2x237uaCE9U8gu7hRTv0Nueit7PbkWl121YKI1HXpdw8gA9ZtIi9%2BdgnKiY6CZm4YODuquoY1l3x6uM%2BLkkZ8tLY5bHrTq%2FTNtT%2FauPK%2FFQWCLNdG%2FIneMEBTtOlK28DSxGBKajf6nCagT1RztQtfCHv083gYFcXK8BjyMC9tK6y8tVj6eJ9h7K%2BgoMNWhkr4GOqUBtMGitM2KIt65HZuJ2Fk6fYUUhiGmi22eyhBRN0VKPQZh2G0hWjpRBKjPmTXDpADNL792bSlm8lRNWdY%2FMRM9DKmRhA2gHfGM6o9ZKMAzD0VLrpGCVLcL5qlUDQ7nO4OeI2EN5sMKUFiJj4XN58ZPaq5OG8rebjezv50MKOKN5Fmrs5Wen6Hkev3eMB2I1obObBqwpIVP%2BAMySJUB9gYXg2Py5hs4&X-Amz-Signature=6b552d5c2582157209cb3d1f3bcfa57e1cc6d238e48b98e197882f7ac0258dab&X-Amz-SignedHeaders=host&x-id=GetObject)

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
