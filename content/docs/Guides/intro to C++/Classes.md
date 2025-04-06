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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YUFBKSRS%2F20250406%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250406T200817Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCJmfzfxN0XPvpPCA%2FWP%2FMlrkaHVc0gknn1objyKLbwEgIgc21mh2%2FJq8vc08xeAkSRX8bZTPZAyeLj9SA74ryMb30q%2FwMITBAAGgw2Mzc0MjMxODM4MDUiDK%2FZuyfgXbzE1ygyHyrcA5kZntQueGDJ0HLi%2BXZGe1EJnIWol5Y1qUOnIWqavfh%2BTVQ8%2B3YtgMfTf9yz4D8w%2B1TwE3e5IGBjLKyqY4sjDoHlKGnYuUP3uJeHBPQnx2ESK559rl3WaLosCfU5Ajur%2FuDJlxAP5Gy%2FfygC6c7qrDKaadHFBrXda1oYBUPKGciRgtTs%2BQgGtEZSGLtUkzFj4vVRW3cqGTQJPMyNZaRlwcTBIGntvb46IgPw%2FztuDTVEbv6GMAMTOomda5GZrU3V6qwubNdOWE%2FxH%2Bu49uWJZ%2BkjNHDyOyazBdHZpOzc1xiiU8tuEECcOm%2FW985oot4rWO6lgygV7c9Q1b0iAfiUxzti%2FYQznRuCU9oQ6sNcMJwS56F0WQ%2F7SjN1RwBtuLo5%2B9tohRvo6q3vCFBsTDTyk9xJzqwgyZdxfCH9cWvCqP%2B8qELczvjqkvrMjU7KKnNBFlL73cyjAWdvz0vXdb%2B8TCxHfq9QZ99x9XEj0D%2FZPbSkPwLupmZqmTuOKuPZjGDmyMbR3sy0NLe1VnGHpR66fDelT2kT2MDKrb09vPV3qadfz6iADaypIjqghfm0Yf2vSiEDFT0TaDJsGfdeFzw8dNT7hzNI2ef3sNCfAa7Thi%2BNWiU6DPkc6Qgf5hJHMKeey78GOqUBQG5qTwBSarY4POFdT0B3CZuB26DQfG51PuHhTQpDyUSRzLAkrc18oWfDQVZBOt3FYpkNGyNZr%2FE0hYntXn5PO9WINeY%2BSHh83J9xEpLWvxdahp4dlb%2BjVi6diN4LoB0Zxw6LIyfVxy0YdDeaAiBnjmstoXMzhsIHhrLwW2WMj5G5Zg0w7PaekSULG8oK5awBuUpUPU%2BTnKzz3XdNt5JbYxpg%2Blox&X-Amz-Signature=8fd76fa9cef0f1a55159e2b4ef7b832e0636d3d2e028c9ecf96c3c3519cd3c32&X-Amz-SignedHeaders=host&x-id=GetObject)

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
