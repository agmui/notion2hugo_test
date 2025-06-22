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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46636KEPH4H%2F20250622%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250622T090820Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDA5mJT83LZoDS21ZFzm3zx9%2FovENqKTg%2B3o%2BwUCY9TAAiEA38lHPvAEVUVbPEI8SP1kul8Fv%2FH8zdwa6Gcqs%2BxhK5kqiAQI6P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHqx7MWcNbZph%2BLvJircA6cohKm7Ip8c59tPi86HDqHUcErCghykuqkezBCU8Ae7IwobRQLC%2Flhmt1gzOw%2FECTBk2PLNAw82Yh0c%2FZigYLZFDKoYa0AsK0e9igOrY25JWAt163mv5orSdDHT3IvB1GG%2FIo%2BHpKdTszrEmo1saI%2Bw1DnqOZ0e7DJMDUJoWsg7ulAg%2Fznakkp9%2BThzgOoYKv51N7RMQ7pUqujvUp2AzKs%2BYPNyp%2BdH3rCIxyObNkZD9BRckg0KCzeaso%2ByHMfVq7xqo8HISCVV%2BgMFN9QucB8s4LeUBSA0OCDGMk3lyStIXHEQffwJyTCLYxkZ3DPGPqWwpBxmburSjaiNCCTF%2BScw1gLhc7G0x4GiZRHlS13thUJ1v3HXYYTM9HyJgYoUdhdPaOcjKKBexO9DNN4tGY2B%2B4oZQIoUF4zNoccnQqCC5%2BxuWN3VnymjimhTVq%2BjldioQuf%2FMI2wBXfJjyKAgrYf62F%2BO77bBXnJkbzeL1wl1H9FwNDx0%2BV1F%2BYH1tJInauY%2FFi0ljqQRL8dKkUMGcOArCvfkkLIKpgZRgzUcq7JP4Puu3ZOwT30RbqJOiSz85n54ShU9xsXx%2B3gvoitcduMzn%2Fnk9ul8pFKEIW4b5pOJxpa%2B6vhHuXTUQWBMKDF3sIGOqUBK%2FsVS5JMst32RfHqN8sqTaLoowYIMKE3EyNr6IeKed%2Ftrd3uzgterNS9PnCAkpox1B%2FX8JV4lg%2BRuspX0ChRpZxBSrQ7kwNy8iJ9sgEFXi%2BJ0RMQS3XMDW4n4BLJpfwG7Vj%2BZzxZqmp5dw4PkKDswnx8LRzDMEVW5P16VS72nh%2BR3oO5tQK5z89tv2gkHE98Wo17BFfLgSsX6MrIwe06uOsks2SE&X-Amz-Signature=16fac6a4b6e9d10ac2690932365d9ea6c2610ec079475c9ff5611e6ffc923566&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
