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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TE6GLMB2%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T141147Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAUaCXVzLXdlc3QtMiJHMEUCIQCBqwW7%2B0HMAfgbr1h86dTpuAsEq%2BeY8o2O8Ghs%2B0oVIQIgRv2lkXJIIWncb3VHhlBwTPRAJGEFID%2B0HLc1dtpf4t4q%2FwMILhAAGgw2Mzc0MjMxODM4MDUiDHzEWRok%2BhVLWHZ1nCrcA4SuZ%2FqdD4Ike4115TDtbPLQLXS4Qkk6nr3vHf97kkV9A%2BKlVwC7HTGSc2wMyr9vd6hXDPEIzY8YQGGwnRFgyguiqzdmhdkuMbwpeApaMfdRpojAJ2TIRmeTcuDqwBfAg1VIyZZ53VPPyItfzcQh3SqQLxe2EZ3XjafSLtoPX5z1m7UH6tXIF6vpj93RmBzLGQG4QtxfUIWcsuxgL9pgtJDDBuEf5EHQ1BLTHgth%2FCU3e9tuXFSPP7v8TxjZL1wdNUo4tS%2Bhvq3rZSyU4OiMjA7Yihv3hyRWOyklmRY0WJfQY3P4vynORNQmFoXWRciQcvuor6%2FCdBY4XPTscxplLZick3yEZXoToFRkZioVwhsbj1Lv3R3I7vGJyyPq6m5cnNyFed4AjH0SBGUVVM0uuOPT1PTpSABooDmMqjj7ZtquLAm1HoyPt6dnAcg2HDasOaynXZcA3PfQmEq%2FWmmwRu89B6%2FP%2FxgqMzDR1XrIGTi9bEL%2BJSwHM%2FYa7W%2BIceyESHW%2BQ72D7zbZhl1Xh5WWxpl6yOdzAFRbOB9rbfiiFow3X1IsCekf5Vyke%2BsV3sE5Dj1iSWbV9SFG2nKlucgjF6Ibjnaq4%2BudGa3Y4l8jd2%2BJVt9hfS83NDfM%2Ba4YMInaiMQGOqUBwFvkBgVK5Haq3mJXMn1FkqcrB5lcFwkQ6Pgh0konimDEuP7diITviSg3ipQUiJhHA6atBgae4VdxwGCA6BS%2F7IDoaYXRf6VfvjS1sqq95HzQ0A%2BeI1QJs5R9Boi6p0x75oujOHtHhLbCAfmW%2B3wsvqmQyiJChw2EVg4ByDrpZF7AGJ5oWDU2e3F%2BlI3mR557HMEe%2B8sTE1hi2eZLZCDhpvDeEb2S&X-Amz-Signature=a58f682b3ad07b22dae130a4591c975aa16c04181cd01219302a188ba0e2be91&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
