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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RWPJBS46%2F20250615%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250615T230801Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGcaCXVzLXdlc3QtMiJIMEYCIQDECj2TTNIa4P0hnPEau8kYAe%2FRaRtWo%2B4DlBMPQYLXoAIhAKDjr1T6wt4N4O6FkW%2Bxxhlul%2FqBb5OfIY6AlfZunjbLKv8DCFAQABoMNjM3NDIzMTgzODA1IgwRZ3LgT0YGRBlG1l4q3ANrtRoCIdCKUOPAtuUoJVNbV5QNWBZXfHQ2GLyDZSxNz6F1t5Xkc5ASVcczbJCQmpQ%2Bzeoc%2FFZrRTPc9aoYmNnHshzDnST9ZhX3DZWTdhrw2uMT%2BPbg4ZbuzGJ6xbRPQ6FNSTGU8%2FcO%2FWVuJkUqiU8aQHaU6wbDWH8pzhhYSV76cAzgvUXObXCiuAuAbJMufPdGJNQSTd9OkLofdUAIygxep66ONJI7dYO0jMpoGtCbfMTNV1u%2BvdnnKBkzqmKZBTFO9xex2mAR9sxGi7TcvWdRlMobA6ALdCP8%2B%2B6Aht7PNt9dsXAFKCsw%2BE029Wpq39zPU9hCrhMk29UOcmRQfu79l%2FZfJT%2BzOJjuEnrtzlsuTfamfgcC0tnmCavnQZ2nxmyYUzbrKa7oh0HEACAGWWFPQLcARDeBtOmo68Av9x9epWwAp3dqHAKYYjoYN5WfCcrvXCcB9gFHjVUi6%2BehSJGHJfH1TNEUHKCsO%2Fyyhzhcpk78dCcekaDSx%2FGhgRu2vuRL1QewrdA%2BcBQ12NsJwmgET8cqy%2FRp4RSABMuvcr0gEWzOEz39f6K3%2FHmsgBCaC1Zk5DCEygZeW7fs8BAs3hei11sC%2B7o3ohJkAt52vdXyFGZeMAYOSGuRoRR7jDCJlL3CBjqkARE1S6uSgHSY%2BqyhjNiWR%2Fx2m3IwX4R6MKnGYG%2BOtmiH%2BfGSvwWh4qbPwtjsgE47Iu9wn%2BLMLzz0oLALacsrZs8bM%2BQ0W53%2B094fS%2FsOTyR0%2FIuC8fhP7nitn%2FSxhCMIlztKlpFCUeIo5tHUGRKWcuoRtJfFrwv%2Bf0nq2HY6YYQ0F%2F5WnJmO1qFonJY%2FVwqtSf7KMyr3wNzD4jp9IbK6oBte3zCv&X-Amz-Signature=880b52b00c30c0810a0f1352f4826aa72b3357b91b3852dbbc650f097922618b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
