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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TUAHQUMC%2F20250309%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250309T220338Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDQaCXVzLXdlc3QtMiJHMEUCIQDIggMEMa9v%2FgFKAD%2FJHcnCengqb6Iya%2BbW%2F8p9W73fVgIgOHPiaTRgGNRlXx5DeJcVg%2F8LUYPziuP9gRVGkZ8QR48q%2FwMIfRAAGgw2Mzc0MjMxODM4MDUiDDI9tLYOmgPmWc0trircAy0UXWK0288KgUPVUUNr2KGzM3OizxzWZkWgCG1GqNMG%2FI31Esb1nYlpJJY3G%2BD%2FKbkab1sCYFd3v9GFWoFc%2BXSgJpFsPJI%2F5qbB3ZrqK%2B3FrSge4g9Kdhx%2FSOtJIcV4PCRMRfhh9uoO1cPumnnRmELOoLgGRVej9sEE%2F1TRtm5pEzvjR%2Bl5ROQDeh3peylHxL2vC6nmOwMTnhPrMHlnL2R1jcI0dovhsDFVXDz8EEnNvij8EuUr%2BG4Ch2Y0Y2kXENi10cFsy8S%2FgfvmYX22XlvVUqWAG%2Fb19ISCctGm3IsocgorYbhM2UVlGZeK9M%2B%2FsuVRlM6dlTw6jrtxinrnDMxeEMIpHxfpey79Bz13vbWVFASbSr4w98NjqPw9QaREgzxV252gQCLQkjJjZFXM6wnKC%2BdaX8E5I5Nqi580hGoHK2E31oeDLVXWvi1wuSZEUoal%2FU%2FldWo5W9z7W2Ooylzj1K47JikU3uPuUoekxWzffa9xbtFZFSuRZb4tWrQYZJtSmHV%2F%2FM4HNFg7XSf%2BqVAOBKT43CqsQtFfrsLvqpXSqTO8MVBB3p3e%2B0owzRmmPzC55DKThv8KBd9X8NyQE6mIl950mftWmoHNbHvV1nMHmIefULtKMLeNBPwLMMrgt74GOqUBNDe3x7PQDyL3XnsHtnoDIFGIYAnYhSQM7xJAV%2BU5odf4fk1ni60VDZv88gU8weeAedlHRlnKD6XxrSEZPlPPZWbJ8GTunUoGSZt2sfQAv2vWfr8fED%2FuFx5OLceA%2F6oa3SYjAh%2B%2FBli%2BBst1g4JgCPgoSF8Vqh2BOqdwrwogi%2FJhgqvA2FlrSBqxtg19o2qoEZYY1EJQV9dvft2jinQj8NwcB2PX&X-Amz-Signature=f003c33977beee9a6fe2ca7d5a6cd4e47022ebced8d89aecd699060485428833&X-Amz-SignedHeaders=host&x-id=GetObject)

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
