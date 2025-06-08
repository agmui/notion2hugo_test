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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WH7BUCGG%2F20250608%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250608T090750Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICnzhxgX3VQcCN1ayM%2FoVeS6aP1BRiYdy8B2VxfK2pmUAiEAsp4oDmmOreGxB22u%2FRvoq7m1yVbvffmLiNuNvK344kcqiAQIiP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDF6IJkClcZOHQiBUoSrcA22OT1CwkTNFzfFYlNSJnnzSdJAmqZLbjJ6OxIyVm7ZQZOT6npHi%2FDm1xl%2BdgoIjhpGxk%2BiRrjBNPmBynj63%2FZ8zwwXh1x%2BMk%2BFRiE944UJas4ZVZPh2GsQ5a80ebxvtUTs4btXp6QdhFYIg6GA%2FFy8SLGwrTssEjcG7YEzoEjfiixTVColWdsphNES11JEwVugIyEiCe40dUfbmaN6v7Ks5DxEffEHCiPTQWWRF0v2gI9uS7M8zG9vQ%2FlgCSB9ONmWPio5TzgUY73KGA1vRDMf1aex%2B7plezNNnU33Eo61kLB6pBbXLmUDMqzY0joMtUcqUSe%2BwqF04Ex6CO3eOdHeUh1C3ojy299U7M%2FgEGh40O12AUYZJNg%2BUKjtdtE1pCZEWBsGZ13nVFXTHMxrImtQngF2h39RqaEKhdWgY6TfFlp%2BDcwA2Jfnf5zoioEAOEcL%2BtNyM6crxSS3itt8vmF1wiaL%2FA48cRDwleuhqj0OUeTjMkPZm2TQKvMGp%2BkBcfk3R9NhLSGbJPBJR40AIHQ8jlhpZTip9mhFjBA%2B%2F0sFF%2F14x5PyM0GuGLIQWvF6EEuEe7GeSiSwcMRTyd4e0n5b%2B8rynkOiErhhaKyclk%2ForEVTCoFSeQCbUbRiWMPHylMIGOqUBrx7KhYNpoXY%2F8tP8nNRCJd0DTW5UCVj8yj%2BSojKJrfTdNkqmEkKEBfpmilkiH3Jwfs5V1CJgqlPYCc5rWUvS%2FteMaD4FFiGpA8DFQmPCHhk94CRWhX8FVwQjNAWztghUdqc%2ByVON2ooR4QNPg7MyQGd96fZE14kdigUu0uZHPN3mEfxYoLvfH1Ivq6tTVoS9NMgMcJ%2FJ1qeeTffKT8XfAW%2B4nWNy&X-Amz-Signature=3075ed21bf2400c294c587fe2fa4c5472852a84c5f14888b7e40408e99445ffb&X-Amz-SignedHeaders=host&x-id=GetObject)

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
