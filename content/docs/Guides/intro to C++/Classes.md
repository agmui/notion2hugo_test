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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UXFJJEOF%2F20250624%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250624T171009Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDgaCXVzLXdlc3QtMiJHMEUCIHCsf2ZG7pPipAaeOfPD4%2Bvc7w%2F5PV3X5Sj7ZDj3IyyvAiEA1sxqL5Cee%2BwjGNXQ8rDlI32B5pbF4qT1B9OF3brYDRUq%2FwMIMRAAGgw2Mzc0MjMxODM4MDUiDBhwxPaxM7qiGhvwDyrcA1q47dvVB2YRvQKmFOPH5dSLLeq%2FcQAW8fN02LkAI%2Fq6vE82a6BqaxT4oZQVBr7adZB8332l9FvXKe35m54P%2FHiJR09Mq5N0tlf8Yj911GpQKMoiogvRYN7euB8MARFaBAy7%2FHDCZL9uMS8MsyTyhwr7RrFbANKXHfmKqK%2FZAPIdlrx3PU3un5e7kSI%2Bm8ZC%2F0Yc2Ggwi6pmdiHHO%2BEwclYg1ECvvVl6DhmNnyomfGkwlFfHsT33gg1UBWgDyrzXNUV2IcRLIw6pY8IsFGpCBX4UIq55zd9%2FEAQB6cLjWDnBwnbhPfOtN3g5SMyUWTT%2FKSMKmnxRi0xateMYBtrIclWw0br5j2Kvf1Q9tQI0jh%2Br3Q12oBU9AqBDt5Gll3FvMNJr8clpScF5EiynOnYT2pj9EtzUktFm35NnvpebgOBLJW4RcXr8z9VaGzHsv6cIHeJfzDzfS2hG8iescn%2BkvEbWaUO8swSAzJYWkNgAKKtY51JohQOhm3TjmjBM7IjX%2BBTXiN1YgNoLMcNNSwEXr41fX2IUYSmqshd8uX8l3Iyjddl%2BNbk7jPmi1wrBFZnyoZ169y1gp9E%2FD2W2%2Bne8mhEC0FJqVqz7ZeyrNF3BSJTgzfhEW15Mc16V%2Bsc4MP2Q68IGOqUBSPA7x84htieNBS0xVncH4AzR06dYB2%2Fvd39keu%2F1sHS6NB7xt1D9ptVLZXaWOr6sMKMSmfpsaU8ZYogPPzKhP6DgmSHFAnjHGSSFD8PtNkRJjIEx3WiPRxna1S1bRDqhuvvZwePPCyqAlqqLhO87I1%2F6nd%2BF53QDHlR1dvSaR%2BKsqHZmmqhvN3X1yZYxchzDbSnK1AK0mWFuMokaZ02OVlcFk0vE&X-Amz-Signature=a91f7b3b443ad64e65572ab589f507a552779ad4c0258351a132920752a85919&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
