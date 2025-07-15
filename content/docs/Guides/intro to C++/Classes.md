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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666MCXUJUC%2F20250715%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250715T061419Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECYaCXVzLXdlc3QtMiJHMEUCIHtWPL8cqkOeZCbDrdzFmTJAFVrQmUekKYRDZIzE5pI4AiEAiqxX6Zenr3Mz7kSAaeWmnv0SMHf4MhNNo8nAnawWcqkq%2FwMIPxAAGgw2Mzc0MjMxODM4MDUiDN1n6BHE1YbvvqWGAyrcA3DQ7x6dENBN91lNoz0vHaP4oUMgTSsAfO2xc4b1bffqjRXoPNSGMGGTzsDuWGuGZ3DqvQWhatooh%2BebGd4%2FZ6MTf3ufqOa3nESqNdcv5OMw13uZiYAX3rLEpK3%2FSe9tnvyf0jHfvrwuYYlAxf5S970Q6CTajQmaY7wgYKOy4QymCWbfI4Y2yRLpUASttIco8gHTzvPlBRO8BfA7lOVYW%2FunI866F0i1JNyyPzjZZ%2FhOUxt5rO4q0c%2F08AbKJ%2F6qIBuEoJA9QMTFPx1v9Ryk4v1ToP7MxNctfDQVbML7hPmT1TpbRcG5upiLtJmkb0K2Siuz%2FeIZ0QL3%2BUKcg0ZCa0%2F3y0AUstcouZ%2FMZ4lOO7ijdbxxQKVNWIiIR%2BVLJ8j4xdcCZrkYl4TST9KAbKQBCHm5NwkOvH7LCG2daqFbAc163YpYD2FIQ6iPWXVte3FoepxTUVgqqdwvejppTTDqd3dWSr2JpNVMhMnwUyXo1P45o%2FAu6u%2FbBjxR3KDHJ1%2BIT6TCBZr8bhgwYC8rfZNoj%2FEETbETH8O2uPgrfKdL75MZojVPQL23GVsvQJVXDuoRCaIMcBliWh6v79sRtxkrTBYVOKAZgQJ95udqrynvYTUSu9X7dcU5Hwwu%2FYwGMIDV18MGOqUBBwRGbXIj7bgMocVx7Mtu%2F6NKNhh2taBA36yxLqNNwv%2Bf8BYgzen%2Bav8oUpuuX1AIZoWxuohpxxHv1qPxT6n%2B1nnZvVr3aToVIBqRv7AQi%2FFBpAbUleQW4HWMceP6%2FyvVtWpIvD%2BmSMQkkMhuyfy82ZcWgvyZZpWa7G6VZ4AzIkENVSApcubYxvogFzHniIS0hJFOOhMj7VPqFGcNtuQs%2BqnxBvFf&X-Amz-Signature=f0f9a688da0d1a2193a75f7da64b1633a8feea24fe980939ed4d4135913fa819&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
