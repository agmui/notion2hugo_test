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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667ASGILXU%2F20250611%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250611T100958Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCGEtppL1UaS5YHGRogdWHPE1CrDZFSMz3OZFyNvtUn7AIgTFbtPKw1CNDbsbCR6DF8k0cAE2qkxGlCvetdn7K2g%2BQqiAQI0v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFzooMJIqLCIffIqJircA7%2FRM5UqAh8d7wUNNImQidQqEUVZk4oefQH9Mn%2B5i377R%2BlBWHM0pFTY5zehg17Ajt0r5SjwGeNsI%2FFWUCvzUCUAPqfpp%2B%2BHJ%2FZPL6RuYd1Ej6QH%2Bv1ajg18SVg2HE6%2BEEy5R4Rl1YFLmY3t8h%2BUTkq5ezlqltmP9NHHXQMHbHMf9C75d0EYQ4jXZTFD5H9lwiSyN99Gd9pPFlPMrkLWmmEBRsiiNQkP0uEGGD5A0ZvdwuvegipvI7jo2Kzf%2FaPRSHk%2F4aUuxrKN%2FjrJU9NS0nSX1W5hJKX%2F6xET%2BJrTTynuVmVcr0XqU8rRhy%2BJArRALSF973N5QpO3xd%2FYcoYCsqH7FFJPQen4an72u3sHK3t%2FuzsygNklgf55cvP7paNMPPxlO%2FsOG%2FemZ%2BXJmyRScKQla5WlZrsTPCBfK%2BSJ%2Fux%2BWtHF0xyZ5i6LmlGKleIsTMQxzNMbMMO4noaIPff8HwmRS3yE4LAAwrg%2BzliwX1eH5bDVDrmqsHd4izpDypQOQbXRPoP8%2F%2B8%2BBC7MzMsMgmAeGdktieUCN6bq8iff1jxHuJQvUMzB3qldj36y9XiM8m9vlPXLTSo4LlklAQ5zLNJO7C39RASWX9hvbdYcjEvV9aEDoCUYP%2F3DSqhWMKiBpcIGOqUBDLdLsUcGddTM45lucVAphJYFtw0slHEY2Fu9b6b6KrmC3uNyDVdBbkoXauQpV2KWJ9Dy9UTPurmrcRro1a14jY1kDS0Swb1kRH4XxAQCxUOEHABa3AocF7PKMNnNyRpNEIDNk4sAqI52C%2F9DAlq%2F%2BdctGqkJhy6DkEzhXIe23Yxa741zQMASjxY4BL1czFEvr8pVOr33cLWSWCkfIYKT5LzNTwM%2F&X-Amz-Signature=cf858855b8a9b3be2fb9c28917aa97c1f4ff9ac246e5c443b45fc2145cd1146b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
