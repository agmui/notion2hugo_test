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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667F3XPM5L%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T081358Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDxFptzH7F09NDDAzq8xqL%2BjGtcwAiVOJv31RywHTIonQIgeBZX5HREYI8kCKIWDdaJficnlj7ndSv4qH%2BRLng4a%2BAqiAQIuP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEZkixrt6n3T5QXlKSrcA1RKQK01ETXtk9wZ2nUiIeuYh%2BQJUTvLbiPPiCVIIrWkELBjd2LuXR6N4fUE5bbyuLi3%2FuPU0h7WxL8Mpi0mJWhPVuD9mRFAsaYAFBdrAswCeEXEgF6vxd92oK8A1lcx2yzpuoxzEfA%2BI6gptLXA971otFlVozGmWC3xUYuinNaJnym0IQGGUjHmj0EqW7IcFFTpITtc59n22edCzTMHMzuRiAsWsLhhAAbgsZ8LwYYtcClwwoXbsCmlz0%2FS%2Bl%2B9EyICm4X9BYCn3yXVZlQbmkLQHvLucYU1KmHv%2FVK3NPCdEsDTmxW3wsk1SKNXFeB8ksm3NgA4TEd4fzrKSaUr6bxZjFK96nAcvgTf8N4G%2FFo2XF9RdXMWFsQ4Gua1%2FmqaB%2BrNn07acuvDu9vLO1pC72TmO%2BLzskUFYTpSqaKsl8USikM5klvm4KUYTvJnCSIYClSEDJNLXTEAKwFYVTT3ZkPxZTJGoknZFMKSpkujSzdzVEMmjqtdj5oI99IvdMGFney84aXETeGlc5DujMGwsdKevzWFbPs2uZXsgkwr3eKucwHi%2FNH2lDPqNd4w%2BANE%2BqQYOu28EByzLwg%2FYfVly7ZxWx9fAKmMoW0afUK13ZmawXgJbjGxGkzzhzhXMOONp8QGOqUBrZOz6Vdc3hJmQiFTM2jkzsoLrL6q7NItcEUEwL%2BBqS%2FowU2Ep7vQ659H7wNlWBuhk36dpc5NqwKJbGmWqhWbaT1XD1CAQQCIl%2Fp5vFGlqUjriU%2BKyeA1khNjAFN0YKEGBi7xGvl1hn6TVqR48NBziJcSQ%2BwFuXDQVywnD%2FHUh%2Fb3QYbmxeWf0%2FqWqN6DWiOmuyGEru0Jdr5b1j7fFWfOjPshCO44&X-Amz-Signature=952ed1eb3ad8eac2b317fea2d8ef668c8c9c5ad392c6b4f236b27a7f1177cf9f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
