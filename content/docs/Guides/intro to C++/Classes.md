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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SYOWHLLD%2F20250309%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250309T015540Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLXdlc3QtMiJHMEUCIQC5hYy1WetNsGww20oLCV70M9dqIaYZrqHgNdM43QP%2BYgIgJj%2BZz%2BuVVDtOJfe3Ao0queUCxCJBrD8TgXKCnenvX7Mq%2FwMIaxAAGgw2Mzc0MjMxODM4MDUiDBsQzjfnnuusALbEayrcA8W63u1L8UESmIQJNd9p1JINR9FZJk1%2Bmg4MDjdy1Jom%2Beb9oAiUfSOX047cDK0F%2BPe7dUWsMBD0eaCBhv5%2Bsum%2FK1Wuw%2FVt%2FiGXLCw5gCmU7iNdJ67Sarr%2BYaCh8bpIUkGJOvvAOJjHaiKf6CfH%2FEz9GQnjizWGcZKcjHMxruIv%2BF3YXi5QyWHgdV74SvFS21hxCxnYWNppOcVlkMKfMwUS%2BpA757wtFx6s2CGBlPshj%2B%2BKR7NX6uDwLp8PYMUE8AN0HD4bmanF7KYb5ewlUzdcfLs6K5b47hEQ%2FXVoAO%2FBoJbjZoJuD3mjmxSnmCfNiMmqHjsAnmASOf2aF5450AUMAde77NBaFxeZvyIcmkfFhEjluOVJJoknIAE0Fn0ZaI0JVNXfZkhf8xMr0r5DzzyzvyzfUR%2F1ZNVr%2BKbj5QJnJ2dqnFQ1DZI5VSflMUgrHdR3t0JKDQOQcZoKNSIB0jkEUEKxv0U4tJHrEkuAYTmsCgI%2B3NFZkOP3iwGenyDg6t5nVZLKcI%2B0pKoyccZQz5RpTEFkt%2Fy9GmbT2pit2HPdJnuqse283MTDn0GzCxZD%2F%2B2CVIM%2B9CiUt%2FIX7%2BteepXEnkMWiRLYZxxZOvR1rCG%2FfENCnQurEv0c1Q7uMKLps74GOqUB33Ypxs0%2Fbf7MuUa5W6AbB%2B8WC23maBN4%2FvdV4CuT84zMEx7GAJCxueUYN0a%2FgpLeYEMkUz9nym68XgxfHKjN4L0aM0UfYwUAh44k%2BWhSuCKHaoMhu3hXJn0OaYM17YggLdKt591zp%2B5fd148qyRLmkRclW%2B5%2Fcpk4PfqCtOn%2FDx4aNoBOvWPWMQ%2FkvLSUo3Ap%2FUlYBmpax%2BUcONOuZWAYnvl7baF&X-Amz-Signature=46bcdee3ef8bd79ff110ae4b94e601d61152a915f42ab0b6295a7489d3c631d2&X-Amz-SignedHeaders=host&x-id=GetObject)

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
