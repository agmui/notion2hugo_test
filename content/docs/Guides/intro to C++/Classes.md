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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663UXAEO4P%2F20250611%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250611T132532Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCbWrQpXFult7Sud%2B6RAynFzg6Q1XR3spOwWj0bDOkQewIhANpVJoAQSTIJogi7jlUnqyG5Ogb3QsDZ1XrpSzjCbdUuKogECNX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy3K2a7wyYIGMK3i3cq3AMzn0RYU1i1y%2BJKDGTowrPbKrAiBEViDP8e6BXo1mIHJugRiVp9FPIWUavQy6k0kZ9rhl9JL0DyVPNI96dWq9XRL5Tpci%2BVk3N8JNb4PHNmyh28l1mSDwc3AB8%2FvbOvxzrLltPdYeRqoCT%2B21L1OAIULxBEYRva5ZJgJF7rT%2BElG0FrWnEYZSBwPlLBGGBYdps%2F2q%2Fv2GLP78GdG8y8PcNGSGJ%2F8MZ2R8g1tJ4SdSF7uEQ4Cj2K%2FTC30JcY7zHHMKqKK402Bm5YzgLHgBSA6mzJrTJlAOoRQ2o%2FyxvNQw2YGWlSAzRKt1d0fpftHahOQc3b3dFDyNNGvYI2BB94LZKpYBhVge%2FGb4nZLNKX06cKDKcU%2B2ohzSTcH7mTxWmWVXBgSpAUe0FULovcOI9hz9HUkJmfAjzFzBXY%2BRhy1nbICkbgqjx7r8nHQT3Y60rZ%2Fsmx%2BTH92eHqEsra3cf2JUWAvMBlkuqxV98SVvYci2cYqz%2BHRslV%2BldsBzKAwxjnpGFC5z0ZhZaKWkzbGXALKsYMhTY9x2E6buq0oNuhhDKeY%2F1t8rqjzV5h0KFk81CtKULRNSSm3m5Oid4RUEWSxRGd%2BCdIH%2FltM2%2FoeIcnd%2FfKuWioFue4pJJl6MJpaTDs5qXCBjqkAU%2BQ9kX5JFiVMlrLEjBpKnxbsdOnNAIqIqG51gAktTFRHGwO97wwHLBKgTeJNsT6biSpcWCsdkBk%2FqPImV30mqs%2Bqqq%2B4VeSIpzpX%2Bu2ir6V9estj%2B4kajGlBYJIh%2Bu18lwFCYrMu7Nr9PLuS0EQ%2BjehRULnWx2zew03V1%2F4mBn98bczAWJytXHABMKml9zCwCzqpGXS9bBSjdWCz8N6DYVoxc99&X-Amz-Signature=41a6563079622fba3070c16637f25443c85d5ad935c802d3ea5c4ac160ad150d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
