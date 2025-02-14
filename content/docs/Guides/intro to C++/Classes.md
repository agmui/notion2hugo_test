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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662XWXGWHF%2F20250214%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250214T003604Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHim80dzrDfVUIZGPmN1WODyxNgQCOFlDXZn7UreN3u%2FAiAsfBS3UP6sepx8XQWyFc3ivH6TTw7G0oovH1QcfwumISr%2FAwghEAAaDDYzNzQyMzE4MzgwNSIMQy7n3O3uvKH6yIilKtwD1Z7X7yUDQqE39ZBRtEhvkxM%2FzbWR0snpCSxrOzVmHyuHzTetJSI5hzsOczgnbjShaE%2B1IH9zvlWERGECPmQPmgdQ7m%2B2lqSc6jjVsgjHGZ1vTCCHqR5uotMcVcVdWPfAu6kYvTZd3Mx34eUYFZVrNLiDn3FFFPgUXasKWDJTE61AiOJ56TXbVT2Vi5rRRckGWEkyaXaD%2FBMWQ%2FwQ5QAttz4pFVOddgNelY1RNvbEakutlbioeZMpzp8rWR8Ml7plODvdu4vp3p2kWbiHal7dz5etNfAZmVqB17w%2Fj9bvGGP%2FYaKKwzQLQ3NFQ537y2YvjS97yf20wBOJ1gwDXTSSBVkKO84q0ouotvM4JigRqcTx3IK5djz69VkyOVYDTrxJaeH%2F%2BgT5fyAL9iv30XaagDyUmfPi%2BZ%2F3vO7g14ZFha4zYHaWqWq4dzU3dpyfm3jrTO6tOaYJDnsRQfcA%2FPwesJaCo2eGJwvgtWeVRGKQ7J4NcBCvpv18Cqamb0g6NKqQcWcxdktigrjJzoHKksXQKOGwSdCueGJTC7Y3SfKYjwdzGE21V5HFFDACBjXcakzKG4yBRBdDl305hAfasG1j6ZSLvB4GbdnVspvkCUvxTNoWixep%2F4%2BcEi45NkAwm4S6vQY6pgGhLyj3NppJmrgv3Sac3CBwBDzg3sOix0U%2BwczH8e2QbZ6IJcWRylNCbwsf0xYgCWjWE5mCHNYk4mOiceuapD4dSDFwOrChCLOuLTA5bnkk84Nxw5SFdUGD82Xk5xKMpAQ0MLBEIBoY1pjLzc1Y4FTtp1s3WvrNtaioU%2F4IEU4Wj8yFBNEZ2NjW1x92DxTRTYRKQZ%2BjntnsLEHv53DpJ2UMnA6lx9u0&X-Amz-Signature=271a7f21dd9bbc31ecb096fcda7a7f830255b845b855f6078ea9bd6bdbdf7b71&X-Amz-SignedHeaders=host&x-id=GetObject)

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
