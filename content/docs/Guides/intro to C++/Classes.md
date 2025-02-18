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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z7HXR55Z%2F20250218%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250218T031124Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFsaCXVzLXdlc3QtMiJIMEYCIQCqTOajO1IP08JlkxjwaArqR5KKnLPGtvIvyNAJ2nq3ogIhAIWqvmIp62eaoP63EyiYp6Pwgjkx03v2F%2F3c%2FjUiS6ccKogECIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzVpLMjZUlrDePeB0Aq3AMDcpEXq6E%2ByzsB9NThJ6qZAqaOPrVp5PP6tMPhRjoQ094b8p1whVLQHZF1XGk3OLkW7rqKhtejeXdYAHlAOrfGD7WJG2Sf%2FjEIqjBEGTR3sUgnytQbGKBYan7tnsaqKO0XIEY9tyYICNexPW%2FvgWzJ%2BDqLAKMi1fk28dlIEI3styuP5cQK%2FDM%2BroMSHzkTHw04foaiO%2FlRIF1fdRDiYY%2FnZhbRH7VIR523OCH9B8RN7Aoex80BhdB06umuFJpFTrty%2Bw8HZKxVlzYG77v3V%2BxtZmW3BPntll6L64svjqpzCgjxzODkRgfvijCbHzrQU9fjfi1ROWjcoCx6BU4oy43Zp24tOM7fEKdQWvSDyvxy6E46YFhA23kCxy5WKXExa37bTE6Xu3KTYs3BsvcYVLP7913AcBbkcX6b%2BIU0jdFzMtuNmBvWS9ZxF6iAy6RMl3tQ24W7igmnhO7amkUZ2Qf%2FETKIglW%2FsiEIG6v1MtBFQaIa0JjZC8RTS3Q2pt8yOm5o%2Fc%2FQBqpMtQOmoHxMM1sxjAJ1Vx1OVg%2BmvPM%2FyLUMZTOMXQhSTOquSXXZJksbXYTj8hc3738DmEWc4orlXzHVPkmV5%2Ftu0nHfx9z8%2BKMffYEPkpxWC28HFp6o5jDO8M%2B9BjqkAXBpOLMvKxASEDW%2Fv6Q89o2DUIodvp%2B9aBM6niv3JQTkXM83%2Bbxq8u5P5jPdc%2Bh7Fl1w402hgkAwOSqLG8e3MqZI1G8%2BO%2BJYmCKACtnmSW9Dvql9wb2u1xe5dBgaGw4hHdgtElApvu3oxVW0iY6OihDjUG6Hlm7EDDEz0giCvb11Zgh31oYKbBRJ%2F2wG%2BM9jEM6zQI99l5TVxmqBXBII4Vp7MT2A&X-Amz-Signature=400cf10de40d796cb84267e45226be00b139353bcdef4b3168f68b9021c13db5&X-Amz-SignedHeaders=host&x-id=GetObject)

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
