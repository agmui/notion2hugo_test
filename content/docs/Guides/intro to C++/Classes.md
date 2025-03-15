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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W2BHJGCG%2F20250315%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250315T200740Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAlwd0hnlncNpxyvyNxHpIvkTKJaEW0jWcsETbVTwcVdAiEA%2BpwlVEPjBYm6QT%2FS10YakKHiAjw5UXcxu8Tfbknp9b8q%2FwMIHBAAGgw2Mzc0MjMxODM4MDUiDLMLxWtohRU1UIlCnSrcA7gonatIXcvgQRm15tO2K5pBIYaligbyHniI4jZRqi17oCe%2BdTIi%2FLoSutRHZ0PCGp%2FwyZfyFp9ZOsPtYBMIYPnnIiekxa4nU2NE8nDXlHJhczyld1igvWf06NqO4ZRBhD3ARl5PnLp5VygGju3mxSxgYX7LCbk1yC%2Bt%2B2%2B9aGsHLhcmhZn%2FCoBpcPvva6lkTclG5ptKpOn7hg26j7AQMqlXcFHAFt3KXUxcCgQdTgRjeMcrc0K7LCiBvfTX5k5O%2BSiBsfPVx81%2BwTk4Dbu6ariVSNiWz2aMl6XpzSlSTahNDj%2FSFjwF%2FR6QZEPfbmlVAml04n6BfY5eNdixXyNGT7FFjgGQi%2Fmi1Bkqbog9194CxDfa3ZdxwqabAMzRSK2i3HvuHkkndvAKuwneQzxTF57gT5IakEhd2NFLzNB4zZ%2FinFrQuod8BceejqrFEFzcjkyIgPtFj4%2F3qbygbTDpEVVibe0Omg17Vuo%2BCH3OVUszTB46BEthaeG%2Bo5NlvsAc4ROQxiM4uKEZu%2Bm84af3vSstewYZh8QFTXliurX0G1po4Zev3yOS2dAGkyCjMEskqcoSP6nA0k6mky7gw3bU51T4mTiHP3ZHYk1OBboL0lXZfASKJ5gdlYRTETZEMO%2BN174GOqUBjKJTbIPxVLhYxsXxI3y1E52Xhcjvx9UUY4nf51kOr2J%2Bv2rvC7eBDiplbThvEUBr6%2Fn2KD4RtAscLYGjQOQBneJSsyCkuyeCiTr4mTZj1tkAZI61j5eLKPMbRTyRkiyY%2FTk1%2BnjgmUDoTQkBQTaCgAotsjpMCXyHfQWOwIon4y0Osv%2F5VKSo%2BnPUpK43ASE73Envqm8VwEq9BSWpKWZWzb9SO41z&X-Amz-Signature=c0033b6d9de11cdd60df4be7da2f80102dd0ff5b18eedb8103551f464e0a640b&X-Amz-SignedHeaders=host&x-id=GetObject)

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
