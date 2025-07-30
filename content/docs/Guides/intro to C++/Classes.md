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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SBXFQSI6%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T121748Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDa4OAnyt6xD1LXSo48oBRZmq%2B0n7LTh792iJDp0BPwyQIhAOpT6kph0pRMa8kpoeMyiIoNoyY%2BmUGs29fDHfXG3ZcRKogECLz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwINlT1HpV7gnbYI2Mq3AP4A08Thqu4f%2FM0ZY7gGwrR4RZcy6ouBEbt9D4h7udbQXmYQDJdvytlJrIXN4LbUMtxQKbtaS%2BLC%2FAF4jm1TQ%2FMfKwvDSX%2BX2WlZohoU1TP171tuBNd38I4cserPPzyO8CAj19Bu6KHBjO41zV4Y6Nx5Ns3hclht19TGUJ09BcPXwA58TvF46TaJY0f3NHvEbXIsxdVU4mAxgLUv%2F4eQHKjC7HI6Z2YUJiypc01aG%2Be6zGZ%2FOU30JQANCfjv4k7Y8LK3quC6JUA5kwrApBdv9OLKukoea7dYP%2BaxNusY4m3s%2BOFIDDDBpWbsNYMLsJZxnx1DrYCXBO1WhSxJmxMEbiaMz84Ym1xafyYR1rFn3B3uAmB3JTrzvbg%2BWJRm13yBzT5SWY6DHO%2BGnFy%2Bw0aJu%2FXO8Ej5hWHqNoiMR3utgKGny9hS7umDUSIR3tmsPK30iw9ul6D4hn0RhvYVC7j2ec%2BtN%2BNjB0Zdn7GnMNL3tJj6bSQH8TUAjpKvPTtu28B5OztgJQwz%2F4fdL6gAepdXBi3wHR%2B6Vihra2hn1VpuarswcnNpEN18n9HAfJ4FMIHL3clZKp0teIxF1L3TkvdEoIo7Sxzs8%2F2MJpEplPAAdrud%2FIl%2B2D04cJIv5YcmDC68KfEBjqkAcwx5RdhaPbaJ9o7XOAcGWv0PeFT4TsrcWjPI2ifdYXOPvzf1M%2FaSoCOVa6YJG2Xzj9z3oAVT8d2xQ5lA0XN2T0dFPPgqhoBF8TaAIFNlrhzARcWTZpZ4FImN5q%2BOMNrvAStFkmEkYtIYFT0klJSkHfDzSBKZn3Y6TF5UuOVl7QHtOKk%2BGerv7wk%2Bw1ObC24ew4D7yJ%2BZsLIc6Z3SduHxjCMRJye&X-Amz-Signature=ad66b124f17a05233b7e9098daab642c04d8ba07c81842139c23533e68e3479d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
