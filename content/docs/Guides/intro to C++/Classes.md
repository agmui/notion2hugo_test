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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SEAHH5BC%2F20250515%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250515T181152Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHoaCXVzLXdlc3QtMiJHMEUCIHXn26Fe4HHUKPBRBXddyQyZedkC1zhWWsOv9cxjCGN6AiEApQZcTi2lX7FWVtynoV1sxP68NCtSwy0rkmOlkbmj97Eq%2FwMIMhAAGgw2Mzc0MjMxODM4MDUiDOYzVBf3vQwmz0S%2FhyrcA1irL0gXRXo8mKJ3ULfKc5wF8EHcEzYO6fS7D%2BmsA6ENhYBjibEyEOLIlH2%2F%2FZIT%2BZqc0gsn69hyDZRFSo7zGXPzfUDvhQueDNBoQGSQTgJSAossl%2BMY%2FgYoVA30P85qaDhnSN%2BN2gGg1ziPm6wI9tU2h2hLLnfafw1z2A6thCK3ve1BqfV%2BVmLyfEOl%2BV6FLRlhX6nDUjMbxv6kvJQzQH3kX2vi7Z9bDdojfKqPC1ZMeVttDHLgtzWvjOnPtO72HtcoPZcorzx9%2FIxWPjIJXqQpW4%2B7GLelUu4Aumwx3LoYv9h%2BT7y%2B5jPczVI3LVQ1oLIjC4PWDDG56EJxmqCQqjJQqEQWmcepUFfO95QinOMBUdvz%2F6ArCFD9PKiJFMfLbomHpovnkkD2gb70rlCWu4DFAJxm8xUfhWXUET5JhRmMjwPotsU%2FuTe%2B3vTdQVcU4k8dvUMcu2HD6EVjZbErSgg2I1rPP51OpyOkuEQ%2BHt0o0JxkzmiSFkVxT7jb9hDq6D%2BF%2B3uVsGSTsb3pVQoFnbDH%2BGuvUzMMzZnIBVAwOhO6L38zGvzHEep4fqAEENUfbzD%2BsGCi56vAsXsc1%2BID4ZCGCabNaE8%2Ff8YQPx01q8RMMRqTCu2HWAvgBjUMMLzEmMEGOqUBS0bx6I7XP5%2BtV%2F8Y8RzaQd04mRndfPpQTOqTo6sTQ9ZR8BhZEI2G8csTP4kcp5rqv3gVivI6j1NeThFZCp%2FokDYufPBU%2BvJHuK%2FUkYPyvc4W0zQIDs4wpMSZ1nPpfvqcMkTmEfjFd9AJPXwrfegNPDe1wfDD5LzJe83BfmMwhI7Ja80CyejYvTWBn1Hy9hmmlUJQrj0NCa7SrU2fZy7VfZiH4LqC&X-Amz-Signature=886a0c4bda64adcec22719beae525b2735d6b8db2d82b1f59d3bb2d931c3d669&X-Amz-SignedHeaders=host&x-id=GetObject)

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
