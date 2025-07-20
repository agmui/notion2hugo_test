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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RHDMIB3F%2F20250720%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250720T210743Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGWTID19DqctbU4Cl0BAeguSZoFsMxRhhdXHCT0d0ZEmAiEAqRTdR9jIsr2mkHMxj8nWlVwjhdfWEDsQw2VXGKa9LGMqiAQIxP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGamY310j8KDikGhoircA%2FTFD3qQtR1bmBp0ehI9slJEjFGxZZUYzeqJPV5W1gr%2Bb4ArWK31DtQ1DhjEbdxW%2B%2B2848erdzqE8q7cI3SzuktlNKSHGRLs1XsiAtTjXykvGs9FfecrVBlwhf71bxrQh0ZI6SRG4BF5NkaxaxnkS2X1V%2Fx5R8Rkn16wdT0ThWNo7diFN4M25ShkzEiLkISkoySLPz18wyvFyD2FckozgvAJ0j8X28ceTdIBtrLXek47VrbEGGkpQOS3X7ceoiHCYv8sIDEhYTSx79Esf%2F1Fg01vGzWNNlc7KVVwByL2etzQBksaPp4yMKJsJjeyZ73CuGpl8Gj1682iIsRZQAULxGl96sxpRQi2Izg2p5izTqfhQKyAyN3TFVk50hbPo6dGKxycuA%2BcgkPhnZX8DhZxHf3IMwdf6ehdlQXehTFNMwTtM1yiF%2F%2Ftss8CDjiBUZ6HNPtMPmef99KKc4RIvjR9%2FwYaEey2OGsNHMrFEqKzp3dXxle8jPcCLDyTuhzhPdC%2Bo%2FmvCK9%2FwscwQ3xLVAxzBOaK1hVEr2HaO%2FAYjFhKG3ZlG8fNA4ovUd0OkPA2rxe1ddqsmrWr4uM7cKWItoLWMMQbNpOouxZpeJ78IR8DUIbWXOKmSRUdq9hpUxgPMPD29MMGOqUBfxTb8NfdeqPAs%2FI7F1tglUOWHm1g%2FfpfO1UI4RMzVCtxbrldZAvVT%2Bj9kmzL7EcypBkAgBGO%2FROP4a%2B673kfvL2NqrRNY%2BRvXdqAoXY7oAO5dDmr9HvudPmfg4tYIti3W0pYR6Xjv4D5d%2BZxPKh%2Bju5QT7sxcBmbJIsmv8fPSftAPAjkD5AKPC0h6d6CYCD0Ez8b%2F47NRWeXAVPT7Q9jCxelBcji&X-Amz-Signature=07d2697b794e930d1ea0490d967ac0f50a410fd00e9cb4af1d4c98ffc3c1ab97&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
