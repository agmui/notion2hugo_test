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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YRTQ2X3A%2F20250318%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250318T181119Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAkaCXVzLXdlc3QtMiJHMEUCIEgONQiqdjLAUiyoZlkgKzZ%2Fyl9XiofOFziv8SABmOsJAiEAxNuwiPnFgcHjdJxNshvKjzYDc4%2B%2BrQK9M3J3L2wYVBwq%2FwMIYhAAGgw2Mzc0MjMxODM4MDUiDGRcUYLD8VKa4Jz5NyrcA%2B3nyFifmVCjGAryTKgbduz4SvlVUb9slJj7kDvyqYGNMfC39FV5vFenJhD5Q6SCZ3RdFix%2FHGf4B54dnw1Ekxpcd2pe5dPvvH%2Fk2ajh%2FQvzccdpbiha1eYokD4hgC3KvDcyZvlmmXmydsJJLZ4M1QIv5SwKmkTRaCNMHw4R0O8%2F32RC63nDY0qYrr%2BW3JoguJhulq%2Fd6NinrIAMTkdR2kFtAf4dOkdxznnIqBEU31jwNEAwnqIaTx9RYpEeOrf4nwPelc0KP0Csl%2BRnkMdhzyyASmVDy5uiG7%2BeXXoV4O5Ks03xUR9iBCiUVqCUQoYHouLwHd4%2B2fYdInXp%2BJH8gNSoi4xU0NzrsQysjw1JeeV1YdPbJ36GCMKuyVTFH7RDHjrV2FWAeUM7ysTEJLOY5ygsye3YcC53owSlwwJsskIMXyuAFwe69SUNBrsFsGXWiMMmkx7CJQzuUCveV0Exx9Ls1K9IZ6kLiEQkBmmIYsIJZAg8PBxR9Ix1j8YUgb0n9EdpagoSIKZvFD4Pv3QVwMgECZMBd2nk%2F7nmwHElkyBWzErdm11p2nTPWJqtsbDeDtyawAr2m6624G3Qb12iEwbMR4M6GR19nVLBtjvg9c9DB0kR0JsasxTeK20KMMrU5r4GOqUBBFGplEngpaShTh5s0w2pV5Prs1q5l06yVbx%2FH4W%2FDAnrMOBbmA5LTNbIduUbzbxVt6qnuEyGUNsAyIiZYIfGwYlZ0PkEdobncixvZRjEzQpQ7QI3CzHPxiYx1iojsyq8wfIZA3hLIWLE9Uqa37DWZGwxFw%2FnQ6iVsNeKGoSSptR98mi5Nlzb%2F6EbWw5e183%2BlS9Cjd24YTLy5ydQNv8OPjjpzOka&X-Amz-Signature=49fbff29d0545515eafef9233c337f108db3423a7c00b45c3d9a7e7b980be393&X-Amz-SignedHeaders=host&x-id=GetObject)

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
