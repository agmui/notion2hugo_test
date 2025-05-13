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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664BP4XW4X%2F20250513%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250513T041238Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDwaCXVzLXdlc3QtMiJGMEQCIH8Q47e7CdeRnVbHgjLInjVVhtd54iXhqkRCD8eprvyXAiAaoGv7V1gW7qhuie%2Flqcy6GErtV6YL5R2Ejtmzc9XDryqIBAjk%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM6JGLj%2FH9FTtXsx95KtwDpNtRD3F7%2BrKl446WvS3ZZ6b7POpbsbhmXNEhPDTW%2BXZViLl7nOJP0ee5rCsCMmiTvVTFPDytXyprh%2BiDAOqY3%2BfpAiS9Nd1xCP7nv0VUTUmuhTdN6zGs5g2XcJGCb0efqRYiibW%2FWLpAl1oKLOWAg896mgR0uj%2BS42TslgGBp2zyr%2FZgOQ4F5X1xffv%2Brz6Tw4O2nEOZeH89bgAJAJXIF0FWYuGcV4mXrQ6%2FYOXMpI8iXATwocO%2FbDqu92kJcwCG781ugZiogfpO3efdN34hetz7IkBGvEYQwUd1x4ihCHHzL0cmVwAqHTWkOXI2pYvnZ2l7J29Ll1fyil9OI4NXKul6pqC9poyWyxO5v3%2BtRWhExYIe6tSA7afgR8XXmMTbsWxt3pF0wgVw8Y811fDJTU0uwGz%2FYufhO%2FKuy7wGKEJk7rEfgACCPgugia3LWj9MD%2FBqmeaSg2E9ZHdUoE4zwHIAsPbJ55SVPflQujZRKS8xKz761INtNV7AAd%2BrqLvsvLl6ovqyH%2FtRMAQJ%2Fwv3RBonUnVR90xNFuqUJA005iy6DHFN%2BDZsCZ16pVUwp4EaBS4jE%2FDGkQK702BKW29Winp%2FFMosG0J10GiIuNX7SQFSFWXrTauXKTP35EEwjPiKwQY6pgHYPP%2B7%2BhP28tuQAZV5VXMAAz2kQE%2FukRSHLRjz1fvF1rag4HDU6DSC7w63qMyxdcAHY3AqfDadEjTlPCKyg19k09V8Im8%2FBEb1ZEW3o%2BqkVx%2B2gqYkzGA4ibP4zRvhs8XunnQlN3zSHXQMKkMx7Xl35zKgy4nGLCdrMiBVEhWA3Y7C5d1wnwt8M8UtWhVE3jU9hWZM79k5GvwWI4kxtkPAQ5sLiJ44&X-Amz-Signature=652676f74f503687306604f3326c1da421106579126046b979ed4dc927befdbe&X-Amz-SignedHeaders=host&x-id=GetObject)

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
