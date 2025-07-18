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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZT3CB4EZ%2F20250718%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250718T230902Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJHMEUCIC9y0aLCettJ%2B%2FvmKo0Y%2Ffy6cIy1rl8CSGd9SNkzdLwdAiEAqlxEnJKMx67LyPpVgfZFbQ7ch8kqhZPCQKmlq8tf1aUqiAQIl%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEB7m4auQjlN%2FslBuyrcA5ZVMVDf2Yq02HZ29pEVnrsMPSh2e9Vc4ccuoD3JUescK2quXT23ZP6ll8QDxmzRZX3ZVriMLW5kZemQaXXViqicxmhg6L3U8ZXc1ty6b9ugaXHJVC2q7yI8oBjBafCX1rGLUCnIeJzXQYjEI%2BdzV1%2BvPNR%2F5%2FvaM9HlE%2BllbpP1lTjatCWLEcM1fH93SFT%2F%2B3QzSQr6nWulsz0ZvV%2BbKh6DToOWKn8BsClPtZy1NdZvEvRASQY3FBZ0nzIEcYec9bwyYXJDha5x6WOyj57Bf4vBJtR8tQAje1UUcSSpih6NkiCs1ehuMmgbn3nWv7mNw1YaElQLiTN4GD32dxKSxIDmmQUvabmqakHC7GOFJsDg8LkVKtck00pZU7JhxZE42DBmvTW%2FYNt0DSE%2BNucJGj7UUFw0I8dr3PNWMPjkhjNFTua6TO6CtSsVVdKbsvSJ%2FW5F66q%2FarVF4URiu3%2F%2BNChLNs4xwss09m3%2FbJ2QuPJpl4GjYV2IAh7w1o7J9a3X7JDkiewBxW1JcPbPIPDV5RKgSsxtGRBfeax6orV00dPIXnSTFC5VHEPYXxVpvxQtZmQOQ2Zuw1R6g0upAIl6%2Bhdb9q7yom0RB13wzWPNH2PDibCUM6fPyoP0gcd3MLKK68MGOqUB6bdwP45O0YRL%2Fz7GZWAndylnTLP7w51DZdb6P3bT4z%2F%2FUOfCCFRhs3mTOTm6y%2F03OVsL3J8v%2BBD69NRKZsN46wuHeem5HlaaPQpee%2FBnH1Clvdadfed5uV419aSnPPjg%2B3KxFzi1Ey6ClEdbDn%2Fqee11nI6N3z6B%2FiAcwJvERqTZ8mZ7Rzir6uNRAtPaxDt7uiFR4prt8ptCUAoMz8DmAPViQoSn&X-Amz-Signature=8650008920123208de4e41ca97802f46500a43595bb1663cb51a56b4f635e3ab&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
