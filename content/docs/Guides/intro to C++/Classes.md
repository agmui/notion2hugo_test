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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UVLZVIS6%2F20250629%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250629T170720Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHgS0%2FPcvTMgUpSvfqqLMfcZnxdPiWEpfovG5tqpTBs8AiEA5rtRO1wN4G%2Bsq3ArwDINpg%2F7oBKWHtmWQWu2A7WuhIIqiAQIqv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDK5ePrTADdtONALqLCrcA0dCOy1vJdAVh%2B0eodJ3QxDHquUrtPWt5fqBJfLLO22rUgm1AD2Ez%2BG9%2FjHn9NspkhnlkUhszzhKfT5oy%2FkHCUqqXC6wAh6ZQxEyVegm2vLMm3twVO41HV61%2F6V40hVLD4IEItll2hTFVo0G%2BFaeRdZ%2FTs4XDIO2eOidFfJQDC%2BRVkkOIy2pSIxeLyEKuQN5u5wf5HKCPK7lLtHhMQ%2B%2Fgd62pfzzvcPfsqQM4dk1Lha0wtVobWEUyllczb3Ey5wCYJKz%2BERw5ulcgPLZlH1fwBXcj1ZhkfDX8Nyd%2BuUqGjDocVWgZU7lnYkKijGTXP1JZvkEv4WtAtKMNPHyqVK9Bx52ki64ztGVE21HJq3y6L5dfgqaxZGoPx9AmbFv%2BgpflRhd4yzCDAah2BVx1kCIdqeWM8LOkEU%2B9r0w%2F3yXMd8VZcTRcimmNn5zTb6m1e3hLmyDNtA19GI7FeFOMVlGu5XBjiskQIp5hK0quSq91W83H%2FAurYPm8mo49yji1rxMpA9D0cVKjXg6%2Bbb7tt3dGpCP36%2BIXu1zitAWrbSbSBPcR8mUc%2F9TExxnDkPgjtT%2FVlOaAT1Fl78cfVoWa1pkcMgIiDygvWCLiudCrP6r8MQPME1uwWryVO5Hnte5MOzZhcMGOqUBqIRAVGLhDX4Lw5Lw16NKZi8apQx8rsPRVYm%2Fvjs8Xj70DdFnkoc3KPtnrygbLFVCQQyvBhQUPeG%2Fsvc1Jg6Ol%2Bz7NS6hWRfTGWjs0OmV1tL%2FJ9hs%2Ff2GKjU87B%2Be0uz52iMOCXpuJBmW6xtJqX%2FiKV7Es%2BS379ePcG6GlpVlPNEJQXPx5JtpAda%2BV4UTnQe9sR6W4xbOXKP9bwn9OuOqD8ccmB%2Fo&X-Amz-Signature=1ebf6bc49c988414a4f0ce2d995804781827d0cfd8df03e2213582c3a44fe648&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
