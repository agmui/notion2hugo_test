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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZJSUXHY5%2F20250512%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250512T022918Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECEaCXVzLXdlc3QtMiJHMEUCICgoCXF9%2B7ZQ3hUTYFoC2jcN54iCEKgFBM6sREGhKz2gAiEA9dzKIKyLW0Ve91vSihN%2FVcTNLu8daIoRnbij2eb7PD8qiAQIyv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGZTttatkgjn%2B3qzmyrcA%2B55KE3ptRxwt0e9bthyT9uQNio6QLu%2B5BnHKxG3gN2vhA0Y8ZLdBFR%2F16HjJZ9vIDyZtHr1%2BZt6gNUuyCyguwMfjkCrk8JNFDsNhQFQuk4HDVt5MobNld5MYjb0j%2BdBCwwCD%2BIs%2B6J85xRYga2Pa8KxFj46Mf4GaDI9emGuFNsOztWmtyRxd5WZ4Yre8ORDecoWSEDIJvuWE7npB1x%2Baan1NCuKJHFMFxASeMlOT%2BVYt2LdO62aRATXXyMVzJciXPtisPKljPaa2aQ4jXd94lcvXXsmMO8GrDCAQGuKU7nw0NmlyEev8YIuHp%2Bi8%2BVuUWHPk05azjEZQpJ3uzTvFWOoNFLy1csPf7Ik0pDTc19wrr7CF3X7i%2FvP2vsZRdzGWvo1sIuT%2BMLhIyXllsvoXivl6CSlxs4blhU2u7CTcDCleWL4T00T%2BBGHrl3hhyNb6FL9BqnYp8BKU2GvKD5vgqCU6VuYrQ8lGQkh36AuqsULXuTrY7c2jpmozxvECcY18xtQzH4V5LDHdE%2BiO3LmReTM1FmihkfFSleIqfAPbJoPkOi%2BZHM5Bev%2Be9jcf1bEeH6HdSFyJnQVUo3Mp%2BBJrWA3HlQZpRLO5Rq2TIJbBbmTyU6JUd%2Fw1zTxwL%2BBMI2GhcEGOqUB2XL3ANoczIWHMKIto0NXXkdH1qhN%2FQSRq1X85%2F410GmTwjsPmHoeCj7e46mbt3ZBk3SpxOTo9BugG%2FZ7bVQcu5F%2BXnK4YgfDqHn9yQkCH9qnWMoz09Hbepik52eG2Fh4D25lS4LhPDiv%2F9ehNly6%2B42iRwVySWLWitPD5rmz1xh%2FQ4t%2BNA%2FbVL3s3oiL0dLBqp6Pb3AWjiSLyM1vFlwXJL%2BAMbsA&X-Amz-Signature=22af18773bc8c2647004f6772940dbb342316dec3f97b073bcb0b27459907726&X-Amz-SignedHeaders=host&x-id=GetObject)

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
