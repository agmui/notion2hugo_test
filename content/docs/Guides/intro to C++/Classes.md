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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VRQJAKBU%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T133205Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGUaCXVzLXdlc3QtMiJHMEUCIQCXpI2%2BE3ySt5pK7%2FtUiK3l5CWX03KypHN%2FPFdWmVebBwIgdAYFawUlz4KLEW4SBLv0J1agbXKuDynffaOlgO7fjyYqiAQIjf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDI%2FJgOzuJVxcNOdQSircA2DeNfwCBDuimXUfR6u3mc1n85rY0LhVO%2B2faRSWHtBYxAdIFWxKCgTlUrK4BfHBKo1vVZP0D0I2J78ZB8ecG39rXZDZOmXv3q47omRKCavgpxF5uYCAhRUtQAyiQXdyHn7qJHGh8Aoti1aPXC8Sn5oiGj%2F2ubuiqJ0nxnwzNCGeS6K2%2Bu1jLix%2FmjAzRo%2FzSHvaw4%2BPhZbh5NwQCeiGrNjmQJkuFoTsB7HcgbLFpY4ZFD0fWkRy2Ui7QdsIjW6Hu892OjNjRTXK4FQsp%2BHJGiWkP0vo3%2BooT2LaeRAs8FSDUNEVJZQXc400l2cjZpjwptwFRJYZ1nw0FzU56KyA2FBZobhuN8pd%2Bf2hC%2B1Jpz9CB1i4vpU%2BCxwb2aykEUums1gw%2BKTirpUxsSS%2Bs8t0XwoiUypz9P1BrrkXt5D6SERVwTtOJgKIQ29ahzVOMcReSD5JWk%2FJhN72oLVTtsBCmeEOUcWI8QY3RQVc8aN7TVP32KKbz%2FUDZ89iimA7F2M5%2BRTTrBWNR5YBmlsI1uBSepDAltIyCbUJpjvhekewYDYaSao6UDwZ16gtMCsUhywfhxcT%2Fk%2FbcusFN5qm4piyGQ4rm9ev0UNAAo4muQWiVEEyzioVG%2B2XVfNQHbVtMIDXncQGOqUBzPOAs7H9cLlrDWMefVfcmo2FgvGIJkd79jelAMULvop3f7eOunbzRZr0fKv6JXBZpCi1YNwbZUMe3rivSA5wiUJgMnpCZb4j7dWFQHi1FqXMTqh6u4Q5yOrqtf4OAmcqdEOhJV5c3bOvIsYWGaQ2jZY26wsH%2FXbGp0ZjbZOW3ovzwBgTI6xRv6XOM3VDIFfWGevl0VCI1fFYXon5GjTeNgKipfqI&X-Amz-Signature=f4996438329e88f83d3d60d542b3a4272e83c4425ae8fd0e25f0e8fbf9caeb1b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
