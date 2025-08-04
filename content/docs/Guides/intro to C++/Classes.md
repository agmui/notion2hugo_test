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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WZGDQEFJ%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T044707Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAUaCXVzLXdlc3QtMiJGMEQCIEkO5jFyc%2BsWmskmvWXymVgNAjTOt9sUhY9DPFk5bYm%2FAiAhsFhynIqPWUf3d4XE4IMiEaUkoTOTYKNzDuZBQSHcnir%2FAwg9EAAaDDYzNzQyMzE4MzgwNSIMxHSOffAYk4J7E7ILKtwDGm253Tje%2Bl%2FJq%2BLZvIR7QZCz0Jw%2B%2FNQ%2BG8LUTmmmXq1HhUlZ9xltphT90qah89HC%2B8aBqfMoeUKYhsBStWGGjsektqd8sQRtB9vkQM31OTN7K8u7ku4HKImWEx45nGqpHE0JaSfAxoStC2%2FrG28%2Binpjo2%2FZXcKfFVQw0Yy8ZK29nd4LR8NjdducHSpJJDCK6aNcwOfmqO%2FibAmmEshL5uXevfLZItStDOQEM%2F%2Ft3Jcubt%2F6aO2FpYa53PXt0ga%2FTcVVndHDzC%2BuawEcpSYaeMdu8gaA9Of8PV5xB9L3vPcRoMIxJ%2B12jofEKFKjE2kJs3RycNzlkFmWPiHehyXKHr30Mq09EVTumMhovvKWL07wxa95VZeZn%2By9bmYO%2F5ghPfoOwG3yb%2BBCJ4G4eq5ei5aqKpPKqg%2FOnp5ftapvPd37HPFzpyL39EpgMIsPkyuDqus3HSLgTVYD7mrta78xyLTZCLNtOdU9W9ltiFhMbicvjDHSCVHDtmgmbNqhdNRIazU2qUhSVXSv%2BDzDvSJkCN2sKaT4SdMjmKl%2F2IKs0zlmzfZP3iNDPxxqsHvmle9XT7FqrCxIWdeQMbu6JW6jrN3rzpN1tG1LYCmsRK0NgGNfFa9r23SPSsoJDUwwz%2BnAxAY6pgEdz3wjLozgmzwfNAy1DOQ4rijdqgT0II3fQXSLdYPc1xUvvrMJbgppD%2Fr56wYI%2FCmnKjLATaChid1Zf7W627ARruM9pMRpCBx%2B4KlU9nFOhkRSYdbpAqERfpJNouAcfVH5GB5ofBbFi5l3k6vgUeci5POlYlo%2FGoBXNP7Cv%2FdUaJfJn0Q9kGhPywJ%2FogOIvQnSd%2FaOCRzs2FzM6dCMqhr9TxqSbz2T&X-Amz-Signature=c7f2509ce87d4926b0a06da6f0adb4740909b52087c0ac281c758d9577915243&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
