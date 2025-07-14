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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZMLA44PN%2F20250714%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250714T110821Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBIaCXVzLXdlc3QtMiJGMEQCIDaCPsPmME0eSEOZIb787r%2B39owG3AlCY6enLIrquZj6AiBKpTKuauccYGjN07TDp07s0Z8IWDVy4d8fTHccYRKf3yr%2FAwgrEAAaDDYzNzQyMzE4MzgwNSIM4J1q%2BzEnqiT0FjTOKtwDQex8pmuqFTqC7gwQBszsEhFWdqBIECEryzjjN0F4D7v6CN1b7U9Nr53XV1NdJgblvsycb2NL%2BxIyS60q8owjYwc4YL2nT%2FOwl7IBr5NByy6H%2FtYsPF2A4UumR3psAccXFrf9TZEBQ92iW1Oyfi6ko54%2FE5%2BsIPdMJAG%2F0vOMx5to4BK%2BNbdquVDg%2BfnRf2doBZkB8T4o1m4Hw6W%2BsTduM7NKS4mXuWvZslAJviiyu%2FOk5WBfFY7sP3V6nookgZHe9UHcCj07UxpNFkIkd884fdX7KNAH%2F8aLLESDlx%2FlGw9EMUNRO2qclmIG4tV%2FVMcvIzz3K7IOGGAeKu0SWKvr7CD1mKCd1A%2Fobtw2x87YahbpgxfzQovo16TbujzipTncybHQNUyMl8EIvd9iYZssX1ea6UMps0xW2dSp3lLLsctChuXgrEbzFnJCxk%2BMzDy5oypK2yXCJzneRBPlKcyje6EkTw1rGD5MtjEwiBLKuV%2BKExBNfnYguyT9ceOz8Tqrgao1PqSMmsJ97HD2l3BX8Upq8jpFIq5GyOaA81bPSdHiQ0qGHnt6VgpVVfMWnZPHhIrsps5gUWX37X%2BPL%2B4kEuDQ3YiPxcgKw5vIhvucJjJGzoVJn96Eo0U7Gu8whbLTwwY6pgGIJMqQWbyWJ%2Bih1G0XR5I7O8LW%2BUgcCR8c1Tlcjyr2%2FdV9dy8lCV7wkXQofyB7oj%2BlsLl39FDQCiavxhy2IUecZTi8XAVw7TuNirfO5A%2BRxVEaBSz57SRp5vtRzHWAlfW%2FOesLDZ6zhR8zE6MZYoZp5MOs7bQ4W2kEFHrvaZP71MG5NrJOWiUEyv%2FM45eessQ6PrDQxrGGccdgdmJ7jMBHgLGivPOh&X-Amz-Signature=0d169b187c7dcf7df55ddde0be54ba3186ba31fa8a76cd29889fea419727307e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
