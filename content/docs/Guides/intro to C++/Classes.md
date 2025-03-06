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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665KKZWUTP%2F20250306%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250306T110658Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGtXiLLVA3I306AcFBz862JhViMe%2FlfnUD08MeM9Tg%2F1AiB45geliLQSaz5KfxYMAOa0jyljTECq138RDcI6CeM3bSr%2FAwgsEAAaDDYzNzQyMzE4MzgwNSIMC0PMcYdeiao%2Bg9u7KtwDReGot%2FOMVr72r0j9EXbqv%2FqtORRfJzACP3NXbgVwjsmHDV1FaFn2cm6CroxC6EavN1yeyhWW3lKfujkl4VZ098xey6fFzR%2BSxeV6aH7LUyaju4VJOy2XhLv5zdT7iXUbDXIrkLPvfgUuWSHwT2FJCEBAnudhTUzgMIeDC2Zo7nOYrnM4hizisPTIy5FCr%2Fvhl7PzHISHQa5QfJzzLt64tmImER67dmZEfdDpAgE6GsP0J6vXd2HJkWdW97w3AQ8Lo0Xd%2BE9a%2BJ8ypvMop53K3nM9tRu7lkW96jvLMzsOGioVINznP3b%2FNjEZX6kGqAyFvuuCj8JzyG9Ail8pY0FxaW%2BbUdlKF3NcF8gJcw0ykvM6LhS6i5IVLLpFvauyNMHZOFtTOM%2BZOSJBFUw9OgUOzh4c9cAYXFTYZ8oIhXVZJEATmtyYxLdpC50xcN%2Fn%2FxQh9vmLQuVnba5BmggWWLoqcC1gt2giT7UYvb88P%2BKovGfc%2B%2BPYKurgOpBLz9CjebQIEd1prDix3hIG171fbV3L6B6A3fgVhtKPZ9aGwBEGh4VwaD%2BxiuKWofU2CvCWL9e9jxNM1Wek7vaA%2BRIP4sqQdrrdZQcdVsHT5GCoXkOfyADaPYkqW12rVNhVdZ8w4%2FKlvgY6pgHDT5bnTok8FbIQEt9REU8D3wHluDB4dMf25weG3h3raKGAF3UxPdxqz8BJRoWZOZw1dzewRojGBhZ0QuXaDezXqt1r0Y45ugCQc%2FIKPYbLJG1eMaWGdwnhD%2F67WsBqWObuYQWj%2BKcUpGwXCgDRxqDyqFovljzxDEXA7eCDBgGNKuVZ1rcb70Ndv2KIIJL9eWdyvBdpZoPXkvw3OCgCXe10ZTTQ%2FI60&X-Amz-Signature=15d736b23c5f35a5b052e0cd10c6a60b78337c36f73d0d71f0f859881b13e070&X-Amz-SignedHeaders=host&x-id=GetObject)

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
