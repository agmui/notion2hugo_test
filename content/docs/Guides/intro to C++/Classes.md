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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SXVWKKRS%2F20250224%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250224T041003Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEBITDHGjOwgPm8nzZSvP3iZpwdEh3oIqY187Auu7AAwAiARlY4z2CB8Ft3qxFg0t1z9ZKRsY%2FBbaEHuWfSX6K%2Ftvir%2FAwghEAAaDDYzNzQyMzE4MzgwNSIMWAui476jf%2BIUV2M8KtwDB32aGgfUS9ZQusOOExsnPFQDUIH09VepwPV15tcJfJXDEzrTk1KVl2v9N9JaNoybvXxMiCSbv%2BBk82q6Jf46Yt3uJFusvLpQ2Io%2BbHav6K57%2BF5fFomxqKsszTKz4zeKzyirp1N0seGgiDFVhuxpUMpnKtFThBowNFwKMNK0XPG%2FQM%2F1Xq%2BAoEaEDpFSmJyyWk3aQ2O0BvyS702mmjndRD314%2FYeiLx9G34Ur2d%2Bxo6RrzgpNePRT50G1LrN6V%2BUrgQ681hd1%2FOrkVmWOALS7N4xdXg6wmEp02tA8qWV5%2BamiGQjCMokWIKYLX%2FNUQJf6JjZOmfgdPnboRh9v3sdLCN72TgzdNTiq725HGiMlKVUKnHYb%2B%2FGEoD41oc8barlCZ1axlgEsx1NJNPZi87znst9BmPiv4pBn6eKNe9Muwi8Ajxgx2rQrYV7wzefyEHi7ARiMQUadVw6A%2Buj1S0F%2BitaIXgkZ5zuZ85jw6omiKTXmYNanLO%2FIKV49iASp7ZSkWoCeSPDoIebRWx40VFfSUv2BigGeLN7RWJEumskMLke5oUXtodLt2oI0svgwfVnjI83MWhVfvd99r70DM8Xal5y7A6ByKOcOFy1SuHYhZ1L7cVfNI2kXiSrHTUw%2BPHuvQY6pgFqjkKIzC%2B8RFLSTN9NOzxOBSuNUjA9dMW402NlRCndicdn%2Bzxuu0NL8ykGR3xc67HxnOGrw%2FGcH5wUWD79djWFQrkqXE74NobFYG2seyDOwfu90jO3BCyvDWk5MUqYTOgFJdt9%2BgEcwpoYVyDClLkiWw22MlTWmGOksN1bU1gjjQtk1Tjzrkr9CmqElIdpI2pLRN8HCEt24b63onHiKEtem8tfA674&X-Amz-Signature=9bc688ed54f7d2cd8e5e7255a42131e1c6339ad00e409d21bca599609755d20d&X-Amz-SignedHeaders=host&x-id=GetObject)

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
