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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z5WO6U36%2F20250204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250204T170256Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBkaCXVzLXdlc3QtMiJHMEUCIQD8PdQML8LwgSWW6vQZgS05DhhvSD4tIoL%2BDrvMlqwbFwIgJ7xOYs75NRKpTFKWkAa1pz%2BvrOIspIHm0BXUoxRcE8Aq%2FwMIMhAAGgw2Mzc0MjMxODM4MDUiDOI4dUfmRwBKlpD0KSrcA8HqXj3w4LIZKV12jaxW%2BvC5yrIF53rO00SEIo1OXB7ScSGFq3smtL5WVWoGAPp5eqVRADE2IQUvO4Q0CPS1NnyTh4OurG2TchU3LLgB8xEAizyVEiYRz55LS2RF1TTQSg7BASpXxyd%2BuIBFBsW6zUTkvcMaidwvCdYB2HXvYwpiERHkBjqryZhWC1TXMrwgGsepg2A4PSnuBKgRqUgPYrMmZXYSteeYJZLvzmDoiu1zyvG9hYbIByaYMi3dzKMZ11bcehLLq%2FqfcYnTeru5BL0FH0vD1Ep4mt1UNBOGcB1LswLTJaUT3wR1WsZYsLtehrNbbhM5Bqx99hHkL2TttvvkmtFQZsXQMLtjm%2BbZMWapUgkzzkcvS0D%2FHeNyUxW%2BBTtJJA54C3ITpGNU4TzkjkD8ilgDWRn3dOBfzqR0d2X5HYfby80UOjc594RFJTh6CWGqohRHdXixX14lsboyTFRWFqJMk3sHikEH1wtreWuXLb4ndZjjg2Gc5SAhWr8k60j93SaAi1EqvKFt8zt2pze7Y4x8BGOEGiIArYQgoeSvzmYgTJbORjq3%2BEcTqBrxZU3XQywrOq53qb12Hv9%2BS%2FQjSgENBKA9eBvmHmr8ybq7Im15XqYmMbkdTER3MNWFib0GOqUBpF0q9PyZAjQJUIVnG4ti0%2B7M8tGBDdvFzma4YmvEaa7tytljmM9kGzWiHC1%2B%2FdFc9BgQ%2B41Dgr%2BYwTZUOXJV1BMfM7QyLSXx0ZmyIVu%2FjNwnVy90tJ%2BhBtfseMFvlU8m00sBbepHbXALZiLu3NKZycQ2KXTXmHLgFQKVsJspPNBYI7VeJBfN6JIphYv6LJ%2FboigmKUA1itWb%2Bgsn0kMMny2INNSd&X-Amz-Signature=0d367140cdd92843b12568df0c640772f75b045d681d5770e40b762d6acadefd&X-Amz-SignedHeaders=host&x-id=GetObject)

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
