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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662WBKE3GE%2F20250604%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250604T161117Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFgaCXVzLXdlc3QtMiJGMEQCIHy%2BdjfPc2WuHx16V6VbWmUyJBncBcalYYEVLEtGPwgiAiBP3FC%2F3jO7eHQtBElrVNDGG6z3nAtNNWwxETMha3GcDCr%2FAwgxEAAaDDYzNzQyMzE4MzgwNSIMj2eAqcEwT3msg5vuKtwDYZZssd9Rp3RKpCufiFyCSfyC%2BEeuTVG8zxb3N8Uk5IWpJvHOercPYis8Egv9DBrCFza9qtt4LTSAMftEjnAgft%2BCsWtw8XArYQNuPUT9pp71kjFxm0P37E7ovI1c2ohpgiNEHTMk11NWpbfiHZabXDatK9U%2FsxHlOd0M0lrvsYn%2FtzXo5z5qunBc6d6%2Bzoo8e8AhsHdTbHr71OgnJTgeEU6Ifc%2FQzKim0mg6EMRdjry4s1LaFRQjETSVK0uRtx71hFmV7oDqn3t9ieC6am7ayiT5KHZUwpJ0G8%2F0W81s961UaI3YU9MdOzhk00iW9zot8Li30YSfFmjK%2BL%2F9bjKD7DOy%2FLVUJssep%2BqB%2Be1HmAHuYLHmb8WxpzoYsxKXcC%2FPXMmCJY413WZTfJ0vUmohnZnQBvfwLoVObnKdxnUA3%2FXoZWpZn8R6IafMg8bDmU0yEFeapYERbOg0B1wKAiFG4IPI1f%2BjIXESPhIV5u4AHI64M4P4aAYXAZ%2FW%2FP3qT356OOTB3%2BsELFe7OBAEyr5ZYXfgwx5RHchocAxVJk5D7mxqhLnxb4Utb39TnTCKEUjjxLt1G%2FjvGN4z9wdiLxMIZ1i55CEF0BJ617fwMJKUHp%2Bs1JWIJyt6wEBjOwswn9%2BBwgY6pgHa1Vy8ICrbvsV8ml5XLn13V%2Fm5L%2FSEJvIpjCuP82vmEWM76DzBvXEH10diG4OJOs1aD9pSUNxsiAB95xpHZVrByDNdB85yLAr%2FhMi4eFpv0TQZBR%2BanmLgoSuz6%2BkE5o0UfTa7ee4WihRlWJW1GQnfQgR%2FRIrmIrZ0%2BqcxkAIRm1d0s0SwdyTfcaqumpg3Onx%2Bh7BdY6d8vNFGuQN4ZGTsUXj6Q%2FBX&X-Amz-Signature=5538d9d0a6a095028eb004cd3361655c746169deb51a46e83f206931d4943c63&X-Amz-SignedHeaders=host&x-id=GetObject)

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
