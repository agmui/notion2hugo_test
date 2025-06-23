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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XDAW5L5B%2F20250623%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250623T170900Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECEaCXVzLXdlc3QtMiJHMEUCIQCPOWHWVUeLFO1%2Bz7bUNVUERXOs3Uw%2BQfVwfsqenY3zaAIgQIGs7o0EbomZq%2F%2B8OVe2CQZTasG9%2BLUOVclVuDNPaj0q%2FwMIGhAAGgw2Mzc0MjMxODM4MDUiDD7hdXZydbLULNmSpircA05A9E0LW21bDpuLuQnL4iNwMMpjnrxqKWWvHj6uFyOiuqpf9ax34SVR7zmWS4g50XrauADc2xRqTc3UKg%2Bu1DhyugoJmIuovy97NTkrbJWXP2vMHKQjk0LUr4H2SRuqilIjHi43wegwHbZNN40bjtbW7ufylTPLMkpUFXH3VlKVtJj0QNoIRFvpjQuRSTUcYPAkNbZ43ptobcEDz9Y1M1LHw7HK3jBOC8Jm4CyzGsw5FFpjfcvvJhQ4c4RY%2BF%2FMzoX0UbCpSq65cqw8xpd6uIru1y1WJ5WjWC0EztzkIT9Bb96WnWX%2FCxDsFTz%2FYbKVAcwPDaVuhq1OqgWKwqNVr7AnQTcn9IFHxJJ9uL4usryruiW9JkXNUdi1pN2CViOH1mCgI%2BH2SqxTWNhQ%2BArrfgMz8XjSIj74XfgmwvDY9E4eCblycaRtmzzjur%2FQPTM9lNt%2F2BZYDoJ15PQtC%2FUQIcachbddqG2ZOduYcy5Olc5krWRQaOYFjxjVtB0UuviJ6QE7Bb1HlYjD0zsx4%2FwUOTDks%2FM6GXMrgbMEbhor4AYPNWDRj%2BwYuMFp5VmD%2FlpcW1q8EG3dK2bqtDjmnXWuf3TEkm6Pg0qMWJAvodNFmeKWfd3hcnqsKVtUT1S6MLuH5sIGOqUBwzO%2FPLGXyN8xNy8JHJxzImIFOJTKCi88IGbWpQXDUvjYM8RYquaDjMy8PQ7OBq1%2BFiI6fJHVpT%2BjmM65yf4iQWoIGU8FjF8%2FGo%2B1JlB0sADEOCwbHErPiatj0XfJ0k2w%2B7MKfvRGKvBcAoV8MBZ04lurDUvHPghiRy%2FnIvbvHCdgC%2FxpMlgtLJeyBW783pqa14hzJPGe%2FwHJLCuk7D7vfbZ69ggS&X-Amz-Signature=ef12aa7c092c3ff268b211face345331c510c34edeab5f934ac77d3aa4bb5179&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
