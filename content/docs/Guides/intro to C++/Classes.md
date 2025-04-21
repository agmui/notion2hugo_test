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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RBYUR5UW%2F20250421%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250421T121458Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDQaCXVzLXdlc3QtMiJGMEQCIAW9lWMe5QicdzsMoJIKI7ahNtBIOx6qYyw%2Bxndc6KPLAiAYJZsYTUEdXy7gg4x9QhMjHPKZGkFE6OkY%2B4JMXspX7yqIBAi8%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM7RNK34ZOoIdvkCRaKtwDOVtArqY5quh4BRJ9EgvFzxs8ptfBWDm1l1kwUhq9r61A4GmRFuIcty8B3ziwKVeO6pnEKF2XMf9U9PDBedeeG6XOq%2BIh60iLdsgi4nac9iIfBQHsmjY7XuUAsQT2qKJNSH%2FOzSia5K7brp08EILl8XLs1Um2ik%2BtvFdWoqH2ORI8lFADg27zLp82Cd%2B0o%2FeCPAmxoudo7Yy8Bpb%2BGbZ1mQBel4H14gKvX3F%2BCa6QYghOooEeIrmf%2BYanA4imx2kUu0IrbFSBhInL%2FoYF%2FGATwXR78Si9P6KBlFpvsDi7MlOmF7D2xEufFGB8VbCcM4e0gPpGqEYWYJeXEqlgVYPtK64usIVLpIMokhX3tyY68FrGKMehgEtmJxtC6E13FeJC33cY9USxdNnq%2BJJopS%2BD0NrUv3d6Wr%2Ft7T1Ejn93%2FVzDpKn9zIhnBwvBuIs8djb0x%2BVSyxZlEIUKYSA4a2Sp0roAU%2FJv1wN5c%2BMRAtz9Hb3j7DNaJaIePb5wCUB2Za4uBqRPEsrlSp81vCQONCTT6uZU4ngR8j7%2F37g06U7dE2h1BBNRnHG4WbyENdRtVWmBU%2B3VOMGFiN31Ux1woR5T328whOJq8A5PQ85Lo2UcWB1ndeXeUefUHF1A3w0w99SYwAY6pgH64k1kb4dlvqXj9T4vM5R5vvSwm15snRgCpw%2FyJosa50ASpcduQZ%2FOVARcVOf8bPP9ub3DkWigZfBGMWuofjch%2BSMDlhxej3nLEgpK0IDFRJTFUtZZdqM%2BOYVr%2FA9tXdXn8Rd%2FdvpKizzcnyAN9twQS20mTtldz6PiiyPMHDngYSsmefhRMQOoSXQXIeLCL2nGsh%2Fb0SgIN4tw6sdJBlP48f4I9YVA&X-Amz-Signature=04c6d5e5f3c622beb5493799b143bd9962716220d38c56d564c540d8a1a0ba70&X-Amz-SignedHeaders=host&x-id=GetObject)

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
