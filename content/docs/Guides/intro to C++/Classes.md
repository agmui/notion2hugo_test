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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WE6NXVIL%2F20250601%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250601T081047Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAQaCXVzLXdlc3QtMiJGMEQCIBiEbaSShCOAtgatxkHhYTg7yFltIeaLwUTffbjxi7zoAiB0SsT0gulrvY7zjiok3xlgkFkMQ41Xt5kxDPWwFDdE9SqIBAjN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM6LaWrc60YvR5O24nKtwDddY3dE33T%2BbUJOfCEFk%2FCA6ZfU5L1WNkoZPYAFBIjeGCLWJx5GWu853rzc4DX3Av1BQPm8W8NMCks9VlM62zjUzkKdMSAc9oG046Vur3FofijvYFle46J7clSvhk2Fl7wGna7lfkwx9tCWphHLA8vfLqfKsU%2Bask9VTRkaz5rm%2F6DK5MlhzHoQR3ivoJ16zk9YPaz8fxW%2BuWlKjGyQs0TunZ8M2bcc3rShDmdQPepMLHkfLS5Im5b54SVgB323RDBqFxpo5i8pD44PlMG4FfSkix67Xh7u8QlxhVjw1s0Mo95OQG%2BzoZIfveoFtG46DLc5SE1WdAu6jtsa5PWkJ3N67CnCs3Mem4TW7VqlftDmtGNawNlvy2zYonu28VP16ERe5K%2B%2BplBAPpno9TVIanjSNnp%2BrzgVfo4ADUFA3xVtOIGNH5WK%2FLyeJeF8NTPd7n7NF9Rj%2BLLjAbdjP%2FwRGbod21nwg%2BUD9mWg3%2B2T96rKk5rGOhPqBVbRXJyacE8Q718%2BbNr6VYkDnt8buyltvjA70SiEuKqBsYuynplVvknZhBCBU66Xk0G2ZAViY8DadzUZvGssOFV07nGx%2BUBFueiDT6YoEEpW7W7YSH4CB9QopuirUW%2BUczOWPgDgowjabvwQY6pgFHsK%2F600zIBw8D4vJitPTjnZ%2Bi4M6sX4fM5QNlZ7OhzdryG7aaT58WpwvZFNXcvtTecBo5xYVDvanQbZxfLVywbNK6WN4HqpJEQCbzlJ6LBmYaLRhd2Xn6nxvGmXlE0Wy%2BbHlLeRPBUBWRmjsc2v%2FsNkOmKDXt5c%2B8mZfeyONowJzHQTK9u0oU8yVko0eo8fbBHpi%2BvXH%2FVfL4fiwXsY9iTsQLLKX8&X-Amz-Signature=6edb459e3d3d0f5cc2ab7dd3b3a82d9258b26b71dc60c6e5f24025c35b656e44&X-Amz-SignedHeaders=host&x-id=GetObject)

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
