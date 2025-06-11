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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RZG2F272%2F20250611%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250611T023906Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDONGsO6QuxbQgS9c1O4FRMXmZIzoEzkQV9xhhRtAgEfAIgQ83DxzWY%2BLtCwGqIKjdrFdgdZCoaMub%2FEdNRQHynNnQqiAQIyP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEvup3xEkGlIMrKl4yrcA%2FdCHmIigrdx6P49LbKSoaZ0njt63YWkcwD6S9uL9ELTiPRydGiU6MRCiCEnuZVXuMV%2B6bpu8s1SxAuE7uFRSneLP1dUx5tN0l3pcq924LvaAOw0SstHcVZRxMIrYIye3mRfkuZ7k63VgneZ4jTcOujgmox9UC3XSOZbnmuYCe0lgsX3yk2B6dPm7hgrYec2ZyEIAg4Sf%2FZH%2FGCfohlQbAOoNEAbfdjyrTXlwFWMl4kgTASO%2F2dlaEvSwS3vD15DE8kliGCclthwzH5NjL77Tv%2BKoF%2BK%2BnPMVgLuSi4y6m%2Fr0TYLr2Ilhpy9Kjl3pBjV6cMqBeBf5Nss4mNT1qZEVpIY%2F81akj9CNICBDReaZ%2Br%2BkXKga1NLQ7X5sHd6OPVzHCI%2BA1NfUw%2FwN%2FJ02SHHSMt2KT223UaEM4xJb9Wwf93HdDCgYxE4Vf3GK5K3TodCkh%2F8%2Bv3Jfv1YNtJilOF0KoZmie5JgH15AdVCqtotZSe6ZhatkxjQy%2B%2FqUR9F7gctPzkGFikKr8rljg5kqNdfaqJIrxVVDq6qV5TkQnv8CrKk3yEqkw4Dfr49%2Bk7C3QdLJY8HD%2F3AbKgbaQF%2BR256o935sWTpYyXQj1%2BTQjYvq2PGHUY2o7zgIXJ1XJPOMI3losIGOqUBKjHQBXRXd0hJ9PUE7LJjzMBB5yDFO%2BdQ8ofGUVRm9iCE9peyDn97f6OsTOms08T8%2Bdt8OxxPmGvKNhQukCTYjZ0ijE%2F7MWH%2B%2FBXkTuVng588t6jlz4ZkPuBm5sb4kkFV95yr1cvU3YpUC34gqzj%2FgyuIE8UAKFXsSeuLG5NJDVvpNtCeEnv6a96PZlvLjyHBVT%2BWEQG3URbM2xf0rBQByTjtV1qh&X-Amz-Signature=a654b8828629aec379935cc1f83ca1445e316f3f353e20c6763af361b63a7005&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
