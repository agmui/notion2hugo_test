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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QCYHM3VP%2F20250507%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250507T050917Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDywxGB6iuuj1u7tWWg3vqpuGAE3%2BhRqSMQYhBUT9eiaAiEAuDYUwmu2N4NxXtKz0%2FFKyD9L30b%2FrrowE1%2Fzbhk7mpoq%2FwMIVBAAGgw2Mzc0MjMxODM4MDUiDM7Mnxv%2FHnPWLvIvqSrcA2Kcjl5z91WORb8iliELZSFLE65sde0y3T53e39U2uFwmIk%2BC8t7elA6MpZ48YQcv6XAqRVyEsFLkGFXeTvxKn9SdBQudvuRFNM7fg%2FVCnMwwpQDPUSuEnYcD9Z99W1Pxy6Y%2Bmzcl%2FqKdxbD%2Bwl7nHUGTFJyHzc8N45RDAa4VxDtbmhkSXAelap6%2F6Pij8aOhDSPBo9lREkWuEBoOA3LaDjg%2B9E%2BeJxJ1181idIZ30nRLLjsb3Zek8OtptnyZ2%2FXk3rMYhO%2BITU%2BfBAtob7EVsOD5yDjLceZSSL5AZfP9RciyUu1%2FGlQOheBdAQ3597s0kdO4%2BBdQyKMcNA3pNyIQMngTpJuKDs5B0%2F8A88F5AfEE1c2jbsxFzwOJXy3eE3I2Fwm0wu0JZFBgYE8lfiHfTxj4EM1%2F3dSUeNpQf%2Fo6N2Fbbl1SjQYXqI47otTqBd7NWC8l292GMpODmuGrxJiR62a6WMiujAqodXFFFXGcUnpcOxIs7xR%2BkiboUYuIppHpAqUT5vMDNA1aVzNWyd8zOhZ%2FmOHE5Bx7mkhVl%2B49eiHCp5zi4Hs%2B%2FMS%2BcHJk3yrQqez5tsM7NgncsN%2BbTBvEP21A1gqyBewPuyeIl2g%2B%2FAQsaa4eMQsV8l8Cp%2B2MMGR68AGOqUBtUdykv2nNBO7h%2F2wccLV0DMfacHOlDlraDo8kYmuPdS2d1Axoxjyn379UzoCMpsBNIhfft%2FKa%2FFwviGKRSRnXzHI4fhjdPFBg3pHFeXgkoIFTO3gpr0p9Hw0y1eWHDyVOJvfhSM8ekAjCHf85vDsu9Ix59wA%2Fsks1WF6QOYPjvgwb86M5469ect5EqXGrmzVhJUj5tZ3KwTxiE%2BnivixNw4Vb%2BSZ&X-Amz-Signature=d6097805b80e032836023e30c096f79d66b19bcff358ae83c33ba55963dbe623&X-Amz-SignedHeaders=host&x-id=GetObject)

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
