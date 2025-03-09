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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666OEF4DN4%2F20250309%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250309T190121Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJIMEYCIQDloqK0hYkOzC8QAOJVfwLBDFNkavWEWudhFIHudpSzIwIhALpMvi72bbbBqB9IRUie529V1DJL8Mtv%2BlRVylzsTU6VKv8DCHoQABoMNjM3NDIzMTgzODA1Igxt8EzdLyJC7dpEo6Iq3AOXhAvqeLzwlRhjd97fHE%2BbYY9Jvs0j7s5puoeHwm%2FzqCkRYcTDeFhnokeV8sRrszdnYgrijeSW4DDjNyWxkloJAynYjpYVMU0rWJPrWNXZv5vd0N7GP7TWnxG%2F7nDN%2FrH2%2BJzchYNkb1wOrwX44SJdY%2BsUTdvP4RaVzGumwRTQrBBbJdYM4BjdBDUgTfMFqPMt6CbUQVZyeoX8DALE9%2FEVpiB%2B6tHWi3CDfvHjPiwBbjG7MLa6GHE2IFmAZSkBaAar0u4V5KgrdGPJJrbq%2Bh4qcmVTxoc0mm51UcMjJA4o%2FH9AEA2WV9s9epmDa3nQ6v1z3FYJUc47GSRK0mudS6i%2FmZ9EBjNAcE9RFzDEfMW7Uzn7AuTy6US15XyAssgB%2F7LQnFbu50te1NfKkOz57UwBTHR5MIbQCyPnqj66QJfowLwT4AlI%2BuyeU2f1uyE4%2BY%2BnrJXk1JUzpLDbbVmZnTWs0CXgYLBNi12UnRIMlFPeJQShSSMkJg17ku%2FhH1Li5fHrdRyLYNQUWmyonB89LioGeHpwHHhyZZeGpkY%2FHEYbx6iM0dOHDDpYeGXeBBp2o2WSQjndfkleBChb3ySMqAiQs8YCJVJE%2F%2FCLLLFMkx%2FoNHKeKT8EN8Ac8OZ%2FqTCbibe%2BBjqkAVS1vBcMOAxq2xgjMKRUkLBnXQMxOc%2BkaAHlmrdXt487yr363ONEDx072zuR2FnLuOCKnEghWkdMmbdy1CZzFv80VnEvQCdylgVFVYXvD0o5TEIYwgdp3sq0HR1Wj6QNPdQ1Bp85U1B%2BILQNv%2FufzqzKy2bbyMaGL%2BR%2FGBOdYYv8%2BYWw9MzPH388JAQfgHqWPNPQlE2XUs1RLeApLBw9G0kY%2FxI%2B&X-Amz-Signature=3e6b874bd2e78b65a615fbf5f24f8064fcf7eeb620770347cc71a6fe811199cc&X-Amz-SignedHeaders=host&x-id=GetObject)

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
