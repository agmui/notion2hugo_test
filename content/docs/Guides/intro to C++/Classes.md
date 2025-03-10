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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667GCGAVXW%2F20250310%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250310T140822Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEUaCXVzLXdlc3QtMiJHMEUCIACVDL%2B7droWAzc9ZsTG6qoKHDzbcoFN6ufK98UwYZBtAiEA8cRAEKUncyelRSY6qFXBmG6KARHMNmE3737K53YgxqEqiAQIjv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCLSY2CtO0zZ13vL%2FCrcAzTnA8gU0yinpAYWMEgkDnSMlzChNG%2FG2KUT6IApTjLAlxJ8d9B26SaOEXPdqp%2FNT%2Fc%2FlDulXGAsVjuhNRfn0j1NiQFCvyh%2FVgl1lEAZHmpha0VqJ7EfJ%2BNepcSv49GYQwki%2FDP8j9JXwilbT6kzslIaPmupSUdQi2xlzJhj3OhDPEPEEzcVWomlKKVzD11vxAlR3hsvw%2Bp5967mc9eKRFLM7E7kUa1sSuFe5%2BNwmsySn7tQInYSc%2B8tHiMPywOwaM2p3VcwVN3VA8d%2FgS5oNn0MUldjLS%2FlaaeLWQWzAubUW6DBfE1Yz1wiqtnFEHAofFvR%2BrBbFkcq8XoqlB2%2BuzBe9UGW8uY6p9es3EH%2BMb4g2OXSNAZdZXkAo%2BDiwW%2F85AmGcoOQTMmGxbCJp6PA2uOAXDW4iMQuRLX4rPQqOG8ukHKbXHXnp9G4nkKwEG7fGPDn0DYWhaTvekVWrUQ4WVlFTvRLKGbEEPvJaWwOmG%2FWP1iuiYxJ2BbG4ZIWvVRZjgxeEh5AB2NP0DB0jEGqOnRbFTuZ5rDb4ASmvvVc5ok9mlHLVtVd68GBlJ6MEVLIJTMHxCfXBR03aMH2P1wC8HjJqYTsyC2XFdAsb5XHHCs8%2Fck8LKB1lGsnr79oMNLKu74GOqUB0xS8KdTCeeye9QvBHmBLbPhuHPtsDdqY56%2FmTDDGdh3xh%2BwTwdd48g3WXZFJgZoiKdPYsS%2BmDxy0sbY8lU84PMlVPxCdg176bS2hPm7NOykBBYdIt8NOyW%2B%2B0M60FLxGf%2F4S%2BNvUZZVAmY6NzJJp1QQlNHmXmRekU%2Fg98TN2hfTMJHDNf9WTaJ2R6ZhtKftY3FMxycx%2B83QClNHFtYMrdcwgtLYK&X-Amz-Signature=e18c94831507a875268dd484bedabbf8d3aed4e4b516a94ea5926cf4f22c67df&X-Amz-SignedHeaders=host&x-id=GetObject)

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
