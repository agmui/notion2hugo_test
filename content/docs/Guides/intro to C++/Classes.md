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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R2VXBCEE%2F20250509%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250509T181140Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAKCyn4WYgJOyq01HYasJ9i5aS%2Be7pfHPXaG6tTah%2FbtAiAEPnBFagstQS8ojH1yKKWlEigiPP3FevSjSFRU3wSsEiqIBAiS%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM1E85va4eiBKyXndtKtwDW2rTdUM078%2BWMHGwM9MBpuRLIRqgnCWw86P5V9PmDU7ClmwMn%2FjSp6f9vxx3zZSUOlVYai6aPCX70%2Bw1JYT19dUJXuGBrpeeMU0tQyAPmEnHb7nMVMSW4ojp1HeyOdYSF3b%2BSkOnIP%2BWb3yTjy4HG0pMWhtQLIkCbSAaeqI7rTbbORTYlhjDF4r4vl9OFqYWIDlTCzDnxQxwerOWksuVBdrGvQXkx77%2BwlEYKqcm3Hhg7dGQSlxxUud2FV8k39gDpw5x%2FSj4XnJCQlqufMBW4E8JEDRGF9p2s9BpvA6Agi43h8GAtqBZRwb%2BmAVOEMGDzWFQFIOvUFhzCih6zw2oveoHCeA7BKGa7AadHDIL7yCOcGruJUlcH%2Bit9a93pOP2Cci1rT3tGrRGtR%2BLYUVNVN45TyzvDybLJsUBqxDQnhr%2FYff8O%2FUdSz0M9B0r0YC9hnHtEi0rtaWiOCQ57D04kCJVUf5T4k21EnySHf9OIqOhjfZvr1z0yyaUyeeMkxfMaCxvl%2FbcIPAWqkMmebMCVGsRmSJicJEQspKlJgYpB1131%2FIO5JIkiTkJhL9mUFyk%2B4oLEGkrMeIebcJN31Dv8mDLEc%2B3t1V8kwLhQK3ApnQssDQfCv4zoPXh8DkwyfD4wAY6pgEOnwL4jsO0iOINF6RNVVvp%2F8PQBD4Ii9PQgLpKqo%2FdVZ9lsp8XNqP2Ql0Q5eHiFtjPzQqWtTv2lC0icV6VSy7JOMnZRtZgbRNk%2FH9umtd8b1pSsuNi7nj8tQtxUcUvryeMa0aJmchD1wk%2Bp9JIASF4mnucEHNNZDY9otJiLPCyff%2FQX3srerrjrIDt6NqmdKMValJlrskiGeaDXJ7wPEFw5LPX9CuX&X-Amz-Signature=a7021b66d91ec8453b638abbec8386e5041135afe8aff9bc4803482911741ed7&X-Amz-SignedHeaders=host&x-id=GetObject)

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
