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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZHF5IK6G%2F20250509%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250509T210719Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIH%2F09BPGMwq%2FUlW0SU0KyLPa9BJpMPRNv3ZKTuNTo%2ByYAiEAvueX%2F8LLK3e%2FrTikeqAa2%2BA7vO%2BCGZuV9bKBq6S19pQqiAQIlf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKc%2BH75FmRpl6ApGwCrcA1m3cWvMJXjmVz%2FoWzGgdmGPWDMBcL4UFeOaH%2F%2Fa%2BKNJ2NL1f2IroQkeHVIFDIAvlXMgfHm4%2FdZ0AAX72Qofxygw0Sy%2FJsgoTOZvOV5mKX2trH1uhSSFMLcpEoDO%2BibpXymhFT5B4vk%2FPPYOrbVJKD6szv%2FL%2Fyw64mRMnl3NW0q%2FrUahnIot85VeG5GtixQsb4oD%2BmF1grEBnJk3O9IYyENWzXQBmGPWSWiPpSkPBmH5Tn2ra4qLMtQFgovBUfGejJ4B9wD47artt0%2B7zixrXuEGgcYP%2FhLnrGf9ZVtQ1PkTs5bMRuO%2B9RkxJQ7nNLolpDQdlutMuumjc7T%2Fp7QOtha0LeIQ4BAN0%2FkipP5PSjLFDsnW78c9GjTIyQ2v0oOB3I7p4%2BVm%2FeSP07t5Yu9DVXO%2FsWwZI%2Fr4LvLLXTRTkBJAngjhitU3VJ1f5ttMl8BX0mCjBpKQaw0sAMBMMy3ftfX5GbOWfAPxF0c%2BzfLFzibKQozh1vwCs%2BANE0BT%2FJav8jZ1repCvjsVR4cBTRSFK%2BhKOd2usC8TWQQjXaUy4%2FhC5zlW4YevE691%2FlgI7CQf%2FAYeX7MFG7%2FeXkjel0JTh7FCV%2BnuiwvAwtA0HvQM4e8TYOpIpWTVhjyn630gMKTE%2BcAGOqUBF271G6oC%2BoocLHCLOmHYkW5XBiMXU7e3caHXDWmJsH3YEvnLIHNnV%2F6aHB6bUQ9Wl96pjoxcUNgvB6%2BUyC7MH1baK%2FcYZrYMjV6rhFUMNZknweMWxyOPsAqJxb2mmgBEqifc546XNvjTDPyXCVNe5SvnQx8UTonHMTgCnMOcsi4Jz%2FVtO7fVaJ%2BGeXbc8bXF0B1kgZjmWm3OWwhJyVj1cLBerdjc&X-Amz-Signature=1acbb6e21eaf76ccb4d9b5f28d22c88616433aaa0bb1d5f7a787c45b4985a42e&X-Amz-SignedHeaders=host&x-id=GetObject)

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
