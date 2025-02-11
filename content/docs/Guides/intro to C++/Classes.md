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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QKIEW7EU%2F20250211%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250211T110307Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICkz3tWQO%2FmcHlSKXAb%2FG4TMpUjGNZ0VsVmqGFUpmVzSAiEAkkWuE%2FqEwzE6D5zNk3EJ0avfho00FfFzUEnPlWSPehoqiAQI1P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDN%2B7T9RmvI6Gdov8UCrcAy4TrlvbXzQum0chpFv5wlIpAhYxfyxFI8NMwAFLNAYq%2Bm1bQNWG6yOBLtUgULyryvL2kU%2FIHvkqrRNorLpo8c5kLC8A4hifhH%2BKnXmujYLQpqIR6VcqP7OTodVuiL3cSiWJtCZA4H4JhjpYVYO4pYe6M%2Bh3E3xZJE%2BFdZe%2B8S2Y0WTv25hfvdRJOi%2Fue4ajRrW2Qijht5bGncKR%2BeLZDQexTJ%2BZOTGtdnigt513LX2FNB0swxrFzX6U%2F5qxbsZduzsfnn9PfPtmDYLWRKzNvduwdZq71zw4TJFqI9Qsr6DVceLOi93bzfZEi6B11qwUlGzQgNkY31LWOPSA3pZhcTzz4TCPjwqWiHafUKbRMiO4V6eX9TE4i2JD4EkB2nXI8mqn%2FRp2Dxf7oJSd8TVl3bMUVcaOu0pJpIueM%2FTNvW9O46x%2FiNRQfUBMo4XLAUrFPO9L4C69nh3xFz3DwjPL9Nc4gVuV1eJUaWj3dQvutaFivNpmNw%2FmjIhWff3jPGAZ6oPe3ZmW3yDsSV2Hr4chGh3rwLBvL4ofHKPqjvYmu0Uvh1etLmwLor1A9t8uGUOi2PyzF5bGhmFXVRz4cFQeA1USPyeNewfsJ1e7lCuecx%2FPw42vISZNTG2XZZIlML%2FSrL0GOqUByfGGlFDiG4dsH9bOscp9otCtsHKiH7nyizI1Tf3%2BpKRQzbeKHW%2F7xaRP2YCkM35Hg4zq2epF1Ou8KbHKGmKN81aUgam%2B415UCCBmAwnkUGEyXXxwlStFgtLGOEBrXYyEUbxqapgHgjqgMgV9PXhcUZyn6TkykDpDD%2FWAV2PxKov9E6b87KYCUWq0BLjnM8sRkYREH4pj3mXzMsZwApvkGpMXCF%2FM&X-Amz-Signature=752cd188dc841a9573dc57e42b2d494232951741d054c2f179f7321d4e30dae6&X-Amz-SignedHeaders=host&x-id=GetObject)

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
