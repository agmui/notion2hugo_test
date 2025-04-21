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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667XFQ5X2Y%2F20250421%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250421T090935Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJHMEUCIGl5uCH9%2F7GMztcFd7ynFcvYT%2B5KHFjmTyHUxKZQouwmAiEA%2BWsP%2B5LFO6ct2JjBsWPFnPUNvu1ozRrBhAXauqELN88qiAQIuv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJtuDwdJpj2QFSyWgircAzZwpDM4kitl5QGRbU4D6j0XLBvUBiFtGs795fmi183qwKO%2FhzzrS4s3J3xir1LCB%2BdLXLCyKwafHklWBue5eacqSFD4k3RaOAx%2F5hHtvHtBC38l3FOyHQ4KjHXaolTgpkUBihY6N75RpzuEGwrsToQqhCfkeZLbNGBOqrZoPNhD6iZQviPb3062eEMahdz4SVegoogJz5wK%2BMHiH1tQowKVmLN9%2Bz26P0rLqJkvtsyxDyHr2YjzRTGcOXQhdRDKWni4fHyJGToHDNoNa10AgtnS1ssaw%2F8UWKJGsSm2VfPajnX84o97sO9bwHxeevaUU2ulIMJTgIVHzy4wMhgkA5LgkOa1VSfG0J%2By0tSe%2Bxyf5f8LS3p8tTKPp9rJrGQ74y9Ctc13U%2BdNV6WZNXeUVeRduXCvWldnScHRRz%2Bj4VWlbHXPEoohohsc1O5QSdaQx2AsKGB7nJQLL4EQsdnfxGK4ZzJKjySyWATuBc2hL3IZyWhe%2Bg%2FrO2GeqZtI%2BmiIqMwkM1mq2cT0nfRV0fHS%2F7c3XRQS0cPpfqr97Lu1tnVDGIrSlrqdqap1UjtUQLiz54NsHRGM3j9APEdS2IrdOFPNAObzYR%2B4MvhLk%2B7yMH1TLAXl0ouYDlHHKOX4MKiJmMAGOqUBhqMwdEnYYYFVMnOOMoqLyDBIE2Ywj9lUP1BHC21arHU%2FPJ32e9Bcet%2BN0sdwaZIEJh9iI%2FT%2B4yZt6jLfUyL2sf02TxmflzcEg%2Bg0PVTuN59JwXZ4ByybYZt4hM7dovnfxVU9ESeXT2XzMX9ynDgXaEgNWp4xTrafvBY%2FJUf%2BONOPvWteWRF7JQZ6X%2BJemQbluQ2%2BePFci2Cy0jGUyvpR1HnShaR8&X-Amz-Signature=c3eebd9b721d8411f3af7745e64e176dbf9b31638a4d2095be6d55bdf8face94&X-Amz-SignedHeaders=host&x-id=GetObject)

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
