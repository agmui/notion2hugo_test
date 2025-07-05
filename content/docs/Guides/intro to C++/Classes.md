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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XBUBF7Q7%2F20250705%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250705T061149Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDIaCXVzLXdlc3QtMiJGMEQCICeq6hUermrzcT1ELeMXyOgQBvpURqIAz9gL2APnNsnTAiAidLAqENaM5q5ckBaHoelPt%2F3CdMob94g11GTUQ1wviir%2FAwg7EAAaDDYzNzQyMzE4MzgwNSIMnz30MpSxTAUzvCiFKtwD%2BEUgs6XKhlfTe8oQLhwH4ZT3DfNEYQsJRXOxUmC7MSB5iHjPq37YGm8dnHRHbhVfAWxqeOjLfnlCcC2r0ikwo%2Bf5yiwf%2BXvbwFVFcBCGCPtMr5VOOvgFa%2Bek9Z%2B1UV9dToywaxdDpp37O24NWZ77AqawrXUlv00iiErLkx6R5mkhek1zZVaadj8OL0%2Bmm7h14NwDviJG51AHVntoKC6QdD%2FUC5z0lrXi%2B2DT6BwB88%2BS0jNgbr%2Bt8LEzfjsQkbp%2B%2BWYYvgpmcmz4rt3oFvb6QAlz4c%2FC6eXmiADhswlSUAqNeX1A%2BVx6km9VJ31mq%2B8TbxGYm1uIWgHE1N91XDRcuaMdf0I8r3pl5Ts0B%2F2ZemM300D28pKltJDCgODuQfF45QoGzWvqnJEmWPrXB6EN3w8zWvKRquDhYN8tvVHsyilnyRhQJVoqdqemrQSRdZB6%2BxwLFC7GzKAaV9t9A%2FD8mLdt1AbuVuIUH5NK7hlr6PySQ3JCMQZos%2FJZG5iUVjiYWq%2FLJMoDaksnF0yObIJW7ZjPSFWtaoLXAPoXWKq41mVs938TcxaI7dLMzE32ZtbpddyVgYL6Y1y4kumsq8%2B5HTNasbgJU5Bd8f6zlm1OtCBCe5ObTBG7IrGaRecwi4uiwwY6pgEgP7J7z3Y%2FXgQavpPIOnOIGQc%2BP%2FslskIYQAN5JhKWyaYtSirycdUj02unrPOlPbmqsbi0rMIClayKGtXPQSkxE0Hjq7cCQBwqb6PTiWmRei49P2ycuPcKCCGaVI5uHqTS3mA6TPvwW79BikeUiq4k3AIWN6gz%2B0AUyvLMLqZQnZHjd9ut1D5rmo5Ft2XWTU0KHacbN9UWRFh1NNSHjANZ9lP6OF%2FY&X-Amz-Signature=6b9172dc7d8a7767a86b79ba8c76c43486d5e6ed2c39f023e7ec77c90619b02e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
