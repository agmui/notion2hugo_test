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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZIXYT7LB%2F20250406%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250406T121244Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCi4UT5MPNbHoYkq9nn48qRdw5pvk%2B9Piyczs442W13tQIhANqXOVKIT6ADX%2FPWHvLCIDnaP%2BLgsR9p2NHpvBXgi1lJKv8DCEIQABoMNjM3NDIzMTgzODA1Igw5qcFzAVclxFIvX5sq3ANHjB%2Bsaqw32KFUBgQqOrW83xyRxnoSGa9M5Y2sV3zqic0YNQf5RdMYp36R6Vh8dbhkxdiSWPlNQlpo%2F2IUYzItFsFwUqBmGc7PvaPpZHZrxvwYbUJBGbvO1EFzsCQrA4MgEMDNUwSLZx5ZsUE8JRQqaXzztSF0TugoifBY1YRXr7%2FHIL1N%2BRBjljbeRT54Wnhbm3F9xY8lFc2H9pegsiIc4SCb3zHoq9PV8Dl9UVz7KRa%2Blo4pvmcwixqW03pVzrSTNIidVF5EMT%2FaIBx3oKN58BJUSEN%2FUy4mCV7%2B1pkszHjm5SGHI0nqZIBU%2F%2FtrEL9xBve2b5eUPr1tyuYCoBK9Rpm3y26zTDYQ8bkOv3Gu43pIEJQwU5HBcVeoE4aJLU7Ve2fnlWR4BYVh3yCVlHKaG4hADQc%2BkvoUYrPXjoAiQElgA6DKp4nkPQLZE8WsVMp5UGsV8KDmeAa4WiD6JPx1wS66oppp6pfDRsMbgyOrDvnRtex0bd4Q%2B9OTdeDU%2F0XBl4x3wEKlTrn4X9mHYw9bjR0VS2J0hHc%2BF3cooW%2F33xVFblRBCY532UxexYETtvnSKj22YlDu3poQWaX%2B9OeVM6MvHyuMZhCCVffgfuqQI5bStiM3vQxi%2B6uh%2BjCs%2Fsi%2FBjqkAVbMhQaZvyvYASuL9CZHDEpCiJeOMyf2ZEOGe0XwhRVFIXfw2CkKKa33GY9WIEPzh%2Bb3F5gaubRW%2B0xpuZSdrguVaML0oYckd00AOV%2B2mQCKgoTXGFw%2BRLUTmMB%2Bgcm1UNG%2BYeC2AJxXFWs6EQnUvi4WqY9TWTOq7sryYoIzWYRbR4yAtnK7adecJi7ZP6qvWNtIeIANtsjRqXPgm7czdaWlDu1y&X-Amz-Signature=c670f2fc8ac1843a8c5d4e7b60d738e1683cde83800f797c42c79471b52b6318&X-Amz-SignedHeaders=host&x-id=GetObject)

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
