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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46643XKVNUP%2F20250317%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250317T100909Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAagTbaj%2FQogjrDWa%2Fa5C%2BDK%2FZqc24fGHAwuGGvMGZghAiEAyGvtOVNmnslr%2BuPWil%2F2VXJgz%2FvMBCPzFrvzzPfk3Osq%2FwMIQhAAGgw2Mzc0MjMxODM4MDUiDPAWZn5vhfROgPnqOyrcA6z5n9n5N1vBkR3DacYpY0el0eLBdCToz2vL0vVp9Mh4Vr%2B672LoeFHMlFDwF6TJ1mxWUkt6TiBjm%2FLJVLOZhdTeL%2B2pU%2F1yt%2BEwxb%2BvdZq4gO%2F0fMNQVvtbQpCcUztgF7csqjwFSdDdZZT%2BWfobfoWEwwNA8BMeiedbhPNdyWH4wvS8U1w7nzPMWlcfakGl48RmkeXi4zI9fntrGQ3zHF2ku6pB418MI65ZIUtQO0gWQhz77sD5GQ6GjSujhubxPwJ1QMcG7tF2QeFTWah56d%2F5pAcU8A8N%2F4j2ib72SLUE91kNOMjeLoqRUNYebrcLgPGCyzXjIWJhM8eGlbTWCHnRfape4V8OG4icJUwCBE3pnqcei2L1gSMcrfnbLmrMCgQES3LG4ncyqe87mVcKsEvnlTCp3gBusVNNpr916cQ9NyXsd9%2FQULH95UQCDWJX6v00temrcablIHCpDmHh6Kkm4%2Bi0EJmBbzLL6r5qp2fIo%2BgdrIS5haBZL6xuqJonFVMc%2BMSwu5LuJbtH%2Bv0SGmyBb6SoUnMcQih96E3%2BlZZCDizhgTqJfZrYW6nW1ONKxNPND7IePjIYv7zQBOIWtZp5fttT3m4aSYACsmnPqof3SLUztVU7AnE%2BjEuaMJnO374GOqUBC3k5YrP5iw03VJU%2ByV%2Fp2%2BF6AuBnZMAT0sIx0ajkZE5IEGuOcCOiBEFTuPb1N1gZp99bgEwFU3duC8wJa%2F7NbkqgGkG8GPweZdhfOPCQtXlXlOPbl%2Fv7N%2Br1E0z89X1OBPASwrLPTRCpBQUYXLFje6IKlrbnUxR9nVxRYlWCKECB4gXMdJsqA3tH76pvQ8cV7YmLWfIX%2FoZ2KTgukVVUjkwYuCUZ&X-Amz-Signature=cb4b607d3b81299235e0afb22cac8af2147dc3e3d24ed1b0fc8a129b09d7aa95&X-Amz-SignedHeaders=host&x-id=GetObject)

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
