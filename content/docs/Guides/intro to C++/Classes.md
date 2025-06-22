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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SCP3QRPM%2F20250622%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250622T121408Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAEaCXVzLXdlc3QtMiJHMEUCIC1jlmtAIpW1QDysPW%2Fou3gFO7eF2KA6FI7bdRvs6O5oAiEA1gmUCVPN0QJrwBxt8mlvGfGaGG0uPGVLNYOt%2FltFiz0qiAQI6v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEq5jV%2F%2FY0mB%2Fo5sGircAzmL%2BLPzdXgJDsYcYP6vEUygSchq%2BhPSAqVQuupxD8nrP9hsS46oDwxpZThVhrh6cxKj5sT4KVsyep3Gs%2F2UKjsHBJ12Zqxv1HVAFm2%2FSpsXiI9Z473kihpXsQX%2BUqrH4EyDCdRj15nfG9LpdLjjAvHWjTiAgSjxvhPL3PEOm6et6Sc%2B2yskxGt7iJlKDPIqmGRjf1SAPO%2Bz3jpKxdtzxkSuTgB7q47ypZAfEApmzKH9MI1hvKV%2BtbBjU8oKnAIItYpg%2Ba%2FCqabzpWdQqAfYsdmMX1WVjX8I5mEg2iL1wHdmwlyPBmQEi6qRqF6BhtTRXhWw50MT%2Fh0GKhDr3w692vI7LXz5m8O6mwblmfS4L0Vge02h9JoHjm7lu1NE%2FYGJEd%2BtSqX4dx3azkVjKMUuduyf2VVNsil0vJQ8efrW0wlhoNzYnyTS5tdw77CRydCvuyunmWqHcUyJD9u%2BZyTwaDAM6D9VfyOS65cv5vdRdN6L2EIHX1TD7DNFCKsVz8kEJ%2FPTHPmA4TYBReivxkPIpMcB15il3PaMRbIp7qGp9obIyVzhJKqfshEe6Wfqv3FgsnK2nj6Lj08LaHEUegk6Kxw7jKUJyXftpHMPFP%2F80RqFV6nMsEID7fuAkrnUMOeK38IGOqUBbn2xhdkmVCV38rH2tfr5vhE8bsGkwDktQVScN86eAZoEMcIj%2BvF4wwUVJQH%2BzEMez4Djb%2B9GVUwWWmWQNKlyM3OepEOMaQ7taQUb5M1txcVMw0MQie8VnXvgF%2FXnx3N2oXfNZKQkp%2B9UPBgHoY9eZpH7E%2B3TRcO%2FpxuZTaPtBpQ0bYHGhO56BbLKwBXsvYxOy8Y%2FUL60uQ2sB8kVfXJDU0T4f4rW&X-Amz-Signature=09cb5d968b0dbd7d795f86051f11ab756bc9b91a3b209243929da988ee674ffe&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
