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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SIELYKCM%2F20250718%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250718T081316Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHAaCXVzLXdlc3QtMiJHMEUCIDgFvrksOh0PjewyE2bHB%2B%2F8MS%2B6IZLxB1Cx89160RWZAiEAlAz7mhGC9GsmIsWiTq3XXbQrfuOeSQo5aF2gYdqT7OIqiAQIif%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLPFZX6yKeCo8kjknSrcA1P%2FjkSdjtXf7%2B2WLKzoqoIS%2BIpYGDHxo9BQLqJcetvRZri%2FZoEPyaYl4y9kPUVuEJ2fiM1pIqXVL9eBWekV6d%2FOjEOiu%2Fgibpzrv4igh5ezEq9PqyqzHUcqRqWqOZe10q2%2FI62R94FVdPkoD8U5CDDFtf5J2FsXklwhptO2MVPhkQCsyKkw8gZ%2BuLfdQFSQMWeY%2BQrcFOUAvcH93tltlIuJF58H7YYoOimSUwru0iFhizFUzIkXt1RXCoF3d4zoNGkPB8Ua1p14IIe8R%2FNVRJtsfmom%2FkX7hpWlEI78o%2F0amCHQIGUlEhIX6%2FcJcHPDaKJbTnbyZODg05D3d3qW%2Bi%2BrQV0DhJwdQfTJyJPBOP8HJZpPtoMNmaVREQb4oXg7sBIoaLaht5BxU17Hw1eDtI5uu5IBYHZvCeFIxHFEFOuLpyZVcHgy7kbK9Uo5H%2BKzTRJ2Xs9xi5aJUoO5WFpztZrp4nn21wjV1IxoCy%2BM46lP%2BLWkOYsU6PLFpGSPP4WLEwUc5a%2FuL7QHx3SKC7XhM1vYyF6yzGNNrXZqIR6G%2BNbKWfRiqKmgELka6xFfd9FWDhO%2F2gLtd89yXacTQcnH2LY9HGiLOege1Q7hX7U6AzmWXt0du9L1AdFNSvTCMNv858MGOqUB1Iu%2BNIC9J%2B4L%2FLx44QWM2ZQTAAqcwEhiV9UEVGhty2P1A2vLdDL5ucdKG7AZskVRiJ%2BSOHmUdEBJDVYE0xJiYDVncP9N9awVkOx8RwZxo0%2B9YGLvxmfQHUKb%2BLJSEStr7q%2FJwekswot%2B%2FRYnTDsnSId2Sc8XyDDKDgetXrAzzt%2Bhp09bWNJom3HyKOj3NOqQvpjHVtKt8rRWIh6oQ3ihGUrM2wU9&X-Amz-Signature=f95193796730f263e21723f39c2986be1789d4efdd0762651ff640f360fa5133&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
