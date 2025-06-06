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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VZXFT2I6%2F20250606%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250606T220815Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDyslgmjdOA7eUzkpZm11zFM8in7pMsw0uEYPEfz3u65gIgT585HLLZvRGCbpHyYrIQG9XKLk%2By4dEPYHeS8TxFy%2Bwq%2FwMIZRAAGgw2Mzc0MjMxODM4MDUiDJoMP2Lojv2BN88dLCrcA7Pbj1JzGPBovs49ry6sJxwR8fz%2F9mS7NKC9zhStgQ%2FVSUuEPF1WaTaA%2FvHeggedaouAKg6U1wIhGFjoFrJ6G09WIv5F3TjIooI6C%2Bao0CSV2dIcYJxTTf%2Fr%2B9reBS3%2FxSKQVV9736jHrTYej7Achzd%2FROLTVEv%2FoZ6Pk1wihXXD%2BN3QkpyyqBvpdkPARkzp80TiUKyKaOIue4ChSyISWVSCLOgAz90a0367rKHuQQn8g8tiwt3C06QRqRE2awXUf62kUKoIHpfm3VGebK55UWUQoFy1I24lIKgzt2MSo5Sz%2Fj6KNHBrfQS40syDW%2FOQykFB24V%2FYzZdWdK1Dj83v52Iwre5ZN4Onq3h1MR6mqilLCFrnfodaikLbkgWI3wbSO37Z3Dasa%2BHKRgawy2FYYYjaxjHZQHFCLTPjaTNVBOch3nuhNpzyrFZN8j%2BRYS5emdCdiigmsES6NVJRGJbhg4qOLjNdmxWEwedrXKcLEtfL2PokVkqiNXRn5aETT0dX1R2euU3GalWNOycZVKhhQ27%2Fq%2B9jV%2Bajb2RlWYWN19E4y547ifb7Pb7Ey6KRBQdIRBUJJU1jVBngWCJJUWNUdsbf%2BTl2hGa%2FaLlmMTXRixTttel%2BQVe5Fu0n4v6MMiRjcIGOqUBPzu1H5LdlLAyafTzln7u4i9Ik8jPUDaM6X9XHpR7z0oxCHkrncyqjqDUi%2FR6v21ov7kZ5vrUloS9uDetCujjc1K%2FxlWudPs%2BM0F2bxCMppTuiuc4Xq%2BPo1pHVgqXV9FJLGiZ5ujoRTC6Res4DmTWPDwqcQ7myeQdcoOSfJ3JJguFRdwZOeeKO99T4varKWk0G17rtHQuJOUzOrmnRjXOQd%2Bo9NHn&X-Amz-Signature=8add3f18d22d9a7696e4e75d7ef6bfec46eb0ea545dc1fce87cce2fe54a8ed12&X-Amz-SignedHeaders=host&x-id=GetObject)

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
