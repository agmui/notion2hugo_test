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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46634P3QWQO%2F20250411%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250411T090901Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEEaCXVzLXdlc3QtMiJHMEUCIQDpz2xhwjPgbyq0dTmeLWGJss1WLHDvDjYKsc0%2B76C8ggIgQJaceYAwus5h%2Bq4QVwAS4xkXFZ6iO4mZbZwbOSOT6w4qiAQIuv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOJqBs7BPfpwOYQdQCrcA8GOk5wqrEQjeF7vxh7oOmf6dqlocKENzrDuD1w8m1suMl44J4y%2F6N3E5AZD3Hdw3tN0JRQxoEtD6AI%2BermhnhNCy%2B9Q4kWoB8kpiSrWJnrbRFjA5wc80hyMNc97cDxemamRQ9yeJbyb3FXFZ3dV091JfBp92QlY6AUcUWWVwVitXZxOdDuRsy4tFBFYWqoefIxkcrlp7oJiS42Q5wZrAce0Occ1XPAWNMHH%2B7SW948XSOPcbeNP5j2wvLIUKjkmcZtm2PFqBd%2FFSEAvezrGRBnEIq4G5gl79dN8dfcqQymQwZJNBBJD9hjbSEIax0GWHMFgC7vzt1xAEL4uU0fbw8t99RFPHxBm7OIxm3Udq8awlleKAsb2YMROgnrFfcAXgVS2i18ODlhVQQzvq7c2G4UrZmLUcQIULIUG%2BsdQPkCoDGUa0b8IwIk%2BwfXFH8yUCZrDoZA%2FXVIRYRWIupUei8ROpCMNFO27M5V5J%2B4V44HBN2R6kMcsmW4TAdC3adHg1ovBD5WHKB5VvYNbGjSqMMM9e0G3pmkXuD7wzv4uHt8qlg6wRBvnuYgSWm7BHb2eM%2FmzXSGd%2FnEgobqZ4sD6YAPEcJEaiyQ6uzNqEs5yT0yMrPg6Ef8YbTUPOhvtMK2y478GOqUBOdkaRFUM7vJS%2FaBM8Zucz%2FDn8VAM5N42volDEOAkDTM0wKLEKyLbdhC6v1udb3ey76fTzZDRVG1Zl6RXndwG2%2B8Tq%2F3TCyaZqIGnqJtyUfGZCuSjdX9fmdwFHATvqTK8wGbQJgsLTi7xZmrbVqpEYZVlnHb2UWLghdYmO388lHxhPCveDPyJDWIUJpj6OlvZesTLhRiTYdjDglwiTH%2FcabnFP8Ag&X-Amz-Signature=571d042cccf7ef0b4f0627472d978a96a5b0debccda7c0161354fe36d37f0100&X-Amz-SignedHeaders=host&x-id=GetObject)

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
