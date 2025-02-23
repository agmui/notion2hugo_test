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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663E5FLZZR%2F20250223%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250223T140149Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDijMeoEKxl2XykNppGa7BzWw6Ej02sqZrSEVKLFtIHVAiEAmDaxQZzuMGYGuNRIgYdhpuriA9eHS11sG4z6gNNZUasq%2FwMIFBAAGgw2Mzc0MjMxODM4MDUiDC5rdX2DpWu6WP2IJSrcA5So%2FERfKCMw2LnkdSwHKVEpPSFj1Ui7lpO3xgHxatAoFtnbjHogX%2FKuGA0zDn9dLbS0lnpl%2B6w3XL%2FZS5%2BTH%2F3VSRMY92BkrGr7EIM485q3GG5f3LQx0pIZf62aNECEKnlKa%2F3n5Dxvj4hkFdddnISjiUam2vlsTOuIrKPqpBfGfZnfTcVcLBvR59EDCuAyxW3sxKBtuoc%2BLRPWZj6zkXM%2F3Oay4lRd45H0FpfhbBpvXVOjh4PRndeGs2mDeXiOkJCRJ1vcy3hSAX2j%2BCZf7WtSQQ%2FTAgMqUXBFxJz6eGG%2Bv%2BFzRIOSidlVjtDZPIU8crb4cXExNN7MgzULkBsECo027NCVAV4pvuEaTNOE3aPLTUN7i1DBiUk7No5XmgVOtGO1pkNi4jqpJiHcW48QPoWFlVr8QCigmOYPbOLItI85x%2FlSjtk7YWhtxFx5wucDf7zJirpShyt%2FOt4P%2F34jKcWfXXMOm59zXSaBQeCiGz10g%2F7dDU4VYafHAfKQBBvVdLgjy%2F1E91VKaTSG13vWBtR5JCrz3T7O8Vsv1LuDn7GzZJP%2BLGla0Pu0h6s6w37MwsGj3iDApIzSE0U9FYWj7OvAIzr00P1SNfouAOnzgy1hk%2FuvTp4ql7XFSBFgMNiG7L0GOqUBV83%2FNCsB0oLu6buOsv3SvPiBuHOlV4PHNydIORLlmcj3e%2BFvaYGkVT2nWlUF8ApRE3CEROZp3k5Bbwks7DVm1EB7Wbh%2B9EKA83gm28p%2BvZdt5kVttzluRjPdRtBzTU3rN29APhEsy4J8jBhBY8FFDuB%2BWWjDmpQPbflHUglKIPb3XukOkuWWbppF85ylFi4WEw5LN5j3ol%2ByWjWVodkv5eKOnOvk&X-Amz-Signature=2278eee9208648217517448f17fa99d0196b38342a0b7919e2cb801a5be97f52&X-Amz-SignedHeaders=host&x-id=GetObject)

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
