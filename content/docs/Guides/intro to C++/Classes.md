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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S4LJ42PQ%2F20250318%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250318T003745Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC2oNkfz5955LWY6UE5haA1foAQzH7tGAH68GDK1WwJTgIgaqAK7xAGw4%2BJMZ45oMqNaNO5gwNFr4iR854xQKkDtZQq%2FwMIURAAGgw2Mzc0MjMxODM4MDUiDEIAA7PIm20oKNxzUyrcA19kht2XLAFPjVmEFd0wKTGnLvbU%2F%2BQfTrhx7LQlVCBrqgqFbgZZ2ugtNVbiYrjBzdB8kcTJFS9qyuTLpn73Ftf0SNxScDCimrJlK7C1h7FJs27ipqmCAmB%2By95e4o9dhGlaiU0A3E5rpbI6dgAM1QjRRyA%2BHtnQfXD%2BlelfW7N%2FAYL7iUiE%2BMq613Ua78yDfwgyMb%2Br5lCcfabMLP%2FpQeHtdJC4AgLmYkoiF3IkHlecQd12Rghxl3%2B8oCajGAzMD%2BY9Rnb6WvLJY0rvX9d2EON5VgcucfPBq1%2FgeyAP%2FAgk9UdLPlkVdvtDpVIrpij92FsOnl8WWOi9JCyl3Cbhi6bmPWlwEKBmZPBdI38uBOrWKwpliaxO8cW%2B%2BWJnSr1Xh9mowsftz6xR8qPu6vlXyVC4l70puGjCrb0n7HWRl6XKMpASg8CQqc35pBFOzsCOqXMbPpGBNMSNXtRPVvOiaikMfO5NmD7XJDL0fE70pKXPy5Oedc9A28hIyTJm8xKWL7%2B6Rpie9JpXopOqIIUsFS24tzINmf3yVA7PEQZ1DJaa7AM4nBTNdOG08CZsB9iqFgbMDj5uRS4R4OICh9dFpMwTD6DVIA7AZeRMYY%2F%2BcavCVoUXoqKDsmy6kh%2FHMMbs4r4GOqUBPDA%2Bie%2ByQ2HUanzEaeyeqcqIbLWhI%2BCHTBLfRomqU9tLNvKybv1tO3Dow9hemJzxSKMi6DFEWXPaijAZSqciEkXbpWIjp2mZxzqn8VjQnasz0wMQisgSQaHSV5IYs0n%2Fm7Vy8MRiev%2Figp1245Z6gbFNgBbGocn%2BXgapz5xLyO8bkSEVhSLQH9%2FrA%2Fv7bxIlK1SVRG1cR%2FRGfUlD8DvSjs0vI5BQ&X-Amz-Signature=3140cc18402fd2c8ddc741109bfb56e4f940c5551533a22adebf0b9976ea9980&X-Amz-SignedHeaders=host&x-id=GetObject)

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
