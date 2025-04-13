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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665B77M2JO%2F20250413%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250413T041929Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGsaCXVzLXdlc3QtMiJHMEUCIBD%2F7htCQoZDOTLLf5Ye6g2TG5dfgru%2Fm1HBabE4LQMPAiEAkSn%2FsqGwAc0EvR%2FOgUcdfW7Sh43PKo9J3VuFL7xtPgAqiAQI5P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDH26zBuHR5VHqt3tbyrcAw%2Bf%2BThzYtiiokBO3Y2gzAzkXeCkIcxiOJtYM8q69CZcIE0s2tIk%2FdxtfvyyykwhcDIU5XdfQKOpyGjvudgrzPWzUxRuq%2FK79csOINDufGn7R%2FxrK8kP5Kf5OvEHLD4VyKhiVoSfRr%2F9zD09ItTvBmhYnHR9A65GC%2FAPzU3AZ%2FurcXmmJGlUZlPBgfoIQ5OrWPuRXccJzkFytlhG2GgDVGcoDkNWusYRyvzr%2BCycvkYvxocHm1vzWKMu45zRynS%2FCtGz9At9rOe84aCAp%2FWbxjm8wGXWfgH19aVE9cGzq1msBfPPc4Y0y478GyznhkUBZL1Ibcb%2B17KcKqDPDNcNeLbLV%2FQCpAlTf%2F15Nz%2BehWU57lA2w7GDw1uF%2B9R%2B9Zg0RvDwSOuNksIK3s%2FAY9w3YmOZX7mzxrPXqxJodbdQjG96MIDT6Fb%2F%2FGhzVBDbnJGzbIbQcKPaml0KJf9e6rNZfV8nUcK6OWbL9PnvYoodC1ZH5X%2BRvcT9KMDMKJSViZl%2BY4WXhDWvLkybx5EH88soQaefrOXDPOIDMrtp%2FqN%2B2TaxEoTfkSvbk7xEqWmys7DVCF%2F4G12o6cmufqcbtqX2MNs6L93VkGZqsTylN7AfmrZ7Kpmm4fmkekxcgoWaMNLR7L8GOqUBIq5a1f40HmJvTaUmh9AsMw2NkpQGhcOuF97fRFqrQ5LFua%2FR5meqqwnO7xQ2OgHx8pJsL8mmNLZKALtXfviLKcNJU9JXeTL67LtR59I%2BbdkpHwsRF1KJjiMT4rZxYDbXM%2F59qS3NvBF9HDpPBGFjD1tjsTOte4opGZ%2BYPx24TNLQdIfDoO5m%2F8I2yBHm529VCm4hYHcD8mtFqHLN1zJBWtVXeKI4&X-Amz-Signature=d89268f5f6056d14f6d49f48e273100796c0c67c5b5f911ecc487eb72b32589b&X-Amz-SignedHeaders=host&x-id=GetObject)

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
