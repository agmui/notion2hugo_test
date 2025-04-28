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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WWEMGXXR%2F20250428%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250428T033357Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDhFLDB0hc8LwGrz9DBUJtKOuUIwANV9nCynjp0yJiUQQIgLVUcnLA2EtNNwFfFa5s5PKeEd6jnBR0h4xnb7GdsFEkq%2FwMIahAAGgw2Mzc0MjMxODM4MDUiDKCpSTrN6SJaM1YyEyrcA6HfVJfAZycdubZ4t7niRVc72efWAbFX7uBxOQRCaaI4uwGxM7bWo7TcMQZCFKTFIfNeUFUB4iW9Z2MKqZbD5B%2BiLkGH1In0R0YwflZoivvFMCCmAtr56WIh78O42b2RXfefEuJiG%2FiV0%2FBYTc83raceLUdgTtFyOnR%2F5SQPr0j%2F6zaL56urx9omFYg%2FjXjVTLKhfvHP1gEogSmSpEgEQe7Q706DXhX7IhN5lSrETZVXAWnO0AhRwX6oJL%2F91SVdnnVIRBgb35tQn%2B2HmcLaYz%2BMjm0KQEXgOBilQiTk5cYoSjMMnnu3I4%2FAhcJmW0fhnG5n8dHHWZn22093gcM51pBNeIBdpAYmz5O5i1W%2B3M4X%2FsRNFSceYv%2FjTwtGIXoPZu6F0nK4xpCqGBuAC19JW8usM3eBwBBQC4gn7u%2BdDDQf%2BH4DLgX2ty8N2yRDW2GImEa52RRy2yHUJQJW8Elifo57Ix%2F96sF%2B%2BRg%2FGKCWLUKjQN0xXZ5%2FyOPJGXnm%2Fnm1dZQxI4qi5WMtqGPPuRvLsk68ZHhX8FlwME%2F1tQOfB0FjDow9StnGOV%2F0Wmztk68VCr6K4Vdp51Coez84eVIBWDAieJ69chGROfjn8fd5bU6M9GnOgCW9JOAf0BFOMOWru8AGOqUByI44QEh53zgCJQEFWMgFyTTPT%2Fsa%2FVQFij3GzUYRQrPwddky%2Bjs8FhCUQDuIGkmfHRRq3dP%2Bu%2F0X2M3Z8Rdv%2F%2BXC6CUaXOfLGdclC73%2BDdQxjvkQK39i1vI5h9V%2BLLtSX5cLfhlJitE9DLXUmA%2FBu4amh%2F1szR%2FvctnAdVcZgpXYUtOTzwTOw%2BlEAHgX5x9Py53WtS2G1nm4fkTOz45uDof7q7EV&X-Amz-Signature=8783a0e8724e58eb0177f7cd9371a1bce548731aecf012abf9034042b8ecf006&X-Amz-SignedHeaders=host&x-id=GetObject)

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
