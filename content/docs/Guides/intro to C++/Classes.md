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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VTEI4XWC%2F20250429%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250429T033044Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQChAbIHVFn%2FNlJjZ%2FHa1tbDjI8yQjsEhSmUvnp8ycPjHQIgamcP7EQWiD5DlmP0UuGTkBB4JSc6lLa%2F0VGKPMKd6OoqiAQIhP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLApW0hJZviWpnP7rircAxUtXm8wb23piyEmQCidwrOLQyESp7WpDkKGWtKkTbugCrzMDhB0tSD2MBUVQIQaMtnnTXYJlzrI0KlUKIMwSMVMZOYqxR%2F3mfcP47WVYcpsjMkEO6DTwL6dUeUBOrfKaJTZzSi447HOfkvcDXBM5WOGqE2nDOZBGa30672yVboamaQGPcaCtGJSQbW8hwj9iHrmb85UcQPKtc7mJ%2FyHUo1ukEB7rtsejd%2BUzszWSunE3tFdAPKXZjuGKYdf4o6H%2FfEelEDGBmyWjY2p0UxkkttlELfXnEXRaAI5b2P5ewcQZ0BHg4iDJntf1pxQhEa%2FMv8NNSEHSz2CRVkpdT2s75AywDyxgvBWbstQFRLpNcjq9ywJNj%2BNZo0w7%2BdeIauSPLj%2BqF5BNnsLGhAHl0IDtb2pa%2FT9ojs0BQjg7KUHCJeu%2FTzb0woJXykzRZXvPXx4ILWbkBjsRIex0K%2FxaTfizfhhDEyRNa6fuaSjYicwr%2BuTrHXUQ9a1ky72YmPLN1vfMASYDfGI%2Fmqi9NjtQdufAoUXZSBo5FuZplprD9orAw7qBR6auBe%2Fn0qwVXVzMyB63jdAX9fbR4Uqa3dimCixV8rMbZVc2oeNzCj5DSwpjbctq7yKZnbG20%2BRv%2B7mMMmCwcAGOqUB%2F5NIrZje5CbbFbF35laYvO3qb5t0iaLUq8pvaN670OSUKO5pU9E2k1we0SjOfxAS2SPqRChSUsFuZuXKzg2NY3kJHeZbBJ3%2FSEIenALj7sWq4nTfPkJo9zRw8zH8xQJF6KScChLtHxl5QcCdYFK%2Bl6UzI%2BJpzUyXZzCIQmmDXFK1R4AJ4VED60anFMbxWoLlCqpUL%2BWcrmnSWOPu63lBvMEJSVan&X-Amz-Signature=2aac7099ddc151b2917f52498f613eb50be8c78b3c1cf90cdeb12152a9eac643&X-Amz-SignedHeaders=host&x-id=GetObject)

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
