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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TPRDLTV2%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T200858Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDwaCXVzLXdlc3QtMiJGMEQCIE9yQo1ETBAXWpioqQXBnff03iGuB7tAQgECaOQYFltLAiB0HAZzNrx%2FGI0fKseDdI%2BpxGgcw%2BsPaFqGrCu4dtMjnSr%2FAwhlEAAaDDYzNzQyMzE4MzgwNSIMVl3c4Vy8z1dJJDnZKtwDdsKuIVtXzpv9JFYbLin1VZlBooAC42oZsEvo9hha5QWGAQcB9qxe73eQDLckgK11uLsuZJhkXep9nYVZyB%2BNgpMvsojs53r21TGB6e4a%2Bg2sdfro0f1IPmIleyc9i74%2BcjsBdoB2GVKwHdTwwIHZv8AM%2Bv7eBjATXjFEa8LT%2Bxc0G9HliGKFGsEahVA4L7omGRob6wODFlC9q%2FtxLVIIUmNEBQTxSKkWCqA3NRljGRIsgtI0%2BNOiKu1N7OHypP3iWgAcWvsKzngBcCezwRkI7aQmope448ftNhdYsqfV7dDc2N%2BTNbjDD6D12fT00qmk6r1xkfcI%2Fue%2Fwl%2FC9l%2B5YuDWOCiYRI7zkpbuKCkzKZ5XQl9B3EG0T80D8MgWhG3XrmM5qrfqMCPcLlQjfrtXqFjddCW8kiIOyPZtXBexjY9kvXvyh21tMriAMU4%2FLIiVwXTmXH8J6EZRYN3QRAqnN31wcaAqF05OwXV9eoCLhdIrlj9MVYmkEUvZi89m%2BVINajUgK%2B3%2B2tDO33x%2Fu%2BZzpDsQlRyj9K9r1JYQZH%2F1BmyT2wHPFalYXgFfnCunEq43nSFV90JIyNurw%2BsU6NA4mcMUQuN26MvQOt1Y22Bb0PPxrNQs1CnwayGkh1ow89iUxAY6pgHceQU0gF7gh%2BM4X9NprbgzXjWUaZzfNspCUYnwm%2BOR1NmLFGeZw%2FbW9NcxlCzdjxTMAwq00OZsuv%2FBsnLDu7cXZ3a5itxO6hxsfijbfYP256QEAn1hSUCjoVbM%2FiWDXesc9MpQP1ZYvLKMaRe5ch35K%2FOwY3gjZAL%2B7AETor6AMyCVlDIbPiAIqcmlKYyeVeaN2hkBIQqFpcKfdhj%2FNC9fOPtpyh%2Fn&X-Amz-Signature=865cb7d236a4e1af496e2bdd223b960e828eefd379f23007f2c0033592a24658&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
