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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U3LJWGTX%2F20250418%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250418T170731Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDvdqrjvFEML6Ak32xjQ%2BDyO7rYzuRFL0%2FrdM88DFNBtQIgUQb6TROfvJ7LjALdhOAD71jcGueiU0MamWfnZj5aaJsq%2FwMIeRAAGgw2Mzc0MjMxODM4MDUiDAEsjO8XaFp0X5cVuircAzQETwz40sXzACLdTDAyKBy2%2Br7Dks4jMMmrEKqYiq2HO3vSn%2B4YGMmc8bQj7N0%2BuccYS3ScH%2Bax5SRTgPRfVnSDF5kpzJrWIlp0n5DJHKs5EEv2iuU3Uk1Nkc%2BzzJXybnvJXptRSVfXG6k3IcQFbwyKkj%2FpQTEmTP%2BNRyIq75RxdvHorOdYji%2Fz1sgLLxecMvO1Iof%2B4IExoUA1vgyGbQHSQxhlYJLUU3NmejnKqG5lLLiLUM80nwSBPuSqQdhZ9bVoHw3xT5TVnG5kIAIk9VpceA5LZwOmVMehfb9gi0DQY02BUge7W8Q6D07HWGpEpl2QCfDt7xvXNa7sEZs5mC2QYR7M4VQ3rAGnutGH71mu7D9c74SwNJMkYgfJjIHMBT2nQXOvBNLNaHTLYhEDm8TCKFbGuKAvLFdygRcJ69%2FpNlTt3V5AzLopodtv3FoPNxg4jFB%2F6JiZJAoBi%2F6UIUbOuKTlilA9ApmrZ6lO2ubl%2FxYozP1q%2BLUNtdTIdyWyK1%2F%2BZWl38%2FQgIY2RlbWN4etklt%2BlbMmpHAGjhGeZh57Ty30GYDb%2BNRmUJSJDkXtwbmh7BMszu2VzQWkLUYkVeKkxhyvucr6AMUYqlcM9lV9WP56I1LAeSYNMmml7MJ75icAGOqUBEyT%2FIJitK8a%2BUVte2TpxfW3L9hycEAjngjt%2BWV0Er8StkG6SvZu%2BCVTWNjnn6fWkRIj2YUmvoZRjwpMH43x4vEcVCQsMY6xv4z98HTqKBpz73Oh9bpHXWIMSsXdX5BqL7Kv54SWVOYB6W4WHyoFRfxQZKgWHY9WXLRlbsqmLJVXFIe4Egn%2Bicj4OXOFpXt2Eq0hRjenHUsjIESJS%2FyGcpE%2FNYQsd&X-Amz-Signature=76d9394cef430c055a69df6b5336cef75f8b647a758c6f8eb703a308c4a0cbb2&X-Amz-SignedHeaders=host&x-id=GetObject)

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
