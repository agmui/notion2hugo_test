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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664URJ7E6A%2F20250401%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250401T081213Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFAaCXVzLXdlc3QtMiJHMEUCIGAzelDjXeu71sAsVMBC4hj4XYH%2FSYalhreqhdCuZ3KLAiEAueHQt2G7NV3bKUkl6dfcDyDhOBjiWYFrHMi1GVWrveQqiAQIuf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGZ%2F4DfWUqgeKSm3ryrcA%2FAoIM5d8k0duw78%2FVHIXf4G5q%2B%2BX%2FpUE4IWSYA7NvMF3IkEhZgJWFePr8rDhkAXjw1QiMsiuyLGeM7VGsUUvbsKKE72tFVJyEzokH%2Bmx%2Bn0ByP5J4qD8paSbCuCjiuvXz1J8BhyHfL%2F1s4JfE2HZ8rt90zG0Tg2daV1i9Urzk6%2BTso30QHsMVOQtnIC8jkLLsN8n8Rx0tdih%2F7V3F6TwEX3bstH5p6R26hdbpz2CmxQ4ojgqT8Fytj4QZMrd68AqMTFEYM6mJ%2F3ztGiu8OAK26T8WPX6YjK73gpFqp%2BoOrxtoRfWn%2BPyvz0ntwoW1LlNCw91FBeUjGCUx2AlC%2BIdy9HqBcm1FjuC6uLHCQaGNo1ebtctxYYhkSTDLWZs9ipBGrjZvcAvyrm2OVwSkzGHLaPgiNo5Tl%2BGuo%2F%2Bdww8jd4gkbmKSdJxNrYIahVa08u%2BG0sYxn1V5ZN8hn7i%2FRWQxe9bIdOtvF3FCWjNi3E7uAIk3klyjVuwDW%2BoUUGXkz1RSbnA1QbR%2F%2BhZRCgQGqtPMaCrkGvQI%2B8TsNaSARgZCTySpC6%2F9xfdttFgtbiPBgzJbsrtyCexSjTWE3toMUfTQqO%2FHb51MlFeCo104E%2Fghzap3%2F0ZH28fxXnuyd1MIKyrr8GOqUBB4ggQcjCCnQ9TNb8L5K1NepX8zfwC%2FROgNlzODP1wf442snPzUmSloLjF2tIXZ%2BNgrsv%2BaIN4kVLZlzOd7LC3k2t9wmCmcnBr0vBdAWH0HadD6qn%2FV2NLe8E1jYHvsSef3vzQXCaVrZ%2Fvk%2FhwDLHBHnP1waIdMCQlzyoYVBgzuZoSmeX3leri5wO5uNDS29ADfnttLY9HJUxg%2Ffqay5mOwbnJg95&X-Amz-Signature=7eb44f3d2d7ea19db0f90c95510e976f980734a6432b31c8b81cce526b17787f&X-Amz-SignedHeaders=host&x-id=GetObject)

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
