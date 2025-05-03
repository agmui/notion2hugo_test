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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667ZWGGVRI%2F20250503%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250503T160848Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFgaCXVzLXdlc3QtMiJHMEUCIQDKGyxQ%2FOI%2BmT4%2FdeJzxjn0VkkyKULZDfslsCFTuzGz%2FgIgMJ2yle1TjnX6pDEZ8HaA8lCNbJ1eesG9isuXs%2BQHS2MqiAQI8f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDRLQNzhy3AGw0KE5yrcA%2F6bap%2FIqDvbaJyQl6HoCW7LpJneYuhepJ%2FlApbS%2B89i5xrtPrSl4OvuF14lfZBsC3vNzibAMVkFqBS76Z4eUyTwKZa%2FC%2B1xPrx2wur3KyS6t5hwLSXVfz165ujiUef4vAQA5A7HJYhtKhj3Pk9r9o9m8LoDfAqIg4idux%2FRdOLYrrOKEEN3uZlA%2BkSh8inEoyhvwYhO230purbJ0xfj5tX533EOpBrMhXylKPCpdjFagcbyb%2FWuwfsULSEtGY%2B536x7iY2OBOXgkKGgBzC8FUuGsExKiHWsbd18qYSlRQPQN8aM0THSSaIXyob%2BVJcyMgDosn88jiFDV3zBclaCA9seVHlH0EJuR94MZt1CGUhZ3SnaS9eMWliPqp2NudJAd2JDAiqEL6GIJXWt5y%2Fl8aGu8oWLuplX9TqJdZAD%2Fgj7WV3zdMtUJUx9u7iDQJBPHGWA2njRyXByGiRE3b7VyM%2BREf9i4GYnEDV5YpO%2F72I37KUjUgL2bQZmzWQXHlSgYlvCdGmVok0zH3RexzSOfrwrFOZXJZh7fC4GvkhWHQ3sJjfX0J4WPFCRZIJhKs%2Fl58fmnm3R%2B0UGk0L66F9bfzSk4cYHRO7PsovgB1CM4N8kQH59GjyLABB8nXR0MKH92MAGOqUB9PuaTcgu3JLVDqvdwv%2Ff8QqfLtfeUJT4QMy7YRAPw%2Bgq0Y3egbMuPndD6z0Nbfg0h766yv%2B5BBDfqRgu0nG2rQ7yhwRcifPtprdRZwRxUrE05SLhsHlsiIB0uDsgRmL0rZFJjrYHs3T4eO95LFX5qsfo7yEhCR5O5O2JCzmNDBG9xF5%2FPqbNd%2B9HTFu57l%2BEEYeOqqGyIFhbvw%2B5bp2xbsgtELJ8&X-Amz-Signature=9e6c04a76d52fe2c2978c7d831c105e04379902ebb88d0c737fd7c78a6cb6c0b&X-Amz-SignedHeaders=host&x-id=GetObject)

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
