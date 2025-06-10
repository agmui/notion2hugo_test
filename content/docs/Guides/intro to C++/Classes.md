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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663GZ7CNNH%2F20250610%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250610T100947Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAVx1MBKDSSJXfR6k9GveZ5xXKIHsAcz0kZ7o%2FgPqhSTAiEAxdbWvav4vQygDcjfq4ZRunlNc5Qm9%2BOhA3KE2bPZEpkqiAQIuv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPa%2Fzd7yeRYOaxS9fSrcA04g%2BE4%2BDaM%2BvI4EGePRNX%2FvMvXThais6bfCnFDVxHKKF7%2Fmh1x7CC7dTqVfQ2fMm4PEHDdYc14kQ%2Brvjno%2B6XuNslI%2Fvq%2ByLFVPqQ9rg3JDmbVmxcGJvRquuM%2F30e6%2Byd%2Bb1tuwxoqAUmWzRYPcdKeVlvuCfYIZCQpzgV4SusBX9w9%2FEdH7gV%2F6vTnkEFZ1%2F5m0H7kszXPXqRM%2FJdFbk6gUheXS9uy2AumdnzhxOtmNXrbtaGQIj0tQGFQ66QoEfZrG92jOd%2BGXUu31fuisoEckegX22jq732h6hKb64mEZkEijWuHEydf%2BsmSJ3NRxGMloYsSk27bs9cNDvvTwxh1H%2BxqRp1NzwoAI0FrvbAxLU%2FKcvaociVL180a3oZLooZ9QNL0bHuZVUe2QDn6%2B7hJOYzYtISFhniG4ieTN4LuLyHZ4BZ%2BS1fzRpaZk2ceiryQmRjsoZWvPKapfffIS3n2yFvHlmmL7ypkp1uFdOtsnBnhyF11n%2F1TC%2Fz1IuL0QWavhgVIbQEyn5ZDa2SrlDwUJ4Qo0owPZIWrs6rdH5t40Rlur1FjHdX5fTU9JtHttbBufD2XPtLNNQdpiOnpuA8dKbYjaJsUWecprXWTNaZxDbmmx9689VJsUgHUcMPPen8IGOqUBi6huulTWD08NW5eZ2iXKI8cr%2BHoupXqQEZdTLqE%2FHPWUHehreZHD6OcjmWTIaWclWz5nU8qYFPPcr8x6Mu4ibpiNNnpJmyys5l53h%2BsFA9ieHP0FY5C7U2dnbSQX%2BrQMnOgq6KhAEbpDc48dLdlVji9HqIR2lBxQYr739%2BrN39juHubshBYl5vPIg1%2BZtWf3H023HXI7loXu2H5f9xzuYEo740s4&X-Amz-Signature=dbdc608e60f9a8255de4d1a69d6db72c1a21f97791aa26d4f6771a328931be7c&X-Amz-SignedHeaders=host&x-id=GetObject)

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
