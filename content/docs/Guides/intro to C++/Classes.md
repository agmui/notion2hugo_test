---
sys:
  pageId: "2329c1cd-96c8-4fd3-a4f3-9920d69d1c8a"
  createdTime: "2024-06-25T02:29:00.000Z"
  lastEditedTime: "2024-06-27T13:17:00.000Z"
  propFilepath: "docs/Guides/intro to C++/Classes.md"
title: "Classes"
date: "2024-06-27T13:17:00.000Z"
description: ""
tags:
  - "Onboarding"
author: "Overridden author"
draft: false
toc: false
icon: ""
---

For constructors there are 2 ways of doing it

```c++
class Person{
	private:
		int age;
		int height;
		int weight;'
	public:
		Person(int age, int height, int weight){
			this->age = age;
			this-> height = height;
			this->weight = weight;
		}
};
```

```c++
class Person{
	private:
		int age;
		int height;
		int weight;
	public:
		Person(int age, int height, int weight):age(age),height(height),weight(weight)
		{
			...
		}
};
```

We generally use the second form because it is shorter

### Creating objects

```c++
int main(){
	Person* p = new Person(1,2,3); // heap allocated
	Person p2(1,2,3);      // stack allocated
}
```

```c++
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

## Adding methods

```c++
class Ilk {
private:
    int milk;
    int private_func() {
        return 69;
    }
public:
    Ilk(int milk): milk(milk) {

    }
    ~Ilk() {} // deconstructor
    void drink(int galOfPilk) {
        printf("drinking %dL of PILK\n", galOfPilk);
        printf("%d\n", this->private_func());
    }
    int getMilk() {
        return this->milk;
    }
};

int main(){
	Ilk i;
	i.drink(1);
	
	Ilk* i = new Ilk();
	i->drink(1); // arrow syntax when i is a pointer
	i->~Ilk();
}
```

What is `~Ilk()` ?

	 `~Ilk()`is a [de-constructor](https://www.geeksforgeeks.org/destructors-c/#) (its basically like `free()` in c). Unlike Java or python, C++ is not garbage collected so when we make an object we have to also manually delete it. The computer does not magically make it go away when you are done with it.

## [Inheritance](https://www.geeksforgeeks.org/inheritance-in-c/)

```c++
class A{
	...
};

class B: public A{
	...
};
```

All together

```c++
#include <iostream>
#include <string>

using namespace std;

class Ilk
{
private:
    int milk;
    int private_func() {
        return 69;
    }
public:
    Ilk(int milk): milk(milk) {
    }
    ~Ilk() {}
    void drink(int galOfPilk) {
        printf("drinking %dL of PILK\n", galOfPilk);
        printf("%d\n", this->private_func());
    }
    int getMilk() {
        return this->milk;
    }
};
class Pilk : public Ilk // inheritance
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
