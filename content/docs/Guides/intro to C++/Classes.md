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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VHNEFDZK%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T050916Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECQaCXVzLXdlc3QtMiJHMEUCIQCAFkWVhSwowaQtnwysx5I94irulg9QBiu8hMt9Qq7LHwIgeXwSVdkgnVWhQ3NkqaXEJardaDvTZo3%2BoxTEUS9gJKsq%2FwMIbRAAGgw2Mzc0MjMxODM4MDUiDBSc1WixMfOou1rHpSrcA3tZQdVxBEW%2BGwXTjDoFimlVN4BIr1MiVtKCeCaLsnu%2BkjiPSZtKLsOvZ0hsYneOoFlDqP%2FhmcX1%2B8SUdEwCbDPyl0VUmbhxfWitJdjo848O2fKTU9c7xoMfkhguL65BXfkhUIPm%2Fo1uBJifLZzxmKP92%2FA4827X05YlJFSdvsgilqniCBUNVg7uGnrRv4Ez%2FSqQiG4SByeVviA2zYmcv7BOdciD0TWhzk4alyUxrpd%2FsUoRWah7WMh%2FVFzaiFDTHwy7PMrssyZqp1uufvoZNAnFnqU48MZBpfkxUgfUVrRdj2EPWasTU%2BKzC9PUTwYw3Vy8UJaHAEf1o9VnAbeRzM56t9Rvc4u6gAvJaJRXmpAT8Nr5BXCQG8vTVh46h7JolrIeLGa9TM5HSWz7I8bPYNMAtQwmejf1DUJkRjMA2uW%2BiJCwum75%2FhmCy%2BGYfswCP5VayGxqqogrHDu%2FJufrscEwLdZ0E42jMPA7LbWNIPHlYeidoL2SRGYMPFKrWzbRZ7keSk4YIzqnYfCotTN%2FYAo7fE5hkS0xYgZytzi%2BMP31Gghhcu%2BUnM%2BMhlx81PKcGN07qjm7W6843%2BDCRxQP0Pdt5k9fbaJBQWVaDYfmvarx12MxtESjikAXdoFqMOuKgMUGOqUBqFY2nU9hKwS4%2FykJEB48fiY0hQA8UAGVTgpqMMNa9st4MKhWawrJ516IaedKD1iLy5vFmef%2Fj6me2k%2BN%2B8Vy0ZmsjKrLCYL68zAfRppdfaJM0H4yOWzyLFCD22W%2F%2FsiHa6Lp7LbD25%2BeTtyGMho0X1vQnNZXq3TSSDxH9Blo7ZCYOfliV1Xyk99owD3Ojkwiga30XkhOiwrhTXc1ghhlgrNdA%2B6I&X-Amz-Signature=3ac598e95291b813f75e21cbd10a58c4f958958300ca75f3b41c012d0243d1b4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
