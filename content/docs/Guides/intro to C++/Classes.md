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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VSOELATY%2F20250719%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250719T160944Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBUSy89W8gmGjhHn8iMfsAfcCrSkVlflZOubaBEgp4GvAiEAxFAtCJb20BRelm5cDiXrUBKilRommhb1TNSmohIqHw8qiAQIpv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDD5GacTLAOSYRqgG4CrcA4grEOTJazHY9Iqnh2AZUGwXIw0GslQoe%2BYo8Hj%2FO%2FCsV9TKiAJMJfKY8tMotFbhfXQEFq%2FPHPX2cHsmhMdXqHFNXB%2F50QIMe5ZFbnVbbaddvPL8TVnC7DFMloqkBPCFfCxXxh65yQczvPSAAAUNzZGaw66yUECc4M%2FAmBa2iSLS9LnU5bWcQ%2B5IPStnj8BxhaYriZfMRwSbqagdzNvQwwYiYINYWPNESHMMWRRRzPqa2b9SRc%2FQJK%2BR3HizsXTzruKaHvOzKgf53a1PK%2FwpNV4ztZdhaS6OWbU%2FZx5JqoUckIXsEIwmw6nMi9sPxyNAWhqL%2FnGSq6uPJvwoRStpot4GGUcf6oKDqD2Go5b9kueXs4M4Hg%2B0US43jTf429bwlZL%2BUK02OklMV4%2Fo4JkbPyOMiP19Pi0Sd7I0YuC1T4u1K3e5y3ywvJMUUhB3ySuhkmlSv1I6urYQOxg23jtAfRRRBWH9X1AosApczvCz4FPSOjU7yBDGXksghiklVsqP35262rCV3eQV7DpW7adKP6VYZgU784yMcfPKadYpWP%2BVtxLlaIb98d7CLFA4vsJfmcmuHt1%2FOKLkz%2BSVbjHpli3IES5QZHjEtuLu8OotHzbjI3KATuHCKiLb3%2F3YMMK47sMGOqUBUb4rqIZU9a3jYB87kbnk3%2Fw5Bwmp%2FyI1mPJHZQUxxHq9EiCDmftubbC%2FZxMNwXau1jlxj6SrwXbn5Jx0WYVMhZ4cf%2B7jdRqDT53zNYqDDgcukHs4ypFT%2Bc504svXts5hcs34TqpjAaXO2wyBsbNHMIUAV091CZvFaY3xd5PDjj%2FNs6yCnFT9eiTj6Tot3XMB6Fwncs2qpyxQdqVe7MkVS1nTxylh&X-Amz-Signature=77be98052bce7c7cabae5d6e1a97a7063f1ee08fed52c561da112706f0fdbd25&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
