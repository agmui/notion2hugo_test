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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665QJUX7VS%2F20250320%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250320T190342Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDsaCXVzLXdlc3QtMiJIMEYCIQDl6ijYo79y78EFtKWxQUx1qiy42jy2q%2F5xSGpITLI2LgIhALvsxikX3mifwZvihrMVT%2BiYL83j8XAsd69lSg1YKuL5KogECJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz1%2F7oidZ1tU3qq7VUq3APCYaUQegRZMzPtlkPSLokiE0m7WNik2L7mLAfG34CecbHyKHps%2FsvarTIBZi3luRrdWpWg6OA5VqcHsvTvW1731ZfCkZkRo4vNa3gprlhOce1F4e5YNAoyGOAHz0Du2AGY6bpIhAyWfJ338EFe%2FoLefWXIBykUBxNWLqlmRytFxemVWEwPr7FUzeTuv16FVq5CujhZ%2BLLBDnQIaGGMGWgfWevkTp7SWaMVWVYoZsFCrg9rMwjywAlKfmVzt84rSYaogW%2B5g0bWZ25bFXUH3sgKM0vOc1D9w3%2BeOD%2BEAXdXbi6EjyC4qTDiSd6dYncm%2FgVH7jiE%2B4ruHsU%2BEl2GGE5cJFWNiF96SMRd%2FSWg0ukk5DUZ1ptWVCvfv1BWEYurYGMIzIDLk4NczIQ%2B%2F8bFkc%2Fj1yxVRkTi3Op1TTa8281V1FWLvtLa4YDFSvLlMu0i0VWye2%2BVwe%2BzXh%2FRGK56tjNFcx7aE6PCcMxtz3Mj7IUXMylV79rYX6fcjW4W5JZkY0qT7AvqA8dzKHwdUXw4A6oAtNx4PObeQTmAHzuQM5lg1mRSFFys%2BAyCdOvXj4cEi3%2FSZwTNoTErISvV3292pgcqV39DI8oOlg%2BVcbBehTB%2FS7AUoPs2TwJRHWaipDCCxvG%2BBjqkASEFWQbgvD3EQ13NERxQo6aRNHdwh7P9B1TPJhdZzJvWl13NIp10mRBp3%2Fnq8BPh5j0NuGMCwaxSAE7Eghjlh%2BX9%2BH4qRFvhsGh8qQNjCYg40JSAkXH06MpTrzzLan7rZWjscxLY3QY0jt7j0G361DCg%2FftLgTBfjqYVWoeEqFNADUeOWZteVrWFakRuesdKeOmNYj0IJaTGzvg%2Bpfr5LsMdErn1&X-Amz-Signature=7e703652c6378b9dc516b3fc840db4fec12cedcc400131dbb7a723d46127665f&X-Amz-SignedHeaders=host&x-id=GetObject)

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
