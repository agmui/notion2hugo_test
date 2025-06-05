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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V3QSG4SX%2F20250605%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250605T200808Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJHMEUCIQDzkeiH8u2K7YFjDy0wVtXu8WERn%2B8EJ%2FJTfADVotIaDwIgT0l0TknF34kgtLPDNwWwRSjNr8cgQZUNhwTe0iBHwxIq%2FwMITBAAGgw2Mzc0MjMxODM4MDUiDCeP7ZNPgY%2F5VqFbDircAxEzwoVsjaj78NwuH18lUmtVhnZcbeCwt9JoHE9AdHY6tecRhsqzwJ2E8jP9NPMQ2vDKCB2zcE%2FUlSfwDSXH60iKBrtXSY4RhY6WaYatu8tgD4yTWKQ9OEsa9SvKEMb1SGXhxFqkyTqIzyMvuUXrrDV689Bj%2FjffBUNc02vlX3CmlVhINf6hNFjLxsp9KKkpNieIpJUJ0YSGcCxfYZLfZUvxeMB%2BE2czQwj0%2B3JqOnk8PKsIt4UpjuW%2F7C2mQdw4uvsVs7%2Fpi1DIYarjYuD1RFFAoWNmG8KLiD2HAbSObh9wjNBaARcELMv4zPPHdLkiSvlpPU8nkA9ZLTw4aXVb99JFdQJMopa4MXy6AVpZd0sB%2BRW4wcsd2M2Hb97k3V8R32eLLqfTk%2BXe8lrKADMWoEFsQTnaZ3y6Ovv%2FH6nA7Aa4rX2lYSLSF2sGyjYWina5ekdmB9P8rQXDDHGoakU7jWViLTYYRcL7A9ki5%2BwlAdpQxNGsbMPsd7gsaijiqcw1gqOfFlXh3%2BTWIXUGrCfAwJojDxAPjTuS2Xbc%2FTs0%2BT0ghF%2BIwd9g%2Bb0nYfRezGopWLJgazfIB0Z%2F2%2BsxuF6wxMONeFz8i4OCA54wPjlnjmQ4fRHWfr5UjyJpLDMaMPTXh8IGOqUBWpKi%2BNugVqWEcJa4GlS7ZL%2Fw84yPF9nUXwzub%2F0rJXZknDq0spARyvSE0KCwMWy5oJXOF96Nr5kewEAIigktefKprbuX8DspB8XEBAfy39b2YX9%2B6cxl4YR97%2FHodkcROQdo4o0bThDkr1S97VrP%2BiYEYwnmZFC%2BDna%2BOnS3V7i%2FaUYgQd8CGGORELjiIfose%2FJefa6xEpYKXIlZ7oNTWV1DW8%2Bw&X-Amz-Signature=6a2d579b7ccb1899cf73be33a4154a127aac4f37812402ac2741e5c4a9799815&X-Amz-SignedHeaders=host&x-id=GetObject)

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
