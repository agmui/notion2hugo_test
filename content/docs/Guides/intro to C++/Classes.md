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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46623QMT6KC%2F20250530%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250530T110100Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCb58KCZ%2FUIe%2Bvml2I2L8WEqsrBALaHIgqFBqfEwe8sIgIgJHDwgt9awHXAy6Jw6%2F2jGkPWs4apCGgsMbqAJwfmQPoqiAQIo%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFBcDteOTwI4UQPAvCrcAzyCoowYnGe4hrTxaVE4NiTHyws%2B5lGG%2BRuMnaC1HEtWHXp9Se56d0u%2BHE3F%2BXfN7poGWQcbmCsl%2BXoziTZyTB66EDPn8x7IpTWoMwJ%2FiWemFHw5sldcv5vdiyqqLLbXHNQxFnqAbyXrhZMYB8hsCLy22lMocQ9fghhamevObQ6sc%2FWUmpDZqFIEneXE0FYgd5NXVTWtGXXQMLZTK5yGGHmGtm06x9nPbE4SmdRY9DBCOQ9cBJ0SHw1zsx%2FNml%2BDwy2Az9RQijBm9d%2Bqr%2BTCABKfMyWhNRe9nwxtdwbaZwI%2FEIFRZ2bNRmZ%2BvKpF2e%2BU0aQWU9yOUNAK2n1hjram%2Bt%2FsBiDGVbJdnuiklMDWi76NmSKVEKPbP%2BZt0g76M4QucYh3Il1cQnsl1Hd6XcsmM9jHL3t38tlYQP3KlB45S6ovFjjg%2BOO6ZBnzAqH9aV5FslOuRvz%2Fmpy0eOt3w4Kmq11Al1lnY3NaKTR3PdYEznbMbkoxMZtWaJlWeATZkA5zknQukWe1T2FN7jl7XkuPif8sJjWu%2BL0N68iNt%2FQdsH7dIE5DjhK3HetNuAC8rvAe2OkL743sWARJwGKf8tabibhwvUh3eplNo%2F8PT1cvj1FZUzEu9aJE6n6RdD5rMISO5sEGOqUBdGwD2GQ4I9v0HelGvCJZ%2BoIAUmRam6xnLvwtUQjh2JZMPy0EHgVOWH4k5LVNAPlWnrzE%2FabS%2FyttIDomt4YhYAKkUYdX9s5G6%2BTXRN2Iu1QUnYzHJ5JyrbA89OJbp34FsCB6E3dZVqtCCcfVIbuMJwAHqd5kAjOVmCyLi%2FW%2FVAyi2LtdRhnKZ06WzYRC3qOx%2BJRRlrH2vvEjN%2BqO2wgLNQ2Rf28x&X-Amz-Signature=5e3d4f6720f5a49f4bc3ebe2dafb0c1180d9f32b0425fe974ffa066af440da8b&X-Amz-SignedHeaders=host&x-id=GetObject)

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
