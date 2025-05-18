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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666NJCXT6B%2F20250518%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250518T150709Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJFMEMCIBY3RZvv%2Bjw2gB87%2BODd9vHUVuE%2Bf4n4rZkcyKEdWCOqAh9IbDTpH6%2B%2Fn%2B%2F3%2BEpP72Bfiyeo2BH0VXgLqYePUQB6Kv8DCHUQABoMNjM3NDIzMTgzODA1IgyqhwaVoX5XHR6Bn6Uq3APen0FkMgGmh3044rx%2BMXdSVkwzA%2BJB9Vr3RLjrcApTnh8D4mcDVRJeKZwr98AeQR7ue3y5lYHBXjBpeXSHenKHy7YIuxARBDuHMvEqvr3uEsAtzKekqydOlu2idUQ1CdloZHu1nTrJdJKqwWZZSPvBCy4LYRbmGAum2%2FeiNPN5c2%2FskZI4nJ6Ce%2FgrfFIehkMULVbXq1H%2F7UCt6u%2BUY8C9u26cgH%2FqunKBFykFKPhboo7MQhvhd6wDNGIkHU4bGEC2TtegHuTNBjEwaXiLOY2RlwSDaQ%2FemrVflTgwSvyYWIsZw1dt23DEJQ2mFXriSE29KQOP8%2FRWPsHDlCisqHU6mN9DyVPb4d8bzJJf9tyltSNY5oo2pHayj%2Fg5Or0TebTt%2BFlG8B68ZKbNhVCatpCugEahKiImAwfS7HUGBrGy19r6XzX2pCzfz6iGg8ogueIKnJpJvlh05OxO7HfwCxOsyhKAHokvrYp5KbJpYmiYsYj09SL7pa0xM%2BFzR5jm4%2FvYXmBwNii%2FmsmbM2qHnE%2FycXn1pCBftKLER8gNETambBWQ%2B%2B2%2FRP36OTUv58xpZ5VYCmWOLNTEZSTTEG2Zfm9KNEsfZbB7DE8NtF23fVxJvrMOSxlUfHXjNpaI%2BjCRj6fBBjqnAezj5vOKBhoiE6eOvxlH5a2v7GkH4yClbGTH%2F7dPHZvhMfIbKsMfvSZ0Z%2Bh0vhuwuY5jmpFOV0ped%2BdcSfZ6qL9pEO3SQ%2Ba9lLPh7HgT6eYNq%2BiZIZs%2BxRTNxqdrjTj23cWd1DdE7uov2nOj74YvfBFtPUYAU8c5ClW05PkabsyYhsR8EMCtprE%2BgsQOUS1KcpegT6t4%2F6wTvpwJsQhWaAM4SiSt6Et9&X-Amz-Signature=170b1f5f76a9df6c31463e7747ce3601ee4412446bbdb77b70fe6695a7427352&X-Amz-SignedHeaders=host&x-id=GetObject)

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
