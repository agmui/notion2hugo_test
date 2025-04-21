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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SRXEYJGE%2F20250421%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250421T022621Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECYaCXVzLXdlc3QtMiJGMEQCIEcWBm3qawKeZBRZ90lMjynuGOcsdFFQ1c0oMhegp4IcAiB225u4cik1c3Ttv6PkcCmXuIXBJzKqbC55gZ4rg%2B%2FzUyqIBAiv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM%2BL2n1kD92ViKVEHQKtwDqSzQoNHFWx6kr1mgWh3FtSvn3td9y3PDydKGbbCwj1LYbJd5vV1pjcXNsc30xxYUIw58iLOQ33Nb4x1bvCosqOVGjkyqPRRuQGb3CJDGJF1TVMF3K7F8l03LCJ7NDCOquJzx9jIGhtACSoJ9cd%2BGB8DxjTipFS9qqortCnsOE9b207IqY0wj2UeiUhOR9v622sKxRlAKEGcQWvCx27Lr7FBCXpWSiE8V35ejaq2ai8GZ83UmM9JLGq5i2ZroT7QIFF2qIY%2FMc37fonXw%2FdsMPxosNP83%2FQeR3iiPh6w7OFCjASsPpYAD7tvsfXyalz5YQRATEk57PZecJGOCff0nyt6ZlB540wcssSX1bRCBilF7Yjuq9yVM8lmlzx3phV8hAOzm70sxlDKTMQ5J70mGoV%2B%2FQ4WKWRM7u5dbYoeOJcQw4aVIPPWKReeJFsO1h2mlnc3fTrtG7OOXONxVumxh9TnDR7gOnu1VKvEUVlkmJkRZf9kkSHHBaZlmwXPidS%2FeFMhH9YB2LhU7cfcX1d5%2BEuhqUHxgBRColrx6tfqoQyTKmcNkQ69kRov81Cn6uqsCLaGQ73yTgizkk7999%2F4XRK%2BQMcldYLDSGLhd6Vf%2FdeMpSf4rx7Wupk1cagYw2tuVwAY6pgHhN28fdR%2F0lOdip4BObNXmWaJFisjmKKXkBycvSqzIUIzvVRYYQ0JothIAQlGjKXjf0wXib7IWM24ExC8BzI8oI%2Fam0kTipkheQh340jXg1qbsmFJLhJEhu6AQHnp%2FG4Hozh%2B5lmXG0WlFM%2BqGP%2BsHLHg7Qwcz3HKqmikXeSV%2B%2Fu%2BejtLFjshz4N7w12QbhbCu8kpiptZdNVUm0Dr4EKnU5%2BHOfDop&X-Amz-Signature=ff4ab83f9019f5ca6b2d9aac1a92c0f51984c6eb87e537907e216e1105bcd869&X-Amz-SignedHeaders=host&x-id=GetObject)

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
