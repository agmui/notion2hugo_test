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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T6GKZXJG%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T101243Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAEaCXVzLXdlc3QtMiJHMEUCIQCgPK8ujV%2Flx4DUBP4qtaa6s%2F6GGWQv6rwtZQk%2BFvW4FwIgO1UoKFhJOIFFGnhM4DERvO10Ze8znW1AdLq2nEVeWTgq%2FwMIKhAAGgw2Mzc0MjMxODM4MDUiDMUtNwgvq22NjwwfkircA3Spv2hSlgciExb7f2vAHcqdMbP6nJF381Lj04R4FGOxgnsr5olirLvHLF4Yxnx4uxwP6V49b%2BnwZjn9e2vo2b8JE2ua%2BXHFMpYJY4WGPffBin%2FLPBey%2BoCtRA8uo5zwP4OfxEGkKVA6uprNfZSsCESiBZ68jIsczPopsPjTLKfPK5GCCHUZXyHsgiRV%2BxH0wxaMoLAZa18jI1fvUZ7PnVQ%2FRv1mYuGvEiC0pGm6Kg7YW3NAdIU3yHEDDybxInoBiRZih3KX7hluAtzuTuT1Kv9VFOuMkITsv6SJG1ozYSPR1eRNd1NMQ%2B6JeH1ZkV6c%2Fo9L9vreW9cllwCYjg01e0F6sLEXxcAInxEXUlxIKGA%2FayCbiziZV1FgAaGMKHI8XUAIYlermym5t1T4cl31fD7dRP5ZuRZCR91%2Ff75uK6lsv%2BFB8qxvyCbwaGZhpxx097alMky7Hw5U16nDgWg%2FT6ycglPjJm%2FgnwjK942FapbAzX42KO2NIAxk%2FFtFOjZ9cUONKCXt2N%2FPxv6fyRJnyAkM9DebyWY01rfpU5wvoPvwne%2FagpEY24VgbMaZWCVW0j2CyS%2BJ4ePV6hVtpK1X2EsHJeLMliqmqhvSGOcR2y7Uesz9mrtl9qniluvTMIrrh8QGOqUBC9PNB5cIG3flsrfjKsxEGTxAUeWKnNX3ATpissK%2FVh8usv7SSwincs0CeZve3ZkV1mj3U0KIKA4e%2BFNou4%2BeXjfQTT%2F8gIfurxMzVQPTDps5rqEFLroc6%2FR2XXHGqpINtKAlttphGqYrt%2FHiPsGVag9AlEPpRZfzYZS6STRXK8JVN5QsGyMNxlWdNtr%2BRR1egqNl%2BNimn7czF0bZDbbpTg6DXYbV&X-Amz-Signature=33c84c5eede57c948000adb1f88014bf0b8ee1a719e142f5122dd26b11d2b057&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
