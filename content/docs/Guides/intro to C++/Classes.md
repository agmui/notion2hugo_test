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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665SUWJCT2%2F20250402%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250402T110723Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGsaCXVzLXdlc3QtMiJGMEQCIF5%2F0OtGj2eneArGgqie0SDpH1cizrP4qXYSVTB9NfNBAiBtvNHqVWPVUb4ejE7GXavWVpgrFCs0v1xQCsx7FZBXLCqIBAjU%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMWRNjpS6%2BFRtYqE6qKtwDqhNMpBzynStSH5u%2BFsEZsu9SgvZ%2Bn3TLM7CaH4AowDaRbHl6OePbovl1oNK9OEeY8UkE8GHUJC91wM7rrf0lLia68XX%2FhcW4NJjj2UUaIoiiq8OGlUXZ4%2FilbFvahDfu1I7c%2Fn3exMWw752opaR0EKQ8ElNah9bfu%2FsPNb%2FM77zIYMK9TOETQ7vIvOIFtyDssy2GdQTOCKsmEZwLb9kWtzjTDmyignNeIK9AcqGsWsUdhaq0a5TbJwxuH7sjP8rTa1U8n09Em2%2Bb8dffFOd33P%2FDkd9Eq0NIM5eDNLztt7pWZq%2Bj6hthDt2HRJeDH8O2qGneLVIHE5pL0huApbARd%2FoFMrrqkHJ6wcP8QOwXPDtxBn3MzU5QXRXs63K6o2u%2Bi0banIkgt64e2oTr9Q6%2FsiM77IOVoEElZoEEib1R%2ByxYvt65qY%2FRS1jwxLITy4erPDtamUr%2FF3TWwu6bA8Ox8JpHzP64oQDEGxLd8WzWUCkeO8mRR2bDUkr7QlhnwhFML0UdK%2FuDnsdNQexjFs4cnCUSj68HwwtLnQYy46tFPsP9FQq6xoSeh3R6H9JGdbwSIAMZUMCjBgiOuq9pxzS0hkkEQDZ5r%2BnboncRqekvuhylfeGzHbc94Zlp0cgwuKq0vwY6pgHS3FOwD6dQ3t9ppqm6NTA3vKSrdDwP7aQVDlqE4vF%2BkKtBOm8VZBkBtKcAF%2BxaXfbP3%2B59fwJSnVlPIneHPXUJdLJiQjOfcFUSem5XT4uFZ0kOVUdUqh1U90FIv2Bpez%2ByhIExPbjfyJ4m1aRBhZuSdZ6BSWuRWKTGqJfMbJ3A8YpWNGysRm07oNfBVSjMrPUJAWa1YnZ9r7k2Jj%2Fdj7k2WqzQgNiM&X-Amz-Signature=d0080a0af7c663c23d8164992e3ed27dce100efab8cf6418a5fd12ab3e0c35cf&X-Amz-SignedHeaders=host&x-id=GetObject)

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
