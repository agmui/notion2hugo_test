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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46675H555YS%2F20250504%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250504T170355Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHEaCXVzLXdlc3QtMiJGMEQCIBHZE9e%2BUqkPnYFVSNZecVfw5SUwSIp8W5D8vAffIu53AiAiQsZr65fJK%2F6TGJXrJMH4xgzUaOs9hMDxQm4Z5tdApir%2FAwgaEAAaDDYzNzQyMzE4MzgwNSIMdKJ3BApZTbA9b7TUKtwDOkXBBBKG7kJ6iedXcx%2BvjBqDbqvpB3t0hOC0cxUuy1o43xn%2F3HCEcouX0dxrMMx6DVHZDwIaSV%2F2bZivalG47sDtffpdkRszxy6agS0brqaE1dkHWsxOFGOaZ7lCNrxRHq7FJgUxIP%2BNzZCh55uT5nh2ETzEn6zNsYTOJOqhyqxrOzHWi21kn%2F3W%2B56t1s2TL40LoBvU%2FBrk9ppVV7s82Od4cnwf8%2B5ph%2Fs8KJs0xrQjghNEPgMhKaa3QGDk4eOwuUimDpqEW11sDSFuHej7j0gRJkoevXC5x5Ih%2Fjq3jLqctT9l%2B9%2FpLPqKY3GFS1PvU%2BsLlxZjORAs6iYQsD0XdaWRz9O7XFVY2Vax5u4CawcBRLR5mMN31RbKVzNkVfis9fEOBWqWj%2FgEYMp7w%2F7X6fkFK4Fa5ecZbD5aP4EybuF4oJUBiojSvw36aaPJgPVzWYH4aZIN9RnISImvl21u1HH5n4qE3uf3hPqumirDxnm1CWM4rx0MjUkhZTv3FEFBQc8KtC28gLWlq6X2Mu%2FVYPfeOhn87x52%2BH%2Fl%2BnR1rIoXAs8JRaiiu5u7UrJq0ZdB2PK%2F96Xc8qTEKemwg4ctJtG2rgdDyYqz6NSlf7WKGfXF7zNNhKAoa0CBGG8w8brewAY6pgFuoW9XP7Zitr9pKyT4xpyzieeiw4mIn7f9jI48tN9%2F8w899Cb2%2FJPgXqmW2VntSmyZls3Prq8jwRPhssqLk7rrkQMIjZRL4xm6adCElCjv%2F%2BB5XeCfsy2brTE6xuEBueUn5hQbNkGtO2L8FmblScRuEb3XMps6p4sn6E8Uh6nPLR8mnALdhPoqgrd49XFbEad1eG9Tsl1YMxtvXVZXiHqQanco4x9e&X-Amz-Signature=b884db6c056292675ea7726df8d1ee84c0a40dd4e7222cbcb8dfa8592461b9bb&X-Amz-SignedHeaders=host&x-id=GetObject)

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
