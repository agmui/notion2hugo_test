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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665T2WA4UB%2F20250609%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250609T150926Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDgpzWK4k5f1Pa7tQZwNAotmDV2bVG1ciKZVkfuHsokbgIhAO5M9laIHMDA99It07TPslOSzK7KldIwGXGP2mYRnUsPKogECKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzkmY0BmvI6Q9YCVMwq3ANplgDbXrzE5Lw4H8odyIEn6fbixCdAJSAfdjAyLHWNSScydoFmCukQBMg5ag7q6yGlmZcX1O4UNSeB5ZV2TFu%2FpARkkbrG%2FS3i2KqoHkwUium%2B1UsfOVUqAxLzknWMiomTcaLIl%2F%2BIf6Jh25qqzfFd%2BaG24%2FQ%2Ff%2FyUixtQeYHyvVaR2zdCbBV4hyPFmklGOFg7ke8Bt61zEtM08kWb9eKaTV2DkMV%2Fsyixu2upBKfSLFifXPgYgZMe%2FvmhUcbjxFz3UZ1I3g5ubRqZAWFOLb%2Feg5v8nM5V4jc4YT%2FekaCOMk0%2FfNBv%2F8%2FhNiefDY2fMiyK6X%2BdR18dQbZLXtYBgygCJcQkVfmkOk%2BBgP%2Bem5F%2FaycNnSWvz7pShsHSTxo0mbTM88nKtYcTYWdE2VXR1cakyS7fINShn0ZIbPhA29u9PCaVY3oZhB2vy74%2BdTRwpC0xFtRdyAB6HlPxe1xrNXhL8Hz7yXhE7DL0lYcHxAjlXXs3Kmhr7%2F%2BC8aZ5QdmdGkWggr7d1u%2BeqH8FBP2jfqpwrnfvrMpw7uSSbzenW1%2FI7oP%2BDmXQUCRwavmtOa6yqi%2FWpdNNu2YZIiIZavbW%2FqWdVbUTWg%2FlFbaBJe6d%2Fbyn982viZ0Ssv83rL8M9jCR1pvCBjqkAdsHfwBbi4S221w0bfqu5pqPiLrd9NKD2ZGiP4Fcvw5qSa9jk1vDJ2jd%2B1ne7TfpXi3RAfpSqkmj2waItBIAmGGWs69Z%2FFdZoafrh%2BC3JSx%2FXHxEgIWUljNPsjO5o7cYpoZ6VLGFHjlcVs6COGusqVIewNOavTePmOOMCIh5lfHL3VuolzaRnoFonRvIWe03%2BXXcGWzZmj%2BTxKa8lGnpry1NuUpC&X-Amz-Signature=454b3662d8a595bf50d17a06130254998be4b1d194952c861b99f8744254d10d&X-Amz-SignedHeaders=host&x-id=GetObject)

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
