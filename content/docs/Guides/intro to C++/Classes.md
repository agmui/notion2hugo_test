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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X55AJA2U%2F20250228%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250228T230736Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFsaCXVzLXdlc3QtMiJIMEYCIQClprRt%2FSteHvOJbTXmCik9wQvP5u1aJVpTQOsAGSAiGQIhAKfhAgkf6alUZN3y0bqU7Xqm5inD1OXXWQ5fbnXWyZcoKogECJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igxqpx7eIfsHREySH5kq3AP8NyhRqZ8gkWnk3%2Fc%2FDPN35CxU6d%2Fph2sVFptyv4W35oqPTzLlNfbILGIscq97vdkMXROfNr0f9m4CHYaXZbj%2Be1eI9KRC4c1h4F9eNMqkZKLcBdZJZzsTioLEyrkVgF%2FxWnScJwVeLMsE7c4GZoc1rbCLUsMKjpN71fmPNChEIRADhl62k5W33u7UzvqpQ2%2BWUT0hg94J3cMiX6v4ribFgWf4ZOWf3uCTHv74%2F3VuDNVd2gudQuy1ddaKfKrlAWERyhVdeU7PBrXvK7JnHJuww9ARwHqqBWNtMjrOFesNWywj8qG2vhIqIGSG%2FlXMbXXV0VWVf8MY6sXAyCC3kSBn05fH7cv7dIKrDRD8cbqyUs%2BwLkr63lDH4PCCjOaRP32uip2sQzXyWjSURhKqqET4bPXR4TikPtxtfYZE6LHyFDzv8pZC4IZRTs1hOm%2FcJPAiL0MIJZCNh%2BT3g4r3IhYXiqwLcf2NFn0iTOVyqUlfGgT12ARMXyoyVpRTQFQ803JkaTxlgAVf77vkSu765kewyL9Fchx1P0aoRuDWxVqbtOdS33tZ9rIY6%2BFu5ofvnrfxmI83xXrMT4cFY%2FdWhRadJe8XkEIu1ebXs6fMnA1NHhthX3WT5DUTywfZuTCvi4i%2BBjqkAVPRT6mzNhUIGI4IDVly1PmrTrI3RCQ1%2FlT2Xyp9occszXpSY8t%2BHBnmtYbakRaMQsOLlFNH9bDp6Z5HTaHIPJESubUCxU894l%2BXnPqgPDcnxBHkP4kftS2KYEDx81c%2BLFZEBpTDxdd7NtaalfYS5Ea7hLCE9ZywnkWbY61z%2BYSuvOMixB8EuOaqHLsBu4L2P5gD8%2BYuEGuRfKz%2FcUZKqMaAQPbR&X-Amz-Signature=b45c2cb1576ba24682c062720ac0a0dad5c29b52d643ba793a1a12b9f8d9bdad&X-Amz-SignedHeaders=host&x-id=GetObject)

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
