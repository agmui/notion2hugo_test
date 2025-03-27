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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XMUHF7MR%2F20250327%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250327T170726Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBkw4KyECZW8Hv9JLR4tiX2Ridr20OrnH94J3GyLaGEDAiAf716DeMUhYmNWdT308q%2BKpcBvsFcYJ4iPWFSK2xhloyr%2FAwhKEAAaDDYzNzQyMzE4MzgwNSIMsmvKfbHiCNSt4HmlKtwDtOBEY7KeJS3QZDzksQdNObxEHLFI9GJuz5%2FvxlxtcvS2U3YM9ys0t%2Fcg3H5CsXqSdc0oLp%2B%2Fd11v0mpJmYbQl0IWNLoWXjm0tmAoWoLjBVOMd0kIe%2FXM4v5Si66JPb1OQxwd9MocXes7sO2L9KkaZOoCKmBzpZZa%2BdsWntIgrM%2FfGMBf3l0Duzi5P71vBpwgvXum6wvAYBXqv94xqEqwMDUPW%2B4mONc50zosIgS63oP36AInUwH%2FzN0m7EtykuhqfuI1tXLLp4mi17p723C6OR0%2F52Nv9595ua2fiv3eSPz5AGJK%2FvC7bBQw%2F7SPDiWntk5jd%2F2APOi4EL8N4h1KFg5hpaeWrc9IV5wRcJv7ATlvqplf6wfkVv3W%2FRC%2FKBMZHhSwH%2Bg09b8%2FeTV9mrbIhaXSktaWXjlv8Ft5bl2AYm866VhuLRHMzG2ADe0YMmpbsavoJSt7ESjXjWdtd2T53xgW0Y0LeL1m%2B2%2FBykne%2FmBY0c5LLoABmupV%2BjwuBmtheJYyXvV5XNc3WUdz8rKLFWt5VUU3aJmauvmRT6D9okDcrAD57XIm0NfbWaqjObF7kV93AHcX6Lbt5F559b%2BtlNGPw%2F6sxkLLyoTvF5A9MHZJHgZNZbV%2FZ5%2BGEgYw5YWWvwY6pgGpBRg3cy4NT069cEpXXFkVDiPo%2FVKadzZkhYH9vzF2WyCxGfikwEPlOiPfNJDyBmdajYUe4MNClcX6BlPmGArDMXMNW%2B05qoZrlwi5H1LEsij0CEZSkEiCWr0Z534QAWGB9BLcBq16F%2FvjrBXi1Ugcxff%2Fe0Fn60dSi57I7WUjK%2BGZMMswsTBdDlkdAU5eOwYFSm%2FrWLzgNuBSNKAvzz19tyuKxA0x&X-Amz-Signature=4035498c6eb15fdcdc8042f90cffed61058724d0ba0ca80137f1aff335df7989&X-Amz-SignedHeaders=host&x-id=GetObject)

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
