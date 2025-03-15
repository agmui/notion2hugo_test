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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662ZW6253Z%2F20250315%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250315T220112Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHJSqoPb8o9tXENyZ%2Fh4CyL2%2FrZLeEz6XEWLdNRna1U2AiBDdflRUpAuQryxh6eCKOvl%2BrJf4gfFvF678b0bY%2Ftriir%2FAwgfEAAaDDYzNzQyMzE4MzgwNSIM6HLMt8%2FpyBikJlAyKtwDrJMN45fkTCStr9f1ZD%2F4T8vCQL4ddzlpOI%2BOPmWPe%2FgUsrQiKpXbUoiMrswj%2FDpzDlSv3kVi48fiFFdIEJDUQvEH3RipCn%2BKSXBevW0rxDjtM08qAlH06ii61jMh0ldQsERrudATjePtinJuzwl9j27CedOqD2kO%2BmOqpiE3fUYoJtvK%2FHosMax2hXGJdxHOshiiiLf0NniRyrvVjMEuA0nHiiPk9rmrsHgux26Tgsr1pwoeooVBXq%2FZR0KOuI3SfVBqykCHpOsIRRcdY509IemBg5iAXhDI0WPTtvjORGpA6iSsUyhIjD%2FuPZ0no4Ry4YBpnOmjngVTEtjtZGZXU8B%2BvCtANsJ8x65ETDt%2FVjnhUzXU1IP%2BXaP2tSi%2FQ%2FfAkmXytojGpuHnoJAd48eoze%2BVMrVQ4bbqwXC6tm1Wq24or3q5ap3qP5Buih6Wkb8vLubyZ8%2FuYBaUVIhLL9bFgVefaIVvKi51yfZyq%2FUtKXRz5R%2Bg%2FH10bcED0F7%2FSodk8bOhExhiEXCmasIW6pl2vDBPWuE1CUazSMzWulC8PngaTjKJmDBz206Fq8JGpUqfRctSarPFswOV4X%2BVqN15PA%2FGgVl6TdobAyTe8MBlXriFZh1dw7Jf%2FCvjFXswjOPXvgY6pgFCJW8BMrGUHT3IPpHu2d%2B4Qp4jGd7HQdpQZc8ifke9tPD69%2B1ySfzx2kbiVqvhZfangShOUksDMiEoWkpboX0tBfCwmTpDNkbKkGOmUOIixA70y34xToC8RU26f%2FpQuoPPCmQ4xbCt%2BBIb5wSggzcyqXqX9Dn%2BxXpNVsk13gjvopuNPecBuFxg1pQ3OSwAoW%2FstQ5hjaI56FiAPXoRxTyuBKfTb%2F4r&X-Amz-Signature=db51a3d0f4e838680e924090aaa57c67459c7120f1c4776219c4bdbd4567829f&X-Amz-SignedHeaders=host&x-id=GetObject)

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
