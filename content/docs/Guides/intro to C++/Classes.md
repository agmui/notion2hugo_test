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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QORK3OES%2F20250520%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250520T004225Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCSyb8cFMDz8iXQqYZgevPSFbNHMcBWWvvxeVXAYmmUYAIhAOp44QmmkEceA0FmOQEqLQu0kc8WiIWmTpC538nTtmnMKogECJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgylJozBLZWBccrj%2F%2BYq3ANPnMavSfbF22XTsQi4dpiJqPkdxdtt0ouDM%2BOratSd2U%2B6w7NjnzyvH4HIGDe%2BC%2BvKUefreXEft%2F5XlGG8qMAka%2FtITrsDPs3Oeb%2FpN%2BQ97pUpi0vDwsyInXSi9%2F1%2BrUTAsp2n%2BhXXk4t0fCJ2aW6dC1KN0pAbwoGKtHYrLwcV8%2BO5PLl6%2BUbylDOdE%2FVzAWk4OEk%2F2A365EpJ%2ByTiR%2B47IV%2BYJrfFeHpmL7%2BoB1Y%2FpFy5od%2FmjNbx33U1oJUHncDtBtNT%2FaTK5gb6tUcdxNaFX1OKo85mgRSdIOU2%2B%2FqkOg%2BeyJnovBY7VkxRb%2FFcEqEa6ypumQUulJYsA6fZQa%2BhTNlcdtkYEs0VsDO0q6ocetw847dMcsB3%2FbjbDhAWZEf097ScXbudMTwOtsWvzMgW15o79XLJ7cFd21bnUYQtfz4HMFVPxTR%2Fp2Lw0rhNKA30z%2FgsXSyP2G1jtHgr7%2BE4%2FntsTT%2BCf0RF0Zpfa9RMnC%2Fbwd4bv5OTTj83CRy8SyyOgLGprGcJQDynx9pWt%2FZgfMLg%2BZTf4PBqy5YOxqwx9rkYHA1bbOUX7qTQL0neOoH09OguhZ5kBiviNT30UVPFxXNfkpTbPmub%2BYNUtZkUjt%2BsXTEY73wZJNjdADCPm6%2FBBjqkAT6yEZ9YqXxBV1i3Dx%2BFOoHE2W5QFE6H9bJi3Vv2nLlq25fF7AWyKf59YRQiYTWyhUqNqRCz9PvSZyXpDm6UeiJYieKcUqCcdYmzfkTWFPbKv8zx%2BCjzxRR1QjBBlaHGPlt42fwV%2FC5rwY9aKkYuH7tLfb2%2BLtiuXl5S9j20CLM9abY2xOm%2F1fxZMXlK4FiSGvTgAZXjrkiTaCb5UpM6r5t6uBUk&X-Amz-Signature=b3513768b832fdf66e9aa68bd02b6c525828fd40ac3d7984cfa615957c22814c&X-Amz-SignedHeaders=host&x-id=GetObject)

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
