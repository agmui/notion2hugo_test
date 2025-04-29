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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662XM5BOA7%2F20250429%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250429T004037Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC93IwXI3mJXubYf%2B7GSUslvv0HKdOPY8ubYx3h952UZQIgQaW24iPoRQLBfUP4Jt42gQpASvzOC52tUHsh7YEmUScqiAQIgv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDG3WbjInO0bdhqwUcCrcA86oFxmHA8Gu78avPCMD3drhbyt58EJRXYpA9a6RDYzeOsyUhWvsNgX7eydiGPsxKn8hBTgKDOWJZqOEmkuSMngWvbu6rrMHX57pMKuGQKVXrLhYnZagcednx3X5wwy90RDtnavzIWQScX7ISKFOdUWMpGHmxzmT47otQDhWv3OV4MXqhR1%2F20b6o1AxKwmJzfylAwpe5uOcneEnFMTkssaWIOa%2BNJk3rrNWbR22llworgZUCoqmwHYP3ac7Rv5EKc%2FOKum1kFn9zHnz8oix39bwiGxCWXttlgUadnZHPmvq3sW2R1K45jFtWhSNUaORTrRhlRjaNpqR2Kep2a4zCkH7md9hz9PjqSSqKHkFcTiOOYCMcYz8orcN0hA6%2Bjt1Xk3bEr9HG1mZ2xeIm3xGK3Nrxt1ntdyEBWedg3ciOmdbuuEyZbADukZkvV1787NKgT4ZD8gmKCyi%2FF2EEgxzv%2FHC8z8koQX4Or52gTi1DBUT6AcfkG%2BYauKSXvKOWnIhubDukT1kvQgl5tvtAfMxk8LOAyBwxhmUZ5qFnuZpLKX5rnQk0ajqiNCX5yX1scMfUIqW4bau6zq4mbtvRZNKMGWvuV6CML5exitzDy5ECFPQ8ZCrurxp2w9SJDZmMPK%2BwMAGOqUBy73vq4Ad8QRkOywKXWoYANvR0ukDBmJtT9FxO8Y5jzHxyi9xmu5dyPZH%2BdKdbW1mk66Cr6Rqrdz10%2F%2F34iCX2b3G6Mv%2BBsdOdDqwjm53Izeah1jBZyrAk8CO002C0gPRpBNJbwsqdBgqwnioTkYMQieQY4RnPSAIEM4pKsOFl0lRG7ygZ8FfmLwRN2SMT1rLe7zXm8hH4eoMelbE0KScSdaAKj99&X-Amz-Signature=fe5cbdbed3688120e99a7d58dfe8c424d8c907f606ded55e74e1414be97e0df4&X-Amz-SignedHeaders=host&x-id=GetObject)

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
