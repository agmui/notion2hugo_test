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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y44GDWJ2%2F20250202%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250202T180848Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIE5I0QNkBw5SAGAat0iPlZoHCFraqt2oLBpXKmLbLBBSAiAN9V1mxXuhrzO1FF2bLU4%2Fsi%2BcYjRc8ruGnSuKaqXAziqIBAjz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMmyQ%2Biww%2FOHL5SkzqKtwD8Dt0YL%2BHJrAyRjzI8pMXR0DazJckk6p5en1eXFfxHdhjTv8uH3dfxu7BvKc%2FS07qSdwgfcMQYZP8oD1s%2FLVwQ2Qyh3lJ671F8U%2FfDP7f8pFmWZR1rB0AkMQ6jIbUpLj7rmdS0g%2FL54Nl4kU2BiFobZ%2BP4yyEPAZz2tKjKzRHW7oM11Ljj9pBO0fTi8tIIYwJrDcaBeDghZyOrUnEs3aYGUqDZFLdDc9bYhfSGqEAc%2F8NziNjAsSAA%2BXjujW%2FS90wRRZjzlrbNhILthP5cy1lC9qSy0Zcwvorbvg2P73Y71nsWpI3bveWQLB%2BCDFyV0wGepo7QU8xocI4hrOqtyg8zLjxazT6JjthmOrya4c426HEAjMclMDyJSbUrs04WOoqEELgQBf%2FBCfl3DRDBZc%2BKwqCl%2B2gnXwFThfE3bnr3%2FrP%2F6%2FF9Dh0LCpBhkNDhF4%2FW3d6mhLGjLVZqu9QZjyQ6C9JhpHoD6blcqeFF64sbjDziCySOdKWKjefOH0rNE6Qb2KQQ%2BsW9PvY3AdCQjP80Hvhc0kIGy5dniaLfUZSyrf0UD7k0zL7WUjC49CuZ81abnyGEhpxDZIjAVLf1ZC5T%2BKG6zjClvOkYke2svCe9kyjkhxljHcItu%2BjLRIwruP%2BvAY6pgE9wgJ3LQ7y%2FDxX2xlrEW2zH7CTFeMvWqttewdLOvjgxMAZ8e52JwDwBZoQEkt1SeASbVN8yh7sEDfEmhVEk7hvC%2FnIATbihoSozmtCA1AvNdsguF0TUgiP0Naam4aMJgccaIKv1Rk%2B5GrIHNbfL1GtWOMu5I4JSWzxNyirygrId%2FB9izJaBw1sIAcfhpdZ%2FZRWWjBUHqheokkJQps0D4iZxnqefouD&X-Amz-Signature=fb5103618fdec68c419a81e3608e3fbb8ff76659a2a5306ed156ad3472e79ef8&X-Amz-SignedHeaders=host&x-id=GetObject)

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
