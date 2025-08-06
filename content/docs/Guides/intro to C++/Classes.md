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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46666KOEU5N%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T220935Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEYaCXVzLXdlc3QtMiJIMEYCIQCwpgTfzWYcybQrjP7FV8qmEKZ8HcDbn8ioJKA%2FRqCg1gIhAIH1aaGdutRf15mNKUXW%2Bp17TiO2yRKnTb%2BtLu2v4berKv8DCH4QABoMNjM3NDIzMTgzODA1IgxU6%2FxsNXlHt1wbRVgq3AMefWshYHyBGhXv5PAorE8vsIrCimPaWRxRF517enjFPq%2Bnvb8Ah9IisVQVAFqsAvXq0AvIH1%2BsAJmkIC3MvpJyviIpfm%2FWD0nPNhpZ2uKw%2Fcmus0d0i32hHhbHy7OA8JitbqZMfZG1DVfy5Mp903M37X%2Fyihwjoh%2FSm8gg%2B7BFJzIJR%2FgqZ5fgDVAYVyrpEq12QlmdF5jiZI4Bmi%2FKDK8mpIIm3%2BZQmawLhLuMqCfu4Evf%2Bhf4DEX96DwoWhMshKZUGjtha9DMIy1non0r0UTJG3giuZV%2Far2nqJgl7DSD%2BgDv5PMkXFvv0CA7qnvtP1Y8OcMH%2F%2F8Fk9wAeeZ%2FLXsXc07fp3N844SoLQ0A1pVCe30bOLs%2FtVHfsCNs1oqErKHUgR8Gu8L5xxfiU2P2mzu00fAnLISsmOgGxy%2BTwBwNa7URSIM0n4FI4WwAt1ZByeGQez24CxL3yGqTQbBuJqoW4wrglypVgZbADgEWapr93S29CKzmU3SH68v1Q0astZ0UmNbYXnaTYcOEgwwFJBaGSVK0dPtuYSKVWj8JaSuBvLPl2CYoOtuzBgrAfgcQJINuY9H%2B8f3%2F8yXDXwZlXni4J3LlR6GRgjxuikSoxtWd4Sk8UzKlJECNMk2Z8TDmjs%2FEBjqkAQ4yrL4giBWp4d4QBqzkd7g980YA6Ts2VDbBoFC%2Bd4Grte%2BABpMudGgJLS8obzjTHOXQicmHhYvFVMrSHcm5mqisISTUCwRVSjeT5wpweGQvF36s7xuBBmC4r3VDeqaagy0iSC6rq%2F2ouOz8lCy7zDjqQDrQsddq2jF9Bu0b43lX4qrYMzssJ5NLuF7vGVRxJCQDDxenh2f%2F1LVsULDxblhBSxDj&X-Amz-Signature=003ed1106688f868806cfd8dab41533f26da2899fe7dd8fd4167c5839ef26361&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
