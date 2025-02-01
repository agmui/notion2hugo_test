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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664Q2MJXV3%2F20250201%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250201T220108Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCTS0by4h8WAqRjgA4aFy%2BfMxd7MqoYAAjL9C%2Fdrzi3eAIgPeE9z0YbfBbRB4RWcMLxsis8PVjRz7Ds1zGApBLJTB0qiAQI3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHjxXGxVqVGcMRaWHCrcA5%2FwMo0xiUpgTOKRApWI%2B2kPJayQR6JulLqblw4PjDh7O%2Fk3pcnSy%2FLkZzLOZYAlWCTUQeZzATo4%2FbV2P9zZoB306dIoJxFtjhiNOOk%2B%2BAVkB0maSVexw4wrls4tdeArYp1%2F95HDhHkz8vJyneuddK3t8U%2BnibNsFHejuBY6kcH2%2BZ59stYjp4bc6H%2Bi076lsUy6MDRP4XIlB1S5PGVyk8mE%2Fd0gMaat1fxqROY0JIJPEDgR0WuTXkMBbRrrtymGOWwA1ma57imVeTZ2h24POrbiaYejo8cj8GEObTJjcKYx%2B%2B5aaJrXI9%2BP7nC5VR86CTAZ%2BGGBufY5TQH65bfTYt%2BS8XRm6z0eg60lGLL7jLQKDzQEd%2BWcGoyJlb0NBFAtDZHySOHDpG7gBB8Ixh6KOudieClupd%2FFX34BxA14mtMHBsoK8PVd5cGgvwt2OE%2BAiCwUqBJxloFx2kxcGabi8lIMFo4q91JwoxFAGyWxOrUUROQlO6kL%2BXa2UuM0oQAuDUhJJBb57nMz%2FFX8r3liwIoQeIs7xTOpJLNwfhLh%2F0kme26SfUFU8kYzZAfE3CT2q18epRY4704LzrLGNaIurgEt0rzNkrWtx3ujm7nBiJfmzyvOw5KzDUepbWC%2FMJOy%2BrwGOqUB3CNFkeQ%2FckD28qv5Zp8MPEVgitmKqblF%2FPhFqW5Ji0BjdnJPgz5YoWIFIM%2Bs8S0MX0%2B8r3iveylD6kr1oIQSdpgM66BYM6LDjx5hB8WUPPEd636ohD37KZ2ZIUuEmbHoyeWy4mWBztgCCDswWdPvBugi43Fu7pS2etAZkR5yOq3EniE8hLda0VGBsaiOBByE03I5RUpbEI32mH1O5xH5elDdTnXx&X-Amz-Signature=329a7504c6c15308c6c159fb0eafb53552cc02e3c6eb2505c884ccbf78b0f91a&X-Amz-SignedHeaders=host&x-id=GetObject)

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
