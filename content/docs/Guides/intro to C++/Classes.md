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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WECNWB7S%2F20250403%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250403T061218Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJGMEQCIETcLw4y4hoMH8uQJEllVsy8iz7Z474Wy5FCK8hbLI8%2FAiAadYZHLPBltBUQlu87oJBiE5OaReEFrvNxJhJa5c27%2BiqIBAjn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMND9cwc45CUDE%2BFWuKtwDjogCPoOqD89E%2Fbhd%2FjkNMiQgHIzN8CwZ7ZlbwYGxNZMXU%2B3MUNtgphnPgpEDMsC5dJiKyBpKVd%2F0wUKTOjm2rsHL0PIU5VcdDQEbyvPE4GiVkM3%2B2jfFRDm5LCzHgSlACpfb47oWqm5pLv1cUK%2Bo9CzEK27lkZpZFczEBeNdCZmR0vK%2BdQ9RlXpIHJdF9ibiCJuel6LhhSUOlC2QVu5QcF0W0Mk4fvAcHBsFE84Q9z9trOkRDsdMXvWCfKs97OepQSh7opmJj7cw%2FIDev5jGsQODCOk2UbGXWquBx2gfRUQFHnQ7EcqZmA9WX1Hfr6z8fyXzosQ8dbM07vNNZrrS%2BTYwe04pKu%2FostZRvuUweeLZkLOUBdszZxWoNVDvB4e4aowpEcQNcuJ6IvZfDvzioaVbVL2T4GrWRQta7hYwvX3MdOhe8%2BnaiAKQ1Pda%2FblUcZTul%2F996%2Bucuw4Bp1%2B0q4wjYwEUsbiQHfe7VRqlF5CwBm07LfqwGdbLFWMGNfEqPb2rhU7toNYkL%2FNYoUKvDGjwfoPfkbPLnmb6le5s1sxhMnjKWmJq5ntKW3wPQzA8NPfgWZy%2F7%2BZljuTeVdizkkXDNWppl61YGJ0Xsf%2FDpgH%2F%2Fhb3uUueNgfjx48w18e4vwY6pgE7GCWeAxEfQ9Tp%2BCesaB%2BJLedKZXBLRVZfuNl2X6Nwl4YZBsVrafUj%2F3g7364kVOpCatMBbfOt3a7WTott0JTvhRpwbsBCmis5t2RTyK6gKRqKM%2BLYphwXWwNumz1M57OsWshg4cHf%2FG6X%2BSPw9AauMpSvzttzjMeBtlHA3VIKa7O5vxEhmX9a9HW%2FBFFCAxscQ5gVRYXXgH8QyOki%2BxOiUHDENfLQ&X-Amz-Signature=3045c89974df6395b3121b2a90fcb4c4b96f0525bc9e47499147f2d101fa125c&X-Amz-SignedHeaders=host&x-id=GetObject)

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
