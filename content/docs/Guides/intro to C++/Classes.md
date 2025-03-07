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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665EPTZZEI%2F20250307%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250307T061127Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC2H7mhmfRke4ZXllHZ0wbo4LjSdmZEYlOCucIaEcloywIhANXqiUzXRgfmwJyJGHMkUJHfQ%2B8wCWLy%2FOn9dpwmXSEWKv8DCD8QABoMNjM3NDIzMTgzODA1IgxpddSw0cAK1F6J3ukq3AOmScZe8fzL1rPg8YtWlaK92%2Bw%2BI5aCpycdxwfcy%2Fcz07BITUYHTAhMzdAXqAvWMdGQYcpnGYAPKvrPbFJ7HomQhjw%2BitMf79N5iA%2Fgf0obQXPJ35pWaCDRad%2FDDZMc4xbxfu1vilOTxIQjOzMfVRIJLDYkY07EV19cIPlNqzuhrEmqIJG8Qldfee1mDrGn%2F%2FNrZdvpqI3fR%2F%2FV4rx5CWI0e7AYTq3Sx2aN7JD4mKjXB3vbnWFgcJmbEpWYFT5vdzKuNAQT3xoQZgXWflBHetcnCzsU6iEqH%2FnXxNsWFNr4aYkEabC76cPzJ4PFeTGif32LXPOga54Ia7RvylmqocMpJ2GFL48YmeDyoHOeMM45gpekZ6R%2F2fntQDxnO%2BFXtTNDrYMu69qLhPWItjsryhQ2dQP24m%2BWu%2FV8Pw3L3r9cBS9Dh13JdvgDVmC84I%2BXQftsAJ3ifXRlfAo85UtsZpnkE%2Fq6K3t9GNEA39%2F%2BTkgILr1ShwbXmQx1DGZQDYH3e%2F0qAe6m%2F%2F30fhGlQR65uaIVnUBOAMqUEXFFNz%2FRu3s%2B%2BF915Y04DXQYxpmSnew2Od6dkwkgbUwmB01mqrDZcyPWFoAx1XeBxsMViTh7Ha3jf229VeyMVUAN9udJ2TC4h6q%2BBjqkAVaqgUpdeaHE32d5ikvejEX3TMMaiA4gu2x3HPWHV5UPVDj%2B5caOSmL%2B1xhaTx1oYhW6OyaRB6cKrBRTOapjlUdMumoJeJJiicVaZrdYDCYNOqZ1kDLmCwY%2FicRReqL%2Fz3inplOkmOI%2FBL%2FmTsw5jQYzFHe2vc38kjd1pt0PpyQRXMHsGSHyE%2FS9tygsXuZPxRiCrTp26Q0oojx3SE7JeIe86HGz&X-Amz-Signature=30be8ae093af86ff0797ad0bbcfb7391afcb70c059b860197a782166fbf6da64&X-Amz-SignedHeaders=host&x-id=GetObject)

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
