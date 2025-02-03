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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XQEFVLEO%2F20250203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250203T050811Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFENwTyhP0keUooaS2zoI16RkcI5Ye7hK66ztYMXk6y%2FAiEA50JhDKpwd9D5RY1FdPfNTz2WP3GoAgHMQmiMWpHBaIMqiAQI%2B%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIL2QrIILvvRIf%2FTrircAxDE8kooVU2dtSeCJ3wk5elEYWeoPP03%2Fn4F5ws%2B9AtD4HIDhktlPQvNuIbEncHgA9eJ4g5vTUPiwPjX4eRj1jKl0GWeJZAyKgxc7hPIAf50T0FgrVSdDz%2FsFw9C7TmhsnqaMb1X3rHruhBw16cY2go5%2F8yTWHcDMMWUKHji6ZpD428E1qrr5IPRI3F96jnfst3szeDh7YrS1uSNMikTIG8PiF%2BdrctMPVsYgRgD9CRQrphXRwu4zEhuEcL424TBBZn0tHdjLAlGfU726pdG2FhWIIIXoQ0ddaWUj9gSBLDDOxVfrykLsPACFly8j%2FnA0IK8E%2B6mv6fLwXsKFXQ4mwfg8AuJ%2B6zabyDddYvVnjMSm51Brur8P6rfcL1QkkgQVMFkt9sJKeu3tGM2yPYqTItWimU4LHstDLjXPf21ReKwYEoJRpofAprFkZjyU71B5iuy2FVXsIKGPrC6zI%2FuvCGx2WLerDrr3WTI1pMqQV2AP7UL1LjKZMUQ8AVHpcE9w8hMbOcJ3aWuhVmkqhC7EP18wlrKZwDs8PFZZ%2Bfa%2FW%2BOl7WsqA%2Bh%2BkPyprY0IlANM6djmHtUkbkIKPMD51JMTpJ9gfJhqpMX34h4RN%2FlnOYC0CJKmcyDHFXA9x3mMIvBgL0GOqUBULlaZxMLmAo3O0C9PyWpwjmoSGMszOu4a3Vfx3dYUC73R2u6VIMvkhOMhznbalH3aBHClpynuNcF7nTBB0uuklAdFZvsyjOj3EdBGG9YvX1FyyGByGLL8K52XscbmrynsxPNPjbVLxQls9jrwcdmXhoCPlezMb%2FS%2B36a9cy%2FWf5wJfvVauKeLL8cuEKEbHKNzdzPLd54riQY7KH9JZ7U0yb1lxG4&X-Amz-Signature=826a8c6cdbfe491f261bcca48194f095481f374343eadcc06bc05955bfcada36&X-Amz-SignedHeaders=host&x-id=GetObject)

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
