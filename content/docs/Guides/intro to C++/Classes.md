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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YMFOJRJR%2F20250206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250206T140740Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEYaCXVzLXdlc3QtMiJHMEUCIEkv81NQSlm%2BZWwgq25EqEFukGmoX%2BPyahH3YeHfi559AiEAhOd1%2BoZujSd59TnQosX8vp8mMN8iPEq91CmTtlC%2Fu3Qq%2FwMIXxAAGgw2Mzc0MjMxODM4MDUiDKLZ0OfC6pnhs1UdjSrcAyLJC0He1Fa6Ufn4tzk7Xb8AKA5Szboo%2F9ytN2wbGCvmv1OyIG6wrDdiP9lqZb5uhuWzo%2Fj%2FEQOqav6RfF2HAatXjHWJvuSisULKPWoGaP%2FEmEv4Q73gHdN53LZJk86RIikWnUhRfI5Yz0LkcTDXVDqLe05fyoX8yXUG%2BFOqJpL2imIJm9tuYAO38u6qQCzzrTAk5k%2FOUWtfc%2BRfA24J8qiSA27P4uviG5ba%2F3MEfzVELyhFiau%2Fs7wACxRYA19DFgrZh8%2BdtmWWr%2B3dBu65bWa2P%2BEF5bUMyKTVZxiHJulf0CERBGdFCe6m%2BGen04brZq54ppHoXQNEQ6j55wlcKGeRUe6G%2BjZ7Atemr1wNK48NtjOdISaG%2BA6UeYFbGIgEhId65LgK4FD%2Fxlw%2BTQo6d2q1f74GpS%2F66IeQPw%2FEVvxyoVs%2BuqMAWxALd%2FA4AHzEflSlzlmMLeEwGFgIqNU%2FfIJItRjTb8mCCAkcLWs5E1ulo96BCaSCoFNlaGsvCW3oNqwzLTQi0Xt%2BoRqgCwugiupNBS%2FpkY1n9sTrCN15Zom%2FMXLFXUFmlic%2BKTQ%2FDEsk5pLrBGAUABw9iLU9SaNMxPjxE34%2FGVhVyMS%2Bzw4y1AKtihFBdupLtEneOCiYMJ36kr0GOqUBNwttsz0AraWdZuJH6ZBNxIl898v7oOYpITJ2ZFfV3td%2F3Rgl4vwLYiJAk80LdUZ91dJvEAx6pd3gOx79BhXXsCIy8%2F6KsyjCAqQ81KrM7azHsnBncB6P9%2FuKUvKisZnAutmhFVoP9BfW7Hw44Z0gGCHz3%2Bpahyoz0zfbw%2FtTz99sD4aFXyqOdB6%2BPJZ7AqlXtB%2FkMQCKGQ2f1iKiAd55WW9rfJet&X-Amz-Signature=30a682a7ce78b680bf3d82a4e06fafaca4e597db7cc87eac152eadcdfa8fecd8&X-Amz-SignedHeaders=host&x-id=GetObject)

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
