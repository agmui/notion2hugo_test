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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WKKMSKII%2F20250212%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250212T003557Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC9vNvny5s3RA7X8Y0Gl%2Fk0B35AFYMte%2BoVZ2PGHlV9kQIhAK8IyHD8iHZc5O4d8%2B1vl82hn5gGeBEkklTUkah9TmN1KogECNz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzG4%2BGzzfeZ7oRmsT8q3APqRDn1WNOlXH%2FQa1mz0VZpLEg11KrKWmh50yNdkkgtQfUH2MqRGCMTi5DWrDj74XR5O3drYZWHuTJK3UhwW8jPXCKKOHir6z8QLSKzv0o%2FwmRajRTdUWPiOqtWLs77F14r%2FHQ0w9wfuuaedWKM1Gi6Ct1WOybGWuTCU3VdeJcu9OPLwOmzsvpSe1bimQF3YomPgZhuFApLFGg6H8PUbNFv4PLP1xxyz62XvBGXuk17JblhesgiHi6JwzhQ3DpRl9DyO7Of1DPPyvzaSNgpLI1sg6i5sQYYMqVuI1WmaYHGs84n2H4p%2Blbs%2FwvV%2B3hwvCpmfNFZlqaFu0loDFxjid34P1sACnU%2FdBfz203Fg6BHkW0nkGxAUt3xQitSuz%2Fb1Ou8yUInTGzJ9AuAqsnBIZGH1wNrR9ONMNoaVIo9GddT5fhv4C2x4KZbHu4JTFdmsenbC7iuBwhkNvvpIYrpYQa01F%2B%2BgVooqFqOuSUVaTz%2FLtxMa3KNowKOhBWZ56C%2F%2FO2X3R789l3NcYdv%2FKLEH1jKE3qqN407cm8Pz7mMaQZ1JCiCfC3Byn7X5f2w%2FT47Abq1xWuImj1LTp8FtJyGnXmTsnqkr%2F9qhicWi%2Fl3qGOhV4eSbsHJz3oL0C0myjDjyK69BjqkAb9hPQwF2DzPSMrCH9r8JQGJkI8VwwgDq7qbxOObBGlSyUET0XXlDkflNCSa2e45pmKdmlsNp97UVfQh%2BPluyXsM6F0Cw9v7WT1SK0KVfPEnvEuoTkE2SMC4WWeIY97SilBPSg3%2F8Nwyuv48KIkWXjbk4jj6ydm1jyc8mxzVUdDOIfJPPlwKG4aAIMGtV%2FtboK1%2F5CPRE5nA94hz2GODTBbl0A5R&X-Amz-Signature=3ce43273ab62d9db350b6c94f86fcde7db625f88f50498fe856f0de24635dfe5&X-Amz-SignedHeaders=host&x-id=GetObject)

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
