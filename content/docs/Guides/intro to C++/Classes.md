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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663QYHRDBY%2F20250721%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250721T190959Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFTvyhye%2BG7MNNIT4RNJX9FeZks%2FZdgITa9d3f3Jh1LXAiEA%2BK3HNIfvNqdKjBxtN1FFpw3KAQBitBoaHvZ18hDRg1wqiAQI3P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDP48ySO21Fu%2BmcLA9ircA5NNweeKA%2FWiGHRa4sgsZFx1l6kOJWzD0j4GHaKBFVYNEO35r%2FUH6iGsVMjJVd%2FqcZboXnrIGyGtnzxTkv6NAmFTG%2BNLkYM4XuaIbjxSO%2F%2F%2FHEEECQaT4JoEAZqlUtGH5OVOL099YBJwgXHacNd7A4vW2Bo3pDAm5Ief7LSYjx%2BHN9TEJEpisoM92y6a%2BKB1%2Fg17WhF5z%2BjodgPjT1sgI7X9pg3tbWwFlaXtMOXgRayJWAKwuNYGkLtL46NERRKcd2EtctKErp4MftmlNbZVFvgcQQdwolbXGQa3KeX0tbiDdDkoQuIChYJPySvkJTiODFBI2HZhWYx9VqsEYvAH78xntg1kWElFfAs9A9YiOKvaoDwR8lvD2E4Y25Sel1xiqNZNsYS7JAP4WQ3QtV5pf1bOOWp5%2Brd0UOEfFV6QDvZn4tdBoaWGavsHBdffNe7PfvBYv%2FIkm3tQgeapSufW3alSioL2hQ51XyN%2B6tlRLpJDXYwqSMRC9Kj0tFA6%2Fmvqi%2Bu8U1AB2AUMJdX%2BWG8uUtxBm9Uk8bxQd80sqXc7YGq6bzoARo30wOACJA%2Fr5PaLKW7rArkeg7Av8wI0TYgJ%2BU6HlD%2F2oXKVW1KN7%2FOTvgPnUuXMMogImhBGGGUEMMeP%2BsMGOqUB0JClvbKxafXNMWNIC6tStIj1bBVZ5w4bbgljC3NwwHJaEsRy3vTiinzFKA3vPZEL4f22T4Aiza8%2FpypEfT16CgOykYkc%2BEOp8C04ihxQuGvO0WxC%2Br%2FlvwhMAvyY%2F5S%2BzYdOvirfp7OH%2BRPcxY%2FVPtj90fMx5h%2FktLwRVdlvBmRLVyVA3lSKtCymC5ceKFcWC8momswuQzKAfGMbby%2BOxBa1X9kW&X-Amz-Signature=0274522925eecba67be0b6af775a6381c4274c1f9fcc36f054fd8b0bf3857796&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
