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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q3ASLRIJ%2F20250505%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250505T121519Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDxdXtZqz3ma0INiXCpJkmnA1aQwMibfdXFwcRP1RahYAIgf80LC09k%2B0QyWkml5FKdr3w9ltNZNI6cWXlhz6MAalIq%2FwMILRAAGgw2Mzc0MjMxODM4MDUiDKu7ganK%2BEubrBE%2FtircA2Me6Ak%2B6QHRwzC1EDrdDdvVOvVAGtKkcIFpXNFtiPFaKhnylB%2B0RiZVKlZLRio3xd7gBxr8m4%2FFl1xCRQEFFMp5Yydml1OVbj3h%2FXa4CgVFVfpjjih2zwCDXqATYOspxnmDzTy55qLi76oChG4SmrpT8vShRNicM4YKQmKJLzgqmwSsqA%2FznDeq0esFKYbNVwGE6GV0Tw9mslxkYp5gX%2BxS5EmTsHL6bJRUX1mF%2BRTYfMil7vhrgHUuH8LfhHiS%2BLOZvmnyYQmQfXmZuBvrtb1rwn1BXQE4AsROeiGaE8omiMMojicYvVrtEq5lNjVTG1gE1tXYfndyZ4obYkv%2BO68ATTxdL%2BkbvvfjncSrn93xPIEaAR7LQ54pB46UeSGvJPN3XVOekVFczN9jm8qBR9w7qlGyaCNnvMiFyB6pk52qlWwVZGwUEFHM8UWWvCncPLXAwDzcvBye6DHg23clJnP1qAfvffJ9vjh15GNgJWQ9QhRBjRWGw6BsB7wuTBhjhvut9Yr7eBcpd5M5PfQJX9s6ZW79xOI%2FwqTp8At9E7H9TOzus1E91OfByZM1McZOINtnUdLKN3bc4uWA%2B%2BupLWr0rrQXWPduUGKaKHaODoBhMI3dqBhG0dF0HN6aMJnL4sAGOqUBruaAWqZ%2B%2Bdovnfjej8kVHjbb8aUIUm3obUicTF8B4veT9XK479tjK8l1OX%2B90K%2BOr018nS%2BRqyyLIDLlYBLk6kV8NHm1AgMBPcVujrYXLfJ%2FfkvISEALtObwa4z06MH44RiPJHd8dGBeaZx3IR8c4930Sjv4EPMYJJ5s6WiMhJg7QPBOhwpYaxjLYOUhO11DmQc1Y0rnTsm3CKCXS8aklO3pduCI&X-Amz-Signature=8174aae1d44e1d4bef460ff816cf504288817e3bb9a04a11fb64bec757026b0a&X-Amz-SignedHeaders=host&x-id=GetObject)

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
