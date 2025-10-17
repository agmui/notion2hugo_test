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
  <summary>{{< markdownify >}}What is `~Milk()` ?{{< /markdownify >}}</summary>
  
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46675PCCJOY%2F20251017%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251017T012528Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIC8grd7%2F12srPmjn%2FX%2Bb%2FjRDfCZnDyThKR6fYPM16cqGAiB9Z7zUVoAYxCCfBtrFCFHIyV9T6BwCJjCkPJ5Iu2dg5SqIBAiZ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMnJjkh9UPeMwkttPqKtwDqIsqNjTT0sXKlSCGG9XHnFj%2FBnXxkUjPNeKdCfWfwywsAIQbMAdSxdwlpOdBY%2BFZVLTaLoNmVBGkdg%2BttG87BoM4t1cnHcnrzoFJ0IK5L65zq4Y7rfHMHwHIT64qoMc%2FTPH8ZV3qOgR%2B6A1e6TIhjgyWNtXKF%2BA4KeGPFrsAdT8yrDtkdiMQOan1RxJRBcnQZp3o4jRLrLmGYMwgSMQCoIcle2ZiBW3Rj8JvxZv6ToalfFMfU4aUSk1QBQVSbIuEesDN%2Fk50fNLgBvRyPEBqQg%2B62bFTNLPh2f8YXmO%2BfkQOHUTQ2zTjpIOax4qQ5ktNRDEu%2Bs6IrF065hdW0eZdIDTTLfwgiOIoFNv58Z%2BY21cOhRqU6Xc0qRFC20k1tmmdMRTEzSpVwvHStXrIWsD8T4B4t1Nn5Z69rrsJPjqhBmjCFMch85%2FeqO0gRcSH4PSXDZSqdXjoAhNi42BMJX%2BaZITczoMQBZmjDDcTaxaSiWvqCRRcKqEmnV6JqwMi0s%2BXMZorjTH%2BCLD5L8rP5nH7J90roH%2B8YSrauhUhsS38fpR2uwIfnsoa6Sufi%2BpKoWlPzms0mkgH6td%2FeKGZWoavF8YGjY%2FUiScNUGORZcOVfSxepX%2FJGSdqP7WsJrAwrZDGxwY6pgE3AUhcICXB%2BBSk4UvFNCGRG%2FqrnxvJinfm5bPhBqU1Yg5SRDKulzD5Cqll99g2amNlWfLNT3Pn80%2BIloJxkaQq7aiecfqK3N0Q4xm0sGYuN1QHHm4A1ixAzzUlLALTCIyzcpcrOFuDxXlUN1AH3i4DCZ%2FNRVjEt9CMK4vzaA4vom7andsEG0rpPUnANF9n0aVliH6Oej9%2FAmKJV3SQGdE14HElMJiQ&X-Amz-Signature=585c9006c871631cf3adeb7bdf479119f194dc6aeb92589f366e02eadedb4db8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
