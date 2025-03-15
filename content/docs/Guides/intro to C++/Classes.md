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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QILXRHD4%2F20250315%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250315T121213Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIA4pOz2Eo%2BqZSqCp3hq8jbe016DSQ%2BbPwSEq3Gr1lrRjAiEA0r6Bg5JC5oyr6v%2Be4VG1sxpmNIBaatFUw7klO8vfbigq%2FwMIFRAAGgw2Mzc0MjMxODM4MDUiDC7O9%2BKqYxQhkr9u6ircA%2FRLN6Y6ZNMxeQ2aH3t5e6WKRHVQJhEgym452LIdyH8pf0MFp3qz0RmzZX3d4CZrGvA1PiUvIKXFN5oWRWbPLV8V9szSHBOTwdag9CEJAOeWAJGxZu3CItuI2h11U2L1P347RGG7zVSL5Uh1xJ%2FSWVOyBmY3AKrzHP1T0tcUe%2FN8HyP5swz34%2BYQg48y5C9zm4r3p7U9Ez2wrAOLS%2FVga68s7aa6xfpv2CML5h5bCccEtx2FY5m46cB0R8tQXKoTOFNVd1JVu2pii%2F%2FJ7Mz5WH%2Br%2Bjb9p1INx0nbs6%2FV74bO0Mi65h8nXqGnOehElFH0c8WVxwJR308WAvMtXR92Yzrpp3Jay%2BSDEdMTGJwNhQabyBn0Oqo812a9k1zEmXjgsghylXuBydHcuQToiyzzOthO95Q5E93CX0xPHh5jIyAbyEXnc0R%2FshVJViesEa6qxREpa%2BxQsgUlYua%2BfeXmBKGF914q3V9ABbEp4s4uA66x8qYTPJmezwAdMSsMcv8mQledN4NLqSPU7nTBzO5VvO4yjgwL6zxri%2BdK5W0aOLjovBoUQbqBOzJQhvm7oVm27lfch03rI06QPfOiXyK5SDjNHEkTzpqel1M1c9Oqt8C4MpLf0%2FdcUNod1bPeMLbQ1b4GOqUBWMnIFBy%2BnUVqDz0%2FSSqHF2ta79TBGxTx%2BRawxIWlJFlC49cJg9g3n3Mf63sTsjE7oe7qTxDIxP4wmfOC2UeNU5pGtTF5MvKKTulanlL%2BvfzsCrRP5rFkHsoLbF2lw4ZTSsMcbn2pXB7mOXNUrw9zA8OURiPSxG9BVHjpxTyM38nu%2FY1s%2FJW0OIQMTmq7c9IWE4aE64s3FWfc1IyVr%2Bgz6cyktR5B&X-Amz-Signature=a660fba9dbb51317c899edd02ff6cdabd5aeb596cbc4fa2c96e34c340108504e&X-Amz-SignedHeaders=host&x-id=GetObject)

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
