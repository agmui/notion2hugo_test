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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T6YXSTB7%2F20250601%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250601T005328Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFOJcG0KV2uDu6VsZ9bifGHXlkOzZKMGRybeW52fIk7kAiAJuXKT%2BAdDTWV4vDTPSWs0x75CHKjLVRj%2Bg3uZW%2BKYiyqIBAjF%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMngDHcOduNHx9URs3KtwDw1E1tQDyTVzAIHWYS5gucUay7boBJRlN3FN2DG1EXc7BN6C%2FayGFSE9LMcil9%2BWS5teN6uRfS%2FqZLwmocuXJdO8tAe%2FMvb390nL8cqIhEGxHC9k1IaTKbwT5wrckQj5nOCYozE9kl6sFW%2FzQHjPJxauSkXaxKowdJZ1PtS9rViQ%2F0KxdYSVQIKPc3AAutKPyPMBHAPVXJIp1mC0AVe%2BOE1zlC3bEjYTnCJg9SofedUvXw5nY6Sz8FjScpCCZgsfIxKxSs%2B8v3T0g75FtyAD3f6EXSxm1SFsMDnTwHO5z5KTzN7fxJQC8UdTas60NrSObPqskgyez7ozK7RLoiBV%2B69DMDQUcHR5WpDSojxBIA%2F6hEJCm2hWPZBcmkInSk8o5exv04JJ9qO5S8DsbJVmnNHRqqMOLV9e19KdoTMc8FwOS%2FaDw%2FX%2F0nil4QZ7XIcdHHumpaFUh4KSrFYj07%2F3SK3hCt41H0fXtlR7hfsxtoFWSvNAAmdgMehOK5VqW39xj6MXRNb7wB55GgQPUJC%2Fz1%2FulMX6A3Os8vJ6LlW%2BSNPnAsLVj8SPTneWepTGjKkfMATcElGCAGD4UTYiVq2qM5L8Z%2F5EpMsM7so4uHIW7KHXE0XV4Gi%2BAc%2Bdk3ycw%2BL%2FtwQY6pgFP35gmxxSAr66jBNDWOJz8FrcEFU%2FLjmd2LqfxNQMP41m4lDzbb0ZniK59YTTEvFhH5S%2Bu8voD5cw%2Blm39WaPsoPWU442Ltu%2BkEKz0BAjUyrSQ4ELYZY%2FmFXbzVhFNc%2Bc0j7cYFu%2F30ihFbAZGsn4AXgD%2BckJzJ2495Cu3saGBqeMHS6jlc5g7%2B1KH9Y%2Fwx1MqUs5AHz1TY9ZJpKn8TIr%2Fk2dJo36D&X-Amz-Signature=5015578484d269d383f38a387aa69f3a58ac71852f38ee2ce4c942e74a5f0e57&X-Amz-SignedHeaders=host&x-id=GetObject)

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
