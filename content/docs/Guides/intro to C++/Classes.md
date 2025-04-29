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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z7KE2ZEN%2F20250429%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250429T070943Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGnG4OB%2BKcUwvarYGYD4cAnVVYIsrefSQ6PmPdswIfVBAiEAiB0Ud6VtXKWti7r9KnAhBLfMMfeH8tfQ55%2BPD2czXvMqiAQIiP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIGWZuwAeQ%2FJpum1%2ByrcAyOi39Q1QuNK%2F7Q4hoG5fjlaPUO%2F4VuM50xrE3q8cyH8KjGK6QzcMaObNxYKX%2FS9LsRGHhRaO8E%2Fkwffrprq8fDQrIfX4hOKlAbLFw%2BOh%2FWMNVEjRESP%2F0GCAR1YM8NQYV%2FMjw8xhlRABtfcX8r2HU0IL6y5wI6wKjeJYEF6eYBBHo3ySDoDPdMaSkpXqJIRkUCZFc1ydLcSmdFZ6Cdsu4u%2Bcm%2FCJrVjN0i%2FCzj6Soq55UfyqAD0VesZ2Bj%2FgdaJ1CbpTM87OJcKdJTo3bvpMA2n%2FlBqSy6WvYj0IIE3gG%2FYdLclv92efYikFQpmwETILxhuhsrecbIs3mwrERb3wPmd6oAfCF8zOskWQq7%2BIaLWx3zgqXj%2BRbUhe7IwcpxjeUubb%2Fpr3SrkL3e%2FQZFoR7J%2FVAoJcNpxCqFZYKEEUS5u7CxzWuqgorp%2FAjmfgXhfxcnJO3lztwt03bp1ANT%2BcPkqBlb6hgbl5c5MpqLtZad7S8ZKRmC%2F2Uwwnz4nlAmRkqdpt3vS3OJJZA0%2FDzh0UDEPHMQBwyzfS1b9JcPeWZwJApoJADF0WBWR98XiotdY%2FqJEVUOCRDw0zUI896gjCx6mTtbtgZIW34jNlgeHQMXBU41c6Sz1Xgqe3rTmMMvuwcAGOqUBO%2FrkfARhBE7wigSQQ6paA6VyEEV3BpOxNltlytIrVpXdub3%2BaUUyoNhslE5rzMGrzqD3%2Bo%2ByrZLZvF%2B2k8xky%2BOPf8qQuhi177remDJbg%2F4Kz2OAs8YNwOXTpVP5XuOKhmnK72T2YDGSCgrfLKp2lJt8Y%2BpnDW0JIT%2B9L0TMHVkA9rcPaELuZCxnVk632JExLqvTKH4wJExdOn6lRmAKY873U9p7&X-Amz-Signature=9336864622ece52d8b8152b1f2757c3e7c19fed038bdfa105d9910a9e34c64d1&X-Amz-SignedHeaders=host&x-id=GetObject)

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
