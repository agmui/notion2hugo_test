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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663Y4VTRC4%2F20250515%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250515T161052Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHgaCXVzLXdlc3QtMiJHMEUCIQC6Gpl%2FtzuSHH3itubwQRpkfLiNMxwly9wpONx06rOjwQIgMEcrZwOX2mB0ncXLLt5fsd4SfV2wEZMH9dgsm8jBKggq%2FwMIMRAAGgw2Mzc0MjMxODM4MDUiDMaJIfJ47i3bahH8USrcAywOTEyPK2L3PwG4aO0HZhNHzGEvhZgqWomn2MXcAYODiE246iTfGBazyjX2ilUCWAMu1ALxEBrC%2FtNVawSeDIdKwvPEaFutwbmP7fo7mohSY5sZ8xaAOoXpsKVbaJ1CXFS5VXdtDv%2BzZiXPVLK875I2L8ymNm6jhFMc4uU%2BY%2Bv80G2XxJ7Y1YNSzGn8p6qhg6Vy9p%2B7lm5jMjBKiAKylFhud%2F7qSsn0jeNxbF9pMoSRMJhXeZ%2F3wMkMGY%2B%2Bog1Plf%2FYoDGwV0f8QuTWQCAOol8qzvXoyYGImGE4h50b44VWaaHoY%2Fm0K1Ewg3B0sX8PJMxUP8QNnsJmUGDz2V9wjxNU6cg3jgwcobkgs%2Fe%2BWti4h%2B0J%2FFajvToahUKKd9owPP6IbfpK7ABd8BeTb79LCiQaVyaqCV2zccTBEwJM6Gj1aN5xJOxHsfzv71ICJVGmzvrF0e4qiye3%2Fq%2FWcpAxUpjF%2BHuoopbHrr5rkwLGe%2BJwAD2SYHCOBb59%2BRUKweSatwikIckGD3enz53Dr8s9HoIIsLusCrZjbWsh5nSWevJ7XJRHYuUj5JiyECU0uaCccSoArOoDJzyZxPBRAlqe6N9E3Ruh7mOvmU7jPpJz2qxmFdwfuBhbviXHFb%2BsMPaRmMEGOqUBz4HMVwSrERg5veO8ZvgmYDG5rcY7%2BgJR%2BkZDLOgSmX9PLqVqTVXwPqQIKQm3ddhJBPMsSGMpk6oVEbGmZusoE4iVHVGk%2BQt0QaUS38fa4aaPOHjueHCRasYI6iJkmnf6DGF4ZHNL8b5ziEPTCpDo3GLHUlJYKIg%2FAr%2B%2BhflFU2GA2G%2BUuKFnYUdWE%2F6dnRFFj9qYg8L3MaFUNko1UyBJet%2B3KJL7&X-Amz-Signature=a9ba10d3252efb5de484137e93c51990b582accec7e7e913640d0c9ee357e495&X-Amz-SignedHeaders=host&x-id=GetObject)

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
