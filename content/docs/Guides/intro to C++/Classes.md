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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VI55ELHR%2F20250316%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250316T070718Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEjF7mLcKbIt3PTGhawAeS7ZCZfq6VFA2WmxSLTRtZZbAiEAuRbWA0F1uLVeRPa%2BxidJGCpZ8Cy4ypldaxI0hL%2BVZ6Qq%2FwMIKBAAGgw2Mzc0MjMxODM4MDUiDDvenMtIH%2FhRHvXHiyrcAx7ycKE6s0IWOJr9Gmr8jZqGLAGEsDvc%2F6KkjFKA8et4m2V7VXBgGYgbskc7YMeY0MMpC4RM7oOOyGGkeNANR8iDY%2FLtEIpO04TlTbLCNanhQw25zckspuYlZkfRDYSG9zevF0Z9PxQdyCLyHwPlkJJakdNmyPTriqeMOjcAlhXJCCtLumN0M8dp2EbEyoTO%2BPRLqHDKUDhgeX57kMh2vDS32B15zwnkCXPEH50uKiXU%2FDiy5hJM9bCLcM%2BJpEJ4gVrhNObHI%2BySJjScoJ7YD%2BB%2BxVQ%2FztAarh8UBfH8yDjAytrZC8adn52WjXgKACtKTiiW2XshNnqqdcuf94mL%2B%2BVs5QJzH9PTa3WMJqBYglFQyUAZSmkbhHrFOliNxuMyx3j%2FURaWGU%2FSGzW6R4Q0erebkIrH9i6mV%2Bqf8fRQDBPfWez7FQwfnI9MmhxxPjT7gB4I6Bu%2FCWmcMTciHAtVCDpgDuML91HwzbxCclzcb1nzk2Nd0iixt9X5eAZKvh9rdN1EomzhDULIPdnJwRjpiePuLI%2BknmX2KH%2FC6FuoHxy5D%2FgU%2Fl9QFGMATrpwTpH%2F4qwrSPhS1qbbT2z6VcTkf7FBq5c6d5zBJ6vBhO6mzWu50Y7%2BocoRdmgn2KDmMILr2b4GOqUBvu19tgVByq1VzFYU1VbAqSTMVHf%2BcIL%2BwzFw0rPguepOyxDCDFKwLCOJv8fNRefjkK9OQQ7sNC9B%2FwUdEInDCSAzjvimxFSm3CJPgSzdebDk0grrbSWAIZHlndv4xC645HifCuQ9rw1fyta4Ho1eyBaAvujA69TQsYHOsJwJxF9f3HTNcIBQhWbJynU1y8EpfcTN3M0ug%2FHZNplTM%2FglCQ8ODa1s&X-Amz-Signature=4fd87c9418bcb7d720930e4d98641dc31d9f86a1bfd2a3dc403f5ea9fb074001&X-Amz-SignedHeaders=host&x-id=GetObject)

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
