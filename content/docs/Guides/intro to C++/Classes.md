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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663G2UKHAO%2F20250315%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250315T190058Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIF6lKSQFBawtPpwq7YFvY0jWqphMsrjJD%2Biuoo0V5lqKAiAQyt1TBiLr4x0NWtb%2BL2b2SHdj%2B1j99%2FNeKA9c6cUVzir%2FAwgcEAAaDDYzNzQyMzE4MzgwNSIML2AmwkzQcziN2vYoKtwDI8uC0hYnPRnBPXcjBkQmDl6Ebe1WDfc3VTPHx8xcoi%2BDVJ%2B7WM0AJDicXkiwIhe%2FuCRHMXVIjZ4gXr03NYPDvWysk1rjK6AZ7JMbaICnfXz5k2e%2FCp4k%2FQIN3X43J3XMLiyQtAlJojaZdcDr%2BkhcL0robmujtdl%2BA%2F%2Fo6HE8lSxzaCAbeoYKe5hryU06JvsJ8qQiG8ScnCe7S7fBmju%2FD5%2B9MST5Je%2FOOt3X7XnRJk2qsvAojskAMgIAn7vjIWNBTmB4X5x2Eb0l5I%2FDBgjlddwrPw24RygMYVUGzK05eWNBmIJjiFrqNycffN%2FRsnzw5HAFd%2BQY69ysTuPmUzGhzauqZJd8k%2BqSii0zYpBsRGCt1Dz2AZTRKVH3XzuvTFlhnRiJhmdrEW2t6AMi19tMrlZ1BYitqMCu0JcPM7mDPrLBI6N0Vf%2FswWmqgrIlSJzNCScbq%2F1ioAWH%2B6oo3OZHub8f278B5UijtqW7xMr334GiUKsT9dFN%2B%2BqlPorvUGH%2BtGEkK7hpjMZuM%2Ba47T0koKagNS%2B%2BmY%2FCNAYt3cM%2FhfbaiT9XoDvJ9ADWN0nvnLrqihf8CfjFP0OK0GYG4D7KzhMIxd0JLeeDNCGRqPnJh%2FBsNo8fYP%2FibwzuW%2F0w8I3XvgY6pgGxTGg2Wql96UWhhkuOusgY05fKdbmmJpZ2FvOIqhNhtGwmYP50il61Cn1Lc9X0NhMyt3t27gHQYJ6G8uG709kMLFVvvhAqqDEoLwjAkS5RRT1H6y7W%2FLTr5p7ucB3RlRuFdKtlzVrhO9mHwYPG%2B%2BPEW5qwOBYlZl4B%2BMKzfUXui5S0KwJFiNGvnjqWAJ6o%2FjqKW83QgwDtg76n5CmW%2FOAeFPXQDi3J&X-Amz-Signature=566c2efded012866929b5d2ec2a4b826455c8281c0ff0c48e14e626f94ef5718&X-Amz-SignedHeaders=host&x-id=GetObject)

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
