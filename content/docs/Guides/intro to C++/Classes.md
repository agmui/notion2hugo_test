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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TWWVVZ7Z%2F20250301%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250301T220239Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJHMEUCIQCgPdXTgA2s5m4QxLCa4NVVL2lBhRDcQqZP0u4DZZisdQIgDO5YNpfgaoX6j%2Fu0a2svb0AoCQSCYEJcMbFngtNaNKcqiAQIrf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNCO1rZr2dr43UayKyrcA8kYlCve7DE%2BApsdumfh%2BaHroADh6ItejL6bj%2BiiYmMw%2F5cdYQEu%2FRfvljPTSCsdutfMl6b1OdWqymbwPqOO3S8NNitbpfk9xZCWrdYW6ztXqDWZk2PpR65DddhlYY%2FbfgGdVK1bEKq33moAnFgczJ4vvrtQxpDDpCbHBpcKamX4LAQ1daM0it4vBse4FxHQwzl76Wu0ta8Hdr%2BbWWiyDxs2WyfYtYYnrdoTm5bztzEe%2Bkuc7gR%2BkBNZgJbD4HUsjjLgbU3Lsdt10X%2FSStSBj5oQ57Qt4X3jL4ASVirLtwN2W5vo7My32jPHtcPPzqjvxOINHkfI0GVTKLCcgLLTZqMk8DAe2dfqgr8te9ayCd1rJMnwam5AtsIL6rLvVu%2F2WgIO5mpq9CxE6nKPrxXFScoLiQE4mV11Rl24VZY2Izvs6GxQgTfzuvgM1awnEuE4TvLtZ5bit6bXGVlpQmNAZM8EYQRD4SKdcAvtBX8NeKtw3K%2FJY29eL8JZm90UxaQoDiID%2F%2BrpXUh7sdIG1GK8Ry%2FDGMETzLvU2zscwCH9IfWVh01006079gCmDfnewYY8meo5jybSO%2BzMVh%2B8jKwZ9Z0IyOrzVBQ13nS9AWJTP21bCQdQ3skAC%2BrOKwSCMLLHjb4GOqUBjsIkq%2F3n5ZaPNSsfvDCavdvd4NkfS5pcHcmSkDdKNQir%2FsU%2BtJx83jqLfRkJzUiyp%2F4iU03MCjtzHe%2BFMIEMOI0LaNQmFy21Ap7bKmN5nSEiQ5ng3RHUC42ZZgE7ODGBSo%2FbHCUcmwwtgneq4Bi68qjK6IYIzOZl3FVihl%2BE0QIwT4JDn7zA9uPuxZwfcqAp1BFZ1OFy9N5ys8sZLPpK7q%2BdZZZn&X-Amz-Signature=90a8c34e5c8939078c1377f884e4f5873a9dada4584cc967bc4374f70f2cca7e&X-Amz-SignedHeaders=host&x-id=GetObject)

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
