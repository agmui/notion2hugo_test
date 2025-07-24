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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664SMRARML%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T133043Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAUaCXVzLXdlc3QtMiJGMEQCIAntLgnkr80y7%2BTsVgQYVjII11VgkdMoLDx%2Bib5Px8KzAiBCCrCsDMTEim0HnmHmMnph9aMEMGvWjCbZwAcIadI2uyr%2FAwguEAAaDDYzNzQyMzE4MzgwNSIML5atsxyU9XzZao28KtwDQOyFsYKOaGLZJ9C1a0qn9o%2BUEBCJm%2B1KcF2OlR0xkDzRXz2ZguClA3JIrBnSn61yQufeoQxRO76dTT6N5E1wib9r90k5Dzpft8EypUeoAypbIvveTgI2NNLdmEFsMFaRnCqHlyFrfyUCJBN8rSAcTcGLKOlHy4Y6%2FdxZ%2FswmewaFEL%2BePltksoN3%2FToSOSCjj0JPWWHWa%2FwEPCNBAGu8EpE43N8zx1TC7GGt3ICyHPRzPKWbfwrfmdlm8tO57VEREiFCNPsfJHRVqbUzSIaJORqULaNX1Qgw8BtWSGMMGGThrl853qS7zv23GsMdCITeiSiK9N5kGoTu%2B6Hus8D949o%2Bja7OSqRLWWEMn%2B6URmwJeKdRB09qBQPQbMTjuPVE8%2FLlRXGGKQP0%2BSPJPmE0vc5zEeaAkoN4TaSv48qGBBzzpjpDqS6iXKt%2FJUT1bktEcYJsQEaaLv3Tn3Q4nfD4hXbrztS%2FTecQKr%2Bgp32PvH91VXlBxE9hABXplVFfHObhUS782gozrt8fuVCFoko9rgJLXkRv7YVstoh26%2B8WsPN%2FblALlmaf0O1SzT8L4Y%2Bp0hwcFEdQgAU7DkGacMcJD%2B7SvdNd4WAOFWcfPqbnSOl3PsxuMNZtYoT4VSAwkNqIxAY6pgH9%2FOAbB3G1hS3IVOPNq%2F9FGJ18G8s2zl6HqPGAULnlEQti3SAkGyj6wCbEBEt76oi3mz0RwWf%2BEiPZjiOeeBXj3Hp6kX0em2xQuUuDvNit1RSHJJch2ycTjIhXh6sdCkdu0b11JXmXBNtji2dOMGuNHciKhRdVPanfdbCvrYyS5VP%2FdvQVNxXPxCmHpPy7JZZ183%2BVm1G%2FfNzY%2FgOiQRtBkBuHU%2FV6&X-Amz-Signature=6200b7628295b0d2808336bc538930a39bb4d4d9ae327ce1665a5a631bfaede3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
