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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UT3XP24W%2F20250129%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250129T131451Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBXlzOIkEz4PdoKqXxtU%2Ffa266424FBSWPC4kOtq3%2FF6AiBkoyFmmueI01rGPvTe0KNEXYMg9bcSqwkK6RPmytsNaiqIBAiO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMDJpnDJW%2B3ntDtzOpKtwDjdl%2Bl%2BQxKP8kN59GXSNlCVT%2BjtmQNg2COXHy0hS4fLxRcKHAS2zSiAtfYh1bJyV6jx9XG5BRSgXKecwh9GXTw4Fz8ycGeiDg6Wi3UEuJEvyoR57p%2BV1BTCSdyjWaJWS1YCczFIngM62kLOYmAi1epSklIz9BmLP%2F1bwWIpQ0UmMEilO%2BlxjusEpeua2PRPj6MJFouSZzKoNTAxs0p3dFix0Gqal5UfJ5R4NWZQZs7oAVpXtWlLTrzlOWp%2B0hMO3qENwtL4VLD1NYdTtWXq9qafGX7fLoKvmMNcm6z2mKfWQUyEnDxQVZfT5l8LyVifI7dwipVKyUJiPdR8Wu0XXlI%2FX7l%2B8XdIn2yHcmQ0QtsjdFKYj5JrkUPM2MzsVCY4jMLsm6oBPoNi%2Fl3NCR7oGqP0mBdBAWMV2scLKJduiCnNKWM7UBTvAI%2FbEKhGA0wFuKvD6yfugUe4x9oDUlBLGhWeQaQ%2FPcbkxy%2B%2FMRVyAIqM5u9gI6P91NJYcTpQW1By6uWN2nRNjPGnMOrnjB0JTTKcqp2%2FRem7zkXNee3F5hkUvs46aB7uhc2o%2BmxOjZp85U%2FvFxZXhk7J9d4FvTIgN%2FFbI3QA9wILP9Im3gRaoddIdJtGy8aIIUYaEZOB8ws8zovAY6pgE3%2BDPL%2FzSHFBY1G7QeqD6RHi7MJCiswjW7WaNa%2BtEgvbifhvEXDarZEVXNomx6UzvQhYYtcdNDHHiKEzaHdtaheFGynl56g6vtR9gSE3LhIsMbRXToreQVzYCCLLNT6X8HT9x08E68ynVFhpwUY%2FkLraFdPF21mQHRVdD3id7rTawKnF2lhYo1EZ5Xg1on5fOR5qZRkkwB1zZz%2BrjJok%2B9y%2BOdOeSg&X-Amz-Signature=0c9bc321b4c8593536a1452e8fe238759f6d8bc455627792863cadc49eba7506&X-Amz-SignedHeaders=host&x-id=GetObject)

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
