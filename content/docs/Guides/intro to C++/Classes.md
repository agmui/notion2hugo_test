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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XMJAXAW4%2F20250227%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250227T160955Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEAaCXVzLXdlc3QtMiJHMEUCICFgVjyXxR4Druh7OeySO5u0USoexvMoZQKsdQQYgSpTAiEAqA5jzeCkLp%2F6mzLstHQqRY%2BTh7MDLv5hlgl2xL6SOX4q%2FwMIeRAAGgw2Mzc0MjMxODM4MDUiDJy900W6w2SON5fueyrcA1obWdKFS9QP6xSXryIQgRINwBJzxbMcBWyzRhcRRa9EVl90e5hKNXd%2BtxzyPH2WnaCPImbVTa%2FRBNS1zCmXCCS%2BltQdB3ytm1pYm%2F%2BBopER%2FpMo%2FCxTW%2F214rwi7mtKDAitEv5fyC1mFCe47b1faX9i4CQZeWEthvkzZIvI78WVtLJgXCsqc59A%2Bad%2BbUKmmN2cWHmreUlpoK9LWDcE717Ut9ohffoLM1OKQ2fVr40IfSfKThJhuGsctl4NmBtREf28%2Fip8gTKaXRlj41cIqn0hJ9o0SAS%2BWohiyz3SGPclP36XoyuxNFb7gBeOfreYPWDdfJvdD5iwnyUcLwZB1XmoaDMHkS3hbSfdRvBFI4zQkJepJ%2B7tF0YdYUweRcr3gXaMT8WBtPvlali%2F4YCiXCbQmXEAyzLlDzeSEPAa4Qs%2Bfra2xN6wnKcPuL%2FenKFJeoivkNVWSaKSM4hlDkguT3n%2FUZZSdYLlehFwTiw6luLFKGv%2B5QBw3rw8sF1v7wXaY297ip5eQTWHxtQn9SgsWpRiQFI3Nm1ALAipDYsJfo7qcDXNdCsCPP0TLPGR40WdaHlAYTkJBtsKMqg62Set6baqQvdLjBq6v9st2BuepO6b%2FfoY2VmznYShNXeqMP%2BMgr4GOqUBMoGPsBEr3SaQqLMY8Vi2Pm4swy5scwHGL3KHDXIWRfkvJX%2Fg%2FNkTG4SSAx3%2FYOzKyQW1RgVDmFEl%2BYCH1rgj8v7%2BNS7MWO2WKnXGlZiN56ca489MvmOinlAlqv3LaaQodfhOz0dOIWqbtMNEq0avi2qsYDysbH031LTSc9hOSMdke2XeJQU69Npgf6r7fv0nL%2B%2B1goTGTnlhREdyZ9Ne6k3zC9MB&X-Amz-Signature=baae53310ceb7e97994f4891019b425a457a2bb13de2d955d9ae5b288714ef53&X-Amz-SignedHeaders=host&x-id=GetObject)

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
