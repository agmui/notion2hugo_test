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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QMGAZ3Q5%2F20250614%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250614T200829Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEwaCXVzLXdlc3QtMiJHMEUCIQCUzpYXHnOry18A1FwUCxNLeTuVIBeTiaeovco5hDCDlAIgcTXoN3jxek40pkD6q4DI%2BIft5fZMw%2Fq1rkJ6q3RMkWwq%2FwMINRAAGgw2Mzc0MjMxODM4MDUiDApdAHdfGZXmRkzNSSrcA75fNW1ilblT6Ev9ESubs6hip1dF%2FJZ143ouh1Oz90vOEUfZg6ETGVQXsX68THD%2BR1D3pMuCER7ZeWpn3%2FPBY%2FqBCMHJPsuixCKyWoycKooDlIn08%2B2X%2FmnXQcCuhcGFT3FQnkMpwUGn0wqaJelZXX0Qsno1HozuBxwIwt5npspn9tUcDRlfBSV%2Fp4OUsIjARJFwXQqi8KXawnObSYyc5RZQ60rCL%2Bu%2Fsoq6P7aiL%2B1Pohs57%2Bbahw2MbLA4R8%2BNCkXb1XqVqRYDQhPedh2mAILeKXp0Retpy4AJjMpuG4AhBhVaYMvhPrVllUejPWMRMioTQUs6jwQ6HTiHeyi8kNnCF7a46c5wJtwGhf4AP36cq%2FczYmKu3bjxbyFOdB%2BoFEUMJuNknHJczbxb5sr6k%2BMmcLnqrZUQoOtjyPPkhe0lTFCDLAlXPXWnjJ7nY46%2FVluEZxGAE1H22AgMq5OgBHWDXImrxMBzoZOV7VMRSBTx65ujffK2iiC%2Bvn4YLsUaaKTzUAS8%2FmiLUWEsZ0hlp0h5fWj8JwpvY83Nc7bWPTmpHiuTQqXSEA7Nf4hm7zuLgXQrINyiYHefycPSGSMtmLOrD%2FI0Ch8jHitqwT7%2Bqo8UllCmgOBr8ySYLABRMJ%2Bst8IGOqUB%2B2nK6SkVx5HmA1jnD%2BilJOSo2uJ1QS8SzfWDzMkURrhV3Wl2h0byWXAijJ%2FfnZmNhgmdFp9AdTQ8q5sz4lwXeaxM31PMOGeWIOmRYY%2BxHenPrscG9Eec3xQiyE%2BlKL7NB0876yBhOgR5Vi7G0%2F3pKZbBtueANqNojGLWo%2Bds3MeVxs7sMb7sXRKDjPMFwTMXFZUXPTWdnOvKWOzI2a%2BKbgvLhnlX&X-Amz-Signature=17edb25b3f9ba08f86d7f73e0782a3be6406094fae20763f11a5c4b513ed28b1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
