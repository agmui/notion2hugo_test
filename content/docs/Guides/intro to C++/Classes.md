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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VJJFJCG5%2F20250702%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250702T071017Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCmcH2Fqf%2FgQq2QRyvoyfBlLqaEP5%2Fi%2FgCuAULy0qaT0AIgYAyiqOJKZVEjLnyMue1B3VMebqpQQFcw8moUnRAsH5QqiAQI6P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDK1pKKAjQXwsWPJmYSrcA5SJbvyG8bBcJuNDHEIAWet2t7l%2Fmnd%2BNunJwU5TKsYkL5LcDm8EylIKWL5xnNrJ%2BUyuNTPhtxy3mez1QKCZYZ5yF3Ze3YZCNmdnryKcJCriN63LHs%2BpNorGH4lvAirpu20TPaH93%2FJl4RMbTgsBczR72PVYAACblGSMhgTL4whltrZGQ%2FYBYbE65N0UoUuhb782nx%2F0Sxo%2BSZR%2B563KcIo1yEHAoYfkncF8Ap72Te5EeQakGpDCqHD6ojhTgbnPbtO8EhpXaScoppuaDNwazoMs9b9fQ%2Fs5CGezoAjDtuXrUc8i5Z6AaqrryMeR%2B56yk3DBsIj22pJm%2BlhpGjvWc94GzHE7eP5crkFmrVNRwleWUd1eW1WUNenlUt%2FEZIsFA0VlbtcXZMz2oHipkUyVZj3cIvugg55QIAdBH8Cy1%2F8rWum8dxiGYu%2Frl0gHz2JlLmIYh0aI6IssVMcvJfT53WdZMtuDTW9S0GesQNA%2BWQHjqx5ErysqO%2FuBGff4AWzMDLBKyRb8nMpNUzIwh1s6oZWok7TzmCetbwpHtrn8jXhtu2X7Ien%2BwFCkSw87ot3JMLGaJA3ESY8sh%2F0%2FIl4ZsA6Q2uTQBCwwCpCgSgYTYp%2FLsRxcMrKyrGIjEPF1MJG1k8MGOqUBNFujdWC8T%2BeIWFyY3TY2soK10wsDkzSGRqE5bSh27Z1qQqjYBJB39eeLJU7oetvJOVVc1GEVoMsJ5KaVWcIhmwGr9oePLAmHyD2I9GY1QfVa7fhArMqMgvuQiahajj7McXMZLa49AduarnY5QQb8APCRTptpiO8F2ZFrViVko9lB%2FRaTEwWlY18MtmrQttPRLDCU1pyVDpyLnTfgNS9L8G8IEptn&X-Amz-Signature=a568a874f2ac992bf20ab0c50ad8f39d507cf9d496023b08da1d82f2ef06c720&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
