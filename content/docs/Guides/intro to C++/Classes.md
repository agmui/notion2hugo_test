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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UFGC6R3L%2F20250404%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250404T121444Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCcgucsvG61poImpULbiWAcMGOs%2ByP3XZPTOxbBYPaPewIgeuBHcKx5qceACDFGehoB7590uycDQKwucjBqGkHblqQq%2FwMIFRAAGgw2Mzc0MjMxODM4MDUiDItILS5fZacQfj1KqircA%2F9qN0OK6OSaAZX%2BRVakzceFPjbFQTIl%2F86SQm9mG2zqjMLcBpmS2HS0ooPpqb7h0w%2Bq5vcx67T3o5NdcmH7SqyKitMqOLfu0pgc%2F%2FqBiTKN3WNm9THX0A4Pl%2BT%2FizPGJ80NZTYLa865FOh9BQqVfLTFfqe2YzwEH9rn5jVsBymQWmwkWPfgmrJWxYHyqVXEpfhsXSDNltF68owNRUzYwHxBh8iCsx%2FNZYKKewN8bHEpMtWGATWs%2BsSWtNgUxFAjSe4mrf%2BVfq3Zurw8yIh51RW5oBxalwJxuasvhDEGfZ3KncWBL8BhzY1yiLdP6GDpOmIkAYEdAobIgbYl%2FSJTfFdVJ0C1JB2HrGMZ8pJ0EiHhb%2BRhvZYoP2Se3G%2FrVWFXNh4VIk92xn8grbSd1EK5n1%2FUolWxHPKAW8bYiAk7X9EkNyhyQlrpyTrpMPLg%2BSMhmi9Uq0KlbzJgW8MpGKPZ93onzDouOE9k3dobBP6f6vv3ejXhh6LXdtLdDqN1%2BfnijulpzJ83YqPZTSugXTSlD5zjtMaG9t6xmItCwwop08A2UW9cUdFb3rSJJBJMepy2NIjm9UKAb17Qtt%2FLpBTv7Rgnr9GzhwPQmuSpJRcC9g6%2Fo8lKPr93uiK2QHZ%2BML2Xv78GOqUBax4ZJiTlo6rt1C1mW4YH5uhDOR5SkIfqhe3iwucK26WOH43yXVHedxSIHSmCR5gbiO%2F%2B%2FHHS5P4teB4wfa2RkjWkCXUx75BwWIp%2B1swxdbLsxu%2BbO%2FEeVkoXqMUUzD9VYAYe%2F1MTSdW4ezirXMSSCMiooBPGu1ei7htQQj0SDCGCoflJX1G6naFcYOJXCiHC8Cnehf6c4cdQthLP6ipmT2kXZRWA&X-Amz-Signature=441bbfcb6f3c46d28ca47a096634621bc69a44699b130a8b0a3453fe8d4e297e&X-Amz-SignedHeaders=host&x-id=GetObject)

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
