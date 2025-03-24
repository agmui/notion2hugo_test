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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662KFX2OZN%2F20250324%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250324T022047Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGX%2BoI7siwt08fR8MNhu4FwJViFqu5Tlj2RfoaG9GCXIAiAScsmQPgM58Q0%2Fe0PfpR%2FUAkTQT4T2q3Ee2n8ZHPfFxyqIBAjg%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM8c3efDWDQFJ0VcLZKtwDY0gkTxrUghfxvWaEp27Of6zPhDRvru7sMMWNcEI88Ma5pJ9GhV2TK7AqsuCFB30fyh%2FyQFmhLvDu8kgbeAQx0TUMN0iYp3oCeWKVv4qASoXIjEUfWzfuKMXYQjKbSHewEN%2BWTTmmqVqUJEfZjWfSkYoxZKRG6XDEwUf%2FrGKZIKFWciRVAcLKgUh9ureJPbHb9aA%2Bk7AS0EJ%2BjhnzYtct2cimLKFAhda4YCRicDBM4bpEQQ%2FS937aFmtm5w3MEdeZUWzRqAQ4W2983G7gmyMEKQXdo03g0pmWS8ZABaAhS%2FMZa230yb7hln5O1xR6GxAmBGWl%2FmqxbwRR8bbkEO8heHYHJnVfQZ4WviVtjnRhko9dpTrob7J%2FOdo8ccC2%2FPWCK9hWVBVoWu7%2BJKqnMOqNy7vytJ1FSKorrz83T1IoQ3WJY4bGcnzHNGjR%2BuLw%2B0FrZ1ec%2F5cwFazZE6DYQPWmfKwhzm77FrgA9nft4NqRiw1HrPBmS3aXg4ts55zOfFvgDTG1s6FdDcgvcsQs0ZwkK5Jn6C%2BdqdUD9TuUCkEsnco2yiTUl9MuLtMyUjqz0xz5hRmdycsmoOIX8pYlryUuTzSD%2FQmPO9f2eH2cGHKe4Lqn3DoNSUaQstvy5G0wgLCCvwY6pgGpKwB6XuTtHZtSIl8ti%2BL3Ns5lUmoMjFXBHRlbkNafxKLualhFNQv8lEEnKVGXNlWrnip0IbLIJ%2FW9bKgq4AnChcTEMZR%2F4Plzoas5bP9jKWVfBA%2FPu4%2FN01vreDYF1xRsprQpEBN2eLfv9HaoZWiW7SO4zV0IlHixlVcqR36CLEZmURZ8BHPA6jMa9CUN43kZM3Ot2mNSB%2B5pCOvPLMDiU2Lk6c4q&X-Amz-Signature=0315f60dc7bd8b29a9121fa221dfb5cae50bd87c710110684a963cae2fe54914&X-Amz-SignedHeaders=host&x-id=GetObject)

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
