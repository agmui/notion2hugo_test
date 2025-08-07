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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YU3GPLCN%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T110914Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFMaCXVzLXdlc3QtMiJGMEQCIFFku8doLpI38YrH3hRUh10RoJlUrGDZ4W5I1eCL1pxxAiBcr%2FYQT%2BGxSKO74bKVP2vM2xhiT4CxrouzHrZEenJ4bSqIBAiM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMHupbzQJWYD7sQ4ugKtwDWJ%2FpBlc5iCTZzpj5u9eMRaDxfiZpZA7rVRDWKn0I38PERiyk1MnjRW%2FoFZI6FUGMINYGfMB9TcFzqj1c6t%2F63n5AWwQ63%2BwFCHDTfd0SrKRg7%2FQ3CxWoepFJxNpqi4NIcXXzDKlVUCxz2vROohLok9rbO8wFarAz8DMhoE9%2BO5x1miupdRL6SBE2JwC3LF0yOB6bo0vKmIyQEtGJP6x81AyZoZTkSOWyNy9m7e1ZDHAXuSKYKJalrqlXfMyZsto5JBJkb%2FCfEQ9KRubsf821q%2BwjIf%2FaZ5%2FucY4vjHELO1EEdchUPMZo808xVozMqj2EUpeW3MgrsDtMYynFhAhRbd9fJKwOoEXe4Hv%2F2BssFRTO26PdmKaMyHGyT4rf%2FnYHRq4lWg5YvoUYc8ezqNyvEoHXkpVwpiU2OQ6S3T2sszJPq8ymzoC5e%2ByDeDVfS77sDHi080tsR73fNuDeMoOMdNRfZZ98sCT0MDFJzhmPeKwoVFmcgKmZn%2FXACc8Z5apJ9%2FTEhfBsNaMwNPAzsUBFeKRNVW0q9yH0Y5PYNTN4ZEGqV5oMJOdx4IeVg%2B6mNb9kS4juwGvUKLSMQYqtBRPQsDBSxT29145PXXOCjsRIJy%2B2G%2BmhuxhwSfK0LrQw4YfSxAY6pgF476M1ul6tF4EBpv%2BSgxrZu%2FvacfxSyqHP2fvvOUU9b91fGBqrX2vL387hsy3qEVI%2BPUFyCK2MQMbzj3w02%2B2o2Y6f8zUoKL2Qg20%2FnK4%2FziIblgjVKMGYQfY%2BsN0O3orU51E3uz2Ywktggg2G2KdjJq5KPAT7XOQiUOtAaLyHjj8h2rAabmUdpewwruIsxwpd665Oe87JN83bwAVwx%2FNqW5sFgOML&X-Amz-Signature=46c88be9811685a29d6998686b4895bcc84358e59daf5c12eaba8f3008ab3139&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
