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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YEJDUW2B%2F20250603%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250603T071032Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDUaCXVzLXdlc3QtMiJHMEUCIFqaHmDrbf0gCzaAiJQ80xODNzjweXrvjeNSWM%2FToomOAiEAiHf2ble3tiiMMjlUMFU3hcTwkML6tVfgOfVMKrsYMlgqiAQI%2Fv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCYkW%2FYTvQ%2BkL4vBTyrcAwPZbGumvp3QiInFO6HZkMGBKPAJPptaEpgkEPb3KtDlZ9W2EEIOtVY%2BeKsPb6xMnQAoPX%2BLmdMSwoeub6jAUIuVU%2BFod262fofy5Cm8EG1VDllyWR4u86j3q5mNbYeM0uVhGgFIEKKYOVTWeu3ynjcB%2BEYnypsm9PL84Zs%2B2JJ6JCF6x9bE41zn%2BFFej9BOGzlnp6zuy0B5%2BExZfQ3DGeJrxI0VWCeEzf6H9jt%2Fr3Yn4dzq2mWmvmuk6X14K1PK3oa6gaqrUJIrvJJ%2BH4fUVvI8yi%2FBuXfqIuMe9FukcopvDcLC%2FkVJVYdINIMN8ex579gM%2F3wJPVpSgV0I2cuWHVVYe2uTAm%2FpNZSCsexexgLJTWenXVSLNgSmSAybmJ6f4pidZSiCmGHrKc1rW%2BiM9kWd3KeyZzupF3CxXUsEu5X4%2F5DEWSuJAUIMvDsfki7NZsHfBII9vaf56ybxMwa02%2BPjgfheR27GlYule%2FHXSoPohyQ746FaxgV0rTtB58DZrjLmybJTRhVW%2FpoPDd2UIUVsaKK0QnIdndBKgZfl5uro%2BI7hGBPDGKsPdzZynOJraWoIO8IbyWb01sMkTQifGs%2FgxdlOx4K31G1MLVpSuzOWmdZQCp5b1rUygSCUMPmB%2BsEGOqUBs%2BDAxDT9wygr0vA5q%2FZ1xTntlDU84Wr624sIWkD%2FHXMRy1xY5ufWXqIGX0Wqk%2B3cG%2FmqfY5Y4A0pJYAs%2FilbpNZX%2FyE%2BBMzsjACFpKxkp1oF2v1tL9IKsdkQDAkfc9ZCDLuceF2dbyV2K21A6oc%2FHVVqBovdbFMODEYi13h37zpYTkbW5KyxFejEA%2FoId5jDMq2sbcQv7PXEgaS2M0cCP%2Fpf9UPN&X-Amz-Signature=41d6ad9ccfe3d7adacf54ce156fe16e90d79b8ffde7fd80038102846f270a212&X-Amz-SignedHeaders=host&x-id=GetObject)

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
