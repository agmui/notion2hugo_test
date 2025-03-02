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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QE3DFIPU%2F20250302%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250302T080926Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJHMEUCICxEucasZy8ky3a6GskvbK1%2F5TiH6LypnmEbffrKlr2tAiEA6qW85KEBScPF8z0FmXwOu5%2FmRb4gPeUWnxHHrmbVWswqiAQIt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIqEoFwD2FirdJcYOyrcA6SI%2Fr2yCkTZAveuvbU%2F6F0uLw8qGivwOzGRSSge92F6QWuQOWE1rLH2UZMrz1V38H%2Bsdt%2BSJNYjUSNlRcgWZzdUhxAqWa3AEFar7TwbQIzbQ%2F9WKYuF7W%2BivX53lCSjlxNoYyZcGWPDtT81f%2FXz2xJuvJH%2B8i6VyK0sTBzzTh6YoX4YsfvlmdHHMGLfq74tOSIMSNyt6iqoDFa2GMu7ZMl37R6dX5PwecxPPQdbfKG7VCscbIwWgS9kxnxvVXhncXthyXLqKUoNPph4kf5nNljQjmLFkZzEfB24F14dZQL3UAKelab0Czdz07jwoUmHDiBFTBqqz%2BxlKLwe1D2SpPOm7LP%2F17w8fYB5b5%2B%2BW%2Bk6tKKdlVUUfHElyKUpF8rEaBBtkcqVyI65AXZ7s4foKL0Gk7hkBI9vpDYu4N%2FQpJnhsjOa2EPo9W8ScXTzxD62Ktzc0ricseDCwj2CmQNtupfyvqTQeCQdibm5JRJ%2BV5wahIv3UkmayGUQfkVYLfU5sTwoZoevKWba4t%2BFR8%2FFM2Pe5JFmx%2Bi10g0D9%2BHSTlePrCqA%2BHXilwfBCDIr4PqlRsR5vaDgoKgWgW3hrG916zH1hIumYodXJtybglut6btELlCWqza2TNgXGb6dMN7Xj74GOqUBSUG5%2BG1%2BTuzddo9XatCs%2FUvHtzN6afmsNKYOmXOuuascISU5%2BF2Ep303P9U08O278p30YOfCl7rvcWqGF%2BO5GxpVAv2DkyorzKsRzb2mMW8StmNAFU8BefBXoNz%2BfVXaetZMBTx9fE3w8qVKf2jpuWvXCYeHTN7IjpFd%2FrQH0NcjSBR6mTOdXBcVlbqhSmfjYZJu2AeQi4%2BPhmfB%2FmHW%2BrHYEUFW&X-Amz-Signature=42b6467210d21ab5a66a083e1a38a467ebc62feb45fb78c56e93001aebafdea5&X-Amz-SignedHeaders=host&x-id=GetObject)

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
