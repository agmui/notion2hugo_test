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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TPPAZWPN%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T190737Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCFrSXB4veDTLDiB9cQHDo2aR1LaZaPITCmsswOoZAKJwIgOiXCyUU8iJPP7X0MuCGkbEORXyy7OiXI%2BbC1TXF3D70q%2FwMIMxAAGgw2Mzc0MjMxODM4MDUiDCxWER6gebeU2Tva2yrcA%2BG1wWoFUMooB6UqaALDhDwHXJlACzuZiEFYdmKd4ADLLMqZt0sNhZxITdZzXwSJfCdO%2Fw3pHz70OQ3I2EcGz2wh41DJsvXhLlcaPiuZfMRVVEqG7AeHhXF5UDcRTbo4RznVk66YAq8IYDxXblUcO7iDdHSsXXNjPXhWf7lFzUr8%2BewnGo%2Brab1sPsjyusholMBhLWrvQRr7kakcIgA7MihZQBxE0GZM0UhVc6KXFi2DXON3lt2UM9DhesMI7sDOAPo5yfETOTgj1Bm71x6UHSuetP2628e5p658lM6hVVjNWckZeQxo8dy1BKfkdi5V40jks8iMXQAwhEQza6nzFw4VJIyeAlBBCwdgIwa5w9sekxaU6G3ynXnVKb3i2UnwZGn7Z0qcIVfaWx7vd1HZNrR4DKTJyQul9SL82IRYKK6oPnsVU%2BM8em7xDtJUyHIV9werMliVS0Frirw77o5WQgBOTci9%2F58PytlW3oblPk0Fj9l2KW6KlFZNSLOmPPh%2BKcuVEemm1kx6kCFPZlapRdk0ynkGcKtj2WjItpW7thQYMrYPxOpblg%2F8cYl4c5cBwOulb1iixfg69iYDwiZwXCBJ%2FavSAg5YGZFruN9QMMNGXQvfvLfMGHn4p5HdMM6f88QGOqUBHTd3kjjN1PzOMSf6mGZjY0eQg8svmCeUUYaF70FWIBdPZz%2ByfzN0H2ue%2BkqWsEKpZqRja0Pt5Mv7JBJ%2Bkv6ivgmlGb8AVSPraOp67Xz843B1DAlnjtdvx8kWhomoGUkxFdjfAp9oyv9%2FWkKULbkgNqJiMaQtrQvIVknvZe74jNNu%2F0D%2F%2B7u7gQhRuEx4N3NgCuvKh%2BtoGV6sqOJTAPvl6gXZFYvS&X-Amz-Signature=5964d22ad4a10a8524823ee763c05b8a9d705b869561b724955f6b8530cbed56&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
