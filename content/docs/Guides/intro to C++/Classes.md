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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664XP4NACC%2F20250531%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250531T070758Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBHBk0RjpLo3oSSpK%2B6rCxTRqDqHrV%2B9OvJ5f%2FHTwiQLAiEAkvEdltdZgSaMGCnDxa67umxmhVZh%2B4MMzFj7gwQSK0cqiAQIt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDG8umuQB5gOEjpchfyrcA67fvcldC4I%2FK4XELnROSyGLWDfrTSHAdFsObTD6scncJMGyWD7%2F2dPj0XNS6JEqSAjXAeupixgBDDvzMK%2Fxvj1smGCfxyhgYAKkHW%2BJd152ozB%2FCjVlW%2FAoO2pXn3H95d%2BgrDFI5RIqWMW9ZcWo%2BjyuMmVN5sTVTyrNGHJlUFoQhYAPIQBrfodAr7Ye6xAcC4%2BRfb3lnWL2xIaJYWffVvuxZvN4GwiyFMBY%2B0Oa51iH0%2BPaDKV9u944Yy4fJrdthCC%2B8iZw%2Ff7NWq78DwBR18NfeglCCSdlXfL6f9%2Bgj8MXZn1uCdaG2b11A28YXlSu9QiBe%2BG4o2ktE50BmZh1D1kYcYjlz%2FkAKM9S%2Fi2ZTNp0qP%2FO8TCtbD7Wf0ERIPjP7fRNQ9w8Mxve9WF%2BxlgcaX%2FxSeohTVtJTcAsRp%2FNAryAPLcf68QcO5L5eWNMRI3tUe422go3U%2FZz4czBuqe4rnQWWriRhxGm5QdIAuOEG4D9ieKnTRX9rEC3tHBnyCbTX1ubpw28Ne2FcdxRjijCOlfpZKENG7Hi7dDJloW2ZvchrbhLSFD9UnWlRMEFnvJzIlEnyX%2FA18yiqXPvetqwZcoHl%2BYRdz%2FctMAamxXJ3P9N2IYADycUDP%2BXTyoQMKyz6sEGOqUBumz0efhQO6y%2FVOi4Eom1NcciAWVvHI9s7%2BcwifY2UFo0gazBnpON2ldu6dDABVnbRQXUFBtdCvrychRc%2B4j89ZapYXRW5urWaTRI1%2Bjm1zzEiBd2Gojt59bXtvbp0tN%2FVPYiF7kuUaiTrzSgltSvpH4d2OYH%2Fv2Y6etNrWxvIT9gUgCpK%2F4eY%2FgMLBUH1pt73QshIQNsxf73qoZejWPiUx1wlKxS&X-Amz-Signature=e7953938a5e60bb3d75f7d68bc71d5434119b86b0d3e04d14c28d9bb2d9f39c4&X-Amz-SignedHeaders=host&x-id=GetObject)

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
