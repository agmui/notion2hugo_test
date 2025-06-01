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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46667A4UB3Z%2F20250601%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250601T131826Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAwaCXVzLXdlc3QtMiJHMEUCIDzDNk7EKbevrYId2fq25ARj0EvdMRhqnWQckVLgz4QsAiEA0ZR4jR9EuUfpVQdVOWNh3B0BXbRzmFMPb0001hohIGIqiAQI1f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGT2CSYWG3ruPPx7TCrcA8RIlPZOC9TZJOf0nLNamHVzqAVhPjiTg9Ulng2oI88P%2BGZ6T6O0MfBvo52t3hGpNoqpPMTLVkMg%2FA22yFGxDObLaJUg41d62fk7RXJbGv8PdBi0gbe6PIkxCdK0naHte%2BUza%2BXWUQwq8Bays%2FmnJ0eNB1k4Ol91ORQUftaA0EGl4qPfueTAZjaG4qpOsiaJKbSF3Uzud1vbzxFAciOVwTn%2BUNiK8e19ctKOMfd6mJRrkpFbnAKMKj9zYbIy%2B5ObuT%2F52dPLSG3Ms7FN%2FH1lcCuk5dVziyu0WrKeBgksbOivH0OeRht8lB4Cs9rklUD%2BHQVmlDX90CDn2rAmJzF%2FjzOmpL1yBdO5CW%2BwD%2F860dT45d3T0PGm2vUlmIHJZFyBg2mQjXzW6zb5mIWchHFeIH66JJpHQrF4wwbKv1PLUbcBOkq4%2FDdC%2FDycuxdjaQREQ4OepK1hyna1PmDPf6Fuzc7kTew7uryRcjgKMRy2wdAOoh%2B1UMJU6JfMXfFJQoh8SwVoPPVR7pyTtqVKkT5%2BJv67ZkFCMkNx0TocJ5UydzFQGZdI6vtLcrymVCJDhB9jN9ym3cS8TMmhFn64RoSXqaWXdBMUif1mbEDXQXrcwBvM5eBNj6yrXQE%2FJmN2MLn%2B8MEGOqUB%2Fu0tqqIo4AmwEzc%2BFqAeWa06CD%2BypvtQvShlYQhhV9roTh7G2QMb8JXI9gxR6MHTExEqbsvHAAcpH1oNi2i%2BwHhdN%2FmfLDzaf4vh4Ip2sY3BB5mf7Q%2F1EiMRWaIyUX28q8tyzFNZ3tFVRnljqzwtstCl7jDBQs6sFpT6yOhjjNO3eF43arRjEjUWsgOWaEjLMgEu6%2BRvfc3D4k9t9Y3i7iA6BF17&X-Amz-Signature=9a526edd78bc10bc5d3327b98eb43f998deb6aa93ae2b1e1bc1863332e0c4a8d&X-Amz-SignedHeaders=host&x-id=GetObject)

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
