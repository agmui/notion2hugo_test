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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662MWH2VPF%2F20250212%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250212T070752Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDrwWl%2F8kjuNeGTdht36Tjzp4Nyzon%2FkuNgxWUiUwj73wIhAPfcY0RCWMCfUHuVztURFLoLEQXlWpKjW8dauPEDnGd7KogECOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwmfDN8pfrtXbiGwpkq3APtgxCR2Gne1cjQi8NHl0ORmd90R7rVyfaIZD5KWpfw6yrPv4dXuVr1eyGrAm7Chd4P7H9bZpKyINUftO%2B3%2BiyDAu8KEs7aWzl1IHoivfv1i%2FAdMdniJbUF2T5cPZrDP3FqAbNYDCE7z20uNRV4WTnFq0CjyEMc0fNz9%2BYAs8eagpR74qjGgA02Ym34MucKJJyLgev%2BDoIM2bxE%2FntkyPyyVWH%2BbUBku6%2FVBpZ8GRWx96Ga5Ikjnmd8GxnyNwEBZRI0UZWJO9LvWYfOTsgpAsyn9Dn64kM%2F8UoDKzW2d%2BgFZTBGtM1Tvq0bsW8J2LnyV7%2BJsSBXNJJLRoiOkEX6%2B%2B%2BFAbjbIirZCvCLiXPAJMoMlL%2F4bf10EabjjCqej9MZfZNo%2FysNEePwz9DVlPVODXnmXod76bnydcCuVEZWsvSjugkjsMSO2Li9NMAg85C1cBTVeqDuPiNM3mVNEZe1YTF2f9FrkuwNKHE0DCRcAO2QwCLIPUTqNLHc%2B9E2L24UTju%2BMgQ28Qz2mOP9ZJkSdBW6ZPrscK7cu4igo2kAf10ca%2F3Znyhfs8i1yQxHxZXEB1vDwIGUXXgxZS7%2Bk62tenWjq%2Fo%2BzxemLkL5oGhI0tLLZW8SpNDY8%2FYD%2BArTJzDW7q%2B9BjqkAbJgMf%2FVrZNGjP34zljSKBTIu8l%2FvHp%2FD9VZWiXIzbod47PS8svo8eDZVFqPkLFwVO1VPcJPqNoIxYaG7bBEqYdr8eaSOgb3%2BuwTGnt7bfivHtU7FOO%2FnTO5SPacrP9BUIAlzRetexyfff57Xom1xWdRsNfrewFKIVU9%2FiTptfp3YME%2F%2Bl73xuRE4wKJig550qjVMwSz60TnV4Uf0pMotymJI6ps&X-Amz-Signature=58fb452dec14ec5b6502c1d2c8b6ffe1261951f0ce8c3340d40e05a614e4e2e9&X-Amz-SignedHeaders=host&x-id=GetObject)

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
