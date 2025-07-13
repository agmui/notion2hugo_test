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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662IPED4EV%2F20250713%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250713T035451Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHn7eI5%2B2cgnLp%2BHUZaRg8qioyPU1MbjimLZrTNoizWlAiEA6ay91Ws%2BHiLDgJe3r76q6VjVIrgJFDztSab1MYfaDvAqiAQI%2Ff%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBq64UuJUyMLYn%2FLDSrcA3kYl5maIlsmLE1KOoCPV%2FYoe9V44M940jTRlQWevRmnm2uRUBF79V3FBueghVDM1lCaflSOyMl6rONjKeeTnOzl07ioeBkoGm%2F%2F3qFTy%2F51vMzNfLziQr1JILk5ITTTnIgLklwKwaa9L3guUu6p%2F4%2BsVdrbMRUF%2FEdi07f2KrobMU4ZXZjY5nMBFLcfmZ6nbLxMsR2zSN1RjpM8QQhC0OI5m1sCI26lJMr%2BcHjBoRxQlZIcfzSHFAJLhUVgZPd%2B7j%2FDVSsmG6paszg3ez9ekJHXhl%2BC%2F8bnWc2Ck0XqyBw3eJH0Ofv%2BnPOCrLS5%2Fq0xBYs9vAy0j0Msd0NuZTI%2FdhM43l2kCKPHZ72uWmRUTA0leO4oSOdKvZWUWO3jwO84VpBiDImbbXsrgc3UOqUIpJMk%2B98VvhvU8aSCAUeXrHS6TbRQHi%2F3abnLMrAdf8HHM6aTUw%2FQuwxd9hVneqcNeIey8hTpxmmzWvnMxs1f7gsg%2BeLsRxoCRDT0BxR5AQqQRCGO0MyWKlnSdIFmw%2F32j6G1MaISDiMKnfh2H03zR9ehpQGfMdScx0VmcasDDzlh9zBjrbQzgyvQOnPmq8GlJeKfdBYEnBx%2BSq2nFwsj%2FA9Bc1MQXq%2Bn6MvNlNB%2BMK7ZzMMGOqUBEnmsFdE7k2HiFfZxhno07BIq1FBgyOgTe%2Bi7WgUYosrML1z00OM5dSFVi62c4%2BkWuU7Gl%2F%2Bu0zj2K0Z4A%2Bv%2BNSj5FXPRbWePeWDpsBycAHOnY7EeUUIWkuYBGjrOnsdM0%2BFMR3joybfJ3%2FYf13VUBK01tbG8BbAR8xDDJBtbNUuOo78PotEp%2FBebyl6YbN4JiDhrswaU2XMBPSoiO8KiLHjk%2Fu27&X-Amz-Signature=a57dba483a0bbeb9b7672e5b3cfc748802894551deb51bffd9800a49842aee7a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
