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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XW5KK5P6%2F20250516%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250516T004155Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEID%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCFA3YZc1b9S%2F6o8gLMi%2BW%2FYLXcaqySa0QJnIq6cXjz8QIhANjPgQ0F3SaDTe%2FgFk0vUfYqcg42%2FKQYnFlwIj3GBOu2Kv8DCDkQABoMNjM3NDIzMTgzODA1Igw5jCsWFJ64Wsiwicgq3AP7JapP%2BFnZs2r2hc9HGxW1F6FyCd7pNPfw61v2TXhujYnQTUVF6ypWfc4z9WCdgq1EHUHPZm3hP8OPZdonhsQi9r4LBrViSidBKUEGLVQX5raTVtQxlw7ZJjUtbEe25oQiI9z4NFQO2IwBc7kkkobKfvXUSH%2F8wNZKE0DGoSbOU0YXf9ic6iomdGro5HsSwsH5H4AQ%2B%2FcboGbJoqS7qeO0R7QzIZERrv88zRAunS8r0TCBX7qU%2FtrHNd0xCf1YVHvn8TwEu0H1E2f14hXSg0xSMMNOUAx%2BNKGcpScBvlxaCB01OtEuU3xOjDYrDLhMdg1kQFvjOQtCJ1mqJDb1ZHOng3ItQh76M9RaIDq04ZFvHfhKdJ5wi8UEl%2B3xv5sIY08heXDudhRsbqU6fgCyeEj1TGqcOsJrkeZLYgJJcg7mnTlt1iOvqZm57B6d4v3pNLCWlar7KcOQmvjnqiLLZHaFqo7UfAfwmQyYWS6Lx%2F%2FnX43qBopVHuDEB2xpUzmcFOprGCFy6xL2MwKxWU6Xs%2BmCdwrNRkHiNJb4blx62YwXQoOW2urB%2FeWY1Yk9JLKPnRjlKbv76V7d6BAICIg2VjRYRJ9TVtyFsnLlxOI0407X3h6IyAM2Y0KWnOXdKDDi%2FZnBBjqkAWiAuIjmNyRLz7NUWhzUsqQDCWdnGb9ZLsflmZSscuIa5Ya3hpFJCApw4yqjcPoY%2FC%2BI5IFQNeufk0ipnCdZV0tCrm%2FU4ZVfiKBHeIwcKWuLwj4ABjBdei1j2JODEDonRQvc%2FJT8bpqwISHknz0Sr%2B4%2FW4sNSudIzdCuDQOhcIZU5tTp1CvPN5hTg6S9WfmS%2FGGDSaaPccejdDal1jDhxR6WCjRH&X-Amz-Signature=e047090d3c2898d8534c70ae581711e109af054324e7e6a09fabd0c6e8e402f1&X-Amz-SignedHeaders=host&x-id=GetObject)

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
