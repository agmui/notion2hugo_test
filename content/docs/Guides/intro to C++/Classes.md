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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XEGOCG32%2F20250621%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250621T004204Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDnpjEsoFtYvGMtONVgUCyTNsBeoQrRF7jXj%2B2lsjkL4gIgb7KZ%2BaiuRlnesKJg3fuXxpRWCKEo8NnlYQvHOsJRfwEqiAQIyP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDA1o29ntQRQkTAUGKyrcA64wxhKE2AtsU51%2BghZ%2BgxKfONxIbcl1qRZI5dghjkSIH1bqFJWjW%2BQ6DAizpnpg7406MXFbmCxpcmyKVOjqtm68I%2BhDUQUNBHbW9gkx41yGU5zzIM72WI%2B4k4XihoYH%2BLboI5%2F5oIv41kKq30rgFwXYZqQQ74wDorBrbbT2%2Bov1G1nHfRpql8PYS727PFK0mzKg3vJK1euTgZVaS9s2mmph9WxwpSTkZy7y8F5oAiE4Gr6cAl9Kv8fPwKU5cmp%2FlmrvVMNRNZOhhAAj49i3inNOcdQ%2B7EhX9lfwMUcHz1GxM%2BZbt35%2BPtHLCy%2FeNyIdIFI0yAzgz84oj0TiqBzJUAztNP8MwLhKTElSc3FLXjL%2BuyiBaH2ZcwcaFjYI%2BB83U3RGRL7nOYuYvX2AMcWVwe9mPZQLNxBVpoPy6F2ZmsrGPqVmzN2ecGvxyGmDBKTXxa7Kn6whT7GdBn50cD9%2FLLapBw9%2FqB10MxqhOGbWgJsLh5lQwOr0DsMImMfHMtEgNJ2jaCSYOPZx4OCMDX%2BMEOvY69sAh%2BWFsIVbjFK%2BnFuATz6Pq8j2eAp%2BjA0jJE%2BBBGuCAalMTaurVtDIdHV3KLldyYLKuLjSu7piq9CuI%2F1pE%2BSUdkhO%2BUyGSdIDMP7X18IGOqUB1kQFcWHR26JOGm26zxgh9CkLrdD8ou9m1PcXvCZPz2nBpmilIxzMdLCwm%2F1JmDoB8EBO3Ii5CLTSq5rhxcmiVbQKpqNBabljn9FCYA7Q6V1MncvoOMJ6UO%2FIRZLKYCI2AWMnNEWkYBEECGfGqELoTHxs0pntVC3Z7XNX0zaujwZvQrEGhho18XBsnEQm9RGrlZXRVTiQ4yo3MbUOQ%2B%2B8R2Wjkn6K&X-Amz-Signature=82cfe73fd7ddf3d488a934145462a8c6648467896e3727bc840df2292b064495&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
