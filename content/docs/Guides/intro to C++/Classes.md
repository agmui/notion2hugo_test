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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S7ET6QE4%2F20250615%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250615T110551Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFoaCXVzLXdlc3QtMiJHMEUCIE5EzTVDBDdzEFT8KVeqZX1pqduUxHGAfbYr6y0ePuPAAiEA5SIoPIh3Jq0RimfIkiUv4h1fxmbdILSx6axk4p4HuO4q%2FwMIQxAAGgw2Mzc0MjMxODM4MDUiDKs0USW9Z9H7QyGCWircA%2Fb8BYoU4SVIWaYhd52%2FDUmkm2mX0zvpHOeaDspxZstkXnixWj9nv0p2RQP%2FXJIBABibV2NBIRA%2FBhHp%2Bspvg7W%2FAD2o82KXPL7bo%2BAr9h9i%2Br1gQpOU9DIGgmbVJ4S%2FgSXQSavj5%2FbqqXS%2FCwHLp2rgnCykxTHPJm9NstFX6BdfH0nS7FKviCeUGDre7GBddMLdw705%2BffDTWFo%2FCVpGiY4Fu4waLveSoiNR0RvYkwTy9RVmmCt9LTg9HQC27HhIUfT65%2B4xpjGKFyuwCylcZyQ29SBm4qMbwvRKdaxsZ5kmwXn2Dlp9LQK7FtytM18jDo8nrhYQBgrURii%2FuqaGRNKTB3du8e9TnWP4RhrlonJkTYfutp0GHZ77PfGL8QNq0dge0nDooAgVSSmz3or3Es7%2FrT8SmS7LxZdtz1VRTiYGjM%2Bmruoug%2FybHfdLWvjojWuH2uxuzdbY5%2BWDw4Q%2B%2BZIyLKXfgUIBPbMOWv0NcvpBSahQvqKudXYi2BACbucVJuGGAt7dKv9L64Xv8Sd1Uz%2FctgZ0ulWCg8ZDUmDXxYP296%2F%2BEqsoFrF%2BvAuTXmVja0N7NkYW9y90wMTBh0Z%2BfTdYCnm8oPOo9RiDYkhHRdFUruPMlGfDZX6zm8XMLi6usIGOqUBZv6Rdr%2BmdQS%2BR5R6MKKjO5moK8jJhCS7KgAvmqrHnT6h5xUr8ri0z1Ps0nO2%2BEO5tOJ%2BFgRzKrsUUMQsRQY8mXbyiW6rTZIs9G7fKWbds6W9n4Y%2F0f6kRDZLBN4lidyRtu8pKhyAsEJCxsmU4BlhW01BfjNjw1p9R9rr0rMyc2fBgreesX1mm50Qu6LCag%2BiFX0V4wh%2FshrL2k6YEfH9pjj%2FTrYB&X-Amz-Signature=a3fef7dedb324809abd20b9fdf997774cd45c854f274f1f83b27043b2bf26001&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
