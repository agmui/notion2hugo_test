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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663VDARVSX%2F20250430%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250430T022314Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJHMEUCIFwuLvrt9du8evi6fCAA0pc0M1kgJe8RuIN6mrkHxtxxAiEAifzW79U0YT8shqo9ybMicrm8sFosv365UeEqS%2BJExxkqiAQIm%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDcS51vB1uTI7%2FaY0ircA87mWxR4Fox8gJ7OvtKbntWEgShwpJUDKSh6qdhHGlqUCoVJ2GgfZIHZ4M8DtTIarX1V9mMSk9NQm4b4%2F81wDnGuxoK7wcvd4SVKzOpV7RoyYBP1ufkP6R8QNRB5v0dIPThhklHDFaVKaklymF%2FMSAU9d7%2FS6jlysN1MrQLU8nR%2FhaSabZzTn56m2ZeG7WGaA0saVlysgtJI5r23JHKwn2JPBv0K9g%2F%2FLMkw3%2BKLHArkImEZm2Il5am5h5rAq9PNozKC5qNBtDZarTYkitadZtF%2FdpcO1reomgQdzHekku1JuccSnPg0gOMatupxer2bqi1yIubH4ONqS9hTXWLQtw0l0r4KFUbOdytpozB6nRruZtf8rrlTq3MJXnM17f6OAZGmBXVyCiII5LF0Yt0%2FcXZp1a%2BKjmpba8rRfm6Dnn33Wr0%2F3erN%2BAvWeCNIb8EAcrfvGXBEWqnsH77gmbaNyJERYAXOBZDGlU%2FhZ%2BkZfEt3pZxzRlvFZaeqXS9WUJpQUXSKkC23sVmpz9gUVA3SOgqcoAfPvJPNPnOPVsXujmcUVMGdybDLm9t%2BNvLkTJzQyOkc7B23IWmtoBb%2FAUsZBDTxmbVCGE5D0Ajt5rwyl1Rf%2FYQj5Dx4WOveFjriMJaHxsAGOqUBN34AO%2FvmjXg28BnHt6EeCFz%2BjPXSSzezG2qKBno7VkEQIplE5ZT3jmr8Yy7UqsGN04u3T2mFP6iyqQE3xCpCGf%2FLz1gIaT3pEsfGIrWVc4uUXCNJBXgSaUVx%2BF59gBR5BUMI41tTYmm6Go0tYKA%2FGAsa8CPkir17qMFaC%2B%2BjRThS%2BaamblhKQtmmT73v8foeiJ6uEJcAHOLpLZuKHEuC7Lix0sCs&X-Amz-Signature=1878375952b0bc4075c2595793a2db414556abe267b4e2f7e8420fb8176d93a4&X-Amz-SignedHeaders=host&x-id=GetObject)

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
