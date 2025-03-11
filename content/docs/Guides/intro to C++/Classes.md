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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46624PS6NP2%2F20250311%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250311T041002Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFMaCXVzLXdlc3QtMiJGMEQCIF58eJq5upUzBhEamy3EH8hQgeVOoehdGYAnsro3cw6sAiBxTH2cZH1a6ryrpIuXr%2FjeYVbb5FtS7ltrUgWMFUvVqCqIBAic%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM67TCQXoMN6rKYyseKtwDFwaqNbMMsrQv99t89T7iDhEvwKOPdQG6orDkxyE2341qbg5S0zMorki055U99t9xJboYHNO0qHn32Ih%2BXoWRLcUQmExLEqgxC9VA0aLA3LsFKF06Jxesy1su2Oqs9m%2BUWG%2B%2Fq5JD5T93wC5mjfBgTScbBLxMNjgGO2MFr%2Bs5OZiTuKSitQ0nTtPYEh6RqLoMU3qNwR4uNzzqJSjPi0pJkU8OpL%2F6nE6%2F%2FCn35RmkWaFOduIKeNPKnOBBAqtbM1gFeGkaOt93FZtQFw6jwXzK5Rnk%2B7jneH0XCMoWVCbL7U49qTEaIjJRdUREETpdcJmSdgJC6l9THS%2B2qXQkeWlfjQzir0r20OaHfVs8Rq%2BUjZhHB6En1PWeDjW%2FpWmwVnQ%2F%2Fg4QN434MeqQlnA%2FHZciGy2wWwT4BYkeXz7xDMJUJI9JrWEjeoJjOL8WFP%2BCyA4p7sLTTmz%2BT7hgg431ZfSEDdQ23ANvSPO5pSmNH%2FXorBFWpqAS9YZZ6KqqTsXPkVyPXXgb7wNTSFa2OR2ayNHb65SCfcEPUw8JgHb%2FuVjh9nd6ariHasHpgSUcixQ0wPd%2Bdiuw9%2BVS1sJPE38GG47u2cUo%2FXmeMS4K0a%2BSH0FQyBKpMIF%2FQyzFojQx5cwwntC%2BvgY6pgGfO2SwUk2RvPqu8dxbHSUifqsb5dbHccPpVTsjrEAiUYZW3jNCfNY%2BLWhPd3SmigyB1CNLjw80JaSA9Ys8Fpaq1zaYvVw7fIZxvYzoy0Sbk6SiI6s6zo9e9vj06iNKz0MOkf%2FLUpyyHS%2B%2BkEJ7zsRqD5aRhfQHTF0PM25r2AmMleI5AfKgt80fobZUINjiIrjjAtOqkCRf3wuW5pPQdqHirVnuY8qC&X-Amz-Signature=53e82eb975a5262fb8c6ad475b52508df0492d993ba736d478b9e28bc3e541c4&X-Amz-SignedHeaders=host&x-id=GetObject)

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
