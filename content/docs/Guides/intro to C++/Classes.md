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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664HOO76JY%2F20250301%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250301T140137Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJIMEYCIQCKF8tifEmhyE74WOoV6R6Cih2guZSDAnVr14UXDgBxawIhAKUrGqdQbIy3R4UOdRwfUq9PZVqCtj4%2B7epjVSY%2F5Ms2KogECKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igxm%2F%2FBc67IcQhaoZdMq3AOE7cSnYoRtPELhjQV1CtNV1ubSmHsmTUbwB8Rn8bVxvGF8UxtFZdCHN0yRpQFTp%2F3eNbxhBrcTC3w1fZRaopzd2VMY7oVfDEFd4ItumWO3aKbZD3AXNYGB%2BVRfuyuAtmsU25Vi%2BBY141IklDFnrnjcsn%2BqZukGsoTiD1AKyaClUanQqzRxSEUWJ7Rv%2FJCU7Y9vqHMaeGqHsXbAz%2Fb9cKlqzoea%2F8GRSVNFOhvUffioTXGygEAD1rCzIVcldYfvBQzAHN4p8PueYMVNdpazFkV01l1OtZOxxsX55RWEHnB9myG96K%2F6P5jKv5O629L%2FX9BWDpi4BEGdRkOaRoDE8blwXx7wROALi9ELj7NC9SiAN6rX2WKSN1D8V766tOo6ikcGbw78JBT1SWmwFmYypwYYxgvBr7KiqgOkIXUSieXuAyeQf384gMvVAN%2B7JAoHm9L75kipv5sX2s5a%2FLW%2BcRpmRBdNN%2F3%2BfDCvgL4oypRhg050jp%2B7Z%2FY67TVzih8OYwajjAUvIwMUtIZI8%2BPQJ8y%2F767K17jibZVaVYUipmanpXo5SVUvsCR6GgYELCsyluOrN%2Br1ooKbo9WJHF6GSGOU%2FAbnWM8AkAGZ9AGC5huGKs8SuhfqJwl4OiT4azDhlYy%2BBjqkAeq%2F2XrZwQv31mKUyayyiwdLijZR%2FOkNQJIlda%2FvYorfMkqft1QM0QzW8vFSMgYUj8xrSM7C6HHf8lP87W17WgNeIb2Lii3rW%2Bg3MDeT6Gbt9jaRf5wQEl1qreFvtabLTXQm91B6JxhspRKnBYmUSrHL9kcpaq7zQ%2BaYT8G6P2dIYgJAN7%2FLACgUThOa%2BqCRjhK7HKGVrl4EeuPmEl4%2BbD3f4cN%2B&X-Amz-Signature=b508e4413e93244da5d3931c5f002e46757a4d8c5b0cba1a698002124e6e1a8f&X-Amz-SignedHeaders=host&x-id=GetObject)

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
