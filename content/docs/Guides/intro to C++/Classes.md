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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YNVYAMWG%2F20250427%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250427T050814Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHl7LBj4FSv2apCZI3YHsoHlSIREd841bWTHay9kNypQAiEAsYPtTZSXIyZtqdhT7vBdvrja%2Bs4UfCOIC1qV0IBQZ8wq%2FwMIVhAAGgw2Mzc0MjMxODM4MDUiDNpdX%2F4IEtLqDhW%2FVircA4zcjxdl%2BYXnxhYKoKQA1H8W0Hso6F%2BaDAXwNFbdWpaPT5c4psJZKgIQMvoKA2gJMTHUO9qcvfMd%2BAGJQn8d6QidK1YIF9abxy0%2FvMhyVEmySGEhfuWqXCCTusuRqtiCYYQMNwG2T6TciYfS3IqgkUO0wKYycd%2BuEQCbseNfDHAR15%2B3LlJho%2FGib6f5jbCpLBFEEXIy24hGrsnQZDBppLOmYVErGCLyqC1uQg5D8ltb8IpykZRgB0O2eNaA%2BdK8RZJY0xIWgivnZNYEefhURRSZl3z3sC7PjRFHtcQPaHo0chCvjfpHnKDYFPJ3rAuRwz%2BzNDBEzBg%2B2H2LFjPQIqic5Wa4Fxm%2Fi2wuUcwPtelSG5RM9xT58lrFetyYM5ZCXBQ%2F1x3zlkrqROTMkaJ0Qg%2FDPf16hwNuwHPfIlQSI6xCaKoSPxxl3DFa4ftJ%2FRYZcspc%2FMslbuNHWsJe8dwQM3Py6F89x5f3mL07lO8ZvZm02E5lvR%2FZ8D0sD%2F%2F2k0MJER%2Bo2IROzFQq6uX7C9zOFvbcAEAWgQdwJV3tU9r20a1lBhix6i9%2FmNY2uDuN788g8k5kGAuFFB2KMaXJLS7untE%2BSwoUfSfaDqigKNA2ScK6zNLTuEjMnCW8ESVLMPvstsAGOqUBdZulfFUVGXyah%2BeHCjxj%2FZBH5EFwZaqGdrGg1UsxkrVuH%2BjWvtinGkdICAXr667MzvMvXOSJ3u0lT7fRfqAmvcxwQKlV%2FkfmqkdqOOcNmM5E6OiozuU6X1v87GonrrSyxZt6HjXTb%2BTQt%2FEeCJkknavbj0xKF2wk9b6Rk5q23xpFaem%2FS%2BuxwQqXjr%2FoyFIbFGLAv5Gqy4%2BXbPZ2yNkuY29vPjpB&X-Amz-Signature=02e4da03d27645215b2bf757defea1b8a10c579e1fa26daa4a2ed36a2a625d4d&X-Amz-SignedHeaders=host&x-id=GetObject)

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
