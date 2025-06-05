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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664NAGGOIZ%2F20250605%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250605T181543Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJGMEQCIDXgaoR%2BfDRkJS6qDfLPDltuqt%2F8%2FEebydczzeXEPkowAiA%2BfkVGHARSfqdz5%2BCT8nQrn0%2B%2FhGh3fIws%2B%2FlYKMxepCr%2FAwhLEAAaDDYzNzQyMzE4MzgwNSIMu0POS7Kr1Pe4MCOQKtwDYHKJlBwPcn3pc0KU03xZDQp%2FqEz8M6HPEgPRfDp4A7DdU9TdRzDXTKkQtbS68Y6BDOOhIaVSrV1Ejbg607MMZitzUBL94bQRhDu11yJweArItmtXs6a0HTwBtaddpYBeygOTxwFgpc2wBsmSv6zHFa6UncyPMXacmjIU5LsYIrGo8JKMrxTzuPZSDj3FH6kQEbsxxw%2BWk6zGcL9460RTh06mLKNewI56BlLmqQ%2Bx8e2b924xgCwymJhVx3MaE5nFEUPupSRLca1LuUdQGDmg6cih7j0zHrZ2zPWwi%2FZAhU7ZvA0v8sTiRRA%2BOUBz70x283T5ziA14nAw14%2Ftx2iPmB27SrQ%2ByepUBDO4Kp6vKEjDliNT5AYsBp4X9T%2FyNB%2F2crA9wLZDTUKAn7ubOOBytgHhy4Pp29LlvLxFPPjy5rMvmy9kBPyHF3OA9rdkyO6sOnaKDK5Cl%2BclZEFBme3qQie3%2FemzX2544R9iP4iAsn5sTV92Gtt8eQWl028BxqaVrMZ2ma5okUi%2BtYabh2Z3iYl86N4DzkV7SoY0AiQFkeHu%2BLy9ABLaWBWTGG%2B4X2wL6r%2FfDeK4QhgdwDbaSUUqmYB2xwXw3mcxvq9ddAlRDsdARLIhJTtMq3e0kmIwkqmHwgY6pgGkZ3xB0xsPTh6OhQy48gNPeTrCvIfllfvabfBw2Kym30eXkNHvNC0BVkzXpnYjG17QiAO0W%2BTdx2zhPjkdZqpuRt2VcpysGRJcIh6xJY5nJgZJM%2BID2L60ns2yQ4eCoyMwvi%2FTFqsQBl0SGyJQe5sJFYj9%2B2xlMjOS7JjayhlqogVMydrVs5gYIB8IM0hBqXt0SG2llLFSjtTlOdit4gCExE6uH8rW&X-Amz-Signature=0cff3bbc4b0861ed0d307f08262f49299ca8f1362f1183d79af0151f8fa7a52b&X-Amz-SignedHeaders=host&x-id=GetObject)

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
