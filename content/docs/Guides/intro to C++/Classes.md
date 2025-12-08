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
  <summary>{{< markdownify >}}What is `~Milk()` ?{{< /markdownify >}}</summary>
  
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666OQ3BVUN%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T014241Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD7zy1GXfHSUJ3cuxEHigUPffO4bwkrjCJvPgWoxZJZZwIgZeoRTbxSkBdOdiakcVx2VQ%2BUTUHfXnCIbpYG0PJjBpIqiAQImv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCT8hpNQ%2BpLVOi%2B6oSrcA1N8RLWZ4ZFK156I3JAcwH78v4XWFIMISKrWRJltvA2f%2FtnLXAjdcrgzpl388xFBSr487gOqLmWq%2BGDpj5Z6VxL58JnvIilZgSk%2BvWbWkeG%2F8y1vEQ4B4LWMpTiAGglLM2b29Vv4xi60LCe3z3%2BEJR%2FEU5pJrjOSxlkiv7cZWHgQzcbdgRxqfRdV2JpgeH8X9Y39SUZZPfYFPB7LyHE0nDSNxR6%2BvuTKImtO0oGAHsiArYqDCXij1Dty5nZd1qwQ2Tvn3rluxHjDllJtyal642NbCL%2F%2BN%2B5gd2gPKymmXJGKuAHivzb49tUoiO8oJRcHxqdPuXP2ODU50w%2FZ6WR8iP23se1AfCMUOjxYw0s6mCWRbd2EOe%2FIrds5naBg5vvxnd3kRQZ0%2BsToj5%2FZe9prYcTAGn3dbvWQ0FsnPyxQgLGzlUvnN4JdvzrdEcFi3HkMvy4lY%2B5kioc2RRO566K15wJPNbUmxidSiotJrzvexrd7YroMv%2BF2KfpLvGR%2B3JC9IZzdIxkrzsgYRg3MyeCAfRNcTfs%2FgoU%2FrJyCeVsLdXM33g9QP4HvivMK%2BtG9XHlYPAqQg95f%2F9KT569KdERZBJiuSzvsEIRYQqhQbFdTjcyzSByy10VzJ2xrgbtoMKrR2MkGOqUBM61Fc9vk1m0ZT0%2BHorBPjQHCvnB62jATNcVSbsIq9l%2B8OSf%2Bp%2Bo%2BSx1W2oAhRkAL6Mq8ELLGgWUfAmDLHE8IifDyHrlOOv1OjS7Ltd7y5lE9Yv2WMu0EWif7WwWzR9%2BYotQPx0uRU1Ml9DW3%2Bom3iUjszxAeYS6XzvGskuJ3vD4AjxQ4R5JjtDu3AuCTNXV%2F6h5Bp5IpQnR3%2F0%2BmPRIhM3x%2BKbcG&X-Amz-Signature=1d1d34c73d3b573807f24773ad4f8c01420ddb0552f0677e3aef71548081e36c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
