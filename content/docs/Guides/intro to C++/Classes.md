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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZY5TIIXS%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T081312Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBAaCXVzLXdlc3QtMiJFMEMCHxojjYpWiHzQe4avfCA9phztMdgy%2FxQrY2vMDi5kY54CICI%2FQ70ma0LVJXhf0tvX0kCVzpb3LlZFxPWkoxAuzRIZKv8DCFkQABoMNjM3NDIzMTgzODA1Igw0T%2Fq2SbR39QuNyjYq3AO2fDNKnwJ7AHgT9Ig6pTdybGpoxBaPDzo1cGVaVIQqtoTpWSsQv5Tx229jKLKO%2FN6UHUUfgm3QgG31X3VqmvDMW19zbCVRpQ8WjL%2FfRX8%2B7leq6XIqS3djwxRuhO4sBtZ%2FrW9az5Elhf4VdkL6bp7taOFQYuKSxWG5%2Fykdq2b2qIoRr5YpLvou0Dh2jhF%2FF2kpnJ1LDXHxip7mqMlwfbIc4lKjORP4zmqbf97nXpQEeO6%2BIibgl0l1wj0lCz02triBtJvx6uiUYafqYp8gmskKqMRhb07sPz7roFAO2jbvCFL2nY8W0Nu0Whot67wI5JwEFiccuOAW1bwTvL8GDgaC600VDUMSrhWzIYdrE88%2BGHMlwSiTc27sg9OYW0SlJ50ONc5RJouMmyoj3zxwygvjZsqnr3Nw33%2B%2FfgqPQg5Ua1%2BUUtTSXPa%2FXoVQGJELZ3bIXV08Fue65C6ykjG7ctV7tSXXQz6bACL%2Fz6uxH1xC0algLPlL66Bud3MD6pl%2BvmTCswI7QIjmXkw6Dz%2BmL%2FTnbmtg7X69DUlGXJms%2B13d5SukbUsyNbS6CjKqykffTIEt%2F30M1D%2BkETL7%2FS7125Zyav7ON%2FWdnDLyHN9P8Qs0WWyqCia2ICsvXXdEVTCKyvvEBjqnAcvMPkT8C1a4EJp7wrAQBUk8HrTJtFolpvJX4NG0Fm%2BEi0GuSiQQwXFqtOWOd0ojcHHDgni13Aecx8xCuiI00vkWGRqNuPPGDA7b2c3EgxJQfqOY3EbOoaPK598LgVUwK6370vtDlxyZvPoZ9jqVaPUkD0Sq3mG5Ru6qDPXO9AN4oqEL4jTh%2FNhiu22Q1K94hl%2F47bzfx1psgObzPxjZ7Fq3zTUptDfc&X-Amz-Signature=0000b8882ce43565d187d35145dcdc5a4363786ff245554f926ef0cbd5497b9b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
