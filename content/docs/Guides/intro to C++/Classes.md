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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SKGSLEJJ%2F20250314%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250314T160920Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC2kHwPSUDMsHCAi8S5%2BL53xnCjBELUD3ZmaJoOP6iTVgIhAKz662jo7yd4DkmrHHqWsSO28umpW6zzstMuC34IVydXKogECPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzyC%2FSDfwxNtHJ3PQwq3AOLhFJazLuz6L4cE08horrkKSzMpzhGf3T9EWQxiO9uBAvlsTVqQR7gGRRyqTk5y8sX4F2Ft9gbkR8YfSUGclfCc5MZAzCNJM1IGMPLDXQo6i%2FUbF9AHITq3Q3AQZNeJKTRPBQQH2pWzTRkUUxxK0oUiE2WnIrMe%2FECVqI8FrtU2WuNdBnFjFsg%2BwiqejiQKw2HrilC9SW57BUskTe0ifIXG1HZVKqckYBeKf5xQ3ro8L6RI3tymQtraUSTPXJTU0gxoghPTGiLYZGx4htAFIChalEqrXe7ABkTG8pO%2FZgkBn6JMf5Rj8vu%2Fn6wbE%2FLoJKNTZFqaugqMrq86MCj%2FlbcFYV6uRKwK0JhdwLRkk2NUNyRNC%2BhwscO8jkc8SybV0EKEO47o2LQN8JdA3Jiq2p9xLBq1%2BmC%2FWmdh9BwbewDHXX1DxdpsPHTq%2FjZkNxJ4Sfk2mbxd02EQdUQmaqv007%2BznHo4zMBPKtGsDhtSm9%2FUhtzeXgqU9%2B8pnIo3le80PkVgHmhfFYotZzjiyOpA3c3udkhBpzGatAWGh%2Br3D1s3K5%2Bf5K7wwRHzU5Tfvq%2BnsS5NuLaYYhlB8HCkwq48ApXqCfYCdaufWDeYLhgrqTpED9g9UUoDLJ%2F5DIw0DCtotG%2BBjqkATadi6ls1zhrWN5J0GDAAVRsflwQgOR7DtZUh3Xc%2FK%2BApeRfmEDeyFz43GuTnl%2BOTE3F4cOLBrfRujZGRDO%2Fy4bRzH4kc9Xu4UkroG%2F9WnPeN8P6NuSGaXoBG2fCyiv1ZFVOYAFT2pn3BX2oo1MRQIEagyEHaH8xveZnvIAzWRHSBdFZ1n0ibq2PuTbG8V4VBAPsnuqwwoXgvukD5qhGcRVije4N&X-Amz-Signature=d42f7bf93c2855301a4ce4cf57157789ff98bd28affd2d9a590dde6b44b37dd0&X-Amz-SignedHeaders=host&x-id=GetObject)

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
