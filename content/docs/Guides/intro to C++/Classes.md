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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZXCYJV2Q%2F20250424%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250424T090910Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHkaCXVzLXdlc3QtMiJGMEQCIDzUs8QjiK1hFEqyddkUv2EwUmSiGXcaOmkWWO4xfKDfAiAvajhsrmk6iEeyh6haLRQ%2BiyU3fvfojmzU%2F%2BHbWgONnir%2FAwgREAAaDDYzNzQyMzE4MzgwNSIMmVP7BrML3B3pjPQdKtwDOLqg%2BExl83TW1x7QeI0pPLW%2Bw59nIQswbzWJWmI4cdmuh5m7KKk9iGXhv8RXUgCBz2q4rOxNSNlDlgInncEFaQRdWLTQFEd4at39cTmtFzejIRB1NXzUsOEfIOAZGoN1ZOJn7po1gqr7IqczgCWhgFiH31MVzWQgbIVq9qdxctjxti51btwh5Q4da2BhPRFbYAoiT%2B1FtX7yOjkBrjIugHB9gooS979C8PvOF%2FZS7JNrd8hcQ%2Fly8jj5xLm0GJAc42pxtfXG9Jj6pVvYiqvVR6Mjo9aaKzcc8hgF7Pb%2BA9RVT7Tj5Um5Cst7pqB42M%2B1b0Ajzrc7cjlljOW8%2FtQd4MOjRDnJLbbPXKSzSdBckNP6eTyDQYa2dUJ5kqXNGE%2F2Ow7JACCLaH2FOG9SvNIFLS5%2FMaDnNbJcfmYcJyyvifChFv8GRo3qTr7lSFlzVmibjzFLRiQAyQEwveHHfaCkZi5VXrvlxPKQPQeXOdCW6%2Bm7KSnuQYSM5eIcTM%2BTdhMwa3%2FgzPdzVTFBua4kdmGdtO80g2L2OifxOmwTMTlpucAUpGDlyiszIRCXO%2BhPIFGHA8%2BqYx5cSwExhboh1nQb1f1mK%2BCCcrCBPDQYKwKrT%2F1asZ6UDlUDdP5FIaUwyuinwAY6pgHnYwPvU8NyGaU2Sy4xseY0HLkZqQ4lBwBkFoPDGehPhtmiPGZ14iwAzAjm99dtroaYGsknodnTQwrqv1DuKUw0L6h6hSpcGr%2Bifn5eB%2BMwiecr4YZf5SwO5uSMftZQH0LfQDItLJzpgUtBpthSpI3o1rhGud1WI4bINmAtWezcMVEfDeRRvzKWBvzg%2BdCeN1MRqxqhBu8nJ8b6gVvmxEXjMFyQPmrx&X-Amz-Signature=a278c8ce9d99d6f90aa93b447a571ef2f1b458c02507c3c5717eaaf1424867fa&X-Amz-SignedHeaders=host&x-id=GetObject)

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
