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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WTXAAT57%2F20250612%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250612T110738Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBMaCXVzLXdlc3QtMiJHMEUCIA%2FufK1ZG%2FiE2LaJw8a0g0WbLz%2BtBCWoqkT6dFqgY4iuAiEA31IkuHyDcsRpCixI9ZsOp0e27ir%2B62CqnGKK%2F7qa12QqiAQI6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFKW6cpGh8iq3zz83ircA8ryNPvh%2FUGgRFUcTfLlZVP85EITNLt7M6HxpmkDUvVtxq%2Fh3Fb%2BHB62l2Hv%2BZHCZrTb0j2ZeWFd1pVnf9i7iKOyo0Vun2ioc4VEpI0v%2BmzYsibVe1B0hHssSzxg8EKMlIt1Qi77PbjySWzYH0TI8%2FImmaetNve2BqW3eHhZVaI9%2BsPm2zU88amMntfTu3GVGlJofNYo3pfBT56VhkMahKSad0WKdBx830%2BlzRAwLDq%2FMkSsaw0Fj0tsEz2Qy1p8148maB99nxbyOVqJyn%2FFTc6i3kYEE89xBDunV4Av3MXNxqPFSMV3THHedPaihkiJStWeCY21sx7aIADz9sNY2%2F2OnIPT69hKxv2h5J8ld9Kqa8SEdtuGSaAoiuR5UnkQICZVcUagx6eTM44FBKauUi1BwG04R1eBqAFMHjK4PleRMmx%2Bnm%2B7GLNJ5N1WcymIK8XDcWRKwVRS63lkqNIyLEMsD8ad7kro%2FNJMgnTNYHisFiymDx%2FoD3JMI%2FDPycrus1SN1NmIwn18PV1qYXKCV7GSbyO5ewUHf%2BrAhYrwLBivLMlL5p%2BG3yHr2T8WmhHyOw2qRldSc9Bt7FfJoJFmArXEzqaQEucf59IJHuEKKQxdEsR%2Bi9CTQrUkVl6LMILWqsIGOqUBGzvW%2BEIcwknqM2Q8zGPRw1rvj30hOpBlL5bVYOI5TPMf5hq7RIogymv3H9K5W5ZuLvX0%2BP34pLt2lr7xdcue6zrgx0ybymFG7qGTzsdUjRtrpwtF%2FxvaLRrLiu%2BjwZ0UUk00gW%2B4K1JKb0XCoK411irfRd9SInG%2FfCBDctENnIKA5ICvf2mEneYVMmdW9HKuWt12gaIeraxcAf4pxU7WT4gGHAvh&X-Amz-Signature=b8f36b5c4843cdc8d5eb933a4e1e78c4359f6cd697190e265a165f6dcf26fbb5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
