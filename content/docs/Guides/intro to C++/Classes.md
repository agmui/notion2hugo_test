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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QGMSRYLO%2F20250322%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250322T140139Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGYaCXVzLXdlc3QtMiJHMEUCIQDxHEGqaopuXjrqr5b0Ljz2osNAl3sEfLlgk6FD1Ok4JgIgEHCo2T1eKA7jjcjf1Jp%2BLPJnjS5IKkoBk%2FDh3D0gqOIqiAQIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHdJFBB4k9g91vYVjircA%2BOimrf5uhsArB6j6ww5FintGlLqyLcIPy2vD8eY8VwSHlsifxceG4jfQ64eBgtF8iIU7VvpviQf%2Bvk%2B3oiDADgCgPm8Xrp02Fd5asAbLxyZ1DEUYv5z0%2F9iLztoYnZy5QBin4NiYD3LW1h%2BGqY4g%2B4VdcBc7aX%2BTvb6Q2Zp6LhREWZxIyDPjZSzr%2FF9KlnLfdqFh1QtOuOoPbZVNJ8MHW68SXTRqsAr5mhtLuf8Cn15RF0PkzHrTYe78ky8sNWmFd%2F7mlyBUJoKZYpqGrsItb76wBUsfYLueW8lqs5nlwatK2iawqiLyQ8Sj0BkBtddwjIb6UhbqcqSyvlaDNW3wyiyG%2FQxLIMDZRiW8hGr3OrflHKwNycTEw8e8O7ToXe2GSuo5s0j94ccx2ZERcKeRNvn6UEa9kUEG9jQGMcEkp3HuTcaRWQBi%2Fgm7mp7%2B%2Bz0Yar4z4sC5ZABsdaC28NHaDWsmDuk7C2EPr%2FpwpB2SyrjQSDaQNAHhAyueAu49%2Flxgyra7a6kO82x6CPlDRzpOe6XkaRnSvl7%2FREN0QMQ83Yz%2FTfInZfHXo0wNzOXGTG1k3iEyWDpeDCCHh4yp%2Bbz%2FTaDkhL5i1XGA51ztuPXKt%2F6td7UYBD6B4mVQM6oMLr2%2Br4GOqUBl4Sz90OwGuPXzvRW5Ci6Z6z7CXjV2hf3kA5Tv8sMur0ujnE2epITmIITZ19DgFF7lPfrKRgurMWdLhJrmVu8Yi%2BPO6HW3uuh6Q6eeLaYacKin4MSOoni5N4LY9RuM1LfZk2MPDWl1FP2g3Dc3X%2BeaVPNsOhcAC%2BLVeJS3bR0K2eb3Htb8rmaqN8Z1ogHqN01Rj4dYxyKEOV9kIT0sGa%2BVA0Hsm2S&X-Amz-Signature=2bf12611e18377fe5ed094a74d30b5ece3d008f54d1a17708d030a2f22e215f3&X-Amz-SignedHeaders=host&x-id=GetObject)

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
