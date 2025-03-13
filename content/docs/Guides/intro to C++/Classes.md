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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466243CMNBY%2F20250313%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250313T140757Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDsT9BFBQOjWol3Wvu5OEeBb%2BG2V20gsb03LsKgQ3i2fQIhANwWuX5zzqVKf4X1uIyj5J%2Fc0A9PdlUJxan0rccA7GAwKogECNf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyQJFgJczE0s6BEgQgq3AOfRb6vTz%2BeGRjiM8Iw5a8ZIpb%2F0BH8QiJ6vFdkNIPgsxNf1FJiDcca8PBx7wFQrhm4jOMLzwMMhnAT1%2F5ZjWMKyxizGfqEr6rcfGW4PXCtF6soDHuHV3Jere19cPFbdTI7Mk7a40I8NE5Ybk0e5d6TnfknV6nLE2p52WtBjIrEm2Ul4N%2Ba7DaRgcGvmKDyGeVrDYqiQuDeM4OdtLrGp3ZyKXeym9OkAXU3hpWwyf%2B5GM7LyOEDVHE7y6QIy4QXaDRVyrtCSLPCqDws%2Bvfk07ipEoVlqXYH3B5OwQ1Z%2BXokFMqutR5jauSKTUxQPTnFRLoRs7gUp4RU7XXt9tV2zT8x6aOfHbXyCCI%2FDG0QpmKsLRbJaex70LZ%2BpsPghkHOQ4i%2FtVtQd%2BEHyQbtAdqynk8LkXpZ4i7XjNs9UgqVwQtJxAhi15SPGz4itwPyT6wAcpaxBim%2BZY%2BN2i4wJwXc7GsPCpTcEUOHEMc0hm%2BIn%2Bgb3XOQq7l616TOBR5HqKVt0ZAfTBsMt2BdJRjme2xokG8ZYbTQWRx4AbQni8qD9ca3K9KhJfwh4pRoqLTWC28QcMLZm8Spogqd7rqC8hQ5FwcpFYa4rQoWSLR7eb84XA97lmpSUu%2Fq9MLXOu5b2zCuu8u%2BBjqkAac6l1xNp78iCrqo7p04ur8Djau1h6EvcIic8OUjk80Z6UPuYNm4igMUFYZblQ%2BJSaHtf2IktJWrZOzutFCBCnbYwDUCF3ui1mQl%2Ff19fZjHww7Vye31ydDg4NW8AKjCC0p3KhkP9ynShjjspFOboG51JMVhv4%2BgwEXpzWS0UdSnoF2WYk9lOnsNgZc4QaPvk2gpFLsAH9IA9FLNoBm%2FfKslWpW4&X-Amz-Signature=38215a62972bdb380318d08498cba5ab25df88bfc7a044d38cee06711f36ca63&X-Amz-SignedHeaders=host&x-id=GetObject)

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
