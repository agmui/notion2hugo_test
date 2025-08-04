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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665DNF2IMM%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T091933Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAkaCXVzLXdlc3QtMiJHMEUCIBiC8NSbleThwqBnkztke9cLRHgppEOrkBflavMRkE4lAiEAqM9ZdupG5Vmngn0FYSqyaoraJCYuLT92Zfj5Mn1M9oQq%2FwMIQRAAGgw2Mzc0MjMxODM4MDUiDHI1EBMbQRB7QfiloyrcA28FGHkz8shExoITmNid26SXDr7J9Ru1x8PSUjGdXZGSfwOtLfCpkivA47PbXHH0nVNnkRNbKLOHVdzTX08qOXUEHSBZ9vU8t1YvSnAIzrUEWWqXmpiSRtvL%2BxVoEKCMDdCkqwr150eNw7EYIszGUvNyWzheRmKm8NNsW6OoMrC0A9Z1EljvZ2h3g1YFFFvz1oxG1ivMKwUyXrXN7fAsxzotWe%2B38jM41%2F6MDFkU4qBASxCYDAH1zcaHSGrBzHeO9ZpCaYl5eQMWQeaYqo5p8yKR6bVsQ6diPYyd1Y9SJ9Ssh%2FTFOEO9hMxreFy7DazbBM4DWiONcJPgXLbVBOappT%2F6FYcXQG2w8oSvElOnjhv%2FdXomTLg2dkSiECvPFRHtY6NRJ3yfa7LticMQRttrwXSrblQ8bLJMeUR6jg2GrpytnM8YOcBgr2TlNqKhfmg66auPM%2BVNkqpTTCfnmH4OZRqtx46au16wRcY76OnAexiLEvmGIeCQMpIyjxZPzP4KsuSUv%2BmfBRvluWQk48FNL02lbKnhoyf%2BvE0VQfPSHJNPT9ZE7%2B8zy9z%2FKG%2BiZxTlvmdKgWZ9EsEuBArdNfesDfgH2dvZzHYnQzzBUGKhVRiG2DFd93HOJLk27xPWMIjcwcQGOqUBLB3KF3bKftFx0R8Pdc7MmiPXkrFCfSXmusF6cg%2B%2FQAhqrlICBGopFV%2BPkDnpRkqE0qtPZ4UpZUsSyLfhAkfZKgA7H573rlkRr5zr8QttUbrlyXHQBiSveA6EQsI66M%2F63T83n4FvlRo9fmWoF5E8qAZYOYcUsp8v3jiamoflkfcDtLs9BvFIKmqpZ78GJ28snEEM7o7sj0c5KqEfjddTDwoGo731&X-Amz-Signature=d079e55375d83638f5b5b0d9b1db44c67e393d5b4323404cf627bbe0ec2255f9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
