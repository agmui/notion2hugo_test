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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666LOKVS3Z%2F20250311%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250311T090905Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJHMEUCIAOYQdoNcnsjDd8T4EWpCbEXCrtiKRFiG20SpwvxffQvAiEA22Ln1KqR3QRYzqj9d%2B4XzZpd17SeJkhd9oMynqvMVB0qiAQIov%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGP4rBxwLpgU4%2F%2B3TircAxSn078%2FPwHQjmHgmfIzzipIPKx2D11xVmKga06838AV8XcU5vjyD67g1U%2FGrzx%2BWRofpH5%2BjjLMr36L3CK8A7mPcmXns6I8MXY0On%2BY0dqSJlvdN%2FggaB%2FFvDrZyLuRsKW5Aheod%2By29XnE8jrcRLy1Il4Yz57NkIVdkP1MprhBkU2xBnHp6mIl9%2Fp60044zqCe5MrM5ywGZl%2FRnbP8p0POTWHO8WPDgzSU04dvHZsiCMh0lXgznorzognZ4ycUIRpQcgf8C7YvCFRqLrit%2FbFF6qjqNE1oG985Kjpz96NFWy3ArKvYU8JOS5T7PaEgZIcXCMaa1%2F%2FJzJtgO%2B691%2FSWxzvsbaDjFunvWTFtQnZ2AM%2FkKFjUDSpU0DDwghChf%2FCryg8A2Z5Y0%2FdF1yZWSmqT1j%2FeXIPNo4TEh37qLXvqfLzuWZ6T0A6tZXv97SsKd5OhScmZeEXcbv%2Fj0Z7XYGE0G9IXIlHAhUjS3UjLhfOAvMHO6ylwtLAX3qoRiT5USQEepvaXTu0WPYw%2FbYwbOEsycA7l7r5m9GS9eKm4yhkSkedhlCIYfgJGCQ5j5P7kvmHzKqf2yHeXbJSlfQtrXYF9kw41Vyn7TFgt1%2BgpRD3wR6InY6R93Pd82MOsMLzxv74GOqUBfWCx6ctI6gVwhfAKgj5KCqY2PYG7dvjxFFBO1zd5TXJFIdrMrhLzfCHeWgqGuylEQZIfp2MccA1YoAT%2By199%2FANVryE%2B3KVsgWng0vuLxVILy20axJQVpdkYrmH6W%2Bgjps%2FLb7sZvZ6OQ0SNZKmXOUP7AUCQYymWg3C4TQbnYQnulf5pAku%2BfO3A6ZxxAd9Ae0jYfdUIK0ilNuLxlwjypjwKebwq&X-Amz-Signature=46b57cd351b9ee9cdc0df9f875dbb9db0286d50e9899848da3d6cd98e3048eab&X-Amz-SignedHeaders=host&x-id=GetObject)

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
