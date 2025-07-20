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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VD3SO4P6%2F20250720%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250720T025907Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICQrjYIySbyDo470%2FdD%2B1KGap8HY%2Fu7g0wyTnKJvIEN2AiBjjYdhEhhZZ%2BQM15BvKl3JEfjXo0b1nM2wl%2FHXcEkFbiqIBAiz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM6TfYoaa19NcJ2UfCKtwD8ErGtMNnX%2FdnhwjSYtb3%2BYS6wgj%2FXHCMb48FdAzkoa39sfkIQz07Ig4IbNp8H%2Fl7Ju6IyApcWtLgmeTcAsDkuywq6vC%2FsCz3hlolimt3LHAYCywnN%2Fk8AENpCoaQ8JDcwuDyxbnCxTsKJm9DT5j0m%2Bm7VtKZr6bN07Q5Xqo31nHGj0D0Fihatzyp5qhuknfRUPXZl44akYGQ8vQPyN0X5apCsvx4CaFhYZA86oiJeElbKp10geZpq9A0IyOZJPObEKuqHqzkpVcrypJSzSCDEiy1oRcRWoABrhbOpA11ExZrFk8H94ax9jmb%2FkZE6JVTAU3d74gr3FFuxxP53j%2F7W4CWuhdJ8zr0LJj6%2BJyjG4tFf%2BM2uCKIL4wqVyOiCBY3VNFUwJ04mdDgVa%2B9wXJn6xShrVQalJr4jeZv5TxO%2BU4nhOKsngpc63xFrmJmgv4d%2BW7cqrTfslT6IID%2FNRspIczWH9PqOYFZU5zLbqzRbLITEDk2WQXsN%2FAD6wLFXOcMDyNuojbEPMlGcV6Kxy1XB0qa235C7uK%2FLXbPGZjtlPr1gWP3lBjyO22EOUjCs1lHYHaLGpUe8S1EzgoVQTibqBCjJSJJGQYYb2QEc7NER%2Btj0hSzGvn5r0LF7G4wy5vxwwY6pgGgWcrma2GoT1edRZsAf5hK1alef3GVTqM0iq31Pj4KNGAa0get%2FHJqBtHJ8wXdCdP4sPqldEfZf8y%2Fa42Md%2FNYHT8yWoGnxnZ4L7cmj1Qu8aDITEtMQnOK%2FaZHCFudBsbWUbnxHKcNGgNf692zbriRP7kvO5YsZFB4SM0DPuRKe597JF5Bruwtt89UpGwZKh%2BLGO9stV61VR5DFDuA7IKH2rwItVZM&X-Amz-Signature=7669fc470231ee56f09aebb4641ee435a170f7d192c9154c46a56be10e91d9d7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
