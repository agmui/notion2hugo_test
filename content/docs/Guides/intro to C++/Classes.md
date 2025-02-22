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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YIAOJFNV%2F20250222%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250222T050707Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDyIMP9IndEPoc9iZGJEqooY1gNMBYR2IbtK35OBdhGQQIgdmsFSFqnSPRyMsSdgcj2sUt2iznJxnoO6j7uo8TPnZIqiAQI5v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGWt0C4O2woE8%2FK1VyrcA9xZyMiIv9Mztnt40n%2Fgv0sSBVQXtO%2BqRMUoG33V02DLhb1Rl8MpCY9CNfF52dYjcr03uakC8ylY%2F2Camnj7lM4THesn6HItBl5oVUlAPNddSSc99j9%2BLA2VCRazlRHvW6KxD%2F0ndctI2BTmBApKd%2BTh0NvQMK0rKEFQzGQ7aJmHGupERIuLdrqP4VwgMcI7cTcmB17SglVDxljZjBtmirOa4ZHfquJQtFUHPWwxFALWdoNtfuEDjt3jlVv%2FPfDR%2BZIQxwSCOQoBRGr4gAVNOwMfq9H7WQtONq8kZDrsKvLBlMtCjLaqT216dVjfvjEV6CVPPwLu5S4S5kgoHMr12aYzfLGr3Ki5mFViprcAKUrM02R3wRQ74o681DlA4XUlAA%2FjNkE1EyTBbL3w6nI5Ydr%2FG5WBkml9V0hdAULsF1GarN1ehx3KRnvKrhZ8bLKKgbxnf%2FEJZzdfvbmGomE3WBDGARK%2FtxaIxysu8vRvqmcs8xH1qqJPzR%2BLfuvclKIdx5SwBxlbmdUkNKVmFZsQzb1CaiyEWWC2l7z96PiPu%2FZmkVsGqAjm0qMb%2FvZEqoJVdla3dVwlKzc6OprSNNs%2Fk0zF%2BnS4jAWsmRGRkRR5SNwnjmhonoSUKi3imTp%2BMK%2Bq5b0GOqUBEhKiSQLvys8dYCvVoCvfasatSyHjes7cVL1Y1I2eYxctjpPLAoexJu6s33TjFdzimZjzdhk%2F0h2ZHHGm%2Fds7KAjIjoqZxFPe48Xt2YpDZGWq%2Bpd%2Bg%2FoT9R2X0eEssrnCM9yhE3%2F8lGhlYlfKuDjATSnoHJ6MR0mYBlJ3IU%2Bk%2Bze%2FsgEWbo405exO%2B0sip3y2XoMhAisM4NEkfbUX%2B8R3trVNrkzj&X-Amz-Signature=6d1bfbeb00828638e3ca784b3933dc0ef77b41354478148ecf5251fcd6f15790&X-Amz-SignedHeaders=host&x-id=GetObject)

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
