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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46662XSPISE%2F20250629%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250629T025123Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIA6yuh8NAgez1EkHhFijBPqyQoIvAPBg2edVvHSOBH3UAiA4nr8c5nkpBvIS%2F%2FwCuZw7ThfMF4lCZVu%2BaTZLeBMWWSqIBAib%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM1ffpEDx%2BEg7mLJYvKtwDJSkfMMiN%2FPTBEJ6zZR%2FHFCps8slB0Zc1xH3pIG7%2F6bCKOC5r6Swor%2BlRWb7t2DDdt0WMrGF8Xvp6TCG5Yzo%2Fiv0m2OAQxyl%2FiJNtemAH8cQqdyosWw5aD11ugj9m6L4RerVKm0ZifzRZGOCLFhSSpTzfmke1V6BS0wdc2CNjX1mOmUgFO1MP8ApBTv0X3B6jmFw2VHtiRfxYzCCk5%2FcjR2sxs3o7o5XtmFF56tci7Shme8RfoUU4tp6K4FKh4jhQCv4YGQuhXBGJjN5PjTScj0VS8Bf02VCskvQB8JAAQpudbTg333s1FetEAzAmEDWQO6gDR1C3MnMCLuUFa2%2B4FIxrrf1OcdFflI%2Fprt71CZffRg5An5UN7filwRAKbkA5850rlUhU0Q3H%2B%2FHU4joLooABWe7LuM%2ByIvPN0U9zDUYKsMdjpxDARLlMkBnQpSDTfMJ3XrUr1RmZVwS%2FS5UTaJEhrctl9Eg5xHIgWSRu6y7XwbwszbPIFKtjtL%2F5LPxvDjPt83D3UlOBkpt03ZzBzrNq8x8mG1wGdn39KsMICNEcVnLAtRLDXOnquR6isYKynIjON1qqhuI6ioDsW12XYE6UGCAUq%2FTmR1TFIYdBVi%2BFeOgkcxEo0japsEgw7a2CwwY6pgHyM2ebLa85W54KAbkOjU%2F%2Fu7gE0HuLZCzKF3vQX3mZfxMquPuGXCPGrzV4yj%2F%2FaCLlQ650U5E7EA2jf5cv%2BlJQNGgNyRbLjd%2Ba%2BUcLOSGTBEQfb2Wj%2BgFv8qeLdKWXVua6tqLwpQP6jN5kIqSEatWbLu56HU4Snxbpg0TlodybraNKLU%2FKXh1QnXwu2Nc0TQEUtJYXAU%2FKslefbk9%2BLYb4F7%2Fynk7M&X-Amz-Signature=dd51e4b5cb970a03c530d82ef71e24d3c5e3b2c8a77e115930791e629899e3c3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
