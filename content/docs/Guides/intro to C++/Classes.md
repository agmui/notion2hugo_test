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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TGKCHAIH%2F20250208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250208T140113Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJIMEYCIQDOLK8FgXqgxIBH7KjARC42W8f4Mb%2BGvBXTeYOeElZcxQIhAIZVN2cZDX9POXMpyqt%2FMlwwBEM9MU6dWiG0a3fwP33VKogECI3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igya8fgo7JU1mdZveDoq3ANfZJT%2BJml39PkcV4R5t7Yzubw9srFuq0%2FVdss9pbvai4aMebE7IAkrhvAh2R8vVj9hT%2BGPuSiboOnGzafNzGm5q6rJdMQxpw1lt6vzFODX3JydY3umApRW%2FzxKMuv2UHeHZA%2BDNu4aa4iQPsr3Lxty%2FJ4RBZREt2jWQnxV0fPIdZJMHp3ra8ijIj3Pjq1TcprqqTbC3rhP727HwDH1lSN6g56vafPOLvxik10nQ%2FDyeGZ9boCmbxmTrF%2B9p717nkNAV6stIemuuWVcKcyuClxDSLbM9q85iJy1B3TZwjRjD2sJjyidI7E8kpMAsWnBiOZDBgy%2BX8eZesUeD7ajAFFDVFjq8vBi%2Fl%2Fz0VLEQwDdfnlzU0%2B%2BZ%2FdSZ0VQB%2FAZCDfn9ncmeJLkJa6veM7aQ8tMKVbveOwQL4L2i0t3Wu6%2B%2FX7j1cwiQFGj7bRfP7XtUMHE1hxmxHK0Ym8AfbiN3%2BnPg%2FK0x8d8a1%2FqM%2FMJh6Nna%2B7eexK8YHios04COC68mgMxfUIW6g9gPcaGDjovjKcfEAC6Ja1EglN%2BiqJ6NGJAPnAYwoVP4SbOZkZVKbwwY4jfLlKgpQsJvjyZxPyO9%2Bh3NpW2VwcGACaZagGO9OrychIR6ULigHRoH6QCkjD5hp29BjqkAR20aWsHvlWiLXZGZhypeIiqJk2pjKo%2FoKZjzVX9FQnVn2YRyCee%2B1yOD6ZpEnaoTZosFIesOBKwuFi5t2NDCyBQxzsuGhN7DzM%2Fhgs3V18efR%2Fv6pveqGKcuTHy8rML36gDpWICrLP1H9v9j92FLEBKw8chO3s5jM6oQl3dT7z7oS%2FE%2FS97Wc8s72RWAVrqclWjUvSSSrmr%2F7WPFUcVZRqW%2FPky&X-Amz-Signature=83aebce50eb55b56b22cc2d7697d3b9ce5ebe6952cbf89b137af1dfa4720b361&X-Amz-SignedHeaders=host&x-id=GetObject)

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
