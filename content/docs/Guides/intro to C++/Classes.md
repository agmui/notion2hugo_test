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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WRAYT6L3%2F20250610%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250610T121653Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC7M3q3LcGAG5LIHtyQnNMitkipqGvzIvL4uYLBNj5NLgIgY6dZDV4TZEvWXw2wfBkFwv1B%2FTnK0QtwEKebH7aIMWQqiAQIvf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDgMzU%2BTtxRIDMEwfCrcA19TynbF%2FA9sFaFx%2B68zKzZHWDwNo1MqSuNFO6aBvAEa35FDBqdnfsSb%2FQZ%2BAVvr2rrOOV93gdMx3FeaQD4zHQT9AeyXHV7yv2VyQkFwBbY%2BZw%2F48sRpEe672Aw7vZNlfobxJutD9dRhedph%2FHNy%2FoU4PEPI1d0kU8Hc4HfruMeJIl7wkTkKtTQpU0F%2BbPYK8eE1xZ%2BsM84kvlJyncZgZ0JF133XJOX7HYMUpplvBtKAnl0%2BaHAeOTngMa4%2FiJU9lII1StTRENMFSpl5PgZoy%2BG2GW2JsQIu1umAhOmCTMdzbv2nRB9ZcInYT5MSg5CGcNgfHkXEDGn8QLJfdDQeA0eqHiO7l0lF6uxUz2L7ZWt4ptPZh2UKbiif3qGn6qT3kV6vBbJAyJ17mhFXsXV1QSy25%2FePFbhjhruPqoLc84llfqkO3n1BHxXdZ00OcjQgtXwZQVXc2dlCtA%2F6ym17kn%2BlaHP6e2waFy8smUdwdHc8NE0zPEV2RiAktCtnyZBfmDclz%2BmHl%2FweBcM%2F5h9GrtS1%2BZnz8FnV6Ec8Dku1c4uhbo1kTosPCjqlGc5a34Ew70k014XK9tt7OViNOX1a2WlIk04T7uKCVCKfJ89%2FzuOoADrEs5trrRxSz11gMK2%2BoMIGOqUBwdmpNz1QxfWFFwhrYS3ilnPXMouJBYM10XWAz65qul1r5ho8j3EK%2B8xvbVwzXqAD5QoR2EX0teGCdB%2Fx2NI3OvTjUy7%2BcQ9NhXQrYNPtu8ZZRWcACRtFz%2FtIy3qdYGIwzUsjgBPiM88J%2BpPbEjVyd6JLjqyTiPCX%2B72MJCevhTqDyv%2BcNVX%2BpwvBh1jn5b1jEBsPyBUUp6khf2QrnTGAU3cwCXB6&X-Amz-Signature=7bc4a10156ac46996cd48e3cb4ba72d6ffb17c811b801179ce9e9c625449b9bd&X-Amz-SignedHeaders=host&x-id=GetObject)

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
