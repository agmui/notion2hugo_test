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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TQPGMS5L%2F20250618%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250618T034028Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBJAz4DKnOJgV4dSmnKVA2cPUKf%2BEmHJ%2FIeah6oDtd8fAiBg5KPnBaTRAm5pOg%2BxIth6%2BOISIPhtVyG5v84dAg%2BluiqIBAiC%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMuDdhsnNFYncO7062KtwDt6HPj0xQRayF%2F61gWj5Vt4Ut8zdpEOIOlwtzAgQLYskCOw1Jua1jYSD%2BLUk7qjpo3vluOeN4D%2FCAnMyFkvbVe8KRj558O6FOGGhxEFI1CWgniE%2FW%2F3XZBHYxdJKMHV1Ifsax%2BPWjQoL%2B5SrIsmjdCXQte7c81jyl9wPwmb41s%2FBbaIgv4Wo4oyh4dcaCgqvjUZ%2BgcRXlqKBaV7oz7xhoPHzzPm%2FivB%2BQfJscnNU7x5VUAvwD9BSVbRivU%2BOtVCt4%2Bh%2BpEwYiCWhC9CwAgLRrDSfS%2FnNQmEGET5WYWh64Nwm5xI8NRo3NRg4mKvp3IDc7MySRTcTBXllFiVnT7%2F2qu1HdZdAU2mAHZoIFBhFsjTW6SdH4D4fcyTrdPStSKHFzfwwi1fxYRr1mwC%2FomOq%2FYe2Ppnvfmr5pqZXrVacZsh5wbjVEaglQoDgz0H8jkjLcxODRfFGkCOTXB%2BwHBXYzjgrtHqXzTp%2F4LFsjienOMJyBW0lbSTvznPX9FrrwSa50vilbNIo4mnjTNfn6uo%2BZ%2FM29t7W5wQrGmjCsKyIDLvcoNWReuWm05xNI%2BFa%2BfrljyaWazSV0YNR%2BJTSuEKhBXPcMvtpE5Y5XipwKwRZ%2FyA4zTlk0NNUlZneVlEcwtKHIwgY6pgGSNSdNmmz%2Fsvi73eO5VpLnpyu%2Bdul8yd9dJkmrAWBb6I8ZfEtw%2BafO7scR5cmSbsoAVhPOTYacsDCbTy4BNdjXmS1RaqFsbV%2FIF%2BwykQnhnXkTk%2FudSzkmihF5VdMjCOfeIVg5sZVSb9hkAG36PFxXM1LP0CZCiGikSFXSBQZGomdUVTVXsC7XWNjn5%2By1QOtjdsOruktE968xOHH0kLfppSf%2Bn29t&X-Amz-Signature=95e2cac517a617f044ca3a7eb86e9a9c72150a10a2380799cd56a2c86667ef63&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
