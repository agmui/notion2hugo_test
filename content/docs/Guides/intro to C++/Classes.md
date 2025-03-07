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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TUAHJADN%2F20250307%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250307T230127Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAYaCXVzLXdlc3QtMiJHMEUCIDitI0Nnji1fkgdOIbChK4c59xVGrdefzPZBrAc2htgIAiEA5QTom2XM78Z1wUSq6Ah5HRaM7bDhzI66GNTvC%2F6Rlx4q%2FwMITxAAGgw2Mzc0MjMxODM4MDUiDIdPqoVtAOM66u%2BrvSrcA%2Fr523FG8Azq1RWnh6zUcJ7pW1ecGM4vyFUyjHut9WgqtYpokzS2LES3EeEPGHpeUx8l6lKLbFjKH3HBug6xvB1nURJeAO2rx%2Fu42iQm%2BLA5dHaJj5vGh8hxKqP6GCx48FlVn4Q33jk4OeaQd5%2BeA%2BiLlNS3QcxgW2%2FjR1sxBzLmuPnjWzeqwMdMXAXFCjfCJ6fkqG5QIEOUqpGrEDJ9sYrQzkSicnMXig3Dhh5meL4%2FVIkL4KU1jpCYDyF28rwWWOfSwfyBKAD1bMRnxwSNHJ4RbGpX0M%2Bz5oNWHiAUjdpZi6AoE2RqntGofh%2FvPjpkN%2BpFJDPaWo171yRsM%2BghUhrQ2e9MLx0pMvvOHR19QJ51h3bjJqsclICtOVADsJyAvaFEuSX7bk6iama6fmvrIEwJiQJ%2FbwoZ1yra%2FGaigRoWeUy9kAI3iijFwR2rp%2FRSViFdUMVhmdQXoopHnxv%2B1YABDPvXaHmo%2BZKQnLX9q7xarsbHQurQBvrRwCEZ9s%2Bbr1VqdlKRRJdjuaQRa4QmhMCM3zFjH1cjqFfriA0CK8LgqwBj1pAMWlpJdr9rz3vjk9yMGABHA%2Bg5xwM8DSJ4NYQMItEaw%2FqLX9NHCP9n4y%2FXChqcvQeXtg9YEYlhMOvdrb4GOqUBtg6SJOZGLjJnUh0ynDWF%2F7ee9XfDtilh%2Fvk7aTZJ0FAW8z%2Bsd%2Ff7vE4H3NEhI3RI6vpVKR1JtOHJAX0%2BYMmUc1kK%2BpSGVR5LfwC30s3V77ZEkk6aG%2BY6wiuphDF8jeSxVe%2BGvPHifjQZ%2B50rkCcpB9ywr%2B%2F02oG6ZRkiHdbW3XaJmm7aWGu2rc2QrlNf6ZDivUYcArx842zJlWOkzyU0kTc9pIMe&X-Amz-Signature=4bfab4845d84e7e663a7de1473250ef403e50dc5e4eb26604aa06bed0aabfa54&X-Amz-SignedHeaders=host&x-id=GetObject)

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
