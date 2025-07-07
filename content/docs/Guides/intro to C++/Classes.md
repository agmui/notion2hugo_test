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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VQONTH2G%2F20250707%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250707T024731Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGAaCXVzLXdlc3QtMiJHMEUCIQC2jFDnTjaUtrSsI3Sr7nx097dzZw%2Fwn9UKCTonDL2nuQIgLn%2BfHgG1a%2FbVpJgfQpiDCkKoRLuyyBIQePy9ob43lqsq%2FwMIaRAAGgw2Mzc0MjMxODM4MDUiDF94tWjg8ze%2FNValKyrcA4DGQDtDDCACMRiZouVd9Pf7Y3eKTv5MWDa2HRh%2FUBqyvtYsDm5PVOxCxRC%2F8Dpp8u%2FnD6DAhccYoX1x%2FFiqhrXge8lo94t%2BO6Ww2lbj%2Ftfq1GKB%2FwAlAzm2rh%2BUOUWMOg66FWsp8Sj7DeAp4i70WQO2vTSpD4H%2B66txcMj46LfZMZH5Dsfe%2FAcox9%2FeMKk0aDQbjKyX9vZLOe1maiX82MNw2N5PA9ACsYmw43tPe92EbxyHTLoepH88u9iSQ0yBSJEZKm3ezMHRRxC%2FpIUI8U0kMcLJL%2BVvWqdd5Vpa5c8TOwbl6rRn0l%2FMOiYdzZeWiprXbMO2RyEnsBI9UBjCBB3VcvThQj81Mqza367uqkt06UPPdezz9RzeVkZO9NOl7upoov%2Fikv%2FbdHOKBK3sB4PJFKN%2Fe1qsMfVsCptp7VgUx2sMjyS9vzmSUEPMdFUcH2yO92OJYRmfP6SvniHtDJxbEVhIftEdnOMxVcPDS%2FEne5qIwQcLHBKKUpGq2S2zDfYOgVKncQLFsdJdYWd9KVfP%2BqD6YgmmoZJPgZc7urQvTCvOsWDprAN7hpxQZZEk2guixL2FmJ5vSmc6aK13G%2FAXiNaWPXAxle%2BW8BWzFotLslRSyVLLvUa2DytlML2YrMMGOqUBo625t4aYn9PNAtXmbZlLsyWwBKelLx3lBfFgP6L2hir2yN2ZGi0U5CXWFvXXs4IMO%2FjNgJvj%2BrVIaL0UCliism4X3o4lJxDqKHEYGSVwojY%2BgEWyny8qDHtLuS7yeF%2BuWmkXZ2QxuZS6qI009XvHnnyB6XdSI7lefVYmD9oiEcNLMEbEizVXHFBA5JMDdk1eVbnULGEmAnT9lluabF9FGUWgZx13&X-Amz-Signature=4a0a980d82d6eb3a8a7dc9576964714caa231a4d6a05270fbf9c36a8ed4d4cbc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
