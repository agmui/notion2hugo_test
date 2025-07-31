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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UKBQEDJJ%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T161211Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDGiGA%2F3QtYd6Ks8XdG%2F3oY2foEQXnjDdUDXaZxzp4N7AiEAoA%2FYY5QkyLrECZ1DauAedNQ5O3e%2Bvj%2BK%2FYdH4zoONPIqiAQI2P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJZJHNPshp%2BUgdwmGircA%2BUQrjPcK8MT%2BX401jtkKODiQxvmorcH00Sl97Z1xY0BFIPSNG7L7yMr2AKuqBMDZ3UHX6y11EhEa%2Bnqe0kXAPHPflPbCbgAPxTkZLDjM0%2Ffkshhf6pgjVzr1wNIPFttYyv%2FQj9dMab0iCDmk78VX2D15k5u8%2F%2Ba%2BUZToqOwDPhlRrB7UKp29%2FeOfgDGVXGtbQ3kyN7NH0P9wEsVJnT9DNldFcfadKEbisCfDa4DRZJ2fsCTJhPldFooOBzdTZz%2BgHJs%2Fv7ZECDCDWUcxGqJAR7VxnHYIFhx3n50ZtceMmo7CRKJgV1XdRTK%2F7TAvKYs0efBtyt9UqLaFSUX7XoFTn%2FDSpJH5HiErfp3R9X76%2Ftdy4oqVm1l4omgCLAchj7HS0obcZTtoAOf6VHK5aOIxKzHU3G9RcMVpmdMOpwHFkK8xXrZ%2BSr3M2nXHV0kOaBfRvEDYzeu3nd5YWyRdnZj3eZAkeRdtLUdgy9UPm7AVpPfeKDA5jd45yz8QPbaBYqGI88L7rKfp6zHdV2AsmVeTNfivvdq0iuut15GYSqPphz2pksYOj94J77mUmtc%2BNuhpvN7bpvilAhvWX1g6x6q55clcDYvksrjdIARVVuLBw0RK%2B9F%2BQa05rDAieZlMPSQrsQGOqUBzMfJf25nRanGnRVjy90CjOeHwhYbmtgwoVoM%2BUgWE91jGRs5wE%2BUo6sMECkChz6pu8AQ%2BFN1nFj4yXa8tdAquv0ieM2L%2B3vuveEKPNerr2YLGCC2ph%2Bf4JBZMGC5InJ9r1BfLwoJpBqwf4lhv39pEsEzhtfV6N1IZV3prYGqzIWDeAKpH66lqnKKIZHO4Hw%2BYarb34EVB5NaNMsQQnIKfAOt%2BO7o&X-Amz-Signature=0b2bc3a60d4d88ddbe76975fe722a32ce4efbf2e0db68f7bdae652736cc7cc34&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
