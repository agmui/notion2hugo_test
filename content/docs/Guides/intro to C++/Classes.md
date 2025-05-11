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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666PKFCZTC%2F20250511%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250511T090811Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBAaCXVzLXdlc3QtMiJHMEUCIQDjDO0wKGkINFnKzane8VZFEEYJmenGuf6JEeSMEKjg2AIgT1xou2Km%2BHpS7Jh75t6eCdnHi5v%2FqQeP1A3Mqo8HemEqiAQIuf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDL48Lu0%2BYM4K2uWLOCrcAy5oKUeC%2F6ytcHe71Zhvj%2FDO%2FuGQsDORTz7OBL7cPpMC0N7JDfmqJWQVxQh3VjK4Oh17vSjOXPn0srXfq%2BqisvFSKBqp8RUVL2EPX3Q4YcEAFdJIJnuYeFYR8JPLZSfPO%2Bf2PjJaob5eM9%2BOP5j3M5s223Q9GuLjIkC9%2BQ5oNgGwsLtL6Z1mxqjpipzKUapmUrfSOOy32U7FsPqTxzemu8uKPce2lFfEoFNWL2BVdKxs6UPWFeJgP6mcArETX8n%2FRuLbW%2Fz6%2B2sQUlMu8OSZ97f7pzflSkFjXwKWkjxAd3chKyiXvJVVCzksLnAmd30%2FH5YFMEDcYFTwCNSzryqUqQaDA1E9%2FuKuakqcKaxe8%2Bm60rjKzHe1CKMauTxtbORcUYTOe7vzK1LObY5F8%2FyDWq%2FcstOLR3inYmu1TO8wiw7qi9b7De7fgk9FI6G3B4Yhaiq9LH43s3JN9x%2BSeKrA1l3kjrnLRqj84P5Vhw%2BNMvBJbsWWfpdd3T9Ns8tftA5Gb9%2BjgLwhJd5gGlx0tlJLNLjl0kxVLnhBs2FJuW9%2Bt6yNQ%2FkLHUpmk2VSf5KGHqfqPs5gOEGOv5g3Z0HHvYqOrJk%2Bs1dzs25SyV1llq3VUQ%2BLQ8EwwrE97xtPU96bMK25gcEGOqUBrClHgeNX8myVh%2F2Tw%2BnQcbXZL8nQjZEU94nh6iUxSP6r0%2FzDXP3ay%2BjSrDv3HWkHWk%2Bgg1RHMeOS6cF4V2LS6FJUhEu77AmOEIZKzLMfpAa1oMd%2B75Mn8ZAnklbmQPlqPPfxpU8tr1rZ1HmTQwH3tx0JOgn5S8qzWIN%2FQBxp0mqMz%2FEYGxhYEMZKCONBBtQyzo%2BilhngXeug06oEJUZufcRPs%2Ff4&X-Amz-Signature=9c7fe921231a37c7c33bb41aec5b5b8405d5a1725c4fc8c4cf8db957fe2493f6&X-Amz-SignedHeaders=host&x-id=GetObject)

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
