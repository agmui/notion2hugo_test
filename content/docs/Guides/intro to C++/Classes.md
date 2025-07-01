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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662J4J7MG2%2F20250701%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250701T140857Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDualcYgFvOMBJFvU2XthXLUAAvgubvRK2ryWySp1VenwIgXPTzwXvMrZyahQtAvSjimDMy7Z1eterZ6UW%2Fpo8RL%2BAqiAQI1f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGKUehCNNQCdwyi3AircA3mvXd7K88DCN7ssSnEVd%2Bg%2B%2F2HefbnFPqp4OaqDdB36W15FKKX1PvLqGURSqis6NNheNri1MPPnFD59xynMK9dbB3lNfG4dZMcEgTwv3dk8Roe5KKqou0AHwulBPj1bI%2FaW0fj4n3BJl0x4VajOQ0CQrjy1GHLPW%2BZUBddC%2F%2BFrkW2pVoTgaOvZG3VCWdU49ZmL7mLGR1YHWIV%2BGIR64O63MZc85v5wUcCw1G%2BfZ6blitLiocSBXT6Kd0qHWP5SaUDXmQAl3lUDBLHFfJzw%2FuQTabm6Y63ojHCBYshuuauxXjS6xkRqHl4RfW0%2BK%2BmapRC624e2IZcq0ERv4AMGE6uZ0a0AvNsMF8%2BTYlHaYKxT4kArcylLAKiOG%2FOWBtj%2FFiDsPdb7yhxPE7sByJW1q9m%2FECQMgOVzaWdFhJ8Hwn4RMaGpxlggBPbRUmfmW3WlRGkS5XBGvddQFvGdldRnYmoe%2FvQBnKbgrQ9hdiHNMu7JzGBDx%2F5Yxp2M8ReSxvi1e6iit6qa0j5sLjTyWVryCFuH0mI7cMhZXyHR7DQl4yNbFlruQ%2FU0LsorhCXERxuOpVHE%2BxGV8%2BRHCkcp45Ox%2FLVRqPT97PZ2N8YgqdwfCeBGULJKrJckTwMcAtHeMKilj8MGOqUBghnPYKP42HkhSuipwyQnvzg6cRLDAWAjtAbgT0XFRB53Zu2lyME7zpbe%2BiM9fE0gIMok6VUHjGIgugYhxGml1H4FikkCMcmUHTpQuDCOgF2jlbPLP%2BtuQUpFq4n6EKZ03NlarE20e6KqWG3JOzzzyht08feQt4u%2BdXu%2Fmct8sOucx7rlCkh%2FT0sxV3eVD8URleUgAldinu%2FVVjPJREipIxrQrYzk&X-Amz-Signature=9f06ab694c933a614a4885fe65a1ce57e5c012f5932151635ddc57c66bd9e907&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
