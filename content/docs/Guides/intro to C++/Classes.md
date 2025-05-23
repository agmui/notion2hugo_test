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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YCJJBCIR%2F20250523%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250523T041155Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECsaCXVzLXdlc3QtMiJIMEYCIQDIIeGIK9bdbldk16DQYthZZHs4vTqMz3AZV%2FDsv4YY7wIhAPds65olTTdNSXYvaN%2FILERn5Om%2BP7yARmKq025AW94sKogECOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzFnO9%2FrAqofZ0oGVAq3AO1jQ50eJvli6uobl2GmiFs%2FJzank%2F1crQUt182xCjEfj%2FOU9XI6PsJMgQyjhv%2ByW%2B%2BOiLvdwyGT04Be1fWryBwjYTLwSP5Wj7PJ8HC8GchaVB7sRIy6jiXU3%2F%2Fr%2B4jAyXwRvS1WrUdNReYcfwcH7lZNvvpcTZmRVdnHModW%2FSamIcj%2B0b%2BG0mMmfav9244kIVH%2BLlglCXAWIi0MKtYxDtrSqW%2BFGzNQFk1tM4Lk1l6ITob2Vx55lHVwef2cvwDPCTbOwZFsJWpza8WbQVs6VrbEoGzTORog2mbMda9fMm0uZwEbcrJsL29hlpSDCYSX1Tuvc1z0Jj%2B2HJqqkCLj4PnNn5c9wRoEugsqxqcYPFoQ7KxlEe81ZwoeUKUBrXm5x%2FRmeNSOAE1mzjaQxPKB9X0Lkp76jyznBU9vgwoAPa%2FetUp3%2BASEhOWkvnUWGufu3D6crcFVeJz8y47arKiGhtsNzJ5kKQM3cBblmahVPcGVRjz8VQ53phCfq35sgPaYakHUQkCxW5VtEg9F%2F5Omnfj3pHBCGCm5J2ryV2QWEXMSVnjtGfJy4VamxJiAtFX%2FEuTpz5CkEHCZwrgph%2BdmoZlbqi%2F2F0S9UCELx8ps8wB0vanswOjrmgmMD11XjCdw7%2FBBjqkAeJoMdY88nApt9WpKYb%2FYuBWex%2FN62xEnT95OxIqoXIiVTq02OujcTpxr7RXjiYZG1MGgD7MfIj%2FI0nPuuk51uL5zTwZLMF0WUXdsvRmvLpWq1jEheDL8exKPFw7kbxyN1AVkUXluKNqIDK%2F1KGeuK1R0DAUmd9LFKd%2BHrf2835DT3J20WRX2vqDb8e6zix8px4wQYNAeWRS3vxuyLy7nolW%2B7w%2B&X-Amz-Signature=35961dbc7796787c60627a5ac4c5b426596aa523ea84370e1b95b94401c58772&X-Amz-SignedHeaders=host&x-id=GetObject)

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
