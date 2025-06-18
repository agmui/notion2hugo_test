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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T2T4C45O%2F20250618%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250618T230839Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDb0oOg5VrfOmCjgDrvBWW9SY%2FCePwmTV3POWcXHrikDAIgIluoYes%2FQ4e8uW68dQYkSrAozzooS%2FqOn4pYp9nn4WgqiAQIl%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHZZkUbtI5H1KQTNdircAyMlBSqb7MlYPXuL2w76r0PVt1bkRrIRV94qKUCqhAVZTOcFxBRmzvAkI5kp2IbRILL2y6RlPu9POS%2FpxDFZmcy9HgMeUgcdRKlrT%2FijgMq5xSdLJopv25XQQ8Ic9xxJXznESiWZeig9Dxc%2BRZZArG6e8zqJqhkmIYgg8zul1NonOqdDktluAT2aTqGD1goIiK2hjtdWCaan3smBf3luJ%2BeN%2FrtcxH8BLjgSIwy9aEwfj5rkra%2FeCO1FpguMx1i7pBGBQ2jODubPSMqVXeuFx3k2jpcx7CKFe3Dtoy5g5fSLdNof8DBo40z%2Bb4MqlhX5EOgMlyZf6xhiaFmPiXOSJkv9Q1SG1FsR4U88P8bBkncsIkEcq2oKE6qYkxySJ2cPuVSoDEkClgrAVy8e4eFiHo3MLRlPBGqZ5JcvS6%2BFCWaa1XjS%2BS4mrWy%2BByURycY0RDM2cC8dQTf%2FQCy%2F4yPVw9VVLA%2BCZCetFYmNoJCmbY05OMZYjeUCK1Q4%2BvA%2BYRktKXEra75Ix7TJ4272wTgzkkAc7qBE48f8FpfkQHRQbu1THjOSuji4EifT%2FUunToBfhODJDzCiekvz4egz%2FRtDwb2CqbvQHiZVw%2B0ntqEpa%2FpWoB056D53Tf4qgi87MJP3zMIGOqUBWVmhuBSI1w%2FAm%2BtV24QUOzPfebAvORHnvYfpjdUxxcLjrMHbnkSHLLenACxzYUPuvhsyYOzmFRY9%2FyPbCJQvLkY9ZCb9JHvDS%2FvrBHYNK3njt2Q4PzdWdaW1n38UPgx%2B%2BT8pPcGwb2ZmSnHTVAOpmJDZvJpRiKNnfV4%2Fq52ZFZVMt6wc7ifo2H%2B9L1tztVc8DExyjw7JgRuJDRBM6zq3h0HjcGdj&X-Amz-Signature=6d4ebe6a39723fd9cec445c0788d6681699eeb27a8ed3658ccfdd09a88bb6f3d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
