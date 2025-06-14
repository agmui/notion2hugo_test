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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664SZRENTU%2F20250614%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250614T150719Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJHMEUCIQCTI7QHP3P7DRFPBhAFPDOAi0rvH%2BLiE2CoH7o7KtNDcAIgE83dyNFuhFi0oqgW86KwoLSKdW3l%2BOmiMsVd8yE8h6Iq%2FwMILRAAGgw2Mzc0MjMxODM4MDUiDHzYaFaa371esyceVSrcAyo70logidg441nU03zMptpMBBIy4CzNLMalkDBajjBt4mYqAQfBP7DyLIK7cbk2qQjMd01tWtYV0%2BWEaudldpKlKmQwhd7kIERVI6Ak7MNNgYQHmCbJytP2QkFU9Mdm%2BklRRQ%2FUX3ZXmpKKwA%2Fu9CODi9ExzwYWufxCfx7%2Bd5BtF5A8myNj%2FA8I84QdQr8XBQVgJO5Elv4dW1YNtDdE3MvysR2CY1nbcv5%2F77CIDtbXMkmIbByxVlroAEzQeD57NMZEuRNgfSsdwc4UOYLNh5rZ5u4Xdite25C2e94e%2BvxjDsGwOrDwuAhtizyS3zlDcFhSbpZTty%2F3%2FLuDu7R%2FFI36brd1aRS2wbRAv40qp0LF5%2BEVy%2BClEVpu6IwtgixMFCeAe0EYve3tlyswJ4%2Bp%2BhGYSwoKmtXIIoGE4y0FO57uLr9eliJ13VpC5Ie9%2BllCJ2hTiR9lGdrKMYKAp9s%2BP7QkfNTweKufZql%2BWZURF1O6yodjqaFHuRDBs9%2Br%2Fin7CEJQOk0AWNmuDX53%2FdEmNTyMw7nVG6u9jdYBhNBsR2gOfv%2FocWcyzAdR2sOXX6Ef2cqCaxVh2TNxFT5Go3d1C%2BxgsAVgznnCr1BlQfE4r%2FFQP5k%2BOxHWJwMV4IFtMIjCtcIGOqUBCbkgMEfBu8EORaUw3C8QETPATTiLynYvBkIh1vFga3bLpSXWiehCQJb03olHJoiwVofXimpbndae0O6m2n88aBKqjMQ6KCGdtmPcBe%2FIWk%2B8hZEDu2yrz%2BuCwEFXuwv8DXubyNqKcppTH1PnftJpokhP0%2FOIr%2Be2FN5IKg%2FmrOJCgn%2B3f1KjoS%2BRJjXDluBfzgmK85d1MfyhdaIt5%2Bh2nNhjzi8M&X-Amz-Signature=264990e3eaef92a7f629775ca72240f44664155670bca4fb22ae2f3e415033d3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
