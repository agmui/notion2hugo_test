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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VVE43SAY%2F20250625%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250625T170935Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE4aCXVzLXdlc3QtMiJIMEYCIQDzCweKpyNwOCrFUaiDkQyjm9VByZOYr0uKBWI%2BCWEOqQIhAPoprh3SNgUhAiV3Iq7D0HQ5hLt%2FYraGUQufYOtM5St2Kv8DCEYQABoMNjM3NDIzMTgzODA1IgzQvn6GbZfwlCX1Iv4q3ANTI5LjpK5%2BwxSw1K6gUcs%2F%2Bz6k7niOg6wH%2F2VdNas70aYqGcu03uBuBYEv64gA137k%2FnYgMwgfReW7K%2FFjbsBKrW6yX46WGC10XrqeyDFUQLTOn0MsIejz%2Bb1no1X6Sh%2BKke125h4Z7Zd9UOop817ff%2F5ZuSCWt3D6%2F2P6yCV4pqCqBizF3llFfGWdYlBaSt%2FBQtqnNh35oDzuRlBOWyDgRHT8JGlUjqoIWtcHKDS8UiN2YwkquX1upOls7%2BWx1csIioM6pHM1dgRwMedHJrg4vWgKRGDIlSw%2FHVbAIVcnnWEqFy6Mchw8cBzka544GPMl2EK8rSjZ%2FdFfqTjbuZVSXeJ%2FjABUeeKyoT8ANyDZxONaHnWJCayvgT04hhKJUJfnaAz2p2sUwOAubIi5zEjV1d2jGlXXV1CWn30W9VZMPsaN%2FD2YGAxaLXLZQSJomynxlN%2B4VmdCnWV%2BESQYfZ7zJTGnf%2B4MsD%2FeE2fTvuS8iTQnQ6OzpP%2FRTaEf9V7Fz%2BfuHGqsT4UxA71tI6On%2B1veXBq3xCcnOH8G5nzz75AmwjXZslN4PfUcPqabzBKgjrMxBpAiy2ksEIZCATTxWTWlbwjClZHpRxvW%2BjupXxqN3v0%2BvXYYJom7sh3T6jDj7%2B%2FCBjqkASdvTkTGU%2FlY9TASN54DZy57cWbOg%2FUSW4uX1awa%2F3%2F6BbAK0P3w3aD1T4cEohmL2ySUA8Eq%2BPF2lgUJL7JAXopAsGYmxyrLCaPmZAeMtUtNE6Z4qLCKRaRMFtVps5%2FLV6kcI7CfgpRA2LQeLM8fe1uuht%2FaamTQnJnzl7AtrNrrZ%2Bw7r%2F3mYBLpkEYn1%2Be4ibeIwszmIz403%2Bs4mEGAVpNITIPV&X-Amz-Signature=70102890e77b59f6057420fb355f94708a2c52fd705c436fb8533fee6a0da5db&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
