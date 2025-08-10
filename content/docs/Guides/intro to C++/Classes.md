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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RWWG7APX%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T051454Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICfQuUyYB3xTO0I4Wzq%2FRs9ye3iCzapdlgrDvI4Fn4nSAiEAzKv6Jh9Xo0v8aJJlmxEp1ECf04TZ67uQTarmp8spiiIqiAQIzv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIaZ6T7Xq5HkwhRLtSrcA%2FYR%2FOCawcOQCiQHinpGlwWI01Nmu1UsG6mA7RhLxhNHbmYg2X%2FReSCvAKJtf9e7u%2F6W0WKWoQ2Mu8m51ADv9n1y0RIGkKm0O4NbRHS2m7sZV9zXd%2F7CuINBrZuMWlINUn%2F8Ghngx3QVcLbaOxYKv3%2BkqyBs9zu9l4Ai3hEWw%2BoCeIL8u%2BoDqF3DFjoS3LBsqQNrRNxaSr336eQPP6OdgGdng88w23w%2BIZ5LEXPOu2awPN2MIemuKyzsXtcpja6%2FsAiR%2BRKKJ00wDA0NjjiuzHuoJIQoSDMp7LHKlZl9NZ2mEL6NfW1Gl5hxKY0yRDsT6DzkkenxIJsD0o1dE09iDVt9gAjIy9eapUyehXymoeH%2BA5QgW98YCpU3Te8RN29g77lJ7yer2W1VTssf2lg2TGmi6Flj7nDXc1LdGHvLKADkGcTiRhQg5NLpVRFIvvmO0zw7jCVL8x4FAumEZignfY9TwoFwV48m14MC29xuv9wK6SS876zN5dy4Rk2%2BAmlc1rjfHDj3T5gNL0RsILrHGmhJYYrAeJFjOF6Iinj4BX85Kr9ikr35I4lU6lgajlKOjqD6%2FA4CSHjWceThRb6NbPY6YdDCqya8SPt4MzoHP7ULCN17sdekFgvRtsuBMLXR4MQGOqUBU2kI9uKgcF1gwK89ZjYjxxMeFrZr4L7%2FoUd%2FuRCDIZ8RKK5kQzHydo3ceWxBU3w160Pt7FjHMDeVHBkhsYZVPEbPgcKyGItdauggS7vtVBXdBmkAvDPHqB7pK2sJhMqFB9PAwnkF3sB2oaWT83Rl%2BHRwrqM204h%2FnKC6h3xuGFmreniPlO3FpH7Ey5Cim4SNSIomuYFUT7cFO2GCOKZRNItuRbIn&X-Amz-Signature=e2875767dd898238beaec7e8d30e181491ba9660dfbda0cfc5d44f36f5809fd9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
