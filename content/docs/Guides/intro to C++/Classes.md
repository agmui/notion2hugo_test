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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667YCYGYHA%2F20250706%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250706T090814Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJHMEUCIQCtBlY6MO%2FgfsYW5iNAX28JOz5pQljcua%2BAd2y2g7hUugIgUVaq4ssPdD8ArrDXs8RQWqhPiWVCpdiY4Sn7ZOFLU4Eq%2FwMIVxAAGgw2Mzc0MjMxODM4MDUiDG66xLNipNMZZLsLPyrcAw9C1iz%2Badnx4ANMoCrJWfj5UMuV8obAqyV%2BBYkoAANpwqfil8wxKb19QOnWYf1RAY2v0Ep6HV5WgjjglT182nZnYOy%2B6Z%2BSZTSQxw4TuKZOIr%2FrX%2Bli%2BckkHbilMDfCQvFYaGoOPdFfTNQYh7OaGHWDAB4wWG%2B8ZSXkum5LM4%2FE7w2zSaU5SfdHzUSEL8gtM5iDWpymO2rb4vHe%2FkKSEUXaj0tfeoL5HH0xvBVXcO7AKDejyvQc83ZiSaQKMSPWDal%2FhH5KGEHUyV5RBX6gKfQrLZDSxgTgiRYXxFY8QOp3ReoOCBjPHpLn39QauhnL3bgAy0q2O7W17%2FXuzN3%2BygZF5tInFcGrs3mEvDiA%2FWj6dyiRXSsvOngmrIVS5HTaSQhJKCCaKgVWFVvqVCiKK55u47EyketRgioGGtJDoFLYYMTx1IjoXSOxjIWQ2eY1G5xVrCx4se%2FCpQwxZ8hsDOITAaya70%2B5nvNFOh21jwKH0iP4g1a1nEASqyJHC7DfT0ctNIn%2Bt3pmpqposVGEwjhtnUE5p%2BZr0%2BAooPExwkJV1qokxr1liP4QInTooSKsBO3xap5yg%2B2xu%2F1RjpCjKTcUHlVIfrWRoBQs1JGr78QvOcJd2iej%2FhyHZ57%2FMK%2BqqMMGOqUBv4M0ZdGqSvyOM6MZ6AFFcz5P4tbYqqbE%2FbriVzQMfwHmjZJbHGHPCOGGMAFaR%2F3QtFaqyaXlj4kTOlZd4i%2FLJMzsBItEZiVWALgfDoYdwQzx4Qvfeb9MQT6sTUve3hMuKuPD4%2Bet9AxiV8t9o4C1HVYAGbeX1ogFOhe2W1GbnC9nH%2B2UrFPqC63rTDwodni5jmeVSx8GyzPRCWaXql4KaLwCoK6o&X-Amz-Signature=d891ae117c8bf093bda3df776afb17950b09452430ca4ef188baa320b90cac6c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
