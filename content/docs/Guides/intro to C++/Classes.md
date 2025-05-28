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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XJWHAIDT%2F20250528%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250528T070926Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGoVR3DcgEWqOs4vMPzBNDg0nn%2FzObQgBve1tIgWDLYPAiBlB%2FPGWu9tUoJ4YbQQlh%2FijZH%2BTNLkMANTd3nA4M7dgSr%2FAwhvEAAaDDYzNzQyMzE4MzgwNSIMWa6i0oGl6Vl%2FsQNvKtwD69%2BLHjf3%2B3ZtRxieJu98wpcym4XypP1ToO5I92c3HC5M487YgsdbZHSKBNLqnFC4EcK6vKIkUrq%2F4XDq%2BcnFqF51f%2FPFBiGkBdaE3egzoA0EQ2gGWliEdNkYG0BiaMiXh7N45VWuMXe0LVXAtycixyfOe0hz%2Fuk5smS50tElUQTqlPwauLTxXwxhMHaxDnNmwK2WYecXk2gKvoYk4Q2bXolc6tR%2Bggds4sL5QFgy6ebdg4GoZJt353CmWAK3eqGq4%2FzJlM5ZinTp7GTL6ESFVwBQgpc37dplxESY78qYOPV2noAxjeI33jGLbxW41ebRHfke5FSl5JzZ9pNm8N%2Fe45LrWXJaygFgD7SU%2BtLw9XIkeVtP7hUVNQTxYmNho8E%2BQ4bF7lsWad88Dhiww%2FXw9kOMK%2BpHVvgPkaihpku8bxq1QEABOFm14hVggfZeyGsUsnHcJgsUOpZlcFJcgd%2BktUWJQ7DAjjw%2BjkPvQxEXu6nrHLMnvO3vpMv0R2FY7Lk2DGzQNb%2Bn4wfYQV0LDC9O5TdjijK3IK0E20fFKC1ykhGC%2BHh2tR3aBaOEUuKiTf9cJ%2FOQWJEVY7Bcb4ZxMdGOBxYDJlP4zhUyoTK9Gl5hB%2FpittIadgZeD8naiRIwxcPawQY6pgF7qRO4xCv1LGNbEM4k20fivbHWxZ9udg059QWYP61LfYEBE%2BN0%2B1wzWra7ZvBl8H%2BpDfhdGax4JwMpmFxJfI5QP2aV1AM7TMSOb3gPKd7q1gefRlW06eQ5GSHdAmCPtXYA3Gde8vRnxWoIwWebbVTKqErdLMFzeLTkZOha1GTcyo4rBREoUk2QtIEXKyc%2Fq2RsP4y1caG3eJBHitzLVzNseHf38sDS&X-Amz-Signature=2227ecf96bb90b295a3bbd014cbf46c32067119cec33b50038623efd3017fc5c&X-Amz-SignedHeaders=host&x-id=GetObject)

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
