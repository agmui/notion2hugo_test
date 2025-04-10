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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z2PHUCRU%2F20250410%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250410T032625Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECMaCXVzLXdlc3QtMiJHMEUCIFF0iRsdH20%2Bh%2BDH%2FrHNy3XCfoQ%2Bub2FkGGVFnuQI7s4AiEA2U1%2BpeDNdHaI2l%2ByMDK0yUPKOzVZYga5ZMZ%2F0UW9KlwqiAQInP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBzUZSq3AaopmR6uQSrcA3qlC2%2FZnauw2o7U0jFRV0yV8ZdnjPNMxMGpREZbpP0ImFNeLASq%2BEjJ7P41E6K5fVAzvD%2FnW92aHywX9PuuhnsifDnW1aZvhwpJqiRmqYawjsReoiuyelroEK0wRBf5mqe2JBYScAa6fohe8WgC8VEKnkummX0oN3PBeGYhaiwgs6ks9OEj4r0qMIlNWHVhdSL9SqHdEEDGTEAtNwZO5JeWES6R2GEgKUodE00DETRQnaVw0A9IR3lfiX4uI44l%2By8jHjvQA6mZx9hE%2BZxbmEKu7uhuDJkOALmd0mDQI5E9OpvHcaI93r8fLHCZg1C2A5B0lhBCjER7YC7OCn7NhvlVtm3bm6OezCFVpRMc7pV51VineG6rYiS1pCIZh%2BHuy1fkn2wbBW0Xq9pCahANwOztfkW7LrY3Z3Z6UT9KH3tcG7waYefO6LLqqK9x1G%2FTfwj9%2FhmKGADqDBJRdiWFChIYcIrE5oRlpRANYsFQpxwb7w4Bu1jVwd8smvfkYrUvP9ygAZdLhdV26Q4yQFveGvqmy0SAk7hPp2vR9wGohtaSArhjrfvFM1fXAMpsoFNLXJ6Uo8CDJdSOJ%2B7Clli1r6Qu%2F9ZLDJx6trVZ3OVblVT82yB%2FgcyjRCDCjOZ6MNHd3L8GOqUBvY0WbuO5frF%2FrzgP%2BWzXQgCt%2F1%2FIBBsAHqzgjO9ySaH2S52ubVLn9gCdIlM3EQT%2BlXRDvE%2FqyE1xk1JWmnbJ9AKwm1yxeRLnor2D446Gx4lNV0rn5ctecN6tpM5eA5hsgFzpK9W4fTYDUdq904RSHYAr1JUksPxdWUubnJ69i2%2Byq5Pi4WXXkt2qZxLc4qs%2BGPBCEvyMjbTcr2NJKuvcdGvf04HY&X-Amz-Signature=65a2a37fc017fa48d0e3d16cf1f580b6c3f1fe8cec9ea55ecd930c467f95d15f&X-Amz-SignedHeaders=host&x-id=GetObject)

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
