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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SDZLQEMQ%2F20250310%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250310T070810Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED8aCXVzLXdlc3QtMiJHMEUCIGhACUk1a5mWxkm5p0oKVYKZk8%2FpC2O%2BuTz4oYDt%2FUCGAiEAsg5P7bMuPL4ZL94ySaNcO5EFymOFRQ1bvhr%2FjXpW%2BI4qiAQIh%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOtHubXc%2F1y1%2BmmlmyrcA21zooxoFfg5r0cFnGTYfV4KkiHou8X0kyqVfJRe4nSdB7zngCMRtTXKdByr0FEg%2BijuAM5l%2By9rHJdEDX81gQH0yD6Ns7O8CH2EvK%2Bis8dgh80RLUHBd7tqZB4iJuO0VYFiPmQJR9txvvsy%2BCLsuCnJG%2FOVzsBbCO74Grsc1Xt8u%2BhrM3SqaICyWHdDreDJQP1VrJMjqAE7Z909mCQVrnPUvT6e3ZqlcpTwFcYPHvA%2BsqZEc9I4GMaXwPUNKS2I%2FBofZ%2BQWt9qTzqW9Tq0xNBMMVsFWxsZUsrL6o6tDcIhBA1ezmfJ97YQBn2e0ImS6a5P9BTcN6hnaQdNaT5Ff59vxK9w%2FUZT2pC3KH%2BBsZcP8bHFuein2duD%2BAybMYyG%2FgVKlX50y%2BGugZ8XC%2BEQxQ1s%2BO%2F5KYN9CfKMuMlh6FV%2FJEsO2AZhMhUvAvgdvmXCni6dyMpyWO0qb3BxZRcttmMo%2B6q5r%2B0timRhpHQdvQi3bsuWvK9z2WinCJ331Ra0JywXFri0ksdGHAEWSbh42fzB7IAxmFl4OBNLmLPX6CcUu0Su7OuHiL5xMspDwu57Ffp43bS77zIdMEvIuI7HDCxLF1B6YSQFQzI8JKXpwml3SCpqF%2BRDbkhYAymEvMJ%2BJur4GOqUBwO4IB5KPOLkJ%2FrZmTAO37JfmtMw6K6FTi3Q3%2BfQH8g3AjAktu1jobJbYuoeHEgnTjv0qYnEYm20V4w68ISRmiEAIKt2aDrRhKHz8t0LyDngEv%2BzC8VASdcXkg5aEKLIn%2BVeGZpiU97fLXNH6fjvNqWhb3jsfEz8Z7eSROfZiX8jFIQZJ5H%2Fh7fnm1ESYMEUJRCB2uj0PeZZypSqu67bNs%2F16JjW7&X-Amz-Signature=1d84546b69f2382cb4fd57455bc1f05fe0a744463e455c700137c2812ff17edb&X-Amz-SignedHeaders=host&x-id=GetObject)

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
