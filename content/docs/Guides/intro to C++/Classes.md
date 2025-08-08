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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665EMMFPQH%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T081349Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGcaCXVzLXdlc3QtMiJHMEUCIQDcuQf4mxu6Ajs7phWv%2Bov957nUW2UeMj9RWEPeLGu16gIgYJ5uNF0%2B%2BbYlteQG4ElOOD8H8B9ajCzMLcek2s9MQjYqiAQIoP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIjbTk%2FyPWqKLJ10byrcAyS9VYZ553%2BGpDmVqWyX6Yy5%2BjaOJ6IsILq4DUMSaYqfkVvrHaCu4Oo2kIY5WEAhn7Vq9ivpZR8hqZjaZuaRgeD1ut%2FfUaADCTmvYy8COpF0L%2BytNVUod%2BtFa0yNkll7VhnrdyP2v3yneAfdyQ9ul24SrIWWykrBmsHgbtnczoN2SZFKXaresQO%2BXXjklNvF1QL5xkrryWkLBPSJjiEU8F%2FvYFPXSl%2B7OL2aeGj1BrDCEB2Il71AjlptbM1dujUq4KNTJnZHC3KdDAF9mLvyDapwS22jLWG9xgJFk6QxGWNZCh5TxaEJokD5AFMebG3TPeiZILl67aCvInAYJHz3strHZ23wau2%2FVqdXed8p%2B7z7AMNVnqVmxn6E3Tt63bhIzgezW9lVxTfYjmK%2FLf0O0V5zwwKUqqNabYpGMOhOiZ0X3p9KCKK%2BPibUWReLlV%2BZ6aLubPqqZz5onkW3IKGOduCv%2Bgy8ynv8m04rU5lvry74PsQx7LTy%2B%2Br7amU5W9SJU3eoriJp6ss%2FQ14ocW09PMAWrwMJAHuTc1fan7tn1YARZqmY6CccLpXg8KCjXu2f%2BObYlSw8bN8K7%2FPRakysBacbeedhTiP%2BDsX0aKZR9MzFG5U7idMptEOX%2BxlFMMLH1sQGOqUBFII1Oz8dkL8%2BLQf%2BfbACCeul2pw7YJslp%2BCFIGtCmwh%2B6XxGlsQ3j9Vz4DMe4%2Bt9cyn7BICeMIjbGNnmCFztsHwxhQ1Lg5AtPf3vtk8zFsf%2B1H1EOTZ%2Fk%2Fi5Q6Me1uXbW%2BoAOov5BzIk5IpQzeZ%2FT%2BILdsCpbJ4VEjou0aZzMRb8WDv6EhkbqCbBwYH0vKTTziW2k2uSy1ynOLmYbi0kPjceETky&X-Amz-Signature=cc7c8babb6ddcea240091774abeca8ade5f34d37694d32c4094641102ae1e2ba&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
