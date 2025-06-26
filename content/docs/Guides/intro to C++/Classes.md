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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663L72CSKO%2F20250626%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250626T210810Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGwaCXVzLXdlc3QtMiJIMEYCIQDmvpdU20CGd1jPCciti7rnRXUyDizTh8qyLtJ2k7%2F3FQIhAITqDUcJFh4O%2FrMiG4bkiVQU0AqQ5DftIZU3iBK%2FSN%2BeKv8DCGUQABoMNjM3NDIzMTgzODA1Igw1rhY7keJOmleNDKAq3APQQ1VpX8ntk6fcDdgZR%2BXFPgf%2BbIY8uUDhR5l%2BbtcxVkXCrNgvEkKA%2BrZ4HcPzSLjvqwLVUM57w%2FPBTvB%2BBUmL7pitMKRgRGSX6YWZbBPTlhkqYasNq%2Fj2MdID1auXee3qi1cWlqDWpW3GDT%2FTbi%2BwccU8rEU7xKwHXFXnANT9oTPm6R2Ct410mSHZx2lQtPCpPjO7GHnqr5fGjGn6sIstqXFFSZfAJC33%2BuRsHxw%2F6%2BuluWfgRG%2Fd82MxyoKAplhUoXW6boZdgt7IPOti%2FzMTbYI7JrqHlW4w9pqMUkd0n%2Fz58Uj9F5%2FNf0tWjdAIGEF29ABKa14iKJtAyhT2oqe%2FYQfvYC%2BL4AyoDFMpOFPKDMLQjZ3GrL36w7noapyRpb72r4tgusP2VqRGt2J7adN%2FqpNs1NGukahAxlwksuRYpinPS%2F4kVFP%2BBnmPldXgv3Qd%2FNgGOcIEI1eVJhSvAk6vG5%2BmyR01FOY3q8WjER%2BaH4HSQiKDS7oXciFjSYFKcKnBXdKRE5Jw6VaCMl%2BQ7bm%2FrRjlnW09wtzJJNKb%2BjH0Jq3wgzzOr6SS8UwZpFsRIyJMEOQij5sXfUSf7uZW1oqpGlLL1ClNbSLTvUjyMy01qfpgyPiSIXrs5ItDFzDWy%2FbCBjqkAbdYVwLgZmD9aipZSxcNf%2F0WJV%2Fyisl5C3UqkJYpi%2FuIRzy61PxkjnIU%2BX9YublBJClhrNE6l%2BqOrIZeuW2%2FN7sYP%2FIJbNdBWhMkBdDGs2MLg%2FgFZFs7Noyy3SoLeMJXRtX%2FsPQ0VTwQ62Mw8G2TggkmwmqV3i1%2B2lJzR9KNAq1uF502%2BFvGgM7XdHCFBCe27SbJo21de%2BmbOcjXSArEsRCxn6%2BQ&X-Amz-Signature=56ae6582faada63debfdc5c5fb4ae872c5c30ffa2eda66190f09e3c83662a907&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
