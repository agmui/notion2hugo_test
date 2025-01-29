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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SEIAY3XK%2F20250129%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250129T150738Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAqYhebB34lfuVTXbRK%2FBauTWRovZvbPrkdDGUGKo1z3AiEAqmNhdnKWfHbEYnoLsAWswhRDZ6Ppt5hAIYTSEQ8zPpoqiAQIkP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDE0tiHsO11fawxwjASrcA88gXCE2TlvLL5kyck6al6KmQXKmQmd4rrBGBWDC0LsTZm9PqBi%2B6ElxWgQhrrBTo46Omf1fWkvwvA5m7OGg9iM6Q0dRk3FIxzMkiRzEdw9W1vya0LRQhq33Q0u5crx%2FVkV8qMe3CA8sN05k86NI8k3OS0zFTiFKsxlyBLEHP58GWCsblKafWiOTDqi7bjxJqK43PicaKb%2F2IOSQmBnkeKf3ghXgw9ToMq0Zjx4e8tkahyt3WI9vCjyXmSYU8UGA4bB7QBA6dVBEZNSfD3OYNhR%2B4JM4fr25gIP8%2FTOMFolxecMIEVr%2BqrccJV1z%2BxNwu9cionk%2BTc4LeX3jPt7V810h7nhFNcP74kARYydso9JDbrNje8NI0mx7gIDu2B6%2BwfufxYq08nrPgvRic%2BGuhzfx4kjcsFuOluX1%2F4Msj6IlJQFlx79g43tVZsAX6gA33Idnr1z0KCVi28g2XVsY%2BBNcmF%2FVVr3qnZLmDzAW8GfBOdTod84%2FeJN2JUcWrWwGxIiTT%2FShzMVDxMSekyIVfctJjSbKAzDTXvchsuPx98y8NSE8AfWaTTyiegOMfsO%2BoLJf%2BL2jLQ87tuXHv2zUmA5tCAmpwZygD%2FFkdTw9Fx4L%2FV%2BDHHg3lrsFyejtMJOF6bwGOqUB8u120WM8%2FzEISl1fpIcl0VizcKsviHG6rL8y%2B74JZHygBDlcr6Eg%2FHhtapAGTwcJrogI4xkZkpNLAZHcE%2BpxFMEpSVootZXSsCAY0gwMpIE54QxBRGEsDptZJSy6%2FnHZ13KdG721LPTQYgan2YZRFFooboJa9X0xi2LF5JRPU03pGUElnBfohiLoZCTloGV0XFuYgPm1%2FVe9u7y4Tjf1ARuBSjWY&X-Amz-Signature=47cf2e057d85c98eb5cf3053dd8c68721c5f8600ea1f9402954cf1f21742edf2&X-Amz-SignedHeaders=host&x-id=GetObject)

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
