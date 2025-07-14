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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UDPDBHWU%2F20250714%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250714T151025Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBUaCXVzLXdlc3QtMiJHMEUCIDmGW1GM5RmU05KNxcEJevVZ212L4izNgmZ5Y5FzZuPrAiEAyWeu4ECRF9KjsQZwqvoKOh%2B9BRlR5JrFOzX2uFRixhEq%2FwMILhAAGgw2Mzc0MjMxODM4MDUiDDLhaDdRUC1MD0tCbircA%2F%2FKPe7wYjq48Mxm6%2Bt1Nv9H8%2FOBTmqDaezxp5pqro6KRw5%2FQgAOERk0JeTsOTuezUExObyjDIuED3%2FJcdUJpunMzinbX5ARxgmaaYaPqmQ9lmmiluqXXzEUL19zv%2F7foSKbdtnm9Kvns%2BnheeoBP3sRNeQUFlQZh9g6p2wvyATZ6fDo0isRxoro7GmtX6cpv8zdDQwX3FoIrpkK6aWzGKm9eIcLVqxAQ4R1pI6VvJU3639jHQOvBveQH1H3nkhTLEW8hX5p0qs%2FHuq%2FyHDpWoiCrl0UIeINnr%2BuPurlnfSVEHAhtRo5yOYGWoVokrYuZdLz6FYs4s1k%2FT0qUjDI5rwEuiJKCCell36vNRMXniZgWBHu6y4KF7VipmPdzMcPw1nS62d%2BWlA1Hgl0jgYtCCQqBZpGOzO4bch9keJX7K70Ba1d2gJL8ZsbjmJl8Qe0u3DNhNh6ZIRU07aVOTK%2FXMBYvq2nuyJ%2Flw%2BEG%2BrM4vGdAj7LrUsJgvXzCCejAxxBFUpb%2BLwy3WwOWAtYVTmhHfeNSsVzksF5Upvm2BAEvoXEDJ8mVLncGES8fqhCixsBN0WwuYDgvP0aJ%2FXuKkLbt9xrynGte9W%2BfBI59MDZkUEB8rp1v%2BKqBdkldNqaMJ2F1MMGOqUBrS2DabpK%2BcQ4M5%2Ba6LW4HyR3%2BoXqtWUR6ztn7e1rCfofgyQAUdwXIp%2BKh4Qe%2FeIiy0DwYtj%2Boag2d6B%2F6Vt0YKIZn4mMQ0WB5dDaLT838o95ez6UHIYMs7hg%2B%2BO2stqW8AOd1DBnOyUIh5w1tzm7chna%2FZF6tjNqSh%2BVfftdGGRd3M49Cd60djTZ76X9%2FNS3YFwhGvahcySljXRRagnyMCv%2BTZ%2BF&X-Amz-Signature=f6365c3d40cb7afea241204b544cafac4ea6d06e17f3536e81f45ce59a3663b0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
