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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TEBBVQAO%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T101107Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDoaCXVzLXdlc3QtMiJHMEUCIA4lVglD95jlIzxM%2BA0c%2FDfX6nuqtJn504HVAAZvFiFnAiEAmHRAmtPy%2FvBKXwPrEb51KxbkfygjiHxAHyvWXweffNIq%2FwMIcxAAGgw2Mzc0MjMxODM4MDUiDAet0yslUR8pu1rS5CrcA6ZJKG9RHsRPxCkemcKu%2F1ioxoS%2FLO%2BjMAEy2pcPUUo9dalc4o2RKv7lh7xz1mWERAG7KN0YKRxYlpCzaY5EoM3P8eImBD%2FRtVRJOREgbdCxx%2BijTGef79%2BwzAfnHRu%2BhLEEzhiDXPxrItRO3NLz9za7RMsQAsSG2ZdwzkGCqel5xlZmGcVJHV%2FNka00th9x2WcMK8tEUDQrnh7S%2BeDaE4dNbxFkarBABUI62rfC00%2BwkCidVySfQLMUWB5kzuP%2BqPkvSnwC3EK6eFS%2F4EEhd%2B5nhxiK1F%2BP5a1UVyXDHJMgBuKY6M8wM8LKEw1PTiCFH%2BvxGMndrTn4bBGMmaby7%2FgV%2BWsaHrignerq0twVQTOmP9NtgkwQn9PSddio642n6B4ipNLY0c8Pl81AWdiL6PqVvOx9gXIBh5r526Oe12bns8oWQK1UKSobRZEo1ZBlhf3%2BTTcc88dq46unE6xy1emEj9HeiRALBx%2B7GMnuN7Hwp4eLPj975an6e5NQm51GQW1A7K1GybHMweXEPCAMjTuS5GHa2W410tU32MBlKgJ7zmbTbFePuDmnr6jtkgHvdVxQ9IKEW%2BboZc%2FAX8rR2kRjcS3grCe2F5YuxkJNtJELYv2SeWwstiCddnQ0MJDPzMQGOqUBnZgJw7m44ZzXxF8fXkU0ikeuCjdtG68JD2ZSLdY3RemowpsenO%2FGhuvTxobqCOAV%2BNZvrd%2FnWiOs8GyJUHFdqRKELmqIKKu8nBRZbkl6tbOEFdBqDiF50Nk9W0q5CKCN7QOZWQuOpigJw3KfEoCAyba8ugmGv%2FXBy3lzqKErLfbZoqB6kaZeh6Vnq9kw8mp1LH%2B35XK5C5dNfgLqogO4VXDQVDHg&X-Amz-Signature=20a1df00fee2099d5764e9b9bb274bcb6a6fb44ac8bfbcd5fbbaf689c5ccefeb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
