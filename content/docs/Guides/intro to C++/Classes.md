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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662PYIMJ5Z%2F20250620%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250620T200932Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCSjmRgysZgrtONJ%2FJWafYNu1V3C0Nml4Rsn%2F9g5uQd4AIhAMmE2eEnS3V9LzdV08mC%2Fxm%2BaYqXo1%2B3%2F34hxwb4KNRrKogECMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxPNdNHlb4A%2B1bf0ooq3AM%2FYZJPNXplyuPoVvipTB3vQWzqFdp9lCs5KauIlUH40lJPK3zp9eYoUifccCUGg%2Fm%2FZWyT7G0FROcfHXN2n91lVGCTjHI0kPtJSoTcJTctBLyP3fDmRUS1lQC537setx0eCxTyV%2FSHOnif%2FkOaGJPxmJPIDpbozwygr8CYEtLDG1wku%2F%2Bdaf8V4bYwNXlFfjhj1C%2BOfssQ1HDMpoRgbd0yCTy5CVUrp5V0PD7nWfNF54si8OtMcNDsawPPM%2B%2BLQ%2BBRRegDgw0CgpEuJJCmn9y13yOAlE3WtnjmIrALuAXhApoTUQwwxHE4j%2FPsUuQqwMJBbCBIn1IB9wzONP07%2FlweIRIGwVSubK5o%2BuLnltGahdx1rDLr%2Bzf5alzrZaagtkbKB2mbjyDU9LG2N%2BWXgaeQ864xzdEL%2BtWVJClc%2FvkPDFhsuNz9nlN%2F8dtnGjHd9gN4NFv5qkwEuJ37KOiPNC5xWeVdRexJKUF3lOqGmIRi91UwrHfWix8ThDOBLyDhtmc2Bz2ecSRt9n7AAI8Jlju5nXr8920AQMWNHSBW4NtV3qOEJb13yuJaN8pxtpMD55Ou4UVNs9QIpVoOkpvlrGx1%2BkhVLlcc%2BYosJ8AEijPWyng2uVsbHf4HV2hS6jC7stbCBjqkAXQp1qZUCO%2FPZeZvXvM%2FPlAkRtOMLWlCBTnjBIQeXcTxwlJu2LNm9QRA85HtWAzR7Isb40ff%2F3w2h0nZxQprnMQ8MXbhEICouWhdBtPqia93yDiry2dO13sa39d%2FGUcOYZazfppmbbEE1EG98WsrgEMGvqOMoBhUthwZqhRMSc4yD2t93lA9Z6fYPVBoN%2BhAdEqx8YoDQhc9BiRTPOxmlJNTHXPT&X-Amz-Signature=980ea653708b85ea31bf5a19828bb36317921b9949c722f7b435ef487ecba93c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
