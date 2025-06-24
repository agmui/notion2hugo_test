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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46633WTETBP%2F20250624%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250624T041921Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECwaCXVzLXdlc3QtMiJIMEYCIQCWUqXwDUtIxW7b7lz%2BhhXZoek%2FnXdFdYDAPe7KNv8RnAIhAI224adj8jA8AODjL%2FFuMTyHgAJzi9xOeYjgphM0sV2rKv8DCCUQABoMNjM3NDIzMTgzODA1IgwCs7cw0rYMqF7H5kAq3APm5ag15bTdYwRE8NYE6PsOY94DxyCiiX0UDm3wUGHN5oxVl%2B2STqa3NFCbWLc8%2FUXIw8rL%2FC3jgBQ8TlNfm9mK0F3ydyJv2khCkV3TeO0IFjtdMd%2BkahfPFE%2B71e8Y5B9BxgvwXROKq7O%2BUlinPRYmnLXnWgPeE1RR4Jxb5%2FKL%2Bl4FE6yo8Fk5qx9WJyz0WhsIvSk1EwmS7BQNW6%2BFpI%2B77%2BKnTNShGkPTg14aOk8l71i76J4ptf5lnVvJmsEFQEOAZnWQwHDRBzOhbWyRiRTMCFZyQfY%2FVxyxy6m4bewI%2B9SzJ3q7ArjEAqy4ObxB0%2FMXN5tEb1zReoFMM4Yi5H5DQUs9smczArR0kJc7rf4Vn%2FVJbGd2%2B%2BdO3dWIFaAzb80AAmkLTOuRhaiz9dcyVtdZdzYpi3Xt1bODf4gLuYnvyX2hsprB4C0dBVLWpHnslqTUVyZh4mYHIDwtrTvw0uW9ffO5LOhJyLLNld3lTkQ%2BKD3MKn85n2nenk8TbPxaPeVhN2s9x0pMY%2FaFaD9wnDA5gJya4D4UR0YEfOzt6mtyKso494hBhaAe9H2DQ1ZRHNGU8iTp7xbTNAQcFB4pnIjPWxTwh4zQmKJpIkuEaPQDi1ghU%2BS2l5YFPmYmLjCczejCBjqkAQURZtR0NowL6RcC2hIUyVoH82Rc6qLO%2FJG0LCh40OcXCcb14E7lHXdzU3TU0TM76TvIkj22C8E53wpxCIVRz0KqN9X2evI8O65IcpLI%2Flhicdr7vBt4%2FXyXAjcWDbBpbwJJdRsHhO1xzzSV%2FzLo%2B%2FzkP1WFvwdhdDLf714NMDlSxXHADMzytJR169Usxhyi1bErb7YS6GmHsp3yI3UC06BM2xnE&X-Amz-Signature=30fc205e0bd9e2b83667ced3d7176430657d94299f49db9210070b8f03f361ec&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
