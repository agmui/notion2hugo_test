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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RGR4ROMM%2F20250413%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250413T160846Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJGMEQCIGH2zIm%2B5wcOrT9c%2BCznP%2B4e3wkkwpFJulzFQ3HGu19%2BAiAB8gBtH3EaksoVi5tfcQj8vkyGF3AvpETu8LKInPZJ%2FCqIBAjv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMPVx4mePOEBvCUFLXKtwDpZo%2BEGMkJ0h%2BlU6F0euf%2FDGRihMG5dEXTGqSnm3Vw1HtA%2FQB1NXY8cwOExcywEltDlT6VzXYt%2BGBCC8U3EV4MQe4n1VGYDV%2BvnvsyzRWifQF3j9%2B1KKzPG%2B72pRdnyh4oVuCtQzep2di3O%2BK9L5%2BoVr9QI%2BlZmwoqQP1F0RrFIKEJnRJgkSHGJOr8UDeHs2vAFyaU7vVcGf7ZlZ3zuhiIXhCHUfeHIpU44LqQop2Nof2eWP1I8qjuZaluo45ITcGi0WtfZjuoMcZf0KdTKuxB6j3J%2FcISNnP5x6HPoX633rfJj%2B0Gs3MxHBY9eL5UNY6GnjVzAsSIze1xpYZqInNF0MZ%2Fi1k%2F1cKuC8zMgjPd93hmLSN3nMuf1UzXPbD%2BQdIv%2BfBU9slLKlYIneKYfBiLhoRInKEtN7Y%2BmKHf9YXakitZe6qqdJ%2BP%2F1H0KMrcwXHeYJYyG5gLsLreJs7lbP4h7%2B6QMA1nlCjDmglrLwpaV1lSPuNtAfmJx9SpB3r%2BvO5%2For9Zs3ns2wEurc%2FvE1TTv4kVnzxBHzdZXlm4DBDcf7AMwjZdp%2BgnBZzma3slufU%2BpIeKzBioV06GLDJIeK%2B5NZgl6VuvavZWjZzYQzoJydofehot85z7HzlbhQwrYnvvwY6pgHj7khg6U1l5w3PGu%2BhdN0wW0%2FDXr2K9caG3qrejXo%2BvFsIIo8W3udW6zCVeafHPctejNPtP88lkHqnb8pkDygcb0JZEu76IAbUwUpBUwMHhdeziufPhj3wJ3%2BlhUI5pPC9s%2Fyjb4XGFZqu6iS55pq1PUlR%2FqHxsxbiHfNGEvM5TdU1BCKy%2FJZl4pyOIEmGPbXwDGOl3t%2B7Zw5I%2F7a%2B8L7EMbcDuus5&X-Amz-Signature=5184a44d47a6bc2b87c8861dd73ae1a373eeeca742d678fe6239ae45c558b354&X-Amz-SignedHeaders=host&x-id=GetObject)

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
