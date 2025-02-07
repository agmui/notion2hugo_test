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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SROBSYAY%2F20250207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250207T020905Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFAaCXVzLXdlc3QtMiJHMEUCIQCFzy%2FHD7YX0HEzRi0m2XXeqW8CTO2qo%2FFYXB1eGGF69wIgd0lf1RBlNYrFfaUuc9SItghbSurkLFdoj9j8cRwaqDkq%2FwMIaRAAGgw2Mzc0MjMxODM4MDUiDMnVRFG4NEYR%2FzhFSSrcA%2FbtpSQFdkTDVtPWOLQB%2BZFWYLY728jTgbyzDp371EizocjgW4v6FzllH03N6GD224efHyhpWi4Mpv%2FfVoMRYmYps1XOs9AWY4AxeNV1NT3kvSx8hlaP%2FasGCYLhcz0NpRhV9UtCi8MfuXlsHH1E9miWOida8zR9E8N6KRwJC9QdGiv%2FeYpyb%2BOWg5Dv68slr6Vy4F%2B1ooqn3DuR%2FATWRb02Qe3eDex3bAhIV2tJAP0iEPxcXMLlxHH6cMiprwg%2BZw3XO3nNXMWRjQfgrCzN8jaIjJ9buiciSbov6i3onMX956akB8e4wZvqNWruGyzhu4YCOaQXupRBiQBzhivblawAvGaMvujkJu%2BjUq8AWWZNv4O65PaK3ioWbSAWAYeNFLEoq43jkHIhMzwOWlVbTUAfiIEpjJpgNJnxfIu6O7hAqeQlq%2FpMF7fH2nSBL99MkW6q0qALYmi6klFloDZ6an1t4Zxy48ci4Gbhx3NzgjC88Ixxrv0ssqmaP%2BeN8cccaO27OJGaF48VzVUjwZJdkrcxVrvgvqWpdRQTE6xrffW4sKa4%2FHd%2BE78o%2B6A8byabQxHPj9%2Bj5N7np01Zbkrz4yZXh1rkvGZphnhhnvW0yr7EGTCJvzqXUdoIaiRtMLCblb0GOqUBzBo5ukA9ekU5qNIjWr6XszW7dewd9Rug1WJFlEW50Da3ydfvFVOVgzOn1C79OHA9LCwh9bPs051HFxVW4Q6V2n87buMAlNJk4lpeimucmOygBCdbJulLZltMGuBqFN2%2Bs2L1%2FKayLNbBlg6SIHO%2FuFUmfiPAbRB5m27lGuJ%2FVhwWGTyU7gBLGfE7feMYu%2Fxf2VjLXW%2FzKAt6jc9lIo9piDjv%2B10C&X-Amz-Signature=d2dbec6e52a979a116533035260f4bf490f33960f426624b0fdb1fe052abd0f8&X-Amz-SignedHeaders=host&x-id=GetObject)

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
