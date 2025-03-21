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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TSYN4HZW%2F20250321%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250321T140747Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE4aCXVzLXdlc3QtMiJHMEUCIGPFB1fSCRYldPdfgkyj7um2vfxaKN4LDkBIhoPcI6nQAiEA8ePLYNs2Of79tuJ1WqMaOU33PXq93LtlnLt4CKzNL2QqiAQIp%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLpzd6Ur6qYDRfs0byrcA6JVdYeaq41UmjKxNYvsaWZHsZqtT5K0ECi6Q2vMGO4w%2F1g24SjanxeeHuw9vVWA0IQbgLWWfm1yze2cwc8YQFSWuVtpK%2BICQto7ASg1uo20JHT9am19f7CdV4x4a17SvFi2PLYO9OPgTn2eMTncOg3DKEnxJ%2BNhHUjEuvQBmxXxrtAc47N1%2BFQeQcd3SPpDBc%2B0IWIHJfLsxK3%2BUG25NnhLiGkr2XcXnS%2B38p2THFBB%2FE4sqTTMl%2BnZrAknw%2B42uTN%2FxsRRfDwwjSn%2Bdk%2BbKnbCgSnC0aVMCF%2BPbQPgPFWW1Lz%2FbCyUEZKmldBV1I25lnDWhPE6QLvXfXSwDMdY5q6NRlJRFxzgfMFzw0gIRQBdzVupmY88dfqnEHvPF5i6JkKickgthMJN1e960eAHHow9YhC3pJP32gs3br2Qx4KRwg7AEc8ZzodDc3YWBYBpsx%2Fy4cZhRRZFlnsvQdgAR4aHs6DKAH3VCHyg4Jt7NpNC5RJNvkUyJV1ubARNMudEhZQrVafXWfgjgEhO2SmTf7rclcZtjb6Eox4YN0LidHLSt2t8C6ItHlnusdmcqNWd%2FolVTBcoMFVLAGZq8FXqkwvZwWxS42cPfdm76m6Hj%2FBpNxXZiuyu%2B5oRo6nTMPDZ9b4GOqUBbvruYov1WQXgmER0rfSVVr7Sv%2Bn4ZPCw1j8NQEXoEUpUrwUEuE4m6ga%2BgCyawPVDaTn89Be1Mb1uGoSL9bf45uX1Pg5M4l%2B1gk7x8F2MNGnNoWnnoCwRo2E%2FijBSczH241xlQGviAhTXAV1FKulz4F3dSY%2BFzoGVMyD4tNPzB5lmqg1RhopkklW%2BdMh0V0KTovrpJgjOkTpoMa0u9VeFqyTY05Fb&X-Amz-Signature=efc55b76911e99975a119d524257bf013f58664a5d5bc8abcc77ab0e554d45f7&X-Amz-SignedHeaders=host&x-id=GetObject)

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
