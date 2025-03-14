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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664DYKWIB5%2F20250314%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250314T100821Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHCtSsBBiNz4YRXXI05CT2rlQ4ZDXrJ4CPO%2Fwiah9ik8AiAJdxaXPH%2FZBvWmdUnnseF2gQsuJSttWf32cYHQwO9IwCqIBAjq%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMN2iqfUUAaDUs%2BM%2BnKtwDYU9wYeDdCuXh%2BRwAUGT15Bg3tYKqYYh%2F33Ts0%2FpkklfUgycpwbfjiD2evZRzg%2F3KQveesk0v6492%2FdE%2BuAYrNaHPUwuchh2vURci6KqQRtUC%2B7umkUhHbp734t5296mPgf72vc34kNpMdQbfIuHU5Nn58dw1DK3FfSjUwGmMPE45GfGA2SkTa8ZTBDA8G8uM%2FrSW9re98WH82FGYnLWGjaHciJUN04kVhicAfJQikNaggYf9QPU7z569gKLjZvmofydjYN%2Bv96ZSgEwev5EV%2FBG4ZIhj7PcjZ%2Fkv4nIc37V0O5zblDDH%2B440NwvlxAkbpadAK%2BUR6ql3Lp19uk5kbkemCFH6Oaou6MoocOLUjqOIWRwNKV%2FV4L1GVAFvvQNsT99gZt1fD7Vmx24qVtRuifmeObOlmRUWl%2FEoAtGRWGeMTNV%2B1NfUqABQQKDArEcBZSUPaLSGSHvZK%2FvzdESRKw80jOtstOn6XZuM%2B7SrRA6e%2B4zegVkzg3aimQjP%2FImoKpsW6nspL8tbMWlSxTfqLLZsvM6EdG6GqnVelTEvpnH6B1AcdvO%2F12B%2BE19WIbB7pnqJmx%2BlIQyiFxqgHYY5xoemuXHvF7QfMXyJdADsFjfWSlxCvUNqxDsAtmowoejPvgY6pgGQwzA4WcppynoQJYsyZDKQMbBu8BA85FLFle0g2oJ0vTicqMqy78cJpmjIuNqZD9dMVuPF5zflOl7AhrgQ2bm0K1jK86vIdbxrqIpljLuj2XLM1V1uHvNoJga1R72nu8ExGXUkdsTHF3lXikjMMpOKKsWBTyjloA7h3eUbQ3YCwUxG31ybb8tPvX2WFdH73WIXsR6QTBcwPsqlKOhS7BA6NPW66S7g&X-Amz-Signature=3752afb8fd9bd8afc99493d295081cb1c279d32402a47d26187bc69ee19e107e&X-Amz-SignedHeaders=host&x-id=GetObject)

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
