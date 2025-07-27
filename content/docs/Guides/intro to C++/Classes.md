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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UIPMEHYN%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T150816Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJGMEQCIDnr1W17iu3dLXNa3Lt7GCKHkq2pT0SkqOw9ZlYQ2QhhAiBwGUjzX6t7fH%2FqOA3mKCtDTMKfUVdYgEAilTg6TbbXPCr%2FAwh4EAAaDDYzNzQyMzE4MzgwNSIMGclqLSCpEPOm811fKtwDukCOJP3BWV9ItWH7r2ebCWeQ9v1Oi3vcvpQGU%2FLV3XUIPWE34pmhOdKCId5162siaVLNLNeYnm6VqOCetzusC0Pvqxuy4%2B3fqgQ10%2BxNmeL3kNtyOYneyKsh1SqYNLFzqe3XYTtOYKCEg%2BgU%2Bu0TiBqYhla2aE2mlCQVWB5CDcuR2DLdshJP34ollAz%2FAj6mCVZITv9WVfqBZOQpuGpqkJ9GoRdfKaiwyPoRD32CQHNDNt1lNweAy16NJdbV0Lqbo14ffHxEabdwbw9glVlwX8MDhIYr2SsAwrWi7bTrBomkfhfJlfgpSMlVr8gK8jsfBlYwzm1W1iVbaDA%2F9B%2FszSn31AHgLLAelMhY3Nia%2F%2Fx4Nq60HFaNjvgNtVkUmirtHqVGbfYbXBaunrLVBx9sTPJLuSrg0VolaJyjySXvL6aBAgt574TxJ%2FbLDWLp1VOy4GjU736FKXciJM0LGYbGANtmXtqiLYlB9mduuntDbHjU9RDpK5f5jRp1IEGdEOVKVAB0RdF2kvDDPoZqOKyNwnUnF2qK0FcH4DFsy6%2FpgIH54XWjvDHFnLEYTkPr9ys6DvyaEzi8hse966f8y3MeKRlW8pP9%2FpeeGH9x744%2Fddh8PCmEX7i1yrlfmEcw2v2YxAY6pgE9pekVTNyK6oCynBITVs%2FXgtn1S3GPBPyIcnRdxDeTuvfAVdQGa9w%2FxiVl9PfheM7cI%2Fd4mgQRE5hgQhGQK5g4vAKs3EUN%2Bew2J%2BN8jF6ODoFglfWJareXuhdNDwPG9nnq0tQwv5eguXl5n8k2dBqhzW%2BSAGdCEX%2F3mYhPFtktpzcqNqatM0HTsT0MpPS3iOOb2l7U%2BTcJI5fpzBiR2XC79hP2mhaY&X-Amz-Signature=a0a83ecced600b9947fac539381dc56ba3cfc48b34f9ee8bdd9c3ce84a14db19&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
