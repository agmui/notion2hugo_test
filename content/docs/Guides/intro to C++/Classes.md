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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UAXNKZY2%2F20250319%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250319T070813Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBcaCXVzLXdlc3QtMiJHMEUCIQDWWWRUb%2BrJ875xNYP78tULhUdNHkAIw0%2FWSlaWNNonWQIgWZW9dQylwRDLJsBNr%2F8VVdX23cSOrwj1eI2ltVBDP90q%2FwMIbxAAGgw2Mzc0MjMxODM4MDUiDM3BqIVlhdMlpnqisCrcA4C9wHVxS4miAcruL3R6HORa4MJ3h96hlK%2BTLTY4LYZPNQSbmh5Oc7lZa%2FkWbXF%2F08aJx5ZhkmkDat6YZXfIW65F9sU1LNcCX1JVWPAOykkFr8Mxl1gaW4qwJNw9Tb7RQacGBmlYYWxNEsdi%2F6etlvSSoZ%2FZF8FfK9KX869RoCldlX%2BOer9DSR6Q5avBO71zLCBkbl%2BeunesJpB9iiXb8edAloJ2iBRcbbnc1QqZvsun9rr7OnE%2B9bzoP2ZesVTN1ni0QxL322LKTTbCJsA9axeZrxdUgo8hP1Z6WUUHa0D13bOp4%2B0BsqQTd1s39j3jsAPe9VHE56DMqwWmk67mTIiaV7YUgNtJXsMzkjnJyxgxv3QKEpCpMDkNWR6OzApCgasW9%2BbA244%2F8O1IZFl%2FuIb1d7xPtCIGGGYxgGso8TKGUaAQT5LkVVAQtxtDX%2BZp9LX6Vf%2FZhXIbA5C0kMcbiYpYFR1RJdvlxtoQj%2Ffjd0VdfAv2AZYO1ZUGSZVHZfJIWrlmDEq6Ipb3zTbtZ1w3kXxMvV2KtkLDZqdXeg7iqzB4W0HLaN9480xLqwvYFbT%2FXr%2F%2BAaF%2FMYIU2g7UjB%2FPEeNuk2unUhv%2F4hOJRK9hu%2FAECBCLu88IU1HQz3cLMM7D6b4GOqUB%2FdyQrJMR%2Bjd0rW4CU%2B20UmtvGA6wDOjF4hUzLqAylL68ySOhz4VsMYixLgou1iQ6VelHjj%2BIBAQ0jl5iD1lbK2sEaZlUWffIvcsXrt3WydvaRdICa7Fx8zEXEZ62%2Bf%2FtHlx8lhjClhxPBbwWoaPYRh7Q2eOqX4Otf70W%2BFn1pqYNUX%2F8Nb56ckFiIBsd%2BQ%2BE670zYApWjaVAz5OGETeDfUwJHdsh&X-Amz-Signature=8a47e126d288d0557fa3fa4ee9448b35c9023b94942dd0c4591a2a9ac01d7d7a&X-Amz-SignedHeaders=host&x-id=GetObject)

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
