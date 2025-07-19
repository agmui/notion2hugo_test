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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XZTLFIII%2F20250719%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250719T100852Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCokc01JQ0ubhMhpAn6pUKR7e4E84ApRAY9tY3xVFFW9gIgTuxURAk8xZ8Cc7FfUoU0gT%2BwNQIxdBRtYDL70TnbhukqiAQInv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHg05M4DpzbWP43NyCrcA9qnUK9RRGeV8POaABuaWqzTIzC2yHKYyejD5YwcbqYcCmEM0G8LIR6SLOxLkYREbsY1DVgT4teHYEuVvGLlO%2BAZCSe47SS1b6bnOZKxGixjdAxFerl5%2FQUYpNVIDyl8q%2BLEyQeVhVD3iVaYEh9%2BMA095Hhu3e%2FzdkrN8XnZx3oJgcLZ7TMyK2GoYQziPMp2xQOZaIgAoClaWnSyEGEYV8A%2FIV5r5j18U3f30hnrgDnvIBWq9UHqo6Kx5D7rSXkoZIe83OXtteJkVzKfL2K8bk%2BDOL5w4OQidG7cjTsrZ8QmCXaAf0A%2B4024IzycvIyD0at2%2BC4X6pldnT5ut6UXwhQrq6G8EN5M2Pt2pGI9f3ayhgV4WGhVOxq4XEo25lmCfuMY%2BDiU9hgpa8iQKCIk2uWnMXyVmEIaOGN%2Ff1XkZW8AHgdzSv8YwFSOAtgz%2B1luICKLB7hJS%2Br3tGfiA%2BupRZFTErh9bPOFmm1AoPCyJWaAbZdRU7UjMdQUYIawl05hiJ6s9nKeqEAwajCpdV23DJhtBqVBp78P8qDxn9rWUwjyCbBvEVFrTHVeBKJbHUmkRyuRZU80Lcq0XkRYB%2FV4Io4XIeAJYnq8foW9JSUYGCanMBVYAncvejgQq%2BCNMOzF7MMGOqUBa0PU%2Fd6ZqN7L4Q2Owd12kOoG0SzW9Y01lXz%2Bczi6g1wC0yiDNtEQoxNjaTOEJKPMs53MRM5S8l%2FUbZVz%2BtmYhRDxLbDezJW0T83XOQPkZcCNvaucnZ%2Bo8r%2FcQttV1%2Fq4wAR2nGXPbwrVCXw3u%2BAaHXg0nl%2BBcYiTyLeX7evSCZFaKN2ve%2BTsSbplgGqwv78imCa0lNwzCrXaWQ5U10hzVQB0gWLK&X-Amz-Signature=f91593dd8cdb24fce976bbdc0b41e32a412fc2ffd5f9b01548fc887a604d9de2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
