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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZNIDOLND%2F20250206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250206T181018Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJGMEQCIFJgq6zx2GwtkJh7JLCHRsSuxxrm5E36u8hBdSaO1Q5RAiBU84EErkXyL51F7OhgcGntK%2FpxMk6wfhgSd598qC36Zyr%2FAwhiEAAaDDYzNzQyMzE4MzgwNSIM4j55SsExH88bMruiKtwDV%2FqdLWqPFOecnhXyWT%2FIig2UYI4cicPeRprEseOPDL34%2BUWgafTS3dyg47EotdeRcXngJFY4%2BJBUvC0LXx9qIELEFhGYTefj%2BI2CpjAEXZ20Vv9VZeVQz4ObKEYnIbYUIz4XoBXUvZgCCFPkVm%2Bc3c1zFMWTGKLVe2k6b2%2Fa1NhOIbdAwdLC9I98rKWllaQHP7Oo%2Fvfz2DJFeqOtj9AY%2Fo2%2BJt6QRSgTCUhHEnRcouGs%2F0kyPyvy8prPyNsN3U9YBENEPy0WX8VYC7p3FmfahfQKo8r62IsQYOg4CdVdl1ejvcp0incI1Hy5OYq50RkHpiYnLNt2zZB7Y7QQf6IIWq4dgmiB5fd2cMgHENkRip70qWFQCBBoUazDOcHvDNfvsI97EoR3gKHfS6Lf%2BZcIM%2B6Vm4bAfZwuTq%2B5YyF0nP6xKAwVHjqsgE6NoeiZTCHDolAwpMNCmYu%2B61GCaBNxf56Ds5TGFyIpSAiIo%2B5iqXZBnezMOQDxpRRF4uCVS%2BuKcxgUg%2BIr3i%2FoWQ3S1%2FDP3Bf85zqvI6EMh9J3bzZtaD9CFAhBEn395Gbsb4mTIcRveeKS5veyKZTE0rurp3wNHgrINIuN5mXrzVxJvfvNsQzzA4jqSN5Sl3ZqDgAwjtOTvQY6pgHxBsufajJMd%2Fz5N2vIWyxHCsu5mcReGtiuYqVzHoB3b5OIICDFCf%2F7BrHbzq%2BUXPqoayvWKAhG9GeSZmnYh%2BUMxQWy6elMKwTFE1VR7CMhWQhxKXwMCU8DLEzTP7NKOohg%2FsYFUxm6RCm9YBOA0n3oaEgj1%2FYiFCYPXkn%2FXfe088Vak4iANA9Ap5xjqMfonGR920RxOnAmPaf%2Bs%2F%2BMtlvRNDSvhWTK&X-Amz-Signature=e078dfd403a50a53e5723065ecb6274aa9357a09da98aed21b5067b452d465ac&X-Amz-SignedHeaders=host&x-id=GetObject)

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
