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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46675VEMTOV%2F20250303%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250303T061258Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGvcyjKo7Eygx0tXmpPs7RT4g5QwJs9%2B6ZLy1K5fWFbKAiEA6Pet4b4H3jzwvnZuz5Wlpnnk%2BVIT%2FG%2BCchspLoANHqYqiAQIzv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLUWKqJT7YfJqsaxRSrcA3m17UNF3DHuS3dqroSfrwEGUKmNKHWc0ymk53FWG49lhkmQ3IELbswAYPiYsVdfWk9Wyrv858lTKjF9QLjVf22kqRHulFFzP8QyQZIElqemsDY2A6Mzup2%2FbElhOJHsbKt1SGiNB0fxXH87bDUj3uKd%2FE2N0eJh%2FZtV42vcSUsmPKMa2a7DE6NHXY6xHQ3BNeIIY4OyJOupDTyxwQ3n%2Flo5Jj9GzAQTCOz8L58dpv%2Fy6x2zZX0mWtGeKwfsYthYvbJL7EoNXpaEmLiWgyy64zgJLeQCiaxqV0hDfwYNxljD0gSP2nQE8pGCroLWrJR6gmcbFhfoktpDnIsPJlw%2F5fIW1pXJUP1E9iTThNmO1uVE8zX4Pe0aR5BxelUSFWQ8jaBq2oI9BxSdPNj4TOQFL9rL%2F8iNG%2FqJg5ElgW3Rxn%2BKkeesrclpSnAp%2FEOCzZn08Y%2FPaNkArt5PrJhcrGIX7we5dhWxKPUiEdMbDTLnkF6lKxyXjowatrJc5FFt%2Fivyb0HCS8FthbUCh5eejq0hKB44VuQR5d0Uy7wH3KBaPiH%2FpeCXgt4uMVz7PH0P%2F6%2FSlkyW7czViE6f4HU0lpZcTuRI2XBIAKcWwXj52hmY5KWpJMq2%2BOgnHkQh%2FMo3MLv4lL4GOqUBeIIoSvteyi4TSROHdA2NRMknIyzAs5fdSBa%2FyIUfUb5SftEAEKuh%2BkbCiKHU3QsKvS%2F1%2Bjar573vhUA888sA5u9NnvsDyT5utMQZo29hnFtw6qDU6aWUsQKGgh%2FZNIXr8Mn5VXfWJdn2uLG1lRekvNVSDaCYQvoBASRu%2B7F1HjCCyzJYpmCt49rgUEIfqAfwd9jLOiDzrp1Clh%2BTJIBFLxsd37bV&X-Amz-Signature=ee333049481623b193d143835f4666b50fa3f55f375a3fc6de7bf3cecfa3e605&X-Amz-SignedHeaders=host&x-id=GetObject)

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
