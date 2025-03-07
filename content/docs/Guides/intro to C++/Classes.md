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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UQERG7G2%2F20250307%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250307T210103Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAQaCXVzLXdlc3QtMiJGMEQCIEr3sMfYRSQPwZsXnI9bt%2F7PcQa8h19Rvxe%2FYKSq6kN9AiBXkqllkIq6cf%2Fso4kRMCUxJCTh9LV4fcrCuFJ2Xqu2Syr%2FAwhNEAAaDDYzNzQyMzE4MzgwNSIMZb3iCY4U5J2s%2B2biKtwDC2pWg5ns3qwcvxOES%2Fo5f%2FssVO0kMwYkRatXmK5TUic1N5S4ZpERDmHCouZEu2DIlmIl3FTctw9ImE0UPUhSVRVTUbrSjcHQI3iAL2jcOpoTIEooktvCtfJXsoyOusyEBc7A0U54Y7lLZsdRoaS6DavlQ%2BA5L8fjuftACXwhSmVgNRCrbiO640ooRUdsoWuo879VRTiStXnoJho06uPTSCAgFjIG3Mrn1kHzaw2qFczHxpKK8936XE%2B3dcywKAYCMlM3lE5VCY6HES7LWGjCH2RzikdlFNLJyuO%2FEaGWRTemEvHNnrCCGq85a1UgMOd7agRS1z2tCqbUMAeJRGM1Z3cpURLbfZAeD1G7zT50KRmRw%2BMtITjqJx%2Br6bBAFxOwA0WPyNJ35F6qyNf0w%2BcNM4%2FQIlDX8eOSYc5%2BhlsTtMCtdklGRmntMwPJKiwYiwwtxOW%2FKDKuf4PmwaOhHzeLEzW3S%2BFDGCZQ6urD4YCzPtzQL1QWskiBK11QC%2FtQv323zqUAqkBV7Lbs6yhlxrAyDhh5jEKmP%2FvK1AYqJ5PCN8ix4PgzWU7vw%2BGgyIufo7r0jRM1dtqTcBZXbX%2BSUkXSxrr5Ux%2BEUs%2Fhh9i5ToiEYg6MW5%2B5eyp42YyGEQgw7p%2BtvgY6pgHoTtlgNVEmxOtJznYfdTFEMofxUaqToQqo0MqbBnmRamL6%2BxuylbxEiQCWs%2BlEpbV1TEHd%2B4y2JJ%2BkpC1xe%2FPNAQgTJBg5J0cphiRLgv2g8OewDWtSzI1aOQgAvEPocHWZ7mwqNNLeyLeGIZfzp79M44b945DxijzZp0st6BGOBmewmRmxfDEpV8pTYniPkIAAipxA7QVbQ20j6EcCy4WZFI%2FDRg%2FK&X-Amz-Signature=730f69d7615599a8f4e174be5bc79a0f26d65c624b75cac01a3bc1a5a860c9e3&X-Amz-SignedHeaders=host&x-id=GetObject)

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
