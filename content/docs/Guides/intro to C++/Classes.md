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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QSAPWBLA%2F20250317%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250317T230736Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDCgPpUQ%2B0kZ6tpNGttGmMh75%2BBvz0Kw%2Fu8dzdu0YD29AIgBpnxAH2yybWJmFyOnxZHRkvyg%2BwbNruYQvsWlLrckoUq%2FwMITxAAGgw2Mzc0MjMxODM4MDUiDMqBFXc67w%2FTFhb9xCrcA5fx8DjUY0kLzfs1zVoBHF1Xk2koUNZ8J7XVstxGZ0geq37QJ4Z95VPLMH%2BMc239vmW5v0hrzlKb02TqdcJO4wg4b3soUvHE1DSAzX6Bkf28DUkxsge402k4UpjDFJvv3JUs8AhLLXbw3607fJM5XhJY0NddTZ%2BoiMaHunRoa9Rsq%2FEIclR8H3Vt%2BXpJl9sjqsXE%2F1qm%2FFL6iP%2FPnTTeoNVzGlQeh%2FM4EG8VQ1Jo6afNuHpIzgHyQ0T7HAjuHZ8w4t6D8FsDm7PhOK58szhPkrQFT6nNSxPLBhgp8y7jjNF9szxcmEq1Qy94uMqNny6edJXAirN8c8PfK6%2FP%2FF9hz5qr9N1%2BEUz0UJlFoFl4VY%2FlIZVslLNN4iSDNNyJMKvtWpooCapzUqushIgm5b9iaPzsvVDf9HAOFubw%2F7wLM3t38AK2U1JxnvJUlGUHONzN9jLHEiVhx%2F8aPWoG%2B02tjyUX6G12yxlBXnflLOs0oohk0%2FU9dQVhtXj6%2BIqrsqrdgs4FnUkG10gXmVmkquhkzET4tmIr7iQ7NWGXOXKl8G0iFfPPm%2BEfF30lypB88Iv9AbN%2F0V9MxE%2FTUldE45O2zKFeDCyQjRBIfiY9Hgg%2FXJODsErNrH6vGizahO6sMMXA4r4GOqUBU4JAC0Lv6CocFa0lvQ1TNvamGgRrcmE546HVVdCeRWzSmr1vh40by0RWhsDC4DCIfxR4uGlv77KEEDvEUoDKDLAhKySP7NN0Fi6D8xB0n1r38gGsdpolbAT24rXt5muTrY0vm3dhTfGPnUKPgkFxX8M%2FZ54GAZsxWE5qDVvDxPIyo7DUzpMaJ7r6z3PzdlTySCyNQ%2F8j7D3MqfemsSB8v9n4bTGv&X-Amz-Signature=88bdade24e853557a6fd33266f60343d607f2fa35d54874352dcfbad1af57375&X-Amz-SignedHeaders=host&x-id=GetObject)

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
