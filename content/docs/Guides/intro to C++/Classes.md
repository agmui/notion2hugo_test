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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UBPYX76Q%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T121844Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDwaCXVzLXdlc3QtMiJGMEQCIBrT1KJ2Dpq1VXGJ8opRnHmaX%2BL3Utryq0BvikGOavO0AiAGu5adlvprcgjPuSyQEAFY6AeJu6deacP3ZtjoOyY8vSr%2FAwh1EAAaDDYzNzQyMzE4MzgwNSIMSYf1EhzY7AEXLuMqKtwDWPDSgdkz%2FCrYKUA2sRKw8OhaKa8sOmFXhvvfr9QI04kANojxCOkW8lrvhIa5fprD3ojJznQWgEbsT7443UuAjKbcLaVP4pO%2Fe%2FAHa7UZayBXluHoWeW4tzzAtfNpdAeLuoPP%2BYI6z4mnQRaB3ymfJiYI%2FdWpyBWukowTKNkk8Ycs3w1ut%2BMH9M1XJ92RJVR7zQuII3wzSJa61Y9j7whfPwUAw51ZhSbAJti5SUA%2F3ejzJJhLZToBuF2BxyKdZm4ogwuhSHB%2BBWb12Vu2vzhrZQcTq4FkhgZmMaYwsMuhjAL5c7ZGNm7BDzLq%2F5ZpYkjEXBiGwYgqZslioso0tYLj8rJMNZxmui5%2FtBEzfk2p5whto3RqLVdsTztwFMjeVeGfTmyNOFOmA%2FYjjKShohxznhY3VcwkuVVMSCVk6DViZGmFpMu3Gmjl%2FrTeev5jdupLnmKfjcRZb4EWXW253WdZV9n%2FoHb9BEVpmXZV5Tlm%2Bu8pwuAdJKJEwayRhja2kTbcuBvZubvGBGDUxx9L0LHCLkKj3HBlLagrOYeD5kWtRnmBiSqx4eJztyhin6IQ7a6AXVCcYblgvqzYt5U5crGA3tK1of05OcJY3yOLMYBO3XtT3EnfFlvbtvDfqdEwvoTNxAY6pgE3cHhMm%2FnI3OAzw0MEyK8U4o0AA6Ib5k85f0WaQvC80hjS%2BJFrrhG4m0BLi2CpAjur9Yz90%2FjfqE6EQQ%2B%2BPC59t2ISWIE%2F15dnzN217ayXVFKdG4pqGsc2xiEhMppArUJA8HYz%2Bzf7p3In8uJBMtUY%2BRC2WQ64UeO0LVgXZfIpnMwaA55q%2Fdsd8E28Hhn30mtgO9ci%2FOUhBUd4hDVwVRyuS2tNtTnu&X-Amz-Signature=b257e1b9c73867d1e5b8923447690b38f64f98a053fd543329507fb92a591ed9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
