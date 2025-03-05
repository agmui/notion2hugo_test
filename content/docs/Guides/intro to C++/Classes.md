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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665SFKHREG%2F20250305%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250305T181117Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIC0FPtRz%2F3v1OKbWB4P%2BSGx5H1wFqkwKd1Zem8gP2hySAiEAjO5nb6Yw%2BWoW3JHWbPd8Y8DURGunx17ROVKoA%2Fz0t1Mq%2FwMIGhAAGgw2Mzc0MjMxODM4MDUiDA%2BoJKKowfK%2Fbc1YOSrcA%2FmcAVaC1tGRaM6uYBExZWL3wkFfRm6bJFxeOh3711Js3mqy1M%2FwuZMvYy1yXyTr25UCMo7xzeAFF7%2FsL4q2tqpME9YY8TIROopmyUq9yD16bcBj2Yps6yI%2BvOZwjv3u5YNI%2B0lMLMKCIuYvio1MhgEuts4pVWeRqNgE8tUfWge%2BKDW8MT9S7SuEWg3lul5Cen2ogEevgRzoZao3wBhVFCTxAzfjo06GFk%2Fbgy6CV4OafoAzfRXsTLrrI496G4jVdx7TwMgZKS1ILDqfQmtFdCt3847J413Q5%2B5kufqDskTALKb9YV%2BVksTFMaJKNufdSTxbNTeoY5CXt1tbJvzLQ5pNI78UvYq7sUodhkTWE5hfrX4hENAKPy9WjRz9ngUda8xtmiDLMm4wfUl3%2B1IYQa6K5tsoxGieQy%2F0LyI0Updr%2Bul8xCN3hTSLspITNIAjYjQn%2B%2BFmKAm7fTRFqLCpmiOpi%2BJ0eZAvP39qcGCE%2BlQPDEof%2FuhMyHLudxdjxPUFZFcaqZUZZdLiRxG7OU1uZH8yAnqW404Ip3Mkh%2BvPlPnbtWBv39EgD2%2FrHhzb58YgGSjJ8oTa2KhJXPCnUXrecEOaRPfhZFobkQBxfI2d0QzFrQMnG28TKcsA7TTZMIKEor4GOqUBhdlzdaC0Jb1m9b4Xtfi5u5aVj6Y9kV9HpHqXqSXF0p8hoKrd85Pj8uR9zsiAzwxdN0%2BMZ09bNNsMI0o4lKQq2Gjj8UsNAlwsOgSFne9pnm730mPtGRlfGZlaob4zaSgFu9lj%2BPZGAWmKilcZ5RX316jvhJDDqctXKpbEt7HPfN%2F7DPEGDrFMCTtPOUoht%2FYVqJcZ5pzUfVBp1sA8MQKSe0bURyBf&X-Amz-Signature=c281becf1e8516f2cca3db31802bc6c6e7a452ec6ea45fbe5a48bc9cf7e0bca6&X-Amz-SignedHeaders=host&x-id=GetObject)

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
