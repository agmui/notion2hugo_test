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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XSDZEXYA%2F20250506%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250506T041121Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGjUXxHXsEStTekuYLQ%2B9l%2Buhdl8YCUaNoG2%2B7jLVIxfAiBFhVdNXsUJNgphGd1tXVSAqJdpJ1A9Lvyq1tW4Y9Oocyr%2FAwg8EAAaDDYzNzQyMzE4MzgwNSIMqRp%2FV8V99lff%2F4BvKtwDy5hPJijncPZ40RmiWI3IhhvDYT1hMx0qPnISMYDY9zubPU5DkOUmtqAOoIrJaO2qJEJx0JP7Dn8XKhDn%2BKHvUtcnssxKnTxl6G2E8V%2B8xs3AfB0tmqk7kMBtaHcEBnhG95S6mTRh78o%2BoqDiIQr829mjeuqb3Sd9CWd43qcrt1ImDPNtKeaAs8NeCay2GkLue7yuJV6fi1G9kdzDEOF45WYaQ9Nz2CDzscq8rq6LCJemE1u%2FJ2%2Fv0rAfEA5A0bB632sY5pYY5zvqA2Teuygl0SqCpOU4MTAzuCmVMuf4tAQT2cqiDC65%2BYKIS1P0MXPuNElSzPOBT3AQ9i7XiEUge37ZyboRSIqTLMVBHoYS5Ickureh9JNmpefKEWUCO73sw0keLh3UTJuGhVwJYnYQh8zqy4mPMhE0a3Lhut3dAw8t6n0%2B7vdAZLR0jrG3WLO4s7VKYf2r21DXRFo1E4%2Fqj7rH4vWfMNBh4eWoZ7w6VBUrPBAaTCE1t6uKYQs4PsMAb84EpDJug24nF3OOnEulOR5FkH4oQKbq%2Bw1I3W1FZveve%2BkHR9aLKu%2B6tBV0A5uwfdDSrro65opAtmAqa8nQ8hicD1ZRbkI3Fsj%2BHAxP7QmPJKYJpIzb9i1IQswwwP7lwAY6pgFE%2BoqVnEiEcv3%2F576O%2FpI%2B8hzaX0joLm%2FzlzR3dYCY1yJaRCjP07FVnH%2FRzbT0PPHoXv0CQz3w%2BxtOvpQoR5edehOU2bJamcWHGLyEpmF5cu7IuLero5qRNlpYX2iiAtC%2FSD%2BKKWtsAhLEoK0lWOOWHVcPV9ct1sGsWhho4uhEfV8xn96QrXufgIO132%2FcT%2FQpRT50r6BHYRnpGQXolQk37JsWqTqm&X-Amz-Signature=46f241b57b6234d2e6022ccb1ddae526ab7874bdf552b1992ce2de160f092c48&X-Amz-SignedHeaders=host&x-id=GetObject)

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
