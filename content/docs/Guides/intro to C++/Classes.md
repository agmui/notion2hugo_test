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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664AHK37LF%2F20250515%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250515T140911Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJHMEUCIQDuDud%2BVT7wzq4vPTnB14D%2FJllR%2Bl4xWyndtI6CELBXqgIgEmBR%2BMXQStA4DNbODv0S6dAmlYhyo51s%2Ft8JvkYTqNAq%2FwMILxAAGgw2Mzc0MjMxODM4MDUiDCmSH6BRWHXu5h4fmyrcA71ffNdd20R6%2FoevY3H%2FXPxE%2Fz79tgh8kith9vAoSBDh12IR0oDoUfJHBLEI3GhGg%2B4U2i0EYsoGWJIwi7oqc9lynckI5fmN%2Fb3yOvyneY4f1VjGyQkVH2N0IwWtZuHOXyjqg46Vc1qEs8RZ85g5zFRIGpQ%2B4si0IfCCuU57e9WzQ%2BLuOMdx%2Bk5aW6Z7ajVISJYFnfrlLgFKpfxX34YjaQkMUVEEhH2BtG9gPlurLAvgq41ewMbv2bb%2Beun5UisyWzvabezqUKKWrHtv3Yq1Yc1wcKbbx5cwF%2BB9PF88kZFHbZScGqI0RYDZpnVD5stRPjXvr9nLmCMmyzAG2ngonOhuRKB29csfHOYIfWVupUQgkCYw83oUEJSgrw8lHvBjp8%2B%2BieJ2i%2BytGh7drzhH276wp5QgODpl9Sfh1pMPGH1%2FCQtWgpHnMiwZZUU4QKMAgZab7VFZyYXQSHNsfSyRIw%2FYMkEyhCBaOPdKqYLqaGIkTIgk6niJzCTFt5cLLM2HXKMOKcfURkqMa361VkMiope6DKFhKskUqa7dYMkcFU%2BJVxaiTwhqxA3iu6iiafA%2Bi7hir2bLNKBizlmeu0x3FuB%2Bvzq4EO1i2mZLUTkxLSnfZVEZWDLCdPdTHoKtMJPWl8EGOqUBINGztFzsaFK72R7zTMe0FERvb8jTZdXXPgrnvABjjXSzWfvYsndtsbLyLQMsHV6aFQVTY0GNQ%2FEf56ldSVNVXMRsQxeDX1n3A4NK%2B8jlDGPLIIDw9dFV4CWOtfX%2B8oovPQtBqhsqyHZRvD5GECtzsLcMJp191uJK%2FHZhnKGR6FGzpwfVMswkBrRTiVs2aW%2B1Ce4e1AyYrsvEEz9pLUoqJvfWyNG1&X-Amz-Signature=5a913f0b19815f7a5d3b0121c8684691372a6019fc3ae5d3f1c5af1754d321d5&X-Amz-SignedHeaders=host&x-id=GetObject)

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
