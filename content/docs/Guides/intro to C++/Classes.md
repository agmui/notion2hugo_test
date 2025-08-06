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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663VA25AC4%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T230923Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEcaCXVzLXdlc3QtMiJIMEYCIQDRDz9aBaN7b2i%2FW5jyDqN8qrb%2BKbgDZ1vqUWnV%2FyUY2QIhAKCSSCvUgxa6tu8jRtUFzWR5OrXMk95hJBqZ1TjrRyyiKogECID%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz7gZBiERT6rMI68hYq3AMaU5c%2BJ60MGm1eb0X6KBwA%2Bmw0QPNHSco16QN1KEoVk1CH%2BSIGBYi7r70vN3DUORBkYsac6jkQPy3ZekM7RT9xc6MBc9W%2FzhNhprTOF6K2Px89xQxWt4n1myHW4myg5Jq1NeaJgJXF4CWF0JC5v%2FOYQ2X0tfbPBR2O8ysSEAZchONZRVi3%2FGamx70wod%2B2twvE1mKaGOR6jhZ3PVg1GX9a532nSHwXeakhueVPDzraZJlEITrJnLUvu8iEKVv75XWQTYcE2LEBLyOspXHaTpjul48BaDhwIFX4g5DfVC%2FMOG12mRjyVCNPKX%2FeKjdHumUQTIX0M5%2FlYmmOm8dzp5zE3hgC4z%2FPxIwt%2BhsXK1gaXLOqVDYFKe8DD2TaoBUyAGDJmw1%2BSoV9prkyHUy79vNDwOwGL12zmPaqioXHndC6VYaDsGmphdZ5gg6PIntBDl5%2BAMhVhvr7wvd7A1GOSbJxy3qfg723EnhTHDcT%2BEU6e6gqOhb%2B%2BJ3ApangUHyDHq%2BXuz0mOQwEWnHFbu8GajbFAe1svjFP1MfHdfhOwZXDHwO%2BLCul%2FtbeIuQpq3dHEpfy8J2UaAnGzAAup%2FYzF43e0u2qYhH19QNOp9VuiVtAm7tdru8kMFXbVNxl%2BzDfs8%2FEBjqkAb1egnu90TJgqz4bA3tOaS6aZJRIkT5fqC9OmpyWQmo%2FspSfWIToXaHB6iqjFX4IGGMsjTNZrOwiCvsfsjnKmqLQ0aKJLafyQUtIpaYptbRLnJmY4Y0lGMUUvxscf3VGIk3Pa8R1fnSVm3JKCdHKcTapdn3g1CUHLQTvt%2FN6gn%2FhOC8gToEiG9522F3L5fcQT0dXfVZ%2F0Ic%2FRKC8eGoiZ93bzWm0&X-Amz-Signature=8db02a2d13b5dcbc3928f9f46dbdef23b3ef7389246e397eebe1bb3d44743a4b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
