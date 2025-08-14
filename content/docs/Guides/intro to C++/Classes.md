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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662LWWSB4W%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T201042Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAMaCXVzLXdlc3QtMiJHMEUCIQCjNBFLGuQu7qXi7sy08kHXChoamNbbg44BHpXQtWf0PgIgUOTdUEpmT8E2OhMKBq0L4Jf4g81l8na%2B839Qr02c6rIq%2FwMITBAAGgw2Mzc0MjMxODM4MDUiDO20NwnvoFUk9hyF7yrcA4UGlhOZPQodEKtTrjKNlBP1tRSqpusPulGIKTJ6F4v2HYtLjS0tOZUB%2BR%2BMt5yEaXU%2FT9tWQtOiTB%2FgCKeDdLAcJCad5R6whhOG8DgtaoiFPwUsOZ6MiJOAIduFnvk%2F4po1jgEg%2FeJ1mZfRF87O5jq4KO%2FJKeKFmHD%2Bxh2vvL8BcYlM%2FiuZ92YpNyva1%2BH0qWvJt6Io%2Bc2LfUb90%2FpDllEH4XUAqdLLqmOoT9%2B3e9XRcm9SkyaaW7s%2B%2B7hxEULEpH6KnJ8GyXUySrsExl%2BU7J%2BwatAM6aQ%2Be3HlJ8w%2Bnp3%2BGFDv7h21GSgBlTP5rwtDZZAizJgK3mj3ULd%2BElaMMxMVwK5hp7t%2B0bwY3J6DlgAbPR20EEjdWEPDheWAqTBI1G5V4KGSc1v4Jxvaet2HPXU%2FD4AQYe59L3cO1z%2FZe3OiIMrJLhwuLpiaSI4kPNG3vz74Jdaghe%2F0BtgN%2FTFL68uLKsNKBfZj5DxLxb9enNukffnTUnnFahR%2B1vmQYmct5zVv5vBkGuPzo6SE25MtaOlaB3NFjzSeSPPbZjcEq28YCdP6qwCvdshfYytW04WR6imCgkEwGax0Gij%2Fxmzqw3hI%2BfMiAKU7HysIgYMhcblcRhZZjVb2aZ2ikj91MOTo%2BMQGOqUB9H2Any0hwEx9genoswAA4lH9MuwJ9P5gZ1tr78Xnt9kHRh2T9poZj7ajS63dC2q7N43UaQa%2F0niLDhPfyJtoTMYrwBllJ%2Bf090fixAb9hMp6d7XP8Elg2OTK9Tm%2BOemN0OWExPtADW7EDSRYSEDS8s78Aae9IYcuXOJ4EAXI9HoTANxeAMLYGpsB3hW8KYrMroozGXBiJFQv0U2701649ptEXyaz&X-Amz-Signature=7b196570a66dc18e52191241cc9f47ecb26442bcd5765d55297cf463f40a9a5d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
