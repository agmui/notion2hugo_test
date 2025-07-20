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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SBRARFGP%2F20250720%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250720T051557Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIB51ocuD7YYonjrY5L4pvnR%2BhnWgVxe8EIl%2Fi9qAdcT7AiB3ITWS%2F6QMmzRuZ4apYY6Q8AZORnvJNrMT5yV1fof%2BHyqIBAiz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM29bNWy5PvAaa%2FWTfKtwDSaMSNbEG4vYBViB5IG8iqK6B56gGEhMyVmQUF3afOMeWF6K8seOquSVOZRusONnmCiegH4pmcIQ1sQYO0n4iVEWe2WcIVeSXKfl5fEGSrQlNMu3%2FctJ5V%2FgEuFQxlytAe%2FGMV9tfexHovyFIgaOLrAIelA%2B9GuYhzVH9cRAk06QLYGXcd%2FfuLaCDKPByaeoH2ZfDyfnXilvge8osciNuhY1zWgg%2BButDNafhwjKQB5e7Tvn3LPzjepKAwPxhilUhX3ulzv1csUfjIFDFHaei%2BArVJOzIvZLD5Nscek565teus8%2Flxe55bXRNOs6mqk0mLZIJNg1ByZOlKt%2BhcvYQVi1cIPvEfUVyOcr4XhKI%2B4NFkPRCVzv5kwtsu5ZK8G6O7VuYHyDQ4fnAKa07cfnkAVYXKrSJdESxk8o1oSv1sigx4weiykU98sc2Gqeg9XqXl%2BCgcRd4vgk9HfB%2BOmQ68p7katCq%2FzKnOEZaUlYpZwpV8Re1296tOQym4sSrBXtsOxmH8dwhojwXXB%2FU6TWj%2BOAfgOyCVvbqQHRZr31v49j8eWQJfLNJCXVkNQK4Hiq9FL9SDJxouifNL5oWg%2Bnz3UdxTqJSilt7LttgZvtfmT%2BX%2B2npDhASHJGVGnEw9pDxwwY6pgGXi0b2c5zr0BnHpFf%2F2SFDMtu580sXseohyi%2BWF9DWkMYZKFxxymuIYF8OGUFm93C9XcTzcCcd%2BBpjAPlYSlL3mfGffhJku3icENx5NMzl41MaMPjpuWGHjYSyekacIAtTHHpZ6KWw%2Frbr2IOhj3KwE11QhQtjwT9gvOy5mTejBS5v3o0GpGGfabykXcWpAPR3OALeSo6e3jl9xV20tlxSCzQzZzAQ&X-Amz-Signature=b58f0e60c653e7bd266768debc735e3c3e0d751fd100c5cbee1514bb292b2b23&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
