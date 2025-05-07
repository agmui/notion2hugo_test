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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VFFWSX4A%2F20250507%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250507T070936Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD1QZlqDjWhLaafP6QW6FOtvmr5Evo0fw%2BF0e1wnyPu%2BAIhAO7ME1v6uDQXc%2BNMa9uqg%2B%2BoJomNpm0M5VgmEpEM5OtSKv8DCFgQABoMNjM3NDIzMTgzODA1IgyqByq%2FlAtWFAzW%2BBsq3AOAFVfj8y8g%2Br28UqjHPPwwJ2lDa6HA16DeaPlk%2BrCkOkl6W6rlt1ndr%2BFMSPDGppXqiKN63e3pYzBMpSrlUGA%2BepUm7Qhy9mVdVrFiDQUus2amQ9TTqMEHcJ7Ji7xGvwAF0AqsNB4AAnYJhzvKkhh4K%2F7uJ6J2RPw%2Fe06GZ2bMbJapAS9C4wMzSMJe%2BBVo6cSIyuUNQ0Hg5V2%2BpltLXywH4CNCzNX3e9%2BL1wX0iLIEkAxyJZpGPeAlb2e6w5MF01OdpxJub4s6fk2KMAjrFDgs1WRoteV%2F%2BnXEQhUFmTEco3sKujzqrfXmjaPo7sa%2FPTy%2FJiyRBB2T%2FUU6tARw1QO6USyZireKxbWTbtztF%2BZQHPvQ0hA%2FzIqGj9qPZTlWdhxD7c4hEh0qCAIzrY4VAclOfBj8skZDawIxn3KOfLkVea3%2FZ5FWPqxYsMZMcOry%2F6p79yNWouhKOBrhYDFaCLqwld2prcTrjs%2Fyhf0ZkorfADeDNfT1%2FBd3xLRswaLXiRCWoZ0jMfJHZtLWQRZoAVIW%2BPsLmmfoUQRne8zjXYGDJo%2FwJS4kcx5q%2FcAjzDE0y7kXkQYmxQ2jr%2B0vkI39X3NWFN0vZeg0E%2BhQmRa6muPvJsvhtwaizt2cJCKMZzCuiOzABjqkAZ2TDX4zxSU06ClBuBzCGwclYGEH4g7jsNj%2BnMmJWJi8PvqIZkI3OeHHdWwICb0CpsqWdgl1TkQFDU0Ee2Sa0ofy7Yty%2B%2Fm%2Fh8PSRqM%2FVTaHGpRrLpQqXrJ8o%2BSlUvxLjXLCsNzSDU8OToQKzQVhN8rcppoCU9i%2BLjIpqO4FZEHWCFOFX3xpXjM5k4EIVo94CtVBrBtzZPw66ljdRM1GOBS%2FaQ%2FN&X-Amz-Signature=ab38a6f0bb1a0176ae4b2f8d4dc824a1e330b24ff91c58de9e0f42392f8afd9f&X-Amz-SignedHeaders=host&x-id=GetObject)

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
