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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663ER7HH3Z%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T220906Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDhXRoC1S%2FgVMXMUYTM8BxVaMMPoF7oRA9i6O2rSg5KQAiEA%2BCntlPAPtSN4BsTKFeRvYtb7E86fXfpBoSWczM0%2BjqUq%2FwMINxAAGgw2Mzc0MjMxODM4MDUiDM8Pey6RkZUbm70ejircA0CKjqPcnrp3RpoibzI1QkFVErngwyym1AejISTIG4TiHv2SJWe9BF8GmE29uGlXlG9%2BA59BB9LT%2F9bA1ADSaAhUy6q%2FpnYv7lObd%2Fy5QvvPn37eV9HBFj495vymh1qiXfbsmOEmDEnig3reROeiwkVH%2FBRDLl%2FlgOSdtR5sO9BqiuBaqYkgLz9c77szBu9jdLAARpggodwQk7zHoQkhI4z%2B6plo4ZklopjhIbkS7Ce9Ht6eZfY6ARM9xcyG%2FozmbE5W%2Bbx6JQXSBq4F7PJH3Kb1YNKCPky1W%2FjSh0w9wtC6D8mWbhfYftADkEVeLokMaJcuZ8eCBnSgj%2BnV3ZRb43H0wEBABNRQzelZAFouY9uNF%2FKPtepo8iS20kAJKqQkwG9WF1tnZIwIkB3AzWiPuqEpK2ipFelsgA0Y7lRLUIhe4AMKFIzUDZxT3c8RM712wy8TrB2Fq78lm7E22tpuqVCCwcaVsAOcqhciUZkvkPCtBIK8uGnwe4jTlIMJknRG8ZpkEIui0236vkL8w09NrK2zorG71IxokskmTPev%2F%2FE12nh%2FD%2Bq9RogU%2BEiDPAfAOlV4w4F9qxZJW1cEwEOuBtw8%2FKyjrJax7%2FdhwmkCisJxv5cho0kYC4xd0wn%2BMPaP9MQGOqUBfykfHmi4zg3N3MDYy0LhDdFEcRAIcyDfLc2HfYCSe1811hVwbmFQdBhuInV%2F9LRQr47K1p6%2FuxMlmq7s1YyOCEZGqpwFe9bxJ0UDllt8gaxf%2Bhi2i9wj2vR7xkYqSqbBR%2FrpXKTx8Ht5NGOm9yMoQxAQYe87ilznuj6jQz8QwKThry87s7nlPbK9nf1F0fBjHnivjJGHo%2FqDctMXcOl0y6kB0t06&X-Amz-Signature=8daead69db0fecb1e9ef5cc1bfc7dae388e2308f28a1a4c5c7fc616ea15ea6c6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
