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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VUCSMGP6%2F20250320%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250320T121450Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDQaCXVzLXdlc3QtMiJHMEUCIARbqkKNVaojSsG7bK5mFfzUqzfl6W%2BaCrLaC2irG6W2AiEAo0nWunzmLdY6Dky63qzYc8yXcgxCt2K62xU0OjFs96UqiAQIjf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIhJkOZdc3cdn6n93SrcA6%2BAHAmFheMWaEVHX8XNYqTekxPXaLP74sg%2BKK9aAV%2BSpgXCINRL9p%2BlgcVbBKbgX5Ab%2BR2DseM%2FivVLk9tExyIt2wzTP6dP9T8lrTC8uGahf3JhLnWWBwEc2Un5OMqPqpZnmthLlbLHJRWU6oZhwNLexwEvGWtASNy8BRPbu%2FhxIV2XMjQ%2FwDGHkhpvYjyLDvsXnuJV%2BF0y0tsVc48V6bqxl%2BW2FBmmQalpY4juY%2B5sUXdhdG994i%2BUM1pGi%2BZaP1MhKVRV5e%2Bu%2Blcm3e8XZH3rQ44tCXZsO%2FYwWRt8kT5QE3dr7nU02X3CtMDrHRO%2FZ2h25fdr%2BErHvzN7jHtnpfaBraIVzK8fD%2By1wKoKtIJLoNkRcHhDMhlB47r811DEN91EyxyLfJfRpsMZwmWqgEx8X1twBSUOWnzjzfYg4JZp4RO2Vv12uV0jVhPEgJ6absaN8dmD3QIYZKUMBqmCN5TedlJnBWOgvCJf%2F8odO%2FRmAXQoBJY18njB4fw1nyKuryvwgrP3uFH25BEfh4t2x%2FbcZwta%2BvYGUwZ6ah3GaZKgSlHB%2B3UYtO4B6WNuhl6LXPibLBwL45%2FpgDTtaGVGvts6dQGAqlw86%2F5%2FZchX9%2BvsxZm20abNbqhlkVEKMOCG8L4GOqUBGWAYQ7B%2B%2BrUR2H7Ci87SdrW%2FkAX7GVaJ7PBvFnhVanypXTP0ICkfSk0PY%2BQkc97%2BLPSabodwKdngw%2BAqEpF%2Fpgn0uz0ESzpgE8i9s04umx5%2FUNCF9DKLVNi0QgsjtJ8g2sYl8ExNS4Lg7cFnUIpmY9zyRTP6y4iIWbkWx6%2FksJ00dbiYn7OR2BE5WdV7oL7QG7OzCWrluKiM9SdzIhqcRyoE%2F9Jp&X-Amz-Signature=ece9cdfed9ed32a0a0913b58337e5bd63e93e94b7a207066d4dd4cc43da26d9e&X-Amz-SignedHeaders=host&x-id=GetObject)

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
