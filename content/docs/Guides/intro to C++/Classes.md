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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TL3O6PUD%2F20250520%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250520T022821Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEW0gBPWVbyNih2IUWFZG0QqzYFaEZkANbh812aivOa2AiEAxYNf1IOHPb%2BuZvPpaaIrFk69KJzlyAtJakjUPPBtfysqiAQIm%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGTwianpJUQGUCraQircA4c62tyZVIcMqf1crteHkgodCm2ljWJ1%2BYId%2FhOGVrI3v6Qudz6C1kIdM32Ul%2F4%2FX16nHXsUcAjvGslDCk5wvoxbHb%2FOE00nwc5OiP6k4Sm6NmX3IdmaBC9HCoEsvkoHmuDkl2I7cLHhcrhN68vtqZcHskawkmSl2aNLjjPcIUyTf5a6WBJaAsfnBL6YhXChm%2BsTCkTpYmRSdTxFmTMXBCXChvXCQhaqmi5%2BPm%2FlZxvLcboTzWRbSWvuSWNzUwfROcaD9rHoTheUL5WQHxifJWb7DJbII0kZjnUY%2BMLGsiM4WG3df2X7BEo8iCGV7MUVuHoj0VYYLtd8GG%2FZYmNnEYCVE7tIweAoT0zc%2BQ%2FaUGT1C5uS8TtK0LYQu19gYIjLuOD5VSyM%2B%2Fx2Y0Yacxs6k2rRFdjBpXIC3qARq0mMegSfU%2FAHjMUDXARulCbf%2FinyiBSAS0QqsD%2FMFHwL4SwCc3%2FsFanCsWrHoA8mq4zftBZEhJvQVpmZlrUqy84xmT2itWmlAiXN7AqcT%2Fe4dYRzkx56ELwkTC3BDk%2Bbi3miLA336k1ebnP6IPvOYbng8zsD%2BC4Lg1f4XJ7knG4UwibAQdozQRUs6GVMXwS39Yn%2FkRcNOW4GafQoVvXezzbdMJPLr8EGOqUBi9OxrzK6N%2BzUafubKMDx%2B%2Bp55l85nTIQc%2Bqf%2Bi2Zcf11J5%2BGPHn9Msufwk7JuQe%2BrtjwxDwYMRqaVEQLQ66UGwrGk0nqjdkfz9KkGFwAup9gNU%2BDHK3zVpWWrskPmJJQncCRkyvI%2BXGpAxXy4XAPVFA31Bb7ztHMbUREwqX8zaL1NGTVDSRnELDJupbp%2BtQGTNvii17pa%2BG5pkCcwtcTiUctRXP%2F&X-Amz-Signature=5d338f35df1d0646dff7a43df564e83db07f7f9a02c58c08ecc8c16a303db302&X-Amz-SignedHeaders=host&x-id=GetObject)

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
