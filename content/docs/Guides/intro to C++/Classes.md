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
  <summary>{{< markdownify >}}What is `~Milk()` ?{{< /markdownify >}}</summary>
  
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SMGQHG53%2F20260614%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260614T040731Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJHMEUCIQC2cJIoqVA1Y4How%2BLWGNSlI2MpcI%2BP%2FQukU2TJGjrSeQIgU8smAqu4NHDu%2FBLmIyTekO3Imhw1FmnyS9b6J4dmkGgq%2FwMIOxAAGgw2Mzc0MjMxODM4MDUiDK3OCOqQNjhoN4nlWircA1Ipmog0imfK3K3ZG5lsyT%2B6hazd6MWk%2FX00X8yD7F1YYdpYCZ0SQqcg9%2F08es53b1ACf%2Bmr8pKoEtGdcjuoAiVmwGcstr0rAG4bHU0ApvoyWuVkvwGvcERnVjs5Zf16S0sBDpk83JA1kKWxVpKwQmjP29%2BMOUhA%2BnUIatSpbtFE9jjeDPiAUhy3nU6ZVo6ikLa%2Flx5j6V7RgCivqe3kPZFBMZWPSyMQ0mEBtLJKGEe2l33i3N7roJPr3TZYefV%2BCiCkER4tu4ecFn%2FeL9Klkitt5%2BNWJwojex%2FBfjHaO1DIG0Sa5alxJmo0IdU%2FTPE2GmF8VaDAwG3ZZx7BdFGsu1HtVDfRtEKUIHs1RHwlDsUO2xqjFBd12U3FfBCx%2F9%2FHtEZ0lWYZvcxzkwtpjjOGlUi%2B8nMPt16yUy56582IMqC43pYv2Lv50qlqqAnslu3QW80sXykVIWcbw4mR%2BTAfpWbSAUX7jmNBTfX797pNL4S7F%2FdLkX7k1xlTkUCRRUFTS0dBwFQUF1hupKzqIJ5XMMmu9IWlNa7LrLrU2iioXUcADh%2BXQ64fxG4ti7JugTpDqC8s82%2FcqK9S669DZswGeqsroHsFo7%2FPf2fhmn0130hVwFUJmasI65xt9CAJMKiduNEGOqUBP%2Fv0ViaSez7WIJ%2B7aH4O3d1aOzovC9filN4gvK2PAcA%2Bdob13qY5RJLxPAp4kqAVZTIdKtd5UKu7EPnY67efDMefXjspt2r%2BoFZoE3A7pwV9D4KHCwoChpCYFEqWGB0TheupBEVrOrCtexEGMeeQ%2F8w83zH5LHCDxwKUX8x3CY9r1H%2FZIbkzjAa6N5QNCncS%2BGWVScSHNq3DmZNORnTEv%2BJKdxlG&X-Amz-Signature=0d59f4241faace4dbea6453b897789ba722301fcb1e5d1f1b694a551e86ccaa8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
