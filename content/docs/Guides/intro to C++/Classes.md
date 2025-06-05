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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XTYMN3AR%2F20250605%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250605T230926Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJGMEQCIHuTOYNNs6unpYPO6djF3V4Cayeg3s2NkOEERECniluSAiA7eiBVwzsI%2FEcDqvCEMzLiw5a%2BmFWnZFro%2F08oBa%2BBgyr%2FAwhMEAAaDDYzNzQyMzE4MzgwNSIMv6KbCEYw0orrumB1KtwDIB%2FAnD66f73ta5wo5jMLjY1HZF9PEvZqdFGwSOw5CSiDnKPshugVuCh1Y1wQu1W5IP0lqYhjqiK4z9tBUHEc%2Bv5r3TQhS%2Bpo%2BrgpXyhwfrv9CS72mOWp4AdnOATxefa7xDqIA7MHrUShdHdmbTmJz0q8ZNZkkcPhWXg611O0QrDUC%2FUIS0KXOBIyVx64HOhR4sTo9iTXuzlyna9sXqdBNAyviHrVojYXc3mgrbnk3Gqr6HgAYQ%2BT6PoxrRQ3EuVfKcgLh0aZIbfpeHCOtPB5ywKiVr8y37a41cpt9SXBlJivmnLCHLWIEsamsJICpgvhpBR2%2BlV0O9vOoZ%2BIf1T7kZOi51VhooAJTcam4iHLhZJCvWGRzR0%2F5vpOLwhNZl7rzCLTk%2BiRcw4uJy5XXRI%2BiugvMurXKDyjYEzKGRvaqFF%2FNNlb2Y9cCDRCvwHhDjTqUKIC7xcNMFKjjDkdAdkILT6ct9TwUv1%2BCUY3j6nQSi47vBlTYKWpE9qwSakA7CmYKI18QaPyVXgUxPm4HHGA7ackKsAqiCIibzVqerEzqd%2ByqQ5K6vH5mFA3fkqKyq55TcnJlQHJXNnrxQb0RlMuFa7muhUpgQaf1PmTdJgRw4WKCXkuErPbiHgmVYUwgtiHwgY6pgHevwwTGfJ2GxBwUnqAS1Bc1p5Xt1L2HYlYk99up4XTU4%2FnPut5mlWt1nZIIc77OWg%2F9Z5NLh5knetVIiNVM90txVCYgD1OS7zzo48fymo0bcfdaHh6FVlKk6AagEcMr%2B2CwCUHnRQ0ROvirMe5IitxduGmW9yc%2FaN3gpItk9KydiuNUohl6zuNjf53hgz%2BJIVxaJbZ9dk%2BQNWHGvfm5jXA8iKv0hH1&X-Amz-Signature=10a63b6c121e08c0444df17f5d650c7090c9c7cab3f40433bf424e019b9fa105&X-Amz-SignedHeaders=host&x-id=GetObject)

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
