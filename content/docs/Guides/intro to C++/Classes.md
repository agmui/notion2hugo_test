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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZC35NC3G%2F20250505%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250505T050945Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH0aCXVzLXdlc3QtMiJHMEUCIQCb4Nko%2BS2kG5wnOyhnRJCrURqvrzAhhSTRiBqjnkijoQIgJD0%2B7MB7g80nsXD%2BmlyCUkBH0d%2BOIpJssYaNl0z9ljQq%2FwMIJhAAGgw2Mzc0MjMxODM4MDUiDAHTYVhO2bW5UMJHIircA8wz%2BrqtXGnFSBqZwBEKLyrDZmc0bUWOt4T6ZyqtPpBvGHjCI8tDHbpkHjv9GVvCnkmPgy0QNsAacMkKB1E60YBVjGOaMW9EJtajiz40GAxN5pxXjoE1D%2B9K7%2FYa0f64VpOXCNXXuet7UFrX9HtIjgKuR5diG0zqqXAztg8wYH%2FDclcXpbHpwwgh2UQOl72Mq5RNp4npWvcbiDqpHcm1P73emA1NEc3JUsPX6wq6VyX5yUwdMbHZszxPQYeIKHmbP%2Bwzn1%2BAPXwl%2BQl8PwZcf8ehPtLbcI97pse%2FZamweZxw5yfYDlTg1KepevPnCyuvD8HoG1YIR7xQNRHNDx7F2J20fwJVwhmKuZF4UEn4gaspg1HDml8CQGAYi49d%2FlUh8hXmSX8KPt%2BoCp45bniVlT14qfeqJk9c5c6hVZxtgiZz4X4Tdp2KLdx%2FzZP0g9kuMYe0%2FVE7ZiyHhiof9cBrneRxCcU6LfV3NuqHtXb3Apnw6ChjRLIKlyTUtuKRUKdNzBsX%2BBiTVb4DTDHNeMujeTk3D8EckyB%2Bj0LHG%2BfpIrUIJCIumvQyIrd%2FJXHeb5chamToTcSrPOiZxbpkJ4ahN2ypaU14kVLHvcZ46voq4URtcfN%2F1oC31hOpksafMI%2BD4cAGOqUBE%2FFP2gdwAM3IwFsVMSmVxsKnL%2FtM%2F5QSkElMgDdhogesJOx3I3WA%2FLClRqNErImVW27%2FEpR0YeE1Y3BL3ijpimaAhN0C5GVIsSmH7ytiZPabtxtVPqJey3KuCNKD%2BCoYWxlkCkF0qDoXkpswA1d7lJB6E6TVkYrTTY14gESoJlzOLza%2FKCZuHq22Z08fk%2FbNXf5GI%2F0RMmxb4xYbe867WKL%2BMPKH&X-Amz-Signature=97bde36b04fbd06dc1f99d5287885c7c9895676a62860697d343a3ae732958b0&X-Amz-SignedHeaders=host&x-id=GetObject)

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
