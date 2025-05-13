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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SLFW6LEB%2F20250513%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250513T050923Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDwaCXVzLXdlc3QtMiJHMEUCIBxOrjLdOotaCSRtbN9YZd7oORZgEmSUy9DGaNoSFXVcAiEArxz3ZgknXRt3I%2FxySEgJgSI7a5jI5W51ZCayzCwnJtwqiAQI5f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBIUgGXrvoshyeoO5CrcA5J73d%2FF61w4MEpjNAgJfzzKoEED%2Fm%2B5jZQ5O3pEH7v9k6gL3XcotZRwJpjIIRsZrIyxgz%2FjI7rgfjbdLRBXYIwReAie%2Fc0fZzTdytNyoS%2FjFuccMs4gK8WBkbhThf%2FiwvDShMgAqCMmRTXSyjG5fYSYzm6MUpwondSWa9ZpKrXD8dWrmSpsSxLPhL0Iq%2F5gh0zVyjYBeWwwC8fu3PjM1ZTZ2N1vy%2F9nvYnm7%2F%2FsYEjtfFf%2FTgwJhJHqxP97XA3O05%2BNuXB26XWt62Z3U7s1ykk%2Bfhw9UQEgUOpUxc5xH3DS5q600KH1NgHizO2UvwsHSws%2F1EU7cX%2Bf1MhRLfNC0cNqAFUM8vtIFELsQp6FNzz%2BbtIYITZ7bBrLPzZymrxEN4KNefwnGVJlenwDvfdtkyTRpCJFHNe5CmRDNtxL4owpbwfYJgu2isy19cF2tMvjE3GWNehz88a96M2i%2BtNzf97eystrvABA10ktOXtp26%2BZBssVasZEEncOXccptb%2FJXkPhei9wU9S42azEZ0%2BKC%2FPknNQ%2Bgz%2B3sgLjdhxyNqMfenMZjYqtLKzSRiAWG4EM0m12HCCCiDcbWSTyLrk9fQw%2Bbzhh4a4H%2Begn5avcRK%2F2Il6VyGMxjO%2BfbRziMJiPi8EGOqUBsQJs90O42204A7WMTr8xgeN1kYxzbx01TLXrL7%2FUSOduTh91Ze%2B7GYOBHGWsqFA22oojcTUzNIx5ZRcOr5FqwmsOqFxjXdMRJ7DMvxui0Ze4sLEaM5Vlf%2BJ7pvASYyJQksvtHFgudqHSGZmsNnnjkT2zGHuOZXt7jUn5x9p8syFxmpEFu5Idz%2FCAXXdSrKw1qsN6B77%2Fu9PK%2F71OnMbbpDnV9CO6&X-Amz-Signature=711fd7b01ba255c8a64601f9bb5404910c8ea93aed601ffda678adc88184e58d&X-Amz-SignedHeaders=host&x-id=GetObject)

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
