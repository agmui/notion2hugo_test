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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T3B7DOOS%2F20250510%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250510T150710Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAiP0LbjJyEYNCqKCKb%2BTxJocQ6UJaNXn%2BnIcJBBU3lMAiBsqfGxAL%2BVL4dtVSXyYKnhfwzd0br7KIcMTGS6rmmibSqIBAin%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMNbjY1ppXBJLIs0KPKtwDwQjxY3tEXsVDTvem5jXzRAZRtUqn%2BwitfNpgonGgCnb8rpqdWG8RS6lv7MqrIxGSGtXuAv%2Fc8PwDrKTBdT3ht6%2BJD7og4DipFa7KzIDECzvWNO1aiiLI5MgMs0k3%2F0EJt%2BQUZPlRq2CSYFRoEa0sSAj%2FVryffqShIgU7z7dBeYeEsByVBdC%2FJDiUwxtWHRiXIU%2B2MF40JiqtNvZgc0my1FWSiieU1UIMd8dgWrwrUm2s2SSizzlsnWyW9ZvF1xjDY42%2FL78DtFbP9Yx8Q1K8C%2BlAChXnCmC9fNFEv%2BElpJU%2FFx88dVk0vAtCwbZ%2FDwib%2B9PGQZFafdgb15rQJLykNn5%2FXS8nmuMDDD3uOxjS2S%2FFEudsXT8HqCEA69gwNiWrcJ%2FzMeajhAfpOPISRJfdZobtwH2YVaNogVykDzPv1oG27ZSu4VNTeDHhtE3znDmWMyOzMdf%2B9ympvVtB5xzQy2m13hlsTkzynBIOgpWEqdrTgti3iHobaEpzRnC74WA71BK0%2FZW7kZINl6pRRfw4bFsYXjEtcpIn7ucSZdhIRX6lhcF9TzhaQ8WOTKLsQ1Kyb65uu9o5NqycguPc5oda%2BEczptJu%2Fs2dFSwcO5TKpYU1HCO4l8x1CgjnVBIwibT9wAY6pgFAkNMrgdbOnisN6TWvL6twKOupBC%2BPiCH29d4M3ChavWkIEyRNJ95BhMX3XkkGW%2Bp%2BZSR03yRAfdS%2F2EBsb%2BRHUeq41A%2ByjE2%2BNIUiruSHt6V%2Fq02Ui2J14pIDlxphoWg1BGS2MfcdSNO7LenpPS%2BNsXLTVUN5ltXQYMMAkvwttZoUBNZ3Z3lsJkbFFZTjBfBe4h7f5d2Rdg%2FfxOyTc%2B4joexFKG%2F2&X-Amz-Signature=48b0ca10be58bec4d91b0ca174940ddfc3d5d66e9fbdfcd968e7f48725c90fb5&X-Amz-SignedHeaders=host&x-id=GetObject)

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
