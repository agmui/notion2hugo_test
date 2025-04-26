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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RBAHQMSD%2F20250426%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250426T170230Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDMZNYgzBasSE2D5SpzPRDGw9u7NR4Pa%2FmoC6pv5m7g5AiEA1uMvIMT7ujfDPX3TfljWjvq0xLVHVCpyhU0vDNyCqLAq%2FwMISBAAGgw2Mzc0MjMxODM4MDUiDFkFBwjte6oacxFPzCrcA22zJARUwpLx0e0sGhXIppwD9pfrei7U%2BFndRtGQ5T2%2Blp9zSm%2F0tHMUWUsexnJuYF7nvgwLqyamEe3F7hs7QfTsPf3K4sTKMnOSsvDKrGj%2F2Ds5%2B%2BXUtArTpLowzYQJrYNlCriehTPjjiTuJ8pNxrdTnKO%2BdQLa91BqlL78SM0jXkRbjhvP%2FvWwR579YQuUfjFRpT8IWrcapvjgqhHvO%2BDq%2FAi%2FbJ9qHPyHeDOB%2BkELr33uRug8PfXjnkI0WQkc8tAxeez1igjn%2BlKmHdCpBUgrJY71FxyMA65bs99AbfBIssIvrkvxsie5AKYliX0sCFfxLzZzQPwXTn1De4Rgrn77FFgZA%2BXTeThbDOCCEj0jm6FsPRyXnlwuZ1dmDe0diZJPhOLnVBMtSrs%2BSrM0r3pBTWP7zu55RO0r%2F1V9A4I3%2BGj%2Bnjg2GBmZYpRiDm%2F7YCWZMi4beiE7BNIebXh10%2BicVkHKFQiONoNGcNs4%2BeoqZ6moE%2FoGWcEKhpewO26IQ0PtXlLvcgpdhY%2B%2BM4iMWPMO3O2CH5vcNElrEVJiuVT%2B6UiUet4FvlxvS4%2FwmQFaUHMMlVTfxYmCpSbmEN%2Bz8%2B4fXluhBhuGkvaHgRM8e9eruQXylaBBXDFQeEzrMN7ms8AGOqUB9dSjR%2BSX55GV%2BM7rTjVvbQd7f9B75OPBgzAe%2FSEOOAfc36baQqZtGYapmXRrmBgoPh8TLbohfUyLFToa7CFfYJMvpehBfp0%2BsOp6IR5qpkVP%2BKy2jPTcjfShnIvVLeTVhRn0uTDJ%2Fm0roETfSekGY3pB8pJYe06vNJq5%2BaR3vm2cf5pScrPUOoGXW21cJXQTJj5%2FIND3pflPB4HuM%2F74rWZajcM6&X-Amz-Signature=f5727d1b48d80684a9624f1bf91454c4d1ec4611c50f7dba60b8c3c900da8fd4&X-Amz-SignedHeaders=host&x-id=GetObject)

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
