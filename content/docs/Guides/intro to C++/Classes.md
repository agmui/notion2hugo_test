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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UKMU5DNI%2F20250607%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250607T090803Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDehxjTXxk6jtdIv4kVk1BuSglqrrAyeTcsjgnt1bvZNAIhALDC1GnKyj1r8EV0NCoGRIZUsb1MzrrofKFWBA%2BneKGnKv8DCHIQABoMNjM3NDIzMTgzODA1IgxGthagyheLZOo1q9Eq3AOHF9R1xWg9lDAqLpWQ%2FXNTQSYd3jF76JL8Vj579oo5j1qq0c%2Baa%2FzJNBKYKAF0JoCx4ALT%2FJLzknnN%2FpFnk05AmFelkaANEUIRhh47UV2Jns3s9QXNhJjxmufGW9fMOfmhgRF5jgFsrpq6aS0IqILmgyRa%2BV1ccXJq0iQjS0puTrebP62288FC6Pq%2FcJKQ2SWfyRNlGk3LFnhVjTWmI5tMgr9RnyhMWjTkxmrQFZ4rwS2kkacM25Q%2BMpU8WOn7VIth%2BNKwxhNt2PxjVhiuctBl0cqHV%2BjZ0MKEIYzt6FnhEQGLm50%2Bth8oVHI3oomOPZbMhG8ItRUuOerGwXGPDo2tse73juVunWveJW9te%2BzhS1AvsR1D3gVGJ%2FmdOt%2FgBngW3wGMKLYFD7qXpNgarZ%2BtkFY2Yo0YGB43q6Y6fsHUq0Jq8mZ3jH7INTw2gvw9CUikgLyqo%2F83%2FwGnBvJawffYz5vfIRv62MgJkrXTobJfSUY7LToB0hrQgijMFCan9VXkJCeIP%2FOGJljl%2FdFM3iQjY9d5a3Tlk1TDH6k5ZpF8KjAmElNtABhVE8ilZbfeAmELjBZwt6AzLXOz7qnMY6IzGGv2wa2iXQsYJqwBf%2F3Qol3GVdaTw%2BOidxYPdjCT%2Bo%2FCBjqkAUx2owsCvlAET5DTZALhXc2uKsAZj1LhBW8P1sJJ09Rt5iskPykyRS4mUvCu%2FI2wVL1P09XorMiX11I84U7RMvUF00mRUrtEbnUiofcRwsx0CCq2aHFVPHunrYsUTq3TMQ31V6Y73DSmM2LCr2KnfXh7yEOeq0MTOo%2FocIKRgyI2%2B4tA7nhLpZodqEOeMoH0Jz8g8MlbNAZniSr0DMVdQjr5yjnL&X-Amz-Signature=9a8077dc50243c336115ab7d2f2a8e3f7fb3ead757c6e04a538212028f69713d&X-Amz-SignedHeaders=host&x-id=GetObject)

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
