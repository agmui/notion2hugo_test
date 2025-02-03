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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XKRF22EW%2F20250203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250203T061109Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDA%2B5qAEhDXCRZ6XNlZ5jca3RU%2Fkg4RQBENnZ9BiqRFEwIgIfBPBwt4jDF7NxIAHvJwHuYNk3zToL43ATRlRe9Gw64qiAQI%2B%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMrddkhE3Cr%2FNoyydircA5o64dF%2B3k8qxFg1l7ZVTC6n5t%2Bf3HlYQ5%2Fc0CUYAsCAzWTticQ2nRXrVMqT%2BPLDuunNOh4HmMisrYVdicgJguCkHlfUSO8aU%2BMK5zoUqc1YHAcATK0VxCHvDHu0z%2BvEniOZx7QMZhcry1YtMLrFNwWHyj8zhT45qs4oNPhom8vxqttyfDOEz1Zw7ggoONwXmXz52zx0rgvDQus5M9rdlM%2Bj4a5WoquCpkUchg1gVWX1Bq1ECS4al6AgFA3iJIEI06Ls3LuqKAO9cbFmCqkauIc5TpsK874nndTSPnzT3jbp2%2FQdYxdqi72WxqcYO7NyTmr6ozbY2Fo9dR5j7VvYYZMbYuSS8zsyu6jjDitzCEtDOTLkPtr7t8MwbLMbySKB%2BrwKZkekBRcU5lCLHhaQS7%2F3OYQP7e29RsTzdAb5ZBZnldd3EKdhECxfcKrQDohmut%2F93rZ1YQSnbuKvEzMZGeSrmLwWeYm1cWIEBU00MkAaURsjk8rfFkogg1kxEeYaU7Aa6SYJLZpDXdDvGjIJ%2F3yfd5f5v%2Fecw2x4eoXLQ66j13uYkg%2BW18RKQUZ5QmtAyv%2FZ8WKSu7SYg7IwM5Dc0%2FZ1tbLTs1ICwqYM9qITbN%2B%2FhUeipTzxkR43nQjtMITBgL0GOqUB7FzVsgWUTxcZvyIg5FWWLXgKKJcUhG12KM6XDKPVjZSYAQiW9MgxdZ32%2Fed4wFV71CYZ8NSXyBNXnA4dh10wKVu8gTFpK%2BV%2B2xgsIAj2yzirz42BctUbn90x7EkP0DaDPEQfPdmwoHI4H4PtkMtinaQ%2FUfLWnyMCBT5EFwIWOY4sDNnJRbmZtFZp34auAepg%2Baayk7V6rsoRTj5E4EqSvF%2F6h1ib&X-Amz-Signature=cef2aa938dcdbd83def9ec326bdc677fe2f83d289ebe5ffa5b7704222fa2901f&X-Amz-SignedHeaders=host&x-id=GetObject)

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
