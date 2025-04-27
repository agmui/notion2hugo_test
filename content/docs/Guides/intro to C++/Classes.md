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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667ZMHUO7B%2F20250427%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250427T160822Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDxgbGQEi5m75SKijnU3w98eSenGe5BTv4zmqbmzzz57gIhAJ8rqCWaSUEU%2FFKFjueBsAjBPeCcT7d810KvTCrvjKd%2FKv8DCFsQABoMNjM3NDIzMTgzODA1IgxuCIx%2FzpLXVa9E55Qq3APec6FsqhhV9LfkEHUsZW5hBBKaWdoyp%2FGCgMwUte1aBD7dRvO%2FykxEGZoeaaiXo0hUbme%2FnWw%2BhW%2BFNAMqWtTUMYY9vUGLYQGNawU4QqP9%2Bp%2FtP4J0seSrFm3TqvitokOEeqSiywMVj4QiXX1WbWMXUqD7cDVsE%2BTktgfYRmCPhdJEYHLQXty5eZzC073bUrhME%2FVia9zX8QD8m2wpa7g3LOR2JG3H9deulOIwH2JjaCBhw%2Fpy4o0W1je8RaBzlSIsEOPRN%2F1x6D1MdeGSTMRqob5SKegEPmE9ZcPXTshLdc4bVNBTSEgLX3bNseEHM8PsBxyi4Ar1b9OVxUq7OSw%2F9IHDMMIT7WXw8btfhA%2BnMbqBGra5%2B5pkc%2FRzkHgvtOUc1WdShBwEszaTsswFwncCEAjdwQojYX6RVepS7lGFb0%2Fd50tY3jmall8hJvHvdS8bvoUzc26q8accjvA%2Fy7mEkYeVrCw%2FRxsn8gnHo1hPpJ9237TkYtutuJSgPwKXpl2hLHjH3LK9Bquy35TNlCuM8VnIajnBoXfmrm4vlRO1ny9eVYZYkknTEF3mqKgW32PTQledfwSVjwtsRjNkICq9PFV4OUD%2BOVw3TXK4zTPnMGGyTW7iXB7d1wMsKzC2jLjABjqkAWUqQmSXdnUwELNBi44nkkVawlYcX7tlOYZZC0s4V7q2ciRLExKWLFcqAZI5eXIX0NSzJCDlZYMhypnZe4VkqxvptZKAmA3UHhmGeQKLTkWdnvryx27sQ3aJqCnREdIpft7lj5pd0k5w8eyREBUQvOrOMw7Lqn1uQew38njcLktqqaTC%2BYGI3hvRKbh%2FLEpEKNuUs0mOdYHI12Afh4QC9L4oCxk5&X-Amz-Signature=d4ea4bbb6ddb5d05fb3ba4d56cf25d9b2d9d306db1e1c9eee4ab97d33ed765d8&X-Amz-SignedHeaders=host&x-id=GetObject)

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
