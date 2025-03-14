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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TLZ7OVKZ%2F20250314%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250314T061111Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFCT0c0FVxObXDsf0r5%2BZ1EUhUHvreOuuBNQFl3vqGyLAiEA%2FhErvF9mAv%2FrOojnhO49GDxMnOVRBwZXcbsqU7qCxvUqiAQI5%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJ8rZeTqL%2Fv7DPCGJyrcA1%2B8mFvJrm8FotOCvikhMdkbEQNwAfyVqXti1fEGMLt8ZMFjIpphTQ5xcNCu94QSgSX61mT0swu3plA1%2B9u%2B1Os0hlVSniV4QFgljrll5FQS2SE9dUVKrnkqj8ct1IrwWIAcyNx8D4KYYxghRn7JjumSmyK%2FoOzRlYXeDfkArWEzXBwWdWK%2F5TkOnKW3MlQ2Q4M6NTkpcG5FqcuMEbkXWPeLSLRrJWe4UGPic4bqtncfdZ6bKRHml5POS2ivwcTbfp42yFzRH%2BnPj%2BlmrKUOKrj7sIsjsu%2FAGWeo8Vr%2BfwASiqiclgOIIBE9gn6KRs%2FV%2BVXX5crwiElJKRIAl2B65q1UkEaM8Lwtiw%2FcpGkMWgtIKxn%2FZhzGtEQCwKaQyzEwdeWRDlrOVUGS%2Fo%2F3b5pdpHuJOVwnLFoGoglHGEutMRc8z%2B0GlRT4nJsljskRAwCSyvEdAQmP3N7w14kb04O3xYs5g3x59O8buOAfnLa%2FLldCukQwLhAE5STuvNz1YLP6D0wk2N8DvLGrJQP1YMNLW0mNnTczpfTVM3iK9ip0bN0hbgCieuNWv45R6YmuoukGL7Z%2FtLqX3pBlpZPDBWjCXhlhaH92JBMjr5n9eI40s2wPQ0toEhzSw7%2F1DDpFMNyLz74GOqUBnhf93bO%2F6V13YiGUZ28PQDiq1HH6A%2BWofx0V5zdTLayt5OhoAKqzUZAnmMdzQX0Jl4hujwtBaLsaDqbze%2Fft4f1Zg%2FauH2NHm%2FuiV6ARc8VjJh1WclMkLgwtFQVRx7%2BmrWQBNIWRB9aV6KpXqPUsGtUdCC%2B7PczWbEnUVU1h%2BUN7UIeagpCJyFbbFQtfE3DeoNfRP46MzMkmv3KaQiWvrmMI3xKo&X-Amz-Signature=de92d493f67973da9d3ad18a86b41fb3fd78f2f514e1cc0992e5d945b3b77586&X-Amz-SignedHeaders=host&x-id=GetObject)

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
