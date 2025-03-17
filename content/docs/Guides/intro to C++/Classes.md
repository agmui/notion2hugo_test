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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RIN67OHM%2F20250317%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250317T081211Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDXD%2B6rzTn9VwX7%2FJXtmOles8D%2ByMexZ2uxq9UR56PiiQIgWbP0Wc9dmlmFoOcfy0PY9Ww%2F1vajp5LSM2i9Qwis5Vwq%2FwMIQRAAGgw2Mzc0MjMxODM4MDUiDKovAd9Vu3PoTHg7vSrcA%2Fg5AcD0FqqUdyYud29hM7rv2kQDDF8FfOdHAEgQ4zAX0i0Bjdo15JHRYb2bH0A1CrbqefN41vhB2oe%2FhLhR%2BbRfpNaDDE5XF7wwqbowvgzj1RmZPusOgzMzvsV%2BLi6bziha949jX2Q9HatEtk0aI7o2xLr4zKhinTMDtrx1J7XU16QXCxAYT%2F86oz%2FsVqUuB6GX9J52NetxMbZYy%2FpgQMBM2bnTLU1ueMAo3MeW7KiOfH%2FBTz%2FQzQVcL2Wq97u8Q2X2ww5TStPVGnoe%2BC7LL1mq02cPxXWaEOy92GLld565xhjclN%2F1dmmDJNspse20Ofvw%2FK7NID459SJcRAPzvqbTf5TigqWq0zP6bAd09m7mMI9bdtDIwYshddcAj4ryP7TneJs3fmde6HvpJzF9JF%2Fvhw%2FdEiGFy5pinOR57i8DJb0c2Gx1r9sZ6FVYfqGEnSIur%2BaUR78rStU4M7qakzi5GMxdKwjpwCbelNkrJ%2BYB3Y9Z%2F17IQnne7fT9ooRKFB1nqgfeVdhVYTNZfvfHcE9fiW3K9XSIDow5Dwvh%2BsOL66%2BJJ44JW39YHijcHrk5Rh3VMulySvfOG2fIQRlmE3y0V1deqNcAMweZGp8lpAeHK%2F09BgdlVCIBalOlMJaw374GOqUBL02RSIDE9XtC6GtfVsEEF0%2B2lMCz7vK9Q1LNXpzm20EDOsoZ7FbbVT5pN4s2hvnf5FtbUxJLhK4ezhbBCmohcLLPZfMG5DMx%2FR2PWu%2FCWifWV74u5f2gGK%2BOdpVpoAQpfoByCY3zTXfLiL4IxC%2F6N%2BRDIAb24RDVY4g5K%2BDKm8MmAHp9joX6TxQp3lgmASzCVdfuvH2fnyTcBNSgD8XqImxyBbNq&X-Amz-Signature=1dad73d03a1f43342b510cf22a6e274376c46906acb8215bf80b74ae5e6107f6&X-Amz-SignedHeaders=host&x-id=GetObject)

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
