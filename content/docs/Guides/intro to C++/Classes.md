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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SJ6GLUZU%2F20250216%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250216T230651Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED8aCXVzLXdlc3QtMiJHMEUCIB%2B0bKJcUgnQz7Dtd6eFr%2BAy%2Bu3p%2Fu2eGSqZC3nw8exJAiEA4N35q5b6JG9znlaUWTus1a1GLF8FqnlI%2B3aOD1mTreoq%2FwMIZxAAGgw2Mzc0MjMxODM4MDUiDKGhNAHm%2FWQEYBRHGSrcA5%2BPDX%2Bbh5yMbhEsJuDNed%2B4d%2B7BLjsF3p%2FS4xMEJh9h8iinISLi2nyiOgcfK1ueFar43a8xWXRiJbOQ4nzECoe%2Fx1QJU0SYmMot%2FTEXvceiA977MOjzs6JekfTwugwUoH85RylTEEPpS57N4k4tLv0xaJTB%2F6n2rNVORd%2FtEfDjDPX19cTKLpNQyX%2BdiNE2SyyeFpc5jR0jQOf7TSAA3AbaoWhk7Ie3ildfb30wPkhgN8u2U6U2ohhxZZp8BNA8%2Ba6L3Alh6lPETVI7hftCv%2BUidKUDdJYfb87ClfPHYe1D6psMQ7XtKfI%2Fb9qOzAUezh2UdhhFMmnzioYbxgQj8BDwSO2SIsnvrRtfLtURlR3dGhiND0iNHYK8fjH3pZDzjfXna4bv2pEd50sGVUuXEq5RtEVUiir9KyPPRTK%2B59fMbZmExWUUXt9NcX%2F8zcm5ZBSzEbpy8L32HI0xR%2BO4cG9QhHHemAprEDIShJom6hBAZ9nZjG9r1E5dK4YHZjPudPQU7OoRtEdsNxQUVxphQ%2BjE73kKnWPj1YYLafECFw5xjf1gXVWksghVMzTjFSgH9ck6JmHUaknCsnRaahU5B3runND0F%2BcUVO2TrJoyZxnABdeaw7CQmioZmBmoMP3Iyb0GOqUB8YoFdyaNpiNFVHfl5yx4jZUGwlwXLgdYGsyX7y%2BaKyGdjd6giHnv3mcCX8sWxt%2FFi6xNyMLaoVBndC%2B0NxhZPi13kkg0oGEg2%2FAJ%2BV4d4x5RC%2Bxf24nkjMSG0uN2nhZyRH5H82jEB5uzCSSn%2Fh19PiJ824uJD3tqIcJ8CV%2B9U%2BeH%2Bd38qU4TuzZDeYdoNAKHAwxCKzd%2FJlYYPBtScUeuIjZZKKt4&X-Amz-Signature=395b1cfba26bb36019b190cca606e83b64edbb0fc5f202da2e5826e77975a302&X-Amz-SignedHeaders=host&x-id=GetObject)

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
