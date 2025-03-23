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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S5DFEOML%2F20250323%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250323T080939Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHgaCXVzLXdlc3QtMiJGMEQCIA7G2bdOFTvMUoWX0F%2BEKIA8i%2FNbY3TEgNMTOC8Lllv9AiBVwcyayJm6%2Fr4Z%2F1sv%2BUj9hOjKpVtejaGnW5KPEtSkoyqIBAjR%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMGxrZ%2Bj8PUYVGwXj6KtwDVgMAH6y270xWwKSIsWttCMFye3Y9TgabvZqbDI5uuu4EMjTCcX3E7pOknX1Z6XEEfVDNdPvaYDvnwa3UFDErS0L1szoJuj%2FYLoMDzKgFcpQB%2FyEr8AGPKpOFEDnUwWgPcHunZRLOQV0i3WUuu5wqLN5T9jRqOOx2nRTGPSnL346sNo07ybeEf4j7ysUEzxhDLdTUFJt9IPtW8xmJRhO5DYM%2BTiKLYeAc6aOHfRRzJ2%2BuCiyKTCbzyq%2B5Ujf6VKLNIW1ikv%2BjPHu0qsejoj68vJGaYF8qlRaAx2SdyCAPin7E6O4UfaYTYjGfUBQGljPZMA8duJdC2ohRLR3izGd2rklYw8uI3LGPCnORDexKoJQODtGRRS0E3RPJi0VUaufMP5v2Rfgt2GTKfrheYPGZisfbfaXo63JQjSkp7PQsP6%2FwtRtxVQXHkO1sN0iNgQwWWYkXERNSTzKgFMWzpOO140o%2FGi0V6WX42r%2Bim8SsDeRhhtycpzAAgmomc%2FwF7CG%2B%2BIY4NXURoQaT8%2FHc%2FLKgw3UjQ225JdU739v4e6qj1tZ9sh%2F82dSzUqi20Et0OFu9DVpcfIprpHI4f5vkmId0DTdhWlRyKCdI6vh11%2BBPYGthH3pYNPtRuZ8NvLAwqPL%2BvgY6pgFUIiWptkvF8HwLGMu0C3twgoOV2AKIF7JCd3zaZGt1RO3K7Yv8kPv5hZL8LCqCv2nAIj8OuS4CLx7TJubvRSoBgOS7kQ61PMS3H9yzfsLTrk%2B5amhkqvWOhqJI%2FJSXMpWPAoyEm0lJybfN7OF8%2FIf8fpGfA7w61RCezZooElqv4obW%2FYrLHcJrkzHqUWY14nKGp41UzaC625vauHwGnPRz6iKILKOc&X-Amz-Signature=3fbbc19640cc70bd6821fb0fd3f033bfa924fa0ffdf0ec8d08fa8bf7eb4eef49&X-Amz-SignedHeaders=host&x-id=GetObject)

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
