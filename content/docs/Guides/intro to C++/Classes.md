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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46675NWXZ62%2F20250321%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250321T181044Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFEaCXVzLXdlc3QtMiJGMEQCIGuKiYEjq3bcZalhcBQxRR%2Bey2INpf3bj8Ve803jSoS0AiAq2hnojNbW9UsD16wvgeMABOGmcm8spnUrDnDeqoRhFCqIBAiq%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMfjKNCmpQxZfRNzXIKtwDoXMQnBLNhQ%2BUxzW8fQd%2BgiCc4sm4xYBdNrT1uGsz%2Bhst4mXArDHvUEHAjhml%2F8Kn3Gls6y2jNgwzE1yMr0S19WH0apJFwAadhxjEw1Q6AdwbwPRLH91hpw42iWdSQ%2Fjir4ox%2FQ2VdqygZ1HL%2BS69HRy5NUI40PzMsmZFP8bHrauLqRWgdArCzCbBQBndUhVmylqS3EATd94JUFW66FQlefWTbJBtN%2Fj7Ad3SVoEBODT0DAhakgwOmQQIi%2BveMRSjRL6jW1Tifup%2BgArPtlqLPV4N8DH1mo9lMKNxNv1J3QCP1%2BgOAdO5Vz6Q7VbWPDwG5ceSOpGL7%2FhbmxpOQt%2FrhdzKZ%2BXZ8bqEzMtWZOgt4P265u2KNzdoUi6gimtvMNbsbfhU4CT7rjehYwOBI6amsJWhbeQfoeTowwQo6REx%2BDytqoO3zhjoXpKsfPPdAZKs4Ex5FfZNMyJRws20EDdTAp7Ncb3mJGN2VZIAULGYMPP6tlPqya9fZh0PfOWmSqdXV82%2B6jm%2Bhl9UtqKDstobQQ4%2Bk%2BscikQs%2FiPUaG%2BbFcjxpEWoUWkJ%2BbThlEP8gdOt2C4CY8TgZBCcxossrEyJysSQ4lJLvpVksUbOk3dXUeGEdFRElUO7RFJyR8wwr7v2vgY6pgE3a3obqQi5od5UXetfK1Jwo3gT8voWnDWDWiAuyBqEjA2B4QcJlbNiG6URuInzjeGP9ENtIFyjMdIqhJnFMwPjcMV88GfZDY%2Bm4lKjCbWd70lvkpJmYPsgYYlKuusvu5ofJQNB%2BUqk9K3MQF16ih9IIXCMaxPulPsPPA2Xb2vZnAVKA3J6bRvPZcZiyc58bEuEa3BeNPG3QC%2BpmZfR35IDRj2Z8ygL&X-Amz-Signature=9237c9265dc81f40f5ae2899b9f3f337ae85f3c9fa7011081282589d4c826a99&X-Amz-SignedHeaders=host&x-id=GetObject)

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
