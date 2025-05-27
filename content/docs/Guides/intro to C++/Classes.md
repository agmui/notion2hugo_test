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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664D7LDKDH%2F20250527%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250527T004052Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCZFZMZedLZvB0MOjdiG7GKHhGYCpONP1ww5NhvctIuEQIgHuDOfPeEtNsKxKOQoUkBf2YThw7RgD6ReuWOIRGgFCUq%2FwMITxAAGgw2Mzc0MjMxODM4MDUiDJweTp0QpqDWVveyqCrcA4FEUT3MawZqA54Gt5jrRxeCmTF67KDXsZytyWTuybIjyGaWzZkkLZzPcdRM8Pxmer4fl8ESzkp1YF9QLv2OWziTwlKxeNemWwYjz0MCjuxJ2d5eslgBic9XKK3YB3k%2BsxNiQjYsdh5Xadyu92MzVmA6YXC9v47y016ytAKyyEpv6eOsQJWG69BQM7v71TO5LpxAAm0uXInYXIbXjah3Nh52IvTjdy8o%2B9ttQBRD%2FXRag%2BcxTWoIlsq17j40NGNU7cf5V%2BsZ5Y0uh%2BOuEvWntqtjaT6Sz7mScDNkDZDF9hyNq9WoktOk04Co4V9bXTSnsMkeXBybP%2Fo358%2FlcK%2FrHvny%2FSXcaD3VJ4r3nxieRqKUzr7fisFMnn9c4JzIRT1aT84xWCQnr7AQ9OkwuDz14B25l0D4JG00TJRQt8y1qkUPgC8p%2FeN1WkW%2BCISXAVsZY9B856q63xAti6pwKByLLjKKZl26ASTO8uf3FvQTU4aT3dhfGxfcr5n4jKrr1SrWtwe4kq0iAacmbWs7udxNcaA1XZkWZ2vtLxyASLOx9OE8gr%2FhtkQf7zexAIvFdqZ7cAmZJKXOjuC1B2hgs5T%2FqzUpkuo0FFg6nxY3rt2yVkM0XHurTKkqPJlXaUHMMJ3T08EGOqUBuRTtcXJXy3AuIh8uNUETCM0%2FKK3Set%2BigcYPQuaHXU9RT4LifgjwaJM9IPASRhNeHwJU%2FxNWHEpbSRdyRC9nyP2gAq7nE9pf1xcLF0%2B1YEcTIPCbOD7A%2Brv7tiptLtTtCaergGcK62gSgOZzO0KvL1YE3YrOs01a7XaLA5IM1xT5lyGlgkTNDUVEH9bczbbIvGSSH5X2p9RpkkBBfi2VW7e%2BgRD2&X-Amz-Signature=b2055d41ca15308bcbe089c5ff907bf04f9f094bc0c096e4179f41b56ad6d1a4&X-Amz-SignedHeaders=host&x-id=GetObject)

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
