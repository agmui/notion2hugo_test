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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663A54SVTM%2F20250318%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250318T210711Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA0aCXVzLXdlc3QtMiJHMEUCIH8hFMMEj32kn%2FIrEarNyrmum1HI8h3cxo%2BUlaG5W1jQAiEAtcTybka0hJbtaiK1Xtg%2Be7NctCgaD1k2kGxiHrTsajAq%2FwMIZhAAGgw2Mzc0MjMxODM4MDUiDH1xcnQ1IHlOss5FXyrcAw%2BwfJAPLAI1vxamkW16vqk4%2FdG%2FetInxw8TtwSxTe%2FtyNR1EA39s9ynH7ADKjtoOtGBs6qZ1SGwlb6lmJPf6cVXvcnrjXJ%2BmSW%2BQVox92Io5As8ASF3nEy0pNYSnXQSOAFewluzCzJDt%2BFMISq%2B3exlL%2Fs3Hslti6D3J%2BkyqxWiCQzxbFto6mxYwtcyZMZEsbVsrnEEMsjFWL99AtY1nVmYOfIgTPKntBpOVPNkWPiJZNdwx8yrTGTQ5OCQ7E3YBISIeMrmTkmFN%2BNU%2BvPZgJD3VwBw5hXI5e4FVc%2F1Qfzps3T2FEonBjnHIDjGj3JOfauf5jLQkcu4aIY8yYXfpU9WEstToLUFOLo%2F8gptUK3W1y%2B2aNC5FStFG1CTjHKpSPkftlSnSiZN030IZoS3%2FM06MYz5ni0XQpRuqDfgEHudytVzZga8WXEAdaDDP1GqzgOaY5tUCqTuqdhMtaKnMQlv18zRMu4K7OAV%2FqBtHlPddAH%2FUXlQRx02z8csMOH0cxutH4nRKoFgKORNz0a7hm73Ud79NznRUT7wWNoP%2BSp2KEqEhkRJOmuLxOLBjls4Z6rwFhVKwYwaKFyn7WIrBl%2B923wXllnf52%2Bx9gLJfC%2BQWxCjvDW2a2LKXwdpMOGx574GOqUBK%2BybSgHpqHcOVyrb%2FzyCKwg78%2BPAl8KgpxoEkrC4gE2XBJN2G9tS7Z4ibNXmqCbEP93Cg4YSn6lUalKKfCMvnd%2FVNRXuxg5DSPj6QMZVe3r5h5PH7DDXr%2BG75aprTu%2BJcmjTkeNngJPOyp5WXNFFuhv4RaJko93iVV3v3aHIvwLre%2Bo5tC63ZjC422O%2BlFkMhtWWkr%2BSL02FM2DqTWlxEAJPNuNz&X-Amz-Signature=3704c970683d81ed77d42853837e0b9b45ebf4e7cbed5f8fc91213e8e1e58a41&X-Amz-SignedHeaders=host&x-id=GetObject)

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
