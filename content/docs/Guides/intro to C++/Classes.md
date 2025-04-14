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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46623TM5XBR%2F20250414%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250414T022355Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDZYIfbaAhlW%2FXOlw9Pjrp4ICRLuT423SkNJ3sqrYdCJAIgWJsQEP3dZ%2BuAimhEkO4EgVqxCOceeUTkwr2AmY9bCC4qiAQI%2Bv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDL2ey%2BPrpIGXeWmaDyrcA%2FtmtgJHOE8WuHh%2FnMQT%2FUvyNFIyoOgAYUfuoSOR5%2BUmRlfSVSdUfqRRa6dxQiVDPMIkiokgBBtx6f8Yo8H1cLziKmCBTotqDh78fU6teiXboQUuVd6OF5QjZrHxQA75Di5ScUlkPaKO2KM4jNQga2tfhgEhdQcnZpUDHouaQyfcS789%2FPHHCeCkaizCzuxVEC%2FYYm9G0LrKdZiYDhuCJxuDppggHduqPTaLdBOLsX4OrZCSc5iQ5M%2ByT8nhc3NyiwPRsHbaoXRUHe0h0UrLUtv49BLdQYcPFvO%2FJI6INL46Qlu44GgLev7QNTisTfl4rpit3jMospRRSZOAiC6j%2B%2FyPpvwDLeUzQps9fj6LbyMlQzX2ZGlFBB9OZzKnEQ6RTC8lENplxSXSGeLvh60ooRS%2FEi4MPe6Zp%2F69oANmrH9Ru3WKFkJHbVSbDOhKMuUJrb1rGZYA3FpBeIsCBd6bk21GR6Tp7NPeKkcEH%2B1Jd1LliUwhiWZq2H3e40aARfKDnJtCWaHNlsDmmZskQGepL7LlzHSe5qX7mKgdHny5xz6Sc72VHWahVruLsPPV3evscj2R57GW4d4DPszlV4IqD27mMT%2BJxCisHTVYOIeHZAEX08Sy8Bg7avhvU%2BOOMIm58b8GOqUBiwTF5f4bzcNIDLNvlxTzxA9LhnR7X4NXnSeJq3SNg9K%2FYJmbCHZzGZMZuo7Q4cvkdCEb1fYFK%2F0qtj%2F67VK1upHdOxQnK%2BnIB5bOb0PoR8JF3BSGnhz%2F5XmGNpTD87W3RpzyqXJT9odld%2FXWBP1XM3Q%2BTyDQVsHpHn%2B4aqJOYo%2FifuG4JqiKXqX0GL6tOc3IsbJdtzOOAukrvOVcbtvkJe%2Fg2YVA&X-Amz-Signature=ae3ff6423e20e2df8f53022f0033567af87f5ba7494ddab21844cd44396f7e1d&X-Amz-SignedHeaders=host&x-id=GetObject)

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
