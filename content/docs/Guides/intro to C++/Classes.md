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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QZA5OQ5I%2F20250412%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250412T131428Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF0aCXVzLXdlc3QtMiJGMEQCIFbjRCTDaQhRl6ZiIFUpwXpDKyWuwYF0M%2FMUna%2Bh%2FyeMAiBcFGT27Bvc%2Ff31iHQq%2FBP86ox3gg5vcd4tvvdvAQpANSqIBAjW%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMslRDLjPLewLKbaSSKtwDfQN%2F25vokE1JomQmZnIRQ2N%2FYa6pFeRZYiUp%2FoL1oQ7XmQ5jF3gTRfAdCdpn%2FZX%2BGnBpFkuWVPWUtGAGGABthvc1P2b9kbIMjkeQ4iUpdZVCEZba7Dam%2Fsxj0S%2F%2BWnveqq59J%2FsNWVBNHlPNZSSLVkVFxE4u%2F7wW8JAl2BxfcZYLg9izHLB8kp3ZTgrBjzEXSHzPfrNjva9FfBO6IDXpChHkFfIuvYFhnBvySuE9DqwGoUwnWCaYu%2F2556sn1OxkhTHio9XHb3JJBsQzM%2F56HzVDoqE6X3um4ekwbVxTCPm8pWHvL3yEpK1%2BiVU8U3IVTcztKs%2Bmtrak52U266P8HbCkGzDAZvcGR0IoK9wD42qV0uCC3U4huc9Q9o6VDgzz7qzhMx%2B0RXjWbh1%2FOdlkFS%2BAATnzWZkfrQ8tiKk9dqUgcfCEM2n%2BJZeZ0Coss7Hrw8fPCb%2FELo3eroNtk1fVa2oPSdDG2Wij2Om7S0MfHuQgg83DCHltrUiQI7pCFhm1LgJNVii4KhpEUqSu0cLLlxJ34o%2B91YdFncdOnhwpv7eRPLckBKD%2BaqlVHbV%2BD4gBDg46St1IqOwxebS43PD7tSPW1FHTg8%2B3L4Zqp0vJV2y0qhJ6DYrnMwmqekww5sjpvwY6pgGpj95QrBkW1rZcQLNIpbLN8tJ6UsMk7IVwhB5BmGxADmtlOA38SfyxmxMnY2Uiz%2FBnc52xYe77LIZ1SMmOOaPiEQjkknBReq0TmfvxQ0TWlqK0gaLosji5YLzCO6ciOOo1CNDWQXK3%2FfJSVobbOZL%2Fa21w1VRNHWp%2Bwx9uvVoLtJvP0L6e6eiBFbzKF0evRzVFrejZeDqaIk07MRjbDNRIup2tqW86&X-Amz-Signature=c46dfc2a0d93b7734c79e815deab899df1f9687d23f33afb1123447b9384edcd&X-Amz-SignedHeaders=host&x-id=GetObject)

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
