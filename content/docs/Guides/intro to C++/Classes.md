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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WRKGUIFF%2F20250208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250208T131021Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJHMEUCIFSzIzCJhH9ys6XKUGjwFv5rb58Q99to%2FrjdzdL9CF5vAiEAmocBt91Rhg0R%2BtxgBF37PC1vvYRjnfYFbcHKlo%2FWIfEqiAQIjf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIhn%2BzWWTCHbJlHzDSrcA%2FOcOr9tK8eGAyZlVDjUBknSFA0Qym65iYTNyjw5ZMKI3nNhQaE0T%2BOlEnN4U8pRaO8HOTHPORs1xQuBmSGLuaDS66UePpiqj2dGCkVam9QZLMJBe1K4fXP9hrFmD2jIUoC8ZzSR5I6UZ3Drs3Iq64R9wy7x6EBfQgOl27JNelxyNC682jT83u2k6KBh13oX%2F7Wo1gIb7MMYuMwNsrE3QNWZekcwZxrCrBKOOEMJcOok74hoJbT5JfTgr4HHxaSo5Y%2F3lqkzQfmZ0%2FzeKIbC5z1Vqklba5zIKrlRRzGswHYUsBoJ2zVV9C1x%2FhpsH%2FFsM419zP6ivvD6gtdR%2FMj3xVCQW8eg69ExzrtGLGzYQAZHG2SHD7xnZshm5KdekAgLunCil0VMdSY4cUMgMNhNhr0wX1sr3JgtPjM3NrXc6Th0L5i%2B8%2BR3fIkazZSLLqlNuRImHPXFvb67WHH61Ld%2FgLi5YQqX5j%2BX37eygs%2FHFvafbNvlvB%2FgGS82t3iqnEBIX6FpuN5G9%2FNa0EqpubJnT7%2F3ZW7VI4BYDowhZDnO93tOI8O6aSTQkUQRzKeHrHs6wxbGH%2FmxwH08f0QjJQzIaXWg24YabvpQY204v54bpo%2FzSgHl%2FQ%2BtYUPA6LXPMPCGnb0GOqUB3aciwbQg28DGq4ewrDjHIdc%2FE4wb%2BvEawchMqvD80a%2BO%2BHMNKPtNBt5TDOtpX%2BDHyzEh80893%2BVo0mFJo7FgdI0p7iEbvooCQsRYo5W9hx5Iukz0WdWOjoTV9uSx9GkmLW9enaMlkYGejygZ5MwAtUq23ysrtZwubdpB33BECa7ywpG3DSebRxpD89cQyroKgUHxZ6A6SWosslx06CNf83qpyqBQ&X-Amz-Signature=69aa07fdfa71ee96db7523b5b3f414357c40a77d167f3b5db89adf530f96ca3b&X-Amz-SignedHeaders=host&x-id=GetObject)

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
