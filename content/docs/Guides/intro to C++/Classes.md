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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TD56NCSZ%2F20250504%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250504T033739Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJHMEUCIQC3hzEZcgTHN6qSrkMpB4W27wrBquhLTfSNa7oXs%2Bh6EgIgdjbXeohB7oKnOuTTyRH1SEhA6gw1BtjIgqYUgotHnNEqiAQI%2Bv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLcgBmKgq4CExunADircAwRNRXGcevD65Rr7RfKShP38BlNwh43XwxRf14%2BsZ5pV1DO5r2i%2F7U91rqaHOGbji0hP8W78aobj3o80L88g2KKad%2FMB%2B3SdoaY%2F0B24Xez6I5V%2BPpjM1Fn8eHxj%2FwyetzNJsIQdIM%2B1Vd5Go720pqiM167WN%2Buh7dACyczWld7TaRwEJyPreCQfVRyfNAF1xkPCC4dAMA4yzTglSOT59zOjy4K%2Fc4dLL5W6043Vw6uoPLZyHPC2Cee2JDWZ8CxGxwg43VsSuJi1q4MzBiLz1WCbfWrTiDU570AnNA7rhnrwrA14V6Jnql3a2Wd%2F0MiyrzyPZPTSRoKaVpy71HWJ7jydYlYqeEJEej2DWhPUI12VVErDMIYrcriAeTs%2Fm%2BynLLxPJOpNl8rv9yQyZ1YBP4hgpxbwTKZaNIDh1QnoJbYjMbuxGzDzpPjwL5SPbFdYC%2F57gzz0ZIXsKW6UtpbWrYkAD8Coa9PLAY%2FrQ4cq9zLiCze%2BApcrFPmHKl%2BftgRkMY%2FraDp%2B%2B4PXU07t%2BT3ns4La8anypmJew%2FyRk%2FiuceZKGcuMEu3GSzZRkVrzHRzYHKXjDDmhmi2rcR5JyjFvGGuN4PKSKmowr97iE1kIxy1lYnvHzhH66wlAzy5cMPfw2sAGOqUBRu05t%2F8dASGvd5eC8wL6xKZjhVGlFxvTSVqVuRY%2FM3tvTN8g3g2YA5KxcZJ1aFX6qFxjFN9hLn7TZBVDetw3JDVkHIVMMbgdPr5YNI%2FGgIBaR%2FdrxbVfxTCsCfP3KezvaxZ45VU0spuNRZQPfgH6h5aeM3QGO5p%2BcVsMphhYcuja6vmdcnutjdE9rO64R188CcWYkUhWOgSEbKs3oEQ%2F7aHgYR5y&X-Amz-Signature=b12876fb38c8fc5f01908c49626e8f57a4e8b6f1f0c18a0e8a638c86174830b4&X-Amz-SignedHeaders=host&x-id=GetObject)

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
