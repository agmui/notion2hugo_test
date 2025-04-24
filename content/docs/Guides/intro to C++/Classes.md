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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q5YFYNMO%2F20250424%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250424T200931Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEG508Kwy77%2BY7IkZiBlPLzaMHGjOht0zyw6EsxPSL2cAiEA0SkHK%2B%2Frw3ZF%2BF9mnz%2Bnzt2HQEqgtq6BtqS5%2FCHw17Iq%2FwMIHRAAGgw2Mzc0MjMxODM4MDUiDKbkDJubCimS3%2FyxhSrcA0EIU%2BoBjmqJ0N0xEUhZX4qE4s9wgD3MzN%2BXbMFAEPWN66PMM14YyBkScTGounqvUbyzvusxgRpAlra6wGMnhrkEkvAxbX7Ud0dATa08BY4hG9Lw8BfoqGvHHBDcE4L9VawhFkqyXHQc%2FKzTMQDWDECS2pgP4j3%2FE1nPrp4rm8%2Biz%2B0kTinsj7iZfboiiRMlGsdkJAp4QSNvuGVVQFQGNuAMS9xtDmF5YciENEULO8MbQGQu9prmypzU7N4GyZ0jocxKykVvZJBtr7KSminlCkesYlJYJcSpInntF6GrQvmRLwp421fz%2FmAHhThFHcHPGzj8NSwMe71osVWGDOJYfcHuge9lRiQLMZ49l%2FB%2FZgfL%2B500hH23aidPpCs5McEp%2BUYRoDwUErcqhGWhw3yz0rgs7lti%2FpyZA4Ytcmkb8M3rxqnwAV9OecdDkXiI16evU0ncOL7eZ7s64fk5W1l82COfKzw0Kl0QDRahhQRHyKRebVBZ93e5za82l%2F%2BcYieJOccgspzg2%2FlFoOIx6x3EZfb8hSAb84duMQbk4SmisLeQ4IM1PVtELA4b6yrN%2FvD8UzXltMbRv2bAB3mHvUUDp9KMZVHTBIWiC35xKUyccxzVN72pwUldQaN9egtoMLKkqsAGOqUBXT3g8Q6De4vFsVvty5GVnRcie35u6IlIf6taP64rzWQYPB%2BW565kxGmA7cHL30k7l8%2BBEmiKZ%2Bo5RnhwRb%2FS4bkQ8wbutziMmaZw4BhnNVe8yv08oBoeOc4QmV4GsVhYzJtbbDe1WnB0TFMpYEWpE7fjybix7svj%2F7BzsdO4P7HIwDtP%2F2w6Qf2ViWPK1bOO0r%2FwVP0JtRP04OxAZmVj68Ibh5p%2F&X-Amz-Signature=6f846e110d4f77c139e06c59f6b26479b1e8d9103f368a3c3c60df667d30d379&X-Amz-SignedHeaders=host&x-id=GetObject)

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
