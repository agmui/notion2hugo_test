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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RIWSDREK%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T230933Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA4aCXVzLXdlc3QtMiJHMEUCIQDK6q6U6IxJgnjlUyJT8yhjpuWi01uJe949v3nSnehi%2FAIgcbZ0zvP6vSXBLnBoRMR9O1hnjWOkokHCrzKWg7qCb4cq%2FwMINxAAGgw2Mzc0MjMxODM4MDUiDBSXMqaS%2B9vfJJKR6ircA5z8gS305KieQgujcCGeL4xvcv4OasANSIiU9lHcUkFUOQHxKgjzaMV0u3IqgJlDEIlX5U0BCjRnxx3xirblRzLGZkLT7R33kd%2BQkJPx6ywu%2BOFhBT3bCV1II6eiTctORCy46QFE%2BegwOWnJvFeO1AHHLQ09ku8O%2BcPGT5ZIWMoCGzUtERo0k13SeeCFtHN1iMLlua9PsFfb6UtmIrwdRyo%2F91WhUTkhvUU0zhAWfurKz6zZEqx%2BPcknlASRBOjNfq7xMY9xBU%2F%2FSE3SMQZw0yoVI221vWWOl9bRs1eP6XaMC5ZOstKFeKgEzn7qdeX2aHrm6FAprisxEQdY9FisDLpq6wvxMUSo9Sj0DBmk4s2gEcyUVrE6BTzWg80RBrtbUAJg5yQ%2F%2FGizav4Flaf%2BNr5GIowoHdwHYOz74yZeMjv5XlK%2Bqi6kgU2DHp%2F4jhV43qh%2FdsUSqBdIKjJU6vmCodN1DgMcD%2FF8gvpdITRy0h6rsgh8JD7TR9agFWRaaS%2BcH5XTmKBkdPX8JJl1yUGz9cnxeD%2BzZ2PDgDJl4QE904rUQ49qbMyasslhygYBQxEuWus6dLm%2F%2BfpUuOMevA4ijCRO%2B4RD4F5T5LBA8rHw9lok4SU%2FRwfnRojO4vTTMOTXisQGOqUByfHO%2BEYnoFb7prFgz%2Fl0nQ4YARmscX06ttsQBMa%2BrrEWyzj1dVOVHuCClJ2iwOegfro53Hdt2YDXqxmHLApd3cVyUvbOe2DBRi2HpqJd4VGMp9s1U1zXNNYkKTbYrYdOf%2FvIsr4mxnlVWML11DetGUZn0Ue%2FYWFl7rVsIV6yhLTFuFT%2FTVxHccrUygkTRawTuqgL%2F%2Bi%2BYMcVSnE55dtPxSFPkQF5&X-Amz-Signature=f7c0fceb1aac0d8e4090d2f051beca555795d579d5428f0707e42be2d731b680&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
