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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664XFORK4F%2F20250203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250203T170246Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAEaCXVzLXdlc3QtMiJHMEUCIQCNm9F0iv1WRCeBniTLu85X7IUloxjWLIHj9oDdCX0OfgIgGB1UMemoPivrB5fJ4YNq26oH8qRtjBk%2B4fihR4uHh0kq%2FwMIGhAAGgw2Mzc0MjMxODM4MDUiDFPC%2FM5xPR3y%2BiQbnSrcAwYDh0dBvuBp7%2BGWQol1zD%2BEniZv0Eu77rDGVvOT75R7KJB4Mrw7zcBTrROganQ3J3jjaMocX6lUs10D%2BoUkNdw%2BMQ5JckFIp%2FSNmcmkDcotK4al5srK3YrBw8ICOhKHEoxR3W4wytdky7i6sHoC6YxS68Bmr1QOTb3j8jlx70U2oZIwyZcqtLBCWYTg%2Bm9%2BW%2Fc89Gi2Nno%2B3vWY%2BGgqDmyqXvyxPHQ4nEAZqMWt%2FoKzb49xbtUH9ir0tt6rPrYR5yTiL7Of1KA8rIRSsTohESzzNsx%2FBcUjx2rDCoJESJh4r%2B4u4oN1UEkO6GMFFiNQX3dGD4Jk%2BCru7eHMp2tnFmnffhMvWgaxY62gXOweGFx4IkhyjSqab3V2bhQclgVqJYNyNClpEV5Map7mVCmpE38ZjQTmZs2gy65yREkWZ23035PI636XsihVPh95ZLTYWZ1tgYGv4B6I6wGTBbLRR%2B4BSnbfvfxCsij5BF75bVlRzFX6eh%2F0%2BIbUyTlOCPuz9AzEAuXNe%2FAXy2JXr3qStF0yby9xeedMjAp4hVouApZHEOPE5zorJfwCGbvVM1BGw4WWYyygFOy6u%2FaB3fuIDBjNBLEyykucwwcgUW%2Fq1uhMXg7zOFWHeIu4wkE8MJjng70GOqUBEJFY6ld7aY0bPDpsB9XWkRyDDazypwTq%2FurZ27J4dzg2NzW5BDrymAa4f7bBHfpXIS4CFvVRRhxOTtadI%2F0JBax%2F%2FX4RCIE1aBGVDAhJxZVr%2Bz9TtY2MgN0Jf5mmNzmKXD6mvRAdkvtUA0QjsgmNWhZsnKCiwNem0lT50wEdG3QO25bqJAFNW4222KeueDQ7iZ87vCbGKiOlm6G1lMMb3IYV6Ku3&X-Amz-Signature=9f077f1bc57c39ea0af703f0fb727a1a0c6f1aad24c89a7ecfba7365443216f5&X-Amz-SignedHeaders=host&x-id=GetObject)

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
