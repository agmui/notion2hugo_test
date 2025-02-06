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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TIX5DKYM%2F20250206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250206T190120Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEsaCXVzLXdlc3QtMiJIMEYCIQDDDuO7Sy5Jw8%2FwRzIfJ6964PJhSHyDrPoafTX6Xg2lfAIhAMQlEC7BsQtpIMf1Yi3GGxt4Uyon%2BlHg5FHCcQ9t7JFqKv8DCGQQABoMNjM3NDIzMTgzODA1IgwTEYzmSGjVx53ADyIq3AOZORDmi3Bl7AIhii6cJPjzA9tUYwBWobUk6XdgWEW8OFmAVV6xfM6kKp1ccR6RDjNRSrdwhIrwonAf%2BMpnM5F5MBS1VHPn4%2FPW01lrAv7l%2FoP8mMv5y4smd8GAVSk%2BL81LJCvd9tZZmJffx84aMybaRNjyOw5E8cB7Pvxd0Neswbz5ZNMXsb0ocLSeO9WnvS3Y1IZdkImZVG%2BxXEexNNy0SXgrFjrfo73aLK9GJZNPMD%2F52atf1b5SWVgbOg%2FURDp%2F%2BsHOCRj6%2F8eiaKSy6ZdH8VbksDc4Mh8Ifi2XYC0Z0LcJzKYGtW28kwOv4qPCNEiFNlX8v1sYujJ1zPiibMmMQ2Ry3nVile5SO4EBgmkd8WRP%2FGBnY2tCgERlXjaGChJdbIQ%2FBsCUJktf9SXJPGTGTIOgNqHjhc35nSUqf%2FbmlotwnmylgBN8vWWv5IY4q%2Fd7mA1pqKJxKeWf0sydTWMbzjK%2BaqVUl8MyXyR5ABw%2FNx4XpROtJRMhEGQ%2BGeL91JZmirxGMdwNpqgeuNReNcXVU9UV5xz2t1ZVY0EQxpxs6qV9u5UMcW%2BMN3rJJIY15N8yMDDtsaNvvvGfcyD%2FP6WCetliIIuBnUdkBP7gE%2Bj%2BIGcwRjXbvR0gBare%2FTCR%2FZO9BjqkAbIzjxLBqsrXJkqon%2FBl9s8q4K58T5fmFuq2V2jREz%2Bqa4eWq1DWHxTLmLnlZxl73F4aOitIVRKWb6bVnrhR8JqTiC0SdK7RwSjzeK76uqiLhsGr3tthda7KBjsZMf35sJNw42uggpkrA0Vl4t6HHVPvK71Qxt6546U8lEgYKIQ1D1APxb9yzLDUR%2FKDREtn4BGpR32x7jteAkBtZ4gt4nIrPrTv&X-Amz-Signature=c816a0a4e76c4f913d6d67e1f418b03eb3aeb28b63a31bd887b97e8b781c83a3&X-Amz-SignedHeaders=host&x-id=GetObject)

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
