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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W6QOKVDO%2F20250131%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250131T200808Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGkQ%2B9rkP0NjYDKFU5ExrRrvC%2FCS8av%2Fn7OIccyeNCQ7AiAc9D6DAnFWG6FYt3MTHb%2F7Ne2cwifuMEbU6fK3gYZNnyqIBAjE%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM02ceYJorbTg41gpiKtwDSZr7MzKrN%2BNjW%2BsZ6adFoI20hvnJlXjE07hy9I3o5xyAp4IaW4b1YT8dhaMAwD1oE7SSNqSSYiEncST3fCAwYsNWDnFKqPskpt%2Bx6CHciBn3gnKgCk%2ByJ%2BtWG3afSMc0phPp4QY%2FmCYaiZuQymEWdMLD5mHfrAvUjDl59wt9amR5y0Jy2nOzsPKtKhjNV5Vd2EC3YMRhPhlmjgoh9w2%2BJTOb5Kd%2FIgRSLeHpB4FWYTofEDhM3DM2RwjwlsAEy3xGF%2Brmil%2BEwL0znRQGpDPvYOQpvwUApnW4Mx3x82FyzxUKejiOnPF3Gpp6YEqzIKn0DtajqS5ZXBUPG89P80rTFHQg91AnBizxXH0ML1ZD4y%2BUJitmZHBydCM89%2F2WbH9v5J0Xsxa4FF4LV5qteYVlJ0%2BVLYC8UiUKIIWOiwMSH9u6zqqITN0aBR7V8ud3Jx%2BLxs1zel0%2BMtMBER98eAPAsme3L9e%2FCUcrpjYpREHKUyGcmKHVoxCZwPT6eP7zCJ9umWxMzn%2Fpf3maKdctZKayu50HtSnPPaALMah%2B1CzJycnraMcSw3FgMz4fpvGBA5dLsYfYrp7sWV2IH9RHBO%2FOjKhUwI4yMEwKOy15GzDNTrgWJNW2bw1uhg%2FGCpEwk8L0vAY6pgELp%2BphwfC2NOiR9r0O8buq3zZKwNxsWlGEFNNUxLlSadwr8Gk1lCCK7EMrGS7o6iBCc8Ekhamby8Y1ORIW%2FqQ1TVigkD6yEnTBP55nAUwC7Fp5rqWx5V4wKpDpkOgJYsb4mK3cp%2FfoZkvym%2BZpIys8yzQp1FApmB2G%2B1LqC%2BJMWiR1P59rmJdFxV2yla2uG5VoyqAdqxGiR7kX%2B%2BuVVZ5X6ph%2FP9Em&X-Amz-Signature=92cc24f3e86799994ab1f67bacfa590b9152d0fec474c966a761d4574835f33a&X-Amz-SignedHeaders=host&x-id=GetObject)

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
