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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662TFM7GCN%2F20250407%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250407T061250Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDQFIswv63K3K6qxq%2FbAwBVSi1ewLbWbHOvS2tR7ZJHSQIhAOQS8ccEAzT0k11AUpsJ9CfBTXRXkIifO6sHqVeUyswNKv8DCFcQABoMNjM3NDIzMTgzODA1IgypLOhQTFT2YxrCSkAq3AMb4vnWe9qqsPkMYYWd2UrWsaWAs0DxYdMoC0UvpzjkA403UYOg1xNdKQM7zSWdFM9x0NG6xgtHnLTaThiQoQZ4t4dOD1Wvs4ynhQJHUHPGrPQ1hoVNfkYhGY9Q8tebTw2kvQ%2BWN2%2FK%2FAe8%2B1p7TDXZ4D0CnDyxzJ5zwmRz2GA8jnaLadD0h7OOxEeFr8tpxQ5TpnpZR%2BLpExlJ33eckMsOFLhvgYtfcSW4NTrLuzjG6Pz1OtfKXs9TwV9zqnbYbmKLacOeM97tsRdwSO4%2BZZ1eOV2Ly%2FBeG9gvHyxdmtmhsM2SQnPEi0zBxV9YFzJm3oxNXcaLsmxnz3mdMPnF2zzkCOKyb9loj8Kvmrca%2BjfNNdqpSZ7kd3BHoiO8rVL5Phr1bXXiKoLhOLbc2YWS%2BiNkGKCk15RACNl10uD%2Fkkdt%2FUK8kIZox2skCF2xnzx2jYvkvxN%2Fa2nLTkvNFQKJahaR97YOWrr7i1DdqUF%2BEN2lb%2Bn4%2B4RWwuqWVd2c1NvjQYyWjaxZ3AnZdbaHbhJOlZFYa%2BviF644mTIwb%2Bc9T88dAMYUblgqQW2PF4JeQRZOPReYIxUZQfBW5aed53km3aUXEwrrCpF7hGbTwKtZH%2Fvluc5iS8dmrihgCo5%2F1TCV0s2%2FBjqkAcJj2NZEEsUiYarALNa9Ik15CrEEJInoDtlEUMnozFvULI1RZ18lW80MLPa9cgGuVodkvI1%2B25bi%2BZjXy2d639tItvhAVbLPBqCPAsrWyFktChi%2Bt2zR9HgK%2FgdDvcoj7jPve2HP82Su%2FFG79sycpPsEbnDZ2jPMBHARw8Y1R1ony4%2BV6OqAehltiQkpH3aO2hB9zZaNVL%2BfLe5UJMILFv%2FZoC5q&X-Amz-Signature=55f3ce3885ffba80b4e2072572f4bc45f38f776996222e92a2e54ce9ab4ad17a&X-Amz-SignedHeaders=host&x-id=GetObject)

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
