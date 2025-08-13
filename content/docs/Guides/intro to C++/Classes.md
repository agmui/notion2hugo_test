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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZZ7TLK26%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T181324Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCPP9G9ec0ZJlqlSTB4chQmfKhVOUccZPWmdmBp8iTOJQIhAPIabJ%2BbZB4XoKHaNi6VzjHfKlSyvtsj3Tc%2FtiVAe6AYKv8DCDMQABoMNjM3NDIzMTgzODA1IgwOgqWtoq6vU2midpoq3AMUsXldvzccF1Ad95EJqgf2hfptcmI4wgAFM8Xm6RqI7aNsM%2FWCFH3kPLgBxQaE4a9ne7nBSh8%2F9daZQPiSWch047CREcFbOWBViGf43htXpyBYJ5LkTyRWmxUkD6W2I3u4iUG6H91hLY3EBezJqUqr6IW7uWPM9St31d6%2FovJtwhq3oGwIHk7bE9rGxZTRlJyQ2Y27nGm2l8%2Be6BzMFErjKNeF839YLcEk6ieoAr1FrN557TunOrgFBvUZfcKD0GsPnbJ4nygsDfYqEZ%2FVNYO6cfpD61aJUuQ4BuB7poxvAU%2BEzGII9pHTsUTcqSXjbj6SmlLb43kqg1vq6NLvJZxIsWosf0XMOlWdQt3IhOf%2FOuBSLxtWH5Iuoa8u06nFjwN0f4TK65bcmikDgX%2BA%2Bz3BLH0gW%2BIKU%2BSolt6vQnol5A8cKg7XfLTnA93dUThATwm9ZcM3RIf1x5I6L8FW%2FeStR9gKXuZOz1%2FnJXWeMMzdT3DL82f89YtE6i3pMfmISMKADX%2BXTcC%2FkWHvRALjprOdBLX5LBGnRGklbXor%2BadRuImvOBKd4uSkdsfsmuUoTcSvW0CWBpsCcXAgQJQbymClwH7CUDVITVfN1Gkj6iTNaX7X7y5gJD6ce5sm1TDTn%2FPEBjqkAW2DKTiIjPcdmPW9gbsFTqUZivdvxUKLum0Agc0UTueV4Qhfv3kfVLV3fGsDQYG3KcRgsJfqiZ%2F5QcmQIWP0VKnlp%2BYmzx7e2vhqqKIT23tRBI%2Fjf4S1nguG7ocP5jkIege7ObnSfrwyqqiyq%2Bec2U05dI4%2BeuEIYMvVi5SCcKcT0trFndK5aNijPlQ1B6l9ZrpHh15%2FikP5kxlgmZHbwS7ZwrLK&X-Amz-Signature=7baf59b4cb026810c6abe993da9ebadf86d5c14cd313223b8bcbca22200bf7bd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
