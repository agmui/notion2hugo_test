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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SCFTO4C6%2F20250202%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250202T040831Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBc%2Fc6P1MKTVfgWRuVF1Vm%2BQb42rn%2F95thp5fQ3d%2BoC8AiEAiPdzj%2BAYTDc2%2BHFHZpagOx421YcUXaobkouh9kuCZcAqiAQI5P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOVOI%2BF4kn6BifGlVCrcA16DFO8wbPu6u6z4vOyHsUCL2wOSgqObkZvf6OW5vxIGQpEr%2FjdVyNyPuoeaouPRS02vCSXWlBzJtYwaZE3OjhKcjotlcA%2FsUmLOiOJxlIA2gAdEjq2rUTKVtH%2BNYbt%2B%2BMdN2UpB%2FtoYcfJ01A9kvoMhblNE5DKanAu5AOqyKzXQ59%2B66YjiodFyKTDpN7OWf2A4Ifj5SB3Oh7QAS71DqGWXG9IKmEAQhJLj8sS8ugB6PbRlbkV0m8jAw4bT4Hwmi35GlJyXiLKomBHT84BU5d0UoRxutnwt7BDGnQJehB6E%2FVnBzF1sjXmPz8zmAhQwsTG4vAbaZ%2F07wdm7ZtTbW%2B0Dhdl7qI1caHmEfdJ3biL7Mgwrq9JLlU1pY31DNOaaSy7pJyARiUfBdiTFmaHx1HRLA7gUL%2Byhnfcb93uoQCIub6O4Zv%2FPuG3WPsG22izZtQd3x3QMtzpjq3p3ctcwq%2FGa9R1TzTj0F%2BleruVc968%2BDunrj5mXGaFdQWcStD5CbFHN45Zd3U5NErqoMRFxgUFK8vQqheWElOgNo%2FUsGkjLZbaFwVqyZW%2Fmw4DY4y6yQZznTe1HdhOKBjR9%2FxtrOzY8lHAWK1X0uRqI%2FCOERQJeh6T%2BxZ%2Bq328mAbqgMPu8%2B7wGOqUBZK7LX7WfGYEddNVlikI%2B35bzAgH6tYt9F4jwA77o6Ev81UoWdbkbY9KNQj4tVbvUyW4vqkCv2RoWJdWkiA7iwzmJ3U6xuNgYO8%2BGfpppKsb2Yj4Xm4jBmhnuK%2FNSvx0Yao%2B0oJitzG%2FMXaFTel1O3x%2F0ufeublnaj9QkJfQ2mwBXRnHfwU7pltF4UIvyf9uTT16ury1coZEHUXLBk%2Bt7IrI7esXO&X-Amz-Signature=f0d3007ccb836222384b3211b43a21ac6ddf9422a58bf85518a982d43f6b7907&X-Amz-SignedHeaders=host&x-id=GetObject)

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
