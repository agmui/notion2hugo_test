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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UNYI3SSZ%2F20250503%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250503T131624Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFMaCXVzLXdlc3QtMiJIMEYCIQDhpAq13kqs6M%2FPOsrtI%2FTnexd7%2BJ%2FYXujl4BZWW0zI3QIhAOc9qsDAF3M74n1TIfeY2nqTGQdPbOJ5vf6frQQRGZlRKogECOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwShTf6Z1bPW1tzF2Iq3ANSAfwJPWYZ9cg2rvYXxiAJsAa3%2FUdLEzeaUH66ibPDBVTU0oz1n4ngVFxFDQ0m9D4kmjuapIsVCtgZO%2BCCL35UCDH0iXGVNgDWzC63PxdcHEAKVm5qMzNo9Rc988yCAtd%2B7xcj73Wk8PbEuGw1L8KSBOvrnPGWdoIr7ux3Rk78CDhNnN4iO5Wg1%2BRKrhNpEyzjnGmDVrbbqDotcmDmSFsviBrMPEKyi%2FfOJusxactFVGsgKOztgwfZ3dO4nX7vMxlc9xAC1qsFJesAIeE513dOjmqKpePxKKEvuFuSs8KblNYIlcIyFdMajYsutkQ9%2BkHPRGCY60R67RScB8Tz7bn%2BCgJ6Me6mU35b632fgzA6Ba0NQ7N3P7x2gFNHsQJpsP%2BPsXhtK2hhnlvOORVRWMQzxyHGHHgOCbHVJd3Tt%2B6Ad7qZ0JLQl9PJS3fOYQ73RHVZv4jfo4zbgz1yuO9nhq526OF%2BuQ7FIEeriEYB5mFWhvgXYMb%2FgyWKRCr8QBNN%2BLgLjsePciV4XRUSadlJSsqvASNBWWOTKF8mbU1MWyU9E1pH7hvBt1TWiWxy4bpEEDQ3BKX3gbkQPQKF8Zi39qvtrkgjrRknNxfRN9lA0TVry2wORHi6TRurHCurVzC13tfABjqkASiZyDlqn5OMM%2FAgg5LHJ1ejCEQEcDs1EpdAmTtWdI4NA2H7c6p4Z9WNbuoLZ0cF23KlJXrgiBwZt16zqE3ibTlIucULjePAJsKPiUKoNcXsvONoBJ4lk6YxRjXTzNxFAbFv0q9XnSFdy2lLaiNZ4wklupW2iVWrkie0eMAn4Fm4uMLgvwckehGD%2FvvWEdIrpIZGQEN3CYKGFzb%2Bks473Agm5jHu&X-Amz-Signature=d2b358f4248bedf6e01c6cf03c0f92cf9afd5347bb52bf9afec6243efc513e93&X-Amz-SignedHeaders=host&x-id=GetObject)

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
