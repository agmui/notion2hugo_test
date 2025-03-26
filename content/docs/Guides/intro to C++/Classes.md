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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UNZRTRYE%2F20250326%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250326T061143Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEHPl3puDSvnUV1RAKbXC3EudHQkCY3btAVqYwd7OV6BAiBmqtZgnEFtw8rMMQ7jqj4obE8u%2F6MqBdDZI6QxWkvUxSr%2FAwgnEAAaDDYzNzQyMzE4MzgwNSIM40eL10znRMyZ0goCKtwDrD3K9mhx%2FzqQn0WdGgJNBukZ5KPXaklBwud%2FGVrLVKQc3MClLLqkAZlDiYB02ukqPvtYOz3qV6b4TkkA%2BMmsHVOsYv0hKoCOhnuRz5xN3d6Dd9LfLYTgclbPXhij36ORbq%2B0Ji1HntbxoNT0EcOYGqOxISaWm57PgrMvtRvcu7lQp1pVHp%2F7uW2UtCuW9T6VraPIt1IVXQAodmjNyya%2FpWS2zv8rK37Bn6Ao7MFczJXbSYRocoEZMAchwN0e3u%2BGpwqm8AFfw7aTIshf53YPdlbWDriGSEY0SY2vvTR1C26zE1kSsENLHjMKgOhwasTaTOUuJeryINUwLPRrWPfBu6hPj76kxiHtJ%2FNdS8yOvEiSA9inmSV%2Fpu5TvLCmPzmZ4vbS%2BR27FbA%2BdvZy7rn%2Bl15cM5tOkJqmz3gZl5hzp%2BtzCAm%2BWEMiSPCP1IzT2UjutjLf%2F9GHx0oZ2BjEGk2xYHHpejn%2F%2FMyxnZm8vfIFIV%2Be0G7Hkc1o5Sa8ysU8BW1G5UIb997%2FwaJ7t%2BtLYZf%2FcJ1MMm%2FXpExbU55TtN8QwbA%2FP4d%2F%2BcMw3numBzve1Dsbniu78GqF218iy4LJQdcgJJBg267tBVzOIFUDA5yq8Jx5zvevDU55CRQ%2Fqogw3a2OvwY6pgEyEuY2UbLt00MGUmxWs8a5No1MfDtpx5PcvFoW%2BDSenCqlvD6tSeP0I5DhY8hxr6qF2iQA3jaeiVdY7q2UewxPoIaE6elUMZ%2F20erhUeY2%2BLMrUUnYrXQPFQOcBsOYvqgicFipUfk5sCh0wrC7z0lCWYDn53AcLxcmPdRwDoR5nFPMUP%2B5dGsK7iJdFb%2B5RO0r2snplaEAwKlOxeHaYLxDnh8MIxVu&X-Amz-Signature=b7b2d95b7c4c3b39db59fcc4959f713d873d1aa12b1d85558ac457086ae1494e&X-Amz-SignedHeaders=host&x-id=GetObject)

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
