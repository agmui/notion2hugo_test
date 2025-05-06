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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YPFPKAUH%2F20250506%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250506T170746Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCYI2PjQyH1dfldAF%2BWMJKXLnSwKVLVUaOKygrHmMmJ1gIhAIW9uxMvOyN40i6gVjVKCmlGZsML99o4s3LankuzhTgjKv8DCEoQABoMNjM3NDIzMTgzODA1IgzuSRmYazy3wkHtHOwq3AMlkCiIKNDcxaUbEZVi0pn7%2B2LcmYMqH3e%2FQiU0EPfl2n0mSsh9kFlZVomVfxWHABRY99u604a1gZ3O9g281bMk8fpf6MdwcaVJn83tAK3yhNZ4c4C4LIm2I8fEVvOOfKRYWDXYjVFbkXgRv2f0ZRxPxNZu8HQSi4AHBEF3cPdZs4q5cD8u3b9pXOoUZCcH0aSJfIRCRWDlMV%2BnLlVKTBJQDqHjl5jTovXH6wSEPJ8twd67jnlq1YRVQTRUvCa4da8l8gcYqDyh%2BpG1vMx9D0N5FOKHF%2F2NEZ%2BWloz5hlwY4ZsFWI6I79wlwq2mFESAk%2F%2Frj5%2BkqnW1%2FExt%2ByA4dd%2BjPUzSziJ%2Bowi%2FgQqV%2FS3rIBZiCITe1J%2BzzyKDd2NMBf80WDwGbSbpvkTIQ7yNTqEzGHQeZhXlWuDVL4DZnfH6VPp0KPpTAMRKB2bKic2n6J656oZ661wNwYjx4FQd9qJtTjT17VRkw8zDo07bBoeDFK8q%2BWH87RWRZrQwbyMSByMtUIzNfGquKIHAfduNpPw%2BEvtRnl45FzHQPtto3bgQroZIMk87mq8nym2jHPbn2Jkq2BDaW0YYQBf2BYVIOWSxDCIEEJMlKlE8yrrPt8WfMdKmbJB4Qhg3d3WvnDDDgOnABjqkAc%2Fb7lo2yxpDZ3q7%2Fs0nRjjZ9u5jA74%2BXd44pOj5D3C4%2Be7J%2B3CnAzr0bJ9J4FDOdG6Ot9eZxbDgN8VwS3VcfjTYlRSAoEEQVNiRDEt27NBLoAux0Nhffz2Hw6u2al4fqykXTpe%2BiVI0nYFkMl6CdgwIxJaaXSv8TJnnEvFtAXkLDk2YVB9Atow41ZLbbUPv2m6p4af2luWA44FEBsn4nzYx%2FIsB&X-Amz-Signature=311e074de7d9ba81d75fba9e76909d9d8253aceed9f6197a9c2b43aba00af9fd&X-Amz-SignedHeaders=host&x-id=GetObject)

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
