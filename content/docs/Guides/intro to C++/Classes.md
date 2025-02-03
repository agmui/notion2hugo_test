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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YQB2XCM3%2F20250203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250203T131439Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDh7hBwuKdUSvjwoKtBgktSJ8QPzfDHKloUuk8hlmqmXgIhAJNIAg8DgXz1soo3Lg2WLw3K8ykyvqAVSz3Fbn8ZKx%2B6Kv8DCBYQABoMNjM3NDIzMTgzODA1Igxeav7NSE%2FvgOcpih0q3AOaHdtySPioq4%2BOTWFvynor%2FgOUahmZRtgqyE6SvMBvTMU%2Fq3M8SEy90CCmFBJ4e%2BnNXs%2FPuutrT4brAnxkRZRpqkrFJmBhXu7STD2Su%2B9EEB67F1c6%2Bv10Gd4ZMp%2B741rV80jFOdkupDSMVSj1akOMMV9GMBDKRaZUFO6DPhUySfJVaOMt0n5zJ0J7BOlyOCkU%2Bxu4Zpr6g6RTyEFavZZOxUrMTXMLCQS5SRceVRyQ%2Be0JGC0oGASbZaBIB1wyd8l2nbaBE2ECa6x1Vd83wBCzipXIRcz1jgwoW%2B3ky%2F52sUdqPlHNZMqQmTCYkzZZscQ3DlM5L%2BLaYCMOGJ%2BtpYjU%2Fco5B7JXi3D849XI0NWttU1aRGIisRBfzAlkjyztV6lfZljIVq8eq%2F0ZS6YCpL%2BUXQrvyhG5Pj3AdqbfG5wWVS8vytwQXubRhNfRXErlV47Axk5i7DllQQPSdHetUBvTNUXJL3A9rzWlVdzPM8qhySzzHWiwaQbIYv%2Bwq9yTCWnREjEhVoM%2By7DzOxwKNiZN0xc3ORk0G%2BO7hrvgTLlgoTjsHZ72Iz7YlQVUkD4jgGJQe684wp%2Btq%2F7H2IK5e2paKEF0SoVVNR4k9BkX6WWoJDLPp%2Bdh0IL3xuCbljCh8oK9BjqkARG%2FwiUd59NjXBPr6YymfS5jCs7JBvcqCT3buiRt%2B%2BP7qXEtfuauG2%2BtPquV6qDJlcahwKDz3FZnYGXE6xszKzE3ymfmyeSCn1BeeW33l5cPOLWhrsNNHi4IIeg6S6Y%2BHQhJtcyAzwHaaQz8uMFZLu8wAVHSPZ%2FaT%2F8G3zkiQJw1A4B4PKsO690ZWw87Cai8Wf9SBp1qKRqb1pyK9n8UoeJhsMLj&X-Amz-Signature=09b8526946e2826a95afac9ee7da56eadaab57f2e77c380342774bdcea8184ad&X-Amz-SignedHeaders=host&x-id=GetObject)

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
