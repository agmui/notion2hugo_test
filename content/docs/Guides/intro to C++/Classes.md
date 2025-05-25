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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664UFTEPKA%2F20250525%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250525T081027Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF0aCXVzLXdlc3QtMiJGMEQCIHFoQ47cP6PxasrlZnTPSOyl8fcxitVQ1Winb0d9CoevAiBCbKrythwzFRyGIsAbPpDtBq7%2BaLJkdKyEsX48ImSVTir%2FAwgmEAAaDDYzNzQyMzE4MzgwNSIMOM3gbsj4Ls2bl9vDKtwDmar60Y3Nafki2KYsR4ZajTQ8SzZqmRBWstdfy0UyqXVEblt7ZJMo0uyEsBYFZBWsLWPNGGb3mA1Xi741Iuy59BLfQmciz4gS5yqMn96RiCLjrRSkbpNOPPL4k51BuKxQHtcyzs1HFJ1TF9sR25I1ubkEfRER42pC%2F5xtxFQVrpZnZU3FZ25ydQLMvIwYVPxc7fOOp9aKtYL1E6XEVVt%2FF%2FVAj6T32gfFC22PLxTHppnf2Or%2FyA7b9j2q%2B%2BYvjN%2BaYLyLMU5peVFGjx3YmM0jCjDnTHKWr0UF9Ho0fpD1WnPvwUu0kNDb%2F%2Fktc6h8IsRe3%2B%2BUm9IiHKdLnEyIr7ohCf4%2BmrV7uZdZzXVjCcL0ECFLODQgyxdUEr7OSI6IRPTNKqZMSiHOmdVA%2By%2BCxRy9fB7dzp7wNoAjR44WhwQaAxOie4tKNZVqRdXM3Ro%2B4IPZVhVN3iRB495fMw4bS%2Fg1wkdkrD0VFk7SnNmt5hhYD2eGSrSnHPMcu5hsln%2F3QDR7Txw2LECIYT2m8E32iBlaNvFKo6l323ShG5luBdM0mnR%2FcDu86eRXIjR5PPcU%2BaSg8XZ%2FC8SYMtF3yC1m9F28jDOM8B7maQrjRSW5jazqPGj3OiCLPNa2sP4cNZ8ww7nKwQY6pgF3NXAc%2FSnavmFravoMLnsKojCSp3L4U3X4NGKmBuRPBpaS8qo62WDVGW5h2hWImCBrBT7cxs0GBPwOo66cmcVDd%2BRAXkAy6foht3d8ML0ZGHI3oABukJgOVUwgy0OM1Is3FbRbXftfM9o7JXj%2BizwCIRjzWOZji3gnHgvYiV1Nq3dDtsAcUUWZFys52jU03SZYpx3KTUGkVCAgp%2FmlopXT24%2BIZHu0&X-Amz-Signature=27ed59e323abba7f44dc4c3aba11137a15fbcaf7d0daea323f6ad784af85806e&X-Amz-SignedHeaders=host&x-id=GetObject)

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
