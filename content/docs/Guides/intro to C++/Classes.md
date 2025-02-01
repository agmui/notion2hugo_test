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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QOTBDPI6%2F20250201%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250201T210147Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDR%2FcizS71AiaD8%2FKmXBSaqcI0CpCAXU7IRCH%2BeZTjePwIhANM0QCYMNOhiYYZP3oI2TLS8cHC8HepJAAu%2FkLD%2F1O9hKogECN7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz3vAp76D%2F68n5UTkYq3AN52J%2F0%2B0so7%2Bg8%2FaddpZwDp15K%2F9l7%2B5ml2KKH%2Bm%2FyEnkNeWjPYf8ylvLXVluW%2FeVL%2BUcjdNqfbBa9x4pzgGC9dWNpK%2FVMJA1ljzXyDkQmzaMLRqf5bONzEPO3Qb5vEfRW2O%2F8xMKFbr%2F37Nf2R8JzkNBiUNFiG0w%2BVoGTGV2fMmPKtWJNiLRf6lZQu9ICQZ86zEsqJpxoog0iDeqMjOs%2BuJxyMMyGYVxFPQTLBue7LIjGlb317Bg20xULv%2BqS2be0CseFZHzkdHWzXfk3L2RVs03JPo7zqd2HEtWZmNJ1bU3ObJ1ijj%2BnOmgq2Wt3ylU1KsIw38IsBoYUSpSEnqdTZuODnDz94IFGU8qc1rxocI1nWDWe%2By%2FCk3BngjsXJJNSaZyMmmX6buG7eu4BCvNSLQU0ddrq%2F%2BwUomdgVneDIrgQHPJKimKQKrpkUdMMTlKcTNdGQMlMkP80Hy4HAc6jCZLffMlVFLuPxJ1YnpzKEHVkCvWg%2FhESxXoBlmCXqXPEQ5NDPyZ0J15R4iJzm8UhLEzEXVniiqj6qgGjZgzdEsnjnZ7aQ9pzUcHvDU9ZTHb7KUrj69HHuoNrJ4BDKRAV4T1Tuo%2BUFe9onoDfCM9xZLSDMaEooC5hR9vjCzDmlfq8BjqkAexWEATHnZIpdBDXKT1Qz9xwQMs8vU%2FO8%2FQMu4ycZMCJLfZR1p5X73xCnH5JXTa9DCldYsSvXlyDcJJzcbEI3GBD%2FBvWsSXCGnUACQfTsjhtfrYsHGo2po2cAffhIXX2EW3HfUc3mNFkpG0nSihZzNQoy%2FJoyfR6Slhf606y%2FZBzYhmElS3Q2i3B9uScwNf%2FPIwgc7FbrsSrHJJz7iAxrLuB1m52&X-Amz-Signature=78b37c860ae4b94e20d977a56d3f2d6d9bb154fdfa9958afae2bec413c2a68b0&X-Amz-SignedHeaders=host&x-id=GetObject)

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
