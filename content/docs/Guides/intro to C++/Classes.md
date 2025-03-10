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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663SDKRGMZ%2F20250310%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250310T110113Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJHMEUCIBN8ltgaPU9F4TxSzPoik9GeqiIjBK6f2aU0sglMYrHxAiEAjn6NXVrsuPayZwxYBK37E9JUhNfpvXYsUYjF0b153sIqiAQIjP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNuP8KCJww5QCdd7vircAxkQx3VxUlCsBCoWhnqjd63eB8IZvFLyINDlnKqhQi3K9zaEPJqbR8xSlUhAAzDMxvk8i84VKtqmsn3wsxO7W7xzYesG9dxNzfyoqxO5P8tHrm8cRHSoRYJhsXaFBTSjZnPt86QCM9VslMv3QWJfa7fYSIW%2Fvr0TKNSDWN9OQsnrygLKDGzknYQCDGYVVu4j9CdV58x3s%2F8g7%2BwS%2FAxbBAx4TBeepmY%2BjxaZzLh45QmVDhuWrf3UTOZXDemcI9E5eCRUIegXbIXXnm0WCHIUb1FQV2sCEDuNt3VZHpBuWvGb97s0g9573sO%2F%2B5rXEFyd6Mu5jNDDNH5kpniRDFvsekyGlDjuahIJXSwVxvZ0NT%2BU7toREPNjXS7YzJhdgEkAy8xZ4imy6txczBmcv2zpCWBzk26M94ioCy76MjkLptL7ExU%2BEqWdxYdN%2FNZjdf%2BzlBtwU2z1EQkwE%2BM%2FyQJMTJB8Ck1XG9GpTzWl9ptFV9SrBN4sZWILzeztO8tWGypPW19CdM3q0FEXZUmgBIT6TinSivnuMtI2kOwJwpKZhc4mAi%2BDG2ySc3sua0xQIRJuJdMYNaYmPaS1OFrcy%2F2LpFo0d8Enwc%2B8eIzs8KXD1HHa7NNcicabMq4vdIi6MKiKu74GOqUBiJtO5Mecy9EW97fF6LWehFNinQyeajKxyaFOLlmj5i06dCUW63X2HA7ToDTt6z6GrbwgxKX6l7EGyqAAlY9tzFA7dIKTJVZNKF5PDgl3vHPphmCybqHNEahjZ9XTyS%2FyF1l%2FRO2fUFjUtjwpBSvcFj1WyW2W4xpM88szFdz69K3bLE1%2FrQcD2xQH8S1BLJSbjs0TQIklHp9P8Abx3OwkAiof6kIN&X-Amz-Signature=1a9e5cdde19f1a7990a3616694ee25bf09158646722b6d432c04d722b9c4e83b&X-Amz-SignedHeaders=host&x-id=GetObject)

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
