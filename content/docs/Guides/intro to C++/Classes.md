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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SMCJKKZJ%2F20250521%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250521T161054Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAgaCXVzLXdlc3QtMiJHMEUCIQC%2B2WjekEOXCtk5DQICmiHK3mM4OgUN88%2B6BFqfM8lyFQIgL176BimQWqvyPzqOatAwUgKofkug6%2FcyktSwNfBjn%2F4qiAQIwf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKgfJ5F2dAr6bteueircA%2FDYX8OH9JHApE8C9H2p1XM6hqHlcyLIgKVabXeLVESHQm%2Bw%2FeGq8DlYaDGH0g7qE99UeOnoL1eEwfZTXWD9m2zoIQvMkPXwkNPgdMnWoSCP5QKawjzWWsh5yTnXat5Zt%2FkyN8blhklIsDkXMyKCqPbBu3Q4m6kGY0Uq0BfUxFSomR%2FWG5Pflso9C9d8b9c8TfQsNXzQ5mC%2BIamw%2BZYWL6gN1M8Kjeu3QKKvW3nHMWxGR2%2BoYersuD6lABfYOuRshKf6D2ucXznG4XhH7HL9rr%2BC6fM0gj0WxfqaLtpUveCsJoCCfqYboop%2B3c3zDfRWKLQe50hIvGjYd4C7V%2Fev38dUM3sT7r6zejy2eqf8JpbrJMTStrYFvYZaH5YMDsqjYSxv8YfnSv0PfagM%2Fo2753gFywbPlK43HdRtwlL2%2Blp3u1P6mTsAx5yDBh6GehPvnmMkn46vhCfc8zlQI2TNODIJcPOY4JEGptS%2FxYjqddJ1o9k5KCkA%2F%2FV%2Bx0lFn62zZXGVqduExPamD%2BKpYy1wLPmr0YNglwoEUURB7DUPGGODGxb9ftB5ZHBzu7ZGbQwqot0P2MiUFTr9hJhiLilagEUtiBwUQUC0gLsykbyiSVBW0NJHxwADpmbRd3VdMIXzt8EGOqUBaeOP8GczHCc4KGZgwcUz1gAPB56OZ8nQH2eKwGKKIN62pZtVQCKlK0WsE8WyBsg5k43dPBmQHW%2Bk0s5cWOIuLm9DB2%2BR8oYibuWC%2BBGQ59OtzhO3js7ccBfXJZZ3bGOb82miYQgAujYxn%2BQVTSRe0EM2x3zgo%2FCCNRDVSIaq12fHqpGsyGiMhFC%2BXRwfKh%2Byp4gS5%2B8YXgh5NARyuspXFIO%2FVmSi&X-Amz-Signature=357c236cb391e1fa1b058296d430cc99dc83c2da455fd2d56c906f4a668f5bb9&X-Amz-SignedHeaders=host&x-id=GetObject)

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
