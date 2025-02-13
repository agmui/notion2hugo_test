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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q345EDSS%2F20250213%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250213T081042Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFsAV4d%2FuK121L%2Fp0XU6%2FhEIR7QNolAB5vUrb4GW0ySeAiBFDFviOtGs0587z215RQDGUxYKqK45O940yvxwYSS0Nir%2FAwgREAAaDDYzNzQyMzE4MzgwNSIMLmI%2BfuWp0j4JUIk3KtwDfgCv4z5trGJgqKu%2B8HGmsr3Ht02F7lE%2F%2FdDsR6CBIaoByYxupKx6146Z7emW78CuGEZJcqbAlXlH5i8f4wdom5tav1PudVj9TpeagEZNRBh6sZ%2Ffl5HMA%2FIOF2lzFiAPYWZVJnVC8KuAatOVToEKrSopCC98ltf6%2FgRStKWoWZoa6Os1FBd5Qfw2bWo3bkRTZi3ln9GK0SrZmXD4wZkAja9C9wdK89Wc4v3qW%2Bkfb2Qq1H7d4%2BXwFZywMTUKO1nWbSUtD%2B1SiGhuMRgXw9I6eNAbQhEZyk1%2BaMGfDbZmeIxXBwv21LKMFFGAzU0cfmKe3vENICneZq%2BVH1rdO5pEaoXlaFtgYaFcpF4Yt7oyaKTi0mN%2BfNb%2B7hy%2BB1V5e1FNi4Qoku5cKNM8132xFeCLhgj0Ehh%2FOWpA%2Bu9eMpQzXBZ8udtLHMhXQjbcRug5WefHJECu0%2F9i%2FUKI886Tmzu75EWGkShusSxloaCpAglwbd7AuXC%2F7h5IZ6kZlEgkcXOhacvIUssmbdDzfs2bd1bSh2OwVyd36eG7cQruOWqblvlEHsilnR8KWLXLfokGwXvUsTUdf0o2s9hrJfdr%2FiuFJikK9Vqfnn7QDdstkRMqB6OV2ebSfy3j3L5nMKUwvsm2vQY6pgHVxw1%2FOZUtwe6leQP%2BCai%2B7x9y%2BICVNIA2dcbPsro60%2BSQ8RxcOdTsf7CfXDJCuiZhEdH8GbqJ0V6l0ukxA7pucm2PQyVBXJjpUhARqxhw%2FEFCS41aLhoQrxqimbcJCMZebvfpVhTKBrLHJIOGTJtfm2NPniZu0FkocU5ynCZeEvvqnNTRwpBuq9gD7hpm8eNhU6g%2BfNowu4TA8%2BSiP80ulGHyHn%2Bm&X-Amz-Signature=129518475a40f153aceed2637f7e36d002e07a461390c9cb579cb2846cd8a6be&X-Amz-SignedHeaders=host&x-id=GetObject)

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
