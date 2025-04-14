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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UY2YIZE2%2F20250414%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250414T161017Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHXmKiapl%2F4eloJ7pdqLd2hWCr3Lhnjuep8Dm5j2JCJ4AiEA6O%2FsNsbp6Tatdu6uMXJyxnrkzfpEKlC5VOoufa9vMK8q%2FwMIGRAAGgw2Mzc0MjMxODM4MDUiDKTdIB8FdCPx%2FFLxmCrcA1rn7an8RBLo1%2F1o5gmErQ18AR3ejEwy0Fa5rnZBA9yh%2B%2FQafbETcpmfJdN6RYpp559pTwfM1vhQd8bNY0WeTB2yCJYcV5AC1anHL9SSQSUvk42JXiIYQNWqooodqRajUvdw%2Bb5ViW6aDL8HgMUglpggGDw8jY9V7iQt57U%2BUdmq6BtFAU6wdYqAcWXJPil8MupA%2B%2FhsqQiETY%2Fraxch9fwcuF7T6vYFYm4Yk8F%2BO9ff4sBZAohKtvXz74a9f6VOALaZfPv9glAW7xDsGfMkllrHOiXCn7tLyOFEU1dn33gWBDhR8xCq53pwHK1rV8IECJ0Yj4aqU6Mo9lrE1mwhAQ7iy1emyfjH4PJwxzAngl4y1UI7HAKQL0d9%2FMnMSXD2C0MFsfmKutqzYq2MGNNSfhSSGObq9f6XaTRLwm%2Fde3MG48IM5VTEtMFXiGmec%2FsgT%2FIp3aCPwPo7LcFbvK6AfjgOXSL3tF0hm7iSY4U8KrbWo9Fg21qDNXmmCOhxKhHyEOigbzrAha2sYo%2FwbXBg5zbAgMmvrNBXAfL9DCfjbZ3lZ0ZmXg62rLLweNXnCuCGYbdWi0mVGLTivI6eBeqpxkowdkDSaY4g2786Tf811mY18KIY0%2BvECiSmR6hiMJHd9L8GOqUByb8qOQOHKXUsl1b3cQu44HBDDUCR5A0PgX3Nw2Lt25dWrE3YT7mWSLNniVDAEy5cbg7ULkj2CaV3HaW3xnBNYFUH%2FKmkwf1HoGwNJo5vLnaURVPzmKHDWhSVM6OeEtA1IPpNs%2BgneDceyBjHZ5NrC3OWzlHjezVkpRtHh8ODozg0ll57454lfJO3KjEtdcZIoCYqc0Mp8EwS5%2Fa6LUrWV9W6pyMd&X-Amz-Signature=32e2688f03e9c3ea5997f17a59bf6434a0c1168b55c4b29092954541458d8806&X-Amz-SignedHeaders=host&x-id=GetObject)

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
