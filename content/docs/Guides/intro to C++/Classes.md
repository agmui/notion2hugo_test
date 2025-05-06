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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665Y6OXDN4%2F20250506%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250506T022501Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEC%2Fc8d3aGXofrIXdUGmnOAH3hr3vnigoWYuFK0rSrozAiB%2FDqI%2F3gfsz5Qlh3ED4T7s%2BBN3PuZYeno7KyYhT6QjgSr%2FAwg6EAAaDDYzNzQyMzE4MzgwNSIM6vCew%2FPFMbWRH6EbKtwDbSEHJU5SDmteb%2FaK4A3VDE%2FyCH6ulzO%2Be9vlWXnUMOQuVgo5IKvP%2B1jHzaGe4d9Wp67Df3JiXAEKi2aEzGzyrmg5xkXUi63rF393xe8cCsjVbe7G50rN4izBN2V8%2BHgjc%2FIELGZt4HMgRjRekhoF6sep3vjA7qSvBdKFF2Ms5xODrdJbRNcugJCmOtPsu5rz7BIz%2BuuTCmJrN4o%2BVfFGGC%2BDM%2B1ihGtga69MQAIGZdipfysjPlAynzYtUrpMEwP5Y9zTATtb4%2FKALna7wyXfwTgeIIiS4cepabOwPFflQk6mKmvrg%2BW9YiYV5hZgvJdhVpHKpnrfUmTrvMdoDrXCKG1piFlX3wKGgUaKH2bM2gPiGXX0Y9Y%2Bf%2FNmNtc21Dt%2FRhLzhAe1keWfcQdIc%2F7pFVCIYurMdYSu4%2FmWxXAzN71si3mUlK%2F7zZImR7EqoEHj%2FFGnx7SuLIvmBJcL%2FP%2BV7SjezkIge10kzJxtLkhbBLR377Q5B6Lx9XsjxIUaqBy3OyQUnbMe9F155P2U%2F%2Bsa8d582uCtDmhJLQsWb69HAi3PF8ZcK4%2FZl0xl4dtCUY4VyZ6hpuam1GaZlJLw%2FM7yzRfvpYwLB1nLZF8HTa26bFwaD01v6V5dm2IZHCMw1crlwAY6pgGEy8a3QoLcqfPGZS%2BA11fMjq2d%2F%2BTib9FsctdkPraOnomIFHjvGMAYAzsMJygT%2F%2FWhrXa8%2BdIWmzPXQ4si2IR5UyIzrXP0Lycy0HyE7LJF6uvv%2F7goIU5nF8uYTs61jbJs9RzHNtrAkfbWkApCggcgkJxaVOYiyfLkzmd5wbBQASzkPQavL5PF5zsbkA5dtg9DKANlhLPsabVb%2B8rHmYCzvf%2FgEhCo&X-Amz-Signature=f10b848de5d780f81554056c24f71424b26fa5e16be15e7d9c2cc900dc080b20&X-Amz-SignedHeaders=host&x-id=GetObject)

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
