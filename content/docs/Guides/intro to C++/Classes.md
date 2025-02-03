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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663X5QRY6X%2F20250203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250203T220702Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAYaCXVzLXdlc3QtMiJIMEYCIQDQrZRgUCDi2xqIBPBAMfJGgsT7ImymeQTD%2BNePmrkZPAIhAOC%2FXP0Hfo2UyYuqZq0pV9TwrcvjIUHSNYHKbMpEvoEIKv8DCB8QABoMNjM3NDIzMTgzODA1IgxHm4Bd5yKZyhKYzs4q3APzacIXM6858HCjlmvx%2FIT3ceyUxIRCnthSbzeHmnzh6hCTbPUJPNTcEb%2B6UCLUGXTKsEqXhdTlJQBWiRMRoLwlU6aZlj5ZXb1UYE%2F30VFyobAkA60qAYQPTo%2FPCxDAoocCGLQgw2nMEE19Q4cy28PdjLbqPtGEcDRUMKLnvXl1BNAYVPiA2pthRrnXbSh2LUHaxkM9hj9OVcD7G%2F%2B4krVjJI7Lz5Yz%2BHjfKJAj8xI4vqVbFz4zU5XlS%2FIRApZyMq75gQX0i7sCwaYOhqyWFeYp8JNIPOuvLpaMt9FC5bK0zUp2toBdyqE5HbM9ehT0x2lhquQyWIeruVfSGMGEf0PJqVq%2BwcJadnYz4Nyi3QiYmt%2BKQC8%2Fmp0MVAajwinGAh6gx2eiTIa96P1Vs06PherNK%2FrboThnS79cQgxwD%2BIHaJ%2BMiAg8XR4fDU%2Fi5Kk0SsYch3%2B66XdRyNQuz5D9IHVvSBXL1lDmUDuPD3bbrKfF1vubzKVVlyqhd5v6BbmzObJ5ZUviODOPhIlf%2FeQz7k8LmQeIkTh%2B1d0jdE9l%2Bv6hF1GTeXg0bjyr%2B12P7EX0IDfnW3OjCFES1EmFy838tMs8T%2BH4bdbTqpp63KWA42IwLlagaPZh19k9GzNidTDf%2BYS9BjqkAW6BF8Fp65h1uXR%2FLndyFlfa42wN%2BELuUXoT1z%2F2UXWy8G653LKF45tVq5DIes%2B%2F2wwNCBJFnVs5c4AmUge7TN008IWSODIP821zTxrj2GgnHJvXmiDjgu2uKsR0rSmoy615MGV9UnQXUyNx0g5yHZmEeP842ODMUAf5TjP3C%2FGHO3Wf38bYoJerMPOXCW9D2B%2BXx13q7JTUAr5BywnUDzQhteXU&X-Amz-Signature=d6d4736fa993dcd7c9b6fc3d8e5c21e387643c80dc727d79b6ebd2301c34aea5&X-Amz-SignedHeaders=host&x-id=GetObject)

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
