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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ULXPLIST%2F20250130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250130T140718Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICLap30z8XS9H5aHgD96Oj%2B8Z2MpEEIRP4jwRsytyyXtAiEA7FgnHAI%2B8auJP%2FSpX0x0tcs1LJWX9tuffsQfKF94LdwqiAQIp%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMeQGZkD9%2FzADRbs8CrcAzgIr06k346NAyHgr02csd5uTbiSaLDHWWDj3llnG98v4e7MhQSBHAMKHUo1SxCv6MDNwLQh%2FhOSsdW8fDF%2FEQjlWD3NA%2F0YsenCqAjmyHuOUzdfWBVN23TvKuG2s8qfCJ%2Bof9z%2BymKZ%2BqxFzHimq%2FbAvJkl2P4LVhssT1d47Yp%2FKf2yPqOYpceQ%2FTCOVHKZYoYrP8PRG6OIQ%2BTBJNOkpMn6rgxywmtVBzSWn5xM8GnSulagxM%2B6k3I5N96Ve8vTOCbaOMm5yWAuldoRpxNdeJyFPPzQgU1eHKdydn4I3ou4MFfaPptRQXqFSPjnX7SgC%2BLLoe710BOLsq7g1ycJZUPbzthMZ05%2FoOXxC3oy3ygPIK6zlc5Ss5CXRIA3GRqaZhliCf0bj0UzH6oI8P00f7ECF6MGWgOPq%2BNGpQvCqSA3kfF8MVB%2Fzz8Zsd3rr8DKgqNOTGMX65DKp0JGcGROggdja%2BHol2%2BUA%2F5C2OMJXsHU5Y9OQ35ArqhLhufl4ZLQpZOKBzFP8HjougWJcLdBC2lPFTe8lkyUa3oijQtieAKjk98q11NWsHjxq17DH4QnDEuEO8pFACPTPKi%2F6qwc8YNGyHb4a5GuzTjkHhm6KmPN06Rv0sCK3VkkrrvZMOP77bwGOqUB0bfgdufAOZIAud3yxHQQ%2F7N5JSKLNcu%2F2NCl2igrFfUO%2BpaSu%2BHAp27PRHi8RL3HZKb1EpYwWeDBM7pOJDT71RbI94ubDxQDbLOJo5LqIequTlyAoZFJqzAx3bU3JS9kfSlw2tg11UggwNkAND%2Fva%2BjzsB0WHPs5dYJsrEiwhG7mEwx%2BXy2V3YXbik1AF6%2FUozRhRDcJF%2F9DR7iE%2FgE3lpWUlm%2BM&X-Amz-Signature=fae69ce32ce6d00c810d27c1cad2575944db91512254dc80758ac4e92a91d554&X-Amz-SignedHeaders=host&x-id=GetObject)

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
