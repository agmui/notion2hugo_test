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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SHP4NGSS%2F20250531%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250531T110312Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFdR9e5bJua43D70a3Q%2FliF%2Beyff1ErMsW9zuseL3%2BRkAiEAxRtUa%2Fb4Ygn%2FGkdbLHUABOzEomI0w3I9wH%2Byis2HgSgqiAQIuv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFUjHdHLigQ05ibJ0ircA9w%2BCaw2EU4szKL0ZA0kO%2FPueBhfmX0Ook1QYOvcZSMb2YxHEpcjju4fHPwoe1%2Bdksg5uiiSnAyIe36TYipOHuOPYyRyFYjNbNfTmuYfmR%2BaHMz5NyqAN2yNoM1gXGfnT1IcOgJjY7G%2FOHX04qpfwsN4UmE9sU8tGkHzXnjJOc73GlAdTRO%2Bfq%2B5G9AuOYgaqSnjPFfgnk5Zed%2BK4ekjrgjG0R5vfxxJ1r6En%2Fy1eXZQbuEAzqUVV4U%2F6XKTHYjt9wsgnSyoKrFSM4lDQJPt7z1voMdpiiiLt1BP2EIQ9p%2BNY9NSoDaY9lyxdAfGR70%2BXpQFeRd3x2EmAQXzNI3ylkojIMrlQvaz28c6DQ%2FyuFaM02zamI%2FgSi5oyWTuzUK%2BRyU5CI6jHTgq9wdcHCNOn2Wn0KOU4eJEF1BVK%2By5D4%2Ba2qVmE3NOoBt%2BePhsZPskCTGO9G2fU10YBul8j8%2Fuct6Fvuj8vMI4b6%2FOs9dAsSUXKuQKvkPalzW%2BBS%2BfuFiUMyJxAUIwEtcF27mF7i9yaxJdtBji0xtWodOtPOL8GbjHMhBpKZ4WDasPneBL6ivwUWiFpQatfiq7jC56OMlJ02KmhO0Kel3Ui%2BvClrLZtwQ3AeXKy8%2BCjhrKXAbHMPuD68EGOqUByoRu%2FRjVSEbAM%2FwJMtaoF62A1V3Jc95J3ev6H2SBrx%2B1Ka00j0WVttOu2PY0v6DDmyNsIc8RKhhJGYmpedS94HgtSGuQ6eKGUMiHUeS5%2BWlg7HQA2%2FbWDdK0VtQ4QJwNQmC13JreFfevXQfZTLwSoVRYXwncSxv4%2Fgdp%2FcklBxuY3aETzo%2BrsoNCKuESZ2iFCrXXkq3uiXpvgXoFlTKzD3dgSNQH&X-Amz-Signature=c5fefba78724362ab974bc9b93e64ebae5aab143e1afa39262e5e110637d94c6&X-Amz-SignedHeaders=host&x-id=GetObject)

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
