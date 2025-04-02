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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VOEQKTRU%2F20250402%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250402T090911Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJHMEUCIFHCn%2FOijuMsMWNn3CTLOJrliiIyOqV%2B9RLTa3pHvlPRAiEAo9fIHFn%2BOnBpMDdbQJcvKLOlM1%2FTjhPv%2FHXF7vc4vB4qiAQI0f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMZPJY1tWYE3K6GPDSrcAy23FGgBAQx5Dwhpc%2FwbZ5zSlzjIIHuLkmJqaQS2EI2jYA8ON8tAb8Cii7GQ8y8N9cByK706BnMwu15ly7D%2FJW7Yiz3xeaYo7V%2FADAN5PvWsRa0ifB%2F2%2Fs9Fs3p9g1ALEage2BG5LSk3vWsc69pmnK89cBF3LR9Z8AOekO4FD5Io2Ca8ALvVz%2BvWGHgBYrGhN6DrlTqubMOufPNZeMNXlhC17WtucPcWNXAE%2FLWNSWBnEtpBol0fZmgqnaMl5V8%2B0tgE3OXxZF01FPEocq5xmPUv0%2Fb6%2FGF24CLKa6DwLw35V75frjqy2GW8btOEGvZuJZ5%2BftE7v7jjQ9zWaKe62fXitZor0IhtVrQCEtoJTf61CDUNxKzWi%2FGL6MNjvUHjdhf4iXv8B4QdzTYKmZWRAKXw12L2R4d%2B5SmvGk10e1GeW3OOezI3wluXHQdeAEjnrINEnfoqyWVbsgdLkHuNt3ze81QQVdTQus1%2FuFf7ezJEuDw7DpM%2BFXmQ8B8BxYzikdJAwsZIXogLmIJfb4vs8htrSAVxkcKw3Ecdi4kTTUumRS1OujUCTKgqj8scICHMKY58nlNL1Wm%2B%2BRHbn7wg9O1IjzoL4ZkTubJDaoXr0SVxEkWwSFA3Tazul%2BmRMNbos78GOqUB522kZCwc9drKVGo%2BOfcRuMS2rIbc%2FHbQcZpvJreSFJU5sV3NVR5CNZVtQxzcivyt5szuMdg%2Fyz34mQJcQTmgU2jBHeoBmtxtlfMOLgolyMCqXNNj2Z5omagCB5AvLXmKV5SIIvwShudi01bfcAbSrZPKIIM4R719p90XAiH6w7pRZ984sEJFTf5a8fYw8O58n2o3QimnPAgpMK73DX8kIAx59eGZ&X-Amz-Signature=9db9a8350e94b4c1f8978c89746e1138e76fa9363bfeda5bc2226b2b3d23ba09&X-Amz-SignedHeaders=host&x-id=GetObject)

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
