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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SMD4OVYH%2F20250520%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250520T132457Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD%2F9m5gvdaNRv1onkdJf89hNMLxXdU0%2FYeru%2B36Nw526wIge48eMsbIGf8itpO9NCLoeRYNa9PSQyD54XSv101TRCYqiAQIo%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDAbGID1r6skhTAJiSrcA2SlS%2FVyJMNHORnVJdYrNIwBcq%2BrdiFzd%2BbQr0O%2FqxtCqP701n128f63SRWoSOygEuZpApnQYsyk9IXVFcP%2F%2FMiSRIWNzuEZjuPMpZhU8Rv56wretZHjAde4Gc5Wf27btV0tbbSWDbtL2i%2FNt3xAs7oK%2FCeG5cZzHcSzMcRT9Ost5rJMkAfKQsccgxjkacgJqISIPxbRBPmm4qwraPAnUlgIJdADvmhOEUo%2B%2FZUWIEaAcSU9IiPb0%2BidfJPnMvqbasyzTbH9g8gcQFj%2BxTHh5VYab0l%2FYkBrlZeVvrZ3k7tehtQ9RpJw4fAlgASyJcvh1GiI%2BXvqehGR4BhC5PZiPfqj3YZXjrJGuaf8za9EFyZTF6RRVFteZnOTQIMWbgYMTLxPrzcepMk6I9jd08kw2gLtPjol2qfth%2FDZO6MRKJD5TMCyaLNSaHmdhnfLK%2FoadUfOqioFMgsZbS8PwFYCcEzHsHWxWJgyJWbXCTfY8ePYXGkyxp04N8eErJjpn7wXi5Mwvj255IXCsXU5rfKonNRCLWYP%2B9yrXj1KS%2Bjk5DqTIQpscWxJRFN5yQrVtFx%2FJoJG%2FWSlPY1aikHOzCYp3mVtzBiDtmDmjOqSZ7qRjU%2FQ4Qyfx9y3IRBrZ55yMOCtscEGOqUBtprrtGwN%2FQE6%2Be1Ex2EpJFz07oOueS5uHRY1NUPJnUcRf5EIPGgES83Z2TtA%2BhuLOxSel2zk9OCG4X%2BpJA5zXcd2rm22TzLrPKdZDJZATWfwscfdf6KzKLgL1M7%2BvnPhicnbg7oj%2BOxA%2BZyWzsrQ3qRXpNzEOriOFlbF0AlPl7L8Rk0a8Bs%2BgQdVSMLv2lNHkizM4UyTOKR%2F8GpJR3LX4Y39rIG7&X-Amz-Signature=2735ef8dbc211c05b4525b7ef40df1cc24b052a676ad687b74ada85473968b34&X-Amz-SignedHeaders=host&x-id=GetObject)

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
