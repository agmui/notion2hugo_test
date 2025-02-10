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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RGEEJBMK%2F20250210%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250210T210713Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDX5wXOrYSUbPTuTr%2BVWNf2McPIl3DkOtPzGcGpFWOw8QIgHJzNIZhm3aCk0PxydZz6%2Bb9qsEO2xb9a9FrsGFXmbjUqiAQIxv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDM%2B%2B2NgNwYPkd3jC6CrcAxcYO0SJI%2F2HmYCamgsAd5ocQ0EKYNy41%2FtJURocQdzQ4LzPG4P6vPuKBVFesMhQC1Af%2F4NuJyA%2FspsvrJ7iB8gImSq3z0XuRgEOodYrK8Lq4DGEVUpytwMlry1MGLwxKPxG1a%2BG89QiPa9kkWNYul6fNLP15kc6N%2Fzsr%2BXb3WZR3ia78l%2FJzsZE2Ur4kTppvJ%2B%2BVacVzz%2FPb7MKnmv5rJxXf5Sd3q%2BMgNHfuIytJd0WjDsDzesUQMYkrXnPNIHZJun9cQR%2B5RDDKBGL8jsbopf8mx2FkJ3pH8SgVFVV%2BGYfFhWUZVT34Wd6U8CCR6OyJIlBgR4YRdY3KlTyUMknRIPxE18a3ecpDT6rz4%2FBCYli%2B3Y374jepYY7T5blpXc513yvWUuh8XmuzQ3LNDrkqTHsRpBECypqIcWHT81m3yIQ58lBmKIWHGC%2FCUtorjMYIMiOp3B0Qm7cbEs4bTfLjlWCzCCZv8fYVs0fNgA6iS9VrgZp8I%2FmuQCcJXPM%2BuDCCb3CdTd0R0U%2BJpgm6B2DyPunA0hlYBtt7Rzh%2BBazyDNABXRdTG2gnAtuNjx6RgivxI1fTrnzafGPZpOgXUExULmruWQzFowGMunSJAspHPYwwnbuPPLV9vLKM5jqMKXNqb0GOqUBD3yV8xvDhLQ7WIjX8iGiVlmHkFqY3hT5NUvIwN1qRgbTdwbNnnoiiiNaiIuqYBhQx2DY0HC6pRKcnPOkQpDYkX4J06J4NS6cT4lxB1pmD6S2%2FiifTRENFLLisqHWhmNrqHLumrW0aYaZHkpa5BjXJBp%2BaDScVT2O%2FtgnhrFYi4kf0%2Bnwl7DgVCXy7oPidGiimDZlXP3GaV%2B6tZd9QHxW5ZNGDHds&X-Amz-Signature=8d069bd64eaa5e6f1ae0f5e36c5daddb9264e997c2cdd7e11ac4f26a1b016bfb&X-Amz-SignedHeaders=host&x-id=GetObject)

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
