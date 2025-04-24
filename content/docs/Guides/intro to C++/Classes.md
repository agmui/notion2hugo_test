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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666XRQULZR%2F20250424%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250424T230806Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDwGFEw3ZtVCaZmoSbeqn7ePROHZrmR7ZQRDfH7wSBVLQIgcZ4TTHv6bsYioxnFM7hV3ZNc1qC8oFS8ahp2Nr6cbNYq%2FwMIIBAAGgw2Mzc0MjMxODM4MDUiDN0o1CYKLp%2BeWmnuyircA2KBxL2gIqkmkQ3nDXwlksNAz4D684C7YMVdhPlRdBxnjNZUhi5Hb9MkyO191Dl6RknKzAMrdXSpMZH%2B2l%2FBAx%2BxTnaWYx1mohw7HJh1cAvoDZpvaSZkjw2KcFymvT2V6X3e5nHp6x4Vd5fqHAoL%2FAa6AjTsW4tc0y9XLRtx9nuQLvbZGrGI2YYd5OMuRcuHY2x%2FNj40j3U2Bu4mkTB9z5n%2FniQVEpyU%2BjqpCcu725i%2B8vMK65vDh4cQqIao%2Bv8Vlftsc0XxQ8BqFJ%2B8pAvsF0%2Bb9WnOGUah7ZPdVXmUnESSafsVBnKMldv9RC7oZG9QJek8MNl3bCU6p7I%2FqLmKqsjrrJ%2BCrvrbu1talQI%2FiF8cbLZL6r1Fu2yFwE2slCSI7VB9Hzg1b2B9HQcq%2FZjNdHXMhSxo90%2FH6X16u%2FE9SHziozTDl55KpNC3tOViM05vMkAaY%2B3Ctry5vNMELJIoH%2B1pkCiNEtvVBHN19sFJjDJD%2BQn5Bgvtn5jrH7yjPNS9UCksp%2BGzHtUpS9y5wuG24wR76GDflRHlaPGtp1i1eZOAQhtHQF3LBc%2Boz7u42Ks7MRIkf%2BDMthAFjuPNJ%2FLhFq665jkZGll%2FZJZv3xt%2FSK3%2FMcSAdNRvNfk0ndbqMNn0qsAGOqUB1H3jYKrRE1ROlHCDQS3Do1QZyqahvRXq0PwZ0K%2BFVInvFajOxY16ccpX2fX8GHMyy2hZUUlJat9nYlgecI3GvdbqVsh8u3QxZ3oDBBwBH%2FyYI0WO%2FAnB2IarY6l1GBlFsvne2OzmNwxCx5xpY9d9cU7sKBEt1IvIQKGGYzuo0yWu4jUBHsolcLlLhRVo56EkWHwEHi1ETJLMFD%2FOI5gJEEnymWi6&X-Amz-Signature=3b8d70c32b94f81b05dff7259b77d3e265e8c1d582ba760f7fae7ef411f80bdb&X-Amz-SignedHeaders=host&x-id=GetObject)

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
