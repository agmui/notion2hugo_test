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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ROYFU6TQ%2F20250425%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250425T210726Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICYpzEwJy%2FK4%2FKD29HQO30EFGgOqqxDkng7k6BqUpZ%2FcAiAltsgLi9IPYg1T7GNbhTvjU7vOMX1a%2FNszKBc8VH%2BVkir%2FAwg2EAAaDDYzNzQyMzE4MzgwNSIMKmcmfl%2BEZCOBOX1OKtwDiW%2B6mji6sptg8OR765HBsJB3T8dnvccw%2FxQfZG6thtXxKrCrwVY6yG9y4yRoWr1WBWfm27BIws5p2lxxEinBxd1lRAlNqq66ht%2BA4aSw%2BzDD0X8yv8sthc3nr21Kcx6971BkZJeSqIS8Vrj5%2Fbqau4Y553OfqiI0NaEBjHCoRRTc9tMx2nca5uslysZhCuD9Fwv%2FfjvDDl7wXf0V2tHqTi0BmzhrhtVQCqC93451691wmgl33rxp6VVcpFZCfvi8zWGyC%2F5VvoDBJILqOZEqktdw%2FI9LAv7a4PvR6k5kM2j2qDJxz9WY6rRrFUYKNFYAbcDgejOQ8gRescN7yz713HAxCfjNSQW2oMRLOvxwL0JT%2B82typeBGY9POpA1v5xH8fQ0sNyd1LxkXHE5bRrjYLNvveSgjgrdmRGEuSO4YZRUepIrxNr%2FgmEhrlJxxqiBnN2p7oEMCWlUcfigEauNObrmMRM9ECAjD13vV6Cs%2Bn3ienJ%2B%2BW1eIhgchLH007AXuB3c%2BFJn6FUJGe8TlOq6NC3mc2PH%2BSQiS3JoDE1dp0b1%2BLE7RlBm2gVxpvVTS2UH3tgUqC08fRxSGaUUvvy9Ps%2F%2BPcCBXTQEIlNZDV%2BJ9lJW%2Bv1sP8KBe7sDK8owhOyvwAY6pgE78pFwJ8hnjb1vha%2BMGL3RuZT8aJjtCVU%2BWOlUqL0YHXjJz3pLY9TT7pIjm1apRPAT40f4nUwXgM2bfyHDqUgC14L%2F5AQpZveL9VXpliSeC%2Fm3gGh2Iv2VmQUDvT%2Fpk1LYXMqiC9WMqXWUKZO6f2tjiJS%2B50gnZHlsSbuQVpIchITXQ%2Fke4i2MaNm5dCxrNuAFz1aDEGDkgyvpoPgB%2B9x5reI6WQ50&X-Amz-Signature=33a59b441aeb909b6d5ac4fc5307044c1cd0790b5e4d40362690085339a5bbff&X-Amz-SignedHeaders=host&x-id=GetObject)

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
