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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TF4KPMDI%2F20250403%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250403T150816Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICcWm2EacRvUgBNVWiRW4BIgURXH42DAHRpiJO3Nkg7OAiAVQ%2BvBw0lfqS%2BV2RAMJxEoUDPtm2JyzfXgwo4%2BPW7eZiqIBAjv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMiZHwcWoNOIzIZEnwKtwDSBLrYSnXWVMMS%2BcCNGisbEYAeYZwxAIxrkCJIK9WZV9lqD60396Lv1V7XyFowHjn7ffVl1AEKKlJyvxKDAS8%2FJxCXDKtGXKK4zpnwHpITpCs0fIjYM4NjzFVkGHVZZhZisfmp9GpFLK8%2FDNn%2FnP7hF6xoE2uL4ReoXIcgnFvUKQpqTSnvq3kWJwAxYRfzPyivJgW0GJC0omcgPSJ4oeOmk71t9XZH1mYBxLOOOxwGvCb0vpfn742MYYKzHd%2Flu9GuDGXzQUjQbtUlOGMOmIW8nWF%2FLFlf1W%2B9r4TkHcHl4JwUB3wIGsLvz0zD6WHtX9GbRd3OJ%2Fs249m%2F7MuapQvuKN6KjAag9JhmynnKwLu9V%2BpgD70cFp60qA1mE4vBjcjR8gN5ejWLbBdHsN%2FIUk5ZPK7HZ0iJE%2B0bxVIGQnO8I9BWpnyRJlDIjUvDnCaNh312hsFTRw5cwC37C8LS3EIHPl7IAXf1s2yLP5E7xepl8LFxymEwigP5nER%2FnRFvZqXPpi%2BtN2M%2Fll7QKaQVePC9kluy7M0Je1GkFh4dv%2BgKiT%2FtcDRbBDaViBhPS5WeOwH1410LJ1ADDiWrLPWdWFxgquMkMW3Jq3DWKZUvnf4wVyWxlBPz7UPlMWW8iEwhLS6vwY6pgEBmA4C7meu3hGFbUW4qGKi743ctECKGKGfdUCdaXpXQQYgpoOxrY2mF0110w94fPfNWRu8JOdCJSgjTeyEDirOZLOetb%2FHqBv%2FNT4ZWEpu6HaquosUxaYtk9eRgeQxfCDrswExkHFuxqJxLQKELXOoQyCVWKx6mJcZD1Py0vYjTnDMzbQbvGETB%2FRuoHjAwI%2FCGtEAh0iLelyfX%2F%2BLT4ZroQdix99R&X-Amz-Signature=35500ed77d5164c3a854aa1241a6647bd8edbdaa10b166a29a0787d0e15d908b&X-Amz-SignedHeaders=host&x-id=GetObject)

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
