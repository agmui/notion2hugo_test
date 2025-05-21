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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S5MWK3U6%2F20250521%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250521T033521Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDydrq%2BuSsm6x%2FSg1H%2Fk71QcDC8KsVYIdvQ9%2FkzsvtejAIgQkcWy4EeijTUF%2BgGMWXglDU3ZJWMDv%2Bx9gQLy0Q7LhAqiAQItf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKyyA6PPERGiTxvv7CrcA2PY4RvsV1UkNU2qaQQLaz%2FbHCMGXJsFsWhCdS3yvvpdpyypUX0RRFvwHew5p9f5HumdByXh%2BY%2Fxkig9AKWXmlWBLs6lTcbMqgz02lQvob%2Fh2z83p%2FQ7NsaWfblWuh1XFhaHM%2BGilyrH9jTINAiPxc51h05TK1jxx1Qg5K6TtK650347w%2BdbArm%2FNXEMl6Ag6Xp7aKYoJGKMKyFqqAqN9h%2Bvpj0JWDETCsQb0RSLhUYoFuhUZjAmreXi95AI%2FnQYUch%2BkKvQO5M8FjEkmyhRGgrn9MT6jmHyUvf5ptsQkiejesUZ8CJ%2BfL8D2%2FQAPaG%2BRFG%2FepYSTVHCmqzP2K4WE%2BG3x3LC84F7SdCJVt6iQp5t95scrWhkD2qrYrgFlzFzu%2FPDQn7q0X6oRjWEyynqKci6yqArjLD%2BiOR7m5K82iNpu8sCmoYEUQEiKEpJKzZ6aD5iVZgObMiRZaxVzHUE%2FZuK7OyQiyM1k1JdQxM4SKHVCwiJDyVt6t63Vo%2BxY8hU%2Bo9KzLOCI41KA9P5Cw8F1v2XjQpsxdKdwYXLizbab8WSKUs7A9E%2FERYpAQ3zpky%2FVPInmTEbNQPZTk%2BG4Obu5RNuHNybT4%2FZpLtWH1ZLkXWUpicHZBDevC0iKOp3MLOQtcEGOqUBqWbtf%2FbdmRN3DPf2ZGRW5vpYauggcIiNcdm6owYUW%2BwEkPUcduDoG9XnEhHyUWKuSRAY%2BiMFmcmGEyKz2cdXoT19r%2FyvVRuws%2Fq8Lvl2aeEk8Nxj4T07Fkd07OclAML2ZPjS7GYki%2Bo3CXswfPg1XQ3KxQVvN5ewUEv2RIWxBjH1x69VhzdzkiDlXSV%2FtvWnkOsVn5fYhThBC6zlEN2U6kUE66ce&X-Amz-Signature=ed24c795da20788f4501e4831a53647d25985469aa7c1335776435fb135f2b52&X-Amz-SignedHeaders=host&x-id=GetObject)

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
